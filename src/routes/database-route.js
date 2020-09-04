const express = require('express')
const { testConnection } = require('../controllers/database-controller')

const router = express.Router()

router.get('/status', testConnection)

module.exports = router

