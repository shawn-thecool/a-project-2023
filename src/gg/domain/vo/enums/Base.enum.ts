export interface IBaseEnum {
  value: string;
}

export class BaseEnum {
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
