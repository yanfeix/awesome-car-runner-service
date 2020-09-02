const { Sequelize } = require('sequelize')
const { dbConnectionString } = require('../config')

const sequelizeInstance = new Sequelize(dbConnectionString)

module.exports = {
    sequelizeInstance
}
