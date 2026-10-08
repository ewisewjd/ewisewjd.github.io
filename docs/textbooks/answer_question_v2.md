# 코디세이 미션 1 — 질문 답변집 (answer_question_v2)

> 반응형 포트폴리오 웹사이트(HTML / CSS / JavaScript) 미션 정리 문서에 섞여 있던 질문에 전부 답한 문서입니다.
> 초보자 기준으로 **쉬운 말 → 비유 → 예시 코드** 순서로 설명했습니다.

## 이 문서 읽는 법

- 질문은 `Q.` 로 표시했습니다. 원문 질문의 오탈자는 살짝 고쳐서 옮겼습니다.
- 각 답변은 **한 줄 요약(💡)** 으로 시작하는 경우가 많습니다. 시간이 없으면 💡만 읽어도 됩니다.
- 코드 예시는 "이해용 최소 예제"입니다. 그대로 복사해도 동작하지만, 본인 프로젝트의 클래스명·id에 맞게 바꿔 쓰세요.

## ⚠️ 먼저 알아둘 두 가지

1. **"미션에 잘 반영되어 있는가?", "구현되어 있는가?" 류 질문**은 실제 `index.html`, `css/style.css`, `js/*.js` 파일을 봐야 답할 수 있습니다. 이 문서를 만든 대화에서는 그 파일들을 볼 수 없어서, 이런 질문은 **직접 점검하는 체크리스트**로 답했습니다. 체크리스트 옆에 ✅/❌를 직접 표시하고, 코드를 붙여주면 실제로 검토받을 수 있습니다.
2. **"나는 왜 이 구조를 설계했는가?"** 는 본인의 결정에 대한 질문이라 정답이 없습니다. 아래에는 **초안**만 적어두었으니 실제 코드를 보고 본인 말로 고쳐 쓰세요.

## 목차

1. 미션 소개
2. 최종 결과물
3. 과제 목표
4. 기능 요구사항
   - 4-1 프로젝트 기본 구성
   - 4-2 HTML 구조 (시맨틱 마크업)
   - 4-3 CSS 스타일링 (레이아웃 & 반응형)
   - 4-4 자바스크립트 기초 (DOM & 이벤트)
   - 4-5 인터랙션 구현
   - 4-6 폼 UX
   - 4-7 ES6+ 문법 & 배열 메서드
   - 4-8 비동기 처리 & API 연동
   - 4-9 상태 관리 패턴
   - 4-10 배포
5. 보너스 과제

---

# 1. 미션 소개

### Q. DOM이란 무엇인가?

💡 **브라우저가 HTML을 읽어서 만든, JavaScript가 만질 수 있는 "요소 나무(트리)"** 입니다.

- DOM은 **D**ocument **O**bject **M**odel의 줄임말입니다.
- 비유: HTML 파일은 **설계도(글자)**, DOM은 브라우저 메모리 안에 **실제로 지어진 건물**입니다. JavaScript는 건물 안에 들어가서 방(요소)을 찾고, 벽지(스타일)를 바꾸고, 가구(내용)를 옮깁니다.

```html
<body>
  <h1>안녕</h1>
  <p>소개글</p>
</body>
```

브라우저는 위 HTML을 이런 나무 구조로 바꿉니다.

```
document
└── html
    └── body
        ├── h1  → "안녕"
        └── p   → "소개글"
```

```js
const title = document.querySelector('h1'); // DOM에서 h1을 찾는다
title.textContent = '반가워요';              // 화면 글자가 바뀐다
```

⚠️ JavaScript가 바꾸는 것은 **HTML 파일이 아니라 DOM** 입니다. 그래서 새로고침하면 원래대로 돌아옵니다. (이게 뒤에 나오는 "로컬 스토리지"가 필요한 이유입니다.)

### Q. 사용자 이벤트란 무엇인가?

💡 **사용자가 한 행동(클릭, 입력, 스크롤, 제출 등)을 브라우저가 "신호"로 알려주는 것**입니다.

- 대표 이벤트: `click`(클릭), `input`(입력할 때마다), `submit`(폼 제출), `scroll`(스크롤), `keydown`(키 누름)
- 개발자는 "이 신호가 오면 이 함수를 실행해"라고 **등록**해 둡니다. 이 등록 작업이 `addEventListener` 입니다.
- 비유: 초인종. 손님이 누르면(이벤트) 집 안의 벨이 울리고(리스너), 내가 나가 본다(함수 실행).

```js
const btn = document.querySelector('#theme-toggle');

btn.addEventListener('click', () => {
  console.log('버튼이 눌렸다!');
});
```

### Q. 웹의 동작 원리는 어떻게 되는가?

💡 **주소 입력 → 서버에서 파일 받기 → 브라우저가 화면 그리기 → 사용자 조작 → JS가 화면 수정** 의 반복입니다.

1. 사용자가 주소(URL)를 입력합니다.
2. 브라우저가 **DNS**(주소록)로 서버의 위치(IP)를 찾습니다.
3. 브라우저가 서버에 **HTTP 요청**을 보내고, 서버가 **HTML 파일**을 응답합니다.
4. 브라우저가 HTML을 읽어 **DOM**을 만들고, `<link>`로 CSS, `<script>`로 JS 파일을 추가로 받아옵니다.
5. DOM + CSS를 합쳐 **레이아웃을 계산하고 화면에 그립니다.**
6. JavaScript가 실행되고 **이벤트를 기다립니다.**
7. 사용자가 뭔가 하면(이벤트) → JS가 DOM을 바꾸고 → 브라우저가 화면을 다시 그립니다.
8. 필요하면 JS가 `fetch`로 다른 서버(예: GitHub)에 데이터를 요청해 **JSON**을 받아옵니다.

이 미션의 핵심은 **7번 루프**(이벤트 → DOM 조작 → 화면 변화)를 직접 만들어 보는 것입니다.

### Q. 로딩 / 에러 / 빈 상태는 어떻게 되는 것인가?

💡 **서버에 데이터를 요청했을 때 나올 수 있는 4가지 결과를 각각 다른 화면으로 보여주는 것**입니다.

| 상태 | 뜻 | 화면에 보여줄 것 |
|---|---|---|
| 로딩 | 요청을 보냈고 아직 응답이 없음 | 스피너 또는 "로딩 중..." |
| 성공 | 데이터가 1개 이상 도착 | 카드 목록 |
| 빈 상태 | 요청은 성공했지만 데이터가 0개 | "표시할 프로젝트가 없습니다" |
| 에러 | 요청 실패(인터넷 끊김, 서버 오류, 호출 한도 초과 등) | "불러올 수 없습니다" + 재시도 버튼 |

- **왜 필요한가?** 이걸 안 만들면 사용자는 흰 화면만 보고 "고장인가? 기다려야 하나?"를 알 수 없습니다.
- **빈 상태와 에러는 다릅니다.** 빈 상태는 "정상인데 보여줄 게 없음", 에러는 "문제가 생김"입니다. 메시지가 달라야 합니다.
- 팁: 이 4가지는 **동시에 하나만** 참입니다. 그래서 변수 하나로 관리하면 편합니다. → `state = 'loading' | 'success' | 'empty' | 'error'`

### Q. 컴포넌트, 상태, 이벤트 개념은 무엇인가?

💡 **컴포넌트 = 재사용하는 화면 조각, 상태 = 화면을 결정하는 변하는 데이터, 이벤트 = 상태를 바꾸는 계기.**

- **컴포넌트**: 이 미션의 "프로젝트 카드 1개"가 컴포넌트의 좋은 예입니다. 카드 모양은 하나만 정의하고, 데이터만 바꿔서 여러 번 찍어냅니다. (붕어빵 틀 = 컴포넌트, 팥 = 데이터)
- **상태(state)**: 지금 화면이 어떤 모습이어야 하는지를 정하는 값. 예) `theme = 'dark'`, `isMenuOpen = true`
- **이벤트**: 상태를 바꾸는 행동. 예) 토글 버튼 클릭 → `theme`이 바뀜

React와의 관계:

```js
// 지금 하는 방식(순수 JS): 상태를 바꾸고, 화면도 내가 직접 고친다
state.theme = 'dark';
document.documentElement.dataset.theme = state.theme;
```

```jsx
// React: 상태만 바꾸면 화면은 React가 알아서 고친다
setTheme('dark');
```

React는 "**화면 = 상태를 넣으면 나오는 결과**"라는 발상입니다. 이 미션에서 손으로 하는 "DOM 직접 조작"이 React에서는 자동화된다는 것을 체감하는 것이 목표입니다.

---

# 2. 최종 결과물

### Q. 반응형 레이아웃 최적화는 어떻게 하는가?

💡 **화면 폭이 달라져도 깨지지 않게 "유연한 단위 + 미디어 쿼리 + flex/grid"를 씁니다.**

**1) viewport 메타 태그 (필수)**

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

이게 없으면 모바일 브라우저가 "데스크톱 폭"으로 그린 뒤 축소해서 보여줍니다.

**2) 유연한 단위**: 고정 `px` 대신 `%`, `rem`, `fr`, `max-width`를 씁니다.

```css
img { max-width: 100%; height: auto; }   /* 이미지가 화면 밖으로 안 나가게 */
.container { max-width: 1100px; margin: 0 auto; padding: 0 1rem; }
```

**3) 미디어 쿼리**: 화면 폭에 따라 스타일을 바꿉니다. (모바일 퍼스트: 작은 화면 기준으로 먼저 쓰고 넓어질 때 추가)

```css
.cards { display: grid; grid-template-columns: 1fr; gap: 1rem; }

@media (min-width: 768px) {
  .cards { grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 1024px) {
  .cards { grid-template-columns: repeat(3, 1fr); }
}
```

**4) flex / grid의 자동 줄바꿈**: 카드 목록은 `auto-fit + minmax`를 쓰면 미디어 쿼리 없이도 열 수가 자동 조절됩니다. (4-3에서 자세히)

**확인 방법**: 크롬에서 `F12` → 왼쪽 위 **기기 모양 아이콘**(Toggle device toolbar) → 폭을 360px / 768px / 1024px로 바꿔 보기.

### Q. 섹션은 어떻게 만들고 분할되는가?

💡 **"주제 하나 = `<section>` 하나 = 제목(h2) 하나"** 로 나누고, 네비게이션 링크와 `id`로 연결합니다.

```html
<header>
  <nav>
    <a href="#about">About</a>
    <a href="#skills">Skills</a>
  </nav>
</header>

<main>
  <section id="hero">...</section>
  <section id="about"><h2>About</h2>...</section>
  <section id="skills"><h2>Skills</h2>...</section>
  <section id="projects"><h2>Projects</h2>...</section>
  <section id="contact"><h2>Contact</h2>...</section>
</main>

<footer>...</footer>
```

- `<a href="#about">` 를 누르면 `id="about"` 인 요소로 이동합니다. **`#` 뒤의 이름과 `id`가 정확히 같아야** 합니다.
- 섹션마다 위아래 여백을 똑같이 주면 깔끔합니다: `section { padding: 4rem 0; }`
- 상단에 고정된 네비게이션이 있으면 이동했을 때 제목이 가려집니다. 이럴 때: `section { scroll-margin-top: 70px; }`
- 섹션의 내용 폭은 `.container` 로 통일합니다. (위 코드 참고)

### Q. 폼 유효성 검사를 어떻게 구현하는가?

💡 **제출(submit) 이벤트에서 입력값을 검사하고, 문제가 있으면 제출을 막고(preventDefault) 에러 메시지를 보여줍니다.**

```js
const form = document.querySelector('#contact-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();                       // 1) 기본 제출(새로고침) 막기
  const name = form.querySelector('#name').value.trim();
  if (name === '') {                            // 2) 검사
    // 3) 에러 메시지 표시
    return;
  }
  // 4) 통과하면 성공 메시지
});
```

자세한 완성 예제는 **4-6 폼 UX** 를 보세요.

### Q. 다크모드 토글, 햄버거 메뉴, 부드러운 스크롤, 스크롤 애니메이션은 어떻게 구현되는가?

💡 **넷 다 "이벤트가 오면 → 클래스나 속성을 바꾸고 → CSS가 모양을 바꾸는" 같은 패턴입니다.**

| 기능 | 핵심 기술 | 한 줄 원리 |
|---|---|---|
| 다크모드 | CSS 변수 + `data-theme` 속성 + localStorage | 버튼 클릭 → `data-theme="dark"` 속성 변경 → CSS 변수 값이 바뀜 → 저장 |
| 햄버거 메뉴 | `classList.toggle('active')` | 버튼 클릭 → `active` 클래스 붙였다 뗐다 → CSS가 메뉴를 보였다 숨겼다 |
| 부드러운 스크롤 | `scroll-behavior: smooth` (CSS) | 앵커 이동을 "순간이동"이 아닌 "미끄러지듯" 이동 |
| 스크롤 애니메이션 | `IntersectionObserver` + CSS transition | 요소가 화면에 들어오면 `visible` 클래스 추가 → CSS가 서서히 나타나게 |

각각의 상세 코드는 **4-5 인터랙션 구현** 에 있습니다.

### Q. 동적 렌더링은 무엇인가?

💡 **HTML을 미리 손으로 써두는 게 아니라, JavaScript가 데이터를 받아 실행 중에 HTML을 만들어 화면에 넣는 것**입니다.

- **정적**: HTML에 카드 10개를 직접 씀 → 저장소가 늘면 HTML을 직접 고쳐야 함
- **동적**: 데이터(저장소 목록)를 받아서 → 카드를 자동 생성 → 저장소가 늘어도 코드는 그대로

```js
const repos = [{ name: 'my-app' }, { name: 'blog' }];   // 데이터

const html = repos
  .map((repo) => `<article class="card">${repo.name}</article>`)
  .join('');                                             // 데이터 → HTML 문자열

document.querySelector('#projects-list').innerHTML = html; // 화면에 삽입
```

### Q. GitHub API는 어떻게 가져오는가?

💡 **GitHub 서버의 정해진 주소(엔드포인트)로 요청을 보내면, 저장소 정보를 JSON 형태로 돌려줍니다.**

