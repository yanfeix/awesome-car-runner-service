const { NODE_ENV } = require('../config')
const { ENV } = require('../common/env-type')

const notFoundHandler = (req, res, next) => {
    const err = new Error('Not Found')
    err.status = 404
    next(err)
}

/* eslint-disable-next-line no-unused-vars */
const exceptionHandler = (err, req, res, next) => {
    const { status } = err
    res.status(status || 500)
    if (NODE_ENV !== ENV.Production) {
        res.send(err)
    }
}

module.exports = {
    notFoundHandler,
    exceptionHandler
}
