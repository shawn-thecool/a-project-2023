import SiteEntity from '../entities/Site.entity'
import { SiteIdVO } from '../vo/BaseId.vo'

export default abstract class AbsSiteRepo {
  abstract save(site: SiteEntity): Promise<SiteEntity>
  abstract findById(siteId: SiteIdVO): Promise<SiteEntity>
}
