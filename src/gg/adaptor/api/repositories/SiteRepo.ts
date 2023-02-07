import SiteEntity from '../../../domain/entities/Site.entity'
import AbsSiteRepo from '../../../domain/repositories/AbsSiteRepo'
import { SiteIdVO } from '../../../domain/vo/BaseId.vo'
import makeRequest from '../http'

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

const _resToEntity = (res: IResGetSiteById): SiteEntity => {
  return new SiteEntity({
    id: res.data.site.id || '',
    name: res.data.site.name || '',
    url: res.data.site.url || '',
    platform: res.data.site.platform || '',
    status: res.data.site.status || '',
  })
}

export default class SiteRepo implements AbsSiteRepo {
  async save(site: SiteEntity): Promise<SiteEntity> {
    throw new Error('Method not implemented.')
  }
  async findById(siteId: SiteIdVO): Promise<SiteEntity> {
    const req = { method: 'GET', url: `/sites/${siteId.value}` }
    const res: { data: any } = await makeRequest(req)
    return _resToEntity(res.data)
  }
}
