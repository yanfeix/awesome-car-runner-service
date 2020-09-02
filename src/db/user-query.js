const { userModel } = require('./models/user-model')

const addUser = async () => {
    const user = await userModel.create({
        name: 'Yanfei',
        mobile: '15818688723',
        gender: 'M',
    })
}

const getAllUsers = async () => {
    const result = await userModel.findAll()
    return result;
}

module.exports = {
    getAllUsers,
    addUser
}
