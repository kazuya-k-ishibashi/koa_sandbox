
const Role = {
  Administrator: Symbol('Administrator'),
  Lawyer: Symbol('Lawyer'),
  Consultor: Symbol('Consultor')
}

class Role {

  constructor(
      public readonly id: number,
      readonly name: string,
      readonly description) {
  }

}

namespace Role {

  export const Administrator = new Role(1, '管理者', '管理者です')
    this.Lawyer = 2,
    this.Consultor = 3

}


export default Role
