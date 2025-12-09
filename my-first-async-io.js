// Load the built-in 'fs' module, which lets us work with the filesystem
const fs = require('fs');

// read the file path from command line arguments
const filePath = process.argv[2];

// perform one asynchronous filesystem operation to read the file
fs.readFile(filePath, 'utf8', (err, data) => {

    // if an error happens (e.g., file not found), print the error and stop
    if (err) return console.error(err);

    // split the string at each newline and count how many pieces there are 
    const newlineCount =  data.split('\n').length - 1;

    // prints the result
    console.log(newlineCount);
})