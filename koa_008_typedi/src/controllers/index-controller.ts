import { JsonController, Get } from 'routing-controllers'
import { Inject } from 'typedi'
import GreetingService from '@/services/greeting-service'


@JsonController('/')
class IndexController {

  constructor(
      private greetingService: GreetingService) {
    console.log("constructor: greetingService: ", this.greetingService)
  }

  @Get()
  hello() {
    return this.greetingService.hello()
  }

  @Get('/goodbye')
  goodbye() {
    return this.greetingService.goodbye()
  }

}
