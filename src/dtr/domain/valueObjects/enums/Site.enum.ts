import {
  SitePlatformValidateException,
  SiteStatusValidateException,
} from "../../exception";
import BaseEnum from "./Base.enum";

export class SitePlatformEnum extends BaseEnum {
  public static CAFE24 = "cafe24";
  public static MAKESHOP = "makeshop";
  public static GODOMALL = "godomall";
  public static CUSTOM = "custom";
  public static SHOPIFY = "shopify";

  public isCafe24(): boolean {
    return this.value === SitePlatformEnum.CAFE24;
  }
  public isMakeshop(): boolean {
    return this.value === SitePlatformEnum.MAKESHOP;
  }
  public isGodomall(): boolean {
    return this.value === SitePlatformEnum.GODOMALL;
  }
  public isCustom(): boolean {
    return this.value === SitePlatformEnum.CUSTOM;
  }
  public isShopify(): boolean {
    return this.value === SitePlatformEnum.SHOPIFY;
  }
  public validate(): boolean {
    if (!Object.values(SitePlatformEnum).includes(this.value)) {
      return new SitePlatformValidateException().log().passWithValue(false);
    }
    return true;
  }
}

export class SiteStatusEnum extends BaseEnum {
  public static CREATED = "created";
  public static PROFILING = "profiling";
  public static FREE_TRIAL = "free_trial";
  public static SUBSCRIPTION = "subscription";
  public static HOLD_SUBSCRIPTION = "hold_subscription";
  public static STOP_SUBSCRIPTION = "stop_subscription";
  public static CANCEL_SUBSCRIPTION = "cancel_subscription";

  public isCreated(): boolean {
    return this.value === SiteStatusEnum.CREATED;
  }
  public isProfiling(): boolean {
    return this.value === SiteStatusEnum.PROFILING;
  }
  public isFreeTrial(): boolean {
    return this.value === SiteStatusEnum.FREE_TRIAL;
  }
  public isSubscription(): boolean {
    return this.value === SiteStatusEnum.SUBSCRIPTION;
  }
  public isHoldSubscription(): boolean {
    return this.value === SiteStatusEnum.HOLD_SUBSCRIPTION;
  }
  public isStopSubscription(): boolean {
    return this.value === SiteStatusEnum.STOP_SUBSCRIPTION;
  }
  public isCancelSubscription(): boolean {
    return this.value === SiteStatusEnum.CANCEL_SUBSCRIPTION;
  }
  public validate(): boolean {
    if (!Object.values(SiteStatusEnum).includes(this.value)) {
      return new SiteStatusValidateException().log().passWithValue(false);
    }
    return true;
  }
}
