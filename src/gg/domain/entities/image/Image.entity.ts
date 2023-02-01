import { ImageIdVO } from "../../vo";

export interface IImageEntity {
  id: string;
  file: string;
  path: string;
  name: string;
  url: string;
  size: number;
  width: number;
  height: number;
  createdAt: string; // date vo
  updatedAt: string;
  deletedAt: string;
}

export class ImageEntity {
  private _id: ImageIdVO;
  private _file: string;
  private _path: string;
  private _name: string;
  private _url: string;
  private _size: number;
  private _width: number;
  private _height: number;
  private _createdAt: string;
  private _updatedAt: string;
  private _deletedAt: string;

  constructor(data: IImageEntity) {
    this._id = new ImageIdVO({ value: data.id });
    this._file = data.file;
    this._path = data.path;
    this._name = data.name;
    this._url = data.url;
    this._size = data.size;
    this._width = data.width;
    this._height = data.height;
    this._createdAt = data.createdAt;
    this._updatedAt = data.updatedAt;
    this._deletedAt = data.deletedAt;
  }

  get id(): ImageIdVO {
    return this._id;
  }
  get file(): string {
    return this._file;
  }
  get path(): string {
    return this._path;
  }
  get name(): string {
    return this._name;
  }
  get url(): string {
    return this._url;
  }
  get size(): number {
    return this._size;
  }
  get width(): number {
    return this._width;
  }
  get height(): number {
    return this._height;
  }
  get createdAt(): string {
    return this._createdAt;
  }
  get updatedAt(): string {
    return this._updatedAt;
  }
  get deletedAt(): string {
    return this._deletedAt;
  }
}
