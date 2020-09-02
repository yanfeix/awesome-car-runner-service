const { userQuery } = require('../db')

const getAllUsers = async (req, res, next) => {
    const result = await userQuery.getAllUsers()
    res.status(200).send(result)
}

const addUser = async (req, res, next) => {
    await userQuery.addUser()
    res.send('Created')
}

module.exports = {
    getAllUsers,
    addUser
}
