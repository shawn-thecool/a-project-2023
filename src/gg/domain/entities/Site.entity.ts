import { SiteIdVO, PlatformEnum, SiteStatusEnum } from '../vo'

export interface ISiteEntity {
  id: string
  name: string
  url: string
  platform: string
  status: string
}

export class SiteEntity {
  private _id: SiteIdVO
  private _name: string
  private _url: string
  private _platform: PlatformEnum
  private _status: SiteStatusEnum

  constructor(data: ISiteEntity) {
    this._id = new SiteIdVO(data.id)
    this._name = data.name
    this._url = data.url
    this._platform = new PlatformEnum(data.platform || PlatformEnum.custom)
    this._status = new SiteStatusEnum(data.status || SiteStatusEnum.siteCreated)
  }

  get id(): SiteIdVO {
    return this._id
  }
  get name(): string {
    return this._name
  }
  get url(): string {
    return this._url
  }
  get platform(): PlatformEnum {
    return this._platform
  }
  get status(): SiteStatusEnum {
    return this._status
  }

  validate(): boolean {
    if (!this.id.validate()) return false
    if (!this.name) return false
    if (!this.url) return false
    if (!this.platform.validate()) return false
    if (!this.status.validate()) return false
    return true
  }
}
