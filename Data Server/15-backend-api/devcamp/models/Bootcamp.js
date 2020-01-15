const mongoose = require('mongoose');
const BootcampSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true , 'Please add a name '],
        unique : true,
        trim : true,
        maxlength : [50, 'Name can not be more than 50 charachter' ]

    },
    description : {
        type : String,
        required : [true , 'Please add a description '],   
         
        maxlength : [500, 'description can not be more than 500 charachter' ]

    },
    website : {

        type : String,
        required:true,
        unique: true        
    },
    email : {
        type : String,
        unique: true ,
       // match: [ '^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$.' , 'Please add a valid email']
    },
    address: {
        type : String,
        required: [true ,'Please add an address']
    },
    photo : {
        type : String,
        default :'no-photo.jpg'
    }
});

module.exports = mongoose.model('Bootcamp', BootcampSchema);