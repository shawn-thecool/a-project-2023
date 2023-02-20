import { UserRepo, SiteRepo } from '../../adaptor/api/repositories'
import { SiteEntity } from '../../domain/entities'
import { userTypeDeniedException } from '../../domain/exception'
import { checkUserTypePolicy } from '../../domain/policy'
import { SiteIdVO, UserIdVO } from '../../domain/vo/BaseId.vo'

// dto will be placed here by each method ex) createSite{In|Out}DTO

export class SiteUseCase {
  private _userRepo: UserRepo = new UserRepo()
  private _siteRepo: SiteRepo = new SiteRepo()

  async getSite(siteId: string) {
    return this._siteRepo.findById(new SiteIdVO(siteId))
  }

  // siteEntity가 아니라 좀 더 복합적인 구조의 데이터가 들어온다면 inDTO, outDTO가 필요하게 된다.
  // 현재도 userId + entity 의 파라미터를 받고 있음으로, 하나의 TOD를 통해서 전달 하는것이 맞을것.
  // use case method의 명세는 DTO로 구성한다 쌍으로 필요하다. (in, out, req,res...)
  async createSite(userId: string, site: SiteEntity) {
    const { data: user } = await this._userRepo.findById(new UserIdVO(userId))
    if (!checkUserTypePolicy(user.type)) return userTypeDeniedException()
    return this._siteRepo.save(site)
  }
}
