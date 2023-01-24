import { IResBase } from "../http";
import { ISite } from "./getSite";
import { fake_site_table } from "../_fake_db/sites";

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
      sites: fake_site_table.sites,
    },
  };
};
