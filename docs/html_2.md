# html 복습노트 

the voyage begins- html 구조 이해하기 

# html 기초 복습 - 웹페이지의 뼈대를 이해하자 

html은 웹페이지의 내용을 구조화하는 언어이다. css가 웹페이지의 외형을 꾸미고 javascript가 동작을 추가한다면 html은 웹페이지에 어떤내용과 요소가 존재하는지로 정의한다. 

## html 문서를 이해하는 첫번째 관점

html을 공부할 때 가장 먼저 기억해야할 것은 html은 단순히 글자를 화면에 출력하는 문서가 아니라 콘첸츠의 의미와 구조를 부여하는 문서라는 점이다. 

예를 들어 다음의 두 코드를 비교해 보자 

```
<div>나의 이야기</div>
```
```
<section>
    <h2>나의 이야기</h2>
    <p>나는 역사와 AI, 데이터에 관심이 있습니다.</p>
</section>
```

첫번째 코드는 단순히 콘텐츠를 하나의 영역으로 묶는다. 

두번째 코드는 이 영역이 하나의 주제별 섹션이고 그 안에 제목과 본문이 있다는 의미를 전달한다. 

브라우저는 두 코드 모두 화면에 표시할 수 있지만 두번째 코드는 문서의 구조아 의미를 더 명확하게 표현한다. 

이것이 바로 시맨틱 마크업(semantic markup)의 기본 개념이다. 

## html 문서의 기본 구조 

내가 작성한 코드의 가장 바깥 구조 보터 살펴보자 

```
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0">

    <title>정충원 | The Voyage Begins</title>

    <link rel="stylesheet" href="css/style.css">
    <script src="js/main.js" defer></script>
</head>

<body>
    <!-- 실제 웹페이지 콘텐츠 -->
</body>
</html>
```

html 문서는 크게 head와 body로 구분한다. 

head : 문서의 설정과 정보 - 문자 인코딩, 제목, css연결, javascript 연결 등
body : 웹페이지의 실제 콘텐츠 - 헤더 , 메뉴, 본문 , 프로젝트 카드, 폼, 푸터 등

###  `<!DOCTYPE html>`

```
<!DOCTYPE html>
```

이 문서는 html5 표준에 따라 작성되었다는 것을 브라우저에 알려주는 선언이다. 
html 태그처럼 보이지만 실제로는 html 요소가 아니라 문서 형식 선언이다. 

### `<html lang="ko>`

```
<html lang="ko">
```

html 문서 전체를 감싸는 최상위 요소이다. 
- html : html 문서의 루트 요소
- lang="ko" : 문서의 기본 언어가 한국어임을 명시

lang은 요소에 추가 정볼르 제공하는 속성(attribute)라는 것을 기억하자

###  `<head>`안의 주요 요소

- meta charset="UTF-8" : 한글 등 문자를 올바르게 표시하기 위한 문자 인코딩 
- meta name ="viewport" : 모바일 화면의 너비와 배율을 기기 화면에 맞춤
- title : 브라우저 탭 등에 표시되는 문서 제목
- meta name="description" : 페이지 내용을 요약하는 설명 
- link rel ="stylesheet" 외부 css 파일 연결 
- script src="..." defer 외부 javascript 파일 연결 및 실행 시점 지정 


여기서 viewport는 내가 반응형 웹사이트를 만드는데 중요한 설정이다. 

