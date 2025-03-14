const express = require('express');
const router = express.Router();
const { register, login, getUserTransactionData } = require('../controllers/userController');
const { authenticateToken } = require('../config/jwt');

router.post('/register', register);
router.post('/login', login);
router.get('/transactions/:user', authenticateToken, getUserTransactionData);

module.exports = router;
