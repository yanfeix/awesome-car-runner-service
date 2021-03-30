import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import compression from 'compression'
import routes from './routes'
import { exceptionHandler, notFoundHandler } from './middlewares/error-handler'

const app = express()

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

module.exports=app