const cluster = require('cluster');
const CPUs = require('os').cpus().length;

// Using dotenv-safe to validate if all env was setted (using .env.example to checke env by name)
const path = require('path');
require('dotenv-safe').config({
  silent: true,
  path: path.join(__dirname, '.env'),
  example: path.join(__dirname, '.env.sample')
});

const app = require('./src/app');

if (cluster.isMaster) {
  console.log('============================================================');
  console.log(`${process.env.APP_NAME}`);
  console.log('============================================================');
  console.log(`[${process.env.APP_NAME}] Running MASTER process`);

  for (let i=0; i<CPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`[${process.env.APP_NAME}] Worker ${worker.process.pid} died!\n\tCode: ${code}\n\tSignal: ${signal}`);
    console.log(`[${process.env.APP_NAME}] Initializing a new worker`);
    cluster.fork();
  });

} else {
  app.listen(process.env.PORT, '0.0.0.0', () => {
    console.log(`[${process.env.APP_NAME}] Running on port: ${process.env.PORT}`);
    console.log(`[${process.env.APP_NAME}] Running ${cluster.isMaster ? 'MASTER' : 'CHILD'}\n`);
  });
}
