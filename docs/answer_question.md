# 코디세이 질문별 학습 답변

이 문서는 학습 목표와 기능 요구사항을 기준으로 작성한 복습용 자료입니다. 

질문이 겹쳐도 일부러 합치지는 않았습니다. 같은 개념을 다른 질문으로 반복해서 설명하면서 실제 코드에 연결하는 목적으로 개념 이해를 돕기위한 반복 학습의 목적이 있었습니다. 

# html /semantic html 
##  Q1. html은 무엇인가?
HTML 은  웹 문서의 구조와 의미를 표현하는 마크업 언어입니다. 제목, 문단, 링크, 이미지, 입력창 등의 역할을 브라우저에 알려줍니다.

## Q2. semantic html 이란?
태그 이름 자체가 콘텐츠의 역할을 설명하는 html 입니다. 예를 들어 header, nav, main, section, article, footer가 있습니다. 

## Q3. 왜 div만 사용하지 않았는가?
div는 의미가 없는 일반적인 컨테이너입니다. 모든것을 div로 만들면 구조를 코드만 보고 파악하기 어렵습니다. semantic tag를 사용하면 문서의 역할과 구조를 더 명확하게 표현 할 수 있습니다.

## Q4.내가 만든 페이지의 구조는?
header -> nav -> main -> 여러 section -> footer 구조입니다. 
main안에는 hero, about, skills, projects, side projectts, contact 가 있습니다.

## Q5. section과 article의 차이는?
section은 하나의 주제를 가진 콘텐츠 영역입니다. article은 다른곳에 독립적으로 옮겨져도 하나의 콘텐츠로 의미를 가질 수 있는 단위 입니다. 

## Q6. id는 왜 사용하는가?
anchor 이동과 dom선택에 사용합니다. 

```
<a href="#projects">Projects</a>
<section id="projects">...</section>
```

## Q7. ALT는 왜 필요한가 

이미지의 의미를 텍스트로 설명합니다. 이미지가 보이지 않는 경우나 보조기기를 사용하는 경우에도 의미를 전달 할 수 있습니다. 

## Q8. label과 input을 연결하는 이유는?

사용자가 입력항목을 명확하게 이해하도록 돕고 접근성을 높이기 위해서입니다.

```
<label for="email">Email</label>
<input id="email" type="email">
```

# css

## Q9. css의 역할은?
html이 구조를 담당한다면 css는 크기, 색상, 배치, 반응형, 상태 변화 등 화면 표현을 담당합니다. 

## Q10. css 변수란?

반복되는 값을 이름으로 저장하는 css custom property 입니다. 

```
:root {
    --color-navy: #203746;
}

.button {
    background: var(--color-navy);
}
```


## Q11. 왜 css 변수를 사용했는가?

theme을 바꾸기 쉽고 반복 값을 한곳에서 관리할 수 있기 때문입니다. 

## Q12.flexbox 와 grid의 차이는?

flexbox는 주로 한방향의 1차원 배치를 말하며 grid는 행과 열을 함께 사용하는 2차원 배치에 적합합니다. 

## Q13. navigation에 flexbox를 사용한 이유는?

로고와 메뉴를 한 방향으로 정렬하고 좌우 공간을 분배하기 좋기 때문입니다. 

## Q14. project card에 grid 를 사용한 이유는 무엇인가? 

grid는 여러 카드를 행과 열로 배치하는데 사용하며 이에 적합하기 때문입니다. 

## Q15. auto-fit롸 minmax는 무엇인가?

minmax는 각 grid track의 최소/ 최대 크기를 지정합니다. auto-fit은 사용 가능한 공간에 따라 가능한 열을 자동으로 배치힙니다. 

```
grid-template-columns:
    repeat(auto-fit, minmax(240px, 1fr));
```

## Q16. mobile- first란? 

작은 화면을 기본 스타일로 작성한 뒤 media query로 더 넓은 화면을 확장하는 방식입니다. 

## Q17. 왜 반응형이 필요한가?

스마트폰 , 태블릿, 노트북, 데스크톱의 사용 가능한 공간이 서로 다르기 때문입니다. 

