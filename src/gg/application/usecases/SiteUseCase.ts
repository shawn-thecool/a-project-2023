import SiteRepo from '../../adaptor/api/repositories/Site.repo'
import UserRepo from '../../adaptor/api/repositories/User.repo'
import { SiteEntity } from '../../domain/entities'
import { userTypeDeniedException } from '../../domain/exception'
import { checkUserTypePolicy } from '../../domain/policy'
import { SiteIdVO, UserIdVO } from '../../domain/vo/BaseId.vo'

export class SiteUseCase {
  private _userRepo: UserRepo = new UserRepo()
  private _siteRepo: SiteRepo = new SiteRepo()

  async getSite(siteId: string) {
    return this._siteRepo.findById(new SiteIdVO(siteId))
  }
  async createSite(userId: string, site: SiteEntity) {
    const user = await this._userRepo.findById(new UserIdVO(userId))
    if (!checkUserTypePolicy(user.type)) return userTypeDeniedException()
    return this._siteRepo.save(site)
  }
}
