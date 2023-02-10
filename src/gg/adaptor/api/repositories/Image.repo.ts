import { AxiosPromise } from 'axios'
import { ImageEntity } from '../../../domain/entities'
import { ImageAbsRepo } from '../../../domain/repositories'
import { ImageIdVO } from '../../../domain/vo'

export class ImageRepo implements ImageAbsRepo {
  save(image: ImageEntity): Promise<AxiosPromise<ImageEntity>> {
    throw new Error('Method not implemented.')
  }
  findById(imageId: ImageIdVO): Promise<AxiosPromise<ImageEntity>> {
    throw new Error('Method not implemented.')
  }
}
