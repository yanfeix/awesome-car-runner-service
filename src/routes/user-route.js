const express = require('express')
const { getAllUsers, addUser} = require('../controllers/user-controller')

const router = express.Router()

router.get('/user', getAllUsers)

router.get('/user/add', addUser)

// router.post('/user', addUser)

module.exports = router

