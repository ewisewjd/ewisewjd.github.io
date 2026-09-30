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

그리고 initial-scale=1.0라면 초기 확대 비율이 1배이다. 

즉 대략 390 css px -> 390 css px라는 것이다. 

그렇다면 만약 initial-scale=2.0 이라면? 초기 확대 비율이 2배이니까 화면을 두배 확대해서 보는 것에 가깝다. 

반대로  initial-scale=0.5 라면 0.5 배 축소이다. 

그런데 100% 라면 왜 헷갈리냐면 우리가 보통 css에서 

```
width: 100%;
```
라면 부모 크기의 100% 라는 뜻이다. 하지만 initial-scale=1.0 은 그런 의미가 아니다 부모의 100% 크기가 아니라는 것이다. 

그냥 초기화면 확대 비율 1배 라고 이해하는게 정확하다. 

4. rel은 관계 설명만 하는게 아니라 기능도 잇는가?

기능이 존재한다. 웹 브라우저에서 그 관계를 실제로 해석해서 동작을 결정하기 때문에 기능적인 의미도 갖는다 예를들어 :
`<link rel="stylesheet" href="css/style.css">`

라면 브라우저 입장에서 

link
 ↓
href에 있는 리소스가 있음
 ↓
rel="stylesheet"
 ↓
아, 이 리소스는 CSS stylesheet구나.
 ↓
가져와서 문서에 적용해야겠다.

라고 이해하는 것이다. 

rel는 여러 값이 있다. 대표적으로 stylesheet는 외부 스타일 시트 
`<link rel="stylesheet" href="style.css">`

icon은 웹 사이트 아이콘
`<link rel="icon" href="favicon.ico">`

preconnect는 해당 서버와의 연결을 미리 준비해두라는 힌트
`<link rel="preconnect" href="https://fonts.googleapis.com">`

preload는 페이지에서 곧 필요할 리소스를 미리 가져오도록 요청하는 방식

```
<link
    rel="preload"
    href="hero.jpg"
    as="image"
>
```


이외에도 alternate는 다른 버전의 무서나 대체 리소스를 나타내는 데 사용

canonical은 seo에서 중요한 관계를 표현할때 사용 - 이 페이지의 대표 url이 무엇인지 검색엔진에게 알려주는 용도이다.
`<link rel="canonical" href="https://example.com/page">`

author는 문서의 작성자 정보와 관련된 관계를 나타낼수 있다. 

그러니까 즉 rel 을 단순히 관계를 나타내는 속성이라고만 적으면 절반짜리 이해이다. 더 정확하게는  

rel은 현재 문서와 href로 연결된 리소스 사이의 관계를 나타내며 브라우저는 그 관계를 해석하여 해당 리소스를 어떤 방식으로 취급할지 결정할 수있다.

preconnect는 정확히 브라우저에게 나 이서버에서 뭔가 가져올거니까 미리 연결 준비해놔 라는 알림이 된다고 볼수 있겠다. 

웹에서 서버와 통신하려면 그냥 데이터를 바로 받는게 아니다. 

대략 

브라우저
   ↓
DNS 확인
   ↓
서버 찾기
   ↓
네트워크 연결
   ↓
TLS/HTTPS 연결 준비
   ↓
HTTP 요청
   ↓
응답

과 같은 과정이 필요한데 preconnect는 이 중 앞쪽의 연결 준비 비용을 미리 해두는 최적화 힌트라고 보면 된다. 

crossorigin은 은 값이 없는 불리언 속성이다. 즉 crossorigin자체가 설정된거다 이건 이름 그대로 교차출처 리소스 연결과 관련이 있다. 

웹에서 오리진이란 scheme+ host+port를 묶은 개념이다. 

예컨대 내 사이트와 다른 사이트가 서로 다른곳에서 실행되는데 구글 폰트를 그 사이트에서 가ㅕ오게 된다면 내 사이트-> 다른 오리진 서버가 되는것이 된다. 

