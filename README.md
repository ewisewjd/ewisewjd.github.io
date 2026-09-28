# Personal Portfolio — The Voyage Begins

HTML, CSS, JavaScript를 이용하여 외부 JavaScript 라이브러리 없이 제작한 반응형 개인 포트폴리오 웹사이트입니다.

나의 역사학적 배경과 앞으로 학습하고자 하는 Data & AI 분야를 하나의 웹페이지에 담고, 웹페이지를 직접 제작하는 과정을 통해 HTML, CSS, JavaScript가 실제 화면과 어떻게 연결되는지 학습하는 것을 목표로 했습니다.

단순히 화면을 구현하는 것에 그치지 않고 사용자 이벤트, DOM 조작, 화면 변화, API 통신이 연결되는 웹의 동작 원리를 실제 결과물로 확인하고자 했습니다.

또한 GitHub API를 연동하여 Loading / Error / Empty 상태를 직접 처리하고, 데이터를 받아 화면에 동적으로 표현하는 경험을 쌓았습니다.

---

## 1. 프로젝트 소개

### 프로젝트 목적

Codyssey AI All-in-One 과정의 첫 번째 미션으로 반응형 개인 포트폴리오 웹사이트를 제작했습니다.

HTML, CSS, JavaScript의 기본 문법과 웹의 동작 원리를 실제 프로젝트에 적용하고 DOM 조작, 사용자 이벤트, 화면 변화, API 통신을 연결하여 웹페이지가 동작하는 과정을 이해하고 구현하고자 했습니다.

### 프로젝트 배경

Codyssey AI All-in-One 과정에서 웹의 기본 구조와 프론트엔드 기초를 학습하면서 첫 번째 미션으로 개인 포트폴리오 웹사이트 제작을 진행하게 되었습니다.

역사학을 전공한 배경과 앞으로 학습하고자 하는 AI 및 데이터 분야를 하나의 포트폴리오 안에서 표현하고, 웹 개발을 처음부터 구현하면서 학습한 내용을 결과물로 남기고자 했습니다.

### 프로젝트 컨셉

역사학을 전공한 배경을 바탕으로 역사적 기록과 탐험의 이미지를 포트폴리오 디자인에 담았습니다.

오래된 지도와 항해 일지, 파치먼트에서 영감을 받아 웹사이트를 하나의 탐험 기록처럼 구성했으며, `History × Data × AI`라는 방향성을 시각적으로 표현하고자 했습니다.

---

## 2. Codyssey Mission

### Mission 01 — 나를 소개하는 웹페이지 처음부터 만들기

Codyssey AI All-in-One 과정의 첫 번째 웹 개발 미션입니다.

HTML, CSS, JavaScript를 기반으로 개인 포트폴리오 웹페이지를 처음부터 제작하면서 웹의 기본 구조와 프론트엔드의 기초적인 동작 원리를 학습했습니다.

### Mission 목표

- 시맨틱 HTML 구조 구성
- 반응형 레이아웃과 디자인 구현
- JavaScript DOM 조작과 사용자 이벤트 처리
- GitHub API를 이용한 외부 데이터 조회
- Loading / Error / Empty 상태 처리
- `map()`, `filter()`, Destructuring, Template Literal 적용
- `async / await`, `try / catch`를 이용한 비동기 처리
- `localStorage`를 이용한 사용자 설정 저장
- Intersection Observer를 이용한 화면 변화 구현

### Mission을 통해 학습한 내용

HTML의 문서 구조와 CSS 레이아웃, JavaScript의 기본 문법부터 DOM 조작과 이벤트 처리까지 학습한 내용을 실제 웹페이지에 적용했습니다. 특히 정적인 문서를 넘어 사용자 행동에 따라 화면이 변화하고 외부 API 데이터가 동적으로 렌더링되는 과정을 구현했습니다.

---

## 3. Tech Stack

### Markup

- HTML5

### Styling

- CSS3

### Programming

- Vanilla JavaScript (ES6+)

### Development

- Git
- GitHub
- GitHub Pages

---

## 4. 주요 기능

### 4.1 Navigation

- 데스크톱 Navigation
- 모바일 Journal 메뉴와 Hamburger Menu
- 앵커 기반 Section 이동
- Smooth Scroll

