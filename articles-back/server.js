// jazbl

const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({"data":[{"id":1,"name":"Bad Janet"}]}));
});

server.listen(port, hostname, () => {
    console.log("Started")
});