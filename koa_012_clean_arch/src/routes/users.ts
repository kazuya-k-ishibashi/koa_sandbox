import Router from 'koa-router'
import UserController from '@/controllers/user-controller'


const router = new Router()
const userController = UserController.getInstance()

router
  .get('/', userController.findAll)
  .get('/:id', userController.findById)


export default router
