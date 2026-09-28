# Personal Portfolio — The Voyage Begins

HTML, CSS, JavaScript만으로 제작한 반응형 개인 포트폴리오입니다. 외부 JavaScript 프레임워크 없이 웹의 기본 구조, 스타일, DOM 조작, 이벤트, API 통신을 하나의 결과물로 연결했습니다.

이 프로젝트는 Codyssey AI All-in-One B1-1 미션 「나를 소개하는 웹페이지 처음부터 만들기」의 결과물입니다.

핵심 학습 흐름은 **사용자 이벤트 → 상태 변화 → DOM 업데이트 → 화면 변화**입니다.

---

## 1. 프로젝트 소개

### 목적

HTML/CSS/JavaScript의 문법을 실제 웹페이지에 적용하고, 정적인 HTML을 넘어 사용자 행동과 외부 데이터에 따라 화면이 바뀌는 과정을 직접 구현했습니다.

### 배경

웹 기초와 프론트엔드를 처음 학습하면서 개인 포트폴리오를 처음부터 제작했습니다. 역사학 전공 배경과 앞으로 학습할 Data & AI 분야를 하나의 사이트에 담는 것도 함께 목표로 했습니다.

### 컨셉

**History × Data × AI / Voyage Journal**

오래된 지도, 항해 일지, 파치먼트에서 영감을 받아 새로운 분야를 탐험하고 기록한다는 이미지를 포트폴리오에 적용했습니다.

- History — 역사학과 인문학적 관점
- Data — 데이터를 통해 현상을 바라보는 시각
- AI — 앞으로 확장할 기술 분야
- Voyage — 새로운 분야를 학습하는 과정
- Journal — 학습과 프로젝트 기록

---

## 2. Tech Stack

| 영역 | 기술 | 역할 |
|---|---|---|
| Markup | HTML5 | Semantic 문서 구조 |
| Styling | CSS3 | Layout / Responsive / Theme / Animation |
| Programming | Vanilla JavaScript ES6+ | DOM / Event / API / Validation |
| API | GitHub REST API | Repository 조회 |
| Version Control | Git / GitHub | 코드 관리 |
| Deployment | GitHub Pages | 정적 사이트 배포 |

React, Vue, jQuery, Bootstrap, Tailwind CSS 등 외부 JavaScript/CSS 프레임워크는 사용하지 않았습니다.

---

# 3. 핵심 구현

## 3.1 Semantic HTML

페이지를 div만으로 구성하지 않고 header, nav, main, section, article, footer를 사용했습니다.

```html
<header class="site-header">
    <nav class="navigation" aria-label="주요 메뉴">
        <a href="#hero" class="logo">
            <img src="assets/images/logo.png" alt="정충원 포트폴리오 홈">
        </a>
    </nav>
</header>

<main>
    <section id="hero" class="hero">...</section>
    <section id="about" class="about section">...</section>
    <section id="skills" class="skills section">...</section>
    <section id="projects" class="projects section">...</section>
    <section id="contact" class="contact section">...</section>
</main>

<footer class="site-footer">...</footer>
```

Semantic HTML은 코드만 읽어도 콘텐츠의 역할을 이해할 수 있도록 구조에 의미를 부여합니다.

---

## 3.2 Navigation / Anchor

Navigation의 href와 각 section의 id를 연결했습니다.

```html
<a href="#projects">III. Projects</a>

<section id="projects" class="projects section">
    ...
</section>
```

부드러운 이동은 CSS로 처리했습니다.

```css
html {
    scroll-behavior: smooth;
    scroll-padding-top: calc(var(--header-height) + 18px);
}
```

---

## 3.3 CSS Variables

반복되는 색상, 폰트, 크기, 그림자 등을 CSS Custom Property로 관리했습니다.

