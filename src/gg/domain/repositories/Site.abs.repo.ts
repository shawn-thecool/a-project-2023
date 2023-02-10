import { AxiosPromise } from 'axios'
import { SiteEntity } from '../entities'
import { SiteIdVO } from '../vo'

export default abstract class SiteAbsRepo {
  // create, update 로 나눈다.
  // api의 추상화 단계라고 보면 된다.
  abstract save(site: SiteEntity): Promise<AxiosPromise<SiteEntity>>
  abstract findById(siteId: SiteIdVO): Promise<AxiosPromise<SiteEntity>>
}
