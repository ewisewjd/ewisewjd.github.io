
# HTML
├─ 기본 문법
├─ Semantic HTML
├─ header / nav / main / section / article / footer
├─ form / input / label
├─ img / alt
└─ anchor

----
# html 설명

## <!DOCTYPE html>

이것은 html 문서의 종류를 브라우저에게 알려주는 선언이다. 쉽게 말하면 "이문서는 html5 표준 방식으로 해석해 줘" 라고 알려주는 것과 같다 

이 선언은 html 태그가 아니다. 그래서 여는 태그와 닫는 태그가 존재하지 않는다. 그러나 이 선언을 생갹한다면 일부 브라우저가 호환성 목적의 오래된 레이아웃 해석방식으로 동작할 수 있다. 그러니 html 문서 맨위에 작성하는 습관을 들이면 된다.

## `<html lang="ko">`
`<html>`은 html 문서 전체를 감싸는 최솽위 요소이다. 

```
<html lang="ko">
    ...
</html>
```
여기서 lang="ko"는 속성(attribute)이다. 

이 속성은 화면에 한국어를 표시하는 명령이 아니다. 문서의 기본 언어가 한국어라는 것을 브라우저 , 검색엔진, 스크린 리더 등에 알려주는 것이다. 

태그 : 요소의 종류, 속성 : 요소에 추가적인 정보 제공

## `<head>`- 화면에 보이는 콘텐츠가 아닌 문서 설정

```
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>정충원 | The Voyage Begins</title>
    <meta name="description" content="정충원의 역사와 AI, 데이터 탐험 기록">

    <link rel="stylesheet" href="css/style.css">

    <script src="js/main.js" defer></script>
</head>
```

`<head>`는 문서에 관한 설정이나 리소스 정보를 담는 공간이다, 일반적으로 여기 안에 작성한 내용은 웹페이지 본문에 직접 표시 되지 않는다. 

### `<meta charset="UTF-8">`

```
<meta charset="UTF-8">
```

이것은 문서에 문자 인코딩을 지정하는 코드이다. 문자 인코딩은 컴퓨터가 문자를 바이트로 저장하고 다시 문자로 해석하는 방식을 말한다. 

이 설정이 올바르지 않으면 한국어가 깨져 보이는 문제가 생길 수 있다. 

- meta : 문서에 관한 메타데이터를 제공하는 태그
- charset: 문자 인코딩을 지정하는 속성 
- UTF-8 : 한국어 , 영어 등 다양한 문자를 표현할 수 있는 문자 인코딩

이태그는 닫는 태그 없시 사용되는 형태이다. 

### `<meta name= "viewport">`

