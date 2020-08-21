const pool = require('./pool')

const createTable = async () => {
    await pool.query(`
        CREATE TABLE IF NOT EXISTS users (
            ID serial NOT NULL,
            NAME           TEXT         NOT NULL,
            EMAIL          CHAR(50)     NOT NULL,
            SITE          CHAR(50)     NOT NULL
        );
    `);

    await pool.query(`
        INSERT INTO users
            (NAME,EMAIL,SITE)
        VALUES
            ('YANFEI', 'g@mail.com', 'www.exp.com')
    `)
}

const getUsers = async () => {
    const { rows } = await pool.query('SELECT * FROM users')
    console.log({ rows })
    return rows
}

module.exports = getUsers
