const http = require('http');
const url = require('url');

function start(route, handle) {
  function onRequest(request, response) {
    const { pathname } = url.parse(request.url);
    console.log('request from', pathname, 'revieced !');
    route(handle, pathname, response, request);
  }

  http.createServer(onRequest).listen(8888);
  console.log('Server has started.');
}

// module.exports = start;
exports.start = start;
