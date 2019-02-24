//import the mysql
var mysql = require("mysql");
//import db_properties
var prop = require("./db_properties");
//export the json object
module.exports = {
    getConnection : function(){
        return mysql.createConnection(prop);
    }
};