```
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

이것은 반응형 웹페이지를 만들때 매우 중요한 설정이다. 먼저 viewport는 브라우저에서 웹페이직가 표시되는 화면의 영역을 의미한다. 

- name="viewprot" : 뷰포트 관련 설정이라는 의미
- width=device-width : 뷰포트 너비를 기기 화면에 맞춤
- initial-scale=1.0 : 처음 표시할 때 확대 , 축소 비율을 1로 설정

예를 들면 모바일 기기의 화면 너비가 390css픽셀이라면 페이지가 그 너비에 맞는 기준으로 표시되게 끔 하는 것이다. 

다만 이 코드만 작성한다고 웹페이지가 자동으로 반응형이 되는것은 아니다. 

화면 크기에 맞춰 메뉴를 바꾸거나 카드의 열 수를 조정하는 작업은 css에서 해야한다. 

```
/* 예시 */
.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
```
위와 같은 css가 실제 반응형 레이아웃을 구성하는데 사용된다. 

### `<title>`

```
<title>정충원 | The Voyage Begins</title>
```

웹페이지의 제목이다. 브라우저 탭에 표시되는 제목이고 검색 결과 등에서도 사용될 수 있다. 

여기서 주의할점은 `<title>`에 작성한 내용이 웹페이지 본문에 자동으로 표시되는것은 아니라는 것이다. 

본문에 큰제목으로 표시하고 싶다면 `<h1>`을 사용해야한다. 이것은 뒤에서 나올 섹션에서 살펴볼것이다. 

### `<meta name="description">`

```
<meta name="description" content="정충원의 역사와 AI, 데이터 탐험 기록">
```

이것은 웹페이지의 내용을 간략하게 설명하는 메타데이터이다. 

- name = "description" : 페이지 설명이라는 의미이다. 
- content = "..." :  실제 설명 내용

검색엔진이 페이지 내용을 이해하는데 참고할 수 있다. 다만 검색결과에 이 문구가 항상 그대로 표시되는 것은 아니다. 

### `<link rel ="stylesheet">` 

```
<link rel="stylesheet" href="css/style.css">
```

이 부분은 html과  css를 연결하는 코드이다. 

html은 웹페이지의 구조를 담당하고 css는 색상, 글꼴, 간격, 배치, 반응형 디자인을 담당한다.

각 부분을 살펴보면

- link : 외부 리소스와 현재 문서를 연결
- rel="stylesheet" : 연결하는 리소스가 스타일 시트임을 지정
- href ="css/style.css" : 불러올 css 파일의 경로

여기서 href는 파일의 위치를 가리키는 주소이다. 

다음과 같은 구조라면 

my-portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── images/
    └── profile.jpg


index.html 에서 css/style.css라고 적으면 html 파일이 있는 폴더를 기준으로 css폴더 안의 style.css를 찾는 다는 뜻이다. 

만약 파일 이름을 styles.css로 만들어 놓고 html에서는 style.css라고 쓴다면 css가 정상적으로 연결되지 않을것이다. 

html에 적힌 경로와 실제 파일 , 폴더 이름이 일치해야한다. 

### `<script src="js/main.js" defer></script>` 

```
<script src="js/main.js" defer></script>
```

이것은 자바스크립트 파일을 html 문서에 연결하는 코드이다. 

- script : javascript 등의 스크립트를 포함하거나 연결하는 태그
- src :  외부 javascript 파일의 경로 
- defer : html 문서에 파싱을 막지 않고 스크립트를 실행하도록 예약하는 속성

defer 를 조금 더 자세히 살펴보자 

브라우저는 html 파일을 위에서부터 읽으면서 문서 구조를 만들어간다. 이과정을 파싱이라고 표현한다. 

그런데 외부 javascript파일을 일반적인 방식으로 불러오면 , 브라우저가 html 파싱을 일시적으로 멈추고 스크립트를 다운로드하고 실행할 수있다.

defer를 붙이면 html을 파싱하는 동안 javascript 파일도 다운로드하고 html 파싱이 끝난다음에 스크립트를 실행한다. 

이게 중요한 이유가 있다. 

만일 javascript에서 당므과 같은 코드를 작성한다고 생각해보자 

```
const menu = document.querySelector(".menu-toggle");

```

이 코드는 html 안에서 .menu-toggle이라는 요소를 찾아오는 코드다 

그런데 브라우저가 아직 해당 html 요소를 읽지 않았다면, 요소를 찾지 못할 수 있다. 

defer를 사용하면 html 문서의 파싱이 끝난 후에 스크립트가 실행되므로 이런 문제를 예방하기가 쉬워진다. 

정리하자면 defer는 javascript를 html 파싱이 끝난뒤 실행하도록 예약하는 속성이다. DOM 요소를 조작하는 javascript에 잘 맞는다. 

## `<body>와 <header>` - 웹 페이지의 실제화면 

```
<body>

    <header class="site-header">
        ...
    </header>

    <main>
        ...
    </main>

    <footer class="site-footer">
        ...
    </footer>

</body>
```

`<body>`는 윂페이지에 표시되는 주요 콘텐츠를 담는 영역이다. 

나의 페이지에서는 로고, 메뉴, 소개, 기술 스택, 프로젝트, 연락처 등이 여기 속한다. 

### `<header class="site-header">`

```
<header class="site-header">

