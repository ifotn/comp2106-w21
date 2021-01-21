// use node's built-in http module to create & start a local web server
const http = require('http');

// start the local web server, checking for http request & response events
http.createServer((req, res) => {
  // send an HTTP header with a 200 OK response
  res.writeHead(200, { 'Content-Type': 'text-plain'} );

  // write some text to the http response
    res.write("Hello World - our first node page");

    // end response
    res.end();
}).listen(3000);

// display a message in console
console.log('Server running at http://localhost:3000');
