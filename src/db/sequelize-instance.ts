import { Sequelize } from 'sequelize-typescript'
import { DATABASE_CONNECTION_STRING, DATABASE_DIALECT } from '../config'

const sequelizeInstance = new Sequelize(DATABASE_CONNECTION_STRING, { dialect: DATABASE_DIALECT})

export {
    sequelizeInstance
}
