DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS users (
    "id"             SERIAL          PRIMARY KEY ,
    "name"           VARCHAR(50)     NOT NULL    ,
    "mobile"         VARCHAR(20)     NOT NULL    ,
    "gender"         VARCHAR(1)      NOT NULL    ,
    "unionId"        VARCHAR(50)                 ,
    "openId"         VARCHAR(50)                 ,
    "wechatAccount"  TEXT                        ,
    "avatarUrl"      TEXT                        ,
    "createdAt"      TIMESTAMP WITH TIME ZONE    ,
    "updatedAt"      TIMESTAMP WITH TIME ZONE                            
);
