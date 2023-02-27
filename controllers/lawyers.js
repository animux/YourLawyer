const Lawyer = require('../models/lawyers.model');

exports.fetchLawyers = async (request, response, next) => {
  const lawyers = await Lawyer.find();
  return response.status(200).json(lawyers)
}