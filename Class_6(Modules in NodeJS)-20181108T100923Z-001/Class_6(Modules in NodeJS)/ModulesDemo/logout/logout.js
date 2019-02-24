//import the express
var express = require("express");
//create the Router Instance
var router = express.Router();
//crate the get the request
router.get("/",function(req,res){
    res.json({message:'welcome to logout module !'});
});
//create the get request
//http://localhost:8080/logout/logout/?
// uname=admin&upwd=admin
router.get("/logout",function(req,res){
  var uname = req.query.uname;
  var upwd = req.query.upwd;
  if(uname == "admin" && upwd == "admin"){
      res.json({logout:"success"});
  }else{
      res.json({logout:"fail"});
  }
});

//export the Router
module.exports = router;