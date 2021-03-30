import express from 'express'

const router = express.Router()

router.get('/', async (req, res) => {
    /* eslint-disable-next-line no-undef */
    const { NODE_ENV } = process.env
    res.status(200).send({
       env: NODE_ENV || '',
       now: Date()
    })
})

export default router

