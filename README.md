## KDT 프레임워크 활용 정규 평가

정보
일시 : 2023-06-02 금요일
시간 : 14:20 ~ 18:10 (5교시 ~ 8교시)
평가 방식 : 제작물 및 스크린샷 제출 (포트폴리오 형태)

현장 환경에 대한 가정
1. Typescript를 build language로 채택하였다.
2. bundler, 빌드 자동화 도구 SW를 통해 front-end, back-end를 처리하기로 결정하였다.
3. build버전과 deploy버전을 구분하기 위한 테스트를 진행하기로 협의하였다.  .


주요 패키지
1. Typescript
2. React.js
3. Babel.js
4. bundler
5. Express.js
6. 기타

### 평가 문제
주어진 안건의 요구사항을 수립하여, 안건에 대한 정보를 획득 후 적용 할 수 있다.
### 평가 문제 수행배경 (실무상황)
Typescript를 build language로 채택하였다.
bundler, 빌드 자동화 도구 SW를 통해 front-end, back-end를 처리하기로 결정하였다.
build버전과 deploy버전을 구분하기 위한 테스트를 진행하기로 협의하였다.

### 개발자 요구사항
패키지매니저를 통해, Typescript, React.js, Babel.js, webpack에 대한 DI를 설정 할 것
Client-side rendering, CSR방식이 정상작동되는지 확인 및 검증 할 것
최초 GET 요청 “/” 만 처리하는 형태로 App server를 구성 할 것

### 평가 문제 안건
문서의 동적요청에 대한 사용자경험을 확장하기 위해 Client-side로 front-end를 구성하는 것이 모던 웹 애플리케이션에서의 주요 연구의제이다.

필요한 요구사항은 다음과 같다.

CRA(Create-React-App) 과 같은 프레임워크 수월하게 사용하기 위해, 최소 설정이 어떻게 구성되어야 하는지에 대한 개요가 필요하다.
SPA(Single Page Application), 즉 단일페이지 (※예: index.html)만을 요구하므로, App server는 단순한 구조로 실행 절차가 구축되어야 하는 것이 올바르다.
사용자의 입력을 받는 요청처리는 페이지를 요청하는 것이 아니어야 한다.

개발자 작업관점
Javascript, Node.js에서 지원하는 NPM 환경을 적극 사용하여 개발 생산성 증대와 최종소비자의 사용자경험을 개선하는 것이 주요하다.


