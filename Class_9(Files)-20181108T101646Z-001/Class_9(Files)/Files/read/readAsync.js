//import the fs module
var fs = require("fs");
//read the data asynchronously
fs.readFile("../static/sample.txt",
                        function(err,data){
    if(err){
        console.log("Error while reading the data !");
    }else{
        console.log(data.toString());
    }
});