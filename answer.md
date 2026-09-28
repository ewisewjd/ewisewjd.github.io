# Codyssey B1-1 — 질문별 학습 답변

이 문서는 docs/mission.md의 학습 목표와 기능 요구사항을 기준으로 작성한 복습용 자료입니다.

질문이 겹치더라도 일부러 합치지 않았습니다. 같은 개념을 다른 질문으로 반복해서 설명하면서 실제 코드에 연결하는 것이 목적입니다.

---

# 1. HTML / Semantic HTML

## Q1. HTML은 무엇인가?

HTML은 웹 문서의 구조와 의미를 표현하는 마크업 언어입니다. 제목, 문단, 링크, 이미지, 입력창 등의 역할을 브라우저에 알려줍니다.

## Q2. Semantic HTML이란?

태그 이름 자체가 콘텐츠의 역할을 설명하는 HTML입니다. 예를 들어 header, nav, main, section, article, footer가 있습니다.

## Q3. 왜 div만 사용하지 않았는가?

div는 의미가 없는 일반적인 컨테이너입니다. 모든 것을 div로 만들면 구조를 코드만 보고 파악하기 어렵습니다. Semantic Tag를 사용하면 문서의 역할과 구조를 더 명확하게 표현할 수 있습니다.

## Q4. 내가 만든 페이지의 큰 구조는?

header → nav → main → 여러 section → footer 구조입니다.

main 안에는 Hero, About, Skills, Projects, Side Projects, Contact가 있습니다.

## Q5. section과 article의 차이는?

section은 하나의 주제를 가진 콘텐츠 영역입니다. article은 다른 곳에 독립적으로 옮겨져도 하나의 콘텐츠로 의미를 가질 수 있는 단위입니다.

현재 About의 자기소개 카드와 동적으로 만들어지는 Repository Card는 article로 표현할 수 있습니다.

## Q6. id는 왜 사용하는가?

Anchor 이동과 DOM 선택에 사용합니다.

```html
<a href="#projects">Projects</a>
<section id="projects">...</section>
```

## Q7. alt는 왜 필요한가?

이미지의 의미를 텍스트로 설명합니다. 이미지가 보이지 않는 경우나 보조기기를 사용하는 경우에도 의미를 전달할 수 있습니다.

## Q8. label과 input을 연결하는 이유는?

사용자가 입력 항목을 명확하게 이해하도록 하고 접근성을 높이기 위해서입니다.

```html
<label for="email">Email</label>
<input id="email" type="email">
```

---

# 2. CSS

## Q9. CSS의 역할은?

HTML이 구조를 담당한다면 CSS는 크기, 색상, 배치, 반응형, 상태 변화 등 화면 표현을 담당합니다.

## Q10. CSS 변수란?

반복되는 값을 이름으로 저장하는 CSS Custom Property입니다.

```css
:root {
    --color-navy: #203746;
}

.button {
    background: var(--color-navy);
}
```

## Q11. 왜 CSS 변수를 사용했는가?

Theme을 바꾸기 쉽고 반복 값을 한 곳에서 관리할 수 있기 때문입니다.

## Q12. Flexbox와 Grid의 차이는?

Flexbox는 주로 한 방향의 1차원 배치, Grid는 행과 열을 함께 사용하는 2차원 배치에 적합합니다.

## Q13. Navigation에 Flexbox를 사용한 이유는?

로고와 메뉴를 한 방향으로 정렬하고 좌우 공간을 분배하기 좋기 때문입니다.

## Q14. Project Card에 Grid를 사용한 이유는?

여러 카드를 행과 열로 배치해야 하기 때문입니다.

## Q15. auto-fit과 minmax는 무엇인가?

minmax는 각 Grid Track의 최소/최대 크기를 지정합니다. auto-fit은 사용 가능한 공간에 따라 가능한 열을 자동으로 배치합니다.

```css
grid-template-columns:
    repeat(auto-fit, minmax(240px, 1fr));
```