- 주소: `https://api.github.com/users/본인아이디/repos`
- **직접 눈으로 확인**해 보세요. 이 주소를 브라우저 주소창에 붙이면 JSON 텍스트가 보입니다.
- 응답에는 저장소마다 `name`(이름), `description`(설명), `html_url`(저장소 주소), `language`(주 언어), `stargazers_count`(별 개수), `fork`(포크 여부) 등이 들어 있습니다.
- 공개 저장소는 **로그인 없이** 가져올 수 있습니다.
- ⚠️ 로그인 없이 부르면 **시간당 호출 횟수 제한**이 있습니다(대략 시간당 60회 수준, 정확한 값은 GitHub 문서 확인). 새로고침을 너무 많이 하면 에러 상태가 뜰 수 있어, "에러 상태 처리"를 직접 체험해 볼 좋은 기회이기도 합니다.

### Q. 그것을 어떻게 구현하는가?

💡 **fetch로 요청 → JSON으로 변환 → 배열 메서드로 카드 HTML 만들기 → 화면에 넣기**, 4단계입니다.

```js
async function loadRepos() {
  const response = await fetch('https://api.github.com/users/본인아이디/repos'); // 1) 요청
  const repos = await response.json();                                          // 2) JSON 변환
  const html = repos.map((repo) => `<article>${repo.name}</article>`).join(''); // 3) 카드 만들기
  document.querySelector('#projects-list').innerHTML = html;                     // 4) 화면에 넣기
}
loadRepos();
```

로딩/에러/빈 상태까지 포함한 완성형은 **4-8** 에 있습니다.

### Q. 로컬 스토리지는 무엇이며, 다크모드 설정이 어떻게 거기에 저장되는가?

💡 **브라우저 안에 있는 작은 저장 공간으로, 글자(문자열)를 "이름표: 값" 형태로 저장합니다.**

- 사이트(도메인)별로 따로 저장됩니다. 용량은 약 5MB 정도입니다.
- **탭을 닫아도, 브라우저를 껐다 켜도** 사용자가 직접 지우기 전까지 남습니다.
- 쓰는 방법은 딱 3개입니다.

```js
localStorage.setItem('theme', 'dark');      // 저장
const theme = localStorage.getItem('theme'); // 읽기 (없으면 null)
localStorage.removeItem('theme');            // 삭제
```

다크모드에 적용하면:

```js
const toggle = document.querySelector('#theme-toggle');

toggle.addEventListener('click', () => {
  const current = document.documentElement.dataset.theme;      // 'dark' 또는 undefined
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;                // 화면 전환
  localStorage.setItem('theme', next);                          // 선택을 저장
});
```

### Q. 새로고침 후에도 유지된다면 그 이유는 무엇인가?

💡 **JS 변수와 DOM 변경은 새로고침하면 사라지지만, localStorage는 브라우저에 남아 있기 때문입니다. 그리고 페이지가 열릴 때 그 값을 읽어서 다시 적용해 주기 때문입니다.**

흐름:

```
[처음 방문] 라이트 → 사용자가 다크로 전환 → localStorage에 'dark' 저장
[새로고침] 페이지가 처음부터 다시 로드(DOM 초기화 = 라이트로 돌아감)
           → 코드 시작 부분에서 localStorage를 읽음 → 'dark'이면 다시 다크 적용
```

```js
// 페이지가 열릴 때 실행되는 코드(파일 맨 위쪽)
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.documentElement.dataset.theme = savedTheme;
}
```

"저장"만 하고 "읽어서 적용"을 빼먹으면 유지되지 않습니다. 두 가지가 세트입니다.

### Q. GitHub Pages란 무엇이며 어떻게 사용하는가?

💡 **GitHub 저장소에 올린 HTML/CSS/JS 파일을 그대로 웹사이트로 공개해 주는 무료 호스팅 서비스**입니다.

- "정적 사이트"만 가능합니다. (HTML/CSS/JS 같이 서버에서 계산할 필요 없는 파일. Node 서버나 DB는 안 됩니다.)
- 사용법:
  1. GitHub에 저장소를 만들고 `index.html`이 **최상위 폴더**에 오도록 올립니다(push).
  2. 저장소의 **Settings → Pages** 로 이동합니다.
  3. Source를 **Deploy from a branch** 로 하고, 브랜치는 `main`, 폴더는 `/ (root)` 를 선택한 뒤 Save.
  4. 잠시(1~몇 분) 후 상단에 사이트 주소가 표시됩니다.
- 주소 규칙: `https://아이디.github.io/저장소이름/` (저장소 이름이 `아이디.github.io` 이면 `https://아이디.github.io/`)

### Q. 배포는 어떻게 이루어지는가?

💡 **파일을 push하면 GitHub가 그 파일들을 자동으로 웹 서버에 올려줍니다. 수정할 때도 똑같이 push하면 됩니다.**

- 저장소의 **Actions** 탭에 "pages build and deployment"가 자동으로 실행되는 것을 볼 수 있습니다. 초록 체크 표시가 나오면 배포 완료입니다.
- 수정 → 배포 순서: 코드 수정 → `git add` → `git commit` → `git push` → 자동 재배포

**배포 후 자주 생기는 문제 (꼭 확인)**

| 증상 | 원인 | 해결 |
|---|---|---|
| CSS/이미지가 안 나옴 | 파일 이름 **대문자/소문자** 불일치 (내 컴퓨터는 구분 안 해도 서버는 구분함) | `Images/a.png` vs `images/a.png` 확인 |
| 프로젝트 사이트에서 CSS가 안 먹힘 | 경로를 `/css/style.css` 처럼 **`/`로 시작**함 | `css/style.css` 처럼 **상대 경로**로 |
| 고쳤는데 그대로 보임 | 브라우저 캐시 | `Ctrl + Shift + R` 강력 새로고침 |
| 404 페이지 | `index.html`이 최상위에 없음 | 파일 위치 확인 |

시크릿 창에서 배포 주소를 열어서 **로컬에서 되던 기능이 다 되는지** 확인하는 것이 마지막 점검입니다.

---

# 3. 과제 목표

> 이 섹션의 질문 중 일부(화살표 함수, fetch, 상태 흐름 등)는 4장에서 코드와 함께 자세히 다룹니다. 여기서는 핵심 답을 먼저 정리합니다.

### Q. HTML에서 시맨틱 태그를 왜 사용하는가?

💡 **태그 이름 자체가 "이 부분이 무엇인지" 알려주기 때문입니다.** `<div>`는 아무 의미 없는 빈 상자입니다.

이유 4가지:

1. **접근성**: 시각장애인이 쓰는 스크린 리더가 `<nav>`, `<main>`을 인식해서 "메뉴로 바로 이동", "본문으로 바로 이동"이 가능합니다.
2. **검색 엔진(SEO)**: 검색 엔진이 페이지의 어디가 본문이고 어디가 메뉴인지 파악하기 쉽습니다.
3. **가독성·유지보수**: `<div class="a1">` 20개보다 `<header>`, `<nav>`, `<main>`이 훨씬 읽기 쉽습니다.
4. **공짜 기능**: `<button>`은 키보드(Tab, Enter)로 눌리고, `<a>`는 링크 기능이 기본 제공됩니다. `div`로 흉내 내면 이걸 전부 직접 만들어야 합니다.

```html
<!-- ❌ div만 사용 -->
<div class="top"><div class="menu">...</div></div>
<div class="content">...</div>

<!-- ✅ 시맨틱 -->
<header><nav>...</nav></header>
<main>...</main>
```

### Q. 나는 왜 이 구조를 설계하였는가? (초안 — 본인 말로 고쳐 쓰세요)

이 질문은 정답이 없고, **본인이 어떤 이유로 선택했는지**를 설명하는 질문입니다. 코드를 보지 않고 쓴 초안이니, 실제 코드와 맞는지 확인하고 고치세요.

- **header/nav → main(섹션들) → footer 구조**: 페이지를 "머리 / 본문 / 꼬리"로 나누면 역할이 분명해지고, 스크린 리더나 검색 엔진도 이해하기 쉽습니다.
- **섹션 순서 (Hero → About → Skills → Projects → Contact)**: 방문자가 "이 사람은 누구지? → 뭘 할 줄 알지? → 증거는? → 연락은 어떻게?" 순서로 읽도록 배치했습니다.
- **폴더 분리 (css/, js/, images/)**: 역할별로 파일을 나누면 수정할 곳을 바로 찾을 수 있고, 파일이 커져도 관리가 쉽습니다.
- **모바일 퍼스트**: 모바일을 기본으로 만들고 화면이 넓어질 때 확장하는 것이 코드가 단순하고 모바일 사용자 경험을 놓치지 않습니다.

💡 **"왜?"에 답하는 3단 구조**: ① 어떤 문제/요구가 있었나 → ② 무엇을 선택했나 → ③ 왜 그게 맞았나(다른 선택지 대비). 동료 평가에서 질문을 받으면 이 순서로 말하세요.

### Q. CSS에서 Flexbox와 Grid의 차이는 무엇이고, 각각 언제 사용하는가?

💡 **Flexbox는 "한 줄(1차원)" 정렬, Grid는 "바둑판(2차원)" 배치입니다.**

| | Flexbox | Grid |
|---|---|---|
| 방향 | 가로 **또는** 세로 한 방향 | 가로 **와** 세로 동시에 |
| 비유 | 한 줄로 서는 줄서기 | 엑셀 표 / 바둑판 |
| 기준 | 안에 든 **내용의 크기**가 배치를 결정 | **칸(격자)** 을 먼저 만들고 내용을 넣음 |

**언제 쓰나**

- Flexbox → 네비게이션(로고 왼쪽, 메뉴 오른쪽), 버튼 여러 개 나란히, 카드 안의 내부 정렬
- Grid → 카드 목록(여러 행과 열), 전체 페이지 레이아웃

```css
/* Flexbox: 한 줄 정렬 */
nav { display: flex; justify-content: space-between; align-items: center; }

/* Grid: 여러 줄·여러 칸 */
.cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
```

기억법: "한 줄이면 flex, 칸이 여러 줄이면 grid". 둘은 같이 써도 됩니다. (카드 목록은 grid, 카드 안쪽은 flex)

### Q. querySelector로 DOM을 선택하고 addEventListener로 이벤트를 연결하는 흐름을 설명하라

💡 **① 찾는다 → ② 무엇을 할지 함수로 준비한다 → ③ "이 이벤트가 오면 이 함수를 실행해"라고 연결한다.**

```js
// ① 요소를 찾는다
const btn = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');

// ② + ③ 클릭 이벤트가 오면 실행할 함수를 연결한다
btn.addEventListener('click', () => {
  menu.classList.toggle('active');   // ④ DOM(클래스)이 바뀜 → CSS가 화면을 바꿈
});
```

### Q. querySelector는 무엇이고 어떻게 DOM을 선택하는가?

💡 **CSS 선택자를 그대로 써서 HTML 요소를 찾는 함수입니다. 조건에 맞는 첫 번째 요소 하나를 돌려줍니다.**

```js
document.querySelector('#menu');        // id가 menu인 요소
document.querySelector('.card');        // class가 card인 첫 번째 요소
document.querySelector('nav a');        // nav 안의 첫 번째 a
document.querySelectorAll('.card');     // 조건에 맞는 요소 "전부" (NodeList)
```

- 못 찾으면 `null`을 돌려주고, 그 상태로 `null.classList` 처럼 쓰면 에러가 납니다. 오타가 없는지 확인하세요.
- `querySelectorAll` 결과는 `forEach`는 되지만 `map`은 안 됩니다. `map`이 필요하면 `Array.from(...)` 으로 배열로 바꾸세요.

### Q. addEventListener는 어떻게 이벤트를 연결하는가?

💡 **`요소.addEventListener('이벤트 종류', 실행할 함수)` 형태로, 재료 두 개를 넘겨서 연결합니다.**

```js
btn.addEventListener('click', handleClick);   // ✅ 함수 이름만 넘긴다
btn.addEventListener('click', handleClick()); // ❌ ()를 붙이면 "지금 바로 실행"해 버린다
```

- 같은 요소에 여러 개를 연결해도 서로 덮어쓰지 않습니다.
- 함수 안에서 `event` 를 받으면 이벤트 정보(`event.target` = 누른 요소 등)를 쓸 수 있습니다.

### Q. 화살표 함수, 구조 분해 할당, 배열 메서드는 무엇인가?

💡 **모두 "코드를 짧고 읽기 쉽게 쓰기 위한 문법"입니다.** 자세한 내용과 예제는 **4-7** 을 보세요.

- 화살표 함수: `function(x) { return x*2 }` → `(x) => x*2`
- 구조 분해 할당: 객체에서 값을 꺼내 변수로 만드는 줄임 문법
- 배열 메서드(`map`, `filter`, `forEach`): 반복문을 직접 쓰지 않고 배열을 변환·걸러내기·순회

### Q. fetch, async/await, 로딩/성공/실패 UI는 무엇인가?

💡 **`fetch` = 서버에 데이터를 요청하는 함수, `async/await` = 응답이 올 때까지 "기다렸다가" 다음 줄을 실행하게 해주는 문법, 로딩/성공/실패 = 기다리는 동안·성공·실패했을 때 각각 다른 화면**입니다. 자세한 내용과 완성 코드는 **4-8** 에 있습니다.

### Q. 이벤트 → 상태 변경 → DOM 업데이트가 어떻게 연결되는지 설명하라

💡 **사용자가 뭔가 한다(이벤트) → 변수 값이 바뀐다(상태 변경) → 그 값에 맞게 화면을 고친다(DOM 업데이트).**

다크모드 토글로 설명하면:

1. **이벤트**: 사용자가 토글 버튼을 클릭한다.
2. **상태 변경**: 현재 테마가 `'light'` → `'dark'` 로 바뀐다. (그리고 localStorage에 저장)
3. **DOM 업데이트**: `<html data-theme="dark">` 로 속성이 바뀐다. → CSS의 `[data-theme="dark"]` 변수가 적용되어 전체 색이 바뀐다.

```js
btn.addEventListener('click', () => {            // 1) 이벤트
  theme = theme === 'dark' ? 'light' : 'dark';   // 2) 상태 변경
  document.documentElement.dataset.theme = theme; // 3) DOM 업데이트
});
```

이 3단계를 **말로 설명할 수 있는 것**이 과제 목표입니다. 4-9에서 세 가지 흐름으로 더 자세히 봅니다.

### Q. React의 상태-렌더링 흐름이란 무엇인가?

