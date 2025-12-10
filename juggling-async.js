const http = require('http');


// the first three command line arguments are the urls
const urls = process.argv.slice(2, 5);

// to store results in order
let results = [];
let count = 0;

// function to print results in order
function printResults() {
    for (let i = 0; i < results.length; i++) {
        console.log(results[i]);
    }
}

// function to get data from a url at a given index
function getData(index) {
    http.get(urls[index], (response) => {
        response.setEncoding('utf8');

        let data = '';

        response.on('data', chunk => data += chunk);

        response.on('end', () => {
            results[index] = data;
            count++;

            // when all three are done, print them in order
            if (count === 3) {
                printResults();
            }
        })
        // handle errors for the response
        response.on('error', console.error);
    
    }).on('error', console.error);
}

// start all requests in parallel
for (let i = 0; i < 3; i++) {
    getData(i);
}