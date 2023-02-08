import SiteRepo from '../../adaptor/api/repositories/SiteRepo'
import UserRepo from '../../adaptor/api/repositories/UserRepo'
import SiteEntity from '../../domain/entities/Site.entity'
import { checkUserTypePolicy } from '../../domain/policy'
import { SiteIdVO } from '../../domain/vo/BaseId.vo'

export class SiteUseCase {
  private _userRepo: UserRepo = new UserRepo()
  private _siteRepo: SiteRepo = new SiteRepo()

  async getSite(siteId: string) {
    return this._siteRepo.findById(new SiteIdVO(siteId))
  }
  async getUser(userId: string) {
    return this._userRepo.findById(new SiteIdVO(userId))
  }

  async getSites() {}
  async createSite(userId: string, site: SiteEntity) {
    // if (!this.canCreateSite(userId)) return false
    return this._siteRepo.save(site)
  }
  async patchSite() {}
  async deleteSite() {}

  async canCreateSite(userId: string) {
    const user = await this.getUser(userId)

    if (!user) {
      console.log('data load error')
      return false
    }
    if (!checkUserTypePolicy(user.type)) {
      console.log('viewer can not create site', user.type.is('viewer'))
      return false
    }

    return true
  }
}
