const http = require('http');
const port = process.argv[2];

const server = http.createServer((req, res) => {
    // only handle POST requests 
    if (req.method !== 'POST') {
        return res.end('Send a POST request\n');
    }

    let body = '';

    // collect POST data chunks 
    req.on('data', chunk => {
        body += chunk.toString();
    })

    // when all data has been received
    req.on('end', () => {
        const uppercased = body.toUpperCase();
        res.end(uppercased);
    })

    // error handling for the request stream
    req.on('error', err => {
        console.error(err);
        res.statuesCode = 500;
        res.end('Server error');
    })
})

// start server
server.listen(port);