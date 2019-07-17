const Router = require('koa-router')
const users = require('./users')
const items = require('./items')


const router = new Router()

router.use('/users', users.routes(), users.allowedMethods())
router.use('/items', items.routes(), items.allowedMethods())

module.exports = router
