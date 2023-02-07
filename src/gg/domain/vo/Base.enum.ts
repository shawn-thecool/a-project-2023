export interface IBaseEnum {
  value: string;
}

export default class BaseEnum {
  private _value: string;
  private _values: string[];

  constructor(value: string) {
    this._value = value;
  }

  get value(): string {
    return this._value;
  }
  get values(): string[] {
    return this._values;
  }

  set values(values: string[]) {
    this._values = values;
  }

  is(value: string): boolean {
    return this.values.includes(value);
  }
  validate(): boolean {
    return this.values.includes(this.value);
  }
}

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