## Q16. Mobile-first란?

작은 화면을 기본 스타일로 작성한 뒤 Media Query로 더 넓은 화면을 확장하는 방식입니다.

## Q17. 왜 반응형이 필요한가?

스마트폰, 태블릿, 노트북, 데스크톱의 사용 가능한 공간이 서로 다르기 때문입니다.

---

# 3. DOM

## Q18. DOM이란?

브라우저가 HTML 문서를 JavaScript에서 객체 형태로 다룰 수 있도록 만든 문서 구조입니다.

## Q19. querySelector란?

CSS 선택자를 사용해 첫 번째로 일치하는 요소를 선택합니다.

```javascript
const navMenu =
    document.querySelector("#nav-menu");
```

## Q20. querySelectorAll이란?

조건에 맞는 여러 요소를 선택합니다.

```javascript
const targets =
    document.querySelectorAll(".project-card");
```

## Q21. addEventListener란?

특정 이벤트가 발생했을 때 실행할 함수를 등록합니다.

```javascript
button.addEventListener("click", () => {
    console.log("clicked");
});
```

## Q22. 왜 onclick을 사용하지 않았는가?

Mission에서 HTML의 onclick 대신 addEventListener를 사용하도록 요구했습니다. 또한 구조와 동작을 분리할 수 있습니다.

## Q23. classList란?

요소의 CSS class를 JavaScript에서 조작합니다. add, remove, toggle 등이 있습니다.

## Q24. textContent와 innerHTML의 차이는?

textContent는 문자열을 텍스트로 넣습니다. innerHTML은 문자열을 HTML로 해석합니다.

현재 프로젝트에서 상태 메시지는 textContent를 사용하고, Repository Card는 Template Literal + innerHTML을 사용합니다.

중요: 외부 API 데이터를 innerHTML에 직접 넣을 때는 XSS/HTML Injection을 고려해야 합니다. 현재 코드는 Mission 학습 목적의 구현이며, 이후 escapeHTML 같은 방어 로직을 추가할 수 있습니다.

---

# 4. JavaScript 문법

## Q25. const와 let의 차이는?

const는 재할당하지 않는 변수, let은 이후 다른 값으로 재할당할 수 있는 변수에 사용합니다.

```javascript
const username = "ewisewjd";
let activeLanguage = "All";

activeLanguage = "JavaScript";
```

## Q26. 왜 var를 사용하지 않는가?

Mission에서 var 대신 const/let을 요구합니다. 또한 변수의 재할당 여부를 코드에서 더 명확하게 표현할 수 있습니다.

## Q27. 화살표 함수란?

함수를 간결하게 표현하는 문법입니다. 현재 프로젝트에서는 이벤트와 배열 메서드 callback에 사용합니다.

```javascript
const double = (number) => number * 2;
```

## Q28. Destructuring이란?

객체나 배열에서 값을 꺼내 변수로 만드는 문법입니다.

```javascript
const {
    name,
    description,
    language
} = repo;
```

## Q29. map()이란?

배열의 각 요소를 변환하여 새로운 배열을 만드는 메서드입니다.

현재 프로젝트에서는 Repository → Card HTML 변환에 사용합니다.

## Q30. filter()란?

조건을 만족하는 요소만 남겨 새로운 배열을 만드는 메서드입니다.

현재 프로젝트에서는 fork/archived 제외와 Language Filter에 사용합니다.

## Q31. map과 filter의 차이는?

map은 변환, filter는 선택입니다.

```javascript
repos.map((repo) => makeCard(repo));

repos.filter(
    (repo) => !repo.fork
);
```

## Q32. forEach는 무엇인가?

배열의 각 요소를 순회하며 동작을 실행할 때 사용합니다. 새로운 배열을 만드는 것이 주목적은 아닙니다.

---

# 5. API / 비동기

## Q33. API란?

프로그램이 다른 서비스의 데이터나 기능을 사용할 수 있도록 제공하는 인터페이스입니다.

