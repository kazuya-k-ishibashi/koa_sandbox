import { Service } from 'typedi'


@Service()
export default class UserService {

  constructor() {
  }

  findAll() {
    return [
      { id: '234', name: 'kkk' },
      { id: '345', name: 'ttt' },
      { id: '456', name: 'nnn' },
    ]
  }

  findById(id: string) {
    return { id, name: 'name' }
  }

}
