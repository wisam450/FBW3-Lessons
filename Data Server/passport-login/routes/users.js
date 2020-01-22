const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const { check, validationResult } = require('express-validator');


// User model 
const User = require('../models/User');

// Login -Page 
router.get('/login', (req , res ) => {
    res.render('login')
});

// Register Page 
router.get('/register', (req , res ) => {
    res.render('register')
});

// Rigister Handle 
const verifyPasswordsMatch = (req, res, next) => {
    const { password2 } = req.body;

    return check('password')
      .isLength({ min: 6 })
      .withMessage('password must be at least 4 characters')
      .equals(password2)
      // .withMessage('passwords do not match')
}

router.post('/register', [
    // our checks here
    check('name').trim().not().isEmpty().withMessage('name is empty'),
    check('email').trim().normalizeEmail().isEmail().withMessage('email incorrect'),
    check('password').isLength({ min: 6 }).withMessage('password is to short'),
    // check('password2').equals('password').withMessage('passwords are not equal')
    // verifyPasswordsMatch,
], (req, res) => {
    console.log(req.body);
    // if there are errors ?
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    // if not then create a user
    const { name, email, password, password2 } = req.body;
    const newUser = new User({
        name, 
        email,                   
        password});
    newUser.save().then(() => {
                        req.flash('success_msg', 'You are registered and you can login')
                        res.redirect('/users/login');

                    })
                    .catch(err =>{ console.log(err);
                    });
    return res.status(200).send('ok');
    // req.flash('success_msg', 'You are registered and you can login');
    // res.redirect('/users/login');
});

// Rigister Handle (OLD)
// router.post('/register' ,(req , res )=>{
//    const { name, email, password, password2 }     = req.body;
//    let errors = [];

//    // checking the required fields
//    if(!name || !email || !password || !password2){
//        errors.push({ msg: 'please fill in all fields' });    

//    }
//    // checkking passwords match 
//    if(password !== password2){
//        errors.push({msg : 'Passwords do not match'});       
//    }
//    // checking pass length
//    if(password.length < 6 ){
//        errors.push({ msg  : "password should at least 6 characters"});
//    }
//    if(errors.length > 0){
//        res.render('register' , {
//            errors,
//            name,
//            email,
//            password,
//            password2
//        })
//    }
//    else {
//        // validation passed
//        User.findOne({email :email })
//        .then(data => {
//            if(data){ // we found the email in our database
//                errors.push({ msg : ' Email is already registered'});
//                res.render('register' ,{ 
//                    errors,
//                    name,
//                    email,
//                    password,
//                    password2
//                })               
//            }
//            else {
//                const newUser = new User({
//                    name,
//                    email,
//                    password
//                });

//                // Hash Password
//                bcrypt.genSalt(10 ,(err , salt) => {
//                    bcrypt.hash(newUser.password ,salt , (err , hash) => {
//                        if(err) throw err ;

//                        // set hashed password
//                        newUser.password = hash ;
//                        console.log('the hashed pass is : ' + newUser.password);
//                        // save the user data to our database
//                        newUser.save()
//                        .then(user => {
//                            req.flash('success_msg', 'You are registered and you can login')
//                            res.redirect('/users/login');

//                        })
//                        .catch(err =>{ console.log(err);
//                        });


//                    } )


//                })




//            }

//        });

//    }



// })

// login Handle 
router.post('/login' , (req,res,next)=>{
    passport.authenticate('local' , {
      successRedirect : '/dashboard',
      failureRedirect : '/users/login',
      failureFlash : true
    })(req,res,next)

});

// logout Handle 

 router.get('/logout', (req , res ) =>{
     req.logout();
     req.flash('success_msg' , 'You are logged out ');
     res.redirect('/users/login');

 })

module.exports = router;