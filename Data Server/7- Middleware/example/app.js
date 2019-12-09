const express = require('express');
const path = require('path');
const app = express();
const members = require('./members');
const logger = require('./middleware/logger');


//somthing

// our middleware
app.use(logger);


app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','about.html'));
})
// app.get('/',(req,res)=>{
//    //res.send('<h1> Hello world <h2>')
//    res.sendFile(path.join(__dirname,'public','index.html'))
    
// })

// set static folder
app.use(express.static(path.join(__dirname,'public')));

//Members API Routes
app.use('/api/members' , require('./routes/api/allMembers'));

const PORT = process.env.PORT || 5001;

app.listen(PORT ,()=>{
    console.log(` server start at port ${PORT}`);
    
});
