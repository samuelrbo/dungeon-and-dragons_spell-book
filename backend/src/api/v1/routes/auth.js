const axios = require('axios');
const jwt = require('jsonwebtoken');
const moment = require('moment');

module.exports = (router) => {

  const ELASTIC_URL = process.env.ELASTIC_URL;
  const { AUTH_TYPES, JWT_SECRET, JWT_EXPIRATION } = require('../config/auth');


};
