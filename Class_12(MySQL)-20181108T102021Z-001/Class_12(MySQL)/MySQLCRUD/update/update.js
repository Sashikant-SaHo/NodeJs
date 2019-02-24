//import the express
var express = require("express");
//import db connection
var conn = require("../config/db_connection");
//get the connection object
var connection = conn.getConnection();
//connect to database
connection.connect();
//create the Router Instance
var router = express.Router();
//create the Post Request
router.post("/",function(req,res){
    //read the p_id,p_name & p_cost
    var p_id = req.body.p_id;
    var p_name = req.body.p_name;
    var p_cost = req.body.p_cost;
    connection.query("update products set p_name='"+p_name+"',p_cost="+p_cost+" where p_id="+p_id,
                        function(err,result){
        if(err){
            res.json({'update':'fail'});
        }else{
            res.json({'update':'success'});
        }
    });
});
//export the router
module.exports = router;