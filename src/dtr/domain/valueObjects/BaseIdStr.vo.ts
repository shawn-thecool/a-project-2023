export default class BaseIdStr {
  constructor(id: string) {
    this._value = id;
  }
  private _value: string;
  public get value(): string {
    return this._value;
  }
  public validate(): boolean {
    return !!this.value;
  }
}

export class UserIdVO extends BaseIdStr {
  public get valueWithSimpleHash(): string {
    return ["#", ...this.value.split("").reverse()].join("");
  }
}
