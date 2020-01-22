 
module.exports = function ensureAuthenticated (req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash('error_msg', ' please log in to view the pages  ');
    res.redirect('/users/login');    

}
module.exports= function forwardAuthenticated(req , res , next){
    if(!req.isAuthenticated()){
        return next();
    }
    res.redirect('/dashboard');
}