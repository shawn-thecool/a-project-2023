import { BaseEnum, IBaseEnum } from "./Base.enum";

export class GenderEnum extends BaseEnum {
  static male = "male";
  static female = "female";
  static other = "other";
  constructor(data: IBaseEnum) {
    super(data.value);
    this.values = Object.values(GenderEnum);
  }
}

export class UserTypeEnum extends BaseEnum {
  static owner = "owner";
  static admin = "admin";
  static viewer = "viewer";
  constructor(data: IBaseEnum) {
    super(data.value);
    this.values = Object.values(UserTypeEnum);
  }
}
