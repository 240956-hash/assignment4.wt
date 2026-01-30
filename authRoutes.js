const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');

router.post('/register', register); // ❗ без auth
router.post('/login', login);       // ❗ без auth

module.exports = router;
