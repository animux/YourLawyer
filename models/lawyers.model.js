const mongoose = require('mongoose');

const LawyerSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Please provide the lawyer name'] },
  about: { type: String, required: [true, 'Please provide lawyer info'] },
  lawyer_type: { type: String, required: [true, 'Please provide lawyer type'] },
  appointmentFee: { type: Number, required: [true, 'Please provide the appointment fee']},
  data_of_birth: { type: String, required: [true, 'Please provide lawyer date of birth'] },
  nationality: { type: String, required: [true, 'Please provide lawyer nationality'] },
  education: [{ 
    degree: { type: String, required: [true, 'Please provide lawyer degree'] },
    institute: { type: String, required: [true, 'Please provide lawyer institute'] },
    subject: { type: String, required: [true, 'Please provide lawyer subject'] },
    passing_year: String
  }],
  experience: [{
    post: { type: String, required: [true, 'Please provide lawyer post'] },
    workplace: { type: String, required: [true, 'Please provide lawyer workplace'] },
    details: { type: Array, required: [true, 'Please provide lawyer experience details'] }
  }],
  languages: { type: Array, required: [true, 'Please provide at least one language'] }
})

const model = mongoose.model('lawyers', LawyerSchema)

module.exports = model;