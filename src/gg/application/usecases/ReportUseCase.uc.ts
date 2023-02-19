import { ReportRepo, findByIdReqDTO } from '../../adaptor/api/repositories'

export class ReportUseCase {
  private _reportRepo: ReportRepo = new ReportRepo()

  async getReportById(siteId: string, reportId: string) {
    return this._reportRepo.findById(findByIdReqDTO({ siteId, reportId }))
  }
  async getReportsByCondition() {}
}
