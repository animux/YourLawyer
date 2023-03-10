const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const ErrorResponse = require('../utils/ErrorResponse');

exports.protect = async (request, response, next) => {
  let token;

  if (request.headers.authorization && request.headers.authorization.startsWith('Bearer')) token = request.headers.authorization.split(' ')[1]

  if (!token) return next(new ErrorResponse('Not authorized to access this route', 401))

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    
    const user = await User.findById(decoded.id);

    if (!user) return next(new ErrorResponse('No user found with this id', 404))

    request.user = user;

    return next();
  } catch (error) {
    return next(new ErrorResponse('Not authorized to access this route', 401))
  }
}