// link to express dependency we installed via npm
const express = require('express')

// create a new express application
const app = express()

// map requests at the root url to send a text response
app.use('/', (req, res) => {
    res.send('Hello world!')
})

// listen for events on port 3000
app.listen(3000)

// print message to console
console.log('Express server running on port 3000')
