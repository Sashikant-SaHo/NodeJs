//import the http
//http is the predefined module in NodeJS.
//http module used to create the http servers.
var http = require("http");
//import querystring module
//querystring module is the predefined module in NodeJS.
//querystring module used to read the post parameters in Http Server.
var qs = require("querystring");
//create the Http Server
var server = http.createServer((req,res)=>{
    //set the MIME Type
    res.writeHead(200,{'Content-Type':'text/html'});
    //global variable
    var body="";
    //listen the post parameters
    req.on("data",(res)=>{
        body = body+res;
    });
    //end callback to node engine
    req.on("end",()=>{
        //parsing the post parameters
        var obj = qs.parse(body);
        //reading the post parameters
        var uname = obj.uname;
        var upwd = obj.upwd;
        //comparision
        if(uname == "admin" && upwd == "admin"){
            res.write("<h1>Login Success...!</h1>");
        }else{
            res.write("<h1>Login Fail...!</h1>");
        }
        res.end();
    });
});
//assign the port no.
server.listen(8080);
console.log("Server Listening the port no.8080");