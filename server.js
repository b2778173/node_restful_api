var http = require("http");
var url = require('url')

function start(route, handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname
        console.log('request from', pathname, 'revieced !')
        route(handle, pathname)
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.write('{ a: 1, b: 2 }');
        response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

// module.exports = start;
exports.start = start