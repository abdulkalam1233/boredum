require('dotenv').config()

const DB_OPTIONS = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME
}

const JWT = {
    secret: process.env.SECRET,
    expires: 24 * 60 * 60,
}

const PASSWORD_CONFIG = {
    secret: process.env.SECRET,
    salt: 10
}

module.exports = {
    DB_OPTIONS,
    JWT,
    PASSWORD_CONFIG,
}