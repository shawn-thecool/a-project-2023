import SiteEntity, { ISiteEntity } from "../entities/Site.entity";
import UserEntity, { IUserEntity } from "../entities/User.entity";
import StatVo, { TStatVoMap } from "../valueObjects/Stat.vo";

export interface IUserAndSitesWithStatAggregate {
  user: IUserEntity;
  sites: ISiteEntity[];
  statAMap: [string, number];
  statBName: string;
  statBValue: number;
  statCKey: string;
  statCValue: number;
}
export default class UserAndSitesWithStatAggregate {
  constructor(data: IUserAndSitesWithStatAggregate) {
    this._user = new UserEntity(data.user);
    this._sites = data.sites.map((site) => new SiteEntity(site));
    this._statA = new StatVo(data.statAMap);
    this._statB = new StatVo([data.statBName, data.statBValue]);
    this._statC = new StatVo([data.statCKey, data.statCValue]);
  }
  private _user: UserEntity;
  private _sites: SiteEntity[];
  private _statA: StatVo;
  private _statB: StatVo;
  private _statC: StatVo;

  public get user(): UserEntity {
    return this._user;
  }
  public get sites(): SiteEntity[] {
    return this._sites;
  }
  public get statAMap(): TStatVoMap {
    return this._statA.keyValueMap;
  }
  public get statBMap(): TStatVoMap {
    return this._statB.keyValueMap;
  }
  public get statCMap(): TStatVoMap {
    return this._statC.keyValueMap;
  }
}
