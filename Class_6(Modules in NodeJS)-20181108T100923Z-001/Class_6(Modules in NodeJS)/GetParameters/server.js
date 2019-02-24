//import the express module
var express = require("express");

//create the Rest Object
var app = express();

//create the Rest API.
app.get("/login/:uname/:upwd",
          function(req,res){
    //read the parameters

    //params is the predefined key used to read
    // the parameters from URL           
    var uname = req.params.uname;
    var upwd = req.params.upwd;
    console.log(uname+"..."+upwd);
    
    if(uname == "admin" && upwd == "admin"){
        res.send({"login":"success"});
    }else{
        res.send({"login":"fail"});
    }
});

//assign the port no.
app.listen(8080);
console.log("Server Listening the port no.8080");