```css
:root {
    --color-paper: #f4efdf;
    --color-ink: #252d32;
    --color-navy: #203746;
    --color-line: #c9bea6;
    --color-accent: #8c2929;
    --header-height: 72px;
}

[data-theme="dark"] {
    --color-paper: #172630;
    --color-ink: #e9e4d7;
    --color-line: #42535b;
}
```

Theme 변경 시 실제 컴포넌트의 CSS를 하나씩 바꾸는 대신 변수 값을 바꾸는 방식입니다.

---

## 3.4 Flexbox와 Grid

Navigation은 한 방향 정렬이므로 Flexbox를 사용했습니다.

```css
.navigation {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 14px;
}
```

Projects는 행과 열을 함께 다루므로 Grid를 사용했습니다.

```css
.projects-grid {
    grid-template-columns:
        repeat(auto-fit, minmax(240px, 1fr));
    gap: 18px;
}
```

Flexbox는 1차원 레이아웃, Grid는 2차원 레이아웃에 적합하다는 차이를 실제 구현에서 확인했습니다.

---

## 3.5 Responsive Design

Mobile-first를 기준으로 작성하고 768px, 1024px에서 레이아웃을 확장했습니다.

```css
@media (max-width: 767px) {
    .current-skills {
        grid-template-columns: 1fr;
    }
}

@media (min-width: 768px) {
    .contact-layout {
        grid-template-columns:
            minmax(0, .85fr)
            minmax(0, 1.15fr);
    }
}

@media (min-width: 1024px) {
    .current-skills {
        grid-template-columns:
            repeat(4, minmax(0, 1fr));
    }
}
```

---

## 3.6 Mobile Navigation

HTML의 onclick 대신 addEventListener와 classList를 사용했습니다.

```javascript
menuButton?.addEventListener("click", () => {
    const isOpen =
        navMenu.classList.toggle("is-open");

    navMenu.classList.toggle("active", isOpen);
    menuButton.setAttribute(
        "aria-expanded",
        String(isOpen)
    );
});
```

이벤트가 발생하면 메뉴의 상태를 나타내는 class가 바뀌고 CSS가 그 상태에 맞는 화면을 표시합니다.

---

## 3.7 Light / Dark Mode + localStorage

Theme 상태는 document.documentElement의 data-theme으로 표현하고 localStorage에 저장합니다.

```javascript
const savedTheme =
    localStorage.getItem("cw-voyage-theme");

if (savedTheme === "dark" || savedTheme === "light") {
    document.documentElement.dataset.theme =
        savedTheme;
}

themeButton?.addEventListener("click", () => {
    const next =
        document.documentElement.dataset.theme === "dark"
            ? "light"
            : "dark";

    document.documentElement.dataset.theme = next;
    localStorage.setItem(
        "cw-voyage-theme",
        next
    );
});
```

흐름은 **클릭 → Theme 상태 변경 → CSS 변수 변경 → 화면 변화 → localStorage 저장**입니다.

---

## 3.8 Scroll UI

Header는 60px 초과, Scroll Top은 300px 초과에서 상태를 변경합니다.

```javascript
const updateScrollUI = () => {
    const y = window.scrollY;

    header?.classList.toggle("scrolled", y > 60);

    if (scrollTopButton) {
        scrollTopButton.hidden = y <= 300;
    }
};

window.addEventListener(
    "scroll",
    updateScrollUI,
    { passive: true }
);

scrollTopButton?.addEventListener(
    "click",
    () => window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
);
```

---

## 3.9 Intersection Observer

Section과 Card가 viewport에 들어왔을 때 등장 효과를 적용합니다.

```javascript
const revealTargets = document.querySelectorAll(
    ".section, .about-card, .skill-group, .project-card"
);

const revealObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.2 }
);

revealTargets.forEach((element) => {
    revealObserver.observe(element);
});
```

threshold 0.2는 관찰 대상의 약 20%가 viewport와 교차했을 때 callback이 동작하도록 설정한 값입니다.

---

