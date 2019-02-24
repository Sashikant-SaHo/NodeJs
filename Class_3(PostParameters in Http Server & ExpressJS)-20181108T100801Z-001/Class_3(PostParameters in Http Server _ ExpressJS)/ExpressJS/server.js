//import the express module
var express = require("express");
//create the Rest Object
var app = express();
//where "app" object used to create the Rest API'S.
//create the Get Request
app.get("/",(req,res)=>{
    res.send({'message':'default get request !'});
});
//create the Get Request
app.get("/fetch",(req,res)=>{
    res.send({'message':'fetch get request !'});
});
//create the POST Request
app.post("/",(req,res)=>{   
    res.send({'message':'Default Post Request !'});
});
//create the Post Request
app.post("/login",(req,res)=>{
    res.send({'message':'login post request !'});
});
//assign the port no.
app.listen(8080);
console.log("Server Listening the port no.8080");

//http://localhost:8080/         GET Request
//http://localhost:8080/fetch    GET Request
//http://localhost:8080/         POST Request
//http://localhost:8080/login    POST Request





