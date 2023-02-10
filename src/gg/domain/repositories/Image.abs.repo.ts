import { AxiosPromise } from 'axios'
import { ImageEntity } from '../entities'
import { ImageIdVO } from '../vo'

export abstract class ImageAbsRepo {
  abstract save(image: ImageEntity): Promise<AxiosPromise<ImageEntity>>
  abstract findById(imageId: ImageIdVO): Promise<AxiosPromise<ImageEntity>>
}
