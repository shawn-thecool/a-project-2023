import { IResBase } from "../http";
import { fake_site_table } from "../_fake_db/sites";
import { ISite } from "./getSite";

/**
 * req,res interfaces
 */
export interface IReqDeleteSite {
  site_id: ISite["site_id"];
}
export interface IResDeleteSite extends IResBase {
  data: { site: ISite };
}

/**
 * get site api
 * @param req
 * @returns
 */
export const reqDeleteSite = (req: IReqDeleteSite): IResDeleteSite => {
  return {
    code: "0200",
    message: "Success",
    data: { site: fake_site_table.delete(req.site_id) },
  };
};
