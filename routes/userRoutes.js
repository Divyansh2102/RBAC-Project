const express = require('express');
const { protect, authorize } = require('../middleware/authMiddleware');
const router = express.Router();

// Example protected route for admin
router.get('/admin', protect, authorize('admin'), (req, res) => {
  res.status(200).json({ message: 'Admin access granted' });
});

// Example protected route for user
router.get('/user', protect, authorize('user', 'admin'), (req, res) => {
  res.status(200).json({ message: 'User access granted' });
});

module.exports = router;
