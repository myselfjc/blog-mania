const express = require('express');
const router = express.Router();
const userController = require('./../controller/userController')
const authController = require('./../controller/authController')

router.route('/').get(userController.getAllUsers);
router.route('/signup').post(authController.signup);
router.route('/login').post(authController.login);

module.exports = router;