const { Pool } = require('pg')
const { dbConnectionString } = require('../config')

const pool = new Pool({
    connectionString: dbConnectionString
})

module.exports = {
  query: (text, params) => pool.query(text, params),
}
