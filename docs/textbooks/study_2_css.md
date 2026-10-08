# 학습자료 2편 — CSS 완전 정복

> 대상: CSS를 처음 배우는 사람 · 목표: **"왜 이렇게 배치되는지"를 눈으로 예측할 수 있는 수준까지**
> HTML이 뼈대라면 CSS는 그 뼈대에 옷을 입히고 자세를 잡아주는 규칙입니다.

## 0. 목차 및 범위 선언
| 장 | 주제 |
| --- | --- |
| 1 | CSS란 무엇인가 |
| 2 | CSS 문법과 연결 방법 |
| 3 | 선택자(Selector) |
| 4 | 우선순위와 상속 |
| 5 | 박스 모델 |
| 6 | 색상·단위·값 |
| 7 | `display`와 문서 흐름 |
| 8 | Flexbox |
| 9 | Grid |
| 10 | `position`과 쌓임 순서(z-index) |
| 11 | 타이포그래피 |
| 12 | 배경과 테두리 |
| 13 | 변형(transform)과 전환(transition), 애니메이션 |
| 14 | 반응형 디자인과 미디어 쿼리 |
| 15 | CSS 변수(커스텀 프로퍼티) |
| 16 | 가상 클래스·가상 요소 |
| 17 | 레이어링 기법 (그라디언트, `content`, `clip-path` 등) |
| 18 | 실전 도구·디버깅·성능 |
| 19 | 속성 총정리 표 |
| 20 | 자주 하는 실수 체크리스트 |
| 21 | 실습 과제 |
| 22 | 용어 사전 |