# DOM 

## Q18. DOM이란?

브라우저가 html문서를 javascript에서 객체 형태로 다룰 수 있도록 만든 문서 구조입니다.

## Q19.  querySelector란?

css선택자를 사용해서 첫번째로 일치하는 요소를 선택합니다. 

```
const navMenu =
    document.querySelector("#nav-menu");
```

## Q20. querySelectorALL 이란?
조건의 맞는 여러 요소를 선택합니다. 

```
const targets =
    document.querySelectorAll(".project-card");
```

## Q21. addEventListener란?

특정 이벤트가 발생했을때 실행할 함수를 등록합니다. 

```button.addEventListener("click", () => {
    console.log("clicked");
});
```

## Q22.왜 onclick을 사용하지 않았는가?

mission에서 html의 onclick대신 addEventListener 를 사용하도록 요구했습니다. 또한 구조와 동작을 분리 할 수 있습니다. 

## Q23. classList란?

요소의 css class를 javascript에서 조작합니다. add, remove, toggle등이있습니다. 

## Q24.textContent와 innerHTML의 차이는?

textContent는 문자열을 텍스트로 넣습니다. innerHTML은 문자열을 html로 해석합니다. 

현재 프로젝트에서 상태 메시지는 textContent를 사용하고 , Reponsitory card는 template Literal + inner HTML을 사용합니다. 

중요 : 외부 api 데이터를 innerHTML에 직접 넣을때는 xss/html injection을 고려해야합니다. 현재 코드는 mission 학습목적의 구현이며 이후 escapeHTML 같은 방어 로직을 추가할 수 잇습니다. 

# javascript문법

## Q25. const와 let의 차이는?

const는 재할당 하지 않는 변수 , let은 이후 다른 값으로 재할당 할 수 있는 변수에 사용됩니다. 


```

const username = "ewisewjd";
let activeLanguage = "All";

activeLanguage = "JavaScript";
```

## Q26.왜 var를 사용하지 않는가?

mission에서 var대신 const/let을 요구합니다. 또한 변수의 재할당 여부를 코드에서 더 명확하게 표현할 수 있습니다. 

## Q27. 화살표 함수란?

함수를 간결하게 표현하는 문법입니다. 현재 프로젝트에서는 이벤트와 배열 메서드 (callback)에 사용됩니다.

```
const double = (number) => number * 2;
```

## Q28. destructuring이란?

객체나 배열에서 값을 꺼내 변수로 만드는 문법입니다. 
```
const {
    name,
    description,
    language
} = repo;

```

## Q29.map()이란?

배열의 각 요소를 변환하여 새로운 배열을 만드는 메서드입니다. 

현재 프로젝트에서는 repository-> card html 변환에 사용됩니다. 

## Q30.filter()란?

조건을 만족하는 요소만 남겨두고 새로운 배열을 만드는 메서드입니다. 
현재 프로젝트에서는 fork/archived제외와 language filter에 사용됩니다. 

## Q31. map()과 filter()의 차이는?

map은 변환, filter는 선택입니다.

```
repos.map((repo) => makeCard(repo));

repos.filter(
    (repo) => !repo.fork
);
```

## Q32. forEach는 무엇인가?

배열의 각 요소를 순회하여 동작을 실행할때 사용합니다. 새로운 배열을 만드는 것이 주목적은 아닙니다. 

# api/ 비동기

## Q33. api란?

프로그램이 다른 서비스의 데이터나 기능을 사용할 수 있도록 제공하는 인터페이스입니다. 

## Q34. 이 프로젝트에서 사용하는 api는?

github rest api입니다. 

```
https://api.github.com/users/ewisewjd/repos
```

## Q35. fetch란?

http요청을 보내는 web api입니다. 

## Q36.async란?

함수를 비동기 함수로 만들며 해당 함수는 promise를 반환합니다. 

## Q37.await란?

promise의 결과를 기다린 뒤 , 다음 코드를 실행다도록 합니다. async 함수 안에서 사용할 수 있습니다. 

## Q38. 왜 async/await가 필요한가?

