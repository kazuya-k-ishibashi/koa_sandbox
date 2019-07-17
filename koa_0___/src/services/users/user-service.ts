import { Service } from 'typedi'
import UserRepository from '@/services/users/user-repository'


@Service()
export default class UserService {

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
