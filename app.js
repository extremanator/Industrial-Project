
const http = require('http');
const qs = require('querystring');
const fs = require('fs');

const port = 9000;

function getHome(req, res){
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("<html lang="en"><head><title>Home</title></head><body>Want to do some calculation? Click <a href='/calc'>here</a></body></html>");
    res.end();
}

function get404(req, res){
    res.writeHead(404, "Resource Not Found", {"Content-Type": "text/html"});
    res.write("<html><head><title>404</title></head><body>404: Resource not found. Go to <a href='/'>home</a></body></html>");
    res.end();
}

function get405(req, res){
    res.writeHead(405, "Method Not Supported", {"Content-Type": "text/html"});
    res.write("<html><head><title>405</title></head><body>405: Method not supported. Go to <a href='/'>home</a></body></html>");
    res.end();
}

function getCalcForm(){

}

http.createServer(function (req, res) {
    console.log(req.url);
    switch (req.method){
        case "GET":
            if(req.url === "/"){
                getHome(req, res);
            } else if(req.url === '/calc'){
                getCalcForm(req, res);
            } else {
                get404(req, res);
            }
            break;
        case "POST":
            break;
        default:
            get405(req, res);
            break;
    }
}).listen(port);
