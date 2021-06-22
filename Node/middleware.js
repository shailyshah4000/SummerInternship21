module.exports=function(req,res,next){
    console.log("curent route is",req.originalUrl) 
    next();
 }
 //app.use(checkUrl);
