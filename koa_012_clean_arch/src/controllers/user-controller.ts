//import User from '@/models/user'
import { Context } from 'koa'
import UserService from '@/services/user-service'


export default class UserController {

  private static _instance: UserController

  private userService: UserService

  private constructor() {
    console.log('UserController#constructor()')
    this.userService = UserService.getInstance()
  }

  static getInstance(): UserController {
    console.log('UserController#getInstance()')
    if (!this._instance) {
      this._instance = new UserController()
    }
    console.log('UserController: ', this._instance)
    return this._instance
  }


  findAll(ctx: Context, next: Function) {
    ctx.body = this.userService.findAll()
  }

  findById(ctx: Context, next: Function) {
    ctx.body = this.userService.findById(ctx.params.id)
  }

}
