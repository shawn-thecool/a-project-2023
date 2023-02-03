import { GenderEnum, UserTypeEnum } from ".";

describe("GenderEnum", () => {
  test("has the expected properties", () => {
    expect(GenderEnum).toHaveProperty("male", GenderEnum.male);
    expect(GenderEnum).toHaveProperty("female", GenderEnum.female);
    expect(GenderEnum).toHaveProperty("other", GenderEnum.other);

    const genderEnum = new GenderEnum({ value: GenderEnum.male });
    expect(genderEnum).toHaveProperty("value", GenderEnum.male);
    expect(genderEnum).toHaveProperty("values", [
      GenderEnum.male,
      GenderEnum.female,
      GenderEnum.other,
    ]);
  });
});

describe("UserTypeEnum", () => {
  test("has the expected properties", () => {
    expect(UserTypeEnum).toHaveProperty("owner", UserTypeEnum.owner);
    expect(UserTypeEnum).toHaveProperty("admin", UserTypeEnum.admin);
    expect(UserTypeEnum).toHaveProperty("viewer", UserTypeEnum.viewer);

    const userTypeEnum = new UserTypeEnum({ value: UserTypeEnum.owner });
    expect(userTypeEnum).toHaveProperty("value", UserTypeEnum.owner);
    expect(userTypeEnum).toHaveProperty("values", [
      UserTypeEnum.owner,
      UserTypeEnum.admin,
      UserTypeEnum.viewer,
    ]);
  });
});
