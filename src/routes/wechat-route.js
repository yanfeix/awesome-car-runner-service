const express = require('express')
const querystring = require('querystring')
const axios = require('axios')
const config = require('../config')

const router = express.Router()

router.get('/auth', async (req, res, next) => {
    const code = req.query.code
    const query = querystring.stringify({
        appid: config.wechatAppId,
        secret: config.wechatAppSecret,
        js_code: code,
        grant_type: 'authorization_code'
    })
    const url = `https://api.weixin.qq.com/sns/jscode2session?${query}`
    const response = await axios.get(url)
    res.status(200).json(response.data)
})

module.exports = router
