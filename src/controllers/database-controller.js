const { databaseConnection } = require('../db')

const testConnection = async (req, res, next) => {
    const result = await databaseConnection.test()
    res.send(result)
}

module.exports = {
    testConnection
}
