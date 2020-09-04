const { Sequelize } = require('sequelize')
const { DATABASE_CONNECTION_STRING } = require('../config')

const sequelizeInstance = new Sequelize(DATABASE_CONNECTION_STRING)

module.exports = {
    sequelizeInstance
}
