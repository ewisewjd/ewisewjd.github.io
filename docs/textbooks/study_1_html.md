# 학습자료 1편 — HTML 완전 정복

> 대상: HTML을 처음 배우는 사람 · 목표: **HTML의 개념과 요소를 빠짐없이 이해하고, 스스로 설명할 수 있게 되기**
> 이 자료는 "미션을 통과하는 최소한"이 아니라 "웹 문서를 제대로 만들 수 있는 전체 지도"를 목표로 합니다.

## 0. 이 자료 읽는 법

### 0.1 각 장의 구성
- **핵심**: 이 장에서 꼭 가져갈 한 줄 요약
- **설명 / 예제**: 개념과 코드
- **흔한 실수**: 초보자가 실제로 자주 틀리는 부분
- **내 프로젝트에서 찾기**: 네 `index.html`의 어느 부분이 이 개념인지
- **확인 질문**: 스스로 답해보고 `정답 보기`를 펼쳐 확인

### 0.2 범위 선언 (솔직하게)
HTML 명세 전체(WHATWG HTML Living Standard)는 수천 쪽이라, 이 자료가 한 글자도 빼지 않고 다 담는다고 말하면 거짓입니다. 대신 이렇게 약속합니다.

1. **표준 HTML 요소는 전부 한 번씩 언급합니다.** 중요한 것은 자세히, 드문 것은 "이런 게 있다" 수준으로 표에 넣었습니다. (15장 요소 총정리)
2. **폐지된 요소도 이름을 적어둡니다.** 옛날 코드를 만나도 당황하지 않도록.
3. 더 깊이 필요하면 [MDN HTML 레퍼런스](https://developer.mozilla.org/ko/docs/Web/HTML)가 정답지입니다. 이 자료를 다 읽으면 MDN을 스스로 읽을 수 있게 됩니다.

### 0.3 전체 목차
| 장 | 주제 | 한 줄 요약 |
| --- | --- | --- |
| 1 | 웹과 HTML | 브라우저가 HTML을 어떻게 화면으로 만드는가 |
| 2 | HTML 문법 | 요소·태그·속성·중첩·공백·이스케이프·경로 |
| 3 | 문서 뼈대와 `<head>` | 화면에 안 보이는 설정들 |
| 4 | 텍스트 요소 | 제목·문단·강조·인용·코드 등 |
| 5 | 링크 | `<a>`와 페이지 이동의 모든 형태 |
| 6 | 목록 | `ul` `ol` `dl` |
| 7 | 이미지와 미디어 | `img` `picture` `video` `audio` `iframe` 등 |
| 8 | 표 | `table` 계열 |
| 9 | 폼 | 입력·전송·유효성 검사 |
| 10 | 시맨틱 구조 | `header` `nav` `main` `section` `article` … |
| 11 | 전역 속성 | 모든 요소에 붙일 수 있는 속성 |
| 12 | 접근성 | 모두가 쓸 수 있는 웹 |
| 13 | 콘텐츠 모델 | 어떤 요소 안에 어떤 요소를 넣을 수 있나 |
| 14 | 실전 도구·습관 | 개발자 도구, 검증, SEO, 파일 규칙 |
| 15 | 요소 총정리 | 모든 표준 요소 표 + 폐지된 요소 |
| 16 | 자주 하는 실수 모음 | 한눈에 보는 체크표 |
| 17 | 실습 과제 | 직접 만들어보기 |
| 18 | 용어 사전 | 헷갈리는 단어 정리 |

---

## 1. 웹과 HTML

**핵심**: HTML은 "이 글은 제목이고, 저건 링크야" 하고 **문서의 의미와 구조를 표시하는 언어**입니다. 예쁘게 꾸미는 건 CSS, 동작을 넣는 건 JavaScript의 일입니다.

### 1.1 세 가지 역할 분담
| 기술 | 역할 | 비유 (집) |
| --- | --- | --- |
| HTML | 구조와 의미 | 뼈대(기둥·벽·방) |
| CSS | 겉모습 | 인테리어(색·배치·크기) |
| JavaScript | 동작 | 전기·수도(스위치를 누르면 불이 켜짐) |

HTML은 **프로그래밍 언어가 아니라 마크업 언어**입니다. 계산도, 조건 분기도 없습니다. "표시(mark up)"만 합니다.

### 1.2 웹페이지가 화면에 뜨기까지
1. 주소를 입력하면 브라우저가 서버에 **요청(request)** 을 보냅니다.
2. 서버가 `index.html` 파일을 **응답(response)** 으로 돌려줍니다.
3. 브라우저가 HTML을 위에서 아래로 읽으며(**파싱, parsing**) **DOM 트리**를 만듭니다.
4. HTML 안에서 `<link rel="stylesheet">`, `<script>`, `<img>`를 만나면 그 파일들도 추가로 요청합니다.
5. CSS는 **CSSOM**이라는 규칙 트리로 만듭니다.
6. DOM과 CSSOM을 합쳐 **렌더 트리**를 만들고, 각 요소의 위치와 크기를 계산(**레이아웃**)한 뒤 픽셀로 그립니다(**페인트**).
7. JavaScript가 DOM을 바꾸면 3~6이 일부 다시 일어납니다.

```text
HTML 텍스트 ──파싱──▶ DOM 트리 ─┐
                                 ├─▶ 렌더 트리 ─▶ 레이아웃 ─▶ 페인트 ─▶ 화면
CSS 텍스트  ──파싱──▶ CSSOM ─────┘
```

### 1.3 DOM이란?
**DOM(Document Object Model)** 은 브라우저가 HTML을 읽고 만든 **"객체로 된 나무 구조"** 입니다. HTML 파일(글자)과 DOM(메모리 속 구조)은 다릅니다. JavaScript는 HTML 글자가 아니라 **DOM을 조작**합니다.

```html
<body>
  <h1>안녕</h1>
  <p>반가워</p>
</body>
```
```text
body
├─ h1 ── "안녕"
└─ p  ── "반가워"
```

### 1.4 브라우저는 관대하다
HTML에 실수가 있어도 브라우저는 에러 대신 **알아서 고쳐서** 보여줍니다(닫는 태그 자동 보완 등). 편하지만, 그래서 **오류를 모르고 지나가기 쉽습니다.** 그래서 14장의 검증 도구가 필요합니다.

### 확인 질문
1. HTML이 프로그래밍 언어가 아닌 이유는?
2. 브라우저가 HTML 파일을 읽고 만드는 트리 구조의 이름은?
3. JavaScript가 조작하는 대상은 HTML 파일의 글자일까, DOM일까?

<details><summary>정답 보기</summary>

1. 계산·조건·반복 같은 로직이 없고 문서의 구조와 의미를 표시하기만 하기 때문입니다.
2. DOM(Document Object Model)입니다.
3. DOM입니다. HTML 파일 자체를 바꾸는 게 아니라 메모리 속 DOM을 바꿉니다.
</details>

---

## 2. HTML 문법

**핵심**: HTML 문서는 **요소(element)** 가 **중첩**된 구조입니다. 요소는 **태그 + 속성 + 내용**으로 이뤄집니다.

### 2.1 요소, 태그, 속성, 내용
```html
<a href="https://example.com" target="_blank">예시 사이트</a>
```
| 부분 | 코드 | 이름 |
| --- | --- | --- |
| 여는 태그 | `<a href="..." target="_blank">` | start tag |
| 속성 | `href="..."` `target="_blank"` | attribute (이름="값") |
| 내용 | `예시 사이트` | content |
| 닫는 태그 | `</a>` | end tag |
| 전체 | 위 네 개를 합친 것 | **요소(element)** |

- **태그**는 요소의 "표지"이고, **요소**는 태그 + 내용을 합친 전체입니다. 실무에서는 섞어 쓰지만 구분해두면 좋습니다.
- **속성**은 요소에 추가 정보를 줍니다. 형식은 `이름="값"`이며, 여는 태그 안에만 씁니다.

### 2.2 빈 요소 (void element)
내용이 없어서 닫는 태그가 **없는** 요소입니다.
```html
<br>  <hr>  <img src="a.png" alt="설명">  <input type="text">  <meta charset="UTF-8">  <link rel="stylesheet" href="a.css">
```
빈 요소의 전체 목록: `area, base, br, col, embed, hr, img, input, link, meta, source, track, wbr`
(`<br />`처럼 `/`를 붙여도 되지만 HTML5에서는 필수가 아닙니다.)

### 2.3 중첩과 가계도
```html
<ul>
  <li>사과</li>
  <li>배</li>
</ul>
```
- `ul`은 `li`의 **부모(parent)**, `li`는 `ul`의 **자식(child)**, 두 `li`는 **형제(sibling)** 입니다.
- 태그는 **먼저 연 것을 나중에 닫습니다.** `<b><i>글</b></i>` 는 틀렸고 `<b><i>글</i></b>` 가 맞습니다.
- **들여쓰기**는 브라우저에는 의미가 없지만, 사람이 구조를 읽기 위해 꼭 합니다(보통 2칸 또는 4칸).

### 2.4 대소문자·따옴표·불린 속성
- 태그와 속성 이름은 대소문자를 구분하지 않지만 **소문자로 쓰는 것이 표준 관례**입니다.
- 속성값은 **큰따옴표**(`"`)로 감쌉니다. (따옴표 없이도 되는 경우가 있지만 공백이 있으면 깨집니다.)
- **불린(boolean) 속성**: 값 없이 이름만 있으면 켜진 것입니다. `<input required>`, `<button disabled>`, `<script defer>`, `<div hidden>`. (`required="required"`도 같은 뜻)
  - 주의: `disabled="false"` 는 **꺼지는 게 아닙니다.** 속성이 존재하면 켜진 것입니다. 끄려면 속성을 지워야 합니다.

### 2.5 주석
```html
<!-- 이 안은 화면에 표시되지 않는다. 개발자 도구에서는 보인다. -->
```
비밀 정보를 주석에 적으면 누구나 볼 수 있으니 절대 안 됩니다.

### 2.6 공백 처리 (초보자가 가장 당황하는 부분)
HTML은 **연속된 공백·탭·줄바꿈을 공백 하나로 합칩니다.**
```html
<p>안녕        하세요
줄을 바꿨지만
한 줄로 보입니다.</p>
```
- 줄을 바꾸고 싶으면 `<br>` 또는 새 `<p>`를 씁니다.
- 공백을 그대로 보존하려면 `<pre>`를 씁니다.
- 공백으로 간격을 벌리려고 `&nbsp;`를 반복하는 것은 나쁜 습관입니다. **간격은 CSS의 일**입니다.

### 2.7 문자 참조(이스케이프)
`<` `>` `&` 는 HTML 문법에 쓰이는 글자라, **글자 그대로 보여주려면** 대체 표기를 써야 합니다.

| 보이고 싶은 글자 | 쓰는 코드 | 이름 |
| --- | --- | --- |
| `<` | `&lt;` | less than |
| `>` | `&gt;` | greater than |
| `&` | `&amp;` | ampersand |
| `"` | `&quot;` | 속성값 안에서 필요할 때 |
| `'` | `&#39;` | 작은따옴표 |
| (줄바꿈되지 않는 공백) | `&nbsp;` | non-breaking space |
| © | `&copy;` | 저작권 기호 |
| 아무 유니코드 | `&#x1F600;` 처럼 숫자로 | 16진수 참조 |

```html
<p>태그를 쓰려면 &lt;p&gt; 처럼 씁니다.</p>
```
> 이 개념은 나중에 JavaScript에서 사용자 입력을 화면에 넣을 때 **보안(XSS)** 과 직결됩니다. 이걸 **이스케이프(escape)** 라고 부릅니다.

### 2.8 경로 (파일을 가리키는 주소)
`href`, `src` 같은 속성은 **경로**를 씁니다.

| 종류 | 예 | 뜻 |
| --- | --- | --- |
| 상대 경로 | `css/style.css` | 지금 HTML 파일 기준으로 찾는다 |
| 상위 폴더 | `../images/a.png` | 한 단계 위 폴더로 올라가서 |
| 루트 상대 | `/css/style.css` | 사이트 최상위에서부터 |
| 절대 URL | `https://example.com/a.png` | 완전한 주소 |
| 같은 페이지 앵커 | `#about` | 지금 문서의 `id="about"` 위치 |

**파일 이름 규칙 (실전 팁)**
- 소문자 + 영어 + 숫자 + `-`(또는 `_`)를 쓰고 공백을 피합니다.
- GitHub Pages 같은 리눅스 서버는 **대소문자를 구분**합니다. `Logo.png`와 `logo.png`는 다른 파일이라, 내 컴퓨터에서 되던 이미지가 배포 후 깨질 수 있습니다.
- 한글 파일명은 동작은 하지만 URL에서 `%ED%94%84...` 처럼 변환되어 다루기 불편합니다.
- `index.html`은 폴더의 **기본 문서**입니다. 주소에 파일명을 안 써도 서버가 이 파일을 보여줍니다.

### 흔한 실수
- 닫는 태그 빼먹기, 순서 어긋나게 닫기
- `<img>`에 `</img>` 붙이기 (빈 요소는 닫는 태그 없음)
- 속성값 따옴표 짝 안 맞추기
- 경로 오타·대소문자 불일치 (콘솔의 404 오류로 확인)
- 줄바꿈이 안 먹는다고 엔터를 여러 번 치기

### 내 프로젝트에서 찾기
- `index.html` 안의 `aria-expanded="false"`, `class="menu-toggle journal-toggle"` 은 **속성**이고, `hidden`은 **불린 속성**입니다 (`<button id="retry-button" type="button" hidden>`).
- `<img src="assets/images/logo.png" ...>` 는 **빈 요소 + 상대 경로**입니다.
- `assets/images/프로필_이미지.png` 는 한글 파일명의 예입니다.

### 확인 질문
1. `<input disabled="false">` 는 입력이 가능할까, 불가능할까?
2. `<p>가    나</p>` 는 화면에 공백이 몇 칸으로 보일까?
3. 글자 `<div>` 를 화면에 그대로 보이게 하려면?
4. `../img/a.png` 의 `../` 는 무슨 뜻일까?

<details><summary>정답 보기</summary>

1. 불가능합니다. 불린 속성은 존재만으로 켜지므로 값이 `false`여도 켜진 것입니다.
2. 한 칸입니다. 연속 공백은 하나로 합쳐집니다.
3. `&lt;div&gt;` 라고 씁니다.
4. 현재 파일이 있는 폴더의 한 단계 위 폴더로 올라간다는 뜻입니다.
</details>

---

## 3. 문서 뼈대와 `<head>`

**핵심**: 모든 HTML 문서는 `DOCTYPE → html → head + body` 구조입니다. `head`는 **화면에 안 보이는 설정**, `body`는 **화면에 보이는 내용**입니다.

### 3.1 최소 뼈대
```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>페이지 제목</title>
</head>
<body>
  <h1>안녕하세요</h1>
</body>
</html>
```

### 3.2 `<!DOCTYPE html>`
- "이 문서는 HTML5 표준 모드로 해석해 주세요"라는 **선언**입니다. 태그가 아니라서 닫는 태그가 없습니다.
- 빠뜨리면 브라우저가 **쿼크 모드(quirks mode)** 라는 옛날 방식으로 해석해서 레이아웃이 다르게 나올 수 있습니다. 항상 맨 첫 줄에 씁니다.

### 3.3 `<html lang="ko">`
- 문서 전체를 감싸는 **루트 요소**입니다.
- `lang`은 문서의 언어를 알려줍니다. 화면에 한국어를 "표시"하는 게 아니라, **스크린 리더의 발음, 검색엔진, 브라우저의 번역 제안, 하이픈 처리**에 쓰입니다.
- 일부만 다른 언어라면 그 요소에만 `lang="en"`을 붙입니다.

### 3.4 `<head>` 안의 요소들
| 요소 | 용도 | 예 |
| --- | --- | --- |
| `<meta charset>` | 문자 인코딩. **head의 처음 1024바이트 안**에 두는 것이 안전 | `<meta charset="UTF-8">` |
| `<meta name="viewport">` | 모바일 화면 배율 | `content="width=device-width, initial-scale=1.0"` |
| `<title>` | 브라우저 탭 제목, 검색 결과 제목, 북마크 이름 | `<title>홈 \| 내 사이트</title>` |
| `<meta name="description">` | 검색 결과 설명문(약 150자 이내가 관례) | `content="..."` |
| `<link rel="stylesheet">` | 외부 CSS 연결 | `href="css/style.css"` |
| `<link rel="icon">` | 탭 아이콘(파비콘) | `href="favicon.ico"` |
| `<link rel="preconnect">` | 외부 서버와 미리 연결(폰트 등 속도 개선) | `href="https://fonts.googleapis.com"` |
| `<link rel="preload">` | 중요한 파일을 미리 내려받기 | `as="image"` 등 |
| `<link rel="canonical">` | 대표 주소 지정(SEO) | `href="https://..."` |
| `<style>` | 문서 안에 직접 쓰는 CSS | `<style>p{color:red}</style>` |
| `<script>` | JavaScript 연결/삽입 | `<script src="js/main.js" defer></script>` |
| `<base>` | 문서 내 모든 상대 경로의 기준 주소 (잘못 쓰면 위험, 초보는 쓰지 않는 것을 권장) | `<base href="/">` |
| `<noscript>` | JS가 꺼져 있을 때만 보이는 내용 | |
| `<meta name="theme-color">` | 모바일 브라우저 주소창 색 | `content="#EBD5AE"` |
| `<meta name="color-scheme">` | 라이트/다크 지원 선언 | `content="light dark"` |
| `<meta name="robots">` | 검색엔진 수집 허용/금지 | `content="noindex"` |
| Open Graph `<meta property="og:*">` | 링크를 공유할 때 나오는 미리보기(제목·설명·이미지) | `property="og:title"` |

**viewport가 왜 필요한가?** 이게 없으면 모바일 브라우저가 "데스크톱 화면(약 980px)을 축소해서" 보여줍니다. `width=device-width`는 "화면 너비를 기기 너비로", `initial-scale=1.0`은 "확대·축소 없이 시작"이라는 뜻입니다. 반응형 웹의 출발점입니다.

### 3.5 `<script>` 로딩 방식 (매우 중요)
브라우저는 HTML을 위에서 아래로 읽다가 일반 `<script>`를 만나면 **파싱을 멈추고** 그 스크립트를 내려받아 실행합니다. 그 시점엔 아래쪽 HTML이 아직 없어서, `document.querySelector`로 아래 요소를 찾으면 `null`이 됩니다.

| 방식 | 다운로드 | 실행 시점 | 순서 보장 | 용도 |
| --- | --- | --- | --- | --- |
| `<script src>` (head) | 파싱 중단 | 즉시 | O | 거의 안 씀 |
| `<script src>` (body 맨 끝) | 그 시점 | 즉시 | O | 옛날 방식 |
| `<script src defer>` | 파싱과 **동시에** | **HTML 파싱이 끝난 뒤** | **O** | **가장 권장** |
| `<script src async>` | 파싱과 동시에 | **다운로드가 끝나는 즉시** | X | 분석 도구처럼 독립적인 스크립트 |
| `<script type="module">` | 동시 | 파싱 끝난 뒤 (defer처럼) | O | ES 모듈 |

`defer`는 head에 두어도 안전하고, 여러 개여도 적은 순서대로 실행됩니다. `defer`와 `async`는 **외부 파일(`src`)에만** 적용됩니다.

### 3.6 `<link>`와 `<script>`의 주소 뒤 `?v=...`
`style.css?v=20260928` 처럼 뒤에 붙이는 문자열을 **쿼리 스트링**이라 합니다. 파일 내용은 같지만 주소가 달라서 브라우저가 "새 파일"로 보고 **캐시를 무시**하고 다시 받습니다. 파일을 수정했는데 화면이 안 바뀔 때 쓰는 **캐시 무효화(cache busting)** 기법입니다.

### 3.7 CSS 파일을 여러 개 연결하면?
`<link>`를 여러 개 쓰면 **위에서 아래 순서로 적용**되고, 같은 우선순위라면 **나중 것이 이깁니다.** (자세한 규칙은 CSS편에서 다룹니다.)

### 흔한 실수
- `<meta charset>` 없어서 한글이 깨짐
- viewport 누락 → 모바일에서 아주 작게 보임
- `<title>` 누락 → 탭에 파일 이름이 뜸
- head에 `defer` 없는 script → 요소를 못 찾는 오류 (`Cannot read properties of null`)
- `<head>`에 화면용 요소(`<h1>` 등)를 넣기

### 내 프로젝트에서 찾기
`index.html`의 `<head>`에는 다음이 모두 있습니다.
- `charset`, `viewport`, `title`, `description`
- `preconnect` 두 개 + Google Fonts `<link>` (폰트를 빠르게 불러오는 정석 패턴. 두 번째 preconnect의 `crossorigin`은 폰트 파일이 다른 출처에서 오기 때문입니다)
- CSS 3개(`style.css` → `updates.css` → `backgrounds.css`) — **적은 순서대로 적용**되고 뒤가 앞을 덮어씁니다
- `<script src="js/main.js?v=..." defer>` — defer + 캐시 무효화

### 확인 질문
1. `DOCTYPE`을 빼면 무슨 일이 생길까?
2. `defer`를 붙인 스크립트는 언제 실행될까?
3. `?v=2` 를 파일 주소 뒤에 붙이는 이유는?
4. `lang="ko"` 는 어디에 쓰일까? (세 가지)

<details><summary>정답 보기</summary>

1. 쿼크 모드로 해석되어 레이아웃·박스 계산이 표준과 다르게 나올 수 있습니다.
2. 다운로드는 파싱과 동시에 하고, 실행은 HTML 파싱이 끝난 뒤에 합니다.
3. 브라우저가 다른 주소로 보고 캐시를 무시하여 최신 파일을 받게 하기 위해서입니다.
4. 스크린 리더 발음, 검색엔진 언어 판별, 브라우저 번역 제안 등입니다.
</details>

---

## 4. 텍스트 요소

**핵심**: 태그는 **모양이 아니라 의미로** 고릅니다. "글씨를 크게 하고 싶다"가 아니라 "이건 제목이다"라서 `<h1>`을 씁니다. 모양은 CSS가 정합니다.

### 4.1 제목 `<h1>` ~ `<h6>`
```html
<h1>사이트/페이지의 가장 큰 제목</h1>
  <h2>큰 주제</h2>
    <h3>소주제</h3>
```
- **숫자는 위계(계층)** 입니다. 크기가 아닙니다.
- `h1`은 페이지당 **하나만** 쓰는 것이 관례입니다(문서의 주제).
- 단계를 **건너뛰지 않습니다.** (`h2` 다음에 `h4` 금지) 스크린 리더 사용자는 제목 목록으로 페이지를 탐색합니다.
- 글씨 크기를 조절하려고 제목 태그를 고르지 않습니다. 크기는 CSS로.

### 4.2 문단과 줄바꿈
| 요소 | 용도 |
| --- | --- |
| `<p>` | 문단(paragraph). 위아래로 여백이 생김 |
| `<br>` | 문단 **안에서** 줄바꿈이 의미일 때(시, 주소). 간격 조절용 금지 |
| `<hr>` | 주제가 바뀌는 지점의 구분선(의미: thematic break) |
| `<pre>` | 공백과 줄바꿈을 **그대로 보존**하는 미리 서식 지정 텍스트 |

### 4.3 강조와 중요도
| 요소 | 의미 | 기본 모양 |
| --- | --- | --- |
| `<strong>` | **중요함**(경고, 핵심) | 굵게 |
| `<em>` | **강조**(말할 때 힘주는 곳, 뜻이 달라짐) | 기울임 |
| `<b>` | 의미 없이 주의를 끄는 글자(제품명, 키워드) | 굵게 |
| `<i>` | 다른 목소리·분위기(외국어 용어, 생각) | 기울임 |
| `<mark>` | 하이라이트(검색어 표시) | 노란 배경 |
| `<small>` | 부가 설명·법적 고지·저작권 | 작게 |
| `<s>` | 더는 유효하지 않은 내용 | 취소선 |
| `<del>` / `<ins>` | 삭제/추가된 편집 내용(`datetime`, `cite` 속성 가능) | 취소선/밑줄 |
| `<u>` | 맞춤법 오류·고유명사 표시 같은 비언어적 주석(링크와 혼동되어 거의 안 씀) | 밑줄 |
| `<sub>` `<sup>` | 아래 첨자(H<sub>2</sub>O) / 위 첨자(m<sup>2</sup>) | |

> 굵게만 하고 싶다면 `<strong>`이 아니라 CSS `font-weight`로 처리하는 것이 원칙입니다. "의미가 강조인가?"를 먼저 자문합니다.

### 4.4 인용
```html
<blockquote cite="https://출처">긴 인용문(블록)</blockquote>
<p>그는 <q>짧은 인용</q>이라고 말했다.</p>   <!-- q: 브라우저가 따옴표를 자동 삽입 -->
<cite>작품이나 책의 제목</cite>
```

### 4.5 코드·컴퓨터 관련
| 요소 | 용도 |
| --- | --- |
| `<code>` | 코드 조각 |
| `<pre><code>` | 여러 줄 코드(공백 보존) |
| `<kbd>` | 키보드 입력(`<kbd>Ctrl</kbd>+<kbd>C</kbd>`) |
| `<samp>` | 프로그램의 출력 예시 |
| `<var>` | 수학·프로그래밍 변수 |

### 4.6 기타 인라인 의미 요소
| 요소 | 용도 |
| --- | --- |
| `<abbr title="설명">` | 약어(마우스를 올리면 설명) |
| `<dfn>` | 정의하는 용어 |
| `<time datetime="2026-09-28">` | 날짜·시간을 기계가 읽을 수 있게 표시 |
| `<address>` | 작성자·문서의 **연락처 정보** (우편 주소 아무 데나 쓰는 태그가 아님) |
| `<data value="123">` | 기계가 읽는 값과 사람이 읽는 값을 함께 |
| `<ruby>` `<rt>` `<rp>` | 한자·발음 병기 |
| `<bdi>` `<bdo>` | 글쓰기 방향 제어 |
| `<wbr>` | 긴 단어에서 줄바꿈 **가능** 지점 |
| `<span>` | **의미 없는** 인라인 묶음(스타일·JS용) |
| `<div>` | **의미 없는** 블록 묶음(스타일·JS용) |

### 4.7 블록(block)과 인라인(inline)
- **블록**: 한 줄 전체를 차지하고 위아래로 쌓입니다. (`p`, `h1`, `div`, `ul`, `section` …)
- **인라인**: 글자처럼 옆으로 이어지고 내용만큼만 차지합니다. (`a`, `span`, `strong`, `em`, `img` …)
- 이것은 **브라우저가 주는 기본 CSS(`display`)** 의 차이이고, CSS로 바꿀 수 있습니다. HTML 명세에서는 이 구분 대신 **플로우/구문 콘텐츠**라는 개념(13장)을 씁니다.

### 흔한 실수
- 글씨를 키우려고 `<h3>`를 쓰기 → 문서 구조가 망가짐
- `<br><br><br>`로 간격 만들기 → CSS `margin`
- `<b>`/`<i>`를 습관적으로 쓰기 → 의미가 있다면 `<strong>`/`<em>`
- 모든 걸 `<div>`와 `<span>`으로만 만들기 → 시맨틱 요소 사용(10장)

### 내 프로젝트에서 찾기
- `<h1>History × Data × AI</h1>` 는 페이지의 유일한 `h1`입니다.
- Hero의 `<p class="hero-subtitle">`, `<p class="hero-tagline">` 는 문단입니다.
- 폼 오류 문구는 `<small class="error-message">`, 장식용 기호(`✣`, `→`)는 `<span aria-hidden="true">`로 감쌌습니다. 이유는 12장(접근성)에서 설명합니다.

### 확인 질문
1. `<h2>` 다음에 바로 `<h4>`를 쓰면 왜 문제일까?
2. `<strong>`과 `<b>`의 차이는?
3. `<span>`과 `<div>`의 공통점과 차이점은?
4. 두 문단 사이 간격을 벌리려면 어떤 도구를 써야 할까?

<details><summary>정답 보기</summary>

1. 제목 위계가 건너뛰어져 스크린 리더 사용자의 제목 탐색과 문서 구조 이해를 해칩니다.
2. `strong`은 "중요함"이라는 의미, `b`는 의미 없이 시각적으로 주의를 끄는 용도입니다.
3. 둘 다 의미가 없는 묶음 요소입니다. `div`는 블록, `span`은 인라인입니다.
4. CSS의 `margin`(또는 `padding`, `gap`)입니다.
</details>

---

## 5. 링크 `<a>`

**핵심**: `<a>`는 "다른 곳으로 이동"을 의미합니다. `href`가 없으면 그냥 텍스트일 뿐, 링크가 아닙니다.

### 5.1 기본 형태
```html
<a href="https://example.com">다른 사이트로</a>
<a href="about.html">같은 사이트의 다른 페이지</a>
<a href="#projects">같은 페이지 안의 id="projects"로 이동</a>
<a href="mailto:me@example.com">이메일 앱 열기</a>
<a href="tel:01012345678">전화 걸기</a>
<a href="files/report.pdf" download>파일 내려받기</a>
```

### 5.2 새 탭으로 열기
```html
<a href="https://example.com" target="_blank" rel="noopener noreferrer">외부 링크</a>
```
- `target="_blank"`: 새 탭에서 엽니다.
- `rel="noopener noreferrer"`: **보안 관례**입니다. 이게 없으면 새로 열린 페이지가 `window.opener`를 통해 원래 탭을 조작할 수 있는 취약점이 생깁니다. `target="_blank"`를 쓸 때는 항상 같이 씁니다.

### 5.3 `rel` 속성 자주 쓰는 값
| 값 | 의미 |
| --- | --- |
| `noopener` | 새 창이 원래 창을 조작 못 하게 |
| `noreferrer` | 어디서 왔는지 정보(Referer)를 안 보냄 |
| `nofollow` | 검색엔진에게 이 링크를 신뢰 신호로 안 쓰게 알림(광고·사용자 게시물 등) |
| `stylesheet`, `icon`, `preconnect` | `<link>`에서 쓰는 값들(3장 참고) |

### 5.4 앵커 이동의 원리
`href="#about"`는 "현재 문서에서 `id="about"`인 요소로 스크롤 이동"입니다. `id`는 문서 안에서 **유일**해야 합니다. CSS의 `html { scroll-behavior: smooth; }` 를 주면 순간 이동 대신 부드럽게 스크롤됩니다.

### 5.5 이미지·아이콘을 링크로
`<a>` 안에 `<img>`나 `<svg>`를 넣으면 이미지 전체가 클릭 영역이 됩니다. 로고를 홈으로 보내는 전형적인 패턴입니다.

### 내 프로젝트에서 찾기
- `<a href="#hero" class="logo"><img src="assets/images/logo.png" ...></a>` — 로고 이미지를 링크로 감싼 패턴.
- 네비게이션 메뉴 `<a href="#about">`, `<a href="#skills">` 등은 전부 **같은 페이지 앵커 이동**입니다.
- `<a href="#projects" class="btn">EXPLORE PORTFOLIO</a>` 도 앵커 링크입니다.

### 확인 질문
1. `<span onclick="...">`로 링크처럼 보이게 만드는 것과 `<a href="...">`의 차이는 접근성 면에서 무엇일까?
2. `target="_blank"`를 쓸 때 꼭 같이 쓰는 속성은?
3. `href="#top"`이 동작하려면 문서 어딘가에 무엇이 있어야 할까?

<details><summary>정답 보기</summary>

1. `<a>`는 키보드 Tab으로 접근 가능하고 Enter로 실행되며 스크린 리더가 "링크"로 읽어줍니다. `<span onclick>`은 이런 기본 동작이 없어 키보드·스크린 리더 사용자가 쓸 수 없습니다.
2. `rel="noopener noreferrer"`.
3. `id="top"`을 가진 요소.
</details>

---

## 6. 목록

**핵심**: 순서가 중요하면 `<ol>`, 안 중요하면 `<ul>`, 용어-설명 쌍이면 `<dl>`.

```html
<ul>                      <!-- 순서 없는 목록 -->
  <li>사과</li>
  <li>배</li>
</ul>

<ol start="3" reversed>   <!-- 순서 있는 목록: 3부터, 역순 -->
  <li>1등</li>
  <li>2등</li>
</ol>

<dl>                      <!-- 설명 목록 -->
  <dt>HTML</dt>
  <dd>웹 문서의 구조를 만드는 언어</dd>
  <dt>CSS</dt>
  <dd>웹 문서를 꾸미는 언어</dd>
</dl>
```
- `<li>`는 반드시 `<ul>`, `<ol>`, `<menu>` **안에만** 옵니다.
- 목록을 중첩하려면 `<li>` **안에** 새 `<ul>`/`<ol>`을 넣습니다.
- 네비게이션 메뉴가 시각적으로 목록처럼 안 보여도, "여러 항목의 모음"이면 `<ul><li>`로 만드는 것이 표준입니다(10장에서 다시 설명).

### 내 프로젝트에서 찾기
- `<ul class="nav-menu" id="nav-menu"><li><a href="#about">...</a></li>...</ul>` — 네비게이션 메뉴를 목록으로 구성.
- Skills 섹션의 기술 태그들도 `<ul><li>`로 되어 있어, "여러 항목의 모음"이라는 의미가 살아 있습니다.

### 확인 질문
1. 요리 레시피의 "재료"와 "만드는 순서" 중 `<ol>`을 써야 하는 건 어느 쪽일까?
2. `<li>`를 `<div>` 밖에 단독으로 써도 될까?

<details><summary>정답 보기</summary>

1. "만드는 순서"입니다. 순서가 바뀌면 의미가 달라지기 때문입니다. "재료"는 보통 `<ul>`을 씁니다.
2. 안 됩니다. `<li>`는 `<ul>`/`<ol>`/`<menu>`의 자식이어야 유효합니다.
</details>

---

## 7. 이미지와 미디어

**핵심**: `<img>`는 **콘텐츠로서의 이미지**입니다. `alt`는 선택이 아니라 **필수**입니다.

### 7.1 `<img>`
```html
<img src="cat.jpg" alt="갈색 얼룩무늬 고양이가 창가에 앉아 있다" width="600" height="400">
```
| 속성 | 역할 |
| --- | --- |
| `src` | 이미지 경로 |
| `alt` | 대체 텍스트. 이미지가 안 뜰 때, 스크린 리더가 읽을 때 사용 |
| `width` / `height` | **원본 비율**로 적어두면 이미지가 로드되기 전에도 공간을 미리 확보해 레이아웃이 덜컹거리지 않음(CLS 방지) |
| `loading="lazy"` | 화면에 보이기 직전에 불러오기(성능) |
| `decoding="async"` | 디코딩을 비동기로(성능) |

**`alt`를 언제 비워두나?** 순전히 장식용 이미지(의미 없는 배경 문양 등)는 `alt=""`로 비워둬서 스크린 리더가 건너뛰게 합니다. `alt` 자체를 생략하면 "제목 없는 이미지" 취급을 받아 더 나쁩니다.

### 7.2 반응형 이미지
```html
<picture>
  <source srcset="cat-large.webp" media="(min-width: 800px)">
  <source srcset="cat-small.webp">
  <img src="cat-fallback.jpg" alt="고양이">
</picture>

<img srcset="cat-480.jpg 480w, cat-800.jpg 800w"
     sizes="(max-width: 600px) 480px, 800px"
     src="cat-800.jpg" alt="고양이">
```
- `<picture>`: 화면 크기·포맷에 따라 **다른 파일**을 보여줄 때(art direction, 최신 포맷 폴백).
- `srcset`/`sizes`: **같은 그림의 다른 해상도**를 브라우저가 알아서 고르게 할 때.

### 7.3 벡터 이미지 `<svg>`
`<svg>`는 점과 선으로 그린 그림이라 **확대해도 깨지지 않습니다.** 아이콘·로고에 적합하고, `<img src="a.svg">`로 불러오거나 HTML 안에 직접 코드로 쓸 수도 있습니다(직접 쓰면 CSS로 색을 바꿀 수 있음).

### 7.4 영상·소리
```html
<video src="clip.mp4" controls width="640" poster="thumb.jpg"></video>
<video controls>
  <source src="clip.webm" type="video/webm">
  <source src="clip.mp4" type="video/mp4">
  자막이 필요하면 <track kind="captions" src="ko.vtt" srclang="ko">
</video>
<audio src="song.mp3" controls></audio>
```
- `controls`: 재생 버튼 등 기본 UI 표시.
- `autoplay`는 대부분 브라우저에서 `muted`가 같이 있어야 동작합니다(사용자 배려 정책).

### 7.5 외부 콘텐츠 끼워넣기 `<iframe>`
```html
<iframe src="https://www.youtube.com/embed/영상ID" title="영상 제목"
        allowfullscreen loading="lazy"></iframe>
```
다른 웹페이지를 통째로 내 페이지 안에 넣는 요소입니다. 지도, 영상, 결제창 등에 씁니다. `title` 속성이 접근성에 꼭 필요합니다.

### 7.6 이미지 지도, 캔버스
- `<map>` + `<area>`: 이미지의 특정 영역마다 다른 링크를 거는 옛날 기법(요즘은 CSS로 대체하는 경우가 많음).
- `<canvas>`: JavaScript로 그림을 픽셀 단위로 그리는 도화지(게임, 차트 등).

### 흔한 실수
- `alt` 생략
- 장식용 이미지에 긴 설명을 넣기 (오히려 방해)
- `width`/`height` 없이 이미지를 써서 로딩 중 레이아웃이 흔들림
- `<iframe>`에 `title` 누락

### 내 프로젝트에서 찾기
- `<img src="assets/images/프로필_이미지.png" alt="정충원의 프로필 이미지">` — 내용이 있는 `alt`.
- 로고 이미지의 `alt="정충원 포트폴리오 홈"`은 이미지의 겉모습이 아니라 **링크의 목적**을 설명합니다(로고를 누르면 홈으로 가므로).
- 배경 지도 이미지(`light_mode.png`, `dark_mode.png`)는 `<img>`가 아니라 CSS `background-image`로 넣었습니다. **순수 장식**이라 HTML 콘텐츠로 넣지 않은 것이 올바른 선택입니다.

### 확인 질문
1. 장식용 이미지의 `alt`는 어떻게 써야 할까?
2. `srcset`과 `<picture>`의 차이는?
3. `width`/`height`를 이미지에 적어두면 어떤 문제를 예방할까?

<details><summary>정답 보기</summary>

1. `alt=""`로 비워둡니다(속성 자체를 생략하지 않음).
2. `srcset`은 같은 그림의 해상도만 다른 버전 중 고르는 것, `picture`는 화면 조건에 따라 아예 다른 그림/포맷을 보여줄 수 있는 것입니다.
3. 이미지가 로드되기 전에 공간을 미리 잡아두어 레이아웃이 밀리는 현상(누적 레이아웃 이동)을 줄입니다.
</details>

---

## 8. 표 `<table>`

**핵심**: 표는 **표 형태의 데이터**(행과 열의 관계가 있는 정보)에만 씁니다. 레이아웃을 짜려고 표를 쓰지 않습니다(옛날 방식).

```html
<table>
  <caption>2026년 분기별 매출</caption>
  <thead>
    <tr><th scope="col">분기</th><th scope="col">매출</th></tr>
  </thead>
  <tbody>
    <tr><th scope="row">1분기</th><td>100</td></tr>
    <tr><th scope="row">2분기</th><td>150</td></tr>
  </tbody>
  <tfoot>
    <tr><th scope="row">합계</th><td>250</td></tr>
  </tfoot>
</table>
```
| 요소 | 역할 |
| --- | --- |
| `<table>` | 표 전체 |
| `<caption>` | 표의 제목 |
| `<thead>` `<tbody>` `<tfoot>` | 머리글/본문/꼬리글 그룹 |
| `<tr>` | 행(table row) |
| `<th>` | 제목 셀(`scope="col"`이면 열 제목, `scope="row"`이면 행 제목) |
| `<td>` | 일반 데이터 셀 |
| `colspan` / `rowspan` | 셀을 가로/세로로 합치기 |

`scope`는 스크린 리더가 "이 데이터가 어느 행·열에 속하는지" 읽어주는 데 씁니다.

### 확인 질문
1. 3단 레이아웃(사이드바/본문/광고)을 나누는 데 `<table>`을 쓰는 것이 왜 요즘은 권장되지 않을까?

<details><summary>정답 보기</summary>

`<table>`은 "표 형태 데이터"라는 의미를 가지므로, 의미 없는 레이아웃에 쓰면 스크린 리더가 엉뚱하게 "표"로 안내하고, 반응형으로 배치를 바꾸기도 어렵습니다. 레이아웃은 CSS(Flexbox, Grid)의 일입니다.
</details>

---

## 9. 폼

**핵심**: 폼은 **사용자 입력을 서버로 보내는 문법**입니다. HTML만으로도 기본적인 유효성 검사가 되고, JavaScript는 그 위에 세밀한 처리를 더합니다.

### 9.1 뼈대
```html
<form action="/submit" method="post">
  <label for="name">이름</label>
  <input type="text" id="name" name="name" required>
  <button type="submit">보내기</button>
</form>
```
| 속성 | 의미 |
| --- | --- |
| `action` | 데이터를 보낼 주소 |
| `method` | `get`(주소에 데이터 노출, 조회용) 또는 `post`(본문에 담음, 등록·수정용) |
| `name` | 서버가 받을 때 쓰는 필드 이름(**필수**. 없으면 값이 전송 안 됨) |

### 9.2 `<label>`과 `<input>` 연결 (접근성의 핵심)
```html
<label for="email">이메일</label>
<input type="email" id="email" name="email">
```
`label`의 `for`와 `input`의 `id`가 **같아야** 연결됩니다. 연결되면:
- 라벨 글자를 클릭해도 입력창에 포커스가 갑니다(특히 체크박스에서 클릭 영역이 커져 유용).
- 스크린 리더가 입력창에 포커스될 때 라벨을 읽어줍니다.

라벨을 감싸는 방식(`<label>이름 <input></label>`)도 되지만, `for`+`id` 방식이 더 명확합니다.

### 9.3 `<input>`의 `type`들
| type | 용도 | 모바일 키보드 |
| --- | --- | --- |
| `text` | 일반 텍스트 | 기본 |
| `email` | 이메일(형식 자동 검증 + `@` 키보드) | 이메일용 |
| `password` | 비밀번호(화면에 점으로 표시) | 기본 |
| `number` | 숫자(스피너, `min`/`max`/`step`) | 숫자패드 |
| `tel` | 전화번호(형식 강제는 없음, 키보드만 전화용) | 전화 키패드 |
| `url` | URL 형식 검증 | URL용 |
| `date` / `time` / `datetime-local` | 날짜·시간 선택기 | 날짜용 |
| `checkbox` | 여러 개 선택 가능 | |
| `radio` | 여러 개 중 하나(같은 `name`을 공유) | |
| `range` | 슬라이더 | |
| `color` | 색상 선택기 | |
| `file` | 파일 업로드 | |
| `search` | 검색창(x 지우기 버튼) | |
| `hidden` | 화면에 안 보이지만 같이 전송되는 값 | |
| `submit` / `reset` / `button` | 버튼 종류 | |

### 9.4 그 외 입력 요소
```html
<textarea name="message" rows="4"></textarea>              <!-- 여러 줄 글 -->
<select name="country">
  <option value="kr">대한민국</option>
  <option value="jp">일본</option>
</select>
<fieldset>
  <legend>성별</legend>
  <input type="radio" id="m" name="gender" value="m"><label for="m">남</label>
  <input type="radio" id="f" name="gender" value="f"><label for="f">여</label>
</fieldset>
<datalist id="fruits">                                     <!-- 자동완성 후보 -->
  <option value="사과"></option>
</datalist>
<input list="fruits">
<progress value="70" max="100"></progress>
<meter value="0.6"></meter>
<output name="result"></output>                             <!-- 계산 결과 표시용 -->
```
- `<fieldset>`+`<legend>`: 관련된 입력들을 묶고 그룹 제목을 붙입니다(라디오 버튼 그룹에 특히 중요).

### 9.5 내장 유효성 검사
```html
<input type="email" required minlength="5" maxlength="50" pattern="[a-z]+" autocomplete="email">
```
| 속성 | 의미 |
| --- | --- |
| `required` | 비어 있으면 제출 막음 |
| `minlength` / `maxlength` | 글자 수 제한 |
| `min` / `max` / `step` | 숫자·날짜 범위 |
| `pattern` | 정규식으로 형식 강제 |
| `autocomplete` | 브라우저의 자동완성 힌트(`name`, `email`, `tel` 등) |
| `novalidate` (form에) | 브라우저의 기본 검사창을 끄고 **JavaScript로 직접 처리**할 때 씀 |

브라우저 기본 검사는 편하지만 메시지가 영어이거나 디자인을 못 바꾸는 경우가 많아, 실무에서는 `novalidate`를 걸고 JavaScript로 **직접 검사 + 직접 메시지**를 보여주는 경우가 많습니다(9장의 이 방식이 네 프로젝트의 방식입니다).

### 9.6 버튼의 함정
```html
<form>
  <button>클릭</button>   <!-- type 생략 시 기본값은 "submit"! -->
</form>
```
폼 안의 `<button>`은 `type`을 안 쓰면 **자동으로 제출 버튼**이 됩니다. 폼 제출이 아닌 동작(예: 비밀번호 보이기 토글)에는 반드시 `type="button"`을 명시해야 합니다.

### 흔한 실수
- `label`의 `for`와 `input`의 `id` 불일치(또는 아예 라벨 없음)
- `input`에 `name` 빠뜨려서 서버가 값을 못 받음
- 폼 안 버튼에 `type` 안 써서 의도치 않게 페이지가 새로고침됨
- 라디오 버튼들에 서로 다른 `name`을 줘서 "여러 개 동시 선택"이 되어버림

### 내 프로젝트에서 찾기
```html
<form id="contact-form" novalidate>
  <label for="name">이름</label>
  <input type="text" id="name" name="name" required>
  <small class="error-message" id="name-error"></small>
  ...
  <input type="email" id="email" name="email" required>
  <textarea id="message" name="message" required></textarea>
  <button type="submit">보내기</button>
</form>
```
- `novalidate` + JavaScript 직접 검사 조합입니다(9.5 참고).
- `<small id="name-error">`처럼 각 입력 옆에 오류 문구 자리를 미리 만들어두고, JS가 필요할 때만 채웁니다.
- 재시도 버튼(`<button id="retry-button" type="button" hidden>`)에 `type="button"`이 명시된 것도 이 때문입니다. 폼 안이 아니라도 습관적으로 명시하는 것이 안전합니다.

### 확인 질문
1. `<label for="a">`와 `<input id="b">`를 연결하면 어떻게 될까?
2. 폼 안의 버튼에 `type`을 안 쓰면 기본값은?
3. `novalidate`를 쓰는 이유는?

<details><summary>정답 보기</summary>

1. `id`가 서로 달라서 연결되지 않습니다. 라벨 클릭이 입력창으로 포커스를 옮기지 않고, 스크린 리더도 라벨을 읽어주지 않습니다.
2. `submit`입니다.
3. 브라우저의 기본 검사 팝업 대신 JavaScript로 직접 검사하고 원하는 디자인의 오류 메시지를 보여주기 위해서입니다.
</details>

---

## 10. 시맨틱 구조

**핵심**: 시맨틱(semantic) 태그는 **"이 영역이 무슨 역할인지"** 를 브라우저·검색엔진·스크린 리더에게 알려주는 태그입니다. `<div>`로도 화면은 똑같이 나오지만 의미가 없습니다.

### 10.1 전형적인 페이지 골격
```html
<body>
  <header>          <!-- 페이지/섹션 상단: 로고, 제목, 네비게이션 -->
    <nav>...</nav>  <!-- 주요 이동 메뉴 -->
  </header>

  <main>            <!-- 문서의 핵심 내용. 페이지에 하나만 -->
    <section>       <!-- 주제로 묶인 구역(보통 제목을 가짐) -->
      <h2>제목</h2>
      <article>...</article>  <!-- 독립적으로도 말이 되는 콘텐츠(글, 카드 하나) -->
    </section>
    <aside>...</aside>        <!-- 본문과 관련은 있지만 부차적인 내용(광고, 관련 링크) -->
  </main>

  <footer>...</footer>        <!-- 페이지/섹션 하단: 저작권, 연락처 -->
</body>
```

### 10.2 `section` vs `article` vs `div`
| 요소 | 기준 |
| --- | --- |
| `<section>` | **주제**로 묶이는 구역. 보통 제목(`h2` 등)이 있음 |
| `<article>` | 떼어내서 **다른 곳에 놔도 그 자체로 말이 되는** 독립 콘텐츠(블로그 글, 뉴스 카드, 댓글 하나, 상품 카드) |
| `<div>` | 의미 없음. 스타일이나 JS 훅을 위한 순수 상자 |

판별법: "이 부분만 떼서 RSS 피드나 다른 사이트에 옮겨도 뜻이 통하나?" → 그렇다면 `article`.

### 10.3 헷갈리는 것들
- `<header>`/`<footer>`는 `<body>`에도, **`<article>`이나 `<section>` 안에도** 각각 따로 쓸 수 있습니다. (문서 전체 header, 카드 하나의 header처럼)
- `<nav>`는 페이지의 **주요** 이동 메뉴에만 씁니다. 본문 안의 모든 링크 목록에 다 쓰지 않습니다.
- `<main>`은 **문서당 하나만**, 숨겨져 있지 않아야 합니다.
- `<figure>`+`<figcaption>`: 이미지·코드·그림에 **캡션(설명)** 을 붙일 때. 문서 흐름에서 위치가 바뀌어도(다른 페이지로 옮겨도) 괜찮은 독립적인 그림 단위.
```html
<figure>
  <img src="chart.png" alt="2026년 매출 그래프">
  <figcaption>그림 1. 2026년 분기별 매출</figcaption>
</figure>
```
- `<details>`+`<summary>`: JavaScript 없이 여닫히는 상자(이 학습자료의 "정답 보기"가 이 태그입니다).
```html
<details>
  <summary>더 보기</summary>
  <p>숨겨진 내용</p>
</details>
```
- `<dialog>`: 모달 창(팝업)을 표준으로 만드는 요소.

### 10.4 `div`/`span`을 써도 되는 경우
모든 것을 시맨틱 태그로 채우려다 억지로 끼워맞추는 것도 안 좋습니다. **의미 있는 이름이 없는 순수 스타일 묶음**은 `div`/`span`이 정답입니다. 시맨틱 태그는 "의미가 있을 때" 쓰는 것이지 "무조건 다" 쓰는 게 아닙니다.

### 흔한 실수
- 페이지 전체를 `<div>`로만 도배 ("divitis")
- `<main>`을 두 개 쓰거나 아예 안 씀
- 모든 링크 묶음에 `<nav>`를 씀(꼬리말의 저작권 링크 한두 개는 `nav`가 아니어도 됨)
- 시맨틱 태그를 CSS 클래스처럼 여러 번 남용

### 내 프로젝트에서 찾기
`index.html`의 큰 구조:
```
<header class="site-header"><nav>...</nav></header>
<main>
  <section id="hero">...</section>
  <section id="about">...</section>
  <section id="skills">...</section>
  <section id="projects">
    ...
    <article>...</article>  <!-- GitHub 저장소 카드 하나하나 -->
  </section>
  <section id="side-projects">
    <article class="coming-soon-card">...</article>
  </section>
  <section id="contact">...</section>
</main>
<footer class="site-footer">...</footer>
```
- 각 섹션이 `<h2>`(또는 유사 제목)를 가진 **주제 구역**이라 `section`이 맞습니다.
- GitHub 저장소 카드처럼 "떼어내도 말이 되는" 단위는 `article`로 만들었습니다. 반대로 카드 내부에서 순수 배치를 위한 감싸기는 `div`(예: `.about-card`류)를 씁니다.

### 확인 질문
1. 블로그 글 목록에서 글 하나하나를 감싸는 데 알맞은 태그는?
2. `<nav>`를 페이지의 모든 링크 목록에 써도 될까?
3. `div`를 절대 쓰면 안 될까?

<details><summary>정답 보기</summary>

1. `<article>`입니다. 각 글은 독립적으로도 의미가 통하기 때문입니다.
2. 아닙니다. 주요 내비게이션에만 쓰고, 부차적인 링크 목록은 `div`나 문맥에 맞는 다른 요소를 씁니다.
3. 아닙니다. 의미가 없는 순수 스타일/스크립트용 묶음에는 `div`(블록)와 `span`(인라인)이 정답입니다.
</details>

---

## 11. 전역 속성

**핵심**: 아래 속성들은 **거의 모든 HTML 요소**에 붙일 수 있습니다.

| 속성 | 용도 |
| --- | --- |
| `id` | 문서 안에서 유일한 식별자. CSS 선택, JS 참조, 앵커 이동에 사용 |
| `class` | 스타일·JS를 위한 분류표. 여러 개를 공백으로 나열 가능, 중복 가능 |
| `style` | 그 요소에만 적용되는 CSS를 직접 씀(인라인 스타일, 유지보수 어려워 남용 금지) |
| `title` | 마우스를 올리면 뜨는 툴팁 |
| `hidden` | 요소를 화면에서 완전히 숨김(불린 속성) |
| `tabindex` | 키보드 Tab 이동 순서. `0`=자연스러운 순서에 포함, `-1`=Tab으로는 안 가지만 JS로 포커스 가능, 양수는 지양 |
| `contenteditable` | 사용자가 그 요소 내용을 직접 편집 가능하게 |
| `draggable` | 드래그 가능 여부 |
| `data-*` | **커스텀 데이터 속성**. `data-user-id="42"` 처럼 자유롭게 만들어 JS의 `element.dataset.userId`로 읽음 |
| `lang` | 그 요소만 다른 언어일 때 |
| `dir` | 글쓰기 방향(`ltr`, `rtl`) |
| `spellcheck` | 브라우저 맞춤법 검사 여부 |
| `accesskey` | 단축키 지정(브라우저마다 동작이 달라 실무에서 잘 안 씀) |

### `data-*` 예시
```html
<button data-action="delete" data-id="7">삭제</button>
```
```js
button.dataset.action // "delete"
button.dataset.id     // "7" (문자열로 옴)
```

### 확인 질문
1. `id`와 `class`의 근본적인 차이는?
2. `data-*` 속성은 왜 유용할까?

<details><summary>정답 보기</summary>

1. `id`는 문서 안에서 유일해야 하고 하나의 요소만 가리킵니다. `class`는 여러 요소가 공유할 수 있고 한 요소가 여러 class를 가질 수도 있습니다.
2. HTML 태그를 늘리지 않고도 JavaScript가 읽을 수 있는 값을 요소에 붙여둘 수 있어서, 상태나 식별자를 요소 자체에 저장하기 좋습니다.
</details>

---

## 12. 접근성 (Accessibility, a11y)

**핵심**: 접근성은 "장애가 있는 사람만을 위한 옵션"이 아니라 **키보드만 쓰는 사람, 화면이 작은 사람, 느린 인터넷을 쓰는 사람 모두를 위한 기본기**입니다. 많은 부분은 **시맨틱 태그를 제대로 쓰는 것만으로 해결**됩니다.

### 12.1 스크린 리더가 페이지를 "보는" 방법
스크린 리더는 눈 대신 **DOM 구조와 텍스트를 소리로** 읽어줍니다. 시각 디자인은 못 보고, HTML의 의미만 "듣습니다." 그래서 `<div onclick>`으로 만든 가짜 버튼은 아무 소리도 안 나고 넘어갑니다.

### 12.2 핵심 원칙 5가지
1. **의미 있는 태그를 쓴다**(10장). `button`은 버튼, `a`는 링크로.
2. **모든 이미지에 `alt`를 준다**(7장).
3. **모든 입력에 `label`을 연결한다**(9장).
4. **키보드만으로 전부 조작 가능해야 한다**(마우스 없이 Tab, Enter, Space, 화살표로).
5. **색으로만 정보를 전달하지 않는다**(색맹인 사람은 빨강/초록을 구분 못 할 수 있음. 아이콘이나 텍스트를 함께).

### 12.3 ARIA (WAI-ARIA) — HTML로 부족할 때 보충하는 속성
> **ARIA 제1원칙**: "쓸 수 있는 HTML 요소가 있다면 ARIA를 쓰지 말고 그 요소를 써라." ARIA는 **표준 태그로 해결이 안 될 때만** 보충으로 씁니다.

| 속성 | 의미 |
| --- | --- |
| `aria-label="설명"` | 화면에 보이는 텍스트가 없을 때 스크린 리더용 이름을 직접 지정 |
| `aria-labelledby="다른요소id"` | 다른 요소의 텍스트를 이 요소의 이름으로 사용 |
| `aria-hidden="true"` | 스크린 리더에게 "이건 읽지 마"(순수 장식 아이콘 등). **화면에는 계속 보임** |
| `aria-expanded="true/false"` | 접히고 펼쳐지는 요소(메뉴, 아코디언)의 현재 상태 |
| `aria-controls="다른요소id"` | 이 버튼이 어떤 요소를 제어하는지 연결 |
| `aria-live="polite"` | 이 영역의 내용이 바뀌면 **스크린 리더가 자동으로** 읽어줌(알림, 로딩 상태) |
| `aria-current="page"` | 현재 페이지/단계임을 표시 |
| `role="dialog"` 등 | 요소의 역할을 명시(표준 태그로 안 될 때만) |

### 12.4 포커스(focus)
키보드 Tab을 누르면 요소들이 순서대로 **포커스**를 받습니다. 포커스가 어디 있는지 **눈으로 보여야** 합니다(파란 테두리 등). `outline: none;`으로 이걸 없애버리고 대체물을 안 만드는 것은 흔한 접근성 실수입니다.

### 12.5 색 대비
글자색과 배경색의 명암 차이가 충분해야 합니다(WCAG 기준 일반 텍스트 4.5:1 이상 권장). 온라인 대비 검사 도구로 확인할 수 있습니다.

### 내 프로젝트에서 찾기
```html
<button class="menu-toggle journal-toggle" aria-label="저널 메뉴 열기"
        aria-expanded="false" aria-controls="nav-menu">
  <span aria-hidden="true">✣</span><span>Journal</span>
</button>
```
- `aria-label`: 버튼 안 글자가 "Journal"뿐이라 뜻이 불충분할 수 있어 스크린 리더용 설명을 명확히 추가.
- `aria-expanded`: 메뉴가 열렸는지 닫혔는지 상태를 스크린 리더에게 알림(JS가 여닫을 때 `true`/`false`로 갱신).
- `aria-controls="nav-menu"`: 이 버튼이 `id="nav-menu"` 목록을 제어한다고 연결.
- `<span aria-hidden="true">✣</span>`: 장식용 기호를 읽지 않도록 숨김. 반면 "Journal" 글자가 든 `<span>`은 안 숨겨서 실제로 읽히게 함.
- 폼의 `<small id="name-error" aria-live="...">` 류(있다면)는 오류 메시지가 생길 때 스크린 리더가 즉시 읽어주게 합니다.

### 확인 질문
1. ARIA의 제1원칙은?
2. `aria-hidden="true"`를 주면 화면에서 요소가 사라질까?
3. `outline: none;`을 포커스 스타일에 쓸 때 주의할 점은?

<details><summary>정답 보기</summary>

1. 대체할 표준 HTML 요소가 있다면 ARIA 대신 그 요소를 쓰라는 것입니다.
2. 아닙니다. 화면에는 그대로 보이고, 스크린 리더가 읽지 않을 뿐입니다.
3. 키보드 사용자가 지금 포커스가 어디 있는지 알 수 없게 되므로, 반드시 다른 포커스 표시(예: 테두리 색 변경)를 대신 제공해야 합니다.
</details>

---

## 13. 콘텐츠 모델 — 어떤 태그 안에 어떤 태그가 들어갈 수 있나

**핵심**: HTML 명세는 각 요소를 몇 가지 **카테고리**로 분류하고, "이 카테고리를 자식으로 받는 요소"를 정해둡니다. 전부 외울 필요는 없지만, 원리를 알면 "이거 넣어도 되나?"를 스스로 판단할 수 있습니다.

### 13.1 주요 카테고리(간단 버전)
| 카테고리 | 대표 요소 |
| --- | --- |
| Flow content(흐름) | 대부분의 body 안 요소 |
| Sectioning(구역) | `section` `article` `nav` `aside` |
| Heading(제목) | `h1`~`h6` |
| Phrasing(구문 = 옛 인라인) | `span` `a` `strong` `em` 등 |
| Interactive(상호작용) | `a` `button` `input` `select` |

### 13.2 실전에서 자주 걸리는 규칙
- `<p>` 안에는 **블록 요소**(`div`, `section`, 다른 `p` 등)를 넣을 수 없습니다. (`<p>글 <div>...</div></p>` 는 브라우저가 자동으로 `p`를 강제로 닫아버려 예상과 다른 구조가 됩니다.)
- `<a>` 안에는 블록 요소(예: `div`, `h1`)까지도 넣을 수 있습니다(HTML5부터 허용). 다만 `<a>` 안에 다른 `<a>`는 안 됩니다.
- `<button>` 안에 `<button>`은 안 됩니다.
- `<ul>`의 자식은 `<li>`만 허용됩니다(공백 텍스트 제외).
- `<table>`의 자식은 정해진 순서(`caption, colgroup, thead, tbody/tr, tfoot`)를 따릅니다.

### 13.3 확인하는 습관
헷갈리면 MDN의 해당 요소 문서에서 **"허용된 콘텐츠(Permitted content)"** 와 **"허용된 부모(Permitted parents)"** 항목을 봅니다. 외우기보다 **찾아보는 습관**이 실전에서 더 중요합니다.

### 확인 질문
1. `<p>` 태그 안에 `<div>`를 넣으면 브라우저는 어떻게 처리할까?

<details><summary>정답 보기</summary>

`<div>`는 `<p>`의 허용된 자식이 아니므로, 브라우저는 `<div>`를 만나는 순간 열려 있던 `<p>`를 자동으로 닫아버립니다. 의도와 다른 DOM 구조가 만들어질 수 있습니다.
</details>

---

## 14. 실전 도구와 습관

### 14.1 개발자 도구(DevTools)
- 브라우저에서 `F12` 또는 우클릭 → "검사"를 누르면 열립니다.
- **Elements(요소) 탭**: 지금 이 순간의 **실제 DOM**을 보여줍니다. 내가 짠 HTML 파일과 다를 수 있습니다(JS가 바꿔놓았을 수 있으므로).
- **Console(콘솔) 탭**: JavaScript 오류, `console.log()` 출력이 뜹니다. 빨간 글씨가 있으면 뭔가 문제가 있다는 뜻입니다.
- **Network(네트워크) 탭**: 이미지·CSS·API 요청이 성공(200)했는지 실패(404, 403 등)했는지 확인합니다.

### 14.2 검증(Validation)
[W3C Markup Validator](https://validator.w3.org/)에 HTML을 넣으면 문법 오류(닫는 태그 누락, 잘못된 중첩 등)를 잡아줍니다. 눈으로는 화면이 멀쩡해 보여도 내부 구조가 틀렸을 수 있습니다.

### 14.3 SEO 기본기
- 페이지마다 서로 다른 `<title>`과 `<meta name="description">`.
- `h1`은 하나, 제목 위계를 지킴.
- 이미지에 의미 있는 `alt`.
- 의미 있는 링크 텍스트("여기 클릭" 대신 "포트폴리오 보기").

### 14.4 파일 구조 관례
```
project/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── assets/
    └── images/
```
루트에 `index.html`을 두는 것은 GitHub Pages 같은 정적 호스팅이 기본으로 그 파일을 찾기 때문입니다.

### 확인 질문
1. Elements 탭에서 보이는 구조가 내가 저장한 HTML 파일과 다를 수 있는 이유는?
2. Network 탭에서 이미지 요청 옆에 404가 뜨면 무슨 뜻일까?

<details><summary>정답 보기</summary>

1. JavaScript가 실행되며 DOM을 동적으로 바꿨을 수 있기 때문입니다. Elements 탭은 파일이 아니라 지금 메모리의 DOM을 보여줍니다.
2. 그 경로에 파일을 찾지 못했다는 뜻입니다(경로 오타, 대소문자 불일치 등을 의심).
</details>

---

## 15. 요소 총정리 (레퍼런스 표)

> 실무에서 자주 쓰는 것부터 드물게 쓰는 것까지 모두 모았습니다. 처음부터 외우지 말고, 필요할 때 찾아보는 **사전**으로 쓰세요.

### 15.1 문서/메타데이터
`html` `head` `title` `base` `link` `meta` `style` `script` `noscript`

### 15.2 구획(섹션)
`body` `header` `nav` `main` `section` `article` `aside` `footer` `address` `h1`~`h6` `hgroup`

### 15.3 텍스트 콘텐츠
`p` `div` `hr` `pre` `blockquote` `ol` `ul` `menu` `li` `dl` `dt` `dd` `figure` `figcaption`

### 15.4 인라인 텍스트
`a` `em` `strong` `small` `s` `cite` `q` `dfn` `abbr` `ruby` `rt` `rp` `data` `time` `code` `var` `samp` `kbd` `sub` `sup` `i` `b` `u` `mark` `bdi` `bdo` `span` `br` `wbr`

### 15.5 편집 표시
`ins` `del`

### 15.6 이미지/미디어
`img` `iframe` `embed` `object` `picture` `source` `video` `audio` `track` `map` `area`

### 15.7 임베드/스크립팅
`canvas` `noscript` `script` `template` `slot`

### 15.8 표
`table` `caption` `colgroup` `col` `tbody` `thead` `tfoot` `tr` `td` `th`

### 15.9 폼
`form` `label` `input` `button` `select` `datalist` `optgroup` `option` `textarea` `output` `progress` `meter` `fieldset` `legend`

### 15.10 상호작용
`details` `summary` `dialog`

### 15.11 웹 컴포넌트 관련
`template` `slot` (커스텀 엘리먼트를 만들 때 쓰는 요소들. 지금은 이름만 알아두면 충분합니다)

### 15.12 폐지되었거나 비권장(만나면 "옛날 코드구나" 하고 넘기기)
`center` `font` `marquee` `blink` `big` `tt` `frame` `frameset` `noframes` `acronym` `applet` `basefont` `dir`(목록으로서의 dir, 메뉴 dir과는 다름) `strike`(→ `s`로 대체) — 이런 것들은 CSS나 다른 요소로 대체되었습니다.

---

## 16. 자주 하는 실수 체크리스트

- [ ] `<!DOCTYPE html>`을 맨 위에 썼는가
- [ ] `<html lang="ko">`를 썼는가
- [ ] `<meta charset="UTF-8">`이 head 상단에 있는가
- [ ] `<meta name="viewport">`를 넣었는가
- [ ] `<title>`을 페이지마다 다르게 넣었는가
- [ ] 모든 `<img>`에 알맞은 `alt`가 있는가(장식용은 `alt=""`)
- [ ] 모든 `<input>`에 연결된 `<label>`이 있는가
- [ ] 제목 태그(`h1`~`h6`)를 크기가 아니라 위계로 골랐는가, 건너뛰지 않았는가
- [ ] `<div>`/`<span>` 대신 쓸 수 있는 시맨틱 태그가 있었는가
- [ ] 새 탭 링크(`target="_blank"`)에 `rel="noopener noreferrer"`를 넣었는가
- [ ] 폼 안 버튼에 `type`을 명시했는가
- [ ] 들여쓰기로 중첩 구조가 눈에 보이는가
- [ ] 색으로만 정보를 전달하고 있진 않은가
- [ ] 키보드 Tab만으로 모든 기능을 쓸 수 있는가

---

## 17. 실습 — 손으로 직접 만들며 체득하기

> 읽기만 해서는 체득되지 않습니다. 아래 실습은 **하나의 결과물(자기소개 페이지)을 처음부터 끝까지 직접 타이핑**하며 각 장의 개념을 실제로 써보도록 설계했습니다. 복사-붙여넣기 대신 **직접 타이핑**하세요. 손이 오타를 내야 "왜 안 되지?"를 겪고, 그 과정에서 개념이 몸에 붙습니다.

### 실습 A. 처음부터 끝까지 쌓아 올리기 (약 2~3시간, 여러 세션에 나눠서)

**준비**: 빈 폴더를 만들고 `index.html` 파일 하나만 만드세요. 완성될 때까지 브라우저로 자주 열어 눈으로 확인하며 진행합니다.

| 단계 | 미션 | 확인 방법 |
| --- | --- | --- |
| 1 | `<!DOCTYPE html>`부터 `<head>`(charset, viewport, title)까지 **직접 타이핑**으로 뼈대를 세우세요(3장) | 브라우저 탭 제목이 바뀌는지 확인 |
| 2 | `<header>`에 이름을 `<h1>`으로, 그 아래 한 줄 소개를 `<p>`로 넣으세요(4·10장) | 제목이 하나뿐인지(h1) 확인 |
| 3 | `<nav>` 안에 `<ul><li><a href="#about">` 형식으로 메뉴 3개를 만들고, 실제로 클릭해서 페이지 안에서 이동하는지 확인하세요(5·6장) | 클릭 시 스크롤 이동 |
| 4 | `<main>` 안에 `id="about"`인 `<section>`을 만들고 자기소개 문단과 사진(`img`+`alt`)을 넣으세요(4·7·10장) | alt 텍스트를 이미지 대신 잠깐 파일명을 틀리게 해서 "대체 텍스트"가 뜨는지 확인 |
| 5 | 관심사를 `<ul><li>`로, 이력을 `<ol><li>`로 각각 만들어 **왜 다른 태그를 골랐는지** 스스로 설명해보세요(6장) | — |
| 6 | 연락처 섹션에 **폼**을 만드세요: 이름(`text`), 이메일(`email`), 문의(`textarea`), 제출 버튼. `label`마다 `for`를 연결하세요(9장) | 라벨 글자를 클릭했을 때 입력창에 커서가 가는지 확인(연결 성공의 증거) |
| 7 | `<footer>`에 저작권 문구를 `<small>`로 넣으세요(4장) | — |
| 8 | 전체 구조를 시맨틱하게 다시 점검: `div`로 만든 게 있다면 `section`/`article` 중 무엇이 더 맞는지 재검토하세요(10장) | — |

### 실습 B. 일부러 부수고 고치기 (버그를 겪어야 개념이 남습니다)
1. `label`의 `for` 값을 일부러 `input`의 `id`와 다르게 바꾸세요. 라벨 클릭이 안 먹히는 걸 확인한 뒤, 왜 그런지 설명하고 다시 고치세요(9.2절).
2. `<!DOCTYPE html>`을 지우고 저장한 뒤 [W3C Validator](https://validator.w3.org/)에 넣어 어떤 경고가 뜨는지 읽어보세요(3.2절).
3. 이미지의 `alt`를 지워보고, 개발자 도구의 Accessibility 패널(또는 스크린 리더 시뮬레이터)에서 어떻게 다르게 읽히는지 관찰한 뒤 되돌리세요(7.1·12장).
4. `<p>` 안에 `<div>`를 넣어보고, 개발자 도구 Elements 탭에서 **실제 DOM 구조가 내가 쓴 HTML과 다르게 자동으로 고쳐졌는지** 확인하세요(13.2절).
5. 폼 안의 버튼에서 `type="button"`을 지워보고, 페이지가 새로고침되는(제출되는) 것을 직접 겪어보세요(9.6절).

### 실습 C. 내 프로젝트와 연결하기
네 프로젝트의 `index.html`을 열고, 이 자료의 장 번호를 옆에 직접 적어보세요(파일에 주석으로 적어도 좋습니다). 예: `<nav aria-label="주요 메뉴">` 옆에 "5장(링크), 12장(접근성)"처럼. 이 과정을 끝까지 마치면, 네 코드 전체를 스스로 설명할 수 있는 상태가 됩니다.

---

## 18. 용어 사전

| 용어 | 뜻 |
| --- | --- |
| 마크업 언어 | 문서의 구조·의미를 표시만 하는 언어(HTML) |
| DOM | 브라우저가 HTML을 읽어 메모리에 만든 트리 구조 |
| 요소(element) | 태그+속성+내용의 전체 |
| 속성(attribute) | 요소에 붙는 추가 정보 |
| 파싱(parsing) | 텍스트를 읽어 구조로 바꾸는 과정 |
| 렌더링(rendering) | 구조를 실제 화면 픽셀로 그리는 과정 |
| 시맨틱(semantic) | "의미가 있는" |
| 접근성(a11y) | 장애·환경과 무관하게 누구나 쓸 수 있게 만드는 것 |
| 스크린 리더 | 화면 내용을 음성으로 읽어주는 보조기술 |
| 이스케이프 | 특수 의미가 있는 글자를 있는 그대로 표시하기 위한 대체 표기 |
| 캐시(cache) | 다시 요청하지 않도록 브라우저가 저장해둔 파일 사본 |
| 뷰포트(viewport) | 브라우저가 콘텐츠를 보여주는 영역(모바일에서 특히 중요) |

---

**HTML 편 끝.** 다음은 **CSS 편**입니다.
