/* eslint-disable no-undef */
const { ENV } = require('../common/env-type')

const {
    NODE_ENV,
    DB_CONNECT_STRING,
    WECHAT_APP_ID,
    WECHAT_APP_SECRET
} = process.env

const isLocal = NODE_ENV === ENV.Local

const DATABASE_CONNECTION_STRING = isLocal
    ? 'postgres://postgres:123456@localhost:5432/awesomeCarRunner'
    : DB_CONNECT_STRING

const config = {
    DATABASE_CONNECTION_STRING,
    WECHAT_APP_ID,
    WECHAT_APP_SECRET,
    NODE_ENV
}

module.exports = config
