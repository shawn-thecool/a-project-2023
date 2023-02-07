import SiteRepo from '../../adaptor/api/repositories/SiteRepo'
import UserRepo from '../../adaptor/api/repositories/UserRepo'
import { SiteIdVO, UserIdVO } from '../../domain/vo/BaseId.vo'

export class UserUseCase {
  private _userRepo: UserRepo = new UserRepo()
  private _siteRepo: SiteRepo = new SiteRepo()

  async getUser(userId: string) {
    return this._userRepo.findById(new UserIdVO(userId))
  }
  async getSite(siteId: string) {
    return this._siteRepo.findById(new SiteIdVO(siteId))
  }
  getUsers() {}
  createUser() {}
  updateUser() {}

  async canCreateSite(userId: string) {
    const user = await this.getUser(userId)
    console.log('canCreateSite', user)
    if (user.type.is('viewer')) {
      console.log('viewer can not create site')
    }
  }
}
