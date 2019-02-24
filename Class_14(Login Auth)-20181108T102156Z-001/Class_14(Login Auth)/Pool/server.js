//import the modules
var express = require("express");
var mysql = require("mysql");
//create the Rest Object
var app = express();
//create the JSON Object with DataBase Properties
var prop = {
    host:"localhost",
    user:"root",
    password:"root",
    dataBase:"nodedb",
    connectionLimit:100
};
//initially we want to create pool with 100 connection objects

//create the pool
var pool = mysql.createPool({
    host:prop.host,
    user:prop.user,
    password:prop.password,
    database:prop.dataBase,
    connectionLimit:prop.connectionLimit
});

//create the Rest API.
app.get("/products",function(req,res){
//get the connection object from pool
pool.getConnection(function(err,connection){
    if(err){
        console.log("Error while fetching the Connection Object !");
    }else{
        connection.query("select * from products",
                    function(err,recordsArray,fields){
            if(err){
                console.log("DB Query Failed !");
            }else{
                res.send(recordsArray);
                //closing the connection object
                connection.end();
            }
        });
    };
});
});
//assign the port no.
app.listen(8080);
console.log("Server Listening the port no.8080");