```

header는 페이지나 특정 콘텐츠의 머리말을 나타내는 시맨틱 태그이다. 

시맨틱이란 "의미를 가진" 이라는 뜻이다. 

예를 들어 
- header : 머리말
- nav : 탐색 링크 영역
- main : 문서의 주요 콘텐츠
- footer : 꼬리말

이런 태그르 사용하면 단순히 모든것을 div로 감싸는 것보다 문서의 구조와 의미를 명확하게 표현할 수 있다. 

그렇다면 class="site-header"란 무엇일까

class는 html 요소에 이름표를 붙이는 속성이다. css나 javascript에서 해당 요소를 선택할 때 활용할 수 있다. 

예를 들어 css에서 

```
.site-header {
    background-color: #f5efdf;
}
```

이렇게 작성하면 site-header라는 클래스를 가진 요소에 스타일을 적용할 수 있다. 

여기서 중요한점 

header라는 태그를 사용했다고 해서 자동으로 배경색이 생기거나 화면 상단에 고정된느 것이 아니다 그것은 css를 적용해 시각적 효과를 나타내야하는 것이다. 

## `<nav>` 로고와 메뉴를 담는 영역

다음은 내 코드의 일부분이다. 

```
<nav class="navigation" aria-label="주요 메뉴">

    <a href="#hero" class="logo">
        CW. VOYAGE
    </a>

    <button
        class="menu-toggle"
        type="button"
        aria-label="메뉴 열기"
        aria-expanded="false"
        aria-controls="nav-menu">
        ☰
    </button>

    <ul class="nav-menu" id="nav-menu">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#side-projects">Voyages</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>

    <button
        class="theme-toggle"
        type="button"
        aria-label="다크 모드 전환">
        ☾
    </button>

</nav>
```

이부분을 처음 보면 복잡해 보일 테지만 크게 네가지로 나누면 된다. 

로고, 메뉴 목록, 햄버거 버튼, 다크모드 버튼

### `<nav class ="navigation"> `

nav는 페이지 내에서 다른 영역으로 이동할 수 있는 주요 탐색 링크를 담는 시맨틱 태그이다. 

네비게이션 바 자체의 배경색, 높이, 정렬 방식 등은 css에서 정하게 된다. 

aria-label="주요 메뉴"는 보조 기술이 이 탐색 영역의 목적을 구분하는데 도움이 되는 접근성 정보이다. 특히 한페이지에 여러 nav 영역이 있을 때 구분하기 좋다. 

### 로고 ``<a href="#hero">`

```
<a href="#hero" class="logo">
    CW. VOYAGE
</a>
```

여기서 a는 anchor(앵커) 태그이다. 다른 페이지나 현재 페이지의 특정 위치로 이동하는 링크를 만들 때 사용한다. 

```
<a href="#hero">CW. VOYAGE</a>
```

href="#hero"는 html 문서 안에서 id="hero"인 요소로 이동하라는 뜻이다. 

html 아래 쪽에 다음과 같은 코드가 있는것이 보일것이다. 

```
<section id="hero" class="hero">
```

여기서 id="hero"와 href="#hero"가 연결되는 것이다. 

즉 로고를 클릭하면 hero 섹션으로 이동하게 된다. 

이게 바로 html에서 id와 앵커 링크를 연결하는 방식이다. 

### 햄버거 메뉴 버튼 

```
<button
    class="menu-toggle"
    type="button"
    aria-label="메뉴 열기"
    aria-expanded="false"
    aria-controls="nav-menu">
    ☰
</button>
```

여기서 중요한 것은 button 과 a의 차이다 

- a : 다른 페이지나 위치로 이동 
- button : 특정 동작을 수행 

햄버거 버튼을 다른곳으로 이동하는게 아니라 메뉴를 열고 닫는 동작을 실행하므로 button을 사용하는게 적절해 

