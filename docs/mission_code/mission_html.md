# `<!DOCTYPE html>`

이것은 html 태그가 아니다. 정확히는문서 유형 선언

브라우저에게 이 문서는 html5 방식으로 해석하라라고 알려ㅜ는 선언이다. 이것이 왜 필요한가?

옛날 웹에서는 html 버전이 여러개 있었고 브라우저가 문서를 해석하는 방식도 달랐다. 그래서 문서 첫줄에 어떤 html 규칙을 사용할지 알려주게 되었다. 

html5 에서는 그냥 

`<!DOCTYPE html>` 이라고 사용하게 된다. 즉 이것은 브라우저야 이문서는 html 5문서야 표준방식으로 해석해 라고 말하는 것과 같다

# `<html lang="ko">`

html은 문서 전체를 감싸는 최상위 요소이다. 구조를 보면 

html
├── head
└── body

이고 나의 웹페이지 전체가 결국 이안에 들어간다. 

그런데 그렇다면 위 태그는 뭘까?

lang은 html 속성 (attribute)이다. 

태그와 속성은 다르다. 

`<html lang="ko">`
      └────────┘
        속성

여기서 lang="ko"는 이 문서의 기본 언어는 한국어다 라는 의미이다. 

이것은 단순한 장식은 아니다. 스크린 리더 같은 접근성 도구각 문서를 읽을때 언어를 판단하는데 사용할 수 있다. 검색엔진이나 브라우저에게 문서의 언어를 알려주는 의미도 있다. 그러니까 내가 이걸 직접 화면에서는 보지 못하지만 사용자에게는 브라우저를 통해 html 문서의 기본언어는 한국어 라는 정보를 제공하는 것이다. 

# `<head>`

여기서 부터는 head영역이다. 

여기에서는 사용자에게 화면으로 직접 보여주는 본문 내용다는 웹페이지가 어떻게 해석되고 동작할지를 설명하는 정보가 들어간다. 

쉡게 말하면 

HTML
│
├── HEAD
│   └─ 페이지 설정 / 메타정보 / CSS / JS 연결
│
└── BODY
    └─ 실제 화면에 나타나는 내용

내 페이지의 실제 자기소개나 버튼 같은 것은 `<body>`에 있다. 

# 문자 인코딩 

`<meta charset="UTF-8">`

이것도 화면에 나타나는 내용은 아니다. 

브라우저에게 이 html 파일의 문자를 utf-8방식으로 해석해 라고 알려준다.

이것이 왜 중요할까 ? 내 페이지에는 정충원, 역사, 인문학, 데이터와 같은 한글이 엄청 많이 포함되는데 문자 인코딩을 제대로 맞추지 않으면 과거에는 한글이 깨져서  문제가 발생하였다. 

그래서 현대에는 모든 html 문서에서 

`<meta charset="UTF-8">`을 포함시켜 문자를 인코딩 한다. 

# viewport

`<meta name="viewport" content="width=device-width, initial-scale=1.0">`

이것은 반응형 웹에서 굉장히 중요하다 

얼핏 복잡해 보이기도 하지만 이를 자세히 보면 name="viewport"는 브라우저에게 이 메타정보는 viewport에 관한 서렁이다라는것을 알려준다. 

viewport는 쉽게 말해서 현재 사용자가 보고 있는 브라우저 화면 영역이라고 생각하면 된다. 

width = device-width 는 즉 웹 페이지의 가로 폭을 현재 기기의 화면 폭에 맞춰라 라는 의미가 된다. 스마트폰이면 스마트폰, pc면 pc 브라우저의 폭을 말한다. 


initial-scale=1.0

처음 화면을 100% 크기로 표시하라는 의미이다. 그래서 전체적으로 보자면 

`<meta name="viewport" content="width=device-width, initial-scale=1.0">`

는 모바일에서도 실제 기기 화면 폭에 맞추서 웹페이지를 정상적인 1배율로 보여줘 라고 이해하면 된다. 

미션에서는 반응형 웹 요구사항과 직접 연결되는 부분이다. 

- content는 무엇일까?
- 이 메타 태그의 속성은 실제 영향을 줄까?
- 100% 란 어느정도인가?


# `<title>`

`<title>정충원 | The Voyage Begins</title>`

