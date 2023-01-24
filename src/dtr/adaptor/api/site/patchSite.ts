import { IResBase } from "../http";
import { fake_site_table } from "../_fake_db/sites";
import { ISite } from "./getSite";

/**
 * req,res interfaces
 */
export interface IReqPatchSite extends Partial<ISite> {}
export interface IResPatchSite extends IResBase {
  data: { site: ISite };
}

/**
 * get site api
 * @param req
 * @returns
 */
export const reqPatchSite = (req: IReqPatchSite): IResPatchSite => {
  return {
    code: "0200",
    message: "Success",
    data: { site: fake_site_table.update(req) },
  };
};
