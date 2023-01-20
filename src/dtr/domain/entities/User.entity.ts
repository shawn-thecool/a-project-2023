import {
  UserEmailEmptyException,
  UserEmailFormatException,
  UserEntityValidateException,
  UserNameEmptyException,
  UserNameOverflowException,
} from "../exception";
import { USER_EMAIL_REGEX, USER_NAME_MAX } from "../policy";
import { UserIdVo, UserTypeEnum } from "../valueObjects";

export interface IUserEntity {
  id: string;
  type: string;
  name: string;
  email: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
}

export default class UserEntity {
  constructor(data: IUserEntity) {
    this._id = new UserIdVo(data.id);
    this._type = new UserTypeEnum(data.type);
    this._name = data.name;
    this._email = data.email;
    this._createdAt = data.createdAt || "";
    this._updatedAt = data.updatedAt || "";
    this._deletedAt = data.deletedAt || "";
  }
  private _id: UserIdVo;
  private _type: UserTypeEnum;
  private _name: IUserEntity["name"];
  private _email: IUserEntity["email"];
  private _createdAt: IUserEntity["createdAt"];
  private _updatedAt: IUserEntity["updatedAt"];
  private _deletedAt: IUserEntity["deletedAt"];

  public get idVo(): UserIdVo {
    return this._id;
  }
  public get typeEnum(): UserTypeEnum {
    return this._type;
  }
  public get id(): IUserEntity["id"] {
    return this.idVo.value;
  }
  public get type(): IUserEntity["type"] {
    return this.typeEnum.value;
  }
  public get name(): IUserEntity["name"] {
    return this._name;
  }
  public get email(): IUserEntity["email"] {
    return this._email;
  }
  public get createdAt(): IUserEntity["createdAt"] {
    return this._createdAt;
  }
  public get updatedAt(): IUserEntity["updatedAt"] {
    return this._updatedAt;
  }
  public get deletedAt(): IUserEntity["deletedAt"] {
    return this._deletedAt;
  }

  public verifyId(): boolean {
    return this.idVo.validate();
  }
  public verifyType(): boolean {
    return this.typeEnum.validate();
  }
  public verifyName(): boolean {
    if (!this.name) {
      return new UserNameEmptyException().log().passWithValue(false);
    }
    if (this.name.length > USER_NAME_MAX) {
      return new UserNameOverflowException().log().passWithValue(false);
    }
    return true;
  }
  public verifyEmail(): boolean {
    if (!this.email) {
      return new UserEmailEmptyException().log().passWithValue(false);
    }
    if (!USER_EMAIL_REGEX.test(this.email)) {
      return new UserEmailFormatException().log().passWithValue(false);
    }
    return true;
  }
  public validate(): boolean {
    const checklist = [
      this.verifyId(),
      this.verifyType(),
      this.verifyName(),
      this.verifyEmail(),
    ];
    if (!checklist.every((v) => !!v)) {
      return new UserEntityValidateException().log().passWithValue(false);
    }
    return true;
  }
}
