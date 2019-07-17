import 'reflect-metadata'
import { createKoaServer } from 'routing-controllers'
import '@/controllers/user-controller'

const app = createKoaServer()

export default app.callback()
