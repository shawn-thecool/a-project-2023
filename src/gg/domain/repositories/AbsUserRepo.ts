import UserEntity from "../entities/User.entity";
import { UserIdVO } from "../vo/Id.vo";

export default abstract class AbsUserRepo {
  abstract save(): void;
  abstract findById(userId: UserIdVO): Promise<UserEntity>;
}
