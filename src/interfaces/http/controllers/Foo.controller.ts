import { controller, httpGet, interfaces } from 'inversify-express-utils';

@controller('/foo')
export class FooController implements interfaces.Controller {
  constructor() {}

  @httpGet('/')
  index() {
    return 'Hello World';
  }
}
