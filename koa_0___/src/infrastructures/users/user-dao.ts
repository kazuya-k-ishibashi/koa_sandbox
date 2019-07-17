import { Service } from 'typedi'
import InMemoryDatabase from '@/infrastructures/inmemory-database'
import UserDti from '@/infrastructures/users/user-dto'


@Service()
export default UserDao {

  constructor(
      private inmemoryDatabase: InMemoryDatabase) {
    this.users = inmemoryDatabase.users
  }

  findAll(): UserDto[] {
    return this.users.slice()
  }

  findById(id: number): UserDto? {
    return this.users.find(c => c.id === id)
  }

}
