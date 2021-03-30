import * as wechatService from '../services/wechat-service'

const getWechatAppInfo = async (req, res) => {
    const code = req.query.code
    const result = await wechatService.getWechatAppInfo(code)
    res.send(result)
}

export {
    getWechatAppInfo
}
