const wechatService = require('../services/wechat-service')

const getWechatAppInfo = async (req, res, next) => {
    const code = req.query.code
    const result = await wechatService.getWechatAppInfo(code)
    res.send(result)
}

module.exports = {
    getWechatAppInfo
}
