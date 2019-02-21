'use strict';

require('dotenv').config({ silent: true });

const cluster = require('cluster');
const CPUs = require('os').cpus().length;

const app = require('./app');
const PORT = process.env.PORT || 7654;

if (cluster.isMaster) {
  console.log('==============================');
  console.log('======= SPELL BOOK API =======');
  console.log('==============================');
  console.log('    !!! Running Master !!!    ');

  for (let i=0; i<CPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`[WARN] Worker ${worker.process.pid} died!`);
    console.log(`       Code: ${code}`);
    console.log(`       Signal: ${signal}`);

    console.log('[INFO] Initializing a new worker');
    cluster.fork();
  });

} else {
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[INFO] SBAPI -> Running on port: ${PORT}`);
    console.log(`[INFO] SBAPI -> Running ${cluster.isMaster ? 'MASTER' : 'CHILD'}\n`);
  });
}
