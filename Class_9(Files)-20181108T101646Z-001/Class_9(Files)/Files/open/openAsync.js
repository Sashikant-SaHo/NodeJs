var fs = require("fs");
fs.open("../static/sample.txt","r+",
                    function(err,fd){
    if(err){
        console.log("Error !");
    }else{
        console.log("File Opened Successfully "+fd);
    }
});