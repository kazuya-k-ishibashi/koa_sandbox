import 'reflect-metadata'
import { createKoaServer, useContainer } from 'routing-controllers'
import { Container } from 'typedi'
import '@/controllers/index-controller'
import '@/controllers/users/user-controller'


useContainer(Container)

const app = createKoaServer()

export default app.callback()
