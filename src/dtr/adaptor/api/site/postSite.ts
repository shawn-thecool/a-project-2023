import { IResBase } from "../http";
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
    data: {
      site: {
        site_id: req.site_id, //randomId()
        status: req.status,
        platform: req.platform,
        name: req.name,
        url: req.url,
      },
    },
  };
};
