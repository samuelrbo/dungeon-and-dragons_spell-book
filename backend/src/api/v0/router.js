module.exports = (app, express) => {
  const router = express.Router();

  router.get('/', (req, res) => {
    res.send('API v0 - Release');
  });

  app.use('/api/v0', router);
};
