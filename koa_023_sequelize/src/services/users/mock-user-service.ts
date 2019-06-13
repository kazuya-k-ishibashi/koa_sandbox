import { Service } from 'typedi'
import UserRepository from '@/repositories/users/user-repository'


@Service()
export default class MockUserService {

  constructor(
      private readonly userRepository: UserRepository) {
  }

  findAll() {
    return this.userRepository.findAll()
  }

  findById(id: string) {
    return this.userRepository.findById(id)
  }

}
