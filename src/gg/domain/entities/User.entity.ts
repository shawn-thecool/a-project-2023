import { UserTypeEnum, GenderEnum } from "../vo/Base.enum";
import { UserIdVO } from "../vo/Id.vo";
import AddressVO, { IAddressVO } from "../vo/Address.vo";
import DateVO from "../vo/Date.vo";
import EmailVO from "../vo/Email.vo";

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

export default class UserEntity {
  private _id: UserIdVO;
  private _name: string;
  private _email: EmailVO;
  private _type: UserTypeEnum;
  private _birth: DateVO;
  private _gender: GenderEnum;
  private _address: AddressVO;
  private _phone: string;

  constructor(data: IUserEntity) {
    this._id = new UserIdVO({ value: data.id });
    this._name = data.name;
    this._email = new EmailVO({ value: data.email });
    this._type = new UserTypeEnum({ value: data.type || UserTypeEnum.viewer });
    this._birth = new DateVO({ value: data.birth });
    this._gender = new GenderEnum({ value: data.gender || GenderEnum.other });
    this._address = new AddressVO(data.address);
    this._phone = data.phone;
  }

  get id(): UserIdVO {
    return this._id;
  }
  get name(): string {
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
  get phone(): string {
    return this._phone;
  }

  validate(): boolean {
    if (!this.email.validate()) return false;
    return true;
  }
}
