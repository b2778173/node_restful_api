const server = require('./server');
const router = require('./router');
const requestHandlers = require('./requestHandlers');

// console.log(server)
// console.log('requestHandlers= ', requestHandlers)
// server()
const handle = {};
handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;
handle['/start2'] = requestHandlers.start2;
handle['/show'] = requestHandlers.show;

server.start(router.route, handle);
