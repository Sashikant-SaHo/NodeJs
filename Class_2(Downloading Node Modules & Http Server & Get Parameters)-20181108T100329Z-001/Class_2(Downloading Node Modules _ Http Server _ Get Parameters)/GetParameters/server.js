// "url" is the predefined module in Node.
// url module used to read the get parameters in http server.

//import the modules
var http = require("http");
var url = require("url");
//create the server
var server = http.createServer((req,res)=>{
     var obj = url.parse(req.url,true).query;
     var uname = obj.uname;
     var upwd = obj.upwd;
     res.writeHead(200,{'Content-Type':'text/html'});
     if(uname == "admin" && upwd == "admin"){
         res.write("<h1>Login Success !</h1>");
     }else{
         res.write("<h1>Login Fail !</h1>");
     }
     res.end();
});
//assign the port no.
server.listen(8080);
console.log("Server Listening the port no.8080");