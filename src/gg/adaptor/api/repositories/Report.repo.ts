import { AxiosPromise } from 'axios'
import { ReportEntity, SiteEntity } from '../../../domain/entities'
import { ReportAbsRepo } from '../../../domain/repositories'
import makeRequest from '../axios'

interface IReqReport {
  siteId: string
  reportId: string
}
interface IResReport {
  code: string
  message: string
  data: {
    report: {
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
  }
}
interface IReqReports {
  siteEntity: SiteEntity
  reportEntity: ReportEntity
  page: number
  pageSize: number
  isAsc: boolean
}
interface IResReports {
  code: string
  message: string
  data: {
    reports: IResReport['data']['report'][]
    page: number
    pageSize: number
    isAsc: boolean
  }
}

// findById
export interface IFindByIdReqDTO {
  siteId: string
  reportId: string
}
export interface IFindByIdResDTO {
  report: ReportEntity
}
export const findByIdReqDTO = (req: IReqReport): IFindByIdReqDTO => {
  const dto: IFindByIdReqDTO = {
    siteId: req.siteId,
    reportId: req.reportId,
  }
  return dto
}
export const findByIdResDTO = (res: IResReport): IFindByIdResDTO => {
  const dto: IFindByIdResDTO = {
    report: new ReportEntity({
      id: res.data.report.id,
      title: res.data.report.title,
      desc: res.data.report.desc,
      bodyText: res.data.report.bodyText,
      data: res.data.report.data,
      createdAt: res.data.report.createdAt,
      createdBy: res.data.report.createdBy,
      updatedAt: res.data.report.updatedAt,
      updatedBy: res.data.report.updatedBy,
    }),
  }
  return dto
}

// findByCondition
export interface IFindByConditionReqDTO {
  siteId: string
  reportId: string
  page: number
  pageSize: number
  isAsc: boolean
}
export interface IFindByConditionResDTO {
  reports: ReportEntity[]
  page: number
  pageSize: number
  isAsc: boolean
}
export const findByConditionReqDTO = (req: IReqReports): IFindByConditionReqDTO => {
  const dto: IFindByConditionReqDTO = {
    siteId: req.siteEntity.id.value,
    reportId: req.reportEntity.id.value,
    page: req.page,
    pageSize: req.pageSize,
    isAsc: req.isAsc,
  }
  return dto
}
export const findByConditionResDTO = (res: IResReports): IFindByConditionResDTO => {
  const dto: IFindByConditionResDTO = {
    reports: res.data.reports.map(
      (report) =>
        new ReportEntity({
          id: report.id,
          title: report.title,
          desc: report.desc,
          bodyText: report.bodyText,
          data: report.data,
          createdAt: report.createdAt,
          createdBy: report.createdBy,
          updatedAt: report.updatedAt,
          updatedBy: report.updatedBy,
        })
    ),
    page: res.data.page,
    pageSize: res.data.pageSize,
    isAsc: res.data.isAsc,
  }
  return dto
}

export class ReportRepo implements ReportAbsRepo {
  create() {
    throw new Error('Method not implemented.')
  }
  update() {
    throw new Error('Method not implemented.')
  }
  delete() {
    throw new Error('Method not implemented.')
  }
  async findById(reqDTO: IFindByIdReqDTO): Promise<AxiosPromise<IFindByIdResDTO>> {
    const req = { method: 'GET', url: `/sites/${reqDTO.siteId}/reports/${reqDTO.reportId}/` }
    const res = await makeRequest(req)
    const resDTO = findByIdResDTO(res.data)
    res.data = resDTO
    return res
  }
  async findByCondition(reqDTO: IFindByConditionReqDTO): Promise<AxiosPromise<IFindByConditionResDTO>> {
    const req = { method: 'GET', url: `/sites/${reqDTO.siteId}/reports?page=${reqDTO.page}&page_size=${reqDTO.pageSize}&asc=${reqDTO.isAsc}` }
    const res = await makeRequest(req)
    const resDTO = findByIdResDTO(res.data)
    res.data = resDTO
    return res
  }
}
