export default class BaseEnum {
  private _value: string
  private _values: string[]

  constructor(value: string) {
    this._value = value
  }

  get value(): string {
    return this._value
  }
  get values(): string[] {
    return this._values
  }

  set values(values: string[]) {
    this._values = values
  }

  is(value: string): boolean {
    return this.value === value
  }
  validate(): boolean {
    return this.values.includes(this.value)
  }
}
export class GenderEnum extends BaseEnum {
  static male = 'male'
  static female = 'female'
  static other = 'other'
  constructor(value: string) {
    super(value)
    this.values = Object.values(GenderEnum)
  }
}
export class UserTypeEnum extends BaseEnum {
  static owner = 'owner'
  static admin = 'admin'
  static viewer = 'viewer'
  constructor(value: string) {
    super(value)
    this.values = Object.values(UserTypeEnum)
  }
}
export class PlatformEnum extends BaseEnum {
  static custom = 'custom'
  static cafe24 = 'cafe24'
  static godomall = 'godomall'
  static makeshop = 'makeshop'
  static shopify = 'shopify'
  constructor(value: string) {
    super(value)
    this.values = Object.values(PlatformEnum)
  }
}
export class SiteStatusEnum extends BaseEnum {
  static siteCreated = 'siteCreated'
  static completeRequiredInstallation = 'completeRequiredInstallation'
  static completeProfiling = 'completeProfiling'
  static subscribe = 'subscribe'
  static unsubscribe = 'unsubscribe'
  static stop = 'stop'
  static leave = 'leave'
  constructor(value: string) {
    super(value)
    this.values = Object.values(SiteStatusEnum)
  }
}
