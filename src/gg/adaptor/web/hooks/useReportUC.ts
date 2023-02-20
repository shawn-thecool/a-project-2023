import { useQuery } from '@tanstack/react-query'
import { ReportUseCase } from '../../../application/usecases/Report.uc'

export const useReportUC = () => {
  const uc = new ReportUseCase()

  const getReport = (siteId: string, reportId: string) =>
    useQuery({
      queryKey: ['getReport', siteId, reportId],
      queryFn: () => uc.getReport(siteId, reportId),
    })
  const getReports = (siteId: string, page: number = 1, pageSize: number = 10, isAsc: boolean = false) =>
    useQuery({
      queryKey: ['getReports', siteId, page, pageSize, isAsc],
      queryFn: () => uc.getReports(siteId, page, pageSize, isAsc),
    })

  return {
    getReport,
    getReports,
  }
}