## Q34. 이 프로젝트에서 사용하는 API는?

GitHub REST API입니다.

```text
https://api.github.com/users/ewisewjd/repos
```

## Q35. fetch란?

HTTP 요청을 보내는 Web API입니다.

## Q36. async란?

함수를 비동기 함수로 만들며 해당 함수는 Promise를 반환합니다.

## Q37. await란?

Promise의 결과를 기다린 뒤 다음 코드를 실행하도록 합니다. async 함수 안에서 사용할 수 있습니다.

## Q38. 왜 async/await가 필요한가?

네트워크 요청은 언제 끝날지 고정되어 있지 않은 비동기 작업이기 때문입니다. 요청 → 응답 → 데이터 처리 순서를 읽기 쉽게 표현할 수 있습니다.

## Q39. try/catch는 왜 사용하는가?

API 요청이나 데이터 처리 중 오류가 발생했을 때 정상적인 화면 흐름으로 복구하고 사용자에게 Error UI를 보여주기 위해 사용합니다.

## Q40. response.ok는 왜 확인하는가?

fetch가 HTTP 요청 자체에 성공했더라도 404, 403 등의 HTTP 오류가 있을 수 있습니다. response.ok로 성공 상태인지 확인합니다.

## Q41. GitHub API에서 403이 발생할 수 있는 이유는?

인증 없이 API를 반복 호출하면 Rate Limit에 걸릴 수 있습니다. 현재 코드는 403을 감지하고 Error 상태로 처리합니다.

---

# 6. 상태와 렌더링

## Q42. 여기서 상태란?

현재 화면이나 기능의 동작을 결정하는 값입니다.

예:

```javascript
let activeLanguage = "All";
```

현재 어떤 Language Filter가 선택됐는지를 나타냅니다.

## Q43. 이벤트 → 상태 → 화면 업데이트란?

사용자가 버튼을 클릭하고, 그 결과 상태가 변경되고, 변경된 상태를 기준으로 DOM을 업데이트하는 흐름입니다.

## Q44. Dark Mode 흐름은?

```text
click
→ next Theme 계산
→ data-theme 변경
→ CSS [data-theme="dark"] 적용
→ 화면 변경
→ localStorage 저장
```

## Q45. API 흐름은?

```text
loadRepositories()
→ Loading
→ fetch()
→ response
→ json()
→ repositories
→ filter()
→ map()
→ Card
→ DOM
```

## Q46. Form 흐름은?

```text
input/submit
→ validateField()
→ 값 검사
→ 유효성 결정
→ aria-invalid 변경
→ error message 변경
```

## Q47. Filter 흐름은?

```text
Filter click
→ activeLanguage 변경
→ renderFilters()
→ renderRepoCards()
→ filter()
→ Card 재생성
```

## Q48. 왜 이 개념이 React와 연결되는가?

React는 State가 바뀌면 그 State를 기반으로 UI를 다시 Render하는 사고방식을 사용합니다. 현재 프로젝트에서는 그 흐름을 DOM을 직접 조작하면서 경험했습니다.

---

# 7. localStorage

## Q49. localStorage란?

브라우저에 문자열 데이터를 저장할 수 있는 저장 공간입니다.

```javascript
localStorage.setItem(
    "cw-voyage-theme",
    "dark"
);

const theme =
    localStorage.getItem(
        "cw-voyage-theme"
    );
```

## Q50. 왜 Theme을 localStorage에 저장하는가?

새로고침해도 사용자의 Theme 선택을 유지하기 위해서입니다.

---

# 8. Intersection Observer

## Q51. Intersection Observer란?

요소가 viewport와 교차하는지를 관찰하는 Web API입니다.

## Q52. threshold 0.2란?

관찰 대상의 약 20%가 viewport와 교차하면 callback이 실행되도록 설정한 값입니다.

```javascript
new IntersectionObserver(
    callback,
    { threshold: 0.2 }
);
```

