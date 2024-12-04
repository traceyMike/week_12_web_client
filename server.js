const express = require('express') // instead of import use require
const path = require('path') // importing path
const bodyParser = require('body-parser')
// import index.js
const indexRouter = require('./routes/index.js')

const app = express() // creates web application server

// enable parsing of POST request body
app.use(bodyParser.urlencoded({ extended: false }))


const staticFileLocation = path.join(__dirname, 'public')
app.use(express.static(staticFileLocation))


// __dirname is where code is actually stored
// this code finds what is in views directory
// could be wherever the project is stored
// --dirname is where server.js - find and create location of views directory
// views is html files or things that become html files
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs') // use handlebars to generate views
// tell app where views (HTML files or templates) are

//// all requests to app are passed to indexRouter - has code 
// that receives request and generates response
app.use('/', indexRouter) // when server running, requests come in, web app server -
// figure out what kind of request and how to respond

// start server running
// told a port to run on, use it, or use 3000
const server = app.listen(process.env.PORT || 3000, function() {
    console.log('Server running on port', server.address().port)
})