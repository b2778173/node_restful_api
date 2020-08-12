const colors = require('colors');

colors.setTheme({
  info: 'bgGreen',
  help: 'cyan',
  warn: 'yellow',
  success: 'bgBlue',
  error: 'bgRed',
});
function route(handle, pathname, response, request) {
  console.log(colors.black(` About to route a request for `).success, pathname);
  // console.log('1111', typeof handle[pathname]);
  if (typeof handle[pathname] === 'function') {
    handle[pathname](response, request);
  } else {
    console.log(colors.red(`No request handler found for ${pathname}`));
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write('404 Not found');
    response.end();
  }
}

exports.route = route;
