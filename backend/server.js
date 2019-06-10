const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

const env = process.env.NODE_ENV;
const port = process.env.PORT;
const appName = process.env.APP_NAME;

// Using dotenv-safe to validate if all env was setted (using .env.example to checke env by name)
const path = require('path');
require('dotenv-safe').config({
  silent: true,
  path: path.join(__dirname, '.env'),
  example: path.join(__dirname, '.env.example')
});

const app = require('./src/app');

if (cluster.isMaster) {
  console.log('============================================================');
  console.log(`${appName}`);
  console.log('============================================================');
  console.log(`[${appName}] Running MASTER process`);

  for (let i=0; i<CPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`[${appName}] Worker ${worker.process.pid} died!\n\tCode: ${code}\n\tSignal: ${signal}`);
    console.log(`[${appName}] Initializing a new worker`);
    cluster.fork();
  });

} else {
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[${appName}] Running on port: ${PORT}`);
    console.log(`[${appName}] Running ${cluster.isMaster ? 'MASTER' : 'CHILD'}\n`);
  });
}
