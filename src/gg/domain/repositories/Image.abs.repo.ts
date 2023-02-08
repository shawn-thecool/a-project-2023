import { ImageEntity } from "../entities";
import { ImageIdVO } from "../vo";

export abstract class ImageAbsRepo {
  abstract save(image: ImageEntity): Promise<ImageEntity>
  abstract findById(imageId: ImageIdVO): Promise<ImageEntity>
}
