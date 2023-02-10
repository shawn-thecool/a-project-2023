import { UserTypeEnum } from './vo/Base.enum'

// 폴리시는 상태를 가질 수 없습니다.
// 함수로만 이루어 져야 합니다.

// entity 나 vo 자체만으로 해결할 수 없는 로직을 이곳에 분리한다.

// 사용자 권한, 
// 메시지 발송을 설정하여 발송을 입력 하려고 한다면, 사용자의 권한, 결제의 포인트 정보 들이 필요할 것이다. 이부분이 정책라인

// user.type = viewer 는 수정 및 생성 작업을 진행할 권리가 없습니다.
export const checkUserTypePolicy = (userType: UserTypeEnum) => !userType.is('viewer')
