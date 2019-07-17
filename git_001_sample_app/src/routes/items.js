const Router = require('koa-router')


const router = new Router()

router
  .get('/', async (ctx, next) => {
    ctx.body = findAll()
  })


class Item {
  constructor(id, name, price) {
    this.id = id
    this.name = name
    this.price = price
  }
}

const items = [
  new Item(1, "iii", 123),
  new Item(2, "jjj", 234),
  new Item(3, "kkk", 345),
  new Item(4, "lll", 456),
]

function findAll() {
  return items.slice()
}

function findById(id) {
  return items.find(item => item.id === id)
}

function register(name, price) {
  const maxId = Math.max(...items.map(item => item.id))
  const item = items.push(new Item(maxId + 1, name, price))
  items.push(item)
  return items.id
}

function update(id, name, price) {
  const index = items.findIndex(item => item.id === id)
  items[index] = new Item(id, name, price)
}

module.exports = router
