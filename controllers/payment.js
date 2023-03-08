const SSLCommerzPayment = require('sslcommerz-lts');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid')

const User = require('../models/user.model');
const ErrorResponse = require('../utils/ErrorResponse');

exports.payment = async (request, response, next) => {
  const { totalAmount, token } = request.body;
  
  const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
  
  console.log(decoded);

  const user = await User.findById(decoded.id);

  if (!user) return next(new ErrorResponse('No user found with this id', 404))

  console.log(user);

  const service_post_data = {
    total_amount: totalAmount,
    currency: 'BDT',
    tran_id: uuidv4(),
    success_url: `${process.env.BACKEND_URL}/api/payment/ssl-payment-success`,
    fail_url: `${process.env.BACKEND_URL}/api/payment/ssl-payment-failure`,
    cancel_url: `${process.env.BACKEND_URL}/api/payment/ssl-payment-cancel`,
    ipn_url: `${process.env.BACKEND_URL}/api/payment/ssl-payment-ipn`,
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
    value_a: token
  };

  const sslcommer = new SSLCommerzPayment(process.env.STORE_ID, process.env.STORE_PASSWORD, false)

  sslcommer.init(service_post_data).then(async data => {
    if (data.GatewayPageURL) {
      response.status(200).setHeader('Access-Control-Allow-Origin', '*').setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept").json({ success: true, url: data.GatewayPageURL})
      console.log(response.getHeaders())
    } else {
      return response.status(400).json({ message: 'SSL session was not successful' })
    }
  });
}

exports.paymentSuccess = async (request, response, next) => {
  console.log(request.body)
  const { value_a, amount, tran_date, tran_id, val_id } = request.body;

  const decoded = jwt.verify(value_a, process.env.TOKEN_SECRET);

  const user = await User.findById(decoded.id);

  user.amount = amount;
  user.tran_id = tran_id;
  user.tran_date = tran_date;
  user.val_id = val_id;

  let expireDate = new Date();

  if (amount === 149) expireDate = expireDate + (24 * 60 * 60 * 1000);
  else if (amount === 649) expireDate = expireDate + (7 * 24 * 60 * 60 * 1000)
  else if (amount === 2499) expireDate = expireDate + (30 * 24 * 60 * 60 * 1000)
  
  user.service_expire = expireDate

  await user.save();

  response.setHeader('Access-Control-Allow-Origin', '*').setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")

  return response.status(200).redirect(`${process.env.FRONTEND_URL}/confirm-payment`)
}

exports.paymentFailure = async (request, response, next) => {
  return response.status(400).json({
    data: request.body
  })
}


exports.paymentCancel = async (request, response, next) => {
  return response.status(200).json({
    data: request.body
  })
}

exports.paymentIPN = async (request, response, next) => {
  return response.status(200).json({
    data: request.body
  })
}