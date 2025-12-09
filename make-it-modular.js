const mymodule = require('./mymodule');

const dir = process.argv[2];
const ext = process.argv[3];

mymodule(dir, ext, (err, files) => {
    if (err) {
        return console.error('Error: ', err.message);
    }

    //print each file on its own line
    files.forEach(file => console.log(file));
})