const axios = require('axios');
const jwt = require('jsonwebtoken');
const moment = require('moment');

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

  router.post('/login', (req, res) => {
    // TODO form login
  });
};
