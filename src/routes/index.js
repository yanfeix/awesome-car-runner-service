const express = require('express')
const activeRoute = require('./active-route')
const databaseRoute = require('./database-route')
const userRoute = require('./user-route')
const wechatRoute = require('./wechat-route')

const router = express.Router()

router.use('/active', activeRoute)
router.use('/db', databaseRoute)
router.use('/api', userRoute)
router.use('/api', wechatRoute)

module.exports = router
