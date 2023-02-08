import { isEmail } from "../../utils";

export interface IEmailVO {
  value: string;
}

export  class EmailVO {
  private _value: IEmailVO["value"];

  constructor(data: IEmailVO) {
    this._value = data.value;
  }

  get value(): IEmailVO["value"] {
    return this._value;
  }
  get name(): string {
    return this._value.split("@")[0];
  }
  get domain(): string {
    return this._value.split("@")[1];
  }

  validate(): boolean {
    return isEmail(this.value);
  }
}
