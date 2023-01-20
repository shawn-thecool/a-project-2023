import { SiteStatusEnum, SitePlatformEnum } from "@/dtr/domain/valueObjects";
import { randomId, randomPickEnum, randomStr, randomUrl } from "@/dtr/utils";
import { IResBase } from "../http";
import { ISite } from "./getSite";

export interface IReqGetSites {
  page_no: number;
  page_size: number;
}
export interface IResGetSites extends IResBase {
  data: {
    page_no: number;
    page_size: number;
    sites: ISite[];
  };
}

export const reqGetSites = (req: IReqGetSites): IResGetSites => {
  return {
    code: "0200",
    message: "Success",
    data: {
      page_no: req.page_no,
      page_size: req.page_size,
      sites: Array.from({ length: req.page_size }, () => ({
        site_id: randomId(),
        status: randomPickEnum(SiteStatusEnum),
        platform: randomPickEnum(SitePlatformEnum),
        name: randomStr(20),
        url: randomUrl(),
      })),
    },
  };
};
