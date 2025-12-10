const http = require('http');

const url = process.argv[2];

http.get(url, (response) => {
    response.setEncoding('utf8');

    let totalData = '';

    // collect all chunks
    response.on('data', (chunk) => {
        totalData += chunk;
    })

    //when all data is recieved
    response.on('end', () => {
        console.log(totalData.length);  // number osf characters
        console.log(totalData);         // full string
    })

    response.on('error', (err) => {
        console.error('Response error:', err.message);
    })
}).on('error', (err) => {
    console.error('Request error:', err.message);
})