각 속성을 보자 
- class ="menu-toggle" : css와 javascript에서 이 버튼을 선택하기 위한 이름 
- tpye="button" : 폼 제출 버튼이 아니라 일반 버튼임을 지정 
- aria-label="메뉴 열기" : 버튼의 기능을 보조기술에 설명 
- aria-expanded="false" : 현재 메뉴가 닫혀 있다는 상태를 나타냄
- aria- controls="nav-menu" : 이 버튼을 제어하는 요소가 nav-menu라는 것을 나타냄

여기서 aria-expanded="false"는 현재 html에 적힌 초기상태이다 나중에 javascript로 메뉴를 열면 true로 변경해줘야한다. 

aria-controls="nav-menu" 가 가리키는 대상은 다음 코드이다. 

```
<ul class="nav-menu" id="nav-menu">
```

### `<ul>,<li>,<a>` 메뉴 목록

```
<ul class="nav-menu" id="nav-menu">
    <li><a href="#about">About</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#side-projects">Voyages</a></li>
    <li><a href="#contact">Contact</a></li>
</ul>
```

이것은 html에서 목록을 만드는 전형적인 구조이다. 

- ul : 순서가 없는 목록 (unordered list)
- li : 목록의 항목 (list item)
- a : 해당 항목을 클릭했을 때 이동할 링크 

"매뉴 링크들은 어떻게 nav안에 들어가는가?"

바로 html 태그에 중첩 구조 때문이다. 

`<nav>`를 열고 그 안에 `<Ul>`을 작성하고 그안에 각각  `<li>`와 `<a>`를 넣었기 때문에 메뉴가 nav의 지식 요소로 구성되는 것이다.

다만 html에서 이렇게 작성되었다고 해서 메뉴가 자동으로 가로로 정렬되는 것은 아니다. 

기본적으로 목록은 세로로 배치되는 경우가 많고 브라우저 기본 여백과 목록 표시도 적용된다. 차후에 css에서 flexbox를 활용해 다음과 같이 배치할 수 있다. 

```
.navigation {
    display: flex;
    align-items: center;
}

.nav-menu {
    display: flex;
    gap: 24px;
    list-style: none;
}
```

이 css는 메뉴를 가로로 배치하고 항목 사이의 간격을 만드는 예시이다. 실제 나의 디자인에 맞춰 간격이나 정렬은 조정하면 된다. 

### 다크모드 버튼 

```
<button
    class="theme-toggle"
    type="button"
    aria-label="다크 모드 전환">
    ☾
</button>
```
이 버튼은 클릭했을 때 다크모드를 켜거나 끄는 기능을 담당할 것이다. 

현재는 html에 버튼의 모양과 접근성 정보만 존재한다. 실제로 테마가 바뀌는 기능은 javascript에서 구현해야한다. 

css에서는 예를 들어 data-theme="dark" 속성을 이용해 어두운 색상 테마를 적용할 수 있고 javascript에서 그속성을 바꿔주는 방식으로 구할 수 있다 .

## `<main>`과 hero섹션 - 방문자가 처음 보는 부분

```
<main>

    <section id="hero" class="hero">

        <p class="hero-subtitle">THE VOYAGE BEGINS</p>

        <h1>안녕하세요.<br>정충원입니다.</h1>

        <p>History × AI × Data</p>

        <a href="#projects" class="btn">
            나의 탐험 기록 보기
        </a>

        <a href="#about" class="scroll-link">
            SCROLL TO EXPLORE ↓
        </a>

    </section>

</main>

```

### `<main>`

main은 웹 페이지의 핵심 콘텐츠를 담는 시맨틱 태그이다. 

내 페이지에서 hero, about, skills, projects, contact등이 주요 콘텐츠니까 이들을 main안에 넣은것이다. 

