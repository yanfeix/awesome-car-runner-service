const express = require('express')
const path = require('path')
const getUsers = require('./db/user')

const router = express.Router()

// Routes
router.get(`/`, (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

router.get('/isActive', (req, res) => {
    const appEnv = process.env.ENV
    res.send({
       appEnv
    })
})

router.get('/user', async (req, res) => {
  const result = await getUsers()
  res.status(200).send(result)
})

router.get('/user/:id', (req, res) => {
  const id = req.params.id
  res.send({
    id: id,
    title: 'serverless framework',
    link: 'https://serverless.com'
  })
})

router.get('/build', (req, res) => {
  const now = Date()
  res.status(200).send(now)
})

router.get('/404', (req, res) => {
  res.status(404).send('Not found')
})

router.get('/500', (req, res) => {
  res.status(500).send('Server Error')
})

// Error handler
router.use(function(err, req, res, next) {
  console.error(err)
  res.status(500).send('Internal Serverless Error')
})

module.exports = router