### 4.2 Hero

- `History × Data × AI` 중심 Hero
- 포트폴리오 방향성을 설명하는 소개 문구
- Hero 타이핑 효과
- CTA 버튼

### 4.3 About

- 역사학 전공 배경 소개
- 인문학과 기술을 연결하는 방향성
- Data & AI 분야 학습 방향

### 4.4 Skills

학문적 영역과 실제 사용하는 기술을 구분하여 Programming, Data & AI, Planning, AI 등의 영역을 표현했습니다.

### 4.5 Projects

GitHub API로 Repository를 가져와 프로젝트 카드로 동적으로 표시하고 Codyssey Mission 프로젝트를 함께 소개합니다. Loading / Error / Empty / Retry 상태와 Pagination, 언어 필터링을 구현했습니다.

### 4.6 Side Projects

개인적으로 진행한 프로젝트를 추가할 수 있도록 별도의 영역을 구성했습니다.

### 4.7 Contact

이름, 이메일, 메시지를 입력하는 Contact Form과 필수값 및 이메일 형식 검증을 구현했습니다.

### 4.8 Footer

페이지 하단에 기본 사이트 정보와 GitHub 링크를 제공합니다.

---

## 5. 핵심 구현

### 5.1 Semantic HTML

`header`, `nav`, `main`, `section`, `footer` 등의 시맨틱 태그를 사용하여 웹페이지 구조를 구성했습니다.

### 5.2 Responsive Web Design

Mobile-first 방식과 Media Query를 적용하고 Flexbox와 CSS Grid를 이용해 화면 크기에 따라 레이아웃이 변화하도록 구현했습니다.

### 5.3 CSS Variables

반복적으로 사용하는 색상과 디자인 값을 CSS Custom Properties로 관리하여 Theme 전환과 디자인 수정이 편리하도록 구성했습니다.

### 5.4 Light / Dark Mode

Theme Toggle로 Light / Dark Mode를 전환하고 `localStorage`에 선택 상태를 저장합니다.

### 5.5 Mobile Navigation

모바일에서 Journal 버튼으로 Navigation을 열고 닫으며 JavaScript DOM 조작과 Event Listener로 상태를 변경합니다.

### 5.6 Smooth Scroll

Navigation의 Section 링크를 클릭하면 해당 영역으로 부드럽게 이동합니다.

### 5.7 Scroll UI

- Header 변화: `scrollY > 60`
- Scroll Top 표시: `scrollY > 300`

### 5.8 Hero Animation

JavaScript를 이용한 Hero 타이핑 효과를 적용하고 `prefers-reduced-motion` 설정을 고려했습니다.

### 5.9 Intersection Observer

`IntersectionObserver`로 Section과 주요 콘텐츠가 화면에 진입할 때 등장 효과를 적용하며 threshold는 `0.2`입니다.

### 5.10 GitHub API

GitHub REST API를 이용하여 공개 Repository 데이터를 조회하고 JavaScript로 처리하여 화면에 동적으로 렌더링합니다.

### 5.11 Repository Filtering

`filter()`를 이용하여 Repository의 프로그래밍 언어를 기준으로 표시할 프로젝트를 선택합니다.

### 5.12 Loading / Error / Empty State

GitHub API 요청 과정에서 Loading / Error / Empty 상태를 구분하고 Error 상태에서는 Retry를 제공합니다.

### 5.13 Contact Form Validation

이름, 이메일, 메시지의 필수 입력값과 이메일 형식을 확인한 뒤 결과를 화면에 표시합니다.

### 5.14 LocalStorage

`localStorage`에 Light / Dark Mode 설정을 저장하여 새로고침 후에도 선택한 Theme을 유지합니다.

---

## 6. 프로젝트 구조

```text
ewisewjd.github.io/
│
├── index.html
│
├── css/
│   ├── style.css
│   ├── updates.css
│   └── backgrounds.css
│
├── js/
│   └── main.js
│
├── assets/
│   └── images/
│
├── docs/
│   └── mission.md
│
└── README.md
```



---

## 7. 웹페이지 구성

### Hero

`History × Data × AI`를 중심으로 포트폴리오의 정체성과 방향성을 소개합니다.

### About