```
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

이 설정이 있어야 모바일 브라우저가 페이지를 기기 너비에 맞춰 표시하도록 제대로 동작 할 수 있기 때문이다. 

다음 두 줄도 기억해 두자

```
<link rel="stylesheet" href="css/style.css">
<script src="js/main.js" defer></script>
```

이것은 html 에 css와 javascript 코드를 전부 작성하고 별도 파일로 분리해서 연결한 것이다. 

defer 는 html 문서의 파싱이 끝난후 javascript를 실행하도록 하고 외부스크립트를 파일을 가져오는 동안 html 파싱을 막지 않는다는 점이 중요하다.

## html 요소 , 태그 , 속성의 차이 

초보자라면 이 세가지를 구분해 놓는것이 좋다 .

```
<a href="#projects" class="btn">프로젝트 보기</a>
```

여기서 a는 태그 이름 , href와 class는 속성,  프로젝트 보기는 콘텐츠이다. 

시작 태그와 종료 테그 그 사이의 콘텐츠를 포함한 전체를 요소라고 부른다. 

### 자주 등장하는 속성들 

- id : 문서 안에서 요소를 식별하는 고유한 이름
- class : css 스타일이나 javascript 선택에 활용하는 분류 이름
- href : 링크가 이동할 목적지
- src : 이미지나 스크립트 등의 리소스 경로
- alt : 이미지의 대체 텍스트 
- type : 버튼이나 입력 요소의 종류
- aria-label : 보조 기술에 요소의 이름이나 목적을 전달 
- hidden : 요소를 화면에서 숨기는 html 전역 속성

특히 id와 class는 css와 javascript를 배우게 되면 계속 등장한다. 

## 시맨틱 태그로 웹페이지  구조 이해하기 

아재 내 index.html 에서 가장 중요한 부분이다. 

### 주요 시맨틱 태그 

- header : 페이지 또는 특정 영역의 머리말
- nav : 주요 이동 링크를 모아놓은 영역
- main : 페이지의 핵심 콘텐츠
- section : 하나의 주제나 목적을 가진 콘텐츠 영역
- article : 독립적으로 구분할 수 있는 콘텐츠
- footer : 페이지 또는 특정 영역의 꼬리말 


여기서 주의하 점은 header가 무조건 페이지 최상단에만 쓰이거나 footer가 무조건 문서 맨 마지막에만 쓰이는 태그는 아니라는 점이다. 각 콘텐츠의 영역 안에서 도 사용할 수 있다. 

### div와 시맨틱 태그는 어떻게 다를까 

div는 일반적으로 의미를 특별히 부여하지 않는 컨테이너이다. 

```
<div class="about-content">
    ...
</div>
```

내 코드의 about- content처럼 css 레이아웃이나 콘텐츠를 묶는 용도로 사용하면 된다. 

반면 section, article, nav등은 콘텐츠의 의미를 설명한다.

모든 div를 시맨틱 태그로 바꿔야하는 것은 아니다. 의미가 있는 영역에는 적절한 시맨틱 태그를 사용하고 단순히 묶는 영역에는 div를 사용하면 된다. 

## 네비게이션과 앵커 링크 

내 코드에서 이부분을 보자 

```
<ul class="nav-menu" id="nav-menu">
    <li><a href="#about">About</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#side-projects">Voyages</a></li>
    <li><a href="#contact">Contact</a></li>
</ul>
```

여기에는 세가지 주요 요소가 등장한다. 

- ul : 순서가 중요핮 않은 목록
- li : 목록의 각 항목
- a :  다른 페이지나 문서 내 위치로 이동하는 링크 

예를 들어 href="#about"이라면 같은 html 문서 안에서 id="about"인 요소로 이동한다는 뜻이다. 

```
<a href="#about">About</a>

<section id="about">
    <h2>I. ABOUT</h2>
</section>
```

여기서 href의 #about과 id="about"이 연결되는 것이다. 

css의 #about 선택지와도 연결되는 개념이지만 html에서 href=#"about" 은 문서 내 이동 목적지를 지정하는 것이다. 

## 제목 태그의 계층 구조 

내 코드에는 h1, h2, h3, h4가 등장한다. 

```
<section id="projects" class="projects section">
    <h2>III. PROJECTS</h2>

    <h3>MY PORTFOLIO</h3>

    <article class="project-card">
        <h4>Project 01</h4>
        <p>첫 번째 프로젝트 소개</p>
    </article>
</section>
```

각 제목 태그에는 콘텐츠의 제목 수준을 나타낸다. 
- h1 : 페이지의 가장 중요한 제목
- h2 : 주요 섹션의 제목
- h3 : 섹션 안의 하위 주제
- h4 : 그보다 더 세부적인 제목

여기서 핵심은 제목 태그를 단순히 글씨 크기를 조절하는 용도로 사용하지 않는다는 점이다. 제목의 계층과 의미에 맞춰 사용하는게 좋다. 

글씨의 크기나 모양은 나중에 css를 통해 자유롭게 조절이 가능하다. 

## 이미지와 alt속성

이것은 내 about섹션에 잇는 코드이다. 

```
<img
    src="images/profile.jpg"
    alt="정충원의 프로필 이미지">
