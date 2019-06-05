import { JsonController, Get, Param } from 'routing-controllers'
//import { Inject } from 'typedi'
import UserService from '@/services/users/user-service'


@JsonController('/users')
class UserController {

  constructor(
      private userService: UserService) {
  }

  @Get()
  findAll() {
    return this.userService.findAll()
  }

  @Get('/:id')
  findById(@Param('id') id: string) {
    return this.userService.findById(id)
  }

}
