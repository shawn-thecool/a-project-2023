export default class BaseException {
  private _code: string;
  private _msg: string;
  constructor(data: { code: string; msg: string }) {
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
export class UserNameOverflowException extends BaseException {
  constructor() {
    super({ code: "0000", msg: "UserNameOverflowException" });
  }
}
