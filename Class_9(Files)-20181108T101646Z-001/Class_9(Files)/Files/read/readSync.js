//import the fs module
var fs = require("fs");
//read the data synchronously
var data = fs.readFileSync("../static/sample.txt");
console.log(data.toString());

