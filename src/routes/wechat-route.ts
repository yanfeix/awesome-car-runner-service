import express from 'express'
import { getWechatAppInfo } from '../controllers/wechat-controller'

const router = express.Router()

router.get('/auth', async (req, res, next) => getWechatAppInfo(req, res).catch(next))

export default router
