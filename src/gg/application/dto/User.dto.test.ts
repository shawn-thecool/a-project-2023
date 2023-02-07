import { UserEntityFactory } from "../../domain/entities/user/User.entity.factory";
import {
  IReqPatchUserDTO,
  IReqPostUserDTO,
  IResGetUserDTO,
  UserDTO,
} from "./User.dto";

describe("UserDTO", () => {
  let randomUserEntity;

  beforeEach(() => {
    randomUserEntity = UserEntityFactory.generateRandomUser();
  });

  it("should return a UserEntity instance with proper values", () => {
    const res: IResGetUserDTO = {
      code: "200",
      message: "Success",
      data: {
        user: {
          id: randomUserEntity.id.value,
          name: randomUserEntity.name,
          email: randomUserEntity.email.value,
          type: randomUserEntity.type.value,
          birth: randomUserEntity.birth.value,
          gender: randomUserEntity.gender.value,
          phone: randomUserEntity.phone,
          address: randomUserEntity.address,
        },
      },
    };
    expect(UserDTO.fromReadUserResToEntity(res)).toEqual(randomUserEntity);
  });

  it("should return a IReqPostUserDTO instance with proper values", () => {
    let req: IReqPostUserDTO = {
      name: randomUserEntity.name,
      email: randomUserEntity.email.value,
      phone: randomUserEntity.phone,
    };
    expect(UserDTO.fromEntityToCreateUserReq(randomUserEntity)).toEqual(req);
  });

  it("should return a IReqPostUserDTO instance with proper values", () => {
    const updateEntity = UserEntityFactory.generateRandomUser();

    let req: IReqPatchUserDTO = {
      id: updateEntity.id.value,
      body: {
        name: updateEntity.name,
        email: updateEntity.email.value,
        type: updateEntity.type.value,
        birth: updateEntity.birth.value,
        gender: updateEntity.gender.value,
        phone: updateEntity.phone,
        address: {
          country: updateEntity.address.country,
          state: updateEntity.address.state,
          city: updateEntity.address.city,
          street: updateEntity.address.street,
          zipCode: updateEntity.address.zipCode,
        },
      },
    };

    expect(UserDTO.fromEntityToUpdateUserReq(updateEntity)).toEqual(req);
  });

  it("should return a IReqPostUserDTO instance with proper values without address object", () => {
    const updateEntity = UserEntityFactory.generateUserWithOutAddress();

    let req: IReqPatchUserDTO = {
      id: updateEntity.id.value,
      body: {
        name: updateEntity.name,
        email: updateEntity.email.value,
        type: updateEntity.type.value,
        birth: updateEntity.birth.value,
        gender: updateEntity.gender.value,
        phone: updateEntity.phone,
      },
    };
    expect(UserDTO.fromEntityToUpdateUserReq(updateEntity)).toEqual(req);
  });
});
