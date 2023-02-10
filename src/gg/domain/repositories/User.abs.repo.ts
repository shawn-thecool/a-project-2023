import { AxiosPromise } from 'axios'
import { UserEntity } from '../entities'
import { UserIdVO } from '../vo'

export default abstract class UserAbsRepo {
  abstract save(user: UserEntity): Promise<AxiosPromise<UserEntity>>
  abstract findById(userId: UserIdVO): Promise<AxiosPromise<UserEntity>>
}
