function route(handle, pathname) {
    console.log("About to route a request for " + pathname, 'handle=', handle.pathname);
    console.log('1111', typeof handle[pathname])
    if (typeof handle[pathname] === "function") {
        handle[pathname]()
    } else {
        console.log("No request handler found for " + pathname);
    }
}


exports.route = route