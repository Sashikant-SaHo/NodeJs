//import express
var express = require("express");
//import db_connection
var conn = require("../config/db_connection");
//get the connection object
var connection = conn.getConnection();
//connect to database
connection.connect();
//create the Router Instance
var router = express.Router();
//create the POST Request
router.post("/",function(req,res){
    //read the p_id
    var p_id = req.body.p_id;
    //execute the sql query
    connection.query("delete from products where p_id="+p_id,
                            function(err){
        if(err){
            res.json({'delete':'fail'});
        }else{
            res.json({'delete':'success'});
        }
    });
});
//export the Router
module.exports = router;