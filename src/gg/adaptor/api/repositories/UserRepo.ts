import { IResGetUserDTO, UserDTO } from "../../../application/dto/User.dto";
import UserEntity from "../../../domain/entities/User.entity";
import AbsUserRepo from "../../../domain/repositories/AbsUserRepo";
import { UserIdVO } from "../../../domain/vo/Id.vo";
import makeRequest from "../http";

export class UserRepo implements AbsUserRepo {
  save(): void {
    throw new Error("Method not implemented.");
  }
  async findById(userId: UserIdVO): Promise<UserEntity> {
    const req = { method: "GET", url: `/users/${userId.value}` };
    const res: { data: IResGetUserDTO } = await makeRequest(req);
    const dto = UserDTO.fromReadUserResToEntity(res.data);
    return dto;
  }
}
