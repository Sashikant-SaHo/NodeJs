var fs = require("fs");
fs.openSync("../static/sample.txt","r+");
console.log("File Opened Synchronously");