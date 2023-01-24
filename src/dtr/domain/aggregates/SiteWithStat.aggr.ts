import SiteEntity, { ISiteEntity } from "../entities/Site.entity";
import StatVo, { TStatVoMap } from "../valueObjects/Stat.vo";

export interface ISiteWithStatAggregate extends ISiteEntity {
  statAMap: [string, number];
  statBName: string;
  statBValue: number;
  statCKey: string;
  statCValue: number;
}

export default class SiteWithStatAggregate extends SiteEntity {
  constructor(data: ISiteWithStatAggregate) {
    super(data);
    this._statA = new StatVo(data.statAMap);
    this._statB = new StatVo([data.statBName, data.statBValue]);
    this._statC = new StatVo([data.statCKey, data.statCValue]);
  }

  private _statA: StatVo;
  private _statB: StatVo;
  private _statC: StatVo;

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
