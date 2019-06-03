import User from '@/models/user'


export default class UserRepository {

  private static _instance: UserRepository

  private constructor() {
  }

  static getInstance(): UserRepository {
    if (this._instance == null) {
      this._instance = new UserRepository()
    }
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
