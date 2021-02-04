// link to connect npm package we just installed
let connect = require('connect')

// create a new connect app (replacing the use of node's http library)
let app = connect()

// create a function to handle http requests - next is optional, use to do something after the response
let helloWorld = (req, res, next) => {
    // send response header
    res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' })

    // write html response
    res.write('<h4>Hello World</h4>')

    // end response
    res.end()
}

let goodbyeWorld = (req, res, next) => {
    // send response header
    res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' })

    // write html response
    res.write('<h4>Goodbye World</h4>')

    // end response
    res.end()
}

let index = (req, res, next) => {
    // show Home page response at http://localhost:3000 but 404 if any other url requested
    if (req.url == '/') {
        // send response header
        res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'})

        // write html response
        res.write('<h4>Connect Home Page</h4>')

        // end response
        res.end()
    }
    else {
        // send response header
        res.writeHead(404, {'Content-Type': 'text/html; charset=UTF-8'})

        // write html response
        res.write('<h4>Not Found</h4>')

        // end response
        res.end()
    }
}

// map requests to call helloWorld or goodbyeWorld depending on url path
app.use('/hello', helloWorld)
app.use('/goodbye', goodbyeWorld)
app.use('/', index) // default route if no specific url given - must go LAST

// start the web server on port 3000
app.listen(3000)

// log a message to the console
console.log('Connect server running on port 3000')
