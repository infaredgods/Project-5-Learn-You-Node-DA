const http = require('http');

const url = process.argv[2];

http.get(url, (response) => {
    // makes sure data comes as a string
    response.setEncoding('utf8');

    // print each chunk of data on a new line
    response.on('data', (chunk) => {
        console.log(chunk);
    })

    // handles errors on the response
    response.on('error', (err) => {
        console.error('Response error:', err.message);
    })
}).on('error', (err) => {
    // handle errors on the request itself
    console.error('Request error:', err.message); 
})