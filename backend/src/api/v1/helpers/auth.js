const jwt = require('jsonwebtoken');
const { AUTH_TYPES, JWT_SECRET } = require('../config/auth');

const HELPER = {};

HELPER.validateJWT = (req, res, next) => {
  let token = req.headers['x-access-token'] || req.headers['authorization'];

  if (token && token.startsWith('Bearer ')) {
    token = token.slice(7, token.length);
  }

  if (!token) {
    console.log('[ERR_JWT] JWT not passed');
    return res.status(401).json({ success: false, authorization: false, message: 'Unauthorized!' });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      console.log(`[ERR_JWT] ${err}`);
      return res.status(401).json({ success: false, authorization: false, message: 'Unauthorized!' });
    }

    req.jwt_decoded = decoded;
    next();
  });
};

HELPER.checkUserType = (userType, req, res, next) => {
  if (req.jwt_decoded.userType !== userType) {
    return res.status(403).json({ success: false, authorization: false, message: 'Forbidden!' });
  }
  next();
};

HELPER.isAdmin = (req, res, next) => {
  HELPER.checkUserType(AUTH_TYPES.ADMIN, req, res, next);
};

HELPER.isUser = (req, res, next) => {
  HELPER.checkUserType(AUTH_TYPES.USER, req, res, next);
};

module.exports = { HELPER };
