//import the express
var express = require("express");
//import the function
var my_fun = require("./config/my_fun");
//create the Rest Object
var app = express();
//create the Rest API.
app.get("/login",function(req,res){ 
    var uname = req.query.uname;
    var upwd = req.query.upwd;
    var result = my_fun(uname,upwd);
    res.send(result)
});
//assign the port no.
app.listen(8080);
console.log("Server Listening the port no.8080");