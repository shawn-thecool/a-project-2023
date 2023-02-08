import { SiteEntity } from '../../../domain/entities'
import SiteAbsRepo from '../../../domain/repositories/Site.abs.repo'
import { SiteIdVO } from '../../../domain/vo'
import makeRequest from '../axios'

interface IReqPostSite {
  name: string
  url: string
  platform: string
}

interface IResGetSiteById {
  code: string
  message: string
  data: {
    site: {
      id: string
      name: string
      url: string
      platform: string
      status: string
    }
  }
}
const _entityToReq = (entity: SiteEntity) => {
  const requestData: IReqPostSite = {
    name: entity.name,
    url: entity.url,
    platform: entity.platform.value,
  }
  return requestData
}
const _resToEntity = (res: IResGetSiteById): SiteEntity => {
  return new SiteEntity({
    id: res.data.site.id || '',
    name: res.data.site.name || '',
    url: res.data.site.url || '',
    platform: res.data.site.platform || '',
    status: res.data.site.status || '',
  })
}

export default class SiteRepo implements SiteAbsRepo {
  async save(site: SiteEntity): Promise<SiteEntity> {
    const req = { method: 'POST', url: `/sites`, data: _entityToReq(site) }
    const res: { data: IResGetSiteById } = await makeRequest(req)
    return _resToEntity(res.data)
  }
  async findById(siteId: SiteIdVO): Promise<SiteEntity> {
    const req = { method: 'GET', url: `/sites/${siteId.value}` }
    const res: { data: IResGetSiteById } = await makeRequest(req)
    return _resToEntity(res.data)
  }
}
