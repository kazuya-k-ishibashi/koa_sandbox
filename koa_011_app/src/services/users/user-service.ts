import User from '../../models/users/user'
import userRepository from './user-repository'


class UserService {

  private static _instance: UserService

  private _userRepository = userRepository

  private constructor() {
  }

  static getInstance(): UserService {
    if (this._instance == null) {
      this._instance = new UserService()
    }
    return this._instance
  }

  getNewUser(): User {
    return userRepository.getNewUser()
  }

}

export default UserService.getInstance()
