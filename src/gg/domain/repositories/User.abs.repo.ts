import { UserEntity } from '../entities'
import { UserIdVO } from '../vo'

export default abstract class UserAbsRepo {
  abstract save(user: UserEntity): Promise<UserEntity>
  abstract findById(userId: UserIdVO): Promise<UserEntity>
}
