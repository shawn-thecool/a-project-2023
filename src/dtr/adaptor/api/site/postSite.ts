import { IResBase } from "../http";
import { fake_site_table } from "../_fake_db/sites";
import { ISite } from "./getSite";

/**
 * req,res interfaces
 */
export interface IReqPostSite extends ISite {}
export interface IResPostSite extends IResBase {
  data: { site: ISite };
}

/**
 * get site api
 * @param req
 * @returns
 */
export const reqPostSite = (req: IReqPostSite): IResPostSite => {
  return {
    code: "0200",
    message: "Success",
    data: { site: fake_site_table.add(req) },
  };
};
