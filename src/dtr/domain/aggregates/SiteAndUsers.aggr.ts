import SiteEntity, { ISiteEntity } from "../entities/Site.entity";
import UserEntity, { IUserEntity } from "../entities/User.entity";

export interface ISiteAndUsersAggregate {
  site: ISiteEntity;
  users: IUserEntity[];
}
export default class SiteAndUsersAggregate {
  constructor(data: ISiteAndUsersAggregate) {
    this._site = new SiteEntity(data.site);
    this._users = data.users.map((user) => new UserEntity(user));
  }

  private _site: SiteEntity;
  private _users: UserEntity[];

  public get site(): SiteEntity {
    return this._site;
  }
  public get users(): UserEntity[] {
    return this._users;
  }
}
