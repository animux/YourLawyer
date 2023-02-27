const crypto = require('crypto');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Please provide your name'] },
  phoneNumber: { type: String, required: [true, 'Please provide your phone number'] },
  email: { type: String, required: [true, 'Please provide a valid email'], unique: true },
  amount: { type: Number, required: [true, 'Please provide the amount'] },
  password: { type: String, required: [true, 'Please provide a password'], minlength: 6, select: false },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
  tran_id: String,
  tran_date: String,
  val_id: String
}, { collection: 'user-data' });

UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) next()
 
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt)
  next()
})

UserSchema.methods.matchPassword = async function(password) {
  return await bcrypt.compare(password, this.password)
}

UserSchema.methods.getSignedToken = function() {
  let tokenExpire = ''

  if (this.amount === 0) tokenExpire = '365d';
  if (this.amount === 149) tokenExpire = '24h';
  if (this.amount === 649) tokenExpire = '7d';
  if (this.amount === 2499) tokenExpire = '30d';

  return jwt.sign({ id: this._id, amount: this.amount }, process.env.TOKEN_SECRET, { expiresIn: tokenExpire })
}

UserSchema.methods.getResetPasswordToken = function() {
  const resetToken = crypto.randomBytes(20).toString('hex');

  this.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');
  this.resetPasswordExpire = Date.now() + 10 * (60 * 1000);

  return resetToken;
}

const model = mongoose.model('UserData', UserSchema);

module.exports = model;