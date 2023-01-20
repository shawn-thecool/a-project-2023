import { IResBase } from "../http";
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
  let site: Partial<ISite> = {};
  if (site.site_id) req.site_id = req.site_id;
  if (site.status) req.status = req.status;
  if (site.platform) req.platform = req.platform;
  if (site.name) req.name = req.name;
  if (site.url) req.url = req.url;

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
