const path = require('path');
const fs = require('fs');

module.exports = (app, express) => {
  const router = express.Router();

  router.get('/', (req, res) => {
    res.send('API v1 - Release');
  });

  // Login/Logout endpoints
  require('./routes/auth')(router);

  // Setup API endpoints
  app.use('/api/v1', router);

  // Swagger
  require('./routes/swagger')(app);
};
