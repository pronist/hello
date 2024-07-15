# hELLO

[hELLO](https://pronist.tistory.com/5) 는 [티도리 프레임워크](http://tidory.github.io)로 작성된 티스토리 스킨입니다. 따라서 별도의 개발 방식이 요구됩니다. 먼저, 프로젝트를 복사합니다.

```bash
git clone https://github.com/tidory/hello
```

프로젝트 폴더로 이동하여 `node_modules` 를 설치해줄 필요가 있습니다. 티도리 프레임워크는 **Node.js, Webpack** 을 기반으로 합니다. 따라서 **NPM(Node Package Manager)** 이 요구됩니다.

```bash
cd hello && npm install
```

티스토리 치환자가 적용된 모습을 보려면 **프리뷰 서버** 를 사용할 필요가 있는데, **tidory.config.example.js** 의 이름을 **tidory.config.js** 로 변경하고, 티도리 프레임워크의 [환경설정](http://tidory.github.io/docs/configuration)를 참고하여 `ts_session`, `url` 를 설정해줄 필요가 있습니다. 이는 직접 티스토리 서버와 소통하여 치환자가 해석된 상태의 스킨을 먼저보기 위한 값입니다.

설정이 완료되었다면 프리뷰 서버를 실행할 수 있습니다.

```bash
npm run preview
```

## 배포

**tidory.config.js** 에 `ts_session`, `url` 이 설정되었다면 배포를 진행할 수 있습니다. 티도리 프레임워크의 [빌드 및 배포](http://tidory.github.io/docs/deployment)를 참고하십시오.

```bash
npm run production && npm run deploy
```

## 저작권

Copyright 2020-2024. [SangWoo Jeong](https://github.com/pronist). All rights reserved.
