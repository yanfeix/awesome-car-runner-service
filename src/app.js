const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const compression = require('compression')
const routes = require('./routes')
const { exceptionHandler, notFoundHandler } = require('./middlewares/error-handler')

const app = express()

// Initialize Database
// initializeDatabase()

// Middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use(compression())

// Routes
app.use(routes)

// Error Handling
app.use(notFoundHandler)
app.use(exceptionHandler)

app.listen(3000)

module.exports = app
