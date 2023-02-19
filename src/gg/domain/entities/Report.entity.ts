import { ReportIdVO, DateVO } from '../vo'

export interface IReportEntity {
  id: string
  title: string
  desc: string
  bodyText: string
  data?: [string, string][]
  createdAt: number
  createdBy: string
  updatedAt?: number
  updatedBy?: string
}
export class ReportEntity {
  private _id: ReportIdVO
  private _title: string
  private _desc: string
  private _bodyText: string
  private _data: [string, string][]
  private _createdAt: DateVO
  private _createdBy: string
  private _updatedAt: DateVO
  private _updatedBy: string

  constructor(data: IReportEntity) {
    this._id = new ReportIdVO(data.id)
    this._title = data.title
    this._desc = data.desc
    this._bodyText = data.bodyText
    this._data = data.data
    this._createdAt = new DateVO(data.createdAt)
    this._createdBy = data.createdBy
    this._updatedAt = new DateVO(data.updatedAt)
    this._updatedBy = data.updatedBy
  }

  get id(): ReportIdVO {
    return this._id
  }
  get title(): string {
    return this._title
  }
  get desc(): string {
    return this._desc
  }
  get bodyText(): string {
    return this._bodyText
  }
  get data(): [string, string][] {
    return this._data
  }
  get createdAt(): DateVO {
    return this._createdAt
  }
  get createdBy(): string {
    return this._createdBy
  }
  get updateAt(): DateVO {
    return this._updatedAt
  }
  get updatedBy(): string {
    return this._updatedBy
  }

  public canCreate(): boolean {
    if (!this._id.validate()) return false
    if (!this.title) return false
  }
  public create(): void | Error {
    if (!this.canCreate()) return new Error('can not create Report entity')
    this._createdAt = new DateVO(Date.now())
    this._createdBy = this.createdBy
  }
  public canUpdate(): boolean {
    if (!this.canCreate()) return false
    if (!this.createdAt) return false
    if (!this.createdBy) return false
    return true
  }
  public update(): void | Error {
    if (!this.canUpdate()) return new Error('can not update Report entity')
    this._updatedAt = new DateVO(Date.now())
    this._updatedBy = this.updatedBy
  }
}
