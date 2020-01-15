const express = require('express');
const dotenv = require('dotenv');
const logger = require('./middleware/logger');
const connectDB = require('./config/db');
const colors = require('colors')

// Load env variables 
dotenv.config({ path : './config/config.env'});

// Connect to database
connectDB();

const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json())

// using the middleware
app.use(logger);

// Route files 
const bootcamps = require('./routes/bootcamps');

// Mount routers
app.use('/api/v1/bootcamps',bootcamps);

// app.get('/',(req,res)=>{
//     res.status(200).json({ success: true , data : { name : "FBW3 "} });   

// })
// app.get('/api/v1/bootcamps' , (req,res)=> {
//     res.status(200).json({ success : true , msg : 'show all bootcamps'})
// });

// app.post('/api/v1/bootcamps' , (req,res)=> {
//     res.status(200).json({ success : true , msg : 'Create new bootcamps'})
// });

// app.put('/api/v1/bootcamps/:id' , (req,res)=> {
//     res.status(200).json({ success : true , msg : `update bootcamps ${req.params.id}`});
// });

// app.delete('/api/v1/bootcamps/:id' , (req,res)=> {
//     res.status(200).json({ success : true , msg : `Delete bootcamps ${req.params.id}`});
// });


const PORT = process.env.PORT || 5000;

const server = app.listen(PORT,console.log(`Server Started on port ${PORT} in ${process.env.NODE_ENV} mode `.bgMagenta))

// handle unhandled promise rejections
process.on('unhandledRejection', (err , promise)=> {
    console.log(`Error : ${err.message}`);
    // close Server & exit process
    server.close(() => process.exit(1))
})