일반적으로 페이지의 주요 콘텐츠를 나타내는 main은 한문서에서 하나를 사용하는게 기본적인 작성방식이다. 

### `<section id="hero" class="hero">`

```
<section id="hero" class="hero">
```

section은 하나의 주제나 목적을 가진 콘텐츠 영역을 나타내는 태그이다. 

내 페이지에서는 hero, about, skills, projects 등이 각각 독립적인 주제를 가진 영역이므로 section으로 나눈 것이다. 

여기서는 id와 class가 함께 사용되었다는 점을 살펴보자 

- id="hero" : 앵커 링크가 이동할 대상
- class= "hero" : css에서 hero영역의 디자인을 적용할 때 사용

예를 들어 

```
.hero {
    min-height: 100vh;
}
```

이렇게 작성하면 hero 영역의 최소 높이를 화면 높이(뷰포트 높이) 기준으로 설정 할 수 있다. 

id는 문서 안에서 해당 요소를 식별하는 고유한 이름으로 쓰고 class는 여러 요소에 반복해서 적용할 수 있는 스타일이나 분류 이름으로 사용하는게 최적이다. 

### `<p>`문단

```
<p class="hero-subtitle">THE VOYAGE BEGINS</p>
```

p는 paragraph, 즉 문단을 나타내는 태그이다. 

내 코드에서는 hero섹션의 작은 영문 문구를 표시하고 있다. 

또한 hero안에 `<p>`를 여러개 작성해도 전혀 문제가 되지 않는다. 

```
<section id="hero" class="hero">

    <p class="hero-subtitle">THE VOYAGE BEGINS</p>

    <h1>안녕하세요.<br>정충원입니다.</h1>

    <p>History × AI × Data</p>

    <p>역사와 기술을 연결하는 새로운 항해를 시작합니다.</p>

</section>

```

이렇게 문단을 추가하면 된다. 

각 문단은 서로 다른 내용을 담을수 잇고 css에서 .hero-subtitle처럼 클래스를 지정하면 각각다른 디자인을 적용할 수도 있다. 

### `<h1>`과 `<br>`

```
<h1>안녕하세요.<br>정충원입니다.</h1>
```

h1은 페이지의 가장 중요한 제목을 나타내는 태그이다. 일반적으로 한 페이지의 대표 제목으로 사용하는게 적절하다. 

br은 줄바꿈을 나타내는 태그이다. 

따라서 위 코드는 다음처럼 표시된다. 

```
안녕하세요.
정충원입니다. 
```

다만 br은 문단을 나누는 태그가 아니라 같은 문단 안에서 줄을 바꾸는 태그라는 점을 알아두자

### `<a href="#projects" class="btn">`

```
<a href="#projects" class="btn">
    나의 탐험 기록 보기
</a>
```

이건 버튼처럼 디자인할 링크이다. 

여기서 실제 태그는 `<a>`이기 때문에 클릭하면 id="projects"인 영역으로 이동한다. 

class="btn"은 css에서 버튼처럼 보이게 디자인 하기 위한 클래스 이름일 뿐이다. 

클래스 이름을 btn이라고 지정했다고 html요소가 실제 버튼으로 바뀌는 것은 아니다. 실제로 동작을 실행하는 버튼이라면 `<button>`을 사용하고, 다른 위치로 이동하는 링크라면 `<a>`를 사용하는게 적절하다. 

### `<a href="#about" class="scroll-link">`

```
<a href="#about" class="scroll-link">
    SCROLL TO EXPLORE ↓
</a>
```

이것도 같은 원리이다. 

클릭하면 id="about"인 섹션으로 이동한다. 

결국 나의 hero섹션에는 두가지 링크가 있는 것이다. 

`#project` : 프로젝트 영역으로 이동

`#about` : 소개 영역으로 이동 


이처럼 한 페이지 안에서 특정 세션으로 이동하는 구조를 만들수 있다.

# 질문들 

1. defer 옵션은 거의 필수 와도 같은가?