```

- img : 이미지를 표시하는 요소
- src : 이미지 파일의 경로
- alt : 이미지가 표시되지 않거나 보조기술을 사용할 때 이미지의 의미를 전달하는 대체 텍스트

src="images/profile.jpg"현재 프로젝트 폴더 기준으로 images 폴더 안에 잇는 profile.jpg 파일을 가리킨다. 

alt는 단순히 모든 이미지에 똑같이 붙이는 것이 아니라 이미지의 목적과 맥락을 설명하도록 작성하는 게 좋다. 

## 폼(form) 과 label연결 

내 contact섹션은 사용자가 정보를 입력하는 폼이다. 

```
<div class="form-group">
    <label for="email">Email</label>

    <input
        type="email"
        id="email"
        name="email"
        required>

    <small class="error-message" id="email-error"></small>
</div>
```

여기서 중요한 것은 label과 input의 연결이다. 

```
<label for="email">Email</label>
<input type="email" id="email" name="email" required>
```

for="email" 과 id = "email"이 일치하기 때문에 이 라벨이 해당 입력 필드의 이름이라는 것을 명확하게 연결한다. 

- for : 라벨이 연결된 입력 요소의 id
- id : 해당 입력 요소를 식별하는 값
- name : 폼 데이터를 전송할 때 사용하는 필드 이름 
- type="email" : 이메일 입력에 맞는 입력 필드
- required : 값이 필수 임을 지정 

내 코드에서 사용한 novalidate는 브라우저의 기본 폼 유효성 검사 ui를 비활성화 한다. 나중에 javascript로 직접 오류 메시지를 제어하기 위해 넣은것이다. 

또한 small은 오류메시지를 표시할 공간이고 id="small-error"는 javascript에서 해당 요소 를 선택하는데 사용할 수있다. 

## javascript를 html 에서 사용하기 위한 준비

현재 html 에는 javascript가 동작할 때 사용할 요소들이 이미 마련되어 있다. 

```
<button class="menu-toggle"
        aria-expanded="false"
        aria-controls="nav-menu">
    ☰
</button>

<ul class="nav-menu" id="nav-menu">
    ...
</ul>
```

이 버튼은 메뉴를 열고 닫기 위한 버튼이다. 

- aria-expanded="false" : 메뉴가 닫힌 상태임을 보조기술에 전달하는 상태 정보
- aria-controls="nav-menu" : 버튼이 제어하는 메뉴 요소를 가리킴

다크모드 버튼, 재시도 버튼, 스크롤 탑 버튼 등도 html 에 존재하낟. 

html 은 버튼과 메뉴같은 요소를 준비하고 javascript는 사용자가 버튼을 클릭했을때 어떤일이 일어날지 정의하는 역할을 한다. 

이렇게 html 은 javascript가 조작할 대상의 구조를 제공한다. 

# 질문들 

1. `<form>`태그 완전 정복

먼저 form 은 무슨 역할을 할까 

`<form>`은 사용자가 입력한 정보를 하나의 묶음으로 관리하고 제출할수 있게 만드는 html 요소이다. 

예를 들어 나의 포트폴리오에서는 방문자가 다음의 정보를 입력한다고 해보자 
- 이름
- 이메일 
- 메시지 

이 입력 요소들을 하나의 폼으로 묶으면 사용자가 입력한 값을 검증하고 제출하는 흐름을 만들수 있다. 

내가 작성한 form을 살펴보자 

먼저 바깥쪽 부터 본다면 

```
<form id="contact-form" novalidate>
    ...
    <button type="submit">Send Message</button>
    <p id="form-status" aria-live="polite"></p>
</form>
```

- `<form>` : 입력 요소들을 묶는 폼
- id="contact-form" : javascript에서 이 폼을 선택하기 위한 식별자 
- novalidate : 브라우저의 기본 폼 유효성 검사 ui를 비활성화
- type="submit" : 버튼 클릭시 폼 제출 이벤트 발생
- id="form-status" : 제출 결과 메시지를 표시할 공간 

여기서 기억해야 할점은 novalidate가 유효성 검사를 완전히 없애는 속성은 아니라는 것이다.
브라우저가 기본적으로 표시되는 검증 ui는 끄는 것이고 우리는 javascript로 직접 검증을 구현할 수 있다. 

다만 required , type="email" 같은 속성의 제약 조건 자체가 사라지는 것은 아니므로 javascript에서 checkValidity()등을 사용하면 여전히 검증에 활용할 수 있다.


input의 속성들 

내 코드에서 이매일 입력 부분을 다시 살펴보자 

```
<label for="email">Email</label>

