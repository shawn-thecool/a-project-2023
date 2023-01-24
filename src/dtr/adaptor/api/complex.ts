import { UserTypeEnum } from "@/dtr/domain/valueObjects";
import { IResBase } from "./http";
import { IUser } from "./user";
import { fake_site_table } from "./_fake_db/sites";

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
export interface IReqGetComplex {}
export interface IResGetComplex extends IResBase {
  data: {
    page_no: number;
    page_size: number;
    complex: {
      user: IUser;
      sites: ISite[];
      statAMap: [string, number];
      statBName: string;
      statBValue: number;
      statCKey: string;
      statCValue: number;
    };
  };
}

/**
 * get site api
 * @param req
 * @returns
 */
export const reqGetComplex = (req: IReqGetComplex = {}): IResGetComplex => {
  return {
    code: "0200",
    message: "Success",
    data: {
      page_no: 1,
      page_size: 10,
      complex: {
        user: {
          user_id: "test-user-owner",
          type: UserTypeEnum.OWNER,
          name: "tester:shawn",
          email: "shawn-dev@xxx.com",
        },
        sites: fake_site_table.sites,
        statAMap: ["clickPerImp", 1211],
        statBName: "openPerImp",
        statBValue: 20000,
        statCKey: "turnRate",
        statCValue: 92,
      },
    },
  };
};
