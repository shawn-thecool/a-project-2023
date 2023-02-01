import { IUserEntity, UserEntity } from "./User.entity";

describe("UserEntity", () => {
  const userData: IUserEntity = {
    id: "123456",
    name: "John Doe",
    email: "johndoe@example.com",
    type: "admin",
    birth: 86400000,
    address: {
      country: "KOR",
      street: "1 Main St",
      city: "San Francisco",
      state: "CA",
      zipCode: "94102",
    },
    gender: "male",
    phone: "555-555-5555",
  };

  let user: UserEntity;

  beforeEach(() => {
    user = new UserEntity(userData);
  });

  test("creates a UserEntity instance", () => {
    expect(user).toBeInstanceOf(UserEntity);
  });

  test("returns the correct id", () => {
    expect(user.id.value).toBe(userData.id);
  });

  test("returns the correct name", () => {
    expect(user.name).toBe(userData.name);
  });

  test("returns the correct email", () => {
    expect(user.email.value).toBe(userData.email);
  });

  test("returns the correct type", () => {
    expect(user.type.value).toBe(userData.type);
  });

  test("returns the correct birth date", () => {
    expect(user.birth.value).toBe(userData.birth);
  });

  test("returns the correct age", () => {
    const birthYear = new Date(userData.birth).getFullYear();
    const currentYear = new Date().getFullYear();
    const expectedAge = currentYear - birthYear;
    expect(user.age).toBe(expectedAge);
  });

  test("returns the correct gender", () => {
    expect(user.gender.value).toBe(userData.gender);
  });

  test("returns the correct address", () => {
    expect(user.address.country).toBe(userData.address.country);
    expect(user.address.street).toBe(userData.address.street);
    expect(user.address.city).toBe(userData.address.city);
    expect(user.address.state).toBe(userData.address.state);
    expect(user.address.zipCode).toBe(userData.address.zipCode);
  });

  test("returns the correct phone", () => {
    expect(user.phone).toBe(userData.phone);
  });

  test("validates the email", () => {
    expect(user.validate()).toBe(true);
  });
});
