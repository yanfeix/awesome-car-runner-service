import { userModel } from './models/user-model'

const addUsers = async (users) => {
    await userModel.bulkCreate(users)
}

const getAllUsers = async () => {
    const result = await userModel.findAll()
    return result;
}

export {
    getAllUsers,
    addUsers
}