💡 **React는 "상태(데이터)만 바꾸면, 화면을 다시 그리는 일은 React가 알아서 한다"는 방식입니다.**

- 지금 미션: 상태를 바꾼 뒤 **DOM 수정 코드를 내가 직접** 씁니다. (`classList.toggle`, `textContent = ...`)
- React: 상태를 바꾸는 함수(`setTheme`)만 호출하면 **React가 바뀐 부분만 계산해서 화면에 반영**합니다.
- 그래서 이 미션에서 "이벤트 → 상태 → DOM" 흐름을 손으로 해보는 것이 React 공부의 밑바탕이 됩니다. React가 자동으로 해주는 일이 정확히 무엇인지 알게 되기 때문입니다.

```jsx
function ThemeButton() {
  const [theme, setTheme] = useState('light');   // 상태
  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      현재: {theme}                                {/* 상태가 바뀌면 화면이 자동으로 다시 그려짐 */}
    </button>
  );
}
```

---

# 4. 기능 요구사항

## 4-1. 프로젝트 기본 구성

### Q. 프로젝트 파일을 나누는 이유는 무엇인가?

💡 **역할별로 나누면 "어디를 고쳐야 하는지" 바로 알 수 있고, 파일이 커져도 관리할 수 있기 때문입니다.**

```
portfolio/
├── index.html      ← 뼈대(구조와 내용)
├── css/
│   └── style.css   ← 겉모습(색, 배치)
├── js/
│   └── main.js     ← 동작(클릭하면 어떻게 될지)
└── images/
    └── profile.jpg ← 이미지
```

- 비유: 집을 지을 때 **뼈대(HTML)**, **인테리어(CSS)**, **전기·배관(JS)** 을 따로 관리하는 것과 같습니다.
- 한 파일에 다 넣으면 수백 줄이 섞여서 색을 바꾸려다 동작 코드를 건드리는 실수가 생깁니다.
- 브라우저가 CSS·JS 파일을 **캐시**(저장)해 두어서, 여러 페이지에서 같은 파일을 쓰면 더 빠르게 열립니다.

### Q. 파일들 간에 어떻게 연결이 이루어지는가?

💡 **`index.html`이 `<link>`, `<script>`, `<img>` 태그로 다른 파일의 "경로"를 적어서 연결합니다.**

```html
<head>
  <link rel="stylesheet" href="css/style.css">      <!-- CSS 연결 -->
</head>
<body>
  <img src="images/profile.jpg" alt="프로필 사진">   <!-- 이미지 연결 -->
  <script src="js/main.js" defer></script>           <!-- JS 연결 -->
</body>
```

경로 읽는 법 (현재 파일 기준):

| 쓰는 방법 | 뜻 |
|---|---|
| `css/style.css` | 같은 위치에 있는 `css` 폴더 안의 `style.css` |
| `./css/style.css` | 위와 같음 (`./` 는 "현재 폴더") |
| `../images/a.png` | 한 단계 **위** 폴더로 올라가서 `images/a.png` |

### Q. css, html, javascript 파일이 많아진다면 어떻게 연결하면 되는가?

💡 **`<link>`와 `<script>`를 여러 개 적으면 됩니다. 다만 "순서"가 중요합니다.**

**CSS 여러 개**

```html
<link rel="stylesheet" href="css/base.css">
<link rel="stylesheet" href="css/layout.css">
<link rel="stylesheet" href="css/dark.css">
```

- **뒤에 있는 파일이 앞의 같은 규칙을 덮어씁니다.** (다크모드 파일은 보통 마지막에)
- CSS 안의 `@import` 로도 합칠 수 있지만, 로딩이 느려져서 `<link>` 여러 개를 더 권장합니다.

**JS 여러 개**

```html
<script src="js/theme.js" defer></script>
<script src="js/menu.js" defer></script>
<script src="js/github.js" defer></script>
```

- `defer`를 붙이면 **적은 순서대로** 실행됩니다.
- 파일끼리 변수 이름이 겹쳐 충돌하는 문제가 생기면 **ES 모듈**(`import`/`export`)을 쓰는 방법이 있습니다.

```html
<script type="module" src="js/main.js"></script>
```

```js
// js/theme.js
export function toggleTheme() { ... }

// js/main.js
import { toggleTheme } from './theme.js';
```

- 모듈은 브라우저 기본 기능이라 "외부 라이브러리 금지" 규칙과 무관합니다.
- ⚠️ 파일을 더블클릭해서 `file://` 로 열면 모듈이 보안 문제로 막힙니다. VS Code의 **Live Server** 같은 로컬 서버로 여세요.

---

## 4-2. HTML 구조 (시맨틱 마크업)

### Q. div와 시맨틱 태그의 차이는 무엇인가?

💡 **`div`는 의미 없는 상자, 시맨틱 태그는 "이 상자가 무엇인지" 이름이 붙은 상자입니다.** 화면에서는 똑같이 보일 수도 있지만, 브라우저·스크린 리더·검색 엔진이 이해하는 정보가 다릅니다.

| 태그 | 의미 | 이 미션에서 |
|---|---|---|
| `<header>` | 머리 영역 | 로고 + 네비게이션이 든 상단 |
| `<nav>` | 주요 메뉴 링크 모음 | 섹션 이동 링크 |
| `<main>` | 페이지의 핵심 본문 (한 페이지에 1개) | Hero ~ Contact 전체 |
| `<section>` | 주제가 하나인 덩어리 (보통 제목이 있음) | About, Skills 등 |
| `<article>` | 혼자서도 의미가 통하는 독립된 콘텐츠 | 프로젝트 카드 하나 |
| `<footer>` | 꼬리 영역 | 저작권, 소셜 링크 |

`div`는 "묶기만 하고 싶을 때"(스타일 적용용 상자) 쓰면 됩니다. 시맨틱 태그가 맞는 자리에 `div`를 쓰지 않는 것이 핵심입니다.

### Q. 각 항목이 제대로 구현되어 있는가? (체크리스트)

코드를 직접 볼 수 없어서 **점검 방법**으로 답합니다. 하나씩 확인하고 ✅/❌ 를 표시하세요.

| # | 요구사항 | 확인 방법 | 결과 |
|---|---|---|---|
| 1 | 전체를 div로만 감싸지 않고 시맨틱 태그 사용 | `index.html`에서 `<header> <nav> <main> <section> <article> <footer>` 검색 | |
| 2 | Hero 섹션 (인사말, CTA 버튼) | 첫 섹션에 인사말과 버튼(링크)이 있는지 | |
| 3 | About (자기소개, 프로필 이미지) | 글과 `<img>`가 있는지 | |
| 4 | Skills (기술 스택 목록) | `<ul><li>` 등으로 목록이 있는지 | |
| 5 | Projects (GitHub API 연동 카드) | 처음엔 비어 있고 JS가 카드를 넣는 구조인지 | |
| 6 | Contact (문의 폼) | 이름, 이메일, 메시지 입력칸 3개 | |
| 7 | Footer (저작권, 소셜 링크) | 문구와 링크가 있는지 | |
| 8 | 네비게이션 앵커 링크 | 링크의 `href="#..."` 값이 섹션 `id`와 **정확히 같은지** | |
| 9 | 모든 이미지에 의미 있는 `alt` | 검색창에 `<img` 를 넣고 alt가 다 있는지, `alt=""`이나 "이미지"처럼 뭉뚱그리지 않았는지 | |
| 10 | 폼에 `label` 연결 (for-id) | 각 `<label for="x">` 와 `<input id="x">` 가 짝인지 | |

🔍 **빠르게 점검하는 법**: 크롬 F12 → **Lighthouse** 탭 → Accessibility 항목을 돌리면 alt 누락, label 누락을 자동으로 잡아줍니다.

### Q. 폼 요소에 label이 올바르게 연결되어 있다는 것은 무엇을 말하는가?

💡 **`<label>`의 `for` 값과 `<input>`의 `id` 값이 같아서, 둘이 "한 쌍"으로 묶여 있다는 뜻입니다.**

```html
<!-- ✅ 올바르게 연결됨 -->
<label for="email">이메일</label>
<input type="email" id="email" name="email">

<!-- ❌ 연결 안 됨: for와 id가 다름 -->
<label for="mail">이메일</label>
<input type="email" id="email">
```

### Q. 왜 폼 요소와 라벨이 for-id로 연결되어야 하는가?

💡 **연결하면 "글자를 눌러도 입력칸이 선택"되고, 스크린 리더가 입력칸을 읽어줄 수 있기 때문입니다.**

1. **클릭 영역이 넓어집니다**: "이메일" 글자를 눌러도 입력칸에 커서가 갑니다. (모바일에서 특히 편함)
2. **접근성**: 스크린 리더가 입력칸에 도착했을 때 "이메일 입력칸"이라고 읽어줍니다. 연결이 없으면 그냥 "입력칸"이라고만 읽어서 무엇을 쓸지 알 수 없습니다.
3. **`placeholder`(안 글자)는 label의 대체재가 아닙니다.** 글자를 입력하면 사라지기 때문입니다.

### Q. CTA 버튼이란 무엇인가?

💡 **CTA = Call To Action, 방문자가 "다음 행동"을 하도록 유도하는 버튼**입니다.

- 이 미션에서는 Hero 섹션의 "프로젝트 보기", "연락하기" 같은 버튼입니다.
- 좋은 CTA는 **동사로 시작하고 구체적**입니다. ("클릭" ❌ → "프로젝트 보기" ✅)
- 보통 눈에 띄는 색과 크기로 만들고, 섹션 링크(`href="#projects"`)와 연결합니다.

```html
<a href="#projects" class="btn btn-primary">프로젝트 보기</a>
```

### Q. 모든 요소에 alt 속성이 있는가?

💡 **"모든 요소"가 아니라 "모든 `<img>` 이미지"에 있어야 합니다.** 위 체크리스트 9번으로 점검하세요.

- **alt** = 이미지가 안 뜰 때 보이는 글자이자, 스크린 리더가 읽어주는 이미지 설명입니다.
- 좋은 alt는 이미지가 **전하는 정보**를 설명합니다.
  - ❌ `alt="사진"`, `alt="image1"`
  - ✅ `alt="노트북 앞에서 웃고 있는 안흥의 프로필 사진"`
- 순수 장식 이미지는 `alt=""` (빈 값)로 두어 스크린 리더가 건너뛰게 합니다. (alt 속성 자체를 빼먹는 것과는 다릅니다.)

---

## 4-3. CSS 스타일링 (레이아웃 & 반응형)

### Q. 외부 스타일시트를 사용하는 이유는 무엇인가?

💡 **HTML(구조)과 CSS(모양)를 분리하면 관리가 쉽고, 여러 페이지가 같은 스타일 파일을 재사용할 수 있기 때문입니다.**

- 색을 바꾸고 싶을 때 `style.css` 한 곳만 고치면 됩니다. (HTML 곳곳에 `style="..."`이 있으면 하나하나 찾아 고쳐야 함)
- 브라우저가 CSS 파일을 저장(캐시)해 두어 다음 방문 때 더 빨리 로드됩니다.
- HTML이 짧아져서 읽기 쉽습니다.

### Q. :root로 색상, 폰트, 간격을 정의하는 이유는 무엇인가?

💡 **한 번만 정의해 두고 여러 곳에서 이름으로 불러 쓰면, 나중에 한 줄만 고쳐서 전체를 바꿀 수 있기 때문입니다.**

```css
:root {
  --color-bg: #ffffff;
  --color-text: #1a1a1a;
  --color-primary: #3b82f6;
  --font-base: 'Noto Sans KR', sans-serif;
  --space-md: 1rem;
}

body   { background: var(--color-bg); color: var(--color-text); font-family: var(--font-base); }
.btn   { background: var(--color-primary); padding: var(--space-md); }
```

- 브랜드 색을 바꾸려면 `--color-primary` **한 줄만** 고치면 버튼, 링크, 제목이 전부 바뀝니다.
- 다크모드도 이 변수 값만 바꾸는 방식으로 구현합니다. (아래 질문)

**"미션에 잘 반영되어 있는가?" → 점검 방법**

- [ ] `style.css` 맨 위에 `:root { ... }` 가 있다.
- [ ] 색상, 폰트, 간격이 변수로 정의되어 있다.
- [ ] 본문 곳곳에서 `#3b82f6` 같은 색 값을 **직접** 쓰지 않고 `var(--...)` 로 쓴다. (`Ctrl+F`로 `#` 검색: `:root`와 다크 변수 정의 부분 이외에서 색 코드가 많이 나오면 반영이 덜 된 것)

### Q. 다크모드용 CSS 변수를 어떻게 정의하며 이를 어떻게 조작하는가?

💡 **`[data-theme="dark"]` 안에서 같은 변수 이름의 값만 다시 정의하고, JS는 `<html>`의 `data-theme` 속성만 바꿉니다.**

```css
:root {                     /* 기본(라이트) */
  --color-bg: #ffffff;
  --color-text: #1a1a1a;
}

[data-theme="dark"] {       /* html에 data-theme="dark"가 붙으면 덮어씀 */
  --color-bg: #121212;
  --color-text: #f0f0f0;
}
```

```js
// 조작: 속성 하나만 바꾼다. 나머지는 CSS가 알아서
document.documentElement.setAttribute('data-theme', 'dark');   // 다크
document.documentElement.removeAttribute('data-theme');         // 라이트로 복귀
```

- `document.documentElement` = `<html>` 태그입니다. 여기 속성이 붙으면 그 아래 모든 요소가 영향을 받습니다.
- **핵심**: 요소마다 색을 바꾸는 게 아니라, **변수 값을 통째로 교체**합니다. 그래서 `var(--color-bg)` 를 쓴 모든 곳이 한꺼번에 바뀝니다.

### Q. 네비게이션에 Flexbox를 사용하는 이유는 무엇인가?

💡 **메뉴는 "한 줄"로 나열되는 1차원 배치이고, "로고는 왼쪽 / 메뉴는 오른쪽" 정렬이 flex의 특기이기 때문입니다.**

```css
nav {
  display: flex;
  justify-content: space-between;  /* 양 끝으로 벌림 → 로고 왼쪽, 메뉴 오른쪽 */
  align-items: center;             /* 세로로 가운데 정렬 */
}
.nav-links { display: flex; gap: 1.5rem; }   /* 메뉴 링크들을 가로로 나란히 */
```

