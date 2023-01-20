export default class BaseIdStrVo {
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

export class UserIdVo extends BaseIdStrVo {
  public get valueWithSimpleHash(): string {
    return ["#user_", ...this.value.split("").reverse()].join("");
  }
}
export class SiteIdVo extends BaseIdStrVo {
  public get valueWithSimpleHash(): string {
    return ["#site_", ...this.value.split("").reverse()].join("");
  }
}
