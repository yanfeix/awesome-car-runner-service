const { promises: fsPromise } = require('fs')
const { resolve } = require('path')
const pool = require('../pool')

const readSqlScript = async (fileName) => {
    /* eslint-disable-next-line no-undef */
    const filePath = resolve(__dirname, `./sql/${fileName}-table.sql`)
    return fsPromise.readFile(filePath)
        .then(content => content.toString())
        .catch(err => console.log(err))
}

const createTableIfNotExist = async (tableName) => {
    const userSql = await readSqlScript(tableName)
    console.log(userSql)
    await pool.query(userSql)
}

const initialize = async () => {
    await createTableIfNotExist('users')
}
    
module.exports = initialize
