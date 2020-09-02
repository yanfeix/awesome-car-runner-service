/* eslint-disable no-undef */
const {
    NODE_ENV,
    DB_CONNECT_STRING,
    WECHAT_APP_ID,
    WECHAT_APP_SECRET
} = process.env

const isLocal = NODE_ENV === 'local'

const dbConnectionString = isLocal
    ? 'postgres://postgres:123456@localhost:5432/awesomeCarRunner'
    : DB_CONNECT_STRING

const config = {
    dbConnectionString,
    wechatAppId: WECHAT_APP_ID,
    wechatAppSecret: WECHAT_APP_SECRET
}

module.exports = config
