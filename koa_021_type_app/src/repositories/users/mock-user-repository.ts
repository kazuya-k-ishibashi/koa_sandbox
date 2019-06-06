import { Service } from 'typedi'
import UserRepository from './user-repository'


@Service()
export default class MockUserRepository extends UserRepository {

  constructor() {
    super()
  }

  findAll() {
    return [
      { id: '234', name: 'mock1' },
      { id: '345', name: 'mock2' },
      { id: '456', name: 'mock3' },
    ]
  }

  findById(id: string) {
    return { id, name: 'mock' + id }
  }

}
