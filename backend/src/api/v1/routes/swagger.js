const PORT = process.env.PORT;
const HOST = process.env.HOST;

module.exports = (app) => {
  const expressSwagger = require('express-swagger-generator')(app);

  let options = {
    swaggerDefinition: {
      info: {
        description: 'API to consume D&D spell book details filtering by D&D version and character\'s class',
        title: 'D&D Spell Book API',
        version: '1.0.0'
      },
      host: `${HOST}:${PORT}`,
      basePath: '/v1',
      produces: [,
        'application/json',
      ],
      schemes: ['http', 'https'],
      securityDefinitions: {
        JWT: {
          type: 'apiKey',
          in: 'header',
          name: 'Authorization',
          description: '',
        },
      },
    },
    basedir: __dirname+'/../../',
    files: ['./**/*.js']
  };

  expressSwagger(options);
};
