const express = require('express');
const cors = require('cors')
const router = express.Router();

const { payment, paymentSuccess, paymentFailure, paymentIPN, paymentCancel } = require('../controllers/payment.js');

router.route('/').post(payment);
router.route('/ssl-payment-success').post(paymentSuccess)
router.route('/ssl-payment-failure').post(paymentFailure)
router.route('/ssl-payment-cancel').post(paymentCancel)
router.route('/ssl-payment-ipn').post(paymentIPN)

module.exports = router;