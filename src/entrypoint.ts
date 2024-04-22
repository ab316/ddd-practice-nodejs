import container from 'container';
import HttpServer from 'interfaces/http/server';

const entrypoint = async () => {
  const server = new HttpServer(container);
  server.start();
};

export default entrypoint;
