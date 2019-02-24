//import express
var express = require("express");
//import mongodb
var mongodb = require("mongodb");
//create the Router Instance
var router = express.Router();
//create the MongoClient
var nareshIT = mongodb.MongoClient;
//create the Rest API
router.post("/",function(req,res){  
    //read p_id,p_name & p_cost
    var p_id = req.body.p_id;
    var p_name = req.body.p_name;
    var p_cost = req.body.p_cost;
    nareshIT.connect("mongodb://localhost:27017/nodedb",function(err,db){
        db.collection("products")
                        .updateOne({"p_id":p_id},
                                   {$set:{"p_name":p_name,"p_cost":p_cost}},
                                   function(err,result){
            if(err){
                res.json({"update":"fail"});
            }else{
                res.json({"update":"success"});
            }
        });
    });
});
//export the router
module.exports = router;



