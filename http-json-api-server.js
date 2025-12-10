const http = require('http');
const url = require('url');

const port = process.argv[2];

const server = http.createServer((req, res) => {
    // parse the URL including the query string
    const parsedUrl = url.parse(req.url, true);

    const path = parsedUrl.pathname;
    const iso = parsedUrl.query.iso;

    let result;

    // only proceed if an ISO time is provided
    if (iso) {
        const date = new Date(iso);

        if (path === '/api/parsetime') {
            // build the JSON structure for parsetime
            result = {
                hour: date.getHours(),
                minute: date.getMinutes(),
                second: date.getSeconds()
            }
        } else if (path === '/api/unixtime') {
            // build the JSON structure for unixtime
            result = {
                unixtime: date.getTime()
            }
        }
    }

    // send the JSON response if we built one
    if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result));
    } else {
        // if path does not match, send 404
        res.writeHead(404);
        res.end();
    }
})
// start server
server.listen(port);