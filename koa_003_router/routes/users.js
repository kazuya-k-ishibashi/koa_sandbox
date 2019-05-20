const Router = require('koa-router')


const router = new Router()
router
  .get('/', (ctx, next) => {
    ctx.body = 'users'
  })
  .get('/:id', (ctx, next) => {
    ctx.body = `user: ${ctx.params.id}`
  })

module.exports = router
