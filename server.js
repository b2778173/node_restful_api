const http = require('http');
const url = require('url');
const colors = require('colors');

colors.setTheme({
  info: 'bgGreen',
  help: 'cyan',
  warn: 'yellow',
  success: 'bgBlue',
  error: 'red',
});

function start(route, handle) {
  function onRequest(request, response) {
    // cros policy allow
    response.writeHead(200, {
      'Content-Type': 'text/plain;charset=utf-8',
      'Access-Control-Allow-Origin': '*',
    });
    const { pathname } = url.parse(request.url);
    console.log('request from', pathname, 'revieced !');
    route(handle, pathname, response, request);
  }
  http.createServer(onRequest).listen(8080);
  console.log('\x1b[42m', '\x1b[30msuccess \x1b[0m', 'Server has started.');
  console.log(colors.blue('listing at port 8080...'));
  // console.log('Server  has started.'.info);
}
// module.exports = start;
exports.start = start;
