import { SiteStatusEnum, SitePlatformEnum } from "@/dtr/domain/valueObjects";
import { randomPickEnum, randomStr, randomUrl } from "@/dtr/utils";
import { IResBase, IResWithError } from "../http";

/**
 * schema
 */
export interface ISite {
  site_id: string;
  status: string;
  platform: string;
  name: string;
  url: string;
}

/**
 * req,res interfaces
 */
export interface IReqGetSite {
  site_id: ISite["site_id"];
}
export interface IResGetSite extends IResBase {
  data: { site: ISite };
}
// error case 정리 후 기입.
export interface IResGetSiteError0400 extends IResWithError {}

/**
 * get site api
 * @param req
 * @returns
 */
export const reqGetSite = (req: IReqGetSite): IResGetSite => {
  return {
    code: "0200",
    message: "Success",
    data: {
      site: {
        site_id: req.site_id, //randomId()
        status: randomPickEnum(SiteStatusEnum),
        platform: randomPickEnum(SitePlatformEnum),
        name: randomStr(20),
        url: randomUrl(),
      },
    },
  };
};
