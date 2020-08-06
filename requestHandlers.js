const { exec } = require('child_process');
const formidable = require('formidable');
const fs = require('fs');

function start(response) {
  console.log("Request handler 'start' was called.");
  exec('ls -lah', function (error, stdout) {
    console.log('stdout=', stdout);

    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write(stdout);
    response.end();
  });
}

function upload(response, request) {
  console.log("Request handler 'upload' was called.");
  const form = new formidable.IncomingForm();
  console.log('about to parse');
  form.parse(request, function (error, fields, files) {
    console.log('parsing done', request, fields, files);
    fs.renameSync(files.upload.path, './tmp/test.png');
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write('received image:<br/>');
    response.write("<img src='/show' />");
    response.end();
  });
}
function start2(response) {
  console.log("Request handler 'start' was called.");
  const body =
    '<html>' +
    '<head>' +
    '<meta http-equiv="Content-Type" ' +
    'content="text/html; charset=UTF-8" />' +
    '</head>' +
    '<body>' +
    '<form action="/upload" enctype="multipart/form-data" ' +
    'method="post">' +
    '<input type="file" name="upload">' +
    '<input type="submit" value="Upload file" />' +
    '</form>' +
    '</body>' +
    '</html>';
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(body);
  response.end();
}
function show(response) {
  console.log("Request handler 'show' was called.");
  fs.readFile('./tmp/test.png', 'binary', function (error, file) {
    if (error) {
      response.writeHead(500, { 'Content-Type': 'text/plain' });
      response.write(`${error}\n`);
      response.end();
    } else {
      response.writeHead(200, { 'Content-Type': 'image/png' });
      response.write(file, 'binary');
      response.end();
    }
  });
}
exports.start = start;
exports.upload = upload;
exports.start2 = start2;
exports.show = show;
