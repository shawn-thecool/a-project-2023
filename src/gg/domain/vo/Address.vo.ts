export interface IAddressVO {
  country: string;
  state: string;
  city: string;
  street: string;
  zipCode: string;
}

export class AddressVO {
  private _country: IAddressVO["country"];
  private _state: IAddressVO["state"];
  private _city: IAddressVO["city"];
  private _street: IAddressVO["street"];
  private _zipCode: IAddressVO["zipCode"];

  constructor(data: IAddressVO) {
    this._country = data.country;
    this._state = data.state;
    this._city = data.city;
    this._street = data.street;
    this._zipCode = data.zipCode;
  }

  get country(): IAddressVO["country"] {
    return this._country;
  }
  get state(): IAddressVO["state"] {
    return this._state;
  }
  get city(): IAddressVO["city"] {
    return this._city;
  }
  get street(): IAddressVO["street"] {
    return this._street;
  }
  get zipCode(): IAddressVO["zipCode"] {
    return this._zipCode;
  }
  get fullAddress(): string {
    // Kor
    return `${this.city}, ${this.street}. [${this.zipCode}]`;
  }

  validate(): boolean {
    return true;
  }
}
