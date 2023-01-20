// dto를 받아서 정리.
// api -> uc -> dto
// uc 에서는 api 상호간 매핑되는 로직을 분리한다.

import { IResGetSites, IResGetUser } from "@/dtr/adaptor/api";
import { SitesReadDto } from "../dataTransferObjects/Site.dto";
import { UserReadDto } from "../dataTransferObjects/User.dto";

export interface ISiteGetUseCase {
  userRes?: IResGetUser;
  sitesRes?: IResGetSites;
}

export class SiteGetUseCase {
  constructor({ userRes, sitesRes }: ISiteGetUseCase = {}) {
    this.userDto = userRes ? new UserReadDto(userRes) : null;
    this.sitesDto = sitesRes ? new SitesReadDto(sitesRes) : null;
  }
  public userDto: UserReadDto | null;
  public sitesDto: SitesReadDto | null;

  public ready(): boolean {
    return !!this.userDto && !!this.sitesDto;
  }
}
