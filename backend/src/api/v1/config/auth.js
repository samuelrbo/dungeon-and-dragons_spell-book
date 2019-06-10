const AUTH_TYPES = {
  ADMIN: 'ADMIN',
  USER: 'USER',
};

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRATION = process.env.JWT_EXPIRATION;

module.exports = {
  AUTH_TYPES, JWT_SECRET, JWT_EXPIRATION
};
