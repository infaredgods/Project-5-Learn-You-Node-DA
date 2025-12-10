const http = require('http');
const fs = require('fs');

const port = process.argv[2];     // port to listen on
const filePath = process.argv[3]; // file to serve 

// create the HTTP server
const server = http.createServer((req, res) => {
    // create a readable stream for the file
    const readStream = fs.createReadStream(filePath);

    // set a basic content type 
    res.writeHead(200, {'Content-Type': 'text/plain'});
    
    // Pipe  the file stream directly to the response
    readStream.pipe(res);
})

// start listening
server.listen(port);