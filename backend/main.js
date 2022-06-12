const colors = require('colors')

// Server JS
const { HOST, PORT } = require('./config')
const express = require('express')
const morgan = require('morgan')


// Initialization
const app = express()

// Middlewares
app.use(morgan('dev'))


app.get( '/', (req, res) => {
    res.send('Hello World!')    
})



app.listen( PORT, HOST, () => {
    console.log(`\nApp listening on http://${HOST}:${PORT}\n`.green.bold)
})

