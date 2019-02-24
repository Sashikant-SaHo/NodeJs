/*
//import the modules.
//require() is the predefined function, used to import the modules.
var express = require("express");
var bodyparser = require("body-parser");

//create the Rest Object
var app = express();
//where "app" object used to develop the Rest API'S.

//set the json as the MIME Type.
app.use(bodyparser.json());
//take the permission to read post parameters from json object
app.use(bodyparser.urlencoded(
                    {extended:false}
        ));
//create the Rest API.
app.post("/login",function(req,res){
    //client parameters stored into 
    // req object body part
    var uname = req.body.uname;
    var upwd = req.body.upwd;
    if(uname=="admin" && upwd == "admin"){
        res.send({"login":"success"});
    }else{
        res.send({"login":"fail"});
    }
});
//assign the port no.
app.listen(8080);
console.log("Server Listening the port no.8080");
*/


var express = require("express");
var bodyparser = require("body-parser");
var app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded(
            {"extended":true}
    ));
app.post("/login",function(req,res){
    var uname = req.body.uname;
    var upwd = req.body.upwd;
    if(uname=="admin" && upwd=="admin"){
        res.send({login:"success"}); 
    }else{
        res.send({login:"fail"});
    }
});
app.listen(8080);
console.log("Server Listening the port no.8080");