- 결론부터 말하자면 외부 javascript를 `<head>`에서 불러오고 html 요소를 조작한다면 기본적으로 defer를 사용하는 것이 매우 좋은 선택이고 습관이다. 다만 모든 상황에서 필수는 아니다 

예를 들어 다음 상황에서는 defer를 사용하지 않아도 된다. 
- 스크립트가 dom요소를 조작하지 않는경우
- javascript를 `</body>` 바로 앞에 배치하는 경우 
- 실행 시점이 특별히 중요한 스크립트인 경우 등 

참고로 defer는 외부 스크립트에 사용하는 속성이다. 지금 미션에 경우처럼 외부 js파일을 `<head>`에서 연결하고 잇으니 지금처럼 사용하는것이 적절하다. 

2. id와 class의 차이는 무엇인가?

- 둘다 html 요소에 이름을 붙이는 속성이다. 하지만 사용 목적이 다르다. 

```
<h1 id="main-title">안녕하세요.</h1>
```

id는 특정 요소를 식별하는 고유한 이름이다. 

id ="main-title"은 이 요소를 식별하는 이름이다. 

한 문서에서 같은 id를 여로 요소에 중복해서 사용해선 안된다. 

```
<p class="description">첫 번째 설명</p>
<p class="description">두 번째 설명</p>
<p class="description">세 번째 설명</p>
```

class는 여러 요소를 묶는 분류이름 

여로 요소가 같은 클래스를 가질 수 있다. 

css에서 .description을 지정하면 이 세문단에 동일한 스타일을 적용할 수 있다. 

## 비교하기 

- id="projects" → href="#projects"로 이동할 목적지

- class="section" → 다른 섹션과 공통 디자인을 적용할 때 사용

즉 특정 아이디는 특정 요소를 가리키는 이름, 클래스는 스타일이나 기능을 공유하는 그룹 이름이라고 이해하면 된다. 

물론 자바스크립트에서도 id와 class를 모두 선택할 수 있다. 서로의 사용처가 완전히 제한되는것은 아니다. 

3. 햄버거 버튼을 html에 정의하고 모바일에서만 보이게 할 수 있을까?

- 당연히 가능하다 그리고 html에는 버튼을 항상 작성해두고 css로 모바일에서만 보이도록 처리하는 것이 일반적인 방식이다. 

html은 요소의 구조를 만들고 css는 화면 크기에 따라 보이거나 숨기는 것을 담당한다. 
지금 현재 html은 그대로 두면 된다. 

```
<button class="menu-toggle" type="button">
    ☰
</button>
```
그 다음 css에서 화면 크기에 따라 표시 여부를 결정하는 것이다. 

```
/* 기본: 데스크톱에서는 햄버거 버튼 숨김 */
.menu-toggle {
    display: none;
}

/* 화면 너비가 768px 이하인 경우 */
@media (max-width: 768px) {
    .menu-toggle {
        display: block;
    }
}
```

이렇게 하면 화면 너비가 768px보다 클때는 버튼이 보이지 않고 화면이 768px이하일 때는 버튼이 표시된다. 

여기서 중요한 것은 @media이다. 

@mediasms 미디어 쿼리라고 부르는데 화면 너비나 기기 특성에 따라 css를 다르게 적용할 수 있도록 해준다. 

미션에서는 모바일 화면에 맞추어 네비게이션 메뉴를 숨기고 , 햄버거 버튼을 표시하는데 사용할수 있다. 또한 햄버거 버튼을 표시하는 것과 메뉴 목록을 열고 닫는 것은 서로 다른 작업니다. 

- css : 모바일에서 햄버거 버튼 표시
- javascript : 버튼을 클릭하면 메뉴 목록 열기 / 닫기

이렇게 역할이 나뉜다. 

4. href="#hero"에서 #은 어떤 의미를 가지는가?

- `#`은 url에서 현재 문서 안의 특정 위치(fragment)를 가리키는 기호이다. 

