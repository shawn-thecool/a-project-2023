import { SiteEntity } from '../entities'
import { SiteIdVO } from '../vo'

export default abstract class SiteAbsRepo {
  abstract save(site: SiteEntity): Promise<SiteEntity>
  abstract findById(siteId: SiteIdVO): Promise<SiteEntity>
}
