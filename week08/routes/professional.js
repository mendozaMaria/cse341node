const express = require('express');

const professionalController = require('../controllers/professional');

const router = express.Router();

// GET
router.get('/', professionalController.getPost);

module.exports = router;
