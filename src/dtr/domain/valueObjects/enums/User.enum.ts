import BaseEnum from "./Base.enum";

export class UserTypeEnum extends BaseEnum {
  public static VIEWER = "viewer";
  public static ADMIN = "admin";
  public static OWNER = "owner";
  
  public isViewer(): boolean {
    return this.value === UserTypeEnum.VIEWER;
  }
  public isAdmin(): boolean {
    return this.value === UserTypeEnum.ADMIN;
  }
  public isOwner(): boolean {
    return this.value === UserTypeEnum.OWNER;
  }
  public validate(): boolean {
    return [
      UserTypeEnum.VIEWER,
      UserTypeEnum.ADMIN,
      UserTypeEnum.OWNER,
    ].includes(this.value);
  }
}
