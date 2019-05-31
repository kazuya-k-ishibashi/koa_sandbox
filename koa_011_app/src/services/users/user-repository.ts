import { v1 as uuid } from 'uuid'
import User from '../../models/users/user'
import UserId from '../../models/users/user-id'


class UserRepository {

  private static _instance: UserRepository

  private constructor() {
  }

  static getInstance(): UserRepository {
    if (this._instance == null) {
      this._instance = new UserRepository()
    }
    return this._instance
  }

  getNewUser(): User {
    return new User(UserId.valueOf(uuid()))
  }

}


export default UserRepository.getInstance()
