export interface IIdVO {
  value: string;
}

export class IdVO {
  private _value: IIdVO["value"];

  constructor(data: IIdVO) {
    this._value = data.value;
  }

  get value(): IIdVO["value"] {
    return this._value;
  }

  validate(): boolean {
    return true;
  }
}