이것은 웹 페이지의 제목이다 화면 본문에 큰 글씨로 나타나는 제목이 아니라 주로 브라우저 탭에 표시되는 제목을 말한다. 

즉 화면에 표시되는 `<h1>`태그의 `<h1>History × Data × AI</h1>`와 전혀다른 역할을 하는 것이다. 헷갈리지 않도록 주의하자

# description

`<meta name="description" content="정충원의 역사와 AI, 데이터 탐험 기록">`

역시나 이것도 화면에 직접 보이는 것은 아니다. 

검색 엔진 등에 페이지를 설명하는 메타 설명 정보이다. 

즉 :

name
 ↓
이 메타정보가 무엇인지

content
 ↓
그 실제 내용이 무엇인지

라고 보면 된다. 

# google fonts연결

`<link rel="preconnect" href="https://fonts.googleapis.com">`

이것은 링크 태그로 나중에 브라우저에게 google fonts서버와 통신할거니까 미리 연결 준비를 해둬 라는 힌트를 주는 거이다. 

preconnect는 미리 연결 준비를 해두는 최적화 방법이며 아직 글꼴을 가져오는 명령 자체는 아니다.

`<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>`

이것 역시 비슷하다 google fonts가 시레 폰트 파일을 제공하는 다른 서버와 연결할 수 있도록 미리 연결 준비를 한다. 

여기서 crossorigion은 다르 출처의 리소스와 서로 연결할 때 사용하는 설정이다. 

- rel은 관계를 나타내는 속성이라 알고 있다. 단지 설명이 아니라 또한 기능을 갖추고 잇는것인가? 다른 옵션은 뭐가 잇을까?

# 진짜 폰트 가져오기

```
<link
    href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Noto+Serif+KR:wght@400;500;600&display=swap"
    rel="stylesheet"
>
```

이것은 실제로 외부 css를 가져오는 코드다 여기서 중요한것이 

rel="stylesheet"

인데 이것의 뜻은 이 링크가 스타일 시트 (css)이다 라는 것을 알려주는 것이다. 


그래서 브라우저는 해당 url에 있는 css를 가져와서 적용한다. 

내가 지정한 폰트는 

Cormorant Garamond
Noto Serif KR

이다.

- 어떻게 링크를 가오고 뿌려주는 것인가? 그렇다면 나도 자체적인 폰트를 만들어서 서비스 할 수 잇는가?
- 두 api와 html 간의 통신은 어떤식으로 이루어지며 그 사이에 흐름은 어떻게 될까

# 내 css와 연결

`<link rel="stylesheet" href="css/style.css">`

이것이 내가 직접 만든 css파일이다. href를 먼저 보자 

css/style.css

현재 html 파일 위치를 기준으로 :
index.html
│
└── css
    └── style.css

에 있는 파일을 가져오라는 뜻이다. 

브라워가 html을 읽다가 

`<link rel="stylesheet" href="css/style.css">`를 만나게 되면 

index.html
   ↓
css/style.css 가져오기
   ↓
CSS 규칙 해석
   ↓
HTML 요소에 적용

와 같은 식으로 이루어진다. 이것이 html 과 css 가 연결되는 최초의 핵심 지점이다. 

# update.css

`<link rel="stylesheet" href="css/updates.css?v=20260925-4">`

이것도 css 파일이다. 그런데 뒤에 이상한게 붙어잇다. 

?v=20260925-4
이것은 파일의 이름도 아니고 쿼리 문자열이다. 

쉽게 말하자면 css/updates.css.파일은 그대로인데 url을 

css/updates.css?v=20260925-4

로 설정하여 브라우저가 이전에 캐시해둔 파일을 계쏙 사용하는 문제를 피하기 위한 캐시버스팅 용도로 쓴것이다. 즉 

내가 css를 수정했는데 브라우저가 어라? 나 예전에 받은 update.css 있는데 그거 쓰지 뭐 하는 것을 방지하고 버전처럼 뒤에 값을 붙인것 

- 그렇다면 캐시버스팅은 어떻게 사용하는 것일까?

# backgrounds.css

`<link rel="stylesheet" href="css/backgrounds.css?v=20260928-5">`

이것도 똑같이 css 연결이다. 현재 내 프로젝트 구조는 


HTML
 │
 ├── style.css
 ├── updates.css
 └── backgrounds.css

세 개의 css파일이 모두 같은 html에 적용된다. 이게 나중에 css 분석할때 중요하게 작용한다. 

