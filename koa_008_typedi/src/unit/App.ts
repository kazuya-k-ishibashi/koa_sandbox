import { Service, Inject } from 'typedi'
import MessageFactory from './MessageFactory'


export default class App {

  @Inject()
  messageFactory: MessageFactory


  constructor() {
  }

  run() {
    console.log(this.messageFactory.create())
  }
}