## Q53. 왜 사용했는가?

스크롤 위치를 매번 직접 계산하기보다 "요소가 화면에 들어왔는가"라는 조건을 관찰하여 등장 효과를 구현하기 좋기 때문입니다.

---

# 9. Form

## Q54. preventDefault란?

브라우저의 기본 동작을 막는 메서드입니다.

Form의 기본 제출 동작으로 페이지가 이동/새로고침되는 것을 막기 위해 사용합니다.

## Q55. 왜 input 이벤트를 사용하는가?

사용자가 입력하는 즉시 검증 결과를 보여주기 위해서입니다.

## Q56. 이메일 형식은 어떻게 검사하는가?

정규표현식을 사용해 기본적인 email@domain 형태를 검사합니다.

중요하게도 정규표현식은 "실제로 존재하는 이메일인지" 확인하는 것이 아니라 형식만 확인합니다.

---

# 10. Navigation / Scroll

## Q57. 햄버거 메뉴는 어떻게 동작하는가?

click → isOpen 계산 → classList.toggle → aria-expanded 변경 → CSS가 메뉴 표시/숨김.

## Q58. classList.toggle의 두 번째 인자는?

boolean 값입니다.

true면 class를 추가하고 false면 제거합니다.

## Q59. Scroll Top은 어떻게 동작하는가?

scrollY가 300보다 커지면 hidden을 false로 만들어 표시하고, 클릭하면 window.scrollTo로 top:0으로 이동합니다.

## Q60. Header 60px 기준은?

Mission에서 60px 이상 스크롤하면 Navigation 스타일을 변경하도록 요구했고 현재 코드에서는 y > 60을 사용했습니다.

---

# 11. Repository

## Q61. Repository Card 전체 흐름은?

```text
GitHub API
→ repositories
→ filter
→ slice
→ map
→ makeCard
→ Template Literal
→ innerHTML
→ 화면
```

## Q62. makeCard에서 Destructuring을 사용하는 이유는?

Card에 필요한 데이터만 명시적으로 꺼내 코드의 의도를 분명하게 하기 위해서입니다.

## Q63. stargazers_count 기본값 0은 왜 있는가?

값이 undefined인 경우 카드에 undefined가 출력되지 않고 0을 사용하도록 하기 위해서입니다.

## Q64. fork와 archived를 왜 제외하는가?

현재 Portfolio에서 실제로 보여줄 Repository만 남기기 위해서입니다.

```javascript
data.filter(
    (repo) => !repo.fork && !repo.archived
);
```

---

# 12. 상태 UI

## Q65. Loading이 필요한 이유는?

네트워크 요청이 진행 중임을 사용자에게 알려주기 위해서입니다.

## Q66. Error가 필요한 이유는?

API 요청 실패를 사용자에게 알려주고 페이지 전체가 고장난 것처럼 보이지 않게 하기 위해서입니다.

## Q67. Empty와 Error의 차이는?

Error는 데이터를 가져오는 과정에 실패한 것입니다.

Empty는 요청에는 성공했지만 표시할 데이터가 없는 것입니다.

## Q68. Retry는 왜 필요한가?

일시적인 네트워크 오류나 Rate Limit 이후 사용자가 다시 요청할 수 있도록 하기 위해서입니다.

---

# 13. 접근성

## Q69. aria-expanded는?

메뉴처럼 열림/닫힘 상태가 있는 UI의 현재 상태를 보조기기에 전달합니다.

## Q70. aria-live는?

동적으로 바뀌는 상태 메시지를 보조기기가 알 수 있도록 합니다.

현재 repo-status와 form-status 등에 사용했습니다.

## Q71. aria-pressed는?

Toggle/Filter 버튼이 현재 눌린 상태인지 표현합니다. 현재 Language Filter에 사용했습니다.

---

# 14. 개발 환경 / 배포

## Q72. defer는 왜 사용하는가?

