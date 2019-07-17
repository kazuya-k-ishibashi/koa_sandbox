const Koa = require('koa')
const bodyparser = require('koa-bodyparser')
const json = require('koa-json')
const routes = require('./routes')


const app = new Koa()

app
  .use(bodyparser())
  .use(json())

app
  .use(routes.routes())
  .use(routes.allowedMethods())

app.use(async ctx => {
  ctx.body = `Hello, Koa!`
})

app.listen(3000, () => console.log(`Server listening: port 3000`))
