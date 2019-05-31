import Koa from 'koa'
import bodyparser from 'koa-bodyparser'
import json from 'koa-json'
import routes from './routes'


const app = new Koa()
app
  .use(bodyparser())
  .use(json())

app
  .use(routes.routes())
  .use(routes.allowedMethods())


export default app.callback()
