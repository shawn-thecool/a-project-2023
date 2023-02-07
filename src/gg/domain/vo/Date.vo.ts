export interface IDateVO {
  value: number;
}

export default class DateVO {
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
  intl(
    locale: string = "en-US",
    opts: { [k: string]: string } = { weekday: "long", year: "numeric" }
  ): string {
    const formatter = new Intl.DateTimeFormat(locale, opts);
    return formatter.format(this.date);
  }

  validate(): boolean {
    return true;
  }
}
