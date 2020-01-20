const express = require('express');
const router = express.Router();

// Login -Page 
router.get('/login', (req , res ) => {
    res.render('login')
});

// Register Page 
router.get('/register', (req , res ) => {
    res.render('register')
});

// Rigister Handle 
router.post('/register' ,(req , res )=>{
   const { name, email, password, password2 }     = req.body;
   let errors = [];

   // checking the required fields
   if(!name || !email || !password || !password2){
       errors.push({ msg: 'please fill in all fields' });    

   }
   // checkking passwords match 
   if(password !== password2){
       errors.push({msg : 'Passwords do not match'});       
   }
   // checking pass length
   if(password.length < 6 ){
       errors.push({ msg  : "password should at least 6 characters"});
   }
   if(errors.length > 0){
       res.render('register' , {
           errors,
           name,
           email,
           password,
           password2
       })
   }
   else {
       res.send('ok');
   }



})

module.exports = router;