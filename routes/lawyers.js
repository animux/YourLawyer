const express = require('express');
const router = express.Router();

const { fetchLawyers, fetchLawyerByID, bookLawyer, bookAppointmentSuccess, bookAppointmentFailure, bookAppointmentCancel, bookAppointmentIPN } = require('../controllers/lawyers');

router.route('/').get(fetchLawyers);
router.route('/get').get(fetchLawyerByID)
router.route('/book').post(bookLawyer)
router.route('/ssl-payment-success').post(bookAppointmentSuccess)
router.route('/ssl-payment-failure').post(bookAppointmentFailure)
router.route('/ssl-payment-cancel').post(bookAppointmentCancel)
router.route('/ssl-payment-ipn').post(bookAppointmentIPN)

module.exports = router;