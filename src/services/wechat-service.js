const querystring = require('querystring')
const axios = require('axios')
const { WECHAT_APP_ID, WECHAT_APP_SECRET } = require('../config')

const getWechatAppInfo = async (code) => {
    const query = querystring.stringify({
        appid: WECHAT_APP_ID,
        secret: WECHAT_APP_SECRET,
        js_code: code,
        grant_type: 'authorization_code'
    })
    const url = `https://api.weixin.qq.com/sns/jscode2session?${query}`
    const response = await axios.get(url)
    return response.data;
}

module.exports = { getWechatAppInfo }

