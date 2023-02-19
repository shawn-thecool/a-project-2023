import { useQuery } from '@tanstack/react-query'
import { ReportUseCase } from '../../../application/usecases/ReportUseCase.uc'

export const useReportUC = () => {
  const uc = new ReportUseCase()

  const getReportById = (siteId: string, reportId: string) =>
    useQuery({ queryKey: ['findReportById', siteId, reportId], queryFn: () => uc.getReportById(siteId, reportId) })

  return {
    getReportById,
  }
}
