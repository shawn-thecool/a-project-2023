import { SiteEntityValidateException } from "../exception";
import { SiteIdVo, SiteStatusEnum, SitePlatformEnum } from "../valueObjects";

export interface ISiteEntity {
  id: string;
  status: string;
  platform: string;
  name: string;
  url: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
}

export default class SiteEntity {
  constructor(data: ISiteEntity) {
    this._id = new SiteIdVo(data.id);
    this._status = new SiteStatusEnum(data.status);
    this._platform = new SitePlatformEnum(data.platform);
    this._name = data.name;
    this._url = data.url;
    this._createdAt = data.createdAt || "";
    this._updatedAt = data.updatedAt || "";
    this._deletedAt = data.deletedAt || "";
  }

  private _id: SiteIdVo;
  private _status: SiteStatusEnum;
  private _platform: SitePlatformEnum;
  private _name: ISiteEntity["name"];
  private _url: ISiteEntity["url"];
  private _createdAt: ISiteEntity["createdAt"];
  private _updatedAt: ISiteEntity["updatedAt"];
  private _deletedAt: ISiteEntity["deletedAt"];

  public get idVo(): SiteIdVo {
    return this._id;
  }
  public get statusEnum(): SiteStatusEnum {
    return this._status;
  }
  public get platformEnum(): SitePlatformEnum {
    return this._platform;
  }
  public get id(): ISiteEntity["id"] {
    return this.idVo.value;
  }
  public get status(): ISiteEntity["status"] {
    return this.statusEnum.value;
  }
  public get platform(): ISiteEntity["platform"] {
    return this.platformEnum.value;
  }
  public get name(): ISiteEntity["name"] {
    return this._name;
  }
  public get url(): ISiteEntity["url"] {
    return this._url;
  }
  public get createdAt(): ISiteEntity["createdAt"] {
    return this._createdAt;
  }
  public get updatedAt(): ISiteEntity["updatedAt"] {
    return this._updatedAt;
  }
  public get deletedAt(): ISiteEntity["deletedAt"] {
    return this._deletedAt;
  }

  public verifyId(): boolean {
    return this.idVo.validate();
  }
  public verifyStatus(): boolean {
    return this.statusEnum.validate();
  }
  public verifyPlatform(): boolean {
    return this.platformEnum.validate();
  }
  public validate(): boolean {
    const checklist = [
      this.verifyId(),
      this.verifyStatus(),
      this.verifyPlatform(),
    ];
    if (!checklist.every((v) => !!v)) {
      return new SiteEntityValidateException().log().passWithValue(false);
    }
    return true;
  }
}
