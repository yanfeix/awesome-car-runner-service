import { databaseConnection } from '../db'

const testConnection = async (req, res, next) => {
    const result = await databaseConnection.test()
    res.send(result)
}

export {
    testConnection
}