네트워크 요청은 언제 끝날지 고정되어 있지 않은 비동기 작업이기 때문입니다. 요청 -> 응답 -> 데이터 처리 순서를 읽기 쉽게 표현할 수 있습니다. 

## Q39. try/catch는 왜 사용하는가?

api요청이나 데이터 처리 중 오류가 발생했을때 정상적인 화면 흐름으로 복구하고 사용자에게 error ui를 보여주기 위해 사용합니다. 

## Q40. response.ok는 왜 확인하는가?

fetch가 http 요청 자체에 성공햇더라도 404, 403 등의 http 오류가 있을 수 있습니다. response.ok로 성공 상태인지 확인합니다. 

## Q41. github api에서 403이 발생할 수 있는 이유는?

인증 없이 api를 반복 호출하면 rate limit에 걸릴 수 있습니다. 현재 코드는 403을 감지하고 error 상태로 처리합니다. 

# 상태와 렌더링

## Q42. 여기서 상태란?

현재 화면이나 기능의 동작을 결정하는 값입니다. 

예시:

```
let activeLanguage = "All";
```
현재 어떤 language filter가 선택됐는지를 나타냅니다. 


## Q43. 이벤트 -> 상태 -> 화면 업데이트란?

사용자가 버튼을 클릭하고그 결과 상태가 변경되고 , 변경된 상태를 기준으로 DOM을 업데이트 하는 흐름입니다. 

## Q44.dark mode 흐름은?

```
click
→ next Theme 계산
→ data-theme 변경
→ CSS [data-theme="dark"] 적용
→ 화면 변경
→ localStorage 저장
```

## Q45. api흐름은?

```
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

## Q46. form 흐름은?

```
input/submit
→ validateField()
→ 값 검사
→ 유효성 결정
→ aria-invalid 변경
→ error message 변경
```

## Q47.filter흐름은?

```
Filter click
→ activeLanguage 변경
→ renderFilters()
→ renderRepoCards()
→ filter()
→ Card 재생성
```

## Q48. 왜 이개념이 react와 연결되는가?

react는 state가 바뀌면 그 state 를 기반으로 ui를 다시 render하는 사고 방식을 사용합니다. 현재 프로젝트에서는 그 흐름을 dom을 직접 조작하면서 경험했습니다. 

# localStorage란?

## Q49.localstorage란?

브라우저에 문자열 데이터를 저장 할 수 잇는 저장 공간입니다. 

```
localStorage.setItem(
    "cw-voyage-theme",
    "dark"
);

const theme =
    localStorage.getItem(
        "cw-voyage-theme"
    );
