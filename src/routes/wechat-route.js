const express = require('express')
const { getWechatAppInfo } = require('../controllers/wechat-controller')

const router = express.Router()

router.get('/auth', async (req, res, next) => getWechatAppInfo(req, res).catch(next))

module.exports = router
