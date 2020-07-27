var server = require('./server');
var router = require("./router");
var requestHandlers = require("./requestHandlers");


// console.log(server)
// console.log('requestHandlers= ', requestHandlers)
// server()
var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

server.start(router.route, handle);