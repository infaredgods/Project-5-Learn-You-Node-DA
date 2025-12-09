const fs = require('fs');
const path = require('path');


// the directory path is the first argument
const  dirPath = process.argv[2];

// the extension to filter by
const extFilter = process.argv[3];

// perform one async filesystem call to read the directory
fs.readdir(dirPath, (err, files) => {
    if (err) return console.error(err);

    // loop through each file in directory
    files.forEach(file => {
        // check if the file's extension matches the filter
        if (path.extname(file) === '.' + extFilter) {
            console.log(file);
        }
    })
})