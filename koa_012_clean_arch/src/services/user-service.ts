import User from '@/models/user'
import UserRepository from '@/repositories/user-repository'


export default class UserService {

  private static _instance: UserService

  private userRepository: UserRepository

  private constructor() {
    this.userRepository = UserRepository.getInstance()
  }

  static getInstance(): UserService {
    if (this._instance == null) {
      this._instance = new UserService()
    }
    return this._instance
  }


  findAll(): User[] {
    return this.userRepository.findAll()
  }

  findById(id: string): User {
    return this.userRepository.findById(id)
  }

}
