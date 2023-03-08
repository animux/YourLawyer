const SSLCommerzPayment = require('sslcommerz-lts');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid')

const User = require('../models/user.model');
const Lawyer = require('../models/lawyers.model');
const ErrorResponse = require('../utils/ErrorResponse');

const sendMail = require('../utils/sendEmail')

exports.fetchLawyers = async (request, response, next) => {
  const lawyers = await Lawyer.find();
  return response.status(200).json(lawyers)
}

exports.fetchLawyerByID = async (request, response, next) => {
  const id = request.query.id;

  if (!id) return next(new ErrorResponse('Please provide an id', 404));

  const lawyer = await Lawyer.findById(id);

  if (!lawyer) return next(new ErrorResponse('No lawyer found with that id', 404));
  
  return response.status(200).json(lawyer);
}

exports.bookLawyer = async (request, response, next) => {
  const { lawyerID, token } = request.body;
  
  const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
  
  console.log(decoded);

  const user = await User.findById(decoded.id);

  if (user.bookingAmountPaid > 0) return next(new ErrorResponse('Already has an pending appointment', 401))

  if (!user) return next(new ErrorResponse('No user found with this id', 404))

  const lawyer = await Lawyer.findById(lawyerID);

  if (!lawyer) return next(new ErrorResponse('No Lawyer found with this id', 404));

  const post_data = {
    total_amount: lawyer.appointmentFee,
    currency: 'BDT',
    tran_id: uuidv4(),
    success_url: `${process.env.BACKEND_URL}/api/lawyers/ssl-payment-success`,
    fail_url: `${process.env.BACKEND_URL}/api/lawyers/ssl-payment-failure`,
    cancel_url: `${process.env.BACKEND_URL}/api/lawyers/ssl-payment-cancel`,
    ipn_url: `${process.env.BACKEND_URL}/api/lawyers/ssl-payment-ipn`,
    shipping_method: 'Courier',
    product_name: 'Computer.',
    product_category: 'Electronic',
    product_profile: 'general',
    cus_name: user.name,
    cus_email: user.email,
    cus_add1: 'Dhaka',
    cus_add2: 'Dhaka',
    cus_city: 'Dhaka',
    cus_state: 'Dhaka',
    cus_postcode: '1000',
    cus_country: 'Bangladesh',
    cus_phone: user.phoneNumber,
    cus_fax: user.phoneNumber,
    ship_name: user.name,
    ship_add1: 'Dhaka',
    ship_add2: 'Dhaka',
    ship_city: 'Dhaka',
    ship_state: 'Dhaka',
    ship_postcode: 1000,
    ship_country: 'Bangladesh',
    multi_card_name: 'mastercard',
    value_a: token,
    value_b: lawyer.name
  };

  const sslcommer = new SSLCommerzPayment(process.env.STORE_ID, process.env.STORE_PASSWORD, false)

  sslcommer.init(post_data).then(async data => {
    if (data?.GatewayPageURL) {
      response.status(200).setHeader('Access-Control-Allow-Origin', '*').setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept").json({ success: true, url: data.GatewayPageURL})
      console.log(response.getHeaders())
    } else {
      return response.status(400).json({ message: 'SSL session was not successful' })
    }
  });

}


exports.bookAppointmentSuccess = async (request, response, next) => {
  console.log(request.body)
  const { value_a, value_b, amount, tran_date, tran_id, val_id } = request.body;

  const decoded = jwt.verify(value_a, process.env.TOKEN_SECRET);

  const user = await User.findById(decoded.id);
  const lawyer = await Lawyer.findById(value_b);

  user.lawyerName = value_b;
  user.bookingAmountPaid = amount;
  user.booking_tran_id = tran_id;
  user.booking_tran_date = tran_date;
  user.booking_val_id = val_id;

  await user.save();

  const userMessage = `
    <h1>Your booking has been confirmed</h1>
    <p>${lawyer.name} will contact you via this email regarding the date and time</p>
    <p>Amount Paid: ${amount} BDT</p>
    <br>
    <p>Thanks</p>
    <p>Your Lawyer Team</p>
  `

  const lawyerMessage = `
    <h1>You have a new appointment from ${user.name}</h1>
    <p>Email: ${user.email}</p>
    <p>Amount Paid: ${user.bookingAmountPaid}</p>
  `

  try {
    await sendMail({ to: user.email, subject: `YourLawyer - Appointment with ${lawyer.name} confirmed`, text: userMessage });
    await sendMail({ to: lawyer.email, subject: `YourLawyer - You have a new appointment`, text: lawyerMessage })
    return response.status(200).redirect(`${process.env.FRONTEND_URL}/dashboard`)
  } catch (error) {
    return next(new ErrorResponse('Email could not be sent', 500));
  }
}

exports.bookAppointmentFailure = async (request, response, next) => {
  return response.status(400).json({
    data: request.body
  })
}
exports.bookAppointmentCancel = async (request, response, next) => {
  return response.status(400).json({
    data: request.body
  })
}
exports.bookAppointmentIPN = async (request, response, next) => {
  return response.status(400).json({
    data: request.body
  })
}