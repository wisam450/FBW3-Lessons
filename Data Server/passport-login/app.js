const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const ejs = require('ejs')
const app = express();


// EJS 
app.use(expressLayouts);
app.set('view engine' , 'ejs' )

// Routes 
app.use('/' , require('./routes/index'));
app.use('/users' ,require('./routes/users'));

const PORT = process.env.PORT || 5007;

app.listen(PORT , console.log(`Server Started on  ${PORT} `));