import http from 'http';
import app from './app';
import chalk from 'chalk';

const server = http.createServer(app);

server.listen(process.env.PORT, () => {
  console.log(
      chalk.yellow('App is running at http://localhost:%d in %s mode'),
      process.env.PORT,
      process.env.NODE_ENV,
  );
  console.log('Press CTRL-C to stop\n');
});

export default server;
