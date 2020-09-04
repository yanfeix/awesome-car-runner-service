const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
    /* eslint-disable-next-line no-undef */
    const { NODE_ENV } = process.env
    res.status(200).send({
       env: NODE_ENV || '',
       now: Date()
    })
})

module.exports = router

