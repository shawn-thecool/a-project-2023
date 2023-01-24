import { SiteStatusEnum, SitePlatformEnum } from "@/dtr/domain/valueObjects";
import { randomId, randomPickEnum, randomStr, randomUrl } from "@/dtr/utils";
import { ISite } from "../site";

class FakeSiteTable {
  constructor() {
    this.init(10);
  }

  sites = [];

  init(length: number) {
    Array.from({ length }, (_, idx) => idx).map(() =>
      this.add({
        site_id: randomId(),
        status: randomPickEnum(SiteStatusEnum),
        platform: randomPickEnum(SitePlatformEnum),
        name: randomStr(20),
        url: randomUrl(),
      })
    );
  }

  add(site: ISite) {
    this.sites.push(site);
    return site;
  }
  update(update: Partial<ISite>) {
    let updated = null;
    this.sites = this.sites.map((site) => {
      if (site.site_id === update.site_id) {
        updated = { ...site, ...update };
        return updated;
      } else {
        return site;
      }
    });
    return updated;
  }
  delete(siteId: ISite["site_id"]) {
    let deleted = this.sites.find((site) => site.site_id === siteId);
    this.sites = this.sites.filter((site) => site.site_id !== siteId);
    return deleted;
  }
}

export const fake_site_table = new FakeSiteTable();
