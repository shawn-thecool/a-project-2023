import {
  randomHashedId,
  randomStr,
  randomEmail,
  randomArrayItem,
  randomInt,
} from "../../../utils";
import UserEntity from "../User.entity";

export class UserEntityFactory {
  static generateRandomUser(): UserEntity {
    return new UserEntity({
      id: randomHashedId(),
      name: randomStr(20),
      email: randomEmail(),
      type: randomArrayItem(["owner", "admin", "viewer"]), //
      birth: new Date(1990, 12, 14).getTime(),
      address: {
        country: randomStr(3).toUpperCase(),
        state: randomStr(8),
        city: randomStr(8),
        street: [randomStr(8), randomStr(8)].join(""),
        zipCode: [randomInt(999999), randomInt(999999)].join("-"),
      },
      gender: randomArrayItem(["mail", "female", "other"]), // create gender enums
      phone: [
        `+${randomInt(99)} ${randomInt(999)}`,
        randomInt(9999),
        randomInt(9999),
      ].join("-"), // create random phoneNumber
    });
  }

  static generateUserWithOutAddress(): UserEntity {
    return new UserEntity({
      id: randomHashedId(),
      name: randomStr(20),
      email: randomEmail(),
      type: randomArrayItem(["owner", "admin", "viewer"]), //
      birth: new Date(1990, 12, 14).getTime(),
      address: {
        country: "",
        state: "",
        city: "",
        street: "",
        zipCode: "",
      },
      gender: randomArrayItem(["mail", "female", "other"]), // create gender enums
      phone: [
        `+${randomInt(99)} ${randomInt(999)}`,
        randomInt(9999),
        randomInt(9999),
      ].join("-"), // create random phoneNumber
    });
  }
}
