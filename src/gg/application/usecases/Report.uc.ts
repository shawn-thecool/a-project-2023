import { ReportRepo } from '../../adaptor/api/repositories'

export class ReportUseCase {
  private _reportRepo: ReportRepo = new ReportRepo()

  async getReport(siteId: string, reportId: string) {
    if (!siteId) return console.error('need siteId')
    if (!reportId) return console.error('need reportId')
    return this._reportRepo.findById(siteId, reportId)
  }
  async getReports(siteId: string, page: number = 1, pageSize: number = 10, isAsc: boolean = false) {
    if (!siteId) return console.error('need siteId')
    return this._reportRepo.findByCondition(siteId, page, pageSize, isAsc)
  }
}
