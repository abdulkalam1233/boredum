const compose = require('composable-middleware');
const { JWT } = require('../config');
const {decodeToken} = require('../helpers/jwt.helper');
/**
 * @apiDefine isAuthenticated
 *
 * @apiHeader {String} Authorization User bearer token
 *
 * @apiError (Error 401) AuthHeaderMissing Please make sure your request has an Authorization header!
 * @apiError (Error 401) TokenExpired Token has expired!
 * @apiError (Error 500) InvalidToken Invalid Token!
 */
function isAuthenticated() {
  return compose().use(async (req, res, next) => {
    let { authorization: bearerToken } = req.headers;
    
    if(!bearerToken){
      bearerToken = req.query.token;
    }

    if (!bearerToken) {
      return res.status(401).send({
        message: 'Please make sure your request has an Authorization header!'
      });
    }
    let authToken = bearerToken;
    if(authToken.includes('Bearer')) {
      [, authToken] = bearerToken.split(' ')
    }
    let payload;
    try {
      payload = await decodeToken({ token: authToken, secret: JWT.secret });
    } catch (e) {
      if (e.message === 'Token expired') {
        return res.status(401).send({ message: 'Token has expired!' });
      }
      return res.status(401).send({ message: 'Invalid Token!' });
    }

    if (!payload || !payload.email) {
      return res.status(401).send({ message: 'Invalid Token!' });
    }
    
    req.user = {
      email: payload.email,
      id: payload.id
    };
    // req.current_role_id = payload.user.current_role_id;

    return next();
  });
}

module.exports = {
  isAuthenticated
}