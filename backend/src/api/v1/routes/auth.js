const axios = require('axios');
const jwt = require('jsonwebtoken');
const moment = require('moment');

const User = require('../models/user');

const ELASTIC_URL = process.env.ELASTIC_URL;
const { AUTH_TYPES, JWT_SECRET, JWT_EXPIRATION } = require('../config/auth');

module.exports = (router) => {

  /**
   * API logout
   *
   * @route GET /api/v1/logout
   * @returns {object} 200
   * @returns {Error}  default - Unexpected error
   */
  router.get('/logout', (req, res) => {
    return res.json({ success: true, authentication: false });
  });

  /**
   * API login
   *
   * @route POST /api/v1/login
   * @param {string} username.param.required - username or email - eg: user@domain.com
   * @param {string} password.param.required - user's password
   * @returns {User.model} 200 User info
   * @returns {error} 401 - Not authorized
   */
  router.post('/login', (req, res) => {
    return res.json(User);
  });
};
