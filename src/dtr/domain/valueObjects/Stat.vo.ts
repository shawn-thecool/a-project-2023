export interface IStatVo {
  key: string;
  value: number;
}
export type TStatVoMap = [IStatVo["key"], IStatVo["value"]];

export default class StatVo {
  constructor([key, value]: TStatVoMap) {
    this._key = key;
    this._value = value;
  }
  private _key: IStatVo["key"];
  private _value: IStatVo["value"];

  public get key(): IStatVo["key"] {
    return this._key;
  }
  public get value(): IStatVo["value"] {
    return this._value;
  }
  public get keyValueMap(): TStatVoMap {
    return [this.key, this.value];
  }
}
