//import the express
var express = require("express");
//import db_connection
var conn = require("../config/db_connection");
//get the connection object
var connection = conn.getConnection();
//connect to database
connection.connect();
//create the Router Instance
var router = express.Router();
//create the Rest API.
router.post("/",function(req,res){
    var p_id = req.body.p_id;
    var p_name = req.body.p_name;
    var p_cost = req.body.p_cost;
    connection.query("insert into products values("+p_id+",'"+p_name+"',"+p_cost+")",
                    function(err,result){
        if(err){
            res.json({"message":"error"});
        }else{
            res.json({"insert":"success"});
        }
    });
});
//export the Router
module.exports = router;