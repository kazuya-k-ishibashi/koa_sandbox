//import User from '@/models/user'
import { Context } from 'koa'
import UserService from '@/services/user-service'


export default class UserController {

  private static _instance: UserController

  private userService: UserService

  private constructor() {
    this.userService = UserService.getInstance()
  }

  static getInstance(): UserController {
    if (this._instance == null) {
      this._instance = new UserController()
    }
    return this._instance
  }


  findAll(ctx: Context, next: Function) {
    ctx.body = this.userService.findAll()
  }

  findById(ctx: Context, next: Function) {
    ctx.body = this.userService.findById(ctx.params.id)
  }

}
