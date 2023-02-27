const express = require('express');
const router = express.Router();

const { fetchLawyers } = require('../controllers/lawyers');

router.route('/').get(fetchLawyers);

module.exports = router;