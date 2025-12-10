const net = require('net');

// port number is provided as the first comand line argument
const port = process.argv[2];

// helper function to zero fill values to 2 digits
function zeroFill(num) {
    return (num < 10 ? '0' : '') + num;
}

// create the TCP server
const server = net.createServer(socket => {
    const now = new Date();

    // build the date/time string
    const year =  now.getFullYear();
    const month = zeroFill(now.getMonth() + 1); // month start are 0
    const day = zeroFill(now.getDate());
    const hour = zeroFill(now.getHours());
    const minute = zeroFill(now.getMinutes());

    const formatted = `${year}-${month}-${day} ${hour}:${minute}`;

    // write the formatted time fol;lowed by a newline
    socket.write(formatted + '\n');

    // close the connection
    socket.end();
})

// start server
server.listen(port);