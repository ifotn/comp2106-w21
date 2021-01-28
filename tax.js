// use node's http library to create a web server
const http = require('http')

// user node's url library to read the URL for a parameter called "subtotal"
const url = require('url')

// start web server
http.createServer((req, res) => {
    // http header
    res.writeHead(200, { 'Content-Type': 'text-plain'})

    // page content
    res.write('<h3>Tax Calculator</h3>')

    // use the url library to parse the url to read the subtotal parameter value eg. ?subtotal=100
    // similar to using $_GET in PHP
    let query = url.parse(req.url, true).query;

    let subTotal = query.subtotal

    // calculate the tax & total based on the subTotal
    // js is loosely-typed: variable types are implied (and can be changed)
    // c# is strongly-typed: variable types are explicit (and can't be changed)
    let tax = subTotal * .13
    let total = parseFloat(subTotal) + tax

    // display values
    res.write('<h4>Sub Total: ' + subTotal + '</h4>' +
        '<h4>Tax: ' + tax + '</h4>' +
        '<h4>Total: ' + total + '</h4>')

    // end response
    res.end()
}).listen(3000); // listen for events on port 3000

console.log('Server running on port 3000');