같은 걸 `float`나 `margin`으로 하면 훨씬 복잡하고 화면 폭이 바뀔 때 잘 깨집니다.

### Q. Projects 카드에 Grid를 사용하는 이유는 무엇인가?

💡 **카드는 행과 열이 있는 2차원 배치이고, `auto-fit + minmax`를 쓰면 화면 폭에 맞춰 열 수가 자동으로 조절되기 때문입니다.**

```css
.project-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
}
```

읽는 법: "카드 한 장 폭은 **최소 260px, 최대는 남는 공간을 똑같이 나눈 값**. 260px이 안 들어가면 다음 줄로 넘겨라."

- 좁은 화면(모바일): 1열 → 넓어지면 2열 → 3열 (**미디어 쿼리 없이 자동**)
- 저장소 개수가 늘어도 자동으로 줄이 늘어납니다.

**"구현 사항이 잘 반영되어 있는가?" → 점검 방법**

- [ ] 카드 목록 컨테이너에 `display: grid` 가 있다.
- [ ] `repeat(auto-fit, minmax(..., 1fr))` 형태다. (`auto-fill`이어도 동작하지만 미션은 `auto-fit`을 요구)
- [ ] 브라우저 폭을 줄였다 늘렸다 할 때 열 수가 1 → 2 → 3으로 자연스럽게 바뀐다.

### Q. 모바일 퍼스트는 무엇이며, 왜 그렇게 작성하는가?

💡 **가장 작은 화면(모바일)용 CSS를 기본으로 먼저 쓰고, 화면이 넓어질 때 `min-width` 미디어 쿼리로 덧붙이는 방식입니다.**

```css
/* 기본 = 모바일 */
.cards { grid-template-columns: 1fr; }

/* 768px "이상"이면 덧붙임 */
@media (min-width: 768px)  { .cards { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .cards { grid-template-columns: repeat(3, 1fr); } }
```

왜 이렇게 하나?

1. **모바일 사용자가 많아서** 가장 중요한 화면부터 챙깁니다.
2. 모바일 레이아웃은 보통 단순(한 열)해서 기본 코드가 짧아지고, 큰 화면에서만 복잡한 규칙을 추가하면 됩니다.
3. 반대(데스크톱 기준으로 먼저 쓰고 `max-width`로 줄이는 방식)는 줄일 때 **덮어쓸 규칙이 많아져** 코드가 복잡해집니다.

### Q. 브레이크 포인트란 무엇이며, 왜 768px / 1024px로 잡는가?

💡 **레이아웃이 바뀌는 화면 폭의 기준점입니다.** 768px(태블릿), 1024px(데스크톱)는 **관례적으로 많이 쓰는 값**입니다.

- 768px = 세로로 든 태블릿(예: 아이패드 세로 폭)에 가까운 값, 1024px = 가로로 든 태블릿·작은 노트북 폭에 가까운 값입니다.
- 이 값들이 "법칙"은 아닙니다. 사실 **가장 좋은 기준은 "내 콘텐츠가 깨지기 시작하는 폭"** 입니다. 브라우저 폭을 줄이다가 레이아웃이 어색해지는 지점에 브레이크 포인트를 잡는 것이 원칙입니다.
- 미션에서는 정해진 값을 쓰도록 했으니 768/1024로 하고, 그 이유는 "널리 쓰이는 기기 폭 기준이라서"라고 설명하면 됩니다.

### Q. 모바일에서 네비게이션이 숨겨지고 햄버거 버튼이 나오도록 하려면 어떻게 해야 하는가?

💡 **모바일에서는 메뉴를 기본으로 숨기고 햄버거 버튼을 보이게, 넓은 화면(768px 이상)에서는 반대로 만듭니다.**

```html
<button id="hamburger" class="hamburger" aria-label="메뉴 열기">☰</button>
<ul id="menu" class="nav-links">...</ul>
```

```css
/* 모바일(기본): 메뉴 숨김, 햄버거 표시 */
.nav-links { display: none; flex-direction: column; }
.nav-links.active { display: flex; }        /* active가 붙으면 보임 */
.hamburger { display: block; }

/* 768px 이상: 메뉴 표시, 햄버거 숨김 */
@media (min-width: 768px) {
  .nav-links { display: flex; flex-direction: row; }
  .hamburger { display: none; }
}
```

클릭했을 때 메뉴가 열리고 닫히는 **JS 부분은 4-5** 에 있습니다. CSS는 "어떻게 보일지", JS는 "언제 `active`를 붙일지"를 담당합니다.

### Q. hover 효과는 무엇인가?

💡 **마우스 포인터를 요소 위에 올렸을 때 모양이 바뀌는 효과**입니다. `:hover` 로 씁니다.

```css
.btn:hover { background: var(--color-primary-dark); }
.card:hover { transform: translateY(-4px); }
```

⚠️ 모바일은 마우스가 없어서 hover가 없거나 "터치 후 계속 유지"처럼 어색하게 동작할 수 있습니다. **hover에만 의존하는 정보는 만들지 마세요.** (효과는 "있으면 더 좋은 보너스")

### Q. transition은 무엇인가?

💡 **스타일이 바뀔 때 "순간적으로" 바뀌지 않고 "부드럽게 변하는 시간"을 주는 속성**입니다.

```css
.btn {
  background: var(--color-primary);
  transition: background 0.3s ease, transform 0.3s ease;  /* 무엇을, 얼마 동안, 어떤 속도로 */
}
.btn:hover {
  background: var(--color-primary-dark);
  transform: translateY(-2px);
}
```

- `transition`은 **원래 상태(`.btn`)에** 써야 마우스가 떠날 때도 부드럽게 돌아갑니다. (`:hover` 안에만 쓰면 나갈 때는 뚝 끊깁니다.)
- 시간은 0.2~0.4초 정도가 자연스럽습니다.

### Q. 왜 hover와 transition을 적용하는가?

💡 **"이거 누를 수 있어요"라는 신호를 주고, 움직임을 부드럽게 해서 사용자가 변화를 자연스럽게 인지하게 하기 위해서입니다.**

- 버튼·카드가 반응하지 않으면 죽어 있는 화면처럼 느껴집니다.
- 반응이 너무 갑자기 바뀌면 눈이 피로하고 조잡해 보입니다.
- 단, **과하면 오히려 방해**가 됩니다. 짧고 은은하게 쓰세요.

### Q. box-shadow는 무엇인가?

💡 **요소 뒤에 그림자를 그려서 "떠 있는 느낌(입체감)"을 주는 속성**입니다.

```css
.card { box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); }
/*                  가로 세로 흐림 색(투명도) */
```

- 값 읽는 법: `가로 오프셋 / 세로 오프셋 / 흐림 정도 / 색`
- 카드가 배경에서 분리되어 보이게 하고, hover 때 그림자를 키우면 "떠오르는" 효과를 낼 수 있습니다.
- 다크모드에서는 검은 그림자가 잘 안 보이므로 그림자 색도 변수로 만들어 바꿔주면 좋습니다.

---

## 4-4. 자바스크립트 기초 (DOM & 이벤트)

### Q. defer 속성은 왜 사용하는가?

💡 **HTML을 다 읽은 뒤에 JS를 실행시키기 위해서입니다.** 그래야 JS가 요소를 찾을 때 요소가 이미 존재합니다.

```html
<script src="js/main.js" defer></script>
```

- `defer` 없이 `<head>`에 쓰면: 브라우저가 JS를 먼저 실행 → 아직 HTML 요소가 안 만들어짐 → `querySelector`가 `null` → 에러
- `defer`가 있으면: HTML 읽기는 계속 진행하고, JS는 **다 읽은 뒤** 실행합니다. 페이지도 더 빨리 뜹니다.
- `<body>` 맨 끝에 스크립트를 두는 옛날 방식과 결과는 비슷하지만, `defer`가 `<head>`에 두어도 되고 더 깔끔합니다.

### Q. var 대신 const, let만 사용하는 이유는 무엇인가?

💡 **`var`는 범위 규칙이 헷갈려 버그를 만들기 쉽고, `const`/`let`은 범위가 명확하고 실수를 막아주기 때문입니다.**

| | `var` | `let` | `const` |
|---|---|---|---|
| 범위 | 함수 전체 (블록 무시) | 블록 `{ }` 안 | 블록 `{ }` 안 |
| 값 다시 넣기 | 가능 | 가능 | **불가** |
| 같은 이름 재선언 | 가능(위험) | 불가 | 불가 |

```js
const name = '안흥';  // 바뀌지 않을 값 → const (기본은 const로 쓰기)
let count = 0;        // 바뀔 값 → let
count = count + 1;
```

기본은 **const**, 값이 바뀌어야 할 때만 **let**입니다. (`const` 객체/배열의 "내용"은 바꿀 수 있고, 변수에 다른 값을 통째로 넣는 것만 막습니다.)

### Q. HTML에 onclick 속성은 왜 사용하지 않는가?

💡 **HTML(구조)에 JS(동작)가 섞여서 관리가 어렵고, 한 요소에 이벤트를 하나만 붙일 수 있는 한계가 있기 때문입니다.**

```html
<!-- ❌ HTML에 동작이 섞임 -->
<button onclick="toggleMenu()">☰</button>

<!-- ✅ HTML은 구조만 -->
<button id="hamburger">☰</button>
```

- 버튼이 20개면 HTML 20곳을 고쳐야 합니다. JS 파일에서 한 번에 관리하는 것이 훨씬 쉽습니다.
- 보안 정책(CSP)이 엄격한 사이트에서는 인라인 이벤트가 막히기도 합니다.

### Q. 반대로 addEventListener로 이벤트를 연결하는 이유는 무엇인가?

💡 **HTML과 JS를 분리할 수 있고, 한 요소에 이벤트를 여러 개 붙일 수 있으며, 나중에 떼어낼 수도 있기 때문입니다.**

```js
btn.addEventListener('click', openMenu);
btn.addEventListener('click', trackClick);    // 같은 이벤트에 여러 개 OK (덮어쓰지 않음)
btn.removeEventListener('click', trackClick); // 필요 없으면 떼어낼 수도 있음
```

### Q. DOM 조작은 어떻게 하며, 선택 옵션에는 어떤 것들이 있는가?

💡 **① 요소를 찾고 → ② 내용/속성/클래스를 바꾸고 → ③ 필요하면 새로 만들어 붙이거나 지웁니다.**

**요소를 찾는 방법들**

| 방법 | 돌려주는 것 | 비고 |
|---|---|---|
| `getElementById('menu')` | 요소 1개 | id로만 찾음, 빠름 |
| `getElementsByClassName('card')` | 요소 여러 개 (HTMLCollection) | 살아있는 목록 |
| `getElementsByTagName('a')` | 요소 여러 개 | 태그 이름으로 |
| `querySelector('.card')` | 첫 번째 요소 1개 | CSS 선택자 그대로 |
| `querySelectorAll('.card')` | 요소 전부 (NodeList) | `forEach` 사용 가능 |

**바꾸는 방법들**

```js
el.textContent = '글자';                 // 글자 바꾸기
el.innerHTML = '<b>굵게</b>';            // HTML로 바꾸기
el.classList.add('active');              // 클래스 추가
el.setAttribute('aria-expanded', 'true'); // 속성 바꾸기
el.style.color = 'red';                  // 스타일 직접 (권장하지 않음, 클래스가 더 좋음)

const p = document.createElement('p');   // 새 요소 만들기
p.textContent = '새 문단';
parent.appendChild(p);                   // 붙이기
el.remove();                             // 지우기
```

### Q. 왜 여기서는 querySelector, querySelectorAll로 요소를 선택하도록 하였는가?

💡 **하나의 문법(CSS 선택자)으로 id, class, 태그, 조합까지 전부 찾을 수 있어서 배우기도 쉽고 실무에서도 가장 많이 쓰기 때문입니다.**

- `getElementById` 는 `querySelector('#id')`, `getElementsByClassName` 은 `querySelectorAll('.class')` 로 대체됩니다.
- CSS를 이미 배웠다면 새로 외울 문법이 거의 없습니다.
- `nav a.active`, `.card:first-child` 같은 **복잡한 조건**도 한 번에 됩니다.
- `querySelectorAll`은 `forEach`를 바로 쓸 수 있어서, 반복 작업(모든 카드에 이벤트 붙이기)이 편합니다.

### Q. 내용 조작은 어떻게 하는 것이며, textContent와 innerHTML은 각각 무엇이고 왜 사용하는가?

💡 **`textContent`는 글자로만, `innerHTML`은 HTML 태그로 해석해서 넣습니다.**

```js
el.textContent = '<b>안녕</b>';  // 화면에: <b>안녕</b>  (태그가 글자 그대로 보임)
el.innerHTML   = '<b>안녕</b>';  // 화면에: 안녕(굵게)   (태그가 해석됨)
```

| | `textContent` | `innerHTML` |
|---|---|---|
| 넣는 것 | 순수 글자 | HTML 태그 포함 문자열 |
| 언제 | 이름, 메시지, 에러 문구 등 **글자만** 바꿀 때 | 카드 여러 개처럼 **구조 있는 HTML**을 만들어 넣을 때 |
| 보안 | 안전 | ⚠️ 위험할 수 있음 |

⚠️ **보안 주의(XSS)**: `innerHTML`에 **사용자가 입력한 글**이나 **외부 데이터**를 그대로 넣으면, 그 안에 악성 `<script>` 같은 코드가 섞여 있을 때 실행될 수 있습니다. 규칙: **글자만 바꿀 땐 `textContent`**, `innerHTML`은 내가 만든 템플릿에만 쓰고, 외부 데이터는 신경 써서 다루세요. (GitHub 저장소의 `description` 같은 값도 외부 데이터입니다.)

### Q. 클래스를 조작하는 방법은 무엇이 있으며, classList.add / remove / toggle은 어떤 기능을 하고 왜 사용하는가?

💡 **`classList`로 클래스를 붙이고(add), 떼고(remove), 있으면 떼고 없으면 붙입니다(toggle).**

```js
menu.classList.add('active');      // 붙이기 (이미 있어도 중복 안 됨)
menu.classList.remove('active');   // 떼기
menu.classList.toggle('active');   // 있으면 떼고, 없으면 붙임 → 스위치
menu.classList.contains('active'); // 있는지 확인 → true/false
```

