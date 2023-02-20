import { AxiosPromise } from 'axios'
import makeRequest from '../axios'
import { IHttpRes } from '../http.interface'
import { ReportEntity } from '../../../domain/entities'
import { ReportAbsRepo } from '../../../domain/repositories'

interface IResReport extends IHttpRes {
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
interface IResReports extends IHttpRes {
  data: {
    reports: IResReport['data']['report'][]
    page: number
    pageSize: number
    isAsc: boolean
  }
}

const findByIdResToEntity = (res: IResReport): { report: ReportEntity } => {
  return {
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
}
const findByConditionResToEntity = (res: IResReports): { reports: ReportEntity[]; page: number; pageSize: number; isAsc: boolean } => {
  return {
    reports: res.data.reports.map((report) => {
      return new ReportEntity({
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
    }),
    page: res.data.page,
    pageSize: res.data.pageSize,
    isAsc: res.data.isAsc,
  }
}

export class ReportRepo implements ReportAbsRepo {
  async create() {
    throw new Error('Method not implemented.')
  }
  async update() {
    throw new Error('Method not implemented.')
  }
  async delete() {
    throw new Error('Method not implemented.')
  }
  async findById(siteId: string, reportId: string): Promise<AxiosPromise<{ report: ReportEntity }>> {
    const req = { method: 'GET', url: `/sites/${siteId}/reports/${reportId}/` }
    const res = await makeRequest(req)
    res.data = findByIdResToEntity(res.data)
    return res
  }
  async findByCondition(siteId: string, page: number, pageSize: number, isAsc: boolean): Promise<AxiosPromise<{ reports: ReportEntity[] }>> {
    const req = { method: 'GET', url: `/sites/${siteId}/reports?page=${page}&page_size=${pageSize}&asc=${isAsc}` }
    const res = await makeRequest(req)
    res.data = findByConditionResToEntity(res.data)
    return res
  }
}
