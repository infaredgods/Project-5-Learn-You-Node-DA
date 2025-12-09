const fs = require('fs');
const path = require('path');

module.exports = function(dir, ext, callback) {
    fs.readdir(dir, (err, files) => {
        if (err) {
            return callback(err); // pass error to callback
        }

        try {
            //filter files by extension
            const filtered = files.filter(file => {
                return path.extname(file) === '.' + ext;
            })

            callback(null, filtered); // no error, pass filtered results
        } catch (e) {
            callback(e); // handle any unexpected errors
        }
    })
}