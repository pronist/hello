# 기여하기

hELLO 에 기여하는 방법은 커스텀 테마를 제작하여 사용자에게 다양한 테마를 제공하는 것입니다. 스킨에서 제공하는 기본 테마는 `dark`, `light` 이며 `themes` 디렉토리에 위치하고 있습니다. 테마는 기본적으로 `*.css` 로 제공되고, less, scss, stylus 등 어떠한 전처리기를 사용해도 상관없습니다. 원시코드는 포함할 필요없으며 `*.css` 인 목적코드만 있으면 됩니다.

## PRs

새로 작성한 테마가 포함된 PR(Pull Request)을 보내주시면 검토를 거쳐 테마가 추가됩니다. PR 에는 `themes` 디렉토리에 `*.css` 에 해당하는 테마 파일을 추가한 것 이외에는 그 어떤 변경사항도 있어서는 안 됩니다. 새로운 테마를 만들기 위해 [코드 작성가이드](https://github.com/pronist/hELLO/blob/master/CODE_OF_CONDUCT.md)를 참고하여 테마를 작성하는 방법을 알아보시기 바랍니다.

## 코드 작성가이드

새로운 테마를 작성하기 위한 코드 작성가이드입니다.

### 네이밍 컨벤션

CSS 파일 이름은 테마 하나당 `*.css` 가 제공되어야 합니다. 예를 들어 `dark` 테마는 `dark.css` 가 요구됩니다.

```html
<link rel='stylesheet' href='//cdn.jsdelivr.net/gh/pronist/hELLO@3.6.1/themes/dark.min.css'>
```

그러나 사용자가 이 테마를 직접 스킨편집에서 코드를 수정하여 추가할 필요가 없습니다. 스킨옵션을 사용할 것이기 때문에 사용자는 테마만 선택하여 포함할 수 있습니다.

```html
<link rel='stylesheet' href='//cdn.jsdelivr.net/gh/pronist/hELLO@3.6.1/themes/[##_var_dark-theme_##].min.css'>
```

### 변수

스킨에서 사용하는 CSS 변수는 많이 없습니다. 다만, 어디서 사용되는지 알면 테마를 제작하는 것이 더욱 수월해질 수 있습니다. 아래의 예는 `light` 테마의 값 구성입니다. 테마를 선언할 때는 반드시 지역화를 해주어야 합니다. `html[data-theme='light']` 내부에 정의된 변수는 오직 `light` 테마 일 때만 적용됩니다.

```css
html[data-theme='light'] {
  --h-color: #000;
  --h-color-blur: rgba(0,0,0,0.7);
  --h-color-blurrier: rgba(0,0,0,0.5);
  --h-color-blurriest: rgba(0,0,0,0.1);
  --h-color-background-level-1: #fff;
  --h-color-background-level-2: #f8f8f8;
  --h-color-background-level-3: #e9e9e9;
  --h-color-background-level-4: rgba(255,255,255,0.6);
  --h-color-theme: #f0506e;
  --h-button-color: #000;
  --h-button-color-background: #fff;
  --h-button-color-hover: #fff;
  --h-button-color-hover-background: #000;
}
```

괄호에 들어가는 것은 해당 변수가 사용되는 태그 또는 이름을 의미합니다. 예를 들어 `list:description` 은 이름으로써 선택자로 표현하자면 `'.list > .item > .description` 이지만, 단순하게 리스트의 설명(Description)부분이라고 해석하시면 됩니다. 사용처를 나타내기 위한 의사표현이라고 생각하는 편이 좋습니다. `html` 은 그 자체로 태그를 의미합니다.

사용처에 대해 일부 생략이 있습니다. 변수가 사용되는 곳을 자세히 알고싶다면 해당 변수의 이름으로 에디터에서 검색을 할 수 있습니다.

* `--h-color`: 텍스트 (span, p, h1, h2)
* `--h-color-blur`: 흐린 텍스트 (list:description, post:header, post:tags, tistorytoolbar:a, scollspy, notification)
* `--h-color-blurrier`: 더 흐린 텍스트 (navigation, paging:next, prev, sidebar, post:figcaption, post:blockquote)
* `--h-color-blurriest`: 가장 흐린 텍스트 (*:border)
* `--h-color-background-level-1`: 메인 배경 (html, loader)
* `--h-color-background-level-2`: 서브 배경 (sidebar, tagcloud, post:tags, post:related, post:tistorylayer, comment:form)
* `--h-color-background-level-3`: 검색 배경 (search:input)
* `--h-color-background-level-4`: 흐린 배경 (navigation:sticky)
* `--h-color-theme`: 앵커 (post:a)
* `--h-button-color`: 버튼 텍스트 (post:button, subscription:button, footer:button)
* `--h-button-color-background`: 버튼 배경 (post:button, footer:button)
* `--h-button-color-hover`: 버튼 Hover 텍스트 (button:hover, paging:selected, navigation:subscription, post:like. post:more_less)
* `--h-button-color-hover-background`: 버튼 Hover 배경 (button:hover, paging:selected, subscription:button, post:like. post:more_less)

변수 이외에 다른 추가적인 커스텀을 하고 싶을 때는 `views/*.pug` 를 비롯한 `assets/styl/**/*.styl` 을 참고하여 스킨에 사용된 선택자를 알 수 있습니다. 테마에 변수 설정 이외에 추가적인 커스텀을 설정한 예로는 `dark` 테마가 있으며, `assets/themes/dark/**/*.styl` 에서 살펴볼 수 있습니다.

### 테스트

티도리 프레임워크에서 테마를 테스트하기 위해서는 다음과 같이 `link` 를 만들 수 있습니다. 예를 들어 테마의 이름이 `dark` 인 경우 아래와 같이 포함할 수 있습니다. 이 경우 테마는 `themes` 디렉토리에 위치합니다.

```pug
link(rel='stylesheet' href='/themes/dark.css')
```

또는 전처리기를 [Pug Filter](https://pugjs.org/language/filters.html) 와 함께 사용할 수 있다면 아래와 같이 포함하여 테스트할 수도 있습니다. 이 경우 테마는 `assets/themes` 에 위치해 있는 것으로 가정합니다. 사실 어디에 있어도 상관없습니다. 프로젝트에 원시코드는 포함하지 않을 것이기 때문입니다. hELLO 에는 이미 stylus 를 위한 필터는 설치되어 있고, 스킨의 기본 스타일 및 `light`, `dark` 테마는 stylus 로 구성되어 있습니다. 테스트를 위해 아래와 같이 포함할 수 있습니다.

```pug
style
  include:stylus assets/themes/dark.styl
```
