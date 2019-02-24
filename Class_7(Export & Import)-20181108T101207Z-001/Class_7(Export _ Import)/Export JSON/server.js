//import the express
var express = require("express");
//import db_connection
var obj = require("./config/db_connection");
//create the Rest Object
var app = express();
//create the Rest API
app.get("/db",function(req,res){
    //read the get parameters
    var uname = req.query.uname;
    var upwd = req.query.upwd;

    if(uname == "oracle" && upwd == "oracle"){
        res.json(obj.oracle());
    }else if(uname == "mysql" && upwd == "mysql"){
        res.json(obj.mysql());
    }else if(uname == "mongodb" && upwd == "mongodb"){
        res.json(obj.mongodb());
    }else if(uname == "mssql" && upwd == "mssql"){
        res.json(obj.mssql());
    }else{
        res.json("Invalid Details...!");
    }
});

//assign the port no.
app.listen(8080);
console.log("Server Listening the port no.8080");

// http://localhost:8080/db/?uname=oracle&upwd=oracle
// http://localhost:8080/db/?uname=mysql&upwd=mysql
// http://localhost:8080/db/?uname=mongodb&upwd=mongodb
// http://localhost:8080/db/?uname=mssql&upwd=mssql



