import { Service } from 'typedi'


export default class MessageFactory {

  create(name?: string) {
    return `Hello, ${ name ? name: 'World' }`
  }

}
