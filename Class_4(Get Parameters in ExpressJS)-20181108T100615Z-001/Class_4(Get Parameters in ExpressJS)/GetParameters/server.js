//import the express module
var express = require("express");
//create the Rest Object
var app = express();

//Deploy the application in node server
app.use(express.static(__dirname+"/../GetParameters"));


//create the Rest API.
app.get("/login",function(req,res){
    //query is the predefined key in req object
    //query used to read the get parameters
    var uname = req.query.uname;
    var upwd = req.query.upwd;
    if(uname == "admin" && upwd == "admin"){
        res.json({'login':'success'});
    }else{
        res.json({'login':'fail'});
    }
});
//assign the port no
app.listen(8080);
console.log("Server Listening the port no.8080");