이유는 내가 화면을 보면서 왜 .section이 이렇게 생기지?

라는 질문에 style.css 만 보면 안되고 뒤에 로드된  backgrounds.css에서 같은 선택자를 다시 덮어 쓰고 있을 수도 있기 때문이다. 

css 는 단순히 파일 하나 읽으면 끝이 아니다.

---

# javascript 연결

이것은 내가 아까 물어본 부분으로 

`<script src="js/main.js?v=20260928-4" defer></script>`

이건 javascript파일을 연결하는 링크이다. 

index.html
    ↓
js/main.js

그런데 여기서  defer가 발생한다. 이것은 아까 공부했던 것으로 

쉽게 말하면 

HTML 파싱
    │
    ├── main.js 다운로드 시작
    │
    ├── HTML 계속 파싱
    │
    └── HTML 파싱 완료
             ↓
          JS 실행


이다

defer가 없으면 일반적인 외부 script는 html 파싱을 막고 script를 실행 할 수 있다. 

내 코드는 

`<script src="js/main.js..." defer></script>`

이므로 defer옵션이 존재한다. 따라서 html 을 읽는것과 js파일 다운로드를 효율적으로 처리하고 html 파싱이 끝난후 js를 실행하도록 
하는 방식이다. 

또한 내 main.js에는 또

```
document.addEventListener("DOMContentLoaded", () => {
```

가 존재한다. 그러니까 앞으로 js를 분석할때 defer와 DOMContentLoaded가 둘 다 있는지도 설명해야한다. 


- domcontentloaded가 무엇인가? 어떤 기능을 하는가?

---

## 지금까지 질문들 

1. viewport 에서 content속성은 무엇인가?

브라우저에게 viewport 에 대해서 무슨 서렁을 하라는 것인지를 알려주는 것이다.

반면 name은 지금 부터 내가 설명하려는 메타데이터의 종류는 viewport 이다 라고 알려주는 것이다. 

즉 
content="width=device-width, initial-scale=1.0"
은 하나의 문자열로 보이지만 실제로는 viewport 설정 두가지를 전달하는 것이다. 

그래서 contetn라는 이름이 붙은 것이다. 

그렇다면 왜 굳이 content라는 속성으로 넣을까?

meta태그는 일반적인 html 콘텐츠를 표시하는 태그가 아니다. 

브라우저와 검색엔진에게 문서에 대한 정보를 전달하는 것이다. 

그래서 meta는 대략 이런 구조를 사용한다. 

`<meta name="무슨 정보인가" content="그 정보의 내용">`

다만 모든 meta가 반드시 name + content구조인 것은 아니다.  charset과 같은 별도의 방식도 있다. 

2. 메타 태그의 속성은 실제 영향을 주는가?

그렇다 

이것은 굉장히 중요한 포인트이다. html 의 속성 중에는 단순히 설명용 정보인 것도 있지만 브라우저가 실제로 읽고 행동을 바꾸는 속성도 있다. 예를 들어 

브라우저가 `<meta name="viewport" content="width=device-width, initial-scale=1.0">`이것을 읽고 모바일 화면의 레이아웃 viewport를 설정한다. 

이것은 브라우저가 viewport 라는 특별한 메타 정보를 인식해서 직접 동작을 변경한다. 

defer 와 rel도 마찬가지다 

`<link rel="stylesheet" href="css/style.css">`에서 rel="stylesheet"는 브라우저에게 이 링크가 가리키는 리소스는 stylesheet다 라고 알려주는 의미 + 동작 지시 역할을 한다. 

그래서 html 속성을 공부할때는 이 속성은 단순히 이름표인가 아니면 브라우저의동작에 영향을 주는가? 를 구분하는 것이 좋다. 

3. initial-scale=1.0이 100%라는 것이 무슨뜻일까?

여기가 처음 보면 헷갈리는 곳이다. 

흔히 initial-scale=1.0 를 100%라고 설명하는데 정확히는 100%크기로 확대/ 축소 라는 의미의 1배율이라고 이해하는 것이 좋다. 

즉 
0.5 → 0.5배
1.0 → 1배
2.0 → 2배

이런 개념이다. 

실제 예를 들어보자

스마트 폰 화면의 css픽셀 기준 너비가 390이라고 해보자 

viewport width = 390 CSS px

