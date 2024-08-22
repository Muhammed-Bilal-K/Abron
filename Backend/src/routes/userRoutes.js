const express = require('express');
const UserController = require('../controllers/userController');

const router = express.Router();

router.post('/apply', UserController.applyJob);

module.exports = router;