CSS도 HTML처럼 방대해서, 자주 쓰는 것은 깊게, 드문 것은 표로 정리합니다. 더 깊은 레퍼런스는 [MDN CSS](https://developer.mozilla.org/ko/docs/Web/CSS)입니다.

---

## 1. CSS란 무엇인가

**핵심**: CSS(Cascading Style Sheets)는 HTML 요소에 **"어떻게 보일지"** 규칙을 적용하는 언어입니다. "Cascading(계단식)"이라는 이름처럼, 여러 규칙이 쌓여 있을 때 **어느 것이 이기는지 정하는 절차**가 핵심입니다.

### 1.1 CSS 규칙의 생김새
```css
selector {
  property: value;
  property: value;
}
```
```css
h1 {
  color: navy;
  font-size: 32px;
}
```
- `h1`: **선택자** — "누구에게 적용할지"
- `color: navy;`: **선언(declaration)** — 속성(property)과 값(value)의 쌍
- `{ }` 안의 선언들을 합쳐 **선언 블록**, 선택자+선언 블록 전체를 **규칙(rule)** 이라 합니다.

### 1.2 CSS가 하는 일의 범위
CSS는 색, 크기, 간격, 배치, 폰트, 애니메이션 등 **겉모습과 배치**를 다룹니다. 데이터 처리, 조건 분기, 이벤트 처리는 CSS의 일이 아닙니다(그건 JavaScript, 3편).

### 확인 질문
1. `color: navy;`에서 `color`와 `navy`는 각각 뭐라고 부를까?

<details><summary>정답 보기</summary>

`color`는 속성(property), `navy`는 값(value)입니다. 둘을 합쳐 선언(declaration)이라 합니다.
</details>

---

## 2. CSS 연결 방법과 문법

### 2.1 세 가지 연결 방법
```html
<!-- 1. 외부 스타일시트 (권장) -->
<link rel="stylesheet" href="css/style.css">

<!-- 2. 내부 스타일시트 -->
<style>
  p { color: red; }
</style>

<!-- 3. 인라인 스타일 (특수한 경우만) -->
<p style="color: red;">글자</p>
```
- **외부 파일**을 쓰면 여러 HTML 페이지가 하나의 CSS를 공유하고, 브라우저 캐시의 이점도 받습니다. 실무 기본값입니다.
- **인라인 스타일**은 우선순위가 매우 높아서(4장) 유지보수를 어렵게 만듭니다. JavaScript가 동적으로 값을 넣을 때 정도만 예외적으로 씁니다.

### 2.2 주석
```css
/* 이 줄은 실행되지 않는다 */
```

### 2.3 여러 선택자, 여러 값
```css
h1, h2, h3 {              /* 콤마: 여러 선택자에 같은 스타일 */
  font-family: serif;
}

.card {
  margin: 8px 16px;       /* 공백: 한 속성에 값 여러 개(방향별) */
}
```

### 2.4 대소문자·공백·세미콜론
- 속성 이름은 소문자, `-`로 단어 연결(`font-size`).
- 마지막 선언 뒤 세미콜론은 생략 가능하지만 항상 붙이는 습관을 권장합니다(다음 줄 추가 시 실수 방지).

### 내 프로젝트에서 찾기
`<link rel="stylesheet" href="css/style.css">` 처럼 **외부 스타일시트 3개**(`style.css`, `updates.css`, `backgrounds.css`)를 순서대로 연결했습니다.

---

## 3. 선택자 (Selector)

**핵심**: 선택자는 "어떤 요소를 고를까"의 문법입니다. 조합할수록 더 구체적으로 고를 수 있습니다.

### 3.1 기본 선택자
| 선택자 | 의미 | 예 |
| --- | --- | --- |
| `*` | 모든 요소 | `* { box-sizing: border-box; }` |
| `태그` | 그 태그 전부 | `p { }` |
| `.클래스` | 그 클래스를 가진 요소 | `.card { }` |
| `#아이디` | 그 id를 가진 요소(문서에 하나) | `#hero { }` |
| `[속성]` | 그 속성을 가진 요소 | `[required] { }` |
| `[속성="값"]` | 속성 값이 정확히 일치 | `[type="email"] { }` |
| `[속성^="값"]` | 값이 그것으로 시작 | `[href^="https"] { }` |
| `[속성$="값"]` | 값이 그것으로 끝 | `[src$=".png"] { }` |
| `[속성*="값"]` | 값에 그것이 포함 | `[class*="btn"] { }` |

### 3.2 조합 선택자(결합자)
| 결합자 | 의미 | 예 |
| --- | --- | --- |
| (공백) | 자손(내부 어디든) | `nav a { }` — nav 안의 모든 a |
| `>` | **직계** 자식만 | `ul > li { }` — ul의 바로 아래 li만 |
| `+` | 바로 다음 형제 | `h2 + p { }` — h2 바로 뒤의 p |
| `~` | 뒤따르는 모든 형제 | `h2 ~ p { }` — h2 뒤에 오는 모든 형제 p |
| (붙여쓰기) | 동시에 만족 | `p.important { }` — p이면서 class가 important |

### 3.3 가상 클래스(:) — 상태나 위치에 따라 선택
| 선택자 | 의미 |
| --- | --- |
| `:hover` | 마우스를 올렸을 때 |
| `:focus` | 포커스(선택)되었을 때 |
| `:active` | 클릭하는 순간 |
| `:visited` | 방문한 링크 |
| `:first-child` / `:last-child` | 부모의 첫/마지막 자식일 때 |
| `:nth-child(2)` / `:nth-child(2n)` | n번째 / 짝수번째 자식 |
| `:not(.card)` | .card가 아닌 것 |
| `:checked` | 체크박스·라디오가 선택됨 |
| `:disabled` / `:enabled` | 비활성/활성 폼 요소 |
| `:root` | 문서의 최상위(보통 `html`과 같음, CSS 변수 선언에 자주 씀) |
| `:focus-visible` | 키보드로 포커스했을 때만(마우스 클릭 시는 제외) |
| `:empty` | 자식이 없는 요소 |

### 3.4 가상 요소(::) — 요소의 일부를 가리킴
| 선택자 | 의미 |
| --- | --- |
| `::before` / `::after` | 요소의 내용 앞/뒤에 가짜 콘텐츠 삽입(`content` 필요) |
| `::placeholder` | input의 placeholder 글자 |
| `::selection` | 사용자가 드래그로 선택한 글자 영역 |
| `::first-line` / `::first-letter` | 첫 줄 / 첫 글자 |

> `:`(콜론 하나)는 **가상 클래스**(상태), `::`(두 개)는 **가상 요소**(문서에 없던 부분을 가리킴)입니다. 옛날 CSS2에서는 둘 다 `:`였지만 CSS3부터 구분합니다(호환을 위해 `:before`도 여전히 동작).

### 내 프로젝트에서 찾기
```css
.about-card img { width: 106px; height: 106px; }   /* 자손 결합자 */
```
```css
[data-theme="dark"] .coming-soon-card { background: rgba(24,39,49,.82); }
```
→ `[속성="값"]` 선택자로 다크모드 상태를 선택했습니다(15장에서 원리 설명).

### 확인 질문
1. `ul li`와 `ul > li`의 차이는?
2. `:hover`와 `:focus`의 차이는? (마우스 vs 키보드 관점)
3. `::before`가 실제로 화면에 나타나려면 어떤 속성이 꼭 있어야 할까?

<details><summary>정답 보기</summary>

1. `ul li`는 ul 안 어디에 있든(몇 단계 아래든) 모든 li를 고르고, `ul > li`는 ul의 **바로 아래** li만 고릅니다.
2. `:hover`는 마우스를 올렸을 때, `:focus`는 클릭이나 Tab으로 그 요소가 선택되었을 때입니다. 키보드 사용자에게는 `:focus`가 중요합니다.
3. `content` 속성(빈 문자열이라도) 이 필요합니다. 없으면 표시되지 않습니다.
</details>

---

## 4. 우선순위(Specificity)와 상속

**핵심**: 같은 요소에 여러 규칙이 겹치면 브라우저는 정해진 절차로 **하나의 승자**를 정합니다.

### 4.1 적용 순서 3단계
1. **중요도(`!important`)** — 있으면 거의 무조건 이김(웬만하면 쓰지 않는 게 좋음)
2. **명시도(specificity)** — 더 구체적인 선택자가 이김
3. **작성 순서** — 명시도가 같으면 **나중에 쓴 것**이 이김

### 4.2 명시도 계산법
| 종류 | 점수 |
| --- | --- |
| 인라인 스타일 (`style="..."`) | 1000 |
| `#id` | 100 |
| `.class`, `[속성]`, `:hover` 등 가상 클래스 | 10 |
| 태그(`div`), `::before` 등 가상 요소 | 1 |
| `*` (전체 선택자) | 0 |

```css
#nav a { color: blue; }         /* 100 + 1 = 101 */
.nav-menu a { color: red; }     /* 10 + 1 = 11 */
```
→ 101 > 11이므로 파란색이 이깁니다. (점수는 자릿수처럼 비교하며, "10개 class"가 "1개 id"를 절대 못 이깁니다.)

### 4.3 상속(inheritance)
일부 속성은 부모에게 지정하면 자식도 **자동으로 물려받습니다.**
- **상속되는 것(주로 텍스트 관련)**: `color`, `font-family`, `font-size`, `line-height`, `text-align` 등
- **상속 안 되는 것(주로 박스 관련)**: `margin`, `padding`, `border`, `width`, `height`, `background` 등

`inherit`(부모 값을 강제로 물려받기), `initial`(브라우저 기본값으로), `unset`(상속되는 속성은 inherit처럼, 아니면 initial처럼)으로 명시적으로 제어할 수도 있습니다.

### 4.4 왜 이게 중요한가
초보자가 "분명히 CSS를 썼는데 안 먹힌다"고 느끼는 대부분의 이유가 **다른 규칙에 명시도로 밀렸기 때문**입니다. 개발자 도구의 Elements 탭에서 해당 요소를 클릭하면, 적용된 규칙과 **취소선이 그어진(밀린) 규칙**을 볼 수 있습니다.

### 내 프로젝트에서 찾기
```css
.about-card img{width:106px;height:106px;border-color:var(--voyage-line)}     /* updates.css, 나중에 로드 */
```
```css
.about-card img { width: 120px; height: 120px; }   /* style.css, 먼저 로드, 미디어쿼리 안 */
```
두 CSS 파일에 같은 선택자(`.about-card img`)가 있습니다. 명시도가 같다면(둘 다 클래스+태그 조합) **나중에 링크한 파일(updates.css)** 또는 **나중에 쓰인 규칙**이 이깁니다. 이렇게 CSS 파일이 여러 개이고 겹치는 선택자가 있으면 "어느 게 이기는지" 헷갈리기 쉬우니, 개발자 도구로 실제 적용된 값을 확인하는 습관이 중요합니다.

### 확인 질문
1. `.box`와 `#box`가 같은 요소에 다른 색을 지정하면 어느 것이 이길까?
2. `color`는 상속될까, `margin`은 상속될까?
3. 명시도가 같은 두 규칙이 충돌하면 무엇이 기준이 될까?

<details><summary>정답 보기</summary>

1. `#box`(id, 100점)가 `.box`(class, 10점)를 이깁니다.
2. `color`는 상속됩니다. `margin`은 상속되지 않습니다.
3. CSS 파일/코드에서 더 나중에 작성된 규칙이 이깁니다.
</details>

---

## 5. 박스 모델

**핵심**: 브라우저는 모든 요소를 **상자(box)** 로 취급합니다. 상자는 안에서 바깥으로 `content → padding → border → margin` 네 겹입니다.

```text
┌───────────── margin (상자 바깥 여백, 투명) ─────────────┐
│ ┌───────────── border (테두리) ─────────────┐           │
│ │ ┌───────────── padding (안쪽 여백) ────┐   │           │
│ │ │           content (내용)            │   │           │
│ │ └────────────────────────────────────┘   │           │
│ └────────────────────────────────────────────┘           │
└────────────────────────────────────────────────────────┘
```

### 5.1 각 값 지정하기
```css
.box {
  width: 200px;
  height: 100px;
  padding: 16px;              /* 네 방향 모두 16px */
  padding: 8px 16px;          /* 위아래 8px, 좌우 16px */
  padding: 4px 8px 12px 16px; /* 위 오른쪽 아래 왼쪽 (시계방향) */
  border: 1px solid #333;     /* 두께 스타일 색 */
  margin: 0 auto;             /* 위아래 0, 좌우 auto → 가운데 정렬(블록 요소) */
}
```
개별 방향: `margin-top`, `margin-right`, `margin-bottom`, `margin-left` (padding, border도 동일).

### 5.2 `box-sizing` — 초보자가 가장 헷갈리는 부분
```css
.box { width: 200px; padding: 20px; border: 5px solid; }
```
- **기본값 `content-box`**: `width`는 **content만의 너비**입니다. 실제 화면 차지 너비는 `200 + 20*2 + 5*2 = 250px`가 됩니다. "내가 지정한 크기랑 실제 크기가 다르다"는 혼란의 원인입니다.
- **`box-sizing: border-box`**: `width`에 **padding과 border를 포함**시킵니다. `width: 200px`이면 실제로도 200px입니다. 훨씬 예측하기 쉬워서, 대부분의 실무 프로젝트가 아래 규칙을 맨 위에 씁니다.
```css
*, *::before, *::after {
  box-sizing: border-box;
}
```

### 5.3 마진 상쇄(margin collapsing)
세로로 인접한 두 블록 요소의 위아래 `margin`은 **더해지지 않고 큰 값 하나만** 적용되는 경우가 있습니다(같은 부모 안에서 padding·border가 없을 때 등). Flexbox나 Grid 컨테이너 안에서는 이 현상이 일어나지 않습니다.

### 내 프로젝트에서 찾기
`style.css`나 `updates.css` 어딘가에 (일반적으로) `box-sizing: border-box;`를 전역으로 선언해두는 것이 표준 관례입니다. 카드 요소들의 `padding`, `border-radius`, `border-color` 값들은 모두 박스 모델의 각 층을 조절하는 것입니다.

### 확인 질문
1. `width: 200px; box-sizing: content-box; padding: 10px;`인 요소의 실제 차지 너비는?
2. `box-sizing: border-box`를 쓰면 위 상황에서 실제 너비는 얼마가 될까?

<details><summary>정답 보기</summary>

1. 220px (200 + 10*2). border가 없다고 가정.
2. 200px. padding이 width 안에 포함되기 때문입니다.
</details>

---

## 6. 색상·단위·값

### 6.1 색상 표기법
| 표기 | 예 | 설명 |
| --- | --- | --- |
| 이름 | `red`, `navy`, `transparent` | 정해진 키워드(약 150개) |
| HEX | `#1EA1CF`, `#fff` | 16진수 RGB (3자리는 줄임 표기) |
| RGB | `rgb(30, 161, 207)` | 빨강·초록·파랑 각 0~255 |
| RGBA | `rgba(30, 161, 207, 0.5)` | RGB + 투명도(0~1) |
| HSL | `hsl(195, 75%, 46%)` | 색상(0~360도)·채도·명도 — 사람이 "더 밝게/채도 낮게"를 조절하기 직관적 |
| HSLA | `hsla(195, 75%, 46%, 0.5)` | HSL + 투명도 |
| 현대 표기 | `rgb(30 161 207 / 50%)` | 콤마 없이 슬래시로 투명도(CSS Color 4) |

### 6.2 길이 단위
| 단위 | 종류 | 의미 |
| --- | --- | --- |
| `px` | 절대(사실상) | 화면 픽셀 기준의 고정 크기 |
| `%` | 상대 | **부모**를 기준으로 한 비율 |
| `em` | 상대 | **자기 자신(또는 부모)의 font-size** 기준 |
| `rem` | 상대 | **root(`html`)의 font-size** 기준 — 전역으로 하나만 바꾸면 전체 비율 조정 가능 |
| `vw` / `vh` | 상대 | 뷰포트(화면) 너비/높이의 1% |
| `vmin` / `vmax` | 상대 | 뷰포트의 짧은/긴 변 기준 |
| `ch` | 상대 | 숫자 "0" 하나의 너비(글자 수 기반 폭 지정에 유용) |
| `fr` | 상대 | Grid 전용, "남은 공간의 몇 분의 1"(9장) |

**`em`의 함정**: `em`은 중첩될수록 곱해져서 예측하기 어려워질 수 있습니다. 그래서 실무에서는 폰트 크기에 `rem`(전역 기준 하나)을, 특정 요소 안에서의 상대 크기 조절에만 `em`을 쓰는 경우가 많습니다.

### 6.3 값 없이 쓰는 키워드
`auto`(브라우저가 알아서 계산), `inherit`, `initial`, `unset`, `none`, `normal` 등은 숫자가 아닌 **키워드 값**입니다.

### 6.4 `calc()` — 단위를 섞어서 계산
```css
width: calc(100% - 40px);   /* 부모 너비에서 40px을 뺀 값 */
```
서로 다른 단위(`%`와 `px`)를 섞어 계산할 수 있는 유일한 방법입니다.

### 내 프로젝트에서 찾기
- `color: #2B2B28;` 같은 HEX 값과 `rgba(24,39,49,.82)` 같은 반투명 값이 함께 쓰였습니다.
- `.coming-soon-card`에 준 `rgba(250,247,239,.72)`는 배경 지도가 살짝 비치도록 **의도적으로 투명도**를 준 것입니다.
- `clamp(22px, 4vw, 38px)` (아까 내가 추가한 코드)처럼 `vw`(뷰포트 단위)가 쓰였다면, 화면 너비에 비례해 크기가 변하는 반응형 값입니다(6.5 참고).

### 6.5 `clamp()`, `min()`, `max()` — 반응형 값의 지름길
```css
padding: clamp(22px, 4vw, 38px);
```
"**최소 22px, 화면 너비의 4%가 이상적이지만, 최대 38px을 넘지 않게**"라는 뜻입니다. 미디어 쿼리(14장) 없이도 화면 크기에 따라 부드럽게 값이 변합니다.

### 확인 질문
1. `rem`과 `em`의 기준이 되는 대상은 각각 무엇일까?
2. `rgba(0,0,0,0.5)`는 무슨 색을 나타낼까?
3. `calc(100% - 40px)`이 필요한 이유는?

<details><summary>정답 보기</summary>

1. `rem`은 `html`(root)의 font-size, `em`은 자신 또는 부모의 font-size가 기준입니다.
2. 반투명한 검정(50% 불투명도)입니다.
3. `%`와 `px`는 단위가 달라 그냥 뺄셈이 안 되므로, `calc()`가 서로 다른 단위를 섞어 계산해줍니다.
</details>

---

## 7. `display`와 문서 흐름

**핵심**: `display`는 요소가 **어떤 방식으로 배치되는지**를 결정하는, CSS에서 가장 중요한 속성 중 하나입니다.

### 7.1 기본값 복습 (HTML 4.7절과 연결)
| 값 | 기본으로 이 값을 갖는 요소 | 특징 |
| --- | --- | --- |
| `block` | `div`, `p`, `h1`, `section`, `ul` 등 | 한 줄 전체 차지, `width`/`height` 지정 가능 |
| `inline` | `span`, `a`, `strong`, `img`* | 내용만큼만 차지, `width`/`height` 무시됨(단, `img`는 예외적으로 적용됨) |
| `inline-block` | (기본값을 갖는 태그는 없음, 직접 지정) | 옆으로 나열되면서(inline) 크기 지정도 가능(block) |
| `none` | — | 아예 화면에서 사라짐(공간도 차지 안 함, `hidden` 속성과 유사한 효과) |

### 7.2 `display: none` vs `visibility: hidden` vs `opacity: 0`
| 속성 | 화면에 보임 | 공간 차지 | 클릭 가능 |
| --- | --- | --- | --- |
| `display: none` | X | X | X |
| `visibility: hidden` | X | **O**(자리는 남음) | X |
| `opacity: 0` | X(투명) | O | **O**(여전히 클릭됨!) |

### 7.3 현대 CSS의 두 주인공: `flex`와 `grid`
```css
display: flex;   /* 한 줄(또는 한 방향) 배치에 강함 */
display: grid;   /* 2차원(행과 열) 배치에 강함 */
```
이 두 값은 8장, 9장에서 깊게 다룹니다. `display: flex;`를 주는 순간 **그 요소의 직계 자식들**이 Flex 규칙을 따르게 됩니다(부모에게 선언하고, 효과는 자식들에게 나타남 — 이 패턴을 헷갈리지 않는 것이 중요합니다).

### 내 프로젝트에서 찾기
CSS에 `display` 값이 46번 등장합니다. 대부분 `flex`이고, 카드 그리드에는 `grid`가 쓰였습니다(`grid-template-columns`, `grid-template-rows`도 다수 등장). `hidden` 속성이 붙은 `#retry-button`, `#scroll-top`은 HTML의 `hidden` 불린 속성으로 `display: none`과 같은 효과를 냅니다.

### 확인 질문
1. 버튼을 안 보이게 하면서 그 자리를 다른 요소가 채우게 하려면 어떤 속성을 써야 할까?
2. `opacity: 0`으로 숨긴 버튼을 클릭할 수 있을까?

<details><summary>정답 보기</summary>

1. `display: none`입니다. 공간 자체가 사라져서 다른 요소가 그 자리를 메웁니다.
2. 네, 클릭됩니다. `opacity: 0`은 눈에만 안 보일 뿐 요소는 그대로 존재하고 상호작용도 가능합니다.
</details>

---

## 8. Flexbox

**핵심**: Flexbox는 자식들을 **한 방향(가로 또는 세로)** 으로 유연하게 배치하는 도구입니다. "이 요소들을 가운데 정렬하고 싶다", "간격을 균등하게 나누고 싶다"는 대부분 Flexbox로 해결됩니다.

### 8.1 컨테이너(부모)에 쓰는 속성
```css
.container {
  display: flex;
  flex-direction: row;        /* row(기본, 가로) | column(세로) | row-reverse | column-reverse */
  justify-content: center;    /* 주축(main axis) 정렬 */
  align-items: center;        /* 교차축(cross axis) 정렬 */
  flex-wrap: wrap;            /* 공간 부족 시 줄바꿈 허용 */
  gap: 16px;                  /* 자식들 사이 간격(margin보다 편리) */
}
```

### 8.2 축(axis) 개념이 핵심
- `flex-direction: row`(기본)이면 **주축은 가로**, 교차축은 세로입니다.
- `flex-direction: column`이면 **주축은 세로**로 바뀝니다. 이때 `justify-content`와 `align-items`의 방향도 함께 바뀝니다(헷갈리는 지점).

```text
flex-direction: row 일 때
┌─────────────────────────────┐
│ justify-content →(가로, 주축) │
│ align-items ↕(세로, 교차축)   │
└─────────────────────────────┘
```

### 8.3 `justify-content` 값
| 값 | 배치 |
| --- | --- |
| `flex-start` | 시작 쪽으로 붙임(기본) |
| `flex-end` | 끝 쪽으로 붙임 |
| `center` | 가운데 |
| `space-between` | 양 끝은 붙이고 사이는 균등 |
| `space-around` | 각 요소 양옆에 동일 여백 |
| `space-evenly` | 요소 사이·양끝 모두 동일 간격 |

### 8.4 `align-items` 값
`flex-start` `flex-end` `center` `stretch`(기본, 교차축 방향으로 꽉 채움) `baseline`(글자 기준선 정렬)

### 8.5 자식(item)에 쓰는 속성
```css
.item {
  flex-grow: 1;      /* 남는 공간을 얼마나 나눠 가질지(비율) */
  flex-shrink: 1;    /* 공간이 부족할 때 얼마나 줄어들지 */
  flex-basis: 200px; /* 기본 크기(width/height보다 우선) */
  flex: 1 1 200px;   /* grow shrink basis 한 번에(가장 많이 씀) */
  align-self: center; /* 이 요소만 교차축 정렬을 다르게 */
  order: 2;          /* 시각적 순서만 변경(HTML 순서는 그대로) */
}
```
**자주 쓰는 패턴**: `flex: 1;` → "남는 공간을 균등하게 나눠 가져라"(카드들을 같은 너비로 늘릴 때 자주 사용).

### 8.6 실전 패턴: 완벽한 가운데 정렬
```css
.center-box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
```
CSS 초보자들이 "어떻게 가운데 정렬하나요"라고 가장 많이 묻는 답이 이 세 줄입니다.

### 내 프로젝트에서 찾기
`justify-content`, `align-items`, `flex-wrap`, `gap`이 CSS 곳곳에 쓰였습니다. 예를 들어 네비게이션 바(로고+메뉴+토글 버튼을 가로로 배치)나 카드 안 요소들의 정렬에 Flexbox가 쓰였을 가능성이 높습니다. 직접 `.navigation`이나 `.about-card` 같은 클래스를 CSS에서 찾아 `display: flex`가 있는지, `justify-content`/`align-items` 값이 무엇인지 확인해보세요.

### 확인 질문
1. `flex-direction: column`일 때 `justify-content: center`는 요소를 가로로 가운데 정렬할까, 세로로 정렬할까?
2. 카드 3개를 가로로 놓고 **남는 공간을 균등하게 나눠 갖게** 하려면 각 카드에 무엇을 줄까?
3. `gap`과 `margin`의 차이는 무엇일까(Flexbox 안에서)?

<details><summary>정답 보기</summary>

1. 세로로 정렬합니다. `column`일 때 주축이 세로가 되기 때문입니다.
2. `flex: 1;`을 줍니다.
3. `gap`은 컨테이너가 자식 "사이"에만 간격을 주고 바깥쪽에는 안 생기지만, `margin`은 각 요소가 스스로 사방에 여백을 만들어 양 끝에도 여백이 생기고 상쇄 문제(5.3)가 생길 수 있습니다.
</details>

---

## 9. Grid

**핵심**: Grid는 Flexbox와 달리 **행과 열을 동시에** 다루는 2차원 배치 도구입니다. 카드 여러 장을 격자로 배치할 때 최적입니다.

### 9.1 기본 사용
```css
.gallery {
  display: grid;
  grid-template-columns: 200px 200px 200px;  /* 열 3개, 각 200px */
  grid-template-rows: auto auto;              /* 행 2개, 내용만큼 */
  gap: 16px;
}
```

### 9.2 `fr` 단위 — Grid의 핵심 무기
```css
grid-template-columns: 1fr 1fr 1fr;   /* 남는 공간을 3등분 */
grid-template-columns: 2fr 1fr;       /* 2:1 비율로 분배 */
```
`fr`은 "fraction(분수)"의 줄임말로, **Grid 컨테이너의 남는 공간을 비율로 나눈 단위**입니다.

### 9.3 반응형 카드 그리드의 정석 패턴
```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}
```
- `repeat(3, 1fr)`: `1fr`을 3번 반복 = `1fr 1fr 1fr`과 같음.
- `auto-fit`: **화면 크기에 맞게 열의 개수를 자동으로 조절**합니다.
- `minmax(220px, 1fr)`: 각 칸은 "최소 220px, 최대는 남는 공간만큼(1fr)".
- 이 세 가지를 합치면 미디어 쿼리 없이도 **화면이 넓으면 여러 열, 좁으면 자동으로 줄어드는** 카드 그리드가 만들어집니다. 매우 자주 쓰이는 실전 패턴입니다.

### 9.4 영역에 이름 붙이기(`grid-template-areas`)
```css
.layout {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-areas:
    "sidebar header"
    "sidebar main";
}
.sidebar { grid-area: sidebar; }
.header  { grid-area: header; }
.main    { grid-area: main; }
```
글자 그림처럼 레이아웃을 "그려서" 배치할 수 있어 복잡한 레이아웃에 직관적입니다.

### 9.5 자식이 몇 칸을 차지할지
```css
.item {
  grid-column: span 2;    /* 가로로 2칸 차지 */
  grid-row: 1 / 3;        /* 1번째 줄부터 3번째 줄 전까지(2칸) */
}
```

### 9.6 Flexbox vs Grid, 언제 무엇을?
| 상황 | 선택 |
| --- | --- |
| 한 방향(가로 또는 세로)으로만 나열 | Flexbox |
| 내용 크기에 따라 자연스럽게 줄바꿈되는 목록(메뉴, 태그) | Flexbox(`flex-wrap`) |
| 행과 열을 동시에 맞춰야 하는 격자(카드 목록, 대시보드) | Grid |
| 전체 페이지의 큰 레이아웃(헤더/사이드바/본문/푸터) | Grid |
둘은 경쟁 관계가 아니라 **Grid 안에 Flexbox를 쓰는 식으로 함께** 쓰는 경우가 많습니다.

### 내 프로젝트에서 찾기
`grid-template-columns`가 30번, `grid-template-rows`가 6번, `grid-auto-rows`가 4번, `place-items`가 4번 등장합니다. 프로젝트 카드(저장소 목록)처럼 여러 개를 격자로 늘어놓는 부분에 Grid가 쓰였을 가능성이 높습니다. `place-items`는 `align-items`+`justify-items`를 한 번에 쓰는 축약형입니다.

### 확인 질문
1. `repeat(auto-fit, minmax(220px, 1fr))`이 하는 일을 한 문장으로 설명하면?
2. 카드 목록을 만들 때 Flexbox 대신 Grid를 고려해야 하는 신호는?
3. `1fr 2fr`로 나뉜 두 열의 너비 비율은?

<details><summary>정답 보기</summary>

1. 화면 너비에 맞춰 최소 220px 너비를 유지하면서 열 개수를 자동으로 조절하고, 남는 공간은 균등하게 나눠 채운다는 뜻입니다.
2. 항목들이 가로와 세로 모두 격자처럼 줄과 칸이 맞아야 할 때입니다.
3. 1:2 비율입니다.
</details>

---

## 10. `position`과 쌓임 순서(z-index)

**핵심**: `position`은 요소를 "일반적인 문서 흐름"에서 빼내어 다르게 배치하는 속성입니다.

### 10.1 다섯 가지 값
| 값 | 기준점 | 문서 흐름에서 빠지나? |
| --- | --- | --- |
| `static` | 없음(기본값) | 아니오 |
| `relative` | **자기 자신의 원래 위치** | 아니오(원래 자리는 그대로 차지) |
| `absolute` | **가장 가까운 `position`이 static이 아닌 조상**(없으면 `html`) | 예 |
| `fixed` | **브라우저 화면(뷰포트)** — 스크롤해도 안 움직임 | 예 |
| `sticky` | 평소엔 `relative`처럼, 스크롤이 특정 지점에 닿으면 `fixed`처럼 | 스크롤 조건에 따라 다름 |

`top`, `right`, `bottom`, `left`는 `position`이 `static`이 아닐 때만 동작합니다.

### 10.2 `absolute`의 기준점 원리 (헷갈리는 핵심)
```css
.parent { position: relative; }   /* 기준점이 되어줌 */
.child  { position: absolute; top: 0; right: 0; }  /* .parent의 우측 상단 */
```
자식에게 `absolute`를 주면 "가장 가까운 **`position: relative`(또는 absolute/fixed) 조상**"을 기준으로 위치가 정해집니다. 조상 중에 그런 요소가 없으면 문서 전체(`html`) 기준이 되어 예상치 못한 위치에 나타납니다. 그래서 "자식에게 absolute를 줄 거면 부모에게 relative를 준다"는 짝이 국룰처럼 쓰입니다.

### 10.3 `sticky` 실전 예
```css
.site-header { position: sticky; top: 0; }
```
헤더가 스크롤할 때 화면 상단에 딱 붙어 계속 보이게 하는 전형적인 패턴입니다.

### 10.4 `z-index`와 쌓임 맥락(stacking context)
여러 요소가 겹칠 때 **어느 것이 위에 그려질지**를 정합니다. 숫자가 클수록 위에 옵니다.
```css
.modal { position: fixed; z-index: 1000; }
```
- `z-index`는 원칙적으로 **`position`이 `static`이 아닌 요소에만** 적용됩니다. 다만 예외가 있습니다: Flexbox나 Grid 컨테이너의 **직계 자식**은 `position`이 `static`이어도 `z-index`가 적용됩니다(Flexbox/Grid 명세의 확장 규칙). "겹치는 순서가 이상하다" 싶으면 이 예외부터 의심해보세요.
- `z-index`가 항상 절대적으로 비교되는 건 아니고, `opacity`가 1 미만이거나 `transform`이 있는 등의 조건에서 새로운 "쌓임 맥락"이 생겨 그 안에서만 비교되는 복잡한 규칙이 있습니다. 초보 단계에서는 "겹치는 요소가 있으면 z-index를 큰 값으로 준다" 정도로 시작하고, 이상하게 안 먹히면 조상 요소의 `position`/`opacity`/`transform`을 의심하면 됩니다.

### 내 프로젝트에서 찾기
`position`이 36번, `z-index`가 22번 등장합니다. 헤더(`sticky` 또는 `fixed`), 다크모드 토글 버튼, 스크롤 탑 버튼처럼 "화면에 고정되어 항상 보이는 요소"들이 유력한 후보입니다. `top`, `right`, `left`, `bottom`, `inset`(네 방향을 한 번에 지정하는 축약 속성) 값들도 다수 쓰였습니다.

### 확인 질문
1. 부모에 `position: relative`가 없는데 자식에 `position: absolute; top: 0;`을 주면 어떤 기준으로 배치될까?
2. 스크롤해도 화면에 고정된 채 안 움직이는 값은?
3. "평소엔 원래 자리에 있다가, 스크롤하면 화면에 붙는" 효과를 내는 값은?

<details><summary>정답 보기</summary>

1. `position`이 static이 아닌 조상을 계속 찾아 올라가다 없으면 `html`(문서 전체)을 기준으로 배치됩니다.
2. `fixed`입니다.
3. `sticky`입니다.
</details>

---

## 11. 타이포그래피 (글자 관련)

### 11.1 자주 쓰는 속성
| 속성 | 예 | 설명 |
| --- | --- | --- |
| `font-family` | `"Noto Sans KR", sans-serif` | 폰트 목록. 앞의 폰트가 없으면 다음 것을 사용(폴백) |
| `font-size` | `1.25rem` | 글자 크기 |
| `font-weight` | `400`(보통) `700`(굵게) | 굵기(100~900 또는 `normal`/`bold`) |
| `font-style` | `italic` | 기울임 |
| `line-height` | `1.6` | 줄 간격(단위 없는 숫자는 font-size의 배수, 가독성에 큰 영향) |
| `letter-spacing` | `0.05em` | 글자 사이 간격 |
| `text-align` | `center` | 가로 정렬 |
| `text-decoration` | `underline`, `none` | 밑줄 등 (링크 밑줄 제거에 자주 씀) |
| `text-transform` | `uppercase` | 대문자로 표시(실제 글자는 안 바뀜) |
| `white-space` | `nowrap` | 줄바꿈 방지 등 |
| `text-overflow` | `ellipsis` | 넘치는 글자를 "..."으로(`overflow: hidden`, `white-space: nowrap`과 함께 씀) |
| `word-break` | `break-all` | 긴 단어의 줄바꿈 방식(한글/영어 혼용 시 중요) |

### 11.2 폰트를 지정하는 순서(폴백 체인)
```css
font-family: "Cormorant Garamond", "Noto Serif KR", serif;
```
브라우저는 첫 번째 폰트가 없으면 다음 것을, 그마저 없으면 그다음(`serif`, `sans-serif`, `monospace` 같은 **시스템 기본 카테고리**)을 씁니다. 마지막에 카테고리를 넣어두는 것이 안전합니다.

### 11.3 웹폰트 불러오기
```html
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR" rel="stylesheet">
```
Google Fonts 같은 서비스는 `@font-face`(폰트 파일 경로를 CSS에 등록하는 규칙)를 대신 처리해주는 CSS를 제공합니다. `@font-face`를 직접 쓸 수도 있습니다.
```css
@font-face {
  font-family: "MyFont";
  src: url("fonts/myfont.woff2") format("woff2");
}
```

### 11.4 `line-height`의 함정
```css
line-height: 24px;   /* 고정값: 자식이 font-size를 바꿔도 24px 그대로 상속 */
line-height: 1.6;    /* 배수(권장): 자식의 font-size에 맞게 각자 계산됨 */
```
단위 없는 숫자(`1.6`)를 쓰면 자식 요소마다 자신의 `font-size` 기준으로 다시 계산되어 훨씬 유연합니다. 실무에서는 배수 표기를 권장합니다.

### 내 프로젝트에서 찾기
```css
font-family: "Cormorant Garamond", ...;   /* 헤딩용 */
font-family: "Noto Serif KR", ...;         /* 본문용 */
```
`font-size`가 69번, `letter-spacing`이 20번 등장하는 것으로 보아, 항해 테마에 맞춰 세밀하게 글자 크기와 자간을 조절했습니다. `<head>`의 Google Fonts `<link>`로 두 폰트(Cormorant Garamond, Noto Serif KR)를 불러오고, CSS의 `font-family`에서 헤딩과 본문에 구분해서 적용하는 구조입니다.

### 확인 질문
1. `font-family: Arial;`만 쓰고 폴백을 안 넣으면 위험한 이유는?
2. `line-height: 1.6`과 `line-height: 24px`의 차이는?

<details><summary>정답 보기</summary>

1. Arial이 없는 환경(일부 리눅스 등)에서는 브라우저의 임의 기본 폰트로 표시되어 디자인이 깨질 수 있습니다.
2. `1.6`은 각 요소의 font-size에 비례해 줄 간격이 계산되고, `24px`은 font-size와 무관하게 항상 고정된 줄 간격입니다.
</details>

---

## 12. 배경과 테두리

### 12.1 배경
```css
background-color: #EBD5AE;
background-image: url("map.png");
background-size: cover;        /* 요소를 꽉 채우도록 비율 유지하며 확대(넘치는 부분은 잘림) */
background-position: center;
background-repeat: no-repeat;
background-attachment: fixed;  /* 스크롤해도 배경은 고정 */

/* 축약형 */
background: #EBD5AE url("map.png") center / cover no-repeat;
```
- `background-size: cover` vs `contain`: `cover`는 **여백 없이 꽉 채우되 이미지가 잘릴 수 있음**, `contain`은 **이미지 전체가 다 보이되 여백이 생길 수 있음**.
- 여러 배경을 콤마로 겹쳐 쓸 수도 있습니다: `background-image: url(a.png), url(b.png);` (먼저 쓴 것이 위에 그려짐)
- 그라디언트도 배경입니다: `background: linear-gradient(to right, red, blue);`

### 12.2 테두리와 둥근 모서리
```css
border: 1px solid #333;
border-radius: 8px;                 /* 네 모서리 모두 */
border-radius: 8px 8px 0 0;         /* 좌상 우상 우하 좌하 순 */
border-top: 2px dashed red;         /* 한쪽만 */
```

### 12.3 그림자
```css
box-shadow: 0 4px 12px rgba(0,0,0,0.15);
/*           ↑가로  ↑세로 ↑흐림 ↑색  (선택: 번짐(spread) 값 추가 가능) */
text-shadow: 1px 1px 2px black;
```

### 내 프로젝트에서 찾기
`box-shadow`가 25번, `background`가 71번, `border-radius`가 46번 쓰였습니다. `backgrounds.css`의 `light_mode.png`, `dark_mode.png` 지도 이미지가 `background-image` + `background-size`로 적용되어 있습니다(3편 이전 대화에서 다룬 확대 문제가 바로 이 `background-size` 값과 이미지 원본 해상도의 차이 때문이었습니다).

### 확인 질문
1. `background-size: cover`와 `contain`의 차이는?
2. `box-shadow: 0 4px 12px rgba(0,0,0,0.15);`에서 각 숫자는 무엇을 뜻할까?

<details><summary>정답 보기</summary>

1. `cover`는 빈틈없이 채우되 이미지가 잘릴 수 있고, `contain`은 이미지 전체가 보이되 여백이 생길 수 있습니다.
2. 가로 그림자 오프셋 0, 세로 오프셋 4px, 흐림 정도 12px, 색은 검정 15% 불투명도입니다.
</details>

---

## 13. 변형(transform)과 전환(transition), 애니메이션

### 13.1 `transform` — 요소를 이동·회전·크기 변경 (레이아웃에 영향 없음)
```css
transform: translateX(20px);     /* 가로로 20px 이동 */
transform: translateY(-10px);
transform: translate(20px, -10px);
transform: scale(1.1);           /* 110% 확대 */
transform: rotate(45deg);        /* 45도 회전 */
transform: translate(-50%, -50%);/* 자기 자신 크기의 절반만큼 이동 → 정중앙 배치에 자주 씀 */
```
**왜 `margin`이나 `top` 대신 `transform`을 쓰기도 하나?** `transform`은 문서 흐름·레이아웃을 다시 계산하지 않고 화면에 이미 그려진 것을 옮기기만 해서 **훨씬 빠르고 부드럽습니다.** 애니메이션에 자주 쓰입니다.

**정중앙 배치 실전 패턴**
```css
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

### 13.2 `transition` — 값이 바뀔 때 부드럽게
```css
.button {
  background: navy;
  transition: background 0.3s ease, transform 0.2s ease;
}
.button:hover {
  background: skyblue;
  transform: scale(1.05);
}
```
`transition`은 "이 속성이 바뀌면, 순간 이동 대신 이만큼 시간을 들여 부드럽게 바꿔라"는 뜻입니다. **바뀌기 전(원래 상태)** 쪽에 써두는 것이 정석입니다. 값: `속성 지속시간 타이밍함수 지연시간`.

| 타이밍 함수 | 느낌 |
| --- | --- |
| `linear` | 일정한 속도 |
| `ease` | 천천히 시작, 빨라졌다, 천천히 끝(기본값) |
| `ease-in` | 천천히 시작 |
| `ease-out` | 천천히 끝 |

### 13.3 `@keyframes` — 여러 단계를 가진 애니메이션
```css
@keyframes fade-in {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}
.card {
  animation: fade-in 0.6s ease forwards;
}
```
`transition`은 "시작-끝" 2단계만 가능하지만, `@keyframes`는 `0%`, `50%`, `100%`처럼 **여러 중간 단계**를 정의할 수 있고 반복(`infinite`)도 가능합니다.

### 내 프로젝트에서 찾기
`transform`이 14번, `transition`이 14번, `animation`이 몇 차례 등장합니다. 다크모드 토글 버튼의 아이콘 회전, 카드가 스크롤에 등장할 때의 페이드인 효과(JavaScript의 Intersection Observer와 짝을 이룸, 3편에서 연결 설명), 버튼 `:hover` 시 살짝 커지는 효과 등이 유력한 사용처입니다.

### 확인 질문
1. `transform: translate(-50%, -50%)`이 정중앙 배치에 쓰이는 이유는?
2. `transition`과 `@keyframes`의 차이는?
3. `top`을 애니메이션하는 것보다 `transform: translateY()`를 쓰는 것이 보통 더 빠른 이유는?

<details><summary>정답 보기</summary>

1. `top: 50%; left: 50%;`는 요소의 **좌상단 모서리**를 부모의 중앙에 맞출 뿐이라, 요소 자기 자신의 절반 크기만큼 다시 왼쪽 위로 밀어줘야 진짜 중앙이 됩니다. `translate(-50%, -50%)`가 그 역할을 합니다.
2. `transition`은 상태 A→B로 바뀔 때의 자동 보간(2단계)이고, `@keyframes`는 여러 단계를 직접 정의하는 애니메이션입니다.
3. `transform`은 레이아웃을 다시 계산(리플로우)하지 않고 화면에 그려진 내용만 옮기기 때문입니다.
</details>

---

## 14. 반응형 디자인과 미디어 쿼리

**핵심**: 미디어 쿼리는 "화면 조건이 이럴 때만 이 CSS를 적용해라"는 조건문입니다.

### 14.1 기본 문법
```css
@media (max-width: 768px) {
  .nav-menu { display: none; }
}
```
"화면 너비가 768px **이하**일 때"라는 뜻입니다.

### 14.2 모바일 퍼스트 vs 데스크톱 퍼스트
| 방식 | 기본 CSS | 미디어 쿼리 조건 |
| --- | --- | --- |
| **모바일 퍼스트**(권장) | 모바일 스타일을 기본값으로 작성 | `min-width`로 "화면이 이 이상 커지면" 데스크톱 스타일 추가 |
| 데스크톱 퍼스트 | 데스크톱 스타일을 기본값으로 작성 | `max-width`로 "화면이 이 이하로 작아지면" 모바일 스타일 추가 |

```css
/* 모바일 퍼스트 예 */
.card { flex-direction: column; }               /* 기본(모바일): 세로 배치 */
@media (min-width: 768px) {
  .card { flex-direction: row; }                 /* 태블릿 이상: 가로 배치 */
}
```
모바일 퍼스트가 권장되는 이유는, 전 세계 웹 트래픽의 절반 이상이 모바일이고, "기본값을 작은 화면"으로 두면 코드가 자연스럽게 쌓이기 때문입니다. **한 프로젝트 안에서 `min-width`와 `max-width`를 섞어 쓰면** 어느 화면 크기에서 무엇이 이기는지 추적하기 어려워져 버그가 생기기 쉽습니다.

### 14.3 자주 쓰는 브레이크포인트(정해진 표준은 없음, 관례)
| 대략적 기준 | 기기 |
| --- | --- |
| ~480px | 좁은 모바일 |
| ~768px | 태블릿 |
| ~1024px | 작은 데스크톱 |
| 1200px~ | 큰 데스크톱 |

### 14.4 그 외 미디어 쿼리 조건
```css
@media (prefers-color-scheme: dark) { ... }      /* 시스템이 다크모드일 때 */
@media (orientation: landscape) { ... }          /* 가로 화면일 때 */
@media print { ... }                             /* 인쇄할 때 */
@media (hover: hover) { ... }                    /* 마우스처럼 hover가 가능한 기기일 때(터치 기기 구분) */
```

### 14.5 뷰포트 메타 태그와의 관계 (복습)
`<meta name="viewport" content="width=device-width, initial-scale=1.0">`가 없으면 미디어 쿼리 자체가 무의미해집니다. 모바일 브라우저가 화면을 축소해서 보여주기 때문에 실제 CSS 픽셀 너비를 못 알아채기 때문입니다.

### 내 프로젝트에서 찾기
`style.css`에는 `min-width` 기반(모바일 퍼스트) 쿼리가 있고, `updates.css`에는 `max-width` 기반 쿼리가 섞여 있어 **두 방식이 혼재**되어 있습니다. 이게 앞서 지적한 "모바일 퍼스트가 흐려진다"는 부분의 근거입니다. 두 파일을 하나의 기준(예: 모두 `min-width`)으로 통일하면 어떤 화면 크기에서 어떤 규칙이 이기는지 훨씬 예측하기 쉬워집니다.

### 확인 질문
1. `@media (min-width: 768px)`은 화면이 768px보다 클 때일까, 작을 때일까?
2. 모바일 퍼스트 방식에서는 기본 CSS를 어떤 화면 기준으로 작성할까?
3. viewport 메타 태그가 없으면 미디어 쿼리에 어떤 문제가 생길까?

<details><summary>정답 보기</summary>

1. 768px **이상**일 때 적용됩니다.
2. 가장 좁은(모바일) 화면을 기준으로 기본 스타일을 작성하고, 화면이 커질수록 `min-width`로 스타일을 추가합니다.
3. 브라우저가 CSS 픽셀 너비를 실제 화면 너비가 아니라 축소된 가상 너비로 인식해 미디어 쿼리가 의도한 시점에 작동하지 않을 수 있습니다.
</details>

---

## 15. CSS 변수 (커스텀 프로퍼티)

**핵심**: CSS 변수는 값에 **이름을 붙여 재사용**하는 기능입니다. 색상 팔레트를 한 곳에서 관리하고, 다크모드 전환도 변수 값만 바꿔서 구현할 수 있습니다.

### 15.1 선언과 사용
```css
:root {
  --main-color: #1EA1CF;
  --spacing: 16px;
}

.button {
  background: var(--main-color);
  padding: var(--spacing);
}
```
- `--이름`으로 선언하고, `var(--이름)`으로 사용합니다.
- `:root`는 문서 최상위(대략 `html`과 같음)를 가리켜, **전역에서 쓸 변수**를 여기에 모아둡니다.
- `var(--이름, 기본값)`처럼 두 번째 인자로 **변수가 없을 때 쓸 기본값**을 줄 수 있습니다.

### 15.2 Sass 같은 전처리기 변수와의 차이
- 전처리기(Sass의 `$변수`)는 **빌드할 때** 값으로 치환되어 사라집니다.
- CSS 변수(`--변수`)는 **브라우저가 실행 중에도 계속 참조**합니다. 그래서 JavaScript로 실시간으로 바꿀 수 있고, 조건(미디어 쿼리, `:hover`, `[data-theme]`)에 따라 **같은 변수 이름의 값만 바꿔치기**할 수 있습니다. 이 특성이 다크모드 구현의 핵심입니다.

### 15.3 다크모드 구현 원리
```css
:root {
  --bg: #EBD5AE;
  --text: #2B2B28;
}
[data-theme="dark"] {
  --bg: #182731;
  --text: #E8E4D8;
}
body {
  background: var(--bg);
  color: var(--text);
}
```
```js
document.documentElement.setAttribute("data-theme", "dark");
```
1. HTML의 `<html>` 태그(`documentElement`)에 `data-theme="dark"` 속성을 JS로 붙이거나 뗍니다.
2. CSS는 `[data-theme="dark"]` 선택자(3장의 속성 선택자)로 이 상태를 감지해, **같은 변수 이름의 값만 다른 색으로 덮어씁니다.**
3. `body`나 다른 모든 요소는 `var(--bg)`, `var(--text)`만 쓰고 있으므로, 변수 값이 바뀌는 순간 **CSS를 다시 안 써도 전체 색이 자동으로 바뀝니다.**

이 패턴 덕분에 "다크모드용 CSS를 요소마다 따로 쓰는" 반복 없이 우아하게 테마를 전환할 수 있습니다.

### 15.4 변수의 유효 범위(스코프)
CSS 변수도 일반 속성처럼 **상속**됩니다. `:root`에 선언하면 전체에서, 특정 클래스 안에 선언하면 그 안(과 자손)에서만 그 값이 통합니다.
```css
.card--highlight {
  --card-border: gold;   /* 이 카드 안에서만 다른 값 */
}
```

### 내 프로젝트에서 찾기
`css/style.css`와 `css/updates.css`에 각각 `:root` 블록이 있고, `--color-*` 계열과 `--voyage-*` 계열의 변수 두 벌이 존재합니다(4장에서 짚은 중복 문제). `[data-theme="dark"]` 선택자로 다크모드 값을 덮어쓰는 구조도 이 장의 15.3 패턴과 같습니다. `js/main.js`가 `data-theme` 속성을 토글하고 `localStorage`에 저장하는 부분은 3편(JavaScript)에서 자세히 봅니다.

### 확인 질문
1. Sass 변수와 CSS 변수(커스텀 프로퍼티)의 가장 큰 차이는?
2. 다크모드를 구현할 때 `[data-theme="dark"]` 안에서 실제로 무엇을 바꾸는가?
3. `var(--main-color, blue)`에서 `blue`의 역할은?

<details><summary>정답 보기</summary>

1. Sass 변수는 빌드 시점에 값으로 치환되어 사라지지만, CSS 변수는 브라우저가 실행 중에도 유지하며 JavaScript나 CSS 조건으로 실시간으로 바꿀 수 있습니다.
2. 색상을 직접 여러 곳에 다시 쓰는 게 아니라, 같은 변수 이름이 가리키는 **값만** 다시 정의합니다.
3. `--main-color`가 정의되어 있지 않을 때 사용할 기본값입니다.
</details>

---

## 16. 가상 클래스·가상 요소 심화

(3장에서 목록을 봤으니, 여기서는 실전 활용 패턴을 다룹니다.)

### 16.1 `::before` / `::after`로 장식 추가하기
```css
.quote::before {
  content: "“";
  color: gray;
}
```
`content`는 필수이며, 텍스트뿐 아니라 빈 문자열(`content: "";`)로 **순수 도형/장식**을 만드는 데도 자주 쓰입니다(예: 밑줄 애니메이션, 작은 화살표 장식).

### 16.2 `:nth-child()` 패턴
```css
li:nth-child(odd)  { background: #f5f5f5; }  /* 홀수 번째 */
li:nth-child(3n)   { color: red; }            /* 3의 배수 번째 */
li:nth-child(-n+3) { font-weight: bold; }     /* 처음 3개 */
```

### 16.3 폼과 가상 클래스
```css
input:focus { outline: 2px solid navy; }
input:invalid { border-color: red; }
input:required:invalid { background: #fee; }
button:disabled { opacity: 0.5; cursor: not-allowed; }
```

### 내 프로젝트에서 찾기
`content`가 8번 등장합니다. 항해 테마의 장식 요소(구분선, 인용 부호 모양 등)에 `::before`/`::after`가 쓰였을 가능성이 높습니다.

### 확인 질문
1. `content` 속성 없이 `::after`를 쓰면 어떻게 될까?

<details><summary>정답 보기</summary>

화면에 아무것도 나타나지 않습니다. `content`(빈 문자열이라도)가 있어야 가상 요소가 생성됩니다.
</details>

---

## 17. 레이어링·모양 기법

### 17.1 그라디언트
```css
background: linear-gradient(to right, red, blue);
background: linear-gradient(135deg, red 0%, blue 100%);
background: radial-gradient(circle, white, black);
```

### 17.2 `clip-path` — 요소를 원하는 모양으로 잘라내기
```css
.badge {
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);  /* 마름모 */
}
```
지정한 좌표(모양)의 **바깥쪽을 투명하게 잘라내는** 기능으로, 다각형 배지나 특수 모양 장식에 씁니다.

### 17.3 `overflow`
```css
overflow: hidden;   /* 넘치는 내용을 잘라냄 */
overflow: auto;     /* 넘치면 스크롤바 생김 */
overflow-x: auto; overflow-y: hidden;  /* 가로만 스크롤 */
```

### 17.4 필터·블렌드(참고만)
```css
filter: blur(4px) brightness(0.9);
backdrop-filter: blur(10px);   /* 요소 뒤 배경을 흐리게(유리 느낌 UI) */
mix-blend-mode: multiply;
```

### 내 프로젝트에서 찾기
`clip-path`가 4번, `overflow`가 4번 등장합니다. 항해 테마의 봉인·마름모 장식이나 이미지 잘라내기에 `clip-path`가, 카드 넘침 방지에 `overflow`가 쓰였을 것으로 보입니다.

---

## 17.5 레거시 레이아웃: `float`와 `clear` (알아두어야 할 옛날 방식)

**핵심**: `float`은 원래 Grid/Flexbox가 없던 시절 레이아웃을 짜던 방법입니다. 지금은 레이아웃 목적으로는 거의 안 쓰지만, 옛날 코드에서 반드시 만나므로 읽을 줄은 알아야 합니다.

```css
.image { float: left; margin-right: 12px; }   /* 이미지를 왼쪽으로 띄우고 글이 옆을 감싸게 */
.clearfix::after { content: ""; display: block; clear: both; }  /* float로 인한 부모 높이 붕괴 방지 */
```
- `float`을 준 요소는 문서 흐름에서 "붕 뜨고", 뒤따르는 인라인 콘텐츠(글자)가 그 옆을 감쌉니다.
- 문제점: 부모 요소가 float된 자식의 높이를 인식하지 못해 **높이가 0이 되어버리는 버그**(붕괴)가 흔해서, 위 `clearfix` 같은 우회 기법이 필요했습니다.
- **지금 배우는 이유**: 텍스트가 이미지를 감싸는 잡지식 레이아웃(예: 첫 문단 첫 글자를 크게 하고 글이 감싸게)은 지금도 `float`이 가장 간단합니다. 그 외 전체 레이아웃은 Grid/Flexbox를 씁니다.

## 17.6 인쇄 스타일

```css
@media print {
  nav, .no-print { display: none; }   /* 인쇄할 땐 메뉴 숨기기 */
  body { color: black; background: white; }
}
```
이력서나 문서 페이지처럼 "인쇄될 수도 있는" 페이지에 쓰는 조건입니다(14장의 미디어 쿼리 문법을 그대로 사용).

---

## 18. 실전 도구·디버깅·성능

### 18.1 개발자 도구로 CSS 디버깅
- Elements 탭에서 요소를 클릭하면 오른쪽에 **적용된 CSS와 우선순위에서 밀려 취소선이 그어진 CSS**가 함께 보입니다.
- "Computed" 탭에서는 모든 규칙이 계산된 **최종 값**만 볼 수 있습니다.
- 박스 모델 다이어그램(5장의 그림)을 실제 픽셀 수치로 보여줍니다.

### 18.2 흔한 디버깅 습관
```css
* { outline: 1px solid red; }   /* 모든 요소에 테두리를 잠깐 그려서 박스 경계 확인 */
```
레이아웃이 이상할 때 임시로 위 코드를 넣어보면 어느 요소가 어디까지 차지하는지 한눈에 보입니다(확인 후 반드시 제거).

### 18.3 성능에 영향이 큰 것들
- `transform`, `opacity`는 GPU가 처리해 애니메이션이 매끄럽습니다(13장).
- `width`, `height`, `top`, `left`, `margin`을 애니메이션하면 매 프레임 레이아웃을 다시 계산(리플로우)해서 버벅일 수 있습니다.
- 이미지·폰트는 CSS보다 훨씬 무거운 파일이라, 실제 성능 병목은 대부분 CSS보다 리소스 크기 쪽입니다(HTML 7장, JS 3편과 연결).

### 확인 질문
1. Elements 탭에서 취소선이 그어진 CSS 규칙은 무슨 뜻일까?

<details><summary>정답 보기</summary>

다른 규칙에 우선순위(명시도 또는 작성 순서)에서 밀려 실제로는 적용되지 않은 규칙이라는 뜻입니다.
</details>

---

## 19. 속성 총정리 (레퍼런스 표)

### 19.1 레이아웃
`display` `position` `top` `right` `bottom` `left` `inset` `z-index` `float` `clear` `overflow` `overflow-x` `overflow-y` `visibility` `box-sizing`

### 19.2 Flexbox
`flex-direction` `flex-wrap` `flex-flow` `justify-content` `align-items` `align-content` `align-self` `flex-grow` `flex-shrink` `flex-basis` `flex` `order` `gap` `row-gap` `column-gap`

### 19.3 Grid
`grid-template-columns` `grid-template-rows` `grid-template-areas` `grid-column` `grid-row` `grid-area` `grid-auto-flow` `grid-auto-columns` `grid-auto-rows` `place-items` `place-content` `justify-items`

### 19.4 박스 모델
`width` `height` `min-width` `min-height` `max-width` `max-height` `margin`(+방향별) `padding`(+방향별) `border`(+방향별, `-width` `-style` `-color`) `border-radius`

### 19.5 타이포그래피
`font-family` `font-size` `font-weight` `font-style` `line-height` `letter-spacing` `word-spacing` `text-align` `text-decoration` `text-transform` `text-indent` `text-overflow` `white-space` `word-break` `vertical-align`

### 19.6 색과 배경
`color` `background` `background-color` `background-image` `background-size` `background-position` `background-repeat` `background-attachment` `opacity`

### 19.7 테두리·그림자
`border` `border-radius` `box-shadow` `outline` `outline-offset`

### 19.8 변형·전환·애니메이션
`transform` `transform-origin` `transition` `transition-property` `transition-duration` `transition-timing-function` `animation` `@keyframes`

### 19.9 기타
`cursor` `pointer-events` `content` `clip-path` `filter` `backdrop-filter` `aspect-ratio` `object-fit` `object-position` `scroll-behavior` `will-change`

---

## 20. 자주 하는 실수 체크리스트

- [ ] `box-sizing: border-box`를 전역으로 선언했는가
- [ ] `width`/`height`가 예상과 다르면 `box-sizing`부터 확인했는가
- [ ] 같은 선택자가 여러 파일에 있을 때 어느 게 이기는지 개발자 도구로 확인했는가
- [ ] `absolute`를 쓸 때 부모에 `relative`가 있는가
- [ ] `min-width`(모바일 퍼스트)와 `max-width`(데스크톱 퍼스트)를 한 파일 안에서 섞어 쓰고 있지 않은가
- [ ] `!important`를 남용하고 있지 않은가
- [ ] 색상·간격 값을 매번 다시 쓰지 않고 CSS 변수로 관리하고 있는가
- [ ] `transition`/`animation`에 `transform`, `opacity` 위주로 쓰고 있는가(성능)
- [ ] 포커스 스타일(`:focus`)을 지우기만 하고 대체하지 않았는가

---

## 21. 실습 — 손으로 직접 만들며 체득하기

> HTML 실습에서 만든 자기소개 페이지에 CSS를 입혀나갑니다. 값을 한 번 넣고 끝내지 말고, **숫자를 바꿔가며 화면이 어떻게 달라지는지 직접 눈으로 확인**하세요. 그 "직접 바꿔보고 반응을 관찰하는 과정"이 체득입니다.

### 실습 A. 처음부터 끝까지 스타일 입히기

| 단계 | 미션 | 직접 확인할 것 |
| --- | --- | --- |
| 1 | `<link rel="stylesheet" href="style.css">`로 연결하고, `*{box-sizing:border-box}`를 맨 위에 쓰세요(5.2장) | 이 줄을 지웠다 켰다 하며 카드 너비가 달라지는지 비교 |
| 2 | `:root`에 색상 변수 3~4개(`--bg`, `--text`, `--accent`)를 선언하고 전체에 적용하세요(15장) | 변수 값 하나만 바꿔 전체 색이 한 번에 바뀌는지 확인 |
| 3 | `<nav>`를 `display: flex; justify-content: space-between; align-items: center;`로 배치하세요(8장) | `space-between`을 `center`로, `flex-direction`을 `column`으로 각각 바꿔보고 차이를 관찰 |
| 4 | 관심사 카드 여러 개를 `display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));`로 배치하세요(9.3장) | 브라우저 창을 좁혔다 늘렸다 하며 열 개수가 자동으로 바뀌는지 확인 |
| 5 | 버튼에 `transition: transform 0.2s, background 0.2s;`를 걸고 `:hover`에서 `transform: scale(1.05)`와 배경색 변화를 주세요(13장) | 마우스를 올렸다 뗐다 하며 부드럽게 바뀌는지, `transition` 줄을 지우면 어떻게 순간 이동하는지 비교 |
| 6 | 화면 너비 768px 미만에서는 네비게이션이 세로로 쌓이도록 미디어 쿼리를 작성하세요(14장) | 개발자 도구의 반응형 보기(기기 툴바)로 실제 줄어드는지 확인 |
| 7 | 다크모드 버튼을 하나 만들고(아직 JS는 몰라도 됨) `[data-theme="dark"]` 선택자에 변수 값을 다르게 선언해두세요(15.3장) | `<html>` 태그에 개발자 도구로 직접 `data-theme="dark"`를 추가/삭제해보며 색이 바뀌는지 확인(JS 없이도 CSS만으로 확인 가능) |

### 실습 B. 일부러 부수고 고치기
1. `box-sizing: border-box`를 지운 채로 `width: 200px; padding: 20px;`인 박스를 만들고, 실제 차지하는 너비를 개발자 도구로 재보세요(5.2절 계산과 맞는지 확인).
2. 같은 선택자(`.card`)에 스타일을 다른 CSS 파일 두 곳에 다르게 써보고, 어느 것이 이기는지 예측한 뒤 개발자 도구로 확인하세요(4장 명시도).
3. `absolute`를 쓴 자식 요소의 부모에서 일부러 `position: relative`를 지워보고, 요소가 엉뚱한 곳으로 튀는 것을 관찰한 뒤 되돌리세요(10.2절).
4. `line-height: 24px`(고정값)와 `line-height: 1.6`(배수)를 각각 준 텍스트의 `font-size`를 바꿔보며 줄 간격이 다르게 반응하는지 비교하세요(11.4절).
5. `min-width` 미디어 쿼리와 `max-width` 미디어 쿼리를 같은 값(예: 768px)으로 동시에 써보고, 768px 정확히 그 지점에서 어떤 스타일이 적용되는지 확인해 "혼용의 위험"을 직접 겪어보세요(14.2절).

### 실습 C. 내 프로젝트와 연결하기
네 프로젝트의 `css/style.css`와 `css/updates.css`에서 똑같은 선택자(`.about-card img` 등)를 찾아, 개발자 도구의 Elements → Styles 패널에서 **어느 규칙에 취소선이 그어져 있는지** 직접 확인하세요. 그리고 왜 그 규칙이 이겼는지(파일 순서? 명시도?) 스스로 설명해보세요.

---

## 22. 용어 사전

| 용어 | 뜻 |
| --- | --- |
| 캐스케이드(cascade) | 여러 규칙이 겹칠 때 승자를 정하는 절차 |
| 명시도(specificity) | 선택자의 "구체적인 정도"를 점수화한 것 |
| 상속(inheritance) | 부모의 일부 속성값을 자식이 자동으로 물려받는 것 |
| 주축/교차축 | Flexbox에서 배치 방향(주축)과 그 수직 방향(교차축) |
| 리플로우(reflow) | 레이아웃을 다시 계산하는 과정(성능 비용이 큼) |
| 쌓임 맥락(stacking context) | z-index 비교가 이루어지는 독립된 그룹 |
| 폴백(fallback) | 우선 선택한 것이 없을 때 대신 쓰는 대안 |
| 브레이크포인트 | 반응형 디자인에서 레이아웃이 바뀌는 화면 너비 기준점 |

---

**CSS 편 끝.** 다음은 **JavaScript 편**입니다.