역사학을 전공한 배경과 인문학적 관점을 바탕으로 Data & AI 분야로 확장하고자 하는 방향을 소개합니다.

### Skills

학문적 영역과 기술 스택을 구분하여 현재의 배경과 앞으로 학습할 기술을 표현합니다.

### Projects

GitHub Repository와 Codyssey Mission 프로젝트를 소개합니다.

### Side Projects

개인적으로 진행하거나 앞으로 진행할 프로젝트를 소개합니다.

### Contact

기본적인 연락 정보를 입력할 수 있는 Contact Form을 제공합니다.

### Footer

페이지의 기본 정보와 GitHub 링크를 제공합니다.

---

## 8. 반응형 디자인

### Mobile

모바일 화면을 기준으로 Navigation, Card, Section 등의 레이아웃을 구성했습니다. 작은 화면에서는 Hamburger Menu를 사용합니다.

### Tablet

중간 화면 크기에 맞춰 콘텐츠의 간격과 카드 배치를 조정합니다.

### Desktop

넓은 화면에서는 최대 너비와 Grid / Flex 레이아웃을 활용하여 정보를 배치합니다.

---

## 9. Theme

### Light Mode

밝은 파치먼트와 지도 이미지를 기반으로 역사적 기록과 항해 일지의 분위기를 표현했습니다.

### Dark Mode

어두운 청록 계열의 배경과 대비되는 텍스트를 사용하여 야간 항해와 같은 분위기를 표현했습니다.

### Theme 상태 저장

Theme 설정을 `localStorage`에 저장하여 새로고침하거나 다시 방문해도 선택한 Theme을 유지합니다.

---

## 10. API 및 동적 기능

### GitHub API

GitHub REST API를 이용하여 공개 Repository 정보를 가져옵니다.

### 데이터 처리

API 응답 배열에서 필요한 데이터를 추출하고 조건에 따라 필터링합니다.

### Repository Card 생성

Template Literal을 이용하여 Repository 데이터를 HTML Card 형태로 변환합니다.

### Language Filter

`filter()`를 이용하여 Repository의 프로그래밍 언어를 기준으로 표시할 프로젝트를 선택합니다.

### Pagination

여러 Repository를 페이지 단위로 나누어 표시합니다.

### 상태 처리

API 요청 과정에서 Loading / Success / Error / Empty 상태를 구분하고 Error 상태에서는 Retry를 제공합니다.

---

## 11. 사용자 인터랙션

### Navigation

모바일 Journal 메뉴를 열고 닫을 수 있습니다.

### Scroll

스크롤 위치에 따라 Header와 Scroll Top Button의 상태가 변경됩니다.

### Button

Theme Toggle, Retry, Scroll Top 등의 버튼을 통해 페이지 상태를 변경할 수 있습니다.

### Form

Input Event와 Submit Event를 이용하여 Contact Form의 입력값을 확인합니다.

### Animation

Hero 타이핑 효과와 Intersection Observer를 이용한 콘텐츠 등장 효과를 구현했습니다.

---

## 12. Mission 요구사항 구현

| Mission 요구사항 | 구현 내용 |
|---|---|
| Semantic HTML | `header`, `nav`, `main`, `section`, `footer` 사용 |
| Responsive Design | Mobile-first + Media Query |
| CSS Variables | Theme 및 반복 디자인 값 관리 |
| Flex / Grid | Navigation, Skills, Projects 등의 레이아웃 |
| Mobile Navigation | Journal / Hamburger Menu |
| DOM 조작 | 메뉴, Theme, 프로젝트 카드, 상태 UI 변경 |
| Event Handling | click / input / submit / scroll 이벤트 |
| GitHub API | Repository 데이터 조회 |
| Loading State | API 요청 중 상태 표시 |
| Error State | API 요청 실패 상태 표시 |
| Empty State | 표시할 프로젝트가 없는 상태 처리 |
| Retry | API 요청 실패 후 재요청 |
| `map()` | Repository 배열을 Card HTML로 변환 |
| `filter()` | Repository 언어 필터링 |
| Destructuring | Repository 데이터 추출 |
| Template Literal | 동적 HTML Card 생성 |
| `async / await` | 비동기 API 요청 |
| `try / catch` | API 오류 처리 |
| `localStorage` | Theme 설정 저장 |
| Intersection Observer | Section 등장 효과 |
| Form Validation | 이름 / 이메일 / 메시지 입력값 확인 |

