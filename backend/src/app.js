const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
};

const port = process.env.PORT;
const app = express();

app.set('port', port);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors(corsOptions));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  res.header('Access-Control-Expose-Headers', 'Content-Range');
  next();
});

fs.readdirSync(path.join(__dirname, 'api')).forEach(apiVersion => {
  require(`./api/${apiVersion}/router`)(app, express);
});

module.exports = app;
