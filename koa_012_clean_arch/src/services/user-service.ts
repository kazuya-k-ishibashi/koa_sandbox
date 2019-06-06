import User from '@/models/user'
import UserRepository from '@/repositories/user-repository'


export default class UserService {

  private static _instance: UserService

  private userRepository: UserRepository

  private constructor() {
    console.log('UserService#constructor()')
    this.userRepository = UserRepository.getInstance()
  }

  static getInstance(): UserService {
    console.log('UserService#getInstance()')
    if (!this._instance) {
      this._instance = new UserService()
    }
    console.log('UserService: ', this._instance)
    return this._instance
  }


  findAll(): User[] {
    return this.userRepository.findAll()
  }

  findById(id: string): User {
    return this.userRepository.findById(id)
  }

}
