const http = require ("http"); // import core node "http" module 

const hostname = "127.0.0.1"; 
const port = 3000; 

const server = http.createServer((req, res)=>{  // require and response 
    console.log("hello, class, node is running"); 
    res.statusCode = 200; 
    res.setHeader = ("Content-Type", "text/plain"); 
    res.end("Hello Node"); 

});

server.listen(port, hostname, ()=>{
    console.log(`Server is running at http://${hostname}:${port}`)
}); 


//we created a web server-- YAYAYAYAYAY 