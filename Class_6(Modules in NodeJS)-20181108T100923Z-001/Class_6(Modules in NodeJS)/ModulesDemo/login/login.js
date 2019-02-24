//import the express
var express = require("express");

//create the Router Instance
//Router Instance Used to create the Modules
var router = express.Router();

//create the get request
router.get("/",function(req,res){
    res.json({message:'Welcome to login module !'});
});

//create the get request
router.get("/login/:uname/:upwd",
                        function(req,res){
    var uname = req.params.uname;
    var upwd = req.params.upwd;

    if(uname == "admin" && upwd == "admin"){
        res.json({login:"success"});
    }else{
        res.json({login:"fail"});
    };
});

//export the router
module.exports = router;