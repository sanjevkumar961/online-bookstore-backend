const express = require('express');
const { registerUser, authUser } = require('../controllers/userController');
const router = express.Router();

router.post('/', registerUser); // Register
router.post('/login', authUser); // Login

module.exports = router;
