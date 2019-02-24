var fs = require("fs");
fs.appendFile("../static/sample.txt",
              "Welcome...!",
              function(err){
    if(err){
        console.log("Error....!");
    }else{
        console.log("Data Appended Successfully Asynchronously");
    }
});