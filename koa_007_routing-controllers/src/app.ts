import 'reflect-metadata'
import { createKoaServer } from 'routing-controllers'
import '@/controllers/index-controller'
import '@/controllers/users/user-controller'


const app = createKoaServer()

export default app.callback()
