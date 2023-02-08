import { UserTypeEnum } from './vo/Base.enum'

// user.type = viewer 는 수정 및 생성 작업을 진행할 권리가 없습니다.
export const checkUserTypePolicy = (userType: UserTypeEnum) => !userType.is('viewer')
