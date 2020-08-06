function route(handle, pathname, response, request) {
  console.log(`About to route a request for ${pathname}`, 'handle=', handle);
  console.log('1111', typeof handle[pathname]);
  if (typeof handle[pathname] === 'function') {
    handle[pathname](response, request);
  } else {
    console.log(`No request handler found for ${pathname}`);
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write('404 Not found');
    response.end();
  }
}

exports.route = route;
