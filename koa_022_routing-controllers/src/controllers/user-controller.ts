//import 'reflect-metadata'
import {
  JsonController,
  Param,
  //Body,
  Get,
  //Post,
  //Put,
  //Delete
} from 'routing-controllers'


@JsonController('/users')
export class UserController {

  @Get()
  getAll() {
    return [
      { id: '234', name: 'kk', birthday: '1234-56-78' },
      { id: '345', name: 'ii', birthday: '1234-56-78' },
      { id: '567', name: 'bb', birthday: '1234-56-78' }
    ]
  }

  @Get('/:id')
  getById(@Param('id') id: string) {
      return { id: id, name: 'kk', birthday: '1234-56-78' }
  }

}
