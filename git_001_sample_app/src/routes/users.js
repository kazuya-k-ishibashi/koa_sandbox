const Router = require('koa-router')


const router = new Router()

router
  .get('/', async (ctx, next) => {
    ctx.body = findAll()
  })
  .get('/:id', async (ctx, next) => {
    ctx.body = findById(+ctx.params.id)
  })
  .post('/', async (ctx, next) => {
    const { name, age } = ctx.request.body
    register(""+name, +age)
    ctx.body = findAll()
  })


class User {
  constructor(id, name, age) {
    this.id = id
    this.name = name
    this.age = age
  }
  greeting() {
    return `Hello, I'm ${this.name}`
  }
}

const users = [
  new User(1, 'aaa', 21),
  new User(2, 'bbb', 22),
  new User(3, 'ccc', 23),
]

function findAll() {
  return users.slice()
}

function findById(id) {
  return users.find(user => user.id === id)
}

function register(name, age) {
  const maxId = Math.max(...users.map(user => user.id))
  users.push(new User(maxId + 1, name, age))
}

function update(id, name, age) {
  const index = users.findIndex(user => user.id === id)
  users[index] = new User(id, name, age)
}

module.exports = router
