const http = require('http');

const server = http.createServer((req,res) =>{
    console.log(req.url);
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.write("<h1>ABES Engineering College</h1>");
    res.end();
    
});
PORT= 3000;//when we don't assign the port server randomly assign port from 49000 to 65000.
server.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
});