**왜 쓰나?** 모양은 **CSS가** 정하고, JS는 클래스만 바꿔서 "상태"를 알려주는 방식이 가장 깔끔합니다. (`el.style.display = 'none'` 처럼 JS가 직접 스타일을 건드리는 것보다 관리가 쉽습니다.)

- `add` : 항상 켜야 할 때 (예: 스크롤 300px 넘으면 버튼 보이기)
- `remove` : 항상 꺼야 할 때 (예: 300px 미만이면 버튼 숨기기)
- `toggle` : 누를 때마다 켜고 끌 때 (예: 햄버거 메뉴)

### Q. 이벤트 처리는 어떻게 하며, click, submit, scroll, input은 무엇인가?

💡 **`addEventListener('이벤트 종류', 함수)` 로 처리합니다. 네 가지는 "언제 발생하는가"가 다릅니다.**

| 이벤트 | 언제 발생 | 이 미션에서 |
|---|---|---|
| `click` | 요소를 클릭(터치)했을 때 | 햄버거, 다크모드 토글, 맨 위로 버튼 |
| `submit` | 폼을 제출할 때 (버튼 클릭 또는 Enter) | 문의 폼 검증 |
| `scroll` | 스크롤할 때 | 네비 배경 변경, 맨 위로 버튼 표시 |
| `input` | 입력칸의 값이 바뀔 때마다 | 실시간 입력 검증(선택) |

```js
window.addEventListener('scroll', () => { console.log(window.scrollY); });
form.addEventListener('submit', (event) => { event.preventDefault(); });
emailInput.addEventListener('input', () => { /* 입력할 때마다 검사 */ });
```

- `submit`은 **`<form>` 요소에** 붙입니다. 제출 버튼에 `click`을 붙이면 Enter로 제출할 때 놓칩니다.
- `scroll`은 아주 많이 발생하므로 안에서 **무거운 작업은 피하세요.**

### Q. event.preventDefault()는 무엇이며 왜 사용하는가?

💡 **브라우저가 원래 하려던 기본 동작을 막는 함수**입니다.

- 폼 `submit`의 기본 동작: 서버로 전송하면서 **페이지를 새로고침**합니다. → 화면에 띄워둔 에러 메시지·입력값이 사라집니다.
- 링크 `<a>`의 기본 동작: 다른 주소로 이동합니다.

```js
form.addEventListener('submit', (event) => {
  event.preventDefault();       // 새로고침을 막고, JS로 직접 처리한다
  // 검증하고, 에러/성공 메시지를 표시한다
});
```

---

## 4-5. 인터랙션 구현

### Q. 인터랙션은 어떻게 구현되는가?

💡 **모든 인터랙션은 같은 3단계입니다: ① 이벤트를 감지 → ② 클래스/속성(상태)을 바꿈 → ③ CSS가 모양을 바꿈.**

| 기능 | ① 이벤트 | ② 바뀌는 것 | ③ CSS가 하는 일 |
|---|---|---|---|
| 햄버거 메뉴 | 버튼 `click` | 메뉴에 `active` 클래스 토글 | `.active`일 때 메뉴 표시 |
| 부드러운 스크롤 | 메뉴 링크 `click` | (CSS만으로 처리) | `scroll-behavior: smooth` |
| 맨 위로 버튼 | `scroll` | `scrollY ≥ 300` 이면 `show` 클래스 | `.show`일 때 버튼 표시 |
| 네비 배경 변경 | `scroll` | `scrollY ≥ 60` 이면 `scrolled` 클래스 | `.scrolled`일 때 배경색 변경 |
| 다크모드 | 토글 `click` | `data-theme` 속성 | 다크 변수 적용 |
| 스크롤 애니메이션 | 요소가 화면에 진입 | `visible` 클래스 추가 | opacity·transform 전환 |

### Q. 모바일에서 어떻게 햄버거 버튼이 나오며, 버튼 클릭 시 메뉴가 나타나게 하는가?

💡 **"버튼이 보이는지"는 CSS(미디어 쿼리)가, "메뉴가 열리는지"는 JS(클래스 토글)가 담당합니다.**

- 버튼이 나오는 것: 4-3의 CSS (`768px` 미만에서 `.hamburger { display: block }`, 메뉴 `display: none`)
- 클릭하면 열리는 것: 아래 JS

```js
const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
});
```

`active` 클래스가 붙으면 CSS의 `.nav-links.active { display: flex; }` 규칙이 적용되어 메뉴가 나타납니다.

**더하면 좋은 것 (접근성·편의)**

```js
hamburger.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('active');           // toggle은 결과(true/false)를 돌려줌
  hamburger.setAttribute('aria-expanded', String(isOpen));  // 스크린 리더에게 열림/닫힘 알림
});

menu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => menu.classList.remove('active')); // 링크를 누르면 메뉴 닫기
});
```

### Q. 다시 클릭 시 메뉴가 사라지게 하는 방법은 무엇인가?

💡 **`classList.toggle`이 이미 해결합니다. 클래스가 있으면 떼고, 없으면 붙이기 때문에 같은 버튼을 다시 누르면 `active`가 떨어져 메뉴가 숨겨집니다.**

```
첫 클릭:  active 없음 → 붙임 → 메뉴 보임
두 번째:  active 있음 → 뗌   → 메뉴 숨김
```

`if (열려있나) {닫기} else {열기}` 를 직접 쓰지 않아도 되는 것이 toggle의 장점입니다.

### Q. classList.toggle을 사용하는 방법과 왜 사용하는가?

💡 **"스위치"처럼 켜고 끄는 동작을 한 줄로 만들어 주기 때문입니다.**

```js
el.classList.toggle('active');           // 있으면 뗌, 없으면 붙임
el.classList.toggle('show', true);       // 두 번째 값이 true면 "붙임", false면 "뗌" (조건부 스위치)
```

두 번째 인자를 쓰는 방식은 스크롤 이벤트에서 아주 유용합니다.

```js
topBtn.classList.toggle('show', window.scrollY >= 300);   // 300 이상이면 붙이고, 아니면 뗌
```

### Q. 부드러운 스크롤은 어떻게 구현하는가?

💡 **CSS 한 줄이면 됩니다.**

```css
html { scroll-behavior: smooth; }
```

- 이 한 줄로 `<a href="#about">` 를 눌렀을 때 순간이동이 아니라 **미끄러지듯** 이동합니다.
- JS로 직접 제어할 수도 있습니다.

```js
document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
window.scrollTo({ top: 0, behavior: 'smooth' });
```

- 고정 네비게이션이 제목을 가리면: `section { scroll-margin-top: 70px; }`
- 움직임이 불편한 사용자를 배려하려면:

```css
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
}
```

### Q. "스크롤 300px 이상에서 버튼이 나타난다"는 것은 어떤 것을 말하는가?

💡 **페이지를 위에서부터 300px 넘게 내렸을 때 "맨 위로" 버튼을 보여주고, 그보다 위에 있으면 숨기는 것**입니다.

- 맨 위에 있을 때는 올라갈 곳이 없으니 버튼이 필요 없고, 많이 내려왔을 때만 필요하기 때문입니다.
- 현재 스크롤 위치는 `window.scrollY` 로 알 수 있습니다. (맨 위 = 0, 내릴수록 커짐)
- 300은 **자유롭게 바꿀 수 있는 기준값**이고, 바꾸면 **README에 명시**해야 합니다.

```js
const topBtn = document.querySelector('#scroll-top');
const SCROLL_TOP_BUTTON_AT = 300;   // README에 적을 기준값

window.addEventListener('scroll', () => {
  topBtn.classList.toggle('show', window.scrollY >= SCROLL_TOP_BUTTON_AT);
});
```

```css
.scroll-top { opacity: 0; pointer-events: none; transition: opacity 0.3s; }
.scroll-top.show { opacity: 1; pointer-events: auto; }
```

### Q. 클릭 시 페이지 맨 위로 이동하는 것은 a 태그를 이용한 것인가?

💡 **`<a>`로도, `<button>` + JS로도 가능합니다. 미션은 "클릭하면 맨 위로 이동"만 요구합니다.** 어느 쪽을 골라도 되지만 이유를 설명할 수 있어야 합니다.

**방법 1) `<button>` + `scrollTo`** (추천)

```html
<button id="scroll-top" class="scroll-top" aria-label="맨 위로 이동">↑</button>
```

```js
topBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
```

**방법 2) `<a href="#hero">`** (JS 없이 링크 + CSS의 `scroll-behavior`로 이동)

- 의미상: `<a>` = "다른 곳으로 이동(링크)", `<button>` = "화면에서 어떤 동작 실행". "맨 위로 올리는" 것은 **동작**에 가까워서 `<button>`을 권하는 경우가 많습니다.
- `<a href="#top">`은 주소창에 `#top`이 남는 것이 단점입니다.

### Q. 네비게이션 배경색 변경은 어떻게 구현되는가?

💡 **스크롤 위치가 60px 이상이면 `<header>`에 클래스를 붙이고, CSS가 그 클래스가 있을 때 배경색을 바꿉니다.** (맨 위로 버튼과 같은 원리)

```js
const header = document.querySelector('header');
const NAV_CHANGE_AT = 60;   // README에 적을 기준값

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY >= NAV_CHANGE_AT);
});
```

```css
header { background: transparent; transition: background 0.3s, box-shadow 0.3s; }
header.scrolled { background: var(--color-bg); box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
```

두 기능을 한 `scroll` 이벤트 안에서 같이 처리해도 됩니다.

### Q. 다크모드는 어떻게 만들어지는가?

💡 **① CSS에 다크 변수 정의 → ② 토글 시 `data-theme` 속성 변경 → ③ localStorage에 저장 → ④ 페이지가 열릴 때 저장값 복원.** 네 조각이 한 세트입니다.

```js
const themeToggle = document.querySelector('#theme-toggle');
const root = document.documentElement;

// ④ 페이지가 열릴 때: 저장된 값이 있으면 적용
const saved = localStorage.getItem('theme');
if (saved) root.dataset.theme = saved;

// ②③ 토글 시: 속성 변경 + 저장
themeToggle.addEventListener('click', () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  localStorage.setItem('theme', next);
});
```

- `root.dataset.theme` 은 `<html data-theme="...">` 속성을 읽고 쓰는 방법입니다.
- 시스템(OS)의 다크모드 설정을 따르게 하는 방법은 **5장 보너스**에 있습니다.

### Q. Intersection Observer는 무엇이며, 임계값은 무엇을 말하는 것인가?

💡 **Intersection Observer = "이 요소가 화면에 들어왔나?"를 감시해 주는 브라우저 기능이고, 임계값(threshold) = 요소가 "얼마나 보여야" 반응할지 정하는 비율(0~1)입니다.**

- 비유: 경비원에게 "이 상자가 화면에 20% 이상 보이면 알려줘"라고 맡기는 것.
- 예전에는 `scroll` 이벤트에서 위치를 계속 계산해야 했지만, 이 기능은 필요할 때만 알려줘서 **성능이 좋고 코드도 짧습니다.**

```js
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {                 // 화면에 들어왔다
        entry.target.classList.add('visible');    // 클래스 추가 → CSS 애니메이션 시작
        observer.unobserve(entry.target);         // 한 번만 재생하고 감시 종료
      }
    });
  },
  { threshold: 0.2 }                              // 요소의 20%가 보이면 실행
);

document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
```

```css
.fade-in { opacity: 0; transform: translateY(20px); transition: opacity 0.6s, transform 0.6s; }
.fade-in.visible { opacity: 1; transform: none; }
```

| 임계값 | 의미 |
|---|---|
| `0` | 1px이라도 보이면 |
| `0.2` | 20% 보이면 (미션 권장 시작점) |
| `1` | 100% 다 보여야 ⚠️ |

⚠️ `1`처럼 너무 크게 잡으면, **화면보다 큰 요소는 절대 100% 보일 수 없어서 애니메이션이 영영 안 나옵니다.** 값을 바꾸면 README에 명시하세요.

---

## 4-6. 폼 UX

### Q. 여러 개 폼의 필수값 검증은 어떻게 구현하는가?

💡 **검사할 입력칸들을 목록(배열)으로 정리해 두고, 제출할 때 하나씩 돌면서 검사합니다.** 칸이 늘어나도 코드가 늘지 않습니다.

먼저 HTML입니다. **에러 메시지 자리를 각 입력칸 바로 아래에 미리 만들어 둡니다.**

```html
<form id="contact-form" novalidate>
  <div class="form-group">
    <label for="name">이름</label>
    <input type="text" id="name" name="name">
    <p class="error" id="name-error" aria-live="polite"></p>
  </div>

  <div class="form-group">
    <label for="email">이메일</label>
    <input type="email" id="email" name="email">
    <p class="error" id="email-error" aria-live="polite"></p>
  </div>

  <div class="form-group">
    <label for="message">메시지</label>
    <textarea id="message" name="message" rows="5"></textarea>
    <p class="error" id="message-error" aria-live="polite"></p>
  </div>

  <button type="submit">보내기</button>
  <p id="form-success" class="success" hidden>메시지가 전송되었습니다. 감사합니다!</p>
</form>
```

- `novalidate` : 브라우저의 기본 검증 말풍선을 끄고, **내가 만든 검증**을 쓰겠다는 뜻입니다.
- `aria-live="polite"` : 에러 문구가 바뀌면 스크린 리더가 읽어 줍니다.

이제 JS입니다.

```js
const form = document.querySelector('#contact-form');
const success = document.querySelector('#form-success');
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// 검사할 칸과 검사 규칙을 목록으로 정리 (통과하면 '' , 문제 있으면 메시지를 돌려줌)
const fields = [
  { id: 'name',    check: (v) => (v ? '' : '이름을 입력해 주세요.') },
  { id: 'email',   check: (v) => !v ? '이메일을 입력해 주세요.'
                              : !EMAIL_PATTERN.test(v) ? '올바른 이메일 형식이 아닙니다.' : '' },
  { id: 'message', check: (v) => (v.length >= 10 ? '' : '메시지를 10자 이상 입력해 주세요.') },
];

function showError(id, message) {
  document.querySelector(`#${id}-error`).textContent = message;                  // 메시지 표시/삭제
  document.querySelector(`#${id}`).classList.toggle('invalid', message !== ''); // 빨간 테두리
}

