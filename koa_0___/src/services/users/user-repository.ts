import { Service } from 'typedi'
import User from '@/models/users/user'
import UserDao from '@/infrastructures/users/user-dao'
import UserDto from '@/infrastructures/users/user-dto'


@Service()
export default class UserRepository {

  constructor(
      private readonly userDao: UserDao) {
  }

  findAll(): User[] {
    return userDao.findAll()
      .map(userDto => dtoToModel(userDto))
  }

  findById(id: string): User[] {
    const userDto: UserDto = userDao.findById(id)
    return dtoToModel(userDto)
  }

  private dtoToModel(userDto: UserDto): User {
    return new User(
      userDto.id,
      userDto.code,
      Role[userDto.role_id]
    )
  }

}
