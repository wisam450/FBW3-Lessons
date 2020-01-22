
const Bootcamp = require('../models/Bootcamp');

// get all the bootcamps without id 
exports.getBootcamps = async (req ,res , next) => {
    //res.status(200).json({ success : true , msg : ' Show all bootcamps' , hello:req.hello , host:req.info});
    try {
        const bootcamp = await Bootcamp.find();
        res.status(200).json({success : true , data:bootcamp});

    }
    catch(err){
        res.status(400).json({ success : false })

    }
}

// get a single bootcamp using id 
exports.getBootcamp = async (req ,res , next) => {    
   // res.status(200).json({ success : true , msg : ` Show  bootcamps ${req.params.id}`});
   try {
    const bootcamp = await Bootcamp.findById(req.params.id);
    if(!bootcamp){
        res.status(400).json({ success: false});
    }
    res.status(200).json({ success : true , data : bootcamp});

   }catch(err){
    res.status(400).json({ success : false });

   }
   


}


exports.createBootcamp = async (req , res ,next) => {

    try { //console.log(req.body);
        const bootcamp = await Bootcamp.create(req.body);
    
        res.status(201).json({ success : true , data:bootcamp });


    } catch(err){
        res.status(400).json({ success: false ,msg :err})

    }
}
// update a bootcamp 
exports.updateBootcamp = async (req,res , next) => {
   // res.status(200).json({ success : true , msg : ` Update  bootcamps ${req.params.id}`});
  try {
      const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id ,req.body , {
        new : true ,
        runValidators : true  
      }) ;
      if(!bootcamp){
         return  res.status(400).json({ success : false })
      }
      res.status(200).json({ success : true , data : bootcamp});

  }catch(err){
   return   res.status(400).json( { success : false})

  }


}

exports.deleteBootcamp =async (req , res , next)=>{
   // res.status(200).json({ success : true , msg : ` delete  bootcamps ${req.params.id}`});
   try{
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
    if(!bootcamp){
        return res.status(400).json({ success : false , msg : " id not found "});
    }
    res.status(200).json({ success : true , data : {} });

   }
   catch(err){
     return  res.status(400).json({success : false});

   }

}