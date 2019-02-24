//import express module
var express = require("express");
//import bodyparser
var bodyparser = require("body-parser");
//create the Rest Object
var app = express();
//set the JSON As MIME Type
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
//import fetch module
var fetch = require("./fetch/fetch");
app.use("/fetch",fetch);
//import the update module
var update = require("./update/update");
app.use("/update",update);
//import insert module
var insert = require("./insert/insert");
app.use("/insert",insert);
//import delete module
var remove = require("./delete/delete");
app.use("/delete",remove);
//assign the port no
app.listen(8080);
console.log("Server Listening the port no.8080");

//http://localhost:8080/fetch  (Get Request)
//http://localhost:8080/insert (Post Request)
//http://localhost:8080/update (Post Request)
//http://localhost:8080/delete (Post Request)


