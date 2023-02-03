# Example app with styled-components

This example features how you use a different styling solution than [styled-jsx](https://github.com/vercel/styled-jsx) that also supports universal styles. That means we can serve the required styles for the first render within the HTML and then load the rest in the client. In this case we are using [styled-components](https://github.com/styled-components/styled-components).

This example uses the Rust-based [SWC](https://nextjs.org/docs/advanced-features/compiler#styled-components) in Next.js for better performance than Babel.

Currently, only the `ssr` and `displayName` transforms have been implemented. These two transforms are the main requirement for using `styled-components` in Next.js.

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) or preview live with [StackBlitz](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/with-styled-components)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-styled-components&project-name=with-styled-components&repository-name=with-styled-components)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example with-styled-components with-styled-components-app
```

```bash
yarn create next-app --example with-styled-components with-styled-components-app
```

```bash
pnpm create next-app --example with-styled-components with-styled-components-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

### Try it on CodeSandbox

[Open this example on CodeSandbox](https://codesandbox.io/s/github/vercel/next.js/tree/canary/examples/with-styled-components)

### Notes

When wrapping a [Link](https://nextjs.org/docs/api-reference/next/link) from `next/link` within a styled-component, the [as](https://styled-components.com/docs/api#as-polymorphic-prop) prop provided by `styled` will collide with the Link's `as` prop and cause styled-components to throw an `Invalid tag` error. To avoid this, you can either use the recommended [forwardedAs](https://styled-components.com/docs/api#forwardedas-prop) prop from styled-components or use a different named prop to pass to a `styled` Link.

<details>
<summary>Click to expand workaround example</summary>
<br />

**components/StyledLink.js**

```javascript
import Link from 'next/link'
import styled from 'styled-components'

const StyledLink = ({ as, children, className, href }) => (
  <Link href={href} as={as} passHref>
    <a className={className}>{children}</a>
  </Link>
)

export default styled(StyledLink)`
  color: #0075e0;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #40a9ff;
  }

  &:focus {
    color: #40a9ff;
    outline: none;
    border: 0;
  }
`
```

**pages/index.js**

```javascript
import StyledLink from '../components/StyledLink'

export default () => (
  <StyledLink href="/post/[pid]" forwardedAs="/post/abc">
    First post
  </StyledLink>
)
```

</details>


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

component level

const aguc = new AudienceGetUsecase()

aguc.getAudience(){
// 1. call api : getAudience()
// 2. resReadAudienceDTO(call.api.res)
// 3. return Aggr | Entity | vo
}

// target condition

aguc.getAudience().tagetCondition.meta.value

src/
├── adapter/
│ ├── api/
│ │ ├── index.ts
│ │ ├── user.ts
│ │ ├── product.ts
│ │ └── ...
│ ├── websocket/
│ │ ├── index.ts
│ │ ├── chat.ts
│ │ └── ...
│ └── ...
├── application/
│ ├── user/
│ │ ├── index.ts
│ │ ├── user.service.ts
│ │ ├── user.repository.ts
│ │ └── ...
│ ├── product/
│ │ ├── index.ts
│ │ ├── product.service.ts
│ │ ├── product.repository.ts
│ │ └── ...
│ └── ...
└── domain/
├── user/
│ ├── index.ts
│ ├── user.entity.ts
│ ├── user.value.ts
│ └── ...
├── product/
│ ├── index.ts
│ ├── product.entity.ts
│ ├── product.value.ts
│ └── ...
└── ...

    - domain
    - entities
        - [entity_name].js
    - aggregates
        - [aggregate_name].js
    - value_objects
        - [vo_name].js
        - enums
            - [enum_name].js
    - exceptions
        - [exception_name].js
    - policies
        - [policy_name].js

- application
  - usecases
    - [usecase_name].js
  - dtos
    - [dto_name].js
- adapter
  - web
    - [web_controller_name].js
    - [web_service_name].js
  - api
    - [api_controller_name].js
    - [api_service_name].js
