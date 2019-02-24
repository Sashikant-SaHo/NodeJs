//import express
var express = require("express");
//import db_connection
var conn = require("../config/db_connection");
//get the connection object
var connection = conn.getConnection();
//connect to database
connection.connect();
//create the instance to Router
var router = express.Router();
//create the Rest API.
router.get("/",function(req,res){
    connection.query("select * from products",
                        function(err,recordsArray,fields){
        if(err){
            res.json({"message":"error"});
        }else{
            res.send(recordsArray);
        }
    });
});
//export the router
module.exports = router;