내 코드에서 

```
<a href="#hero">CW. VOYAGE</a>
```

이 링크를 클릭하면 브라우저는 현재 문서에서 id="hero"인 요소를 찾아 이동한다. 

```
<section id="hero">
    ...
</section>
```

`#`뒤에는 이동할 요소의 id를 적는다. 

주의할 점은 `#`뒤에 적는 값은 class가 아니라 아이디라는 것이다. 

```
<a href="#projects">프로젝트</a>

<section id="projects">
    ...
</section>
```

5. aria는 어떤 의미를 가진것인가?

- aria는 Accessible Rich Internet Applications의 약자이다.

한국어로는 접근성 잇는 리치 인터넷 애플리ㅔ이션 정도로 이해하면 된다. 

조금 쉽게 설명하면, 웹페이지를 스크린 리더 같은 보조 기술로 이용하는 사람들에게 html 요소의 역할, 상태, 관계 등을 더 잘 전달하기 위한 속성들이다. 

내 코드에서 사용한 예시를 보자 

```
<button
    class="menu-toggle"
    type="button"
    aria-label="메뉴 열기"
    aria-expanded="false"
    aria-controls="nav-menu">
    ☰
</button>
```

aria-label
- aria-label="메뉴 열기"
- 버튼에 표시된 햄버거라는 기호만으로 버튼의 목적을 명확히 알기 어려울 수 있다.
- aria-lable은 보조 기술에 이 버튼의 목적을 "메뉴 열기"라고 알려주는 역할을 한다. 

aria-expanded
- aria-expanded="false"
- 메뉴가 현재 열려 있는지 닫혀 잇는지를 나타내는 상태 정보이다. 
    - false : 닫혀있음
    - true: : 열려있음
- 메뉴를 여닫는 javascript를 만들 때 실제 상태에 맞게 이 값을 변경해 줘야한다. 

aria-controls
- aria-controls="nav-menu"
- 이 버튼이 어떤 요소를 제어하는지 알려준다. 

```
<ul id="nav-menu">
    ...
</ul>
```
- 즉 이 버튼은 nav-menu라는 메뉴를 제어한다는 관계를 나타내는 것이다. 

중요한점 : aria 속성은 그 자체로 메뉴를 열거나 닫지 않는다 기능은 자바스크립트가 구현하고 aria는 보조 기술에 상태와 의미를 전달하는 역할만 한다.

6. li { display: inline; }를 배웠는데, 왜 여기서는 Flex를 사용하는가?

먼저 내가 배운 코드를 살펴보자 

```
<style>
    li {
        display: inline;
    }
</style>
```

display : inline은 해당 요소를 인라인 형식으로 배치하도록 한다. 

예를 들어 

```
<ul>
    <li>About</li>
    <li>Skills</li>
    <li>Projects</li>
</ul>
```
는 기본적으로 li는 목록 항목이므로 세로로 표시되지만, display: inline을 적용하면 가로로 이어져서 표시된다. 

그렇다면 flexbox란 뭘까 

flexbox는 요소들을 한방향으로 배치하고 정렬하기 위한 css레이아웃 방식이다. 

```
.nav-menu {
    display: flex;
    gap: 24px;
    list-style: none;
}
```

여기서 display : flex를 지정하면 .nav-menu가 flex 컨테이너가 되고, 그 안에 li 요소들이 flex 아이템으로 배치된다. 

네비게이션 메뉴를 가로로 나열하는 것만 보면 inline도 가능하다 그런데 flexbox는 요소 사이의 간격, 수직 정렬, 공간 분배 등을 더 편리하게 제어할 수 있다. 

또한 여기서 중요한 차이가 있다 .

```
.nav-menu {
    display: flex;
}
```

이 코드는 li가 아니라 부모인 ul에 display: flex를 지정한 것이다. 
flexbox는 컨테이너의 직접적인 자식 요소들을 flex 아이템으로 배치한다. 

