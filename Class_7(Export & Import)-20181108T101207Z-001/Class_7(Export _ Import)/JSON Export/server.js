//import the express
var express = require("express");
//import db_config
var obj = require("./config/db_config");
//create the Rest Object
var app = express();
//create the Rest API.
app.get("/",function(req,res){
    res.json(obj);
});
//assign the port no.
app.listen(8080);
console.log("Server Listening the port no.8080");
