// Load the built-in 'fs' module, which lets us work with the filesystem
const fs = require('fs');

// read the file path from command line arguments
const filePath = process.argv[2];

// performs one synchronus filesystem operation
const contents = fs.readFileSync(filePath, 'utf8');

// count the number of newline characters 
const newlineCount = contents.split('\n').length - 1;

// prints the result
console.log(newlineCount);