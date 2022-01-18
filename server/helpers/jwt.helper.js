const jwt = require('jsonwebtoken');

const generateToken = ({
    payload,
    secret,
    expiresIn = 0
}) => {
    console.log(payload, secret, expiresIn);
    return jwt.sign(payload, secret, {
        expiresIn: expiresIn
    })
}

const decodeToken = ({
    token,
    secret,
    verify = true,
}) => {
    if(verify) {
        return jwt.verify(token, secret);
    }
    return jwt.decode(token);
}

module.exports = {
    generateToken,
    decodeToken,
}