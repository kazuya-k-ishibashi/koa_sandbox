import Koa from 'koa'
import routes from './routes'


const app = new Koa()

app.use(routes.routes())

export default app.callback()
