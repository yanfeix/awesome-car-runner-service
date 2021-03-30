import { userQuery } from '../db'

const getAllUsers = async (req, res) => {
    const result = await userQuery.getAllUsers()
    res.status(200).send(result)
}

const addUsers = async (req, res) => {
    const users = req.body
    await userQuery.addUsers(users)
    res.status(201).send('Created')
}

export {
    getAllUsers,
    addUsers
}
