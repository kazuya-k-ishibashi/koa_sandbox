


export default class UserId {

  private constructor(public readonly value: string) {
  }

  static valueOf(id: string): UserId {
    return new UserId(id)
  }

}
