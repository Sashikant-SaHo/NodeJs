// var fs = require("fs");
// fs.truncate("./static/sample.txt",0,function(err){
//     if(err){
//         console.log("Error While Deleting the Data !");
//     }else{
//         console.log("Data Successfully Deleted !");
//     }
// });





/*
var fs = require("fs");
fs.open("./static/sample.txt","r+",function(err,fd){
    if(err){
        console.log("Error while Openining the File !");
    }else{
        fs.close(fd,function(err){
            if(err){
                console.log("Error while closing the file !");
            }else{
                fs.unlink("./static/sample.txt",function(err){
                    if(err){
                        console.log("Error while Deleting file");
                    }else{
                        console.log("Done !");
                    }
                });
            }
        });
    }
});
*/
var fs = require("fs");
//open the file
fs.open("./static/sample.txt","r+",function(err,fd){
    if(err){
        console.log("Error while opening the File !");
    }else{
        console.log("File Opened Successfully !");
        //Write Operation
        fs.writeFile("./static/sample.txt","Hello...!",function(err){
            if(err){
                console.log("Error while writing the data");
            }else{
                console.log("Data Write Successfully !");
                //Append the Data
                fs.appendFile("./static/sample.txt","Hello...!",function(err){
                    if(err){
                        console.log("Error while Appending the Data !");
                    }else{
                        console.log("Data Apppended Successfully !");
                        //read the file
                        fs.readFile("./static/sample.txt",function(err,data){   
                            if(err){
                                console.log("Error While Reading the Data !");
                            }else{
                                console.log(data.toString());
                                //Delete the Data
                                fs.truncate("./static/sample.txt",0,function(err){
                                    if(err){
                                        console.log("Error While Deleting the Data !");
                                    }else{
                                        console.log("Data Deleted Successfully !");
                                        //close the file
                                        fs.close(fd,function(err){
                                            if(err){
                                                console.log("Error While Closing the File !");
                                            }else{
                                                console.log("File Closed Successfully !");
                                                //Delete
                                                fs.unlink("./static/sample.txt",function(err){
                                                    if(err){
                                                        console.log("Error While Deleting the File !");
                                                    }else{
                                                        console.log("Bye !");
                                                    }
                                                }); //unlink
                                            }
                                        }); //delete 
                                    }
                                });//close
                            }
                        });//read
                    }
                });//append
            }
        }); //write
    }
});//open
