```

## Q50. 왜 theme를 localstorage에 저장하는가?

새로 고침해도 사용자의 theme선택을 유지하기 위해서입니다. 

# intersection observer

## Q51. intersection observer란?

요소가 viewport와 교차하는지를 관찰하는 web api입니다. 

## Q52.threshold 0.2란?

관찰 대상의 약 20%가 viewport와 교차하면 callback이 실행되도록 설정한 값입니다. 

```
new IntersectionObserver(
    callback,
    { threshold: 0.2 }
);
```

## Q53. 왜 사용하는가?

스크롤 위치를 매번 직접 계싼하기 보다 요소가 화면에 들어왓는가?를 조건으로 관찰하여 등장 효과를 구현하기 좋기 때문입니다. 

# form  

## Q54. preventDefault란?

브라우저의 기본 동작을 막는 메서드 입니다. form의 기본 제출 동작으로 페이지가 이동 / 새로 고침하는 것을 막기 위해 사용합니다. 

## Q55. 왜 input 이벤트를 사용하는가?

사용자가 입력하는 즉시 검증결과를 보여주기 위해서 입니다. 

## Q56. 이메일 형식은 어떻게 검사하는가?

정규 표현식을 사용해서 기본적인 email@domain형태를 검사합니다. 

중요하게도 정규표현식은 실제로 존재하는 이메일인지 확인하는 것이 아니라 형식만 확인합니다. 

# navigation/ scroll

## Q57. 햄버거 메뉴는 어떻게 동작하는가?

click -> isopen 계산 -> classList.toggle -> aria-expanded 변경 -> css가 메뉴 표시 / 숨김

##  Q58. classList.toggle 의 두번째 인자는?

boolean 값입니다. 

true 면 class를 추가하면 false면 제거합니다. 

## Q59. Scroll top 은 어떻게 동작하는가?

scrolly가 300보다 커지면 hidden을 false로 만들어 표시하고 클릭하면 window.scrollTo로 top:0으로 이동합니다. 

## Q60. header 60px의 기준은?

mission에서 60px이상 스크롤 하면 navigation스타일을 변경하도록 요구했고 현재 코드에서는 y>60을 사용했습니다. 

# repository

## Q61. repository card 전체 흐름은?

GitHub API
→ repositories
→ filter
→ slice
→ map
→ makeCard
→ Template Literal
→ innerHTML
→ 화면

## Q62. makeCard에서  destructuring을 사용하는 이유는?
card에 필요한 데이터만 명시적으로 꺼내 코드의 의도를 분명하게 하기 위해서입니다. 

## Q63. stargazers_count기본값 0은 왜 있는가?
값이 undefinded 인 경우 카드에 undefinded가 출력되지 않고 0을사용하도록 사기 위해서입니다. 

## Q64. fork와 archived를 왜 제외하는가?
현재 protfolio에서 실제로 보여줄 repository만 남기기 위해서입니다.

```data.filter(
    (repo) => !repo.fork && !repo.archived
);
```

# 상태 ui

## Q65. Loading이 필요한 이유는?

네트워크 요청이 진행중임을 사용자에게 알려주기위해서입니다. 

## Q66. Error가 필요한 이유는?

api요청 실패를 사용자에게 알려주고 페이지 전체가 고장난 것처럼 보이지 않게 하기 위해서 입니다.

## Q67. Empty와 Error의 차이는?

error는 데이터를 가져오는 과정에 실패한 것입니다. 

empty는 요청에는 성공했지만 표시할 데이터가 없는 것입니다.

## Q68. retry는 왜 필요한가?

일시적인 네트워크 오류나 rate limit 이후 사용자가 다시 요청할 수 있도록 하기 위해서 입니다. 

#  접근성 

## Q69. aria-expanded는? 

메뉴처럼 열림 / 닫침 상태가 있는 ui의 현재 상태를 보조기기에 전달합니다. 

## Q70. aria-live는?

동적으로 바뀌는 상태 메시지를 보조기기가 알 수 있도록 합니다. 

현제 repo-status와  form-status등에 사용했습니다. 

## Q71. aria-pressed는?

toggle/filter버튼이 현재 눌린 상태인지 표현합니다. 현재 language filter에 사용했습니다. 

# 개발 환경/ 배포

## Q72.defer는 왜 사용하는가?

외부 javascript를 html 파싱을 방해하지 않으면서 다운로드하고 , 문서 파싱후 실행하도록 합니다. 

현재 :
```
<script
    src="js/main.js"
    defer>
</script>
```

## Q73.github pages란?

github repository의 정적 파일을 웹사이트로 제공하는 호스팅 기능입니다. 

현재 배포 주소는 

https://ewisewjd.github.io

입니다. 

## Q74.왜 github pages를 사용했는가?

현재 프로젝트는 별도 서버가 필요한 애플리케이션이 아니라 html, css, javascript기반 정적 사이트 이기 때문입니다. 


# 코드 설계

## Q75.왜 함수를 분리했는가?

하나의 함수의 모든 일을 담당하면 읽기와 수정이 어려워집니다. 

현재는 역할을 나눴습니다. 

- oadRepositories — API 요청
- renderFilters — Filter UI
- renderRepoCards — Repository Card
- makeCard — Card HTML 생성
- setStatus — 상태 메시지
- validateField — Form 필드 검증

## Q76. setStatus는 왜 필요한가?

loading, error, empty 등 상태 메시지를 여러 곳에서 공통적으로 변경하기 때문입니다. 

## Q77. validateField는 왜 필요한가? 

name, email, message 모두 입력갑을 검사하지만 결과를 표시하는 흐름은 공통적이기 때문입니다. 

