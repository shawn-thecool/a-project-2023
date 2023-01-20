
# DTR
## Domain
### Entity
하나의 코어 클레스로 많은 다른 클레스에 영향을 줌
아이디를 가지고 있음
getter setter 그리고 다른 많은 기능적 method를 가지고 있음
verify, validation 함수를 가지고 있음

### Aggregate
하나의 Entity가 확장될때 사용됨
Entity들 간의 의존성이 생길 때 사용됨

### Value Object
값 객체
하나의 필드에 오브젝트가 매핑 될 때 사용됨
하나의 필드를 객체로 표현 해야 할 때 사용됨

#### Enum
값 객체의 일종이지만, 지정된 타입만으로 구성 될 때 사용함
### Exception
예외 케이스에 대한 처리를 위해 사용
### Policy
정책적 요소를 정리한 파일

## Application
### Data Transfer Object
레이어 간의 데이터 운송을 위해서 존재
api 결과물의 data 구간의 정보를 담아주면 좋음
getter, setter 를 제외한 다른 method는 허용하지 않음

### Use Case
여러 DTO들을 받아서 Entity로 구성된 결과물을 묶는 단위
화면상의 정책, 분기 각 API 결과간의 상호 의존성을 관리


## Adaptor
### WEB
### API