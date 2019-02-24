//import express
var express = require("express");
//import db_connection
var conn = require("../config/db_connection");
//get the connection object
var connection = conn.getConnection();
//connect to database
connection.connect();
//import the token
var token = require("../token/token");
//create the Router Instance
var router = express.Router();
//create the Rest API.
router.post("/",function(req,res){
    //read the uname & upwd
    var uname = req.body.uname;
    var upwd = req.body.upwd;
    //compare with the database
    connection.query("select * from login_details where uname='"+uname+"' and upwd='"+upwd+"'",
                        function(err,recordsArray,fields){
        if(recordsArray.length>0){
            var my_token = token({'uname':uname,'upwd':upwd},"hr@nareshit.in");   
            res.send({"login":"success","auth":my_token});
        }else{
            res.send({"login":"fail"});
        }
    });
});
//export the router
module.exports = router;