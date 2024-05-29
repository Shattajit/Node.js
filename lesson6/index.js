const http = require("http");
const fs = require("fs");

const hostName = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res)=>{
    
    if(req.url === "/index"){
        fs.readFile("index.html", (err, data) =>{
            res.writeHead(200, {"content-type":"text/html"});
            res.write(data);
            res.end();
        })
    }
    else if(req.url === "/about"){
        fs.readFile("about.html", (err, data) =>{
            res.writeHead(200, {"content-type" : "text/html"});
            res.write(data);
            res.end();
        });
    }
    else if(req.url === "/contact"){

        fs.readFile("contact.html", (err, data)=>{
            res.writeHead(200, {"content-type":"text/html"});
            res.write(data);
            res.end();
        })
    }
    else{
        fs.readFile("error.html", (err, data)=>{
            res.writeHead(404, {"content-type":"text/html"});
            res.write(data);
            res.end();
        })
    }
});

server.listen(port, hostName, ()=>{
    console.log(`server is running at http://${hostName}:${port}`);
});
