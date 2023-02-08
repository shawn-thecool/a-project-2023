import { useMutation, useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { SiteUseCase } from '../../../application/usecases/SiteUseCase'

export const useDataIndexPage = ({ userId, siteId }: { userId: string; siteId: string }) => {
  const uc = new SiteUseCase()
  const getUser = useQuery({ queryKey: ['findUserById', userId], queryFn: () => uc.getUser(userId) })
  const getSite = useQuery({ queryKey: ['findSiteById', siteId], queryFn: () => uc.getSite(siteId) })
  //   const createSite = useMutation(uc.createSite) !! 어렵구만. 타입을 왜 못알아 먹지;
  const [canCreateSite, setCanCreateSite] = useState(false)

  useEffect(() => {
    uc.canCreateSite(userId).then((res) => setCanCreateSite(res))
  }, [userId])

  return { getUser, getSite, canCreateSite }
}