## 3.10 GitHub API + async/await + try/catch

Repository는 GitHub REST API에서 동적으로 가져옵니다.

```javascript
async function loadRepositories() {
    setStatus(
        repoStatus,
        "나의 저장소를 불러오는 중…",
        "loading"
    );

    try {
        const response = await fetch(
            `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`
        );

        if (!response.ok) {
            throw new Error(
                `GitHub API 오류 (${response.status})`
            );
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
            throw new Error(
                "저장소 응답 형식이 올바르지 않습니다."
            );
        }

        repositories = data.filter(
            (repo) => !repo.fork && !repo.archived
        );
    } catch (error) {
        console.error("GitHub API error:", error);

        setStatus(
            repoStatus,
            "프로젝트를 불러올 수 없습니다.",
            "error"
        );
    }
}
```

---

## 3.11 Loading / Success / Error / Empty

API가 성공한다고 가정하지 않고 네 가지 상태를 구분했습니다.

### Loading

```javascript
setStatus(
    repoStatus,
    "나의 저장소를 불러오는 중…",
    "loading"
);
```

### Error + Retry

```javascript
catch (error) {
    setStatus(
        repoStatus,
        "프로젝트를 불러올 수 없습니다.",
        "error"
    );

    if (retryButton) {
        retryButton.hidden = false;
    }
}

retryButton?.addEventListener(
    "click",
    loadRepositories
);
```

### Empty

```javascript
if (filtered.length === 0) {
    const empty = document.createElement("p");
    empty.textContent =
        "표시할 프로젝트가 없습니다.";
    repoGrid.append(empty);
}
```

Success 상태에서는 데이터를 정상적으로 받아 Card를 렌더링합니다.

---

## 3.12 Destructuring + Template Literal

Card에 필요한 Repository 속성을 구조분해 할당으로 꺼냅니다.

```javascript
const {
    html_url,
    name,
    description,
    language,
    stargazers_count = 0
} = repo;
```

그 값을 Template Literal로 Card HTML에 넣습니다.

```javascript
return `
    <article class="project-card is-visible">
        <h4>
            <a href="${html_url}"
               target="_blank"
               rel="noopener noreferrer">
                ${name}
            </a>
        </h4>
        <p>${description ||
            "프로젝트 설명이 아직 등록되지 않았습니다."}</p>
        <div class="repo-meta">
            <span>${language || "Language 미지정"}</span>
            <span>★ ${stargazers_count}</span>
        </div>
    </article>
`;
```

---

## 3.13 map / filter

map은 Repository를 Card HTML로 변환합니다.

```javascript
page.innerHTML = pageRepos
    .map((repo) => makeCard(repo))
    .join("");
```

filter는 표시할 데이터를 선별합니다.

```javascript
repositories = data.filter(
    (repo) => !repo.fork && !repo.archived
);

const filtered =
    activeLanguage === "All"
        ? repositories
        : repositories.filter(
            (repo) =>
                (repo.language || "Other")
                === activeLanguage
        );
```

즉 **map = 변환**, **filter = 선택**입니다.

---

## 3.14 Repository Pagination / Drag

8개 단위로 페이지를 만들고, 페이지가 여러 개일 경우 가로 Scroll과 Page Dot을 제공합니다.

```javascript
const pageSize = 8;
const pages = [];

for (
    let start = 0;
    start < filtered.length;
    start += pageSize
) {
    const pageRepos =
        filtered.slice(start, start + pageSize);

    const page =
        document.createElement("div");

    page.className = "repo-page";
    page.innerHTML =
        pageRepos
            .map((repo) => makeCard(repo))
            .join("");

    repoGrid.append(page);
    pages.push(page);
}
```

마우스 Pointer Event와 모바일의 native touch scrolling을 함께 고려했습니다.

---

## 3.15 Contact Form Validation

이름, 이메일, 메시지를 검증합니다.

