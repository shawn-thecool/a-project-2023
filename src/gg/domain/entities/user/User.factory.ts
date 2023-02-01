import {
  randomHashedId,
  randomStr,
  randomEmail,
  randomArrayItem,
} from "src/gg/utils";
import { UserEntity } from "./User.entity";

export class UserEntityFactory {
  generateRandomUser(): UserEntity {
    return new UserEntity({
      id: randomHashedId(),
      name: randomStr(20),
      email: randomEmail(),
      type: randomArrayItem(["owner", "admin", "viewer"]), //
      birth: Date.now(), // create value object year, month, date
      address: {
        country: "korea",
        state: "",
        city: "seoul",
        street: "gang-nam",
        zipCode: "0001-2011",
      },
      gender: "male", // create gender enums
      phone: "010-444-4444", // create random phoneNumber
    });
  }
}
