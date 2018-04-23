import Hapi from 'hapi';
import Logger from './logger';

const PORT = process.env.PORT;
const server = Hapi.server({
  port: PORT,
  host: 'localhost'
});

const init = async () => {
  await server.start();
  Logger.info(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
  Logger.error(err);
  process.exit(1);
});

init();