```javascript
const fields = [
    {
        id: "name",
        errorId: "name-error",
        message: "이름을 입력해 주세요.",
        valid: (value) =>
            value.trim().length > 0
    },
    {
        id: "email",
        errorId: "email-error",
        message: "올바른 이메일 주소를 입력해 주세요.",
        valid: (value) =>
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                .test(value.trim())
    }
];
```

입력 중에는 input, 제출 시에는 submit을 사용합니다.

```javascript
form?.addEventListener("submit", (event) => {
    event.preventDefault();

    const isValid =
        fields.every(validateField);

    status.textContent = isValid
        ? "입력값이 확인되었습니다."
        : "입력 내용을 확인해 주세요.";
});
```

현재는 실제 이메일을 보내는 서비스가 아니라 **검증 + 결과 표시까지 구현한 Demo Form**입니다.

---

## 3.16 접근성

현재 코드에는 다음 접근성 관련 구현이 포함되어 있습니다.

- 의미 있는 img alt
- label과 input id 연결
- nav aria-label
- mobile menu aria-expanded / aria-controls
- filter aria-pressed
- 상태 영역 aria-live
- focus-visible
- reduced-motion 대응
- 외부 링크 noopener / noreferrer

예:

```html
<button
    class="menu-toggle"
    aria-label="저널 메뉴 열기"
    aria-expanded="false"
    aria-controls="nav-menu">
</button>
```

---

# 4. 이벤트 → 상태 → DOM 업데이트

이번 미션에서 가장 중요한 구현 원리입니다.

### Dark Mode

```text
click
→ next Theme 계산
→ data-theme 변경
→ CSS 변수 변경
→ 화면 Theme 변경
→ localStorage 저장
```

### GitHub API

```text
페이지 로드
→ loadRepositories()
→ Loading
→ fetch()
→ 응답
→ repositories 저장
→ filter()
→ map()
→ makeCard()
→ innerHTML
→ Project Card 출력
```

### Form

```text
input / submit
→ validateField()
→ 유효성 계산
→ aria-invalid / error text 변경
→ 사용자에게 결과 표시
```

### Filter

```text
filter button click
→ activeLanguage 변경
→ renderFilters()
→ renderRepoCards()
→ filter()
→ Card 재렌더링
```

이 구조는 React의 State → Render 개념을 이해하기 위한 기초적인 사고방식과 연결됩니다.

---

# 5. 프로젝트 구조

```text
ewisewjd.github.io/
├── index.html
├── css/
│   ├── style.css
│   ├── updates.css
│   └── backgrounds.css
├── js/
│   └── main.js
├── assets/
│   └── images/
├── docs/
│   └── mission.md
├── README.md
└── answer.md
```

---

# 6. 페이지 구성

- **Hero** — History × Data × AI와 포트폴리오 방향성
- **About** — 역사학 전공과 인문학적 관점
- **Skills** — Academic / Technology 구분
- **Projects** — GitHub API Repository + Codyssey Mission
- **Side Projects** — 향후 프로젝트를 추가할 영역
- **Contact** — 입력값 검증 Demo Form
- **Footer** — 기본 정보와 GitHub 링크

---

# 7. Mission 요구사항 구현표

| 요구사항 | 실제 구현 |
|---|---|
| Semantic HTML | header / nav / main / section / article / footer |
| Responsive | Mobile-first + 768px + 1024px |
| Flex | Navigation 등 1차원 배치 |
| Grid | Project / Skill 카드 |
| auto-fit / minmax | Project Grid |
| CSS Variables | :root + dark Theme |
| defer | main.js 연결 |
| querySelector | DOM 선택 |
| querySelectorAll | 다중 요소 선택 |
| textContent | 상태 / 오류 메시지 |
| innerHTML | 동적 Card / 메뉴 |
| classList | 메뉴 / 상태 / Theme |
| click | 메뉴 / Theme / Filter / Retry |
| input | Form 검증 |
| submit | Form 제출 |
| scroll | Header / Scroll Top |
| preventDefault | Demo Form |
| map | Repository → Card |
| filter | Repository / Language |
| Destructuring | Repository 객체 |
| Template Literal | Card HTML |
| fetch | GitHub API |
| async / await | 비동기 요청 |
| try / catch | 오류 처리 |
| Loading | 요청 중 상태 |
| Error | 오류 문구 + Retry |
| Empty | 데이터 없음 메시지 |
| localStorage | Theme 저장 |
| Intersection Observer | threshold 0.2 |
| GitHub Pages | 배포 |