form.addEventListener('submit', (event) => {
  event.preventDefault();                       // 새로고침 막기
  let isValid = true;

  fields.forEach(({ id, check }) => {
    const value = document.querySelector(`#${id}`).value.trim();  // 앞뒤 공백 제거
    const message = check(value);
    showError(id, message);
    if (message) isValid = false;
  });

  success.hidden = !isValid;                    // 모두 통과하면 성공 메시지 표시
  if (isValid) form.reset();                    // 입력칸 비우기
});
```

`trim()` 을 쓰는 이유: 공백 스페이스만 입력한 것도 "빈 값"으로 처리하기 위해서입니다.

### Q. 이메일 형식 검증은 어떻게 이루어지는가?

💡 **"이메일답게 생겼는지"를 정규 표현식(패턴)으로 검사합니다.**

```js
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
EMAIL_PATTERN.test('a@b.com');   // true
EMAIL_PATTERN.test('abc');       // false
```

패턴 풀이:

| 조각 | 의미 |
|---|---|
| `^` ... `$` | 문자열 처음부터 끝까지 전체가 규칙에 맞아야 함 |
| `[^\s@]+` | 공백과 `@`를 제외한 글자가 1개 이상 (아이디 부분) |
| `@` | 골뱅이 하나 |
| `[^\s@]+` | 도메인 이름 |
| `\.` | 점 하나 |
| `[^\s@]+` | `com` 같은 끝부분 |

- 이 패턴은 **"@와 점이 제자리에 있는 정도"만 확인하는 간단한 검사**입니다. 완벽한 이메일 검증은 불가능하고(실제로 존재하는 주소인지는 메일을 보내봐야 앎), 학습용으로는 충분합니다.
- HTML의 `<input type="email">` 도 브라우저가 기본 검사를 해주지만, 위에서 `novalidate` 로 껐기 때문에 JS 검증이 필요합니다. (에러 메시지를 원하는 위치·문구로 보여주기 위해서)

### Q. 에러 메시지가 입력 필드 근처에 표시되게 하려면 어떻게 해야 하는가?

💡 **에러 메시지용 `<p>`를 각 입력칸 바로 아래에 미리 두고, 검사 결과를 그 `<p>`의 `textContent`에 넣습니다.**

- 위 HTML처럼 `input#email` 바로 다음에 `p#email-error` 를 둡니다. 그러면 화면에서도 그 칸 바로 아래에 보입니다.
- `id`를 `칸id-error` 규칙으로 통일하면 JS에서 `#${id}-error` 로 한 번에 찾을 수 있습니다.
- 스타일: 에러 글자는 빨간색, 입력칸에는 `.invalid` 클래스로 빨간 테두리를 줍니다.

```css
.error { color: #d93025; font-size: 0.875rem; min-height: 1.25em; }  /* min-height: 메시지가 나올 때 화면이 덜컥 밀리지 않게 */
input.invalid, textarea.invalid { border-color: #d93025; }
```

### Q. event.preventDefault()는 왜 사용하고 어떻게 사용하는가?

💡 **폼 제출의 기본 동작(페이지 새로고침)을 막아서, 검증하고 메시지를 띄우는 일을 JS로 직접 하기 위해서입니다.**

- 사용법: `submit` 이벤트 함수의 **첫 줄**에서 `event.preventDefault()` 를 호출합니다. (함수 파라미터로 `event`를 받아야 합니다.)
- 안 쓰면: 제출 즉시 페이지가 새로고침되면서 에러 메시지도 입력값도 사라지고, 성공 메시지는 볼 틈도 없습니다.

### Q. 성공 메시지는 어떻게 표현되는가?

💡 **처음엔 숨겨져 있던 문구를, 모든 검사를 통과했을 때 보이게 바꿉니다.**

```html
<p id="form-success" class="success" hidden>메시지가 전송되었습니다. 감사합니다!</p>
```

```js
success.hidden = false;      // 보이게
// 또는 success.textContent = '...'; success.classList.add('show');
```

- `hidden` 속성은 HTML 기본 기능이라 CSS 없이도 숨김/표시가 됩니다.
- 성공 메시지는 몇 초 뒤 사라지게 할 수도 있습니다: `setTimeout(() => { success.hidden = true; }, 3000);`
- ⚠️ 이 미션에서는 **진짜 서버로 전송하지 않고** 화면에 성공 문구만 보여줍니다. 실제 이메일 전송은 5장 보너스를 보세요.

---

## 4-7. ES6+ 문법 & 배열 메서드

### Q. 화살표 함수는 무엇이며, 왜, 어떻게 사용하는가?

💡 **함수를 짧게 쓰는 문법입니다. `function` 대신 `=>` 를 씁니다.**

```js
// 기존 함수
function double(x) { return x * 2; }

// 화살표 함수
const double = (x) => { return x * 2; };

// 더 줄이기: 본문이 식 하나면 { }와 return을 생략
const double = (x) => x * 2;

// 파라미터가 하나면 ( ) 도 생략 가능 (읽기 쉽게 ( )를 쓰는 것도 좋음)
const double = x => x * 2;

// 파라미터가 없으면 빈 ( )
const hello = () => console.log('안녕');
```

**왜 쓰나?**

1. **짧아집니다.** 특히 `map`, `filter`, `addEventListener` 처럼 "함수를 넘기는" 곳에서 코드가 깔끔해집니다.

```js
btn.addEventListener('click', function () { ... });   // 기존
btn.addEventListener('click', () => { ... });         // 화살표
```

2. `this` 처리가 단순합니다. (일반 함수는 `this`가 호출 방식에 따라 바뀌지만, 화살표 함수는 바깥의 `this`를 그대로 씁니다. 초보 단계에서는 "콜백 안에서 `this` 때문에 헷갈리는 일이 줄어든다" 정도로만 알아두세요.)

⚠️ **객체를 바로 돌려줄 땐 소괄호로 감싸야 합니다.**

```js
const makeUser = (name) => ({ name });   // ✅ 객체를 돌려줌
const makeUser = (name) => { name };     // ❌ { }가 함수 본문으로 해석되어 undefined
```

### Q. 템플릿 리터럴은 무엇이며, HTML을 동적으로 생성하는 것은 어떻게 하는가?

💡 **백틱(`` ` ``)으로 감싼 문자열 안에 `${ }` 로 변수를 끼워 넣고, 여러 줄도 쓸 수 있는 문법입니다.**

```js
const name = '안흥';

// 기존: 더하기로 이어붙임 (길어지면 읽기 힘듦)
const a = '안녕하세요, ' + name + '님!';

// 템플릿 리터럴
const b = `안녕하세요, ${name}님!`;
```

**HTML 동적 생성**: 카드 한 장의 HTML 모양을 하나 만들어 두고, 데이터를 끼워 넣습니다.

```js
const createCard = ({ name, description, html_url, language, stargazers_count }) => `
  <article class="card">
    <h3>${name}</h3>
    <p>${description ?? '설명이 없습니다.'}</p>
    <p class="meta">${language ?? '언어 정보 없음'} · ⭐ ${stargazers_count}</p>
    <a href="${html_url}" target="_blank" rel="noopener noreferrer">GitHub에서 보기</a>
  </article>
`;
```

- `${ }` 안에는 변수뿐 아니라 계산, 조건식도 쓸 수 있습니다: `${price * 2}`, `${isNew ? 'NEW' : ''}`
- `??` 는 "왼쪽이 `null`/`undefined`일 때만 오른쪽 값 사용"입니다. GitHub의 `description`, `language`는 없으면 `null`이라서 필요합니다. (안 쓰면 화면에 글자 `null`이 그대로 찍힙니다.)
- `target="_blank"` 링크에는 `rel="noopener noreferrer"` 를 같이 쓰는 것이 안전합니다.

### Q. 구조 분해 할당은 무엇이며, 어떻게 사용하는 것인가?

💡 **객체나 배열 안의 값을 꺼내서 한 번에 변수로 만드는 줄임 문법입니다.**

**객체 (이름으로 꺼냄)**

```js
const repo = { name: 'my-app', language: 'JavaScript', stargazers_count: 3 };

// 기존
const name = repo.name;
const language = repo.language;

// 구조 분해
const { name, language } = repo;

// 이름 바꾸기, 기본값
const { stargazers_count: stars = 0 } = repo;   // stars 라는 이름으로 받고, 없으면 0
```

**배열 (순서로 꺼냄)**

```js
const [first, second] = ['a', 'b', 'c'];   // first='a', second='b'
```

**함수의 파라미터에서 바로 분해 (이 미션에서 가장 많이 씀)**

```js
repos.map(({ name, html_url }) => `<a href="${html_url}">${name}</a>`);
//         ↑ repo 객체를 통째로 받지 않고, 필요한 값만 바로 꺼냄
```

왜 쓰나? `repo.name`, `repo.html_url` 처럼 `repo.` 를 반복하지 않아도 되어 코드가 짧고, 이 함수가 **어떤 값을 쓰는지** 한눈에 보입니다.

### Q. 배열 메서드는 왜 사용하는 것인가?

💡 **반복문을 직접 쓰는 대신, "무엇을 할지"만 적으면 되게 해주는 도구들이기 때문입니다.**

```js
// for문: 어떻게(how) 돌지를 내가 다 적어야 함
const names = [];
for (let i = 0; i < repos.length; i++) {
  names.push(repos[i].name);
}

// map: 무엇을(what) 할지만 적음
const names = repos.map((repo) => repo.name);
```

| 메서드 | 하는 일 | 돌려주는 것 |
|---|---|---|
| `map` | 각 요소를 **변환** | 새 배열 (같은 길이) |
| `filter` | 조건에 맞는 것만 **걸러냄** | 새 배열 (더 짧을 수 있음) |
| `forEach` | 각 요소에 **작업 실행** | 없음(`undefined`) |

- `map`, `filter`는 **원본 배열을 바꾸지 않고** 새 배열을 만들어서 안전합니다.
- 구분법: "값을 만들어서 결과가 필요하다" → `map`/`filter`, "그냥 뭔가 실행만 하면 된다" → `forEach`

### Q. map: GitHub 데이터를 HTML 카드로 변환하는 것은 어떻게 이루어지는가?

💡 **저장소 객체 하나하나를 "카드 HTML 문자열"로 바꿔서 새 배열을 만들고, 그것을 하나의 문자열로 이어붙여 화면에 넣습니다.**

```js
// repos = [ {name:'a', ...}, {name:'b', ...}, ... ]

const cardsHtml = repos            // 1) 저장소 배열
  .map(createCard)                 // 2) 각 저장소 → 카드 HTML 문자열   ['<article>..a..</article>', '<article>..b..</article>']
  .join('');                       // 3) 배열을 하나의 문자열로 이어붙임 (구분자 없이)

document.querySelector('#project-list').innerHTML = cardsHtml;   // 4) 화면에 삽입
```

- `.join('')` 을 빼먹으면 카드 사이에 **쉼표(,)** 가 그대로 화면에 찍힙니다. (배열이 문자열로 바뀔 때 쉼표가 붙기 때문)
- `createCard`는 위의 "템플릿 리터럴" 답변에 있는 함수입니다.

### Q. filter의 특정 조건은 어떻게 사용되는 것이며, 차후 업데이트 시 다른 필터 조건을 사용할 수 있을까? (어떻게)

💡 **`filter`는 함수가 `true`를 돌려주는 요소만 남깁니다. 조건(함수)만 바꾸면 얼마든지 다른 필터를 만들 수 있습니다.**

```js
// 1) 포크한 저장소는 제외하고 내가 만든 것만
const mine = repos.filter((repo) => !repo.fork);

// 2) 자바스크립트로 만든 것만
const jsRepos = repos.filter((repo) => repo.language === 'JavaScript');

// 3) 별 1개 이상
const starred = repos.filter((repo) => repo.stargazers_count >= 1);
```

**다른 조건으로 확장하는 법 (조건을 "함수 목록"으로 관리)**

```js
const filters = {
  all:      () => true,
  original: (repo) => !repo.fork,
  popular:  (repo) => repo.stargazers_count >= 1,
  recent:   (repo) => new Date(repo.updated_at) > new Date('2026-01-01'),
  search:   (repo) => repo.name.toLowerCase().includes(keyword.toLowerCase()),  // keyword는 검색창 값
};

const visible = repos.filter(filters[currentFilter]);   // currentFilter = 'all' | 'original' | ...
```

- 새 조건을 추가하려면 `filters`에 한 줄만 추가하면 됩니다. (버튼 만드는 방법은 5장 보너스)
- GitHub 데이터에서 쓸 수 있는 값: `language`, `stargazers_count`, `fork`, `updated_at`, `topics`, `name`, `description` 등. 응답 JSON을 직접 열어서 어떤 값이 있는지 확인해 보세요.

### Q. forEach는 무엇이며, 배열 순회는 왜 하는 것일까?

💡 **`forEach` = 배열의 요소를 하나씩 꺼내서 같은 작업을 실행하는 메서드. "순회"는 배열을 처음부터 끝까지 한 번씩 훑는 것입니다.**

```js
document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', closeMenu);      // 링크 4개 각각에 같은 이벤트를 연결
});
```

- **왜 하나?** 같은 작업을 요소마다 반복해야 하는 일이 많기 때문입니다. (모든 카드에 이벤트 붙이기, 모든 섹션 관찰하기 등)
- `map`과의 차이: `forEach`는 **결과 배열을 만들지 않습니다.** 무언가를 "실행"하는 용도입니다. 결과가 필요하면 `map`을 쓰세요.
- 주의: `forEach` 안에서는 `break`로 중간에 멈출 수 없습니다. 멈춰야 하면 `for...of` 반복문을 쓰세요.

---

## 4-8. 비동기 처리 & API 연동

### Q. fetch는 무엇이며, async와 await는 무엇이고 어떻게 사용하며 왜 사용하는가?

💡 **`fetch` = 서버에 데이터를 요청하는 함수. `async/await` = 응답이 올 때까지 "기다렸다가" 다음 줄을 실행하게 해 주는 문법.**

**왜 "기다림"이 필요한가? (비동기)**

- 서버에서 데이터가 오려면 시간이 걸립니다. 그동안 브라우저가 멈추면 사용자가 아무것도 못 하니, 브라우저는 요청을 보내 놓고 **다른 일을 계속하다가** 응답이 오면 이어서 처리합니다. 이것이 **비동기**입니다.
- 비유: 카페에서 커피를 주문하면 **진동벨**을 받고 자리에서 다른 일을 하다가, 벨이 울리면 커피를 받아 옵니다.

**사용법**

```js
async function loadRepos() {                       // ① async: "이 함수 안에서 await을 쓰겠다"
  const response = await fetch(API_URL);           // ② await: 응답이 올 때까지 기다림
  const repos = await response.json();             // ③ 본문을 JSON으로 변환하는 것도 시간이 걸려서 await
  console.log(repos);
}
```

- `await`은 **`async` 함수 안에서만** 쓸 수 있습니다.
- `fetch`는 "약속(Promise)"을 돌려주고, `await`이 그 약속이 이행될 때까지 기다렸다가 값을 꺼내 줍니다.
- 예전 방식(`.then().then()`)은 콜백이 길게 이어져 읽기 힘들었고, `async/await`는 **위에서 아래로 읽으면 되는 순서대로 코드**여서 이해하기 쉽습니다.

```js
// 예전 방식 (.then 체인)
fetch(API_URL).then((res) => res.json()).then((repos) => console.log(repos));

