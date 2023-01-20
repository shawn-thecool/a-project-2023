import { IResGetUser } from "@/dtr/adaptor/api";
import UserEntity from "@/dtr/domain/entities/User.entity";
import { UserTypeEnum } from "@/dtr/domain/valueObjects";

export class UserReadDto {
  constructor(data: IResGetUser) {
    this.userEntity = new UserEntity({
      id: data.data.user.user_id || "",
      type: data.data.user.type || UserTypeEnum.VIEWER,
      name: data.data.user.name || "",
      email: data.data.user.email || "",
    });
  }
  public userEntity: UserEntity;
}
