const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth.js');

// Welcome Page
router.get('/', (req, res) => res.render('index'));

// Dashboard
router.get('/dashboard',  (req, res) =>
  res.render('dashboard', {
    user: req.user
    // name: req.name
  })
);

module.exports = router;
