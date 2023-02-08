import UserEntity from '../../../domain/entities/User.entity'
import AbsUserRepo from '../../../domain/repositories/AbsUserRepo'
import { UserIdVO } from '../../../domain/vo/BaseId.vo'
import makeRequest from '../axios'

interface IReqPostUser {
  name: string
  email: string
  phone: string
}
interface IResGetUserById {
  code: string
  message: string
  data: {
    user: {
      id: string
      name: string
      email: string
      type: string
      birth: number
      gender: string
      phone: string
      address: null | {
        country: string
        state: string
        city: string
        street: string
        zipCode: string
      }
    }
  }
}

const _entityToReq = (entity: UserEntity) => {
  const requestData: IReqPostUser = {
    name: entity.name,
    email: entity.email.value,
    phone: entity.phone,
  }
  return requestData
}
const _resToEntity = (res: IResGetUserById): UserEntity => {
  return new UserEntity({
    id: res.data.user.id || '',
    name: res.data.user.name || '',
    email: res.data.user.email || '',
    phone: res.data.user.phone || '',
    gender: res.data.user.gender || '',
    type: res.data.user.type || '',
    birth: res.data.user.birth || 0,
    address: res.data.user.address || {
      country: '',
      state: '',
      city: '',
      street: '',
      zipCode: '',
    },
  })
}

export default class UserRepo implements AbsUserRepo {
  async save(user: UserEntity): Promise<UserEntity> {
    const req = { method: 'POST', url: `/users`, data: _entityToReq(user) }
    const res = await makeRequest(req)
    return _resToEntity(res.data)
  }
  async findById(userId: UserIdVO): Promise<UserEntity> {
    const req = { method: 'GET', url: `/users/${userId.value}` }
    const res: { data: IResGetUserById } = await makeRequest(req)
    return _resToEntity(res.data)
  }
}
