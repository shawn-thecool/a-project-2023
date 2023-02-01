import { DateVO, EmailVO, GenderEnum, UserIdVO, UserTypeEnum } from "../../vo";
import { AddressVO, IAddressVO } from "../../vo/Address.vo";

export interface IUserEntity {
  id: string;
  name: string;
  email: string;
  type: string;
  birth: number;
  address: IAddressVO;
  gender: string;
  phone: string;
}

export class UserEntity {
  private _id: UserIdVO;
  private _name: IUserEntity["name"];
  private _email: EmailVO;
  private _type: UserTypeEnum;
  private _birth: DateVO;
  private _gender: GenderEnum;
  private _address: AddressVO;
  private _phone: IUserEntity["phone"];

  constructor(data: IUserEntity) {
    this._id = new UserIdVO({ value: data.id });
    this._name = data.name;
    this._email = new EmailVO({ value: data.email });
    this._type = new UserTypeEnum({ value: data.type });
    this._birth = new DateVO({ value: data.birth });
    this._gender = new GenderEnum({ value: data.gender });
    this._address = new AddressVO(data.address);
    this._phone = data.phone;
  }

  get id(): UserIdVO {
    return this._id;
  }
  get name(): IUserEntity["name"] {
    return this._name;
  }
  get email(): EmailVO {
    return this._email;
  }
  get type(): UserTypeEnum {
    return this._type;
  }
  get birth(): DateVO {
    return this._birth;
  }
  get age(): number {
    return new Date().getFullYear() - this.birth.date.getFullYear();
  }
  get gender(): GenderEnum {
    return this._gender;
  }
  get address(): AddressVO {
    return this._address;
  }
  get phone(): IUserEntity["phone"] {
    return this._phone;
  }

  validate(): boolean {
    if (!this.email.validate()) return false;
    return true;
  }
}
