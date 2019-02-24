//import modules
var express = require("express");
var bodyparser = require("body-parser");
//create the Rest Object
var app = express();
//set the JSON As Mime
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
//import the login module
var login = require("./login/login");
app.use("/login",login);
//assign the port no.
app.listen(8080);
console.log("Server Listening the Port No.8080");



//nodemon server
//Test the Following Rest API By Using Postman
// => http://localhost:8080/login (POST)






