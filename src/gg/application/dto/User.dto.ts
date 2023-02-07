import UserEntity from "../../domain/entities/User.entity";

export interface IResGetUserDTO {
  code: string;
  message: string;
  data: {
    user: {
      id: string;
      name: string;
      email: string;
      type: string;
      birth: number;
      gender: string;
      phone: string;
      address: null | {
        country: string;
        state: string;
        city: string;
        street: string;
        zipCode: string;
      };
    };
  };
}

export interface IReqPostUserDTO {
  name: string;
  email: string;
  phone: string;
}

export interface IReqPatchUserDTO {
  id: string;
  body: {
    name?: string;
    email?: string;
    phone?: string;
    type?: string;
    birth?: number;
    gender?: string;
    address?: {
      country: string;
      state: string;
      city: string;
      street: string;
      zipCode: string;
    };
  };
}

export class UserDTO {
  static fromReadUserResToEntity(res: IResGetUserDTO): UserEntity {
    return new UserEntity({
      id: res.data.user.id || "",
      name: res.data.user.name || "",
      email: res.data.user.email || "",
      phone: res.data.user.phone || "",
      gender: res.data.user.gender || "",
      type: res.data.user.type || "",
      birth: res.data.user.birth || 0,
      address: res.data.user.address || {
        country: "",
        state: "",
        city: "",
        street: "",
        zipCode: "",
      },
    });
  }
  static fromEntityToCreateUserReq(entity: UserEntity): IReqPostUserDTO {
    let req: IReqPostUserDTO = {
      name: entity.name,
      email: entity.email.value,
      phone: entity.phone,
    };
    return req;
  }
  static fromEntityToUpdateUserReq(entity: UserEntity): IReqPatchUserDTO {
    let req: IReqPatchUserDTO = {
      id: entity.id.value,
      body: {},
    };
    if (entity.name) req.body.name = entity.name;
    if (entity.email.value) req.body.email = entity.email.value;
    if (entity.phone) req.body.phone = entity.phone;
    if (entity.type.value) req.body.type = entity.type.value;
    if (entity.birth.value) req.body.birth = entity.birth.value;
    if (entity.gender.value) req.body.gender = entity.gender.value;
    if (entity.address.validate()) {
      req.body.address = {
        country: entity.address.country,
        state: entity.address.state,
        city: entity.address.city,
        street: entity.address.street,
        zipCode: entity.address.zipCode,
      };
    }
    return req;
  }
}
