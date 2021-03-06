import { Service } from 'typedi'
import InMemoryDatabase from '@/infrastructures/inmemory-database'
import RoleDto from '@/infrastructures/users/role-dto'


@Service()
export default RoleDao {

  constructor(
      private inmemoryDatabase: InMemoryDatabase) {
    this.roles = inmemoryDatabase.roles
  }

  findAll(): RoleDto[] {
    return this.roles.slice()
  }

  findById(id: number): RoleDto? {
    return this.roles.find(c => c.id === id)
  }

}
