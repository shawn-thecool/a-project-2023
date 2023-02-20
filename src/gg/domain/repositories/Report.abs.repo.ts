import { AxiosPromise } from 'axios'
import { ReportEntity } from '../entities'

export abstract class ReportAbsRepo {
  abstract create()
  abstract update()
  abstract delete()
  abstract findById(siteId: string, reportId: string): Promise<AxiosPromise<{ report: ReportEntity }>>
  abstract findByCondition(siteId: string, page: number, pageSize: number, isAsc: boolean): Promise<AxiosPromise<{ reports: ReportEntity[] }>>
}