---

# 8. Mission Constraints

- Pure HTML / CSS / JavaScript
- React / Vue / jQuery / Bootstrap / Tailwind CSS 미사용
- 인라인 onclick 미사용
- 인라인 style 미사용
- var 미사용
- GitHub API 인증 없이 공개 Repository 조회

Google Fonts는 Mission에서 허용한 웹 폰트 범위에 해당하므로 사용했습니다.

---

# 9. API Rate Limit

인증 없이 GitHub API를 호출하면 요청 횟수 제한이 있습니다. 반복 새로고침 등으로 403이 발생할 수 있으므로 개발 중 불필요한 반복 요청을 피해야 합니다.

현재 코드는 403을 별도로 감지합니다.

```javascript
if (response.status === 403) {
    throw new Error(
        "GitHub API 요청 한도에 도달했습니다."
    );
}
```

사용자에게는 Mission 요구사항에 맞춰 Error 상태와 Retry UI를 제공합니다.

---

# 10. 배포

GitHub Pages로 배포했습니다.

- Repository: ew isewjd/ewisewjd.github.io
- URL: https://ewisewjd.github.io/

---

# 11. 문제 해결 및 개선

주요 개선 과정은 다음과 같습니다.

- 긴 Repository 이름이 카드 밖으로 나가지 않도록 overflow-wrap 적용
- Repository를 8개 단위로 분리
- 여러 페이지는 가로 Swipe / Drag로 탐색
- Light / Dark Theme 대비 조정
- 연속 지도 배경 위 Section 구분선 추가
- API Loading / Error / Empty / Retry 상태 추가
- Mobile Navigation 상태 관리
- reduced-motion 환경 고려
- 카드의 직각적인 느낌을 줄이고 Paper Card 형태로 개선

Mission의 핵심 기능을 유지하면서 디자인을 변경하는 것을 우선했습니다.

---

# 12. 학습 기록

HTML → CSS → JavaScript 순서로 학습하면서 실제 코드에 적용했습니다.

특히 이번 미션에서는 문법 자체보다 **문법이 실제 웹페이지의 어떤 문제를 해결하는가**를 확인하는 데 집중했습니다.

Mission 완료 후에는 현재 코드를 다시 읽고, Mission 디렉터리의 practice 폴더에서 코드를 보지 않고 직접 재작성하여 복습할 예정입니다.

---

# 13. 앞으로의 계획

1. 현재 HTML/CSS/JavaScript 코드 전체 복습
2. practice 폴더에서 직접 재작성
3. DOM / Event / API / 상태 흐름을 설명할 수 있도록 학습
4. React의 Component / State / Props 학습
5. Data & AI와 역사학을 연결하는 개인 프로젝트 진행

---

# 14. Screenshots

스크린샷은 최종 정리 단계에서 직접 추가할 예정입니다.

### Desktop
<!-- Desktop Screenshot -->

### Mobile
<!-- Mobile Screenshot -->

### Dark Mode
<!-- Dark Mode Screenshot -->

---

# 15. 학습용 답변 문서

Mission의 「학습자가 스스로 설명할 수 있어야 한다」는 목표를 기준으로, 질문별 답변과 실제 코드 연결을 별도의 문서에 정리했습니다.

→ [answer.md](./answer.md)
