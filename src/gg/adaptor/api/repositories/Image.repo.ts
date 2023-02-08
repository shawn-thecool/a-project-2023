import { ImageEntity } from '../../../domain/entities'
import { ImageAbsRepo } from '../../../domain/repositories'
import { ImageIdVO } from '../../../domain/vo'

export class ImageRepo implements ImageAbsRepo {
  save(image: ImageEntity): Promise<ImageEntity> {
    throw new Error('Method not implemented.')
  }
  findById(imageId: ImageIdVO): Promise<ImageEntity> {
    throw new Error('Method not implemented.')
  }
}
