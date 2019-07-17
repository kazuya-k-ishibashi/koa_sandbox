import Roll from '@/models/users/roll'


export default abstract class User {

  cpnstructor(
      protected id: number,
      protected code: string,
      protected roll: Roll) {
  }

}
