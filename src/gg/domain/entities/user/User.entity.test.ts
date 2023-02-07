import { UserTypeEnum, GenderEnum } from "../../vo/Base.enum";
import UserEntity, { IUserEntity } from "../User.entity";

describe("UserEntity", () => {
  let userData: IUserEntity;

  beforeEach(() => {
    userData = {
      id: "123",
      name: "John Doe",
      email: "john.doe@example.com",
      type: UserTypeEnum.admin,
      birth: 123456789,
      address: {
        country: "US",
        street: "1 Main St",
        city: "San Francisco",
        state: "CA",
        zipCode: "94114",
      },
      gender: GenderEnum.male,
      phone: "+1 650-253-0000",
    };
  });

  it("should create an instance of UserEntity", () => {
    const user = new UserEntity(userData);
    expect(user).toBeInstanceOf(UserEntity);
  });

  it("should return correct values for getters", () => {
    const user = new UserEntity(userData);
    expect(user.id.value).toEqual(userData.id);
    expect(user.name).toEqual(userData.name);
    expect(user.email.value).toEqual(userData.email);
    expect(user.type.value).toEqual(userData.type);
    expect(user.birth.value).toEqual(userData.birth);
    expect(user.gender.value).toEqual(userData.gender);
    expect(user.phone).toEqual(userData.phone);
  });

  it("should return correct value for getter age", () => {
    const user = new UserEntity(userData);
    const currentYear = new Date().getFullYear();
    const birthYear = new Date(userData.birth).getFullYear();
    expect(user.age).toEqual(currentYear - birthYear);
  });

  it("should validate email correctly", () => {
    const user = new UserEntity(userData);
    expect(user.email.validate()).toBeTruthy();

    const userWithIncorrectEmail = new UserEntity({
      ...userData,
      ...{ email: "not-an-email" },
    });
    expect(userWithIncorrectEmail.email.validate()).toBeFalsy();
  });
});
