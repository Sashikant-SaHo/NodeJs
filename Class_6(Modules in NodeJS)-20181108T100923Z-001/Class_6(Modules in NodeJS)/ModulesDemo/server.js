//import the express module
var express = require("express");
//create the Rest Object
var app = express();
//import the login module
var login = require("./login/login");
//use the login module
app.use("/login",login);
//import the logout module
var logout = require("./logout/logout");
//use logout module
app.use("/logout",logout);
//assign the port no.
app.listen(8080);
console.log("Server Listening the port no.8080");

//http://localhost:8080/login
//http://localhost:8080/login/login/admin/admin
//http://localhost:8080/logout
//http://localhost:8080/logout/logout/?uname=admin&upwd=admin