---

## 13. 주요 구현 기준

- Header 스타일 변경: `scrollY > 60`
- Scroll Top 표시: `scrollY > 300`
- Intersection Observer threshold: `0.2`



---

## 14. Mission Constraints

- Pure HTML / CSS / JavaScript
- React 미사용
- Vue 미사용
- jQuery 미사용
- Bootstrap 미사용
- Tailwind CSS 미사용
- 외부 JavaScript 라이브러리 미사용

이 프로젝트는 웹의 기본 동작 원리를 학습하기 위해 외부 JavaScript 프레임워크나 CSS 프레임워크 없이 구현했습니다.

---

## 15. 디자인 컨셉

### History

역사학을 전공한 배경을 포트폴리오의 핵심 정체성으로 표현했습니다.

### Voyage

새로운 분야를 탐험하고 학습해 나가는 과정을 항해에 비유했습니다.

### Journal

프로젝트와 학습 과정을 하나의 기록으로 남긴다는 의미를 항해 일지의 형태로 표현했습니다.

### Map / Parchment

오래된 지도와 파치먼트에서 영감을 얻어 역사적이고 탐험적인 분위기를 적용했습니다.

### Light / Dark Theme

Light Mode와 Dark Mode를 서로 다른 항해 환경처럼 구성했습니다.

---

## 16. 배포

### GitHub Pages

배포 주소:

https://ewisewjd.github.io/

---

## 17. 학습 기록

### HTML

웹페이지의 기본 구조와 Semantic HTML을 학습하고 실제 포트폴리오 구조에 적용했습니다.

### CSS

선택자, Box Model, Flexbox, Grid, CSS Variables, Media Query 등을 학습하고 반응형 레이아웃과 Theme을 구현했습니다.

### JavaScript

변수, 함수, 조건문, 배열, 객체 등의 기본 문법부터 DOM 조작, Event, API, 비동기 처리까지 학습하고 실제 프로젝트에 적용했습니다.

### Git / GitHub

Repository 관리, Commit, Push, GitHub Pages 배포 등의 기본적인 Git / GitHub 사용법을 익혔습니다.

### Codyssey Mission

미션 요구사항을 실제 프로젝트에 적용하면서 각각의 기술이 웹페이지에서 어떤 역할을 하는지 확인했습니다.

---

## 18. 문제 해결 및 개선 과정

### 문제 1

<!-- 발생한 문제 / 원인 / 해결 방법 -->

### 문제 2

<!-- 발생한 문제 / 원인 / 해결 방법 -->

### 문제 3

<!-- 발생한 문제 / 원인 / 해결 방법 -->

### 문제 4

<!-- 발생한 문제 / 원인 / 해결 방법 -->

---

## 19. 앞으로의 계획

### Mission 이후 학습

현재 프로젝트에서 사용한 HTML, CSS, JavaScript의 문법과 동작 원리를 다시 학습하고 부족한 부분을 보완할 예정입니다.

### 코드 복습

AI의 도움을 받아 작성한 코드를 단순히 사용하는 것에 그치지 않고 각 코드의 역할과 동작 원리를 직접 이해하는 것을 목표로 합니다.

### Practice

Mission 디렉터리 안에 `practice` 폴더를 만들어 기존 코드를 보지 않고 직접 다시 작성하면서 복습할 예정입니다.

### 추가 프로젝트

앞으로 Data & AI 분야의 학습과 함께 역사학과 데이터를 연결할 수 있는 개인 프로젝트를 진행할 예정입니다.

---

## 20. Reference

### 디자인 참고

역사적 기록, 항해 일지, 오래된 지도와 파치먼트에서 디자인 아이디어를 얻었습니다.

### 학습 자료

- HTML / CSS 학습 자료
- JavaScript 학습 자료
- Codyssey Mission 문서

### API / Documentation

- GitHub REST API 공식 문서
- MDN Web Docs

---

## 21. Screenshots

### Desktop

<!-- Desktop Screenshot -->

### Mobile

<!-- Mobile Screenshot -->

### Dark Mode

<!-- Dark Mode Screenshot -->
