module.exports = function(arg1,arg2){
    if(arg1 == "admin" && arg2 == "admin"){
        return "Login Success...!";
    }else{
        return "Login Fail...!";
    }
};