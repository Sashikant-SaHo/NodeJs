var fs = require("fs");
fs.writeFile("../static/sample.txt","Hi....!",
                                    function(err){
    if(err){
        console.log("Error !");
    }else{
        console.log("Success...!");
    }
});