exports.getUserDetails = (request, response, next) => {
  response.status(200).json({ success: true, data: request.user });
}