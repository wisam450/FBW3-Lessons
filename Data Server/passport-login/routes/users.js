const express = require('express');
const router = express.Router();

// Login -Page 
router.get('/login', (req , res ) => {
    res.send(' <h1> Welcome to Users Login Page </h1> ')
});

// Register Page 
router.get('/register', (req , res ) => {
    res.send(' <h1> Welcome to Users Register Page </h1> ')
});

module.exports = router;