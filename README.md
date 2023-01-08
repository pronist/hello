# overist.tistory.com
[overist.tistory.com](https://overist.tistory.com)에 사용된 [hELLO](https://pronist.tistory.com/5) 스킨입니다.

**hELLO 3.6.5 버전을 포크하여 CSS만 간략히 수정하였습니다.**
- 사이드바
  - 상단 프로필 부분 배경색 지정, 깃허브 바로가기 추가, 패딩/마진 수정
  - 티스토리 툴바 하단의 pronist님(스킨 제작자)의 랜딩 정보를 내 정보로 수정
- 포스트 보기
  - 기본폰트 - 제주고딕체로 변경
  - code block - 폰트 D2코딩에서 나눔고딕코딩으로 변경, 패딩과 폰트사이즈 수정
  - `<p>`태그 - 마진이 거의 없어 마진을 브라우저 디폴트로 변경
- 리스트 보기
  - 리스트 상단 테이프 썸네일이 너무 깨져 비활성화
- 푸터
  - 테마 바꾸기(다크모드) 기능 비활성화

**Note**

`npm run production`으로 생성된 프로덕션을 티스토리 관리자 콘솔에서 파일 업로드 하는 것이 아니라, `npm run production && npm run deploy`을 통해 배포해야 함. tistory session이 입력되어 있으면 CLI에서 바로 스킨등록이 가능하다.

가끔(스킨 첫 배포시?) 배포되어도 티스토리가 동작하지 않는 이슈는 티스토리에서 번들된 js파일의 public_path가 변경되어 이를 수동으로 지정해줘야 하는데, `tidory.config.js` 파일의 `build > public_path` 를 티도리 프레임워크 가이드에 따라 수정해줘야 한다.

<br>

- - -

# hELLO

[hELLO](https://pronist.tistory.com/5) 는 [티도리 프레임워크](http://www.tidory.com)로 작성된 티스토리 스킨입니다. 따라서 별도의 개발 방식이 요구됩니다. 먼저, 프로젝트를 복사합니다.

```bash
git clone https://github.com/tistory-projects/tistory-skin-hELLO
```

프로젝트 폴더로 이동하여 `node_modules` 를 설치해줄 필요가 있습니다. 티도리 프레임워크는 **Node.js, Webpack** 을 기반으로 합니다. 따라서 **NPM(Node Package Manager)** 이 요구됩니다.

```bash
cd hELLO && npm install
```

티스토리 치환자가 적용된 모습을 보려면 **프리뷰 서버** 를 사용할 필요가 있는데, `tidory.config.example.js` 의 이름을 `tidory.config.js` 로 변경하고, 티도리 프레임워크의 [환경설정](https://tidory.com/docs/configuration/)를 참고하여 `ts_session`, `url` 를 설정해줄 필요가 있습니다. 이는 직접 티스토리 서버와 소통하여 치환자가 해석된 상태의 스킨을 먼저보기 위한 값입니다.

설정이 완료되었다면 프리뷰 서버를 실행할 수 있습니다.

```bash
npm run preview
```

## 배포

`tidory.config.js` 에 `ts_session`, `url` 이 설정되었다면 배포를 진행할 수 있습니다. 티도리 프레임워크의 [빌드 및 배포](https://tidory.com/docs/deployment)를 참고하십시오.

```bash
npm run production && npm run deploy
```

## 저작권

[MIT](https://github.com/pronist/hELLO/blob/master/LICENSE)

Copyright 2020-2022. [SangWoo Jeong](https://github.com/pronist). All rights reserved.