// async/await (위와 같은 일, 읽기 쉬움)
const res = await fetch(API_URL);
const repos = await res.json();
```

### Q. 엔드포인트란 무엇이며, 어떻게 사용하는 것인가?

💡 **엔드포인트 = API 서버에서 "특정 데이터를 받아오는 주소"** 입니다. 식당으로 치면 "메뉴판의 메뉴 하나에 해당하는 주문 창구"입니다.

```
https://api.github.com/users/본인아이디/repos
└────── 서버 ──────┘└─── 경로: "누구의 저장소 목록" ───┘
```

- 주소를 바꾸면 다른 데이터가 옵니다.
  - `/users/아이디` → 사용자 정보
  - `/users/아이디/repos` → 저장소 목록
- **쿼리 파라미터**(`?` 뒤)로 옵션을 줄 수 있습니다.

```
.../repos?sort=updated&per_page=100
          └ 최근 수정순  └ 한 번에 100개
```

- GitHub API는 옵션을 안 주면 **한 번에 30개**까지만 돌려주는 것이 기본입니다. 저장소가 30개보다 많다면 `per_page`를 늘려야 합니다.
- 사용법: 이 주소를 `fetch()` 에 넣어 호출하면 됩니다. 주소는 **브라우저 주소창에 붙여넣어도** JSON이 보이니, 먼저 눈으로 확인해 보세요.
- `본인아이디` 부분을 실제 GitHub 아이디로 바꿔야 합니다.

### Q. 각 상태(로딩/성공/에러/빈 상태)를 어떻게 파악하고 이를 구현하는가?

💡 **함수의 진행 순서 자체가 상태입니다. 요청 시작 = 로딩, 응답 받음 + 데이터 있음 = 성공, 응답 받음 + 데이터 없음 = 빈 상태, 중간에 실패 = 에러.** 상태마다 "화면 그리는 함수"를 호출합니다.

```js
const listEl = document.querySelector('#project-list');
const API_URL = 'https://api.github.com/users/본인아이디/repos?sort=updated&per_page=100';

// 상태에 맞춰 화면을 그리는 함수 (createCard는 4-7 참고)
function render(state, repos = []) {
  if (state === 'loading') {
    listEl.innerHTML = '<p>로딩 중...</p>';
    return;
  }
  if (state === 'error') {
    listEl.innerHTML = `
      <p>프로젝트를 불러올 수 없습니다.</p>
      <button id="retry-btn" type="button">다시 시도</button>`;
    document.querySelector('#retry-btn').addEventListener('click', loadRepos);
    return;
  }
  if (state === 'empty') {
    listEl.innerHTML = '<p>표시할 프로젝트가 없습니다.</p>';
    return;
  }
  listEl.innerHTML = repos.map(createCard).join('');   // 'success'
}

async function loadRepos() {
  render('loading');                                    // 1) 로딩 표시

  try {
    const response = await fetch(API_URL);              // 2) 요청
    if (!response.ok) {                                 // 3) ⚠️ 서버가 오류를 알려온 경우도 에러로 처리
      throw new Error(`요청 실패: ${response.status}`);
    }
    const repos = await response.json();
    const visible = repos.filter((repo) => !repo.fork); // 포크는 제외 (선택)

    render(visible.length === 0 ? 'empty' : 'success', visible);  // 4) 빈 상태 or 성공
  } catch (error) {
    console.error(error);                               // 개발자용 기록
    render('error');                                    // 5) 사용자용 에러 화면 + 재시도
  }
}

loadRepos();
```

**⚠️ 초보자가 가장 많이 놓치는 포인트: `response.ok` 확인**

`fetch`는 **인터넷이 끊긴 것 같은 네트워크 실패에서만** 에러(예외)를 던집니다. 서버가 `404`(없음), `403`(호출 한도 초과) 같은 **오류 응답을 보내도 fetch 입장에서는 "응답을 받았으니 성공"** 입니다. 그래서 `response.ok`(200번대인지)를 직접 확인하고, 아니면 `throw`로 에러를 만들어야 `catch` 로 넘어갑니다.

**상태별 테스트 방법 (동료 평가에서 보여주기 좋음)**

| 상태 | 테스트 방법 |
|---|---|
| 로딩 | 크롬 F12 → Network 탭 → 속도를 **Slow 3G**로 설정 후 새로고침 |
| 에러 | Network 탭에서 **Offline** 체크 후 새로고침 / 또는 API 주소를 일부러 틀리게 |
| 빈 상태 | 저장소가 없는 GitHub 아이디로 임시 테스트 / 또는 `filter` 조건을 일부러 아무것도 안 남게 |
| 성공 | 정상 상태 |

### Q. try/catch를 어떻게 사용하고, 왜 사용하는 것인가?

💡 **"실패할 수 있는 코드"를 `try`에 넣고, 실패했을 때 실행할 코드를 `catch`에 적어서 프로그램이 멈추지 않게 하는 문법**입니다.

```js
try {
  // 실패할 수 있는 코드 (네트워크 요청 등)
} catch (error) {
  // 실패하면 여기로 옴 → 사용자에게 에러 화면 보여주기
} finally {
  // (선택) 성공/실패와 상관없이 마지막에 항상 실행 → 예: 로딩 스피너 끄기
}
```

- **왜?** 안 쓰면 에러가 났을 때 코드가 그 자리에서 멈추고, 화면은 "로딩 중..."에서 영원히 멈춰 있게 됩니다. 사용자는 뭐가 문제인지 알 수 없습니다.
- `catch (error)` 의 `error`에는 무슨 문제인지 담겨 있습니다. `console.error(error)` 로 개발자 도구에 남기고, 사용자에게는 **이해하기 쉬운 문구**(기술 용어 X)를 보여주세요.

---

## 4-9. 상태 관리 패턴

> 이 장의 "어떻게 구현하였는가?" 는 본인 코드에 대한 질문입니다. 아래는 **일반적인 구현 방식**이니, 본인 코드와 대조해서 "같은 부분 / 다른 부분"을 설명할 수 있게 준비하세요.

### Q. 사용자 이벤트와 상태 변경, 화면 업데이트 흐름은 어떻게 구현되는가?

💡 **상태를 담는 변수 → 상태가 바뀌면 화면을 다시 그리는 함수(render) → 이벤트에서 "상태 바꾸고 render 호출".** 이 세 조각의 반복입니다.

```js
// 1) 상태: 화면을 결정하는 값들을 한곳에 모아 둔다
const state = { theme: 'light', status: 'loading', repos: [], filter: 'all' };

// 2) 화면 갱신: 상태를 읽어서 DOM을 고친다 (상태 → 화면)
function render() {
  document.documentElement.dataset.theme = state.theme;
  // ... 프로젝트 목록도 state.status, state.repos, state.filter로 그림
}

// 3) 이벤트: 상태만 바꾸고 render를 호출한다 (이벤트 → 상태 변경 → 화면)
themeToggle.addEventListener('click', () => {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  render();
});
```

핵심 규칙: **이벤트 안에서 DOM을 여기저기 직접 고치지 말고, 상태만 바꾼 뒤 화면 갱신은 한 곳(render)에서** 합니다. 그래야 "지금 화면이 왜 이렇게 보이지?"를 상태 값 하나로 추적할 수 있습니다. (이것이 React의 발상입니다.)

### Q. 다크모드 토글과 테마 상태 변경, 전체 화면 스타일은 어떻게 변경되는가? 또 어떤 방식으로 구현하였는가?

💡 **테마 값(`light`/`dark`)이 상태이고, 그 값이 `<html data-theme>` 속성으로 화면에 반영되며, CSS 변수가 전체 색을 한꺼번에 바꿉니다.**

| 단계 | 내용 |
|---|---|
| 이벤트 | 토글 버튼 `click` |
| 상태 변경 | 테마 `light` ↔ `dark` (그리고 localStorage 저장) |
| 화면 업데이트 | `<html data-theme="dark">` → `[data-theme="dark"]` 안의 CSS 변수 값이 적용됨 → `var(--color-bg)` 등을 쓰는 **모든 요소의 색이 동시에 바뀜** |

- 전체 화면이 한 번에 바뀌는 이유: 요소마다 색을 바꾸는 게 아니라, **변수 값 하나를 교체**하기 때문입니다.
- 구현 코드는 4-5 "다크모드는 어떻게 만들어지는가?"를 보세요.
- 본인 코드 점검: ① 다크 변수를 `[data-theme="dark"]`에 정의했는지 ② 토글이 `data-theme` 속성을 바꾸는지 ③ 저장·복원 코드가 있는지.

### Q. API 호출과 상태 변경은 어떻게 표시되며, 섹션 렌더링 변경이란 무엇인가?

💡 **API 요청이 진행되는 동안 상태가 `loading → success / empty / error` 로 바뀌고, 그 값에 따라 Projects 섹션 안의 내용물이 통째로 바뀌는 것이 "섹션 렌더링 변경"입니다.**

| 상태 | Projects 섹션에 보이는 것 |
|---|---|
| `loading` | "로딩 중..." |
| `success` | 카드 목록 |
| `empty` | "표시할 프로젝트가 없습니다" |
| `error` | 에러 문구 + 재시도 버튼 |

- "렌더링"은 "상태에 맞는 화면을 그려 내는 것"입니다. **같은 자리(`#project-list`)에 상태에 따라 다른 내용을 그려 넣습니다.**
- 구현 코드는 4-8의 `render(state, repos)` 함수를 보세요.
- "재시도 버튼 클릭 → 다시 `loading`" 도 하나의 **이벤트 → 상태 → 화면** 흐름입니다.

### Q. 폼 입력과 유효성 상태 변경은 무엇이며, 이를 어떻게 구현하는가?

💡 **각 입력칸이 "통과 / 실패(어떤 메시지)"라는 상태를 갖고, 그 상태에 따라 에러 메시지가 나타나거나 사라지는 것**입니다.

| 단계 | 내용 |
|---|---|
| 이벤트 | 폼 `submit` (선택: 입력칸 `input`) |
| 상태 변경 | 칸별 검증 결과 (`''` = 통과, 문자열 = 에러 메시지) |
| 화면 업데이트 | 에러 `<p>`의 글자 표시/삭제 + 입력칸의 `invalid` 클래스 토글 |

- 구현 코드는 4-6의 `showError` 함수를 보세요. **메시지가 있으면 표시, 빈 문자열이면 자동으로 사라지는** 구조라서 "표시/숨김"을 따로 관리하지 않아도 됩니다.
- 사용자가 다시 입력하기 시작할 때 에러를 지우고 싶다면:

```js
document.querySelector('#email').addEventListener('input', () => showError('email', ''));
```

### Q. 필터 상태 버튼은 어떻게 변경하고, 프로젝트 목록 변경은 어떻게 구현되는가?

💡 **버튼을 누르면 "현재 필터" 상태를 바꾸고, 그 상태로 `filter()` 한 결과를 다시 그립니다.** 누른 버튼에는 `active` 클래스로 선택 표시를 합니다.

```html
<div class="filters" id="filters">
  <button type="button" data-filter="all" class="active">전체</button>
  <button type="button" data-filter="JavaScript">JavaScript</button>
  <button type="button" data-filter="HTML">HTML</button>
</div>
```

```js
let allRepos = [];          // API에서 받아온 전체 데이터 (원본은 건드리지 않음)
let currentFilter = 'all';  // 상태: 현재 선택된 필터

function renderProjects() {
  const visible = currentFilter === 'all'
    ? allRepos
    : allRepos.filter((repo) => repo.language === currentFilter);   // 상태로 걸러냄

  listEl.innerHTML = visible.length === 0
    ? '<p>표시할 프로젝트가 없습니다.</p>'
    : visible.map(createCard).join('');
}

document.querySelector('#filters').addEventListener('click', (event) => {
  const btn = event.target.closest('button[data-filter]');   // 누른 것이 필터 버튼인지 확인
  if (!btn) return;

  currentFilter = btn.dataset.filter;                        // 1) 상태 변경
  document.querySelectorAll('#filters button').forEach((b) => {
    b.classList.toggle('active', b === btn);                 // 2) 버튼 선택 표시 이동
  });
  renderProjects();                                          // 3) 목록 다시 그리기
});
```

- `data-filter="JavaScript"` 처럼 HTML에 값을 실어두고 `btn.dataset.filter` 로 읽는 방식이 깔끔합니다.
- 버튼을 **데이터에서 자동으로 만드는 방법**(언어가 늘어도 코드가 그대로)은 5장 보너스를 보세요.

---

## 4-10. 배포

### Q. 반응형 레이아웃은 어떻게 만드는가?

💡 **① viewport 메타 태그 ② 유연한 단위(%, rem, fr) ③ 모바일 퍼스트 미디어 쿼리(768px, 1024px) ④ flex/grid 를 조합합니다.**

자세한 설명과 코드는 **2장 "반응형 레이아웃 최적화는 어떻게 하는가?"** 와 **4-3 CSS 장**에 있습니다. 배포한 뒤에 다시 확인해야 할 점만 정리합니다.

### 배포 후 최종 점검 체크리스트

