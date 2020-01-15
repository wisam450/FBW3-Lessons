
const Bootcamp = require('../models/Bootcamp');

// get all the bootcamps without id 
exports.getBootcamps = (req ,res , next) => {
    res.status(200).json({ success : true , msg : ' Show all bootcamps' , hello:req.hello , host:req.info});
}

// get a single bootcamp using id 
exports.getBootcamp = (req ,res , next) => {
    res.status(200).json({ success : true , msg : ` Show  bootcamps ${req.params.id}`});
}


exports.createBootcamp = async (req , res ,next) => {

    try { //console.log(req.body);
        const bootcamp = await Bootcamp.create(req.body);
    
        res.status(201).json({ success : true , data:bootcamp });


    } catch(err){
        res.status(400).json({ success: false ,msg :err})

    }
}

exports.updateBootcamp = (req,res , next) => {
    res.status(200).json({ success : true , msg : ` Update  bootcamps ${req.params.id}`});


}

exports.deleteBootcamp =(req , res , next)=>{
    res.status(200).json({ success : true , msg : ` delete  bootcamps ${req.params.id}`});

}