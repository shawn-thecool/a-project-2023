import UserEntity from '../entities/User.entity'
import { UserIdVO } from '../vo/BaseId.vo'

export default abstract class AbsUserRepo {
  abstract save(user: UserEntity): Promise<UserEntity>
  abstract findById(userId: UserIdVO): Promise<UserEntity>
}
