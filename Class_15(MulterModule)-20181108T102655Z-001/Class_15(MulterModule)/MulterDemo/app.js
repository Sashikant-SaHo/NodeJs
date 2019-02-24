//uploading the multiple images to server

//import the modules
var express = require("express");
var multer = require("multer");
var bodyparser = require("body-parser");
//create the Rest Object
var app = express();
//set the JSON As MIME Type
app.use(bodyparser.json());
//create the storage
var storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"./uploads")
    },
    filename:function(req,file,cb){
        cb(null,file.fieldname+"-"+Date.now()+".jpg");
    }
});
//give the storage to multer module
var upload = multer({storage:storage})
                .array("profileImage",2);
//create the Rest API
app.post("/profile",function(req,res){
    upload(req,res,function(err){
        if(err){
            res.json({"upload":"fail"});
        }else{
            res.json({"upload":"success"});
        }
    });
});
//assign the port no.
app.listen(8080);
console.log("Server Listening the port no.8080");