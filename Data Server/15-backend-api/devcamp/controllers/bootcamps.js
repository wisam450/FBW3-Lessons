exports.getBootcamps = (req ,res , next) => {
    res.status(200).json({ success : true , msg : ' Show all bootcamps' , hello:req.hello , host:req.info});
}

exports.getBootcamp = (req ,res , next) => {
    res.status(200).json({ success : true , msg : ` Show  bootcamps ${req.params.id}`});
}
exports.createBootcamp = (req , res ,next) => {
    res.status(200).json({ success : true , msg : ` Create new bootcamps`});


}

exports.updateBootcamp = (req,res , next) => {
    res.status(200).json({ success : true , msg : ` Update  bootcamps ${req.params.id}`});


}

exports.deleteBootcamp =(req , res , next)=>{
    res.status(200).json({ success : true , msg : ` delete  bootcamps ${req.params.id}`});

}