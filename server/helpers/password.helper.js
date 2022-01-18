const bcrypt = require('bcrypt');
const { PASSWORD_CONFIG } = require('../config');

const hashPassword = (plainPassword)  => {
    return bcrypt.hash(plainPassword, PASSWORD_CONFIG.salt);
}

const matchPassword = (hashPassword, plainPassword) => {
    return bcrypt.compare(plainPassword, hashPassword);
}

module.exports = {
    hashPassword,
    matchPassword,
}