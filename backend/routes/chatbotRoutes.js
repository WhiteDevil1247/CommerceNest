const express = require('express');
const router = express.Router();
const chatbotController = require('C:/Users/lenovo/Desktop/business-registration-solution/backend/controllers/chatbotController.js');

router.post('/query', chatbotController.handleQuery);

module.exports = router;