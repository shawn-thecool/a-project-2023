import { UserNameOverflowException } from "../exception";
import { USER_EMAIL_REGEX, USER_NAME_MAX } from "../policy";
import { UserIdVO } from "../valueObjects/BaseIdStr.vo";
import { UserTypeEnum } from "../valueObjects/enums/User.enum";

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
    this._id = new UserIdVO(data.id);
    this._type = new UserTypeEnum(data.type);
    this._name = data.name;
    this._email = data.email;
    this._createdAt = data.createdAt || "";
    this._updatedAt = data.updatedAt || "";
    this._deletedAt = data.deletedAt || "";
  }
  private _id: UserIdVO;
  private _type: UserTypeEnum;
  private _name: IUserEntity["id"];
  private _email: string;
  private _createdAt: string;
  private _updatedAt: string;
  private _deletedAt: string;

  public get idVO(): UserIdVO {
    return this._id;
  }
  public get typeEnum(): UserTypeEnum {
    return this._type;
  }
  public get id(): IUserEntity["id"] {
    return this.idVO.value;
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
  public get createdAt(): string {
    return this._createdAt;
  }
  public get updatedAt(): string {
    return this._updatedAt;
  }
  public get deletedAt(): string {
    return this._deletedAt;
  }

  public verifyId(): boolean {
    return this.idVO.validate();
  }
  public verifyType(): boolean {
    return this.typeEnum.validate();
  }
  public verifyName(): boolean {
    if (!this.name) {
      return false;
    }
    if (this.name.length > USER_NAME_MAX) {
      return new UserNameOverflowException().log().passWithValue(false);
    }
    return true;
  }
  public verifyEmail(): boolean {
    if (!this.email) return false;
    if (!USER_EMAIL_REGEX.test(this.email)) return false;
    return true;
  }
  public validate(): boolean {
    return [
      this.verifyId(),
      this.verifyType(),
      this.verifyName(),
      this.verifyEmail(),
    ].every((v) => !!v);
  }
}
