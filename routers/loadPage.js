const express = require('express');
const router = express.Router()
const loadController = require('../controllers/loadPage.js')

router.get('/', loadController.loadPage);

module.exports = router;