export default class BaseEnum {
  constructor(id: string) {
    this._value = id;
  }

  private _value: string;

  public get value(): string {
    return this._value;
  }
}
