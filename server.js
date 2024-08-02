
const Hapi = require('@hapi/hapi');
const db = require('./src/config/db');
const userRoutes = require('./src/routes/userRoutes');

const init = async () => {
  const server = Hapi.server({
    port: 3001,
    host: 'localhost'
  });
  console.log(server,"siya")

  server.route(userRoutes);
  console.log(server.route(userRoutes),"raja")

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