이것을 cross origin이라고 한다. 


crossorigin은 브라우저가 그 외부 리소스를 cross-origin방식으로 처리해야 할수 있다는 것을 명시하는 역할을 한다. 여기서 중요한것은 crossorigin을 붙인다고 보한 제한을 해제한다는 뜻은 아니라는 것이다. 

브라우저의 동일 출처 정책과 cors라는 별도의 보안 매커니즘이 있고 서버가 적절한 응답 헤더를 보내야하는 경우도 있다. 일단 지금 단계에서는 

cross-origin
= 다른 출처의 리소스

crossorigin
= 그 리소스를 교차 출처 방식으로 다룰 수 있음을 명시하는 속성

정도만 이해해 두자 

5. google fonts 는 도대체 어떻게 가져와서 뿌려주는 것인가?

처음 html 을 보면 폰트가 html 안에 들어가 잇는 건가 싶기도하다 결론은 아니다. html 자체에는 폰트가 들어있는게 아니라 google fonts서버에 잇는 css를 가져오라는 링크가 들어잇는 것이다. 

실제 흐름은 대략 이렇게 된다. 

네 index.html
       │
       │ <link rel="stylesheet"
       ↓
Google Fonts CSS 서버
       │
       │ CSS 응답
       ↓
브라우저
       │
       │ CSS 안에 있는 폰트 파일 주소 발견
       ↓
Google Fonts 폰트 서버
       │
       │ 실제 폰트 파일
       ↓
브라우저
       │
       ↓
웹페이지 글자에 적용


그렇다면 나도 내 폰트를 만들어서 공급할 수 있을까?

당연히 가능하다

그리고 이게 웹 개발에서 아주 중요한 개념이다. 내가 직접만든 폰트 파일을 가지고 있다면 서버에 올려서 

```
@font-face {
    font-family: "MyFont";
    src: url("/fonts/my-font.woff2") format("woff2");
}
```
```
body {
    font-family: "MyFont", sans-serif;
}
```

이렇게 사용할 수 잇다. 

다시 말하지만 google fonts는 특별한 마법이 아니라 

결국 구조는 

Google
├─ CSS 제공
└─ 폰트 파일 제공
이고 나도 서버를 가지고 있따면 같은 구조를 만들수 있다는 것이다. 

6. 이 두 api와 html 간 통신은 어떤 방식인가?

우선 api라는 표현을 구분할 필요가 있다. 지금 html의 google fonts부분은 일반적으로 rest api호출과는 다르다. 

반면 나중에 혹여라도 자바스크립트에서 fetch("https://api.github.com/users/ewisewjd/repos")

하는 것은 실제 github api요청이다. 그래서 둘을 나눠 봐야한다. 

`<link rel="stylesheet" href="https://fonts.googleapis.com/...">`이것은 브라우저가 외부 css 리소스를 요청하는 것이다. 

HTML
 ↓
`<link>`
 ↓
브라우저가 HTTP 요청
 ↓
Google 서버
 ↓
CSS 응답
 ↓
브라우저

반면 js에서 fetch(`https://api.github.com/users/${username}/repos?...`)는 자바스크립트가 직접 http요청을 발생시키는 것이다.

JavaScript
   ↓
fetch()
   ↓
HTTP 요청
   ↓
GitHub API 서버
   ↓
JSON 응답
   ↓
JavaScript
   ↓
DOM 변경
   ↓
화면에 카드 표시

이 둘의 차이가 굉장히 중요하다. 

즉 나의 프로젝트에서는 두가지 외부 통신 방식을 동시에 경험하고 잇는 것이다.

7. 캐시버스팅은 어떻게 사용하는 거소 값은 무엇인가?

`<link rel="stylesheet" href="css/updates.css?v=20260925-4">`