<input
    type="email"
    id="email"
    name="email"
    required>
```

각 속성의 역할

type="email"

이메일 입력에 적합한 입력 요소를 만들고, 브라우저의 이메일 형식 검증 기능을 제공해.

id="email"

HTML 문서에서 이 요소를 식별해. label 연결이나 JavaScript 선택에 사용할 수 있어.

name="email"

폼 데이터를 전송할 때 이 입력값을 구분하는 이름이야. 서버로 전송한다면 email=입력값처럼 사용될 수 있어.

required

필수 입력 항목이라는 뜻이야. 브라우저 기본 검증이나 JavaScript 검증에서 활용할 수 있어.


id와 name은 같은게 아니다. 

이둘은 초보자가 특히 헷갈리기 쉬운데 

```
<input id="email" name="email">
```
- id 는 문서안에서 해당 요소를 찾고 다른 요소와 연결하기 위한 식별자
- name은 폼 데이터에서 해당 입력값을 식별하는 이름 

둘의 값이 같아도 되지만 역할은 서로 다르다 

form 에서 자주 쓰는 속성

- action : 폼데이터를 전송할 목적지 url
- methon : 데이터를 어떤 http방식으로 전송할지 지정 (get, post)
- enctype : 폼 데이터를 어떤 형식으로 인코딩 할지 지정 
- novalidate : 제출시 브라우저의 기본 유효성 검사 ui를 비활성화
- autocomplete : 브라우저의 자동완성 기능을 제어

예를 들어 서버에 폼을 제출하는 일반적인 html 형태는 이렇게 쓸 수 있다. 

```
<form action="/contact" method="post">
    <label for="name">Name</label>
    <input id="name" name="name" required>

    <button type="submit">Send</button>
</form>
```

여기서 action은 제출 목적지, method="post"는 요청 데이터를 http post 방식으로 보내겠다는 뜻이다. 

그런데 내 미션에서는 서버가 없어도 괜찮으므로 javascript의 submit 이벤트를 받아서 검증하고 성공 메시지를 표시하는 방식으로 요구사항을 구현할 수 있다. 


textarea는 왜 input이 아닐까?

내 메시지 입력 부분을 보자 

```
<label for="message">Message</label>

<textarea
    id="message"
    name="message"
    required></textarea>
```

input은 일반적으로 한줄 입력에 사용하고 textarea는 여러 줄의 긴 텍스트를 입력할 때 사용한다. 

문의 메시지는 여러 줄로 작성할 수 있어야하므로 textarea 가 적합하다. 

그리고 textarea의 초기 텍스트는 input처럼 value 속성으로 지정하지 않고 여는 태그와 닫는 테그 사이에 작성한다. 

```
<textarea id="message" name="message">기본 메시지</textarea>
```

form 에서 가장 중요한 이벤트 : submit 

이부분은 나중에 javascript를 작성할때 다시 만나게 된다. 

```
<form id="contact-form" novalidate>
    ...
    <button type="submit">Send Message</button>
</form>
```
폼 안에서 type="submit"인 버튼을 누르면 폼의 submit 이벤트가 발생한다. 

javascript에서는 다음과 같이 이벤트를 연결 할 수 있다. 

```
const contactForm = document.querySelector("#contact-form");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // 입력값 검증
    // 성공 또는 오류 메시지 표시
});
```

여기서 event.preventDefault()는 폼의 기본 제출 동작을 막아준다. 

이걸 사용하는 이유는 우리가 javascript로 입력값을 검증하고 별도의 페이지 이동 없이 결과 메시지를 보여주려는 것이기 때문이다. 

2. head의 meta와 기타 속성들 어떻게 기억할까 

사실은 이부분은 html의 모든 속성을 외우려고 할 필요가 없다. 

head 는 다음과 같다

: 웹페이지를 화면에 보여주기 전에 브라우저에게 이문서를 어떻게 해성하고 준비해야하는지 알려주는 공간

내가 작성한 head를 다시 보자

```
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0">

    <title>정충원 | The Voyage Begins</title>
    <meta name="description"
          content="정충원의 역사와 AI, 데이터 탐험 기록">

    <link rel="stylesheet" href="css/style.css">
    <script src="js/main.js" defer></script>
</head>
```

