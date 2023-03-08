const crypto = require('crypto')
const jwt = require('jsonwebtoken')

const User = require('../models/user.model');
const ErrorResponse = require('../utils/ErrorResponse');
const sendEmail = require('../utils/sendEmail');

exports.register = async (request, response, next) => {
  const { name, phoneNumber, email, password } = request.body

  let amount = 0;

  try {
    const user = await User.create({ name, phoneNumber, email, password, amount });

    return sendToken(user, 201, response)
  } catch (error) {
    next(error)
  }
};

exports.login = async (request, response, next) => {
  const { email, password } = request.body

  console.log(request.body)

  if (!email || !password) return next(new ErrorResponse('Please provide email or password', 400))

  try {
    const user = await User.findOne({ email }).select('+password');

    let date = new Date().getTime();

    if (user.service_expire < date) {
      user.amount = 0;
      user.tran_date = null;
      user.tran_id = null;
      user.val_id = null;
      user.service_expire = 0;

      await user.save();
    }

    if (!user) return next(new ErrorResponse('Incorrect email or password', 401))

    const isMatch = await user.matchPassword(password);

    if (!isMatch) return next(new ErrorResponse('Incorrect email or password', 401))
    
    return sendToken(user, 201, response)
  } catch (error) {
    return response.status(500).json({ success: false, error: error.message });
  }
}

exports.forgotPassword = async (request, response, next) => {
  const { email } = request.body;

  try {
    const user = await User.findOne({ email: email });

    if (!user) return next(new ErrorResponse('Email could not be sent', 404));

    const resetToken = user.getResetPasswordToken();

    console.log(`${email} - ${resetToken}`)
    await user.save();

    const resetUrl = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;

    const message = `
      <h1>You have requested a password reset</h1>
      <p>Please go to this link to reset your password</p>
      <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
    `

    try {
      await sendEmail({ to: user.email, subject: 'AskLegalX - Password Reset Request', text: message })
      response.status(200).json({ success: true, data: 'Email Sent' })
    } catch (error) {
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;

      await user.save();

      return next(new ErrorResponse('Email could not be sent', 500));
    }
  } catch (error) {
    next(error);    
  }
};

exports.resetPassword = async (request, response, next) => {
  const resetPasswordToken = crypto.createHash('sha256').update(request.params.resetToken).digest('hex');

  try {
    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() }
    });

    console.log(user);

    if (!user) return next(new ErrorResponse('Invalid reset token', 400));

    user.password = request.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    return response.status(201).json({ success: true, data: 'Password reset successfully' })
  } catch (error) {
    next(error);
  }
}

exports.getToken = async (request, response, next) => {
  const {token} = request.body

  const decoded = jwt.verify(token, process.env.TOKEN_SECRET);

  console.log('hello')

  const user = await User.findById(decoded.id)
  const newToken = user.getSignedToken();

  response.status(200).json({ success: true, newToken });
  console.log('new token sent')
}

const sendToken = (user, statusCode, response) => {
  const token = user.getSignedToken()
  response.status(statusCode).json({ success: true, token })
}