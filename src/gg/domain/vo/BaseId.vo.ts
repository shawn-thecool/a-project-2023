class IdVO {
  private _value: string

  constructor(value: string) {
    this._value = value
  }

  get value(): string {
    return this._value
  }

  validate(): boolean {
    return !!this.value
  }
}

export class UserIdVO extends IdVO {}
export class SiteIdVO extends IdVO {}
export class ImageIdVO extends IdVO {}
export class ReportIdVO extends IdVO {}
