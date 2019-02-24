//import express
var express = require("express");
//import mongodb
var mongodb = require("mongodb");
//create the MongoClient
var nareshIT = mongodb.MongoClient;
//create the Router Instance
var router = express.Router();
//create the Rest API
router.post("/",function(req,res){
    //read the p_id
    var p_id = req.body.p_id;
    var obj = {"p_id":p_id};
    nareshIT.connect("mongodb://localhost:27017/nodedb",
                            function(err,db){
        db.collection("products").deleteOne(obj,
                                     function(err,result){
            if(err){
                res.json({"delete":"fail"});
            }else{
                res.json({"delete":"success"});
            }
        });
    });
});
//export the Router
module.exports = router;