배포된 URL을 **시크릿 창**에서 열어서 확인하세요. (로컬에서만 되고 배포에서 안 되는 문제를 잡는 방법입니다.)

| # | 점검 항목 | 확인 방법 | 결과 |
|---|---|---|---|
| 1 | 반응형 레이아웃 | F12 → 기기 툴바로 360px / 768px / 1024px 확인 | |
| 2 | 햄버거 메뉴 열림·닫힘 | 모바일 폭에서 클릭 | |
| 3 | 다크모드 전환 + 새로고침 유지 | 다크로 바꾼 뒤 F5 | |
| 4 | 부드러운 스크롤 | 메뉴 클릭 시 미끄러지듯 이동 | |
| 5 | 맨 위로 버튼 (300px) | 스크롤 내림/올림 | |
| 6 | 네비 배경 변경 (60px) | 스크롤 내림/올림 | |
| 7 | 스크롤 애니메이션 | 섹션이 화면에 들어올 때 나타남 | |
| 8 | GitHub API 카드 표시 | Projects 섹션에 카드가 나옴 | |
| 9 | 폼 유효성 (빈 값, 이메일 형식, 성공) | 각각 시도 | |
| 10 | 이미지·CSS·JS 404 없음 | F12 → Console / Network 탭에 빨간 오류가 없는지 | |

### README에 들어가야 할 것

| 항목 | 팁 |
|---|---|
| 프로젝트 설명 | 무엇을 만들었고 누구를 위한 사이트인지 2~3줄 |
| 사용 기술 | HTML5, CSS3, JavaScript(ES6+), GitHub API, GitHub Pages 등 |
| 배포 URL | 클릭해서 열리는 링크로 (`[배포 주소](https://...)`) |
| 스크린샷 | 데스크톱 / 모바일 / 다크모드 화면. `images/` 폴더에 저장하고 `![데스크톱 화면](images/screenshot-desktop.png)` 처럼 삽입 |
| **기준값 명시** | 요구사항에서 "README에 명시"하라고 한 값: 맨 위로 버튼 **300px**, 네비 배경 변경 **60px**, Intersection Observer 임계값 **0.2** (바꿨다면 바꾼 값과 이유) |

스크린샷 팁: 크롬 F12 → 기기 툴바 → 폭을 맞춘 뒤 `Ctrl+Shift+P` → "Capture screenshot"을 입력하면 화면 캡처가 됩니다. (Capture full size screenshot은 페이지 전체 캡처)

---

# 5. 보너스 과제

### Q. 프로젝트를 언어별로 필터링하는 버튼은 어떻게 만드는가?

💡 **API 데이터에서 "언어 목록"을 뽑아 버튼을 자동으로 만들고, 클릭하면 그 언어의 저장소만 남깁니다.**

```js
// 1) 데이터에서 언어 목록 뽑기 (중복 제거, null 제외)
const languages = [...new Set(allRepos.map((repo) => repo.language).filter(Boolean))];
// 예: ['JavaScript', 'HTML', 'CSS']

// 2) 버튼 만들기 ('전체' 버튼 + 언어별 버튼)
const filterEl = document.querySelector('#filters');
filterEl.innerHTML = ['all', ...languages]
  .map((lang) => `
    <button type="button" data-filter="${lang}" class="${lang === 'all' ? 'active' : ''}">
      ${lang === 'all' ? '전체' : lang}
    </button>`)
  .join('');
```

- `map(repo => repo.language)` : 언어만 뽑기 → `['JavaScript','HTML','JavaScript', null]`
- `.filter(Boolean)` : `null`(언어 정보 없는 저장소) 제거
- `new Set(...)` : 중복 제거, `[...]` 로 다시 배열로
- 버튼 클릭 처리와 목록 다시 그리기는 **4-9 마지막 질문**의 코드를 그대로 씁니다.
- 원리: 버튼 목록이 **데이터에서 자동 생성**되기 때문에, 새 언어로 저장소를 만들어도 코드를 고칠 필요가 없습니다.

### Q. 언어별이 아닌 다른 조건으로 필터링하고 싶다면 어떻게 할 수 있는가?

💡 **`filter`에 들어가는 "조건 함수"만 바꾸면 됩니다.** 4-7의 `filters` 객체에 조건을 추가하고, 버튼의 `data-filter` 값과 연결하세요.

| 하고 싶은 것 | 사용하는 데이터 | 조건 예시 |
|---|---|---|
| 별 많은 순으로 보기 | `stargazers_count` | `[...repos].sort((a, b) => b.stargazers_count - a.stargazers_count)` |
| 최근 수정한 것만 | `updated_at` | `new Date(repo.updated_at) > 기준날짜` |
| 이름 검색 | `name` | `repo.name.toLowerCase().includes(keyword)` |
| 포크 제외 | `fork` | `!repo.fork` |
| 주제(topics)별 | `topics` (배열) | `repo.topics.includes('portfolio')` |

- **정렬**은 `filter`가 아니라 `sort`입니다. ⚠️ `sort`는 **원본 배열을 바꾸므로** `[...repos].sort(...)` 처럼 복사본에 쓰세요.
- 검색창은 `input` 이벤트에서 `keyword` 상태를 바꾸고 목록을 다시 그리면 됩니다.

```js
searchInput.addEventListener('input', (event) => {
  keyword = event.target.value;
  renderProjects();
});
```

### Q. 타이핑 효과는 어떻게 구현하는가?

💡 **문자열을 한 글자씩 늘려가며 화면에 보여주는 것을, `setTimeout`으로 일정 간격마다 반복**합니다.

```html
<h1>안녕하세요, <span id="typing"></span><span class="cursor">|</span></h1>
```

```js
const text = '데이터로 기획하는 안흥입니다';   // 보여줄 문장 (본인 문구로)
const target = document.querySelector('#typing');
let index = 0;

function type() {
  if (index <= text.length) {
    target.textContent = text.slice(0, index);   // 처음부터 index번째 글자까지 자르기
    index++;
    setTimeout(type, 100);                        // 0.1초 뒤에 다시 실행
  }
}
type();
```

```css
.cursor { animation: blink 1s step-end infinite; }
@keyframes blink { 50% { opacity: 0; } }
```

- `slice(0, index)` : 0번째부터 `index`번째 앞까지 → `'데'`, `'데이'`, `'데이터'` ... 처럼 점점 길어집니다.
- 글자를 지우고 다음 문장으로 넘어가는 **반복 효과**를 만들고 싶다면, `index`를 줄이는 단계를 추가하고 문장 목록(배열)을 돌리면 됩니다.
- 움직임이 불편한 사용자를 위해 `prefers-reduced-motion` 설정이면 효과를 생략하는 것이 좋습니다.

### Q. 폼 실제 전송은 어떻게 구현하며, 실제 이메일 전송은 이루어지는가?

💡 **기본 미션 구현에서는 이메일이 실제로 가지 않습니다(화면에 성공 문구만 표시). 실제로 보내려면 이메일을 대신 보내주는 "서비스"에 데이터를 넘겨야 합니다.**

**왜 JS만으로는 이메일을 못 보내는가?**

- 이메일은 메일 서버(SMTP)를 통해 보내야 하는데, 브라우저의 JS에서 메일 서버 계정 정보(비밀번호 등)를 쓰면 **누구나 개발자 도구로 볼 수 있어서** 위험합니다.
- 그래서 보통 **중간에 서버(또는 전용 서비스)** 가 대신 보내줍니다. 정적 사이트(GitHub Pages)에는 서버가 없으니, Formspree, EmailJS 같은 서비스를 씁니다.

**구현 흐름 (Formspree 방식 예시)**

```js
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  // ... 유효성 검사를 통과했다면

  try {
    const response = await fetch('https://formspree.io/f/발급받은ID', {   // 서비스에서 받은 주소
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        name: form.name.value,
        email: form.email.value,
        message: form.message.value,
      }),
    });
    if (!response.ok) throw new Error('전송 실패');
    success.hidden = false;                 // 성공 메시지
    form.reset();
  } catch (error) {
    showFormError('전송에 실패했습니다. 잠시 후 다시 시도해 주세요.');   // 에러 상태도 처리
  }
});
```

- 전송도 **비동기 요청**이라 4-8의 "로딩/성공/에러" 개념이 그대로 적용됩니다. (전송 중에는 버튼을 `disabled`로 만들어 중복 제출을 막으세요.)
- `'https://formspree.io/f/발급받은ID'` 는 자리 표시용이며, 서비스에 가입해서 받은 실제 값으로 바꿔야 합니다.

### Q. 시스템 다크모드 감지란 무엇인가?

💡 **사용자의 컴퓨터/스마트폰(OS)이 "다크모드"로 설정되어 있는지 브라우저가 알려주는 것을 이용해서, 사이트도 처음부터 그 설정에 맞추는 기능**입니다.

- 예: 폰을 밤에 다크모드로 쓰는 사람이 사이트에 들어왔을 때, 하얀 화면이 번쩍이지 않고 처음부터 어두운 화면으로 열리게 하는 것입니다.

### Q. prefers-color-scheme 미디어 쿼리는 무엇이며, 시스템 설정을 감지한다는 것은 무엇인가?

💡 **`prefers-color-scheme` = "사용자가 OS에서 선택한 테마(밝게/어둡게)"를 알려주는 CSS/JS 기능입니다. "감지"란 이 값을 읽어서 사이트에 적용하는 것입니다.**

**CSS로**

```css
@media (prefers-color-scheme: dark) {
  :root { --color-bg: #121212; --color-text: #f0f0f0; }
}
```

**JS로 (이 미션은 `data-theme` 방식이라 JS 방식이 더 맞음)**

```js
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;  // true / false
```

**우선순위를 정해야 합니다. (권장)**

```js
const saved = localStorage.getItem('theme');                       // 1순위: 사용자가 직접 고른 값
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

document.documentElement.dataset.theme = saved ?? systemTheme;     // 저장값이 없을 때만 시스템 설정을 따름
```

- **사용자가 토글로 직접 고른 값이 시스템 설정보다 우선**해야 합니다. (내가 직접 눌러서 바꿨는데 시스템이 다시 덮어쓰면 불편합니다.)
- 사용자가 사이트를 보는 도중에 OS 설정을 바꾸는 경우까지 반응하려면:

```js
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  if (!localStorage.getItem('theme')) {                             // 직접 고른 값이 없을 때만
    document.documentElement.dataset.theme = e.matches ? 'dark' : 'light';
  }
});
```

### Q. Formspree와 EmailJS는 무엇인가?

💡 **둘 다 "서버 없이 폼 내용을 이메일로 받게 해주는 외부 서비스"입니다.**

| | Formspree | EmailJS |
|---|---|---|
| 방식 | 내 폼 데이터를 서비스가 준 **주소로 POST** → 서비스가 내 이메일로 전달 | 브라우저에서 서비스의 기능을 호출해 **템플릿 이메일을 발송** |
| 설정 | 가입 → 폼 만들기 → 발급된 주소를 `fetch`/`<form action>`에 사용 | 가입 → 메일 서비스 연결 → 템플릿 만들기 → ID/키를 코드에 사용 |
| 특징 | 구조가 단순함 (일반 폼 전송과 비슷) | 발송 메일 내용을 템플릿으로 꾸미기 편함 |
| 이 미션에서 | 별도 라이브러리 없이 `fetch`만으로 가능 | 보통 전용 스크립트(SDK)를 불러와 사용 |

주의할 점:

- **"외부 라이브러리 금지" 규칙과의 관계**: 이 미션은 외부 라이브러리를 금지합니다. 보너스 과제로 제시된 서비스이니 사용 가능한 범위이지만, EmailJS의 SDK 스크립트를 쓰면 라이브러리 사용처럼 보일 수 있으니 **README에 "보너스 과제용으로 사용"이라고 명시**하거나, 라이브러리 없이 `fetch`로 호출할 수 있는 방식(Formspree)을 쓰는 것이 안전합니다. (정확한 허용 범위는 미션 안내나 멘토에게 확인하세요.)
- **키/ID를 코드에 넣으면 공개됩니다.** GitHub Pages는 코드가 전부 공개라서 서비스의 **공개용 키**만 넣고, 비밀 키는 절대 넣지 마세요.
- **스팸**: 폼 주소가 공개되므로 스팸이 올 수 있습니다. 서비스가 제공하는 스팸 방지 설정을 확인하세요.
- **무료 한도와 정책은 바뀔 수 있으니** 사용 전에 각 서비스의 공식 사이트에서 최신 내용을 확인하세요.

---

# 6. 개발환경 (참고)

- **금지**: React, Vue, jQuery, Bootstrap, Tailwind CSS 등 외부 라이브러리·프레임워크 → **순수 HTML, CSS, JavaScript만** 사용
- **허용**: 아이콘(Font Awesome), 웹 폰트(Google Fonts)
- 참고: ES 모듈(`import`/`export`), `fetch`, Intersection Observer 같은 **브라우저 기본 기능**은 라이브러리가 아닙니다.

---

# 마무리: 동료 평가 전에 "설명할 수 있는지" 스스로 점검하기

동료 평가에서는 "코드가 동작하는가"보다 **"왜 이렇게 만들었는지 설명할 수 있는가"** 를 묻는 경우가 많습니다. 아래 질문에 **코드를 보지 않고 말로** 답해 보세요. 막히는 곳이 공부할 곳입니다.

1. 다크모드 토글을 눌렀을 때 **이벤트 → 상태 → 화면**이 어떻게 이어지나요? 새로고침해도 유지되는 이유는?
2. 햄버거 메뉴는 CSS와 JS가 각각 무슨 역할을 나눠 맡고 있나요?
3. flexbox와 grid를 각각 어디에 썼고, 왜 그렇게 나눴나요?
4. GitHub API 호출 중 로딩/에러/빈 상태는 각각 언제 나타나고, `response.ok`를 왜 확인하나요?
5. `map`은 어떻게 데이터를 카드 HTML로 바꾸나요? `.join('')`을 빼면 어떻게 되나요?
6. `event.preventDefault()`를 빼면 폼에서 무슨 일이 생기나요?
7. 시맨틱 태그를 쓰는 이유는? `label`과 `input`을 `for`/`id`로 묶는 이유는?
8. 이 프로젝트에서 **가장 어려웠던 점과 해결 방법**은?
