import { useMutation, useQuery } from '@tanstack/react-query'
import { SiteUseCase } from '../../../application/usecases/SiteUseCase'
import { SiteEntity } from '../../../domain/entities'

export const useSiteUC = () => {
  const uc = new SiteUseCase()

  const getSiteById = (siteId: string) => useQuery({ queryKey: ['findSiteById', siteId], queryFn: () => uc.getSite(siteId) })

  const createSite = (userId: string, site: SiteEntity) => useMutation(() => uc.createSite(userId, site))

  return {
    getSiteById,
    createSite,
  }
}
