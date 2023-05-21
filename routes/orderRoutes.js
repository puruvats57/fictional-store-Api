// routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const authenticate = require('../middleware/auth');

router.post('/', authenticate, orderController.placeOrder);

module.exports = router;
