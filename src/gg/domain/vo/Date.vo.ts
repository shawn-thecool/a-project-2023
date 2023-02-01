export interface IDateVO {
  value: number;
}

export class DateVO {
  private _value: IDateVO["value"];

  constructor(data: IDateVO) {
    this._value = data.value;
  }

  get value(): IDateVO["value"] {
    return this._value;
  }
  get date(): Date {
    return new Date(this.value);
  }

  validate(): boolean {
    return true;
  }
}
