import { Context, Request, Response } from 'koa'
import Router from 'koa-router'
import userService from '../services/users/user-service'


const router = new Router()

router
  .get('/', async (ctx: Context, next: Function) => {
    ctx.body = 'users'
  })
  .get('/new', async (ctx: Context, next: Function) => {
    ctx.body = userService.getNewUser()
  })


export default router
