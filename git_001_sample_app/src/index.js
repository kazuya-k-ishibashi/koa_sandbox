const Koa = require('koa')


const app = new Koa()

app.use(async ctx => {
  ctx.body = `Hello, Koa!`
})

app.listen(3000, () => console.log(`Server listening: port 3000`))
