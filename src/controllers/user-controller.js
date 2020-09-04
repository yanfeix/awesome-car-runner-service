const { userQuery } = require('../db')

const getAllUsers = async (req, res, next) => {
    const result = await userQuery.getAllUsers()
    res.status(200).send(result)
}

const addUsers = async (req, res, next) => {
    const users = req.body
    await userQuery.addUsers(users)
    res.status(201).send('Created')
}

module.exports = {
    getAllUsers,
    addUsers
}
