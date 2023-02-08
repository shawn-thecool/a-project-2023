import { IAddressVO, EmailVO, DateVO, AddressVO, GenderEnum, UserIdVO, UserTypeEnum } from '../vo'

export interface IUserEntity {
  id: string
  name: string
  email: string
  type: string
  birth: number
  address: IAddressVO
  gender: string
  phone: string
}

export class UserEntity {
  private _id: UserIdVO
  private _name: string
  private _email: EmailVO
  private _type: UserTypeEnum
  private _birth: DateVO
  private _gender: GenderEnum
  private _address: AddressVO
  private _phone: string

  constructor(data: IUserEntity) {
    this._id = new UserIdVO(data.id)
    this._name = data.name
    this._email = new EmailVO({ value: data.email })
    this._type = new UserTypeEnum(data.type || UserTypeEnum.viewer)
    this._birth = new DateVO({ value: data.birth })
    this._gender = new GenderEnum(data.gender || GenderEnum.other)
    this._address = new AddressVO(data.address)
    this._phone = data.phone
  }

  get id(): UserIdVO {
    return this._id
  }
  get name(): string {
    return this._name
  }
  get email(): EmailVO {
    return this._email
  }
  get type(): UserTypeEnum {
    return this._type
  }
  get birth(): DateVO {
    return this._birth
  }
  get age(): number {
    return new Date().getFullYear() - this.birth.date.getFullYear()
  }
  get gender(): GenderEnum {
    return this._gender
  }
  get address(): AddressVO {
    return this._address
  }
  get phone(): string {
    return this._phone
  }

  validate(): boolean {
    if (!this.id.validate()) return false
    if (!this.name) return false
    if (!this.email.validate()) return false
    if (!this.type.validate()) return false
    if (!this.birth.validate()) return false
    if (!this.gender.validate()) return false
    if (!this.address.validate()) return false
    if (!this.phone) return false
    return true
  }
}
