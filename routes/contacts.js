const express = require('express');
const router = express.Router();

// @route   GET api/contacts
// @desc    Get all contacts
// @access  Private
router.get('/', (req, res) => {
  res.send('get all contacts');
});

// @route   POST api/contacts
// @desc    Add new contact
// @access  Private
router.post('/', (req, res) => {
  res.send('add all contacts');
});

// @route   POST api/contacts/:id
// @desc    Update a contact
// @access  Private
router.put('/:id', (req, res) => {
  res.send('Update contacts');
});

// @route   POST api/contacts/:id
// @desc    Delete a contact
// @access  Private
router.delete('/:id', (req, res) => {
  res.send('Delete contacts');
});

module.exports = router;
