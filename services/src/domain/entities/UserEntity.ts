import { UserEntityFieldException } from '../exception'
import { UserIdVO, UserStatusEnumVO, DateVO } from '../valueObjects'

export class UserEntity {
  id: UserIdVO
  status: UserStatusEnumVO
  name: string
  email: string
  pwd: string
  createdAt: DateVO
  updatedAt: DateVO
  deletedAt: DateVO

  constructor(user: {
    id?: string
    status?: string
    name: string
    email: string
    pwd: string
    createdAt?: number
    updatedAt?: number
    deletedAt?: number
  }) {
    this.id = new UserIdVO(user.id)
    this.status = new UserStatusEnumVO(user.status)
    this.name = user.name
    this.email = user.email
    this.pwd = user.pwd
    this.createdAt = new DateVO(user.createdAt)
    this.updatedAt = new DateVO(user.updatedAt)
    this.deletedAt = new DateVO(user.deletedAt)
    this.create()
    this.validate()
  }

  verifyName(): boolean {
    return !!this.name
  }
  verifyEmail(): boolean {
    return !!this.email
  }
  verifyPwd(): boolean {
    return !!this.pwd
  }
  validate(): boolean {
    try {
      if (!this.verifyName()) throw new UserEntityFieldException('name')
      if (!this.verifyEmail()) throw new UserEntityFieldException('email')
      if (!this.verifyPwd()) throw new UserEntityFieldException('pwd')
      return true
    } catch (error) {
      return false
    }
  }

  create() {
    this.id = new UserIdVO(UserIdVO.uuid())
    this.status = new UserStatusEnumVO(UserStatusEnumVO.created)
    this.createdAt = new DateVO(DateVO.now())
  }
  update() {
    this.status = new UserStatusEnumVO(UserStatusEnumVO.updated)
    this.updatedAt = new DateVO(DateVO.now())
  }
  delete() {
    this.status = new UserStatusEnumVO(UserStatusEnumVO.deleted)
    this.updatedAt = new DateVO(DateVO.now())
    this.deletedAt = new DateVO(DateVO.now())
  }

  toJSON() {
    return {
      ...this,
      id: this.id.value,
      status: this.status.value,
      createdAt: this.createdAt.value,
      updatedAt: this.updatedAt.value,
      deletedAt: this.deletedAt.value,
    }
  }
}
