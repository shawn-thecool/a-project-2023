import { AxiosPromise } from 'axios'
import { UserEntity } from '../../../domain/entities'
import UserAbsRepo from '../../../domain/repositories/User.abs.repo'
import { UserIdVO } from '../../../domain/vo'
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

export class UserRepo implements UserAbsRepo {
  async save(user: UserEntity): Promise<AxiosPromise<UserEntity>> {
    const req = { method: 'POST', url: `/users`, data: _entityToReq(user) }
    return makeRequest(req).then((res) => {
      res.data = _resToEntity(res.data)
      return res
    })
  }
  async findById(userId: UserIdVO): Promise<AxiosPromise<UserEntity>> {
    const req = { method: 'GET', url: `/users/${userId.value}` }
    return makeRequest(req).then((res) => {
      res.data = _resToEntity(res.data)
      return res
    })
  }
}
