const express = require('express');
const router = express.Router();

// @route   GET api/users
// @desc    Get user logged in
// @access  Private
router.get('/', (req, res) => {
  res.send('get logged in a user');
});

// @route   POST api/users
// @desc    AUth user and get token
// @access  Public
router.post('/', (req, res) => {
  res.send('login a user');
});

module.exports = router;
