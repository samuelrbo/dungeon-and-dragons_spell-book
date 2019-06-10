const moment = require('moment');
const { HELPER } = require('../../helpers/auth');

module.exports = (router) => {

  router.get('/dashboard', (req, res) => {
    return res.send('Dashboard');
  });
};
