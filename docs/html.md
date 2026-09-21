
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

