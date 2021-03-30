import DataTypes from 'sequelize'
import { sequelizeInstance } from '../sequelize-instance'

const userModel = sequelizeInstance.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    mobile: {
        type: DataTypes.STRING,
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
            fields: ['openId', 'unionId', 'mobile']
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

export {
    userModel
}
