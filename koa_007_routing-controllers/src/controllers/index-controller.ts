import { JsonController, Get } from 'routing-controllers'


@JsonController('/')
class IndexController {

  constructor() {
  }

  @Get()
  hello() {
    return { message: 'Hello.' }
  }

}
