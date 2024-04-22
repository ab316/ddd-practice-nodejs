import express from 'express';
import { Container } from 'inversify';
import { provide } from 'inversify-binding-decorators';
import { InversifyExpressServer } from 'inversify-express-utils';
import './controllers';

@provide(HttpServer)
export default class HttpServer {
  private readonly app: express.Application;

  constructor(container: Container) {
    const server = new InversifyExpressServer(container);
    server.setConfig((app) => {
      app.disable('x-powered-by');
    });

    this.app = server.build();
  }

  start() {
    this.app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  }
}
