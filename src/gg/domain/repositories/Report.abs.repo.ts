import { AxiosPromise } from 'axios'
import { IFindByConditionReqDTO, IFindByConditionResDTO, IFindByIdReqDTO, IFindByIdResDTO } from '../../adaptor/api/repositories/Report.repo'

export abstract class ReportAbsRepo {
  abstract create()
  abstract update()
  abstract delete()
  abstract findById(dto: IFindByIdReqDTO): Promise<AxiosPromise<IFindByIdResDTO>>
  abstract findByCondition(dto: IFindByConditionReqDTO): Promise<AxiosPromise<IFindByConditionResDTO>>
}
