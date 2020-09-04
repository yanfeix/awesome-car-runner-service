const express = require('express')
const { getAllUsers, addUsers} = require('../controllers/user-controller')

const router = express.Router()

router.get('/users', async (req, res, next) => getAllUsers(req, res).catch(next))
router.post('/users', async (req, res, next) => addUsers(req, res).catch(next))

module.exports = router

