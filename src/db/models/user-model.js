const { DataTypes } = require('sequelize')
const { sequelizeInstance } = require('../sequelize-instance')

const userModel = sequelizeInstance.define('users', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'DRIVER'
    },
    mobile: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    unionId: {
        type: DataTypes.STRING
    },
    openId: {
        type: DataTypes.STRING,
    },
    wechatAccount: {
        type: DataTypes.STRING
    },
    avatarUrl: {
        type: DataTypes.STRING
    }
}, {
    indexes: [
        {
            fields: ['openId', 'unionId']
        }
    ]
})

const createTableIfNotExist = async () => {
    await userModel.sync()
}

const alterTable = async () => {
    await userModel.sync({ alter: true })
}

createTableIfNotExist()
alterTable()

module.exports = {
    userModel
}
