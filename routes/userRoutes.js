// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

//both apis route request to apis in controller 
router.post('/register', userController.registerUser);  
router.post('/login', userController.loginUser); 

module.exports = router;
