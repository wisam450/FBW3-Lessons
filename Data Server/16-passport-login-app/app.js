const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
const expressValidator = require('express-validator');
const expressLayouts = require('ejs');
const dotenv = require('dotenv');
const connectDB = require('./config/db');


// Load env variables 
dotenv.config({ path : './config/config.env'});

// Connect to database
connectDB();

const app = express();

const PORT = process.env.PORT || 5005;

const server = app.listen(PORT,console.log(`Server Started on port ${PORT} in ${process.env.NODE_ENV} mode `.bgMagenta))

// handle unhandled promise rejections
process.on('unhandledRejection', (err , promise)=> {
    console.log(`Error : ${err.message}`);
    // close Server & exit process
    server.close(() => process.exit(1))
})