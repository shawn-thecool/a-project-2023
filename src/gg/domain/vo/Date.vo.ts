export class DateVO {
  private _value: number

  constructor(dtm: number) {
    this._value = dtm
  }

  get value(): number {
    return this._value
  }
  get date(): Date {
    return new Date(this.value)
  }
  intl(locale: string = 'en-US', opts: { [k: string]: string } = { weekday: 'long', year: 'numeric' }): string {
    const formatter = new Intl.DateTimeFormat(locale, opts)
    return formatter.format(this.date)
  }

  validate(): boolean {
    return true
  }
}
