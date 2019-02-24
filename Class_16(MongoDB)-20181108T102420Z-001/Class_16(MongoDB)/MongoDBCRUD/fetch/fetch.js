//import express
var express = require("express");
//import mongodb
var mongodb = require("mongodb");
//create the Router Instance
var router = express.Router();

//create the MongoClient
var nareshIT = mongodb.MongoClient;
//where "nareshIT" is the client

//create the Rest API
router.get("/",function(req,res){
    nareshIT.connect("mongodb://localhost:27017/nodedb",function(err,db){
       db.collection("products").find().toArray(function(err,array){
            res.send(array);
       });
    });
});

//export the Router
module.exports = router;





