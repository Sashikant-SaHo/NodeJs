//Http Module is the predefined module used to create the http servers.
//Http Module is the native module, so no need to download by using yarn.
//require() is the predefined function in Node used to import the modules.
var http = require("http");
// createServer() is the predefined function in http module used to create the http servers.
// the argument for the createServer() is "arrow function".
// req & res are the predefined objects provided by node engine.
// req object used to store the client data.
// res object used to send the response to client. 
// writeHead(-,-) is the predefined function in res object
// writeHead(-,-) function used to set the MIME Type in http server.
// write(-) is the predefined function in res object
// write() function used to append the response to "res" object.
// end() is the predefined function in res object used to lock the res object.
var server = http.createServer((req,res)=>{
    //set the MIME Type
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("<h1>Welcome to First Http Server !</h1>");
    res.end();
});
//assign the port no.
server.listen(8080);
console.log("Server Listening the port no.8080");