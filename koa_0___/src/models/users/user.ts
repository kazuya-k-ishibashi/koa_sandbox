import Role from '@/models/users/role'


export default User {

  constructor(
      public readonly id: number,
      public readonly code: string,
      public readonly role: Role) {
  }
}
