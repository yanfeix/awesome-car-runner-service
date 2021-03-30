import express from 'express'
import activeRoute from './active-route'
import databaseRoute from './database-route'
import userRoute from './user-route'
import wechatRoute from './wechat-route'

const router = express.Router()

router.use('/active', activeRoute)
router.use('/db', databaseRoute)
router.use('/api', userRoute)
router.use('/api', wechatRoute)

export default router
