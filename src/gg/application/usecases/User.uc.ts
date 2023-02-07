import { UserRepo } from "../../adaptor/api/repositories/UserRepo";
import { UserIdVO } from "../../domain/vo/Id.vo";

export class UserUseCase {
  _userRepo = new UserRepo();

  constructor() {
    // this.user_repo
    // this.site_repo
    // this.user_factory
    // this.user_service
  }

  async getUser(userId: string) {
    const user = await this._userRepo.findById(new UserIdVO({ value: userId }));
    return user;
  }
  getUsers() {}
  createUser() {}
  updateUser() {}
}
