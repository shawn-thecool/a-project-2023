export interface IBaseException {
  code: string;
  msg: string;
}

export default class BaseException {
  private _code: string;
  private _msg: string;
  constructor(data: IBaseException) {
    this._code = data.code;
    this._msg = data.msg;
  }
  public log(): BaseException {
    console.error([this._code, this._msg].join(" "));
    return this;
  }
  public passWithValue(value: any): any {
    return value;
  }
}
export class UserNameEmptyException extends BaseException {
  constructor() {
    super({ code: "1", msg: "UserNameEmptyException" });
  }
}
export class UserNameOverflowException extends BaseException {
  constructor() {
    super({ code: "2", msg: "UserNameOverflowException" });
  }
}
export class UserEmailEmptyException extends BaseException {
  constructor() {
    super({ code: "3", msg: "UserEmailEmptyException" });
  }
}
export class UserEmailFormatException extends BaseException {
  constructor() {
    super({ code: "4", msg: "UserEmailFormatException" });
  }
}
export class BaseIdVoValidateException extends BaseException {
  constructor() {
    super({ code: "5", msg: "BaseIdVoValidateException" });
  }
}
export class UserTypeEnumValidateException extends BaseException {
  constructor() {
    super({ code: "5", msg: "UserTypeEnumValidateException" });
  }
}
