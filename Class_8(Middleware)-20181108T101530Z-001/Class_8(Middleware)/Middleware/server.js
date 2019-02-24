/*
//import express
var express = require("express");
//create the Rest Object
var app = express();
//where "app" object used to develop the Rest API.
//Middleware
var myMiddleware = function(req,res,next){
    console.log("I am in Middleware...!");
    next();
};
//use the middleware
app.use(myMiddleware);
//create the Rest API
app.get("/",function(req,res){
    console.log("I will execute After Middleware...!");
});
//Assign the Port No.
app.listen(8080);
console.log("Server Listening the port no.8080");
*/

/*
//import express
var express = require("express");

//create the Rest Object
var app = express();

//create the Middleware
var myMiddleware = function(req,res,next){
    var uname = req.query.uname;
    var upwd = req.query.upwd;
    if(uname == "admin" && upwd == "admin"){
        next();
    }else{
        res.json({authentication:'fail'});
    }
};

//use the middleware
app.use(myMiddleware);

//create the Rest API.
app.get("/",function(req,res){
    res.json({authentication:"success"});
});

//assign the port no.
app.listen(8080);
console.log("Server Listening the port no.8080");
*/

/*
var express = require("express");

var app = express();

var myMiddleware = function(req,res,next){
    req.setTime = new Date().toLocaleDateString();
    next();
};


app.use(myMiddleware);

app.get("/",function(req,res){
    res.send( req.setTime );
});

app.listen(8080);
console.log("Server Listening the port no.8080");
*/

var express = require("express");

var my_fun = require("./my_fun");

var app = express();

app.use(my_fun({'uname':'admin','upwd':'admin'}));

app.get("/",function(req,res){
    res.send("Login Success....!");
});

app.listen(8080);
console.log("Server Listening the port no.8080");





































