import { IResBase } from "../http";
import { ISite } from "./getSite";

/**
 * req,res interfaces
 */
export interface IReqDeleteSite {
  site_id: ISite["site_id"];
}
export interface IResDeleteSite extends IResBase {}

/**
 * get site api
 * @param req
 * @returns
 */
export const reqDeleteSite = (req: IReqDeleteSite): IResDeleteSite => {
  return {
    code: "0200",
    message: "Success",
  };
};
