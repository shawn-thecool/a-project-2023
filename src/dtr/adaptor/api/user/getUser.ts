import { UserTypeEnum } from "@/dtr/domain/valueObjects";
import { randomEmail, randomPickEnum, randomStr } from "@/dtr/utils";
import { IResBase } from "../http";

/**
 * schema
 */
export interface IUser {
  user_id: string;
  type: string;
  name: string;
  email: string;
}

/**
 * req,res interfaces
 */
export interface IReqGetUser {
  user_id: string;
}
export interface IResGetUser extends IResBase {
  data: { user: IUser };
}

/**
 * get user api
 * @param req
 * @returns
 */
export const reqGetUser = (req: IReqGetUser): IResGetUser => {
  return {
    code: "0200",
    message: "Success",
    data: {
      user: {
        user_id: req.user_id,
        type: randomPickEnum(UserTypeEnum),
        name: randomStr(20),
        email: randomEmail(),
      },
    },
  };
};
