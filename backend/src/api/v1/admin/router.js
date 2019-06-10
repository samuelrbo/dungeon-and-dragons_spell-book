module.exports = (app, express) => {
  const admRouter = express.Router();

  admRouter.get('/', (req, res) => {
    res.send('ADM Router');
  });

  require('./routes/dashboard')(admRouter);

  // Setup API endpoints
  app.use('/api/v1/admin', admRouter);
};
