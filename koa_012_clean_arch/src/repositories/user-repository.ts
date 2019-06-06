import User from '@/models/user'


export default class UserRepository {

  private static _instance: UserRepository

  private constructor() {
    console.log('UserRepository#constructor()')
  }

  static getInstance(): UserRepository {
    console.log('UserRepository#getInstance()')
    if (!this._instance) {
      this._instance = new UserRepository()
    }
    console.log('UserRepository: ', this._instance)
    return this._instance
  }


  findAll(): User[] {
    return []
  }

  findById(id: string): User {
    return new User(
      id,
      'sample@sample.com',
      'sample user',
      'sssampleee',
      new Date()
    )
  }

}
