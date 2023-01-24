import { IResGetComplex } from "@/dtr/adaptor/api/complex";
import UserAndSitesWithStatAggregate from "@/dtr/domain/aggregates/UserAndSitesWithStat.aggr";
import SiteEntity from "@/dtr/domain/entities/Site.entity";
import UserEntity from "@/dtr/domain/entities/User.entity";
import {
  UserTypeEnum,
  SiteStatusEnum,
  SitePlatformEnum,
} from "@/dtr/domain/valueObjects";

export class ComplexReadDto {
  constructor(data: IResGetComplex) {
    this.page_no = data.data.page_no;
    this.page_size = data.data.page_size;
    this.complex = new UserAndSitesWithStatAggregate({
      user: new UserEntity({
        id: data.data.complex.user.user_id || "",
        type: data.data.complex.user.type || UserTypeEnum.VIEWER,
        name: data.data.complex.user.name || "",
        email: data.data.complex.user.email || "",
      }),
      sites: data.data.complex.sites.map(
        (site) =>
          new SiteEntity({
            id: site.site_id || "",
            status: site.status || SiteStatusEnum.CREATED,
            platform: site.platform || SitePlatformEnum.CAFE24,
            name: site.name || "",
            url: site.url || "",
          })
      ),
      statAMap: data.data.complex.statAMap || ["statAName", 0],
      statBName: data.data.complex.statBName || "statBName",
      statBValue: data.data.complex.statBValue || 0,
      statCKey: data.data.complex.statCKey || "statCKey",
      statCValue: data.data.complex.statCValue || 0,
    });
  }
  public complex: UserAndSitesWithStatAggregate;
  public page_no: number;
  public page_size: number;
}