따라서 ul에 flex를 적용하면 그 안에 li들이 가로로 배치 되는 것이다. 

네비게이션 바 전체도 flex로 구성할 수 있다. 

```
.navigation {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
```

이렇게 하면 로고, 메뉴, 다크모드 버튼 등을 한줄 로 배치하고 정렬하기 쉬워진다. 

결론은 inline도 가로 배치에 쓸 수 있지만 네비게이션처럼 여러 요소의 정렬과 간격을 유연하게 제어해야하는 레이아웃에서는 flexbox가 더 편리하다. 

7. hero 안에 `<p>`를 여러개 작성하면 css는 어떻게 적용되는가?

- 내 hero를 먼저 다시 살펴보자 

```
<section id="hero" class="hero">

    <p class="hero-subtitle">THE VOYAGE BEGINS</p>

    <h1>안녕하세요.<br>정충원입니다.</h1>

    <p>History × AI × Data</p>

    <p>역사와 기술을 연결하는 새로운 항해를 시작합니다.</p>

</section>
```
- 여기에는 p가 3개 있다 css는 선택자를 통해 어떤 요소에 스타일을 적용할지 결정한다. 

```
.hero p {
    color: #5b4636;
    line-height: 1.8;
}
```
- 여기서 .hero p는 class가 hero인 요소 안에 들어 잇는 모든 p 요소를 선택하라는 것이다. 
- 따라서 hero 안에 있는 세 개의 p 모두에 글자색과 줄 간격이 적용된다. 
- 다른 섹션에 p에는 이 규칙이 적용되지 않는다. 

- 그렇다면 특정 p에만 스타일을 적용하려면 어떻게 해야할까?
- 첫번째 문단에 hero-subtitle이라는 클래스가 있다 

```
.hero p {
    color: #5b4636;
    line-height: 1.8;
}
```

그러면 css에서 이렇게 지정할 수 있다. 

```
.hero p {
    color: #5b4636;
    line-height: 1.8;
}
```

- 반면에 hero에서 첫번째 , 두번째 , 세번째 p를 구분할 수 도 있다. 
    - 클래스를 각각 지정할 수도 있지만 css선택자로 순서를 구분하는 방법도 있다. 

```
.hero p:first-of-type {
    color: #a17b48;
}

.hero p:last-of-type {
    font-size: 18px;
}
```

- 그러나 실제 프로젝트에서는 이처럼 순서에 의존하는 선택자보다 의미가 분명한 클래스를 직접 지정하는 방식이 유지보수에 더 편리할 때가 많다. 

```
<section class="hero">
    <p class="hero-subtitle">THE VOYAGE BEGINS</p>

    <h1>안녕하세요.<br>정충원입니다.</h1>

    <p>History × AI × Data</p>

    <p>역사와 기술을 연결하는 새로운 항해를 시작합니다.</p>
</section>

.hero p {
    color: #5b4636;
    line-height: 1.8;
}

.hero .hero-subtitle {
    color: #a17b48;
    font-size: 14px;
    letter-spacing: 4px;
}
```

- 여기서 .hero p가 공통 스타일을 담당하고 .hero .hero-subtitle이 첫번째 문단에 추가 스타일을 적용하는것이다. 

- 두 규칙이 서로 다른 속성을 지정하면 둘다 적용되고, 같은 속성을 지정하면 css의 우선 순위와 선언순서 등에 따라 최종 스타일이 결정된다. 

- 핵심은 p를 몇개 작성햇느냐가 아니라 css섴택자가 어떠한 요소를 선택하느냐 이다. 

8. javascript를 바디에 끝부분에 위치하게 하는법

```
<body>
    <header>
        ...
    </header>

    <main>
        ...
    </main>

    <script src="js/main.js"></script>
</body>
```

- 다음과 같이 javascript를 head가 아니라 body에 배치하는 방식이 있다. 

- 왜 위치가 중요할까 