외부 JavaScript를 HTML 파싱을 방해하지 않으면서 다운로드하고, 문서 파싱 후 실행하도록 합니다.

현재:

```html
<script
    src="js/main.js"
    defer>
</script>
```

## Q73. GitHub Pages란?

GitHub Repository의 정적 파일을 웹사이트로 제공하는 호스팅 기능입니다.

현재 배포 주소는:

https://ewisewjd.github.io/

입니다.

## Q74. 왜 GitHub Pages를 사용했는가?

현재 프로젝트는 별도 서버가 필요한 애플리케이션이 아니라 HTML/CSS/JavaScript 기반 정적 사이트이기 때문입니다.

---

# 15. 코드 설계

## Q75. 왜 함수를 분리했는가?

하나의 함수가 모든 일을 담당하면 읽기와 수정이 어려워집니다.

현재는 역할을 나눴습니다.

- loadRepositories — API 요청
- renderFilters — Filter UI
- renderRepoCards — Repository Card
- makeCard — Card HTML 생성
- setStatus — 상태 메시지
- validateField — Form 필드 검증

## Q76. setStatus는 왜 필요한가?

Loading, Error, Empty 등 상태 메시지를 여러 곳에서 공통적으로 변경하기 때문입니다.

## Q77. validateField는 왜 필요한가?

Name, Email, Message 모두 입력값을 검사하지만 결과를 표시하는 흐름은 공통적이기 때문입니다.

---

# 16. 최종 구두 설명 연습

아래 질문은 실제로 코드를 보지 않고 말해보는 것을 권장합니다.

1. Semantic HTML을 왜 사용하는가?
2. 내가 만든 header/nav/main/section/article/footer의 역할은?
3. Flexbox와 Grid의 차이는?
4. Navigation에 Flexbox를 사용한 이유는?
5. Project에 Grid를 사용한 이유는?
6. auto-fit/minmax는 무엇인가?
7. CSS 변수는 왜 사용하는가?
8. data-theme은 어떻게 Dark Mode를 바꾸는가?
9. querySelector는 무엇인가?
10. querySelectorAll은 무엇인가?
11. addEventListener는 무엇인가?
12. classList.toggle은 무엇인가?
13. click/input/submit/scroll의 차이는?
14. preventDefault는 왜 사용하는가?
15. const와 let의 차이는?
16. arrow function은 무엇인가?
17. Destructuring은 무엇인가?
18. map과 filter의 차이는?
19. Template Literal은 무엇인가?
20. fetch는 무엇인가?
21. async/await는 왜 필요한가?
22. try/catch는 왜 필요한가?
23. response.ok는 왜 확인하는가?
24. Loading/Error/Empty의 차이는?
25. Retry는 무엇을 다시 실행하는가?
26. localStorage는 무엇인가?
27. Intersection Observer는 무엇인가?
28. threshold 0.2는 무엇인가?
29. 이벤트 → 상태 → DOM 업데이트를 설명할 수 있는가?
30. GitHub API 데이터가 화면에 나타나는 전체 과정을 설명할 수 있는가?
31. Form 입력부터 오류 메시지까지의 흐름을 설명할 수 있는가?
32. GitHub Pages는 무엇인가?

---

# 17. 복습 방법

이 문서를 단순 암기용으로 사용하지 않는 것이 중요합니다.

### 1단계

HTML → CSS → JavaScript 순서로 개념을 읽습니다.

### 2단계

각 답변에 나온 코드를 실제 Repository의 파일에서 직접 찾습니다.

### 3단계

코드를 보면서 "왜 이 코드가 필요한가?"를 설명합니다.

### 4단계

코드를 가리고 기능의 전체 흐름을 말합니다.

### 5단계

Mission 디렉터리의 practice 폴더에서 직접 다시 작성합니다.

최종 목표는 코드를 외우는 것이 아니라:

**"내가 작성한 코드가 왜 이렇게 동작하는지 설명할 수 있다."**

입니다.
