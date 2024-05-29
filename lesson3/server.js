const http = require("http");

const hostname = '127.0.0.1';
const port = 3000;

const myServer = http.createServer((req, res) => {
    res.end(`hello. I am shattajit.`);

});

myServer.listen(port, hostname, () =>{
    console.log(`server is running at http://${hostname}:${port}`);
})