const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
const expressValidator = require('express-validator');
const dotenv = require('dotenv');
const connectDB = require('./config/db');


// Load env variables 
dotenv.config({ path : './config/config.env'});

// Connect to database MongoDB
connectDB();




const app = express();

// Ejs  View Engine 
app.set('view engine' ,'ejs');

// Body parser for Posting Data
app.use(express.urlencoded({extended:true}))

// Express Session 
app.use(  session({
    secret : "secret",
    resave: true,
    saveUninitialized: true

}) );
// Passport Middleware 
app.use(passport.initialize());
app.use(passport.session());

// Connect Flash 
app.use(flash());

// Global variables 
app.use((req,res,next)=>{
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
})

// Routes 
const index = require('./routes/index')
const users = require('./routes/users')
app.use('/', index);
app.use('/users' , users);

const PORT = process.env.PORT || 5005;

const server = app.listen(PORT,console.log(`Server Started on port ${PORT} in ${process.env.NODE_ENV} mode `.bgMagenta))

// handle unhandled promise rejections
process.on('unhandledRejection', (err , promise)=> {
    console.log(`Error : ${err.message}`);
    // close Server & exit process
    server.close(() => process.exit(1))
})