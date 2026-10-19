# AGENTS.md

## 프로젝트 개요

- 티스토리 스킨 hELLO의 원본 소스 저장소.
- 화면별 Pug 파일에 마크업·동작·스타일을 배치하고, 공통 화면은 믹스인으로 재사용.
- 배포 파일은 여러 소스를 합친 결과물. 기능 구조 파악과 수정은 원본 소스에서 시작.

## 기술 스택

| 기술 | 담당 영역 |
| --- | --- |
| Tidory | 티스토리 스킨 개발·프리뷰·빌드 |
| Pug | 화면 템플릿, include, 공용 믹스인 |
| TailwindCSS 3 | 유틸리티 클래스, 테마, 반응형 스타일 |
| AlpineJS 3 | DOM 기반 컴포넌트, 상태, 이벤트 |
| Webpack | JavaScript 의존성 번들링 |

## 참고 문서

- 작업 전 이 문서와 [README.md](README.md) 확인.
- 프레임워크 동작과 티스토리 규격은 아래 외부 문서를 먼저 참고. 일반적인 프론트엔드 프로젝트의 동작을 그대로 가정하지 말 것.

| 문서 | 참고할 내용 |
| --- | --- |
| [Tidory 프레임워크](https://github.com/pronist/tidory/wiki) | Pug 처리, 리소스 추출, 환경설정, 프리뷰, 빌드 |
| [티스토리 스킨 가이드](https://tistory.github.io/document-tistory-skin/) | 치환자, 그룹 태그, 스킨 옵션, 티스토리가 생성하는 마크업 |
| [hELLO 사용자 안내](https://pronist.tistory.com/5) | 스킨 설치, 기능, 사용자 설정 |

## 처음 읽는 순서

1. [README.md](README.md): 개발 환경과 실행 절차 확인.
2. [app.pug](app.pug) → [index.pug](index.pug): 문서 골격과 전체 화면 배치 확인.
3. [views/Main.pug](views/Main.pug) 또는 [views/Sidebar.pug](views/Sidebar.pug): 작업할 화면의 include 추적.
4. 해당 화면의 Pug: 마크업, `x-data`, `script`, `style` 확인.
5. `+permalink(...)` 등의 호출이 있으면 [공용 믹스인](assets/pug/Mixins.pug) 정의까지 확인.
6. 옵션·레이아웃 관련 작업은 이 문서의 해당 레퍼런스에서 정의와 사용처 확인.

## 작업 대상

- 빌드 결과인 `skin.html`, `style.css`, 번들 JavaScript 대신 원본 Pug·CSS·JavaScript 수정.

## 템플릿 구성

| 진입점 | 역할 |
| --- | --- |
| `app.pug` | 문서 골격, 전역 리소스, 스킨 옵션, 레이아웃 변수 |
| `index.pug` | `app.pug` 확장, 화면 구성 요소 조합 |
| `views/Main.pug` | 본문 화면과 티스토리 그룹 태그 구성 |
| `views/` | 화면별 UI 구현 |
| `assets/pug/Mixins.pug` | 공용 믹스인 집합 |

- Pug 파일에 마크업·스크립트·스타일이 함께 존재. 화면 수정 시 해당 파일의 세 영역을 함께 확인.
- Tidory가 Pug의 스크립트와 스타일을 별도 리소스로 추출. `fixed`, `once` 속성의 의미는 프레임워크 문서 참고.
- `@`는 `assets`, `~views`는 `views`를 가리키는 별칭.
- 티스토리 그룹 태그와 치환자는 서버에서 해석. 원본 Pug나 정적 HTML만으로 최종 화면을 판단하지 말 것.

## 빌드 결과

| 원본 | 배포 결과 |
| --- | --- |
| Pug 마크업 | `skin.html` |
| Pug 내부 `style`과 포함한 CSS | `style.css` |
| Pug 내부 `script` | `images/` 아래 스크립트 번들 |
| `assets/js/app.js`, `assets/js/vendor.js` | `images/` 아래 app·vendor 번들 |
| `images/bootstrap.js` | 별도로 불러오는 초기화 스크립트 |

- 번들 파일명은 빌드 설정에 따라 해시 포함 가능.
- `fixed` 리소스는 문서에 남겨야 하는 경우에 사용. 치환자가 들어간 `app.pug`의 인라인 스타일·스크립트 참고.
- 반복 호출되는 믹스인의 컴포넌트 스크립트에는 `once` 사용 사례 존재. [Content.pug](assets/pug/Mixins/Permalink/Content.pug) 참고.
- 빌드 후에도 티스토리 치환자 해석 단계가 남음. 프리뷰와 실제 티스토리 화면에서 최종 결과 확인.

## 공통 화면 레퍼런스

| 화면 | 소스 |
| --- | --- |
| 문서 골격 | [app.pug](app.pug) |
| 스킨 전체 배치 | [index.pug](index.pug) |
| 상단·메뉴 도구 모음 | [views/Top.pug](views/Top.pug) |
| 하단·테마 전환·상단 이동 | [views/Bottom.pug](views/Bottom.pug) |
| 사이드바 | [views/Sidebar.pug](views/Sidebar.pug) |
| 메인 영역 | [views/Main.pug](views/Main.pug) |
| 로더 | [views/Loader.pug](views/Loader.pug) |
| 스크롤 인디케이터 | [views/Indicator.pug](views/Indicator.pug) |

## 메인 화면 레퍼런스

| 화면 | 소스 |
| --- | --- |
| 공통 헤더 | [views/Main/Header.pug](views/Main/Header.pug) |
| 글 목록 | [views/Main/List.pug](views/Main/List.pug) |
| 빈 목록 | [views/Main/List/Empty.pug](views/Main/List/Empty.pug) |
| 글 | [views/Main/Entry.pug](views/Main/Entry.pug) |
| 공지 목록·본문 | [views/Main/Notice.pug](views/Main/Notice.pug) |
| 페이지 | [views/Main/Page.pug](views/Main/Page.pug) |
| 보호 글 | [views/Main/Protected.pug](views/Main/Protected.pug) |
| 태그 클라우드 | [views/Main/Tag.pug](views/Main/Tag.pug) |
| 방명록 | [views/Main/Guestbook.pug](views/Main/Guestbook.pug) |
| 페이지네이션 | [views/Main/Paging.pug](views/Main/Paging.pug) |
| 댓글 | [views/Main/Entry/Replies.pug](views/Main/Entry/Replies.pug) |
| 이전 글·다음 글 팝업 | [views/Main/Entry/Popup.pug](views/Main/Entry/Popup.pug) |

## 커버 레퍼런스

| 화면 | 소스 |
| --- | --- |
| 커버 조합 | [views/Main/Cover.pug](views/Main/Cover.pug) |
| 리스트·그리드·Z·갤러리·슬라이더 | [views/Main/Cover/Basic.pug](views/Main/Cover/Basic.pug) |
| 타이포그래피 | [views/Main/Cover/Typography.pug](views/Main/Cover/Typography.pug) |
| 포트폴리오 커버 | [views/Main/Cover/Portfolio.pug](views/Main/Cover/Portfolio.pug) |
| 빈 줄 | [views/Main/Cover/EmptyLine.pug](views/Main/Cover/EmptyLine.pug) |

- `Basic.pug`의 스타일은 일반 글 목록에도 적용. 파일 위치만 보고 커버 전용으로 판단하지 말 것.
- 포트폴리오 커버는 hELLO의 화면 구성 요소. 별개 프로젝트인 `packages/portfolio`와 구분.

## 사이드바 레퍼런스

| 모듈 | 소스 |
| --- | --- |
| 프로필 | [views/Sidebar/Profile.pug](views/Sidebar/Profile.pug) |
| 방문자 수 | [views/Sidebar/Counter.pug](views/Sidebar/Counter.pug) |
| 검색 | [views/Sidebar/Search.pug](views/Sidebar/Search.pug) |
| 카테고리 | [views/Sidebar/Category.pug](views/Sidebar/Category.pug) |
| 블로그 메뉴 | [views/Sidebar/BlogMenu.pug](views/Sidebar/BlogMenu.pug) |
| 링크 | [views/Sidebar/MyLinks.pug](views/Sidebar/MyLinks.pug) |
| 공지사항 | [views/Sidebar/Notice.pug](views/Sidebar/Notice.pug) |
| 인기 글 | [views/Sidebar/PopularPosts.pug](views/Sidebar/PopularPosts.pug) |
| 랜덤 태그 | [views/Sidebar/RandomTags.pug](views/Sidebar/RandomTags.pug) |
| 최근 댓글 | [views/Sidebar/RecentComments.pug](views/Sidebar/RecentComments.pug) |
| 최근 글 | [views/Sidebar/RecentPosts.pug](views/Sidebar/RecentPosts.pug) |
| 저작권 | [views/Sidebar/Copyright.pug](views/Sidebar/Copyright.pug) |

## 공용 믹스인

정의 위치: `assets/pug/Mixins/`. 수정 시 아래 화면의 공통 영향을 확인.

| 파일 | 믹스인 | 사용 범위 |
| --- | --- | --- |
| [Cover.pug](assets/pug/Mixins/Cover.pug) | `cover`, `coverTitle`, `coverPost`, `coverPosts` | 커버 구성 |
| [Group.pug](assets/pug/Mixins/Group.pug) | `group` | 댓글·방명록 |
| [Index.pug](assets/pug/Mixins/Index.pug) | `index` | 글 목록·공지 목록·커버 항목 |
| [Permalink.pug](assets/pug/Mixins/Permalink.pug) | `permalink` | 글·공지·페이지 본문 |
| [Popup.pug](assets/pug/Mixins/Popup.pug) | `popup` | 이전 글·다음 글 팝업 |

- 믹스인은 재사용 가능한 마크업 함수. `+permalink('article', false)`는 `permalink` 호출이며, 인자에 따라 출력 구성 변경.
- `coverPost`도 `index` 믹스인을 사용. 목록 변경 시 커버 확인.
- 특정 화면만 바꾸는 요청은 공용 믹스인 전체에 적용되지 않도록 호출부와 조건 확인.

## 본문 레퍼런스

| 영역 | 소스 |
| --- | --- |
| 본문 전체 구성 | [Permalink.pug](assets/pug/Mixins/Permalink.pug) |
| 제목·헤더 | [Header.pug](assets/pug/Mixins/Permalink/Header.pug) |
| 관리자 메뉴 | [Header/Admin.pug](assets/pug/Mixins/Permalink/Header/Admin.pug) |
| 콘텐츠 조합·초기화 | [Content.pug](assets/pug/Mixins/Permalink/Content.pug) |
| 글 내용·본문 스타일 | [Content/Article.pug](assets/pug/Mixins/Permalink/Content/Article.pug) |
| 목차 | [Content/TOC.pug](assets/pug/Mixins/Permalink/Content/TOC.pug) |
| 스크롤스파이 | [Content/Scrollspy.pug](assets/pug/Mixins/Permalink/Content/Scrollspy.pug) |
| 구독 버튼 | [Content/PostBtn/Subscription.pug](assets/pug/Mixins/Permalink/Content/PostBtn/Subscription.pug) |
| 본문 하단 구성 | [Footer.pug](assets/pug/Mixins/Permalink/Footer.pug) |
| 관련 글 | [Footer/RelatedArticle.pug](assets/pug/Mixins/Permalink/Footer/RelatedArticle.pug) |
| 글 태그 | [Footer/Tag.pug](assets/pug/Mixins/Permalink/Footer/Tag.pug) |
| 작성자 | [Footer/Author.pug](assets/pug/Mixins/Permalink/Footer/Author.pug) |

## JavaScript 배치

| 위치 | 용도 |
| --- | --- |
| 해당 Pug의 `script` | Alpine 컴포넌트와 화면별 동작 |
| `assets/js/app.js` | Alpine 플러그인 등록과 전역 노출 |
| `assets/js/vendor.js` | 외부 라이브러리 진입점 |
| `images/bootstrap.js` | 렌더링 전 다크 모드 처리와 jQuery 호환 처리 |

- 화면별 상태와 이벤트는 기존 `Alpine.data`·`x-data` 구조에 맞춰 구현.
- 전역 이벤트는 모든 화면에 영향. 특정 기능의 동작을 추가하기 전에 컴포넌트 범위 확인.
- `bootstrap.js`는 `<head>`에서 동기 실행. 렌더링 전에 필요한 처리만 배치.

## Alpine 레퍼런스

- `Alpine.data`로 컴포넌트 정의, `x-data`로 해당 DOM 영역에 연결.
- `Alpine.store`는 여러 영역에서 참조하는 공유 상태. `$store.header`처럼 접근.
- 자식 템플릿은 부모의 상태를 참조할 수 있음. 해당 파일에 정의가 없으면 상위 `x-data` 확인.

| 컴포넌트·상태 | 소스 | 역할 |
| --- | --- | --- |
| `app` | [app.pug](app.pug) | 문서 전체 상태 |
| `{ sidebar: false }` | [index.pug](index.pug) | 사이드바 열림 상태 |
| `{ listStyle: ... }` | [List.pug](views/Main/List.pug) | 티스토리 목록 스타일 |
| `content` | [Content.pug](assets/pug/Mixins/Permalink/Content.pug) | 제목 수집·앵커, 코드 강조, 본문 이미지 처리 |
| `scrollspy` | [Scrollspy.pug](assets/pug/Mixins/Permalink/Content/Scrollspy.pug) | 스크롤 위치에 따른 제목 활성화 |
| `tag` | [Tag.pug](assets/pug/Mixins/Permalink/Footer/Tag.pug) | 글 태그 처리 |
| `{ open: true }` | [Popup.pug](assets/pug/Mixins/Popup.pug) | 팝업 열림 상태 |
| `category` | [Category.pug](views/Sidebar/Category.pug) | 카테고리 접기 |
| `bottom` | [Bottom.pug](views/Bottom.pug) | 테마 전환 |
| `top`, `menuToolbar`, `subscribe`, `tistoryMenubar` | [Top.pug](views/Top.pug) | 상단·메뉴·구독 동작 |
| `$store.header` | [Header.pug](views/Main/Header.pug) | 공통 헤더 제목·표시 상태 |
| `$store.indicator` | [Indicator.pug](views/Indicator.pug) | 스크롤 진행 상태 |

- 목차와 스크롤스파이는 `content`의 `headings` 공유. 제목 수집 방식 변경 시 두 화면을 함께 확인.
- 외부 라이브러리 로딩은 [vendor.js](assets/js/vendor.js), 해당 라이브러리를 사용하는 동작은 화면 컴포넌트까지 확인.

## 스타일 레퍼런스

| 대상 | 소스 |
| --- | --- |
| Tailwind 지시문·공용 컨테이너 | [assets/css/app.css](assets/css/app.css) |
| 공용 보조 클래스 | [assets/css/shortcutLayer.css](assets/css/shortcutLayer.css) |
| 색상·폰트·브레이크포인트·크기 | [tailwind.config.js](tailwind.config.js) |
| 화면별 스타일 | 해당 Pug의 `style`·`:postcss` 영역 |

- `@apply`는 Tailwind 유틸리티를 CSS 규칙에 적용하는 표현.
- 브레이크포인트는 프로젝트에서 재정의. Tailwind 기본 화면 크기로 가정하지 말 것.
- 새 파일에서 Tailwind 클래스를 사용할 때는 `tailwind.config.js`의 `content` 탐색 범위 확인.

## CSS 선택자

- `#bottom`, `.wrap`처럼 Pug에 직접 표기한 ID·클래스는 커스텀 스타일의 기준점.
- `class` 속성에는 주로 TailwindCSS 유틸리티와 Font Awesome 클래스 사용.
- `.wrap`, `.txt`, `.ico` 등은 여러 곳에서 재사용. `#bottom > .wrap`처럼 대상 영역으로 선택자 범위 제한.

## 별도 테마 스타일

- 별도 테마 변형은 `app.pug`의 `html`에 루트 클래스를 추가하여 범위 구분.
- 예: `.new-style #article`. 다크 모드에서는 같은 `html`에 `dark`가 붙으므로 `.dark.new-style #article` 사용.
- 독립 CSS 파일을 배포할 경우 `images/`에 배치하고 `app.pug`에서 링크 추가.
- 기존 스타일을 덮어쓰는 파일은 빌드된 `skin.html`에서 기본 스타일시트보다 뒤에 로드되는지 확인.
- 원본의 화면 스타일을 직접 수정하는 작업에는 별도 테마 클래스 불필요.

## 레이아웃 변수

`app.pug`의 CSS 변수 → `tailwind.config.js`의 크기 설정 → 화면의 유틸리티 클래스 순으로 연결.

| 변수 | 역할 | 관련 클래스 |
| --- | --- | --- |
| `--h-idx` | 목록·커버·태그 영역 너비 | `index-container`, `w-idx` |
| `--h-pem` | 본문·방명록·보호 글 영역 너비 | `permalink-container`, `w-pem` |
| `--h-s` | 사이드바 너비 | `pl-s`, `w-s` |
| `--h-c` | 사이드바를 제외한 영역 너비 | `w-c` |
| `--h-h` | 헤더·커버 제목 영역 높이 | `h-h` |

- 너비·높이 변경 시 변수, 유틸리티, 컨테이너의 연결을 함께 확인.
- `index-container`, `permalink-container`는 [app.css](assets/css/app.css)의 `@layer components`에 정의. 너비뿐 아니라 여백·반응형 제한도 포함.

## 스킨 옵션

| 단계 | 위치·표현 |
| --- | --- |
| 옵션 정의 | `docs/index.xml` |
| JavaScript 매핑 | `app.pug`의 `window.skinOptions` |
| JavaScript 사용 | `skinOptions.foldableCategory` 등 |
| 마크업 조건 | `s_if_var_toc` 등 티스토리 그룹 태그 |
| 속성 내 조건 | `<s_if_var_sidebar>xl:pl-s</s_if_var_sidebar>` 등 |
| CSS 값 | `[##_var_width_##]px` 등 치환자 |

- 옵션 이름과 JavaScript 키가 다를 수 있음. 예: `foldable-category` → `foldableCategory`.
- `window.skinOptions` 값은 문자열. 불리언으로 가정하지 말 것.
- 옵션 변경 시 정의·매핑·조건·사용처를 함께 확인.
- 속성 내부의 그룹 태그도 의도된 티스토리 문법. 일반 HTML 문법으로 임의 교정하지 말 것.
- 치환자를 사용하는 인라인 스타일의 `fixed` 속성 유지.

## 옵션 사용처 레퍼런스

| 옵션 | 주요 사용처 |
| --- | --- |
| `sidebar` | [index.pug](index.pug)의 본문 여백, [Sidebar.pug](views/Sidebar.pug)·[Top.pug](views/Top.pug)·[Bottom.pug](views/Bottom.pug)의 배치 |
| `foldable-category` | [Category.pug](views/Sidebar/Category.pug)의 카테고리 접기 |
| `width` | [app.pug](app.pug)의 `--h-pem` |
| `toc`, `scrollspy` | [Content.pug](assets/pug/Mixins/Permalink/Content.pug)의 표시 조건 |
| `hljs`, `hljs-dark` | [app.pug](app.pug)의 코드 강조 테마 링크 |
| `header-style` | [Header.pug](assets/pug/Mixins/Permalink/Header.pug)의 헤더 스타일 |

- 옵션 정의는 [docs/index.xml](docs/index.xml), JavaScript 매핑은 [app.pug](app.pug) 확인.
- 프리뷰 옵션은 [tidory.config.example.js](tidory.config.example.js)의 `preview.variableSettings` 참고. 실제 작업 설정은 `tidory.config.js`에 적용.
- 프리뷰 화면 종류·커버 구성은 `preview.mode`, `preview.homeType`, `preview.coverSettings` 참고.

## 변경 확인

- 코드 수정 후 `npm run lint`, 빌드 영향이 있는 변경은 `npm run production`으로 확인.
- 치환자·옵션·화면 변경은 `npm run preview`로 티스토리 해석 결과 확인.
- 공용 믹스인·스타일 변경은 관련 화면과 모바일·데스크톱, 다크 모드를 함께 확인.
- 프리뷰·빌드에 필요한 환경이 없으면 확인하지 못한 항목 명시.