여기서 ?v=20260925-4가 캐시 버스팅을 위한 캐시 버스팅 쿼리 스트링이다. 

왜 필요하냐

브라우저는 성능때문에 css/js같은 파일을 캐시에 저장한다. 

예를 들어 처음 방문햇을때는

index.html
   ↓
style.css
   ↓
다운로드
   ↓
브라우저 캐시

형식으로 저장된다. 그런데 내가 style.css를 수정했다고 쳐보자 

서버에는 새 버전이 되엇지만 브라우저가 "나 style.css 이미 갖고 있는데?" 하면서 예전 파일을 사용할 수 있다.

때문에 url을 updates.css?v=1 이런식으로 바꾸면 브라우저 입장에서는 url이 달라진다. 그러니까 새로운 파일을 가져오게 될 가능성이 높다.

그렇다면 뒤에 들어간 값은 무슨 공식인가?

정해진 값을 나타내는 공식은 없다. 

이것은 개발자가 임의로 정한 이름과 문자열이다. 
이것은 웹 표준은 아니다. 

8. DOMContentLoaded가 무엇인가?
이제 자바스크립트 쪽으로 넘어가보자 

내 코드의 맨 위 document.addEventListener("DOMContentLoaded", () => { 이것을 이해하면 js코드가 왜 이렇게 시작하는지도 이해된다. 

dom이 뭘까?

dom이란 DOM = Document Object Model 으로 html을 브라워가 읽어서 js가 다룰수 잇는 객체구조로 만든것이라고 생각하면된다.

```
<body>
    <h1>Hello</h1>
    <button>Click</button>
</body>
```

이것을 브라우저는 

document
└── html
    └── body
        ├── h1
        │   └── "Hello"
        └── button
            └── "Click"

와 같은 구조로 만드는 것이다. 이게 DOM이다.

DOMContentLoaded는  html 문서를 브라우저가 전부 파싱해서 DOM을 완성햇을때 발생하는 이벤트이다. 

그래서 

```
document.addEventListener("DOMContentLoaded", () => {
    // 여기부터 HTML DOM을 조작
});
```

는 사실상 html 구조를 다 읽은 다음 이 코드를 실행해라 라는 뜻이다. 

왜 이게 필요할까 예를들어 js가 html 보다 머너 실행된다면? 브라우저 입장에서는 

JavaScript 실행
 ↓
#hello 찾음
 ↓
아직 HTML을 안 읽었음
 ↓
없는데?
 ↓
null

이 될수 있다. 

따라서 

```
document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("#hello");
});
```

HTML 읽기
 ↓
DOM 생성
 ↓
DOMContentLoaded 발생
 ↓
JS 실행
 ↓
#hello 찾음
 ↓
있음

가 되는 것이다. 그런데 내 코드에는 defer도 있었다.

`<script src="js/main.js?v=20260928-4" defer></script>`
document.addEventListener("DOMContentLoaded", () => {

둘다 존재하는 것이다. 

그렇다면 defer와 DOMContentLoaded을 왜 같이 쓸까? 이건 중요한 부분이다. defer자체가 html 파싱이 끝난뒤 스크립트를 실행하도록 보장해주기 때문에 이 코드에서는 DOMContentLoaded가 사실상 추가적인 안전 / 구조적 진입점 역할을 수행하고 있다 

즉 즈금 나의 코드는
```
HTML
 ↓
<script defer>
 ↓
HTML 파싱 계속
 ↓
DOM 완성
 ↓
DOMContentLoaded
 ↓
main.js의 콜백 실행

```

이라고 보면된다. 다만 defer와 DOMContentLoaded는 같은 기능이 아니다. 

defer → 스크립트 로딩/실행 시점을 제어하는 `<script>` 속성
DOMContentLoaded → DOM이 완성됐다는 브라우저 이벤트

이 차이는 반드시 구분해 두는 것이 좋다. 

---

#  body가 무엇인가?

html 문서를 크게 보면 