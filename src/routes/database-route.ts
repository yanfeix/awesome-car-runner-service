import express from 'express'
import { testConnection } from '../controllers/database-controller'

const router = express.Router()

router.get('/status', testConnection)

export default router

