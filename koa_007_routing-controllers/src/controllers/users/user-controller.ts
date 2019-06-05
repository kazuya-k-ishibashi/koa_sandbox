import { JsonController, Get, Param } from 'routing-controllers'


@JsonController('/users')
class UserController {

  constructor() {
  }

  @Get()
  findAll() {
    return [
      { id: '234', name: 'kkk' },
      { id: '345', name: 'ttt' },
      { id: '456', name: 'nnn' },
    ]
  }

  @Get('/:id')
  findById(@Param('id') id: string) {
    return { id, name: 'name' }
  }

}
