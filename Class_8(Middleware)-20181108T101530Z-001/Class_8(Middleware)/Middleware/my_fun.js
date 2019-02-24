module.exports = function(obj){
    return function(req,res,next){
        var uname = obj.uname;
        var upwd = obj.upwd;
        if(uname == "admin" && upwd == "admin"){
            next();
        }else{
            res.json({authorization:"fail"});
        }
    };
};