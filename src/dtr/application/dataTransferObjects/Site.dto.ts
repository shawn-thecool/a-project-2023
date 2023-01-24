import { IResGetSite, IResGetSites } from "@/dtr/adaptor/api";
import SiteEntity from "@/dtr/domain/entities/Site.entity";
import { SitePlatformEnum, SiteStatusEnum } from "@/dtr/domain/valueObjects";

// api.data => uc => dto => (entity | aggregate | vo | dto)
export class SiteReadDto {
  constructor(data: IResGetSite) {
    this.siteEntity = new SiteEntity({
      id: data.data.site.site_id || "",
      status: data.data.site.status || SiteStatusEnum.CREATED,
      platform: data.data.site.platform || SitePlatformEnum.CAFE24,
      name: data.data.site.name || "",
      url: data.data.site.url || "",
    });
  }
  public siteEntity: SiteEntity;
}
/** request case example : list, create, update, delete */
export class SitesReadDto {
  constructor(data: IResGetSites) {
    this.page_no = data.data.page_no;
    this.page_size = data.data.page_size;
    this.siteEntities = data.data.sites.map(
      (site) =>
        new SiteEntity({
          id: site.site_id || "",
          status: site.status || SiteStatusEnum.CREATED,
          platform: site.platform || SitePlatformEnum.CAFE24,
          name: site.name || "",
          url: site.url || "",
        })
    );
  }
  public page_no: number;
  public page_size: number;
  public siteEntities: SiteEntity[];
}
export class SiteCreateDto {}
export class SiteUpdateDto {}
export class SiteDeleteDto {}
