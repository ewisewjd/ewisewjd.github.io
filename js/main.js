/* CW. VOYAGE — interactive features */
document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("#nav-menu");
    const themeButton = document.querySelector(".theme-toggle");
    const header = document.querySelector(".site-header");
    const scrollTopButton = document.querySelector("#scroll-top");

    // Mobile navigation
    menuButton?.addEventListener("click", () => {
        const isOpen = navMenu.classList.toggle("is-open");
        menuButton.setAttribute("aria-expanded", String(isOpen));
        menuButton.setAttribute("aria-label", isOpen ? "메뉴 닫기" : "메뉴 열기");
        menuButton.textContent = isOpen ? "×" : "☰";
    });
    navMenu?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
        navMenu.classList.remove("is-open");
        menuButton?.setAttribute("aria-expanded", "false");
        if (menuButton) { menuButton.textContent = "☰"; menuButton.setAttribute("aria-label", "메뉴 열기"); }
    }));

    // Light / dark theme preference
    const savedTheme = localStorage.getItem("cw-voyage-theme");
    if (savedTheme === "dark" || savedTheme === "light") document.documentElement.dataset.theme = savedTheme;
    const syncThemeButton = () => {
        const dark = document.documentElement.dataset.theme === "dark";
        if (themeButton) {
            themeButton.textContent = dark ? "☀" : "☾";
            themeButton.setAttribute("aria-label", dark ? "라이트 모드 전환" : "다크 모드 전환");
        }
    };
    syncThemeButton();
    themeButton?.addEventListener("click", () => {
        const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
        document.documentElement.dataset.theme = next;
        localStorage.setItem("cw-voyage-theme", next);
        syncThemeButton();
    });

    // Scroll-dependent header and back-to-top control
    const updateScrollUI = () => {
        const y = window.scrollY;
        header?.classList.toggle("scrolled", y > 60);
        if (scrollTopButton) scrollTopButton.hidden = y <= 300;
    };
    window.addEventListener("scroll", updateScrollUI, { passive: true });
    updateScrollUI();
    scrollTopButton?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

    // Typewriter tagline (respects reduced-motion preference)
    const tagline = document.querySelector(".hero-tagline");
    if (tagline) {
        const text = tagline.dataset.text || "인문학과 기술을 연결하는 데이터 과학자";
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) tagline.textContent = text;
        else {
            tagline.textContent = "";
            let index = 0;
            const typeNext = () => {
                if (index < text.length) {
                    tagline.textContent += text.charAt(index++);
                    window.setTimeout(typeNext, 85);
                }
            };
            typeNext();
        }
    }

    // Reveal sections as they enter the viewport
    const revealTargets = document.querySelectorAll(".section, .about-card, .skill-group, .project-card");
    if ("IntersectionObserver" in window) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        revealTargets.forEach((element) => revealObserver.observe(element));
    } else revealTargets.forEach((element) => element.classList.add("is-visible"));

    // GitHub API: own repositories, language filters, and Codyssey mission cards
    const username = "ewisewjd";
    const repoGrid = document.querySelector("#my-repo-grid");
    const repoStatus = document.querySelector("#my-repo-status");
    const filters = document.querySelector("#repo-filters");
    const missionGrid = document.querySelector("#github-projects");
    const missionStatus = document.querySelector("#repo-status");
    const retryButton = document.querySelector("#retry-button");
    let repositories = [];
    let activeLanguage = "All";

    const makeCard = (repo, mission = false) => {
        const article = document.createElement("article");
        article.className = "project-card";
        const title = document.createElement("h4");
        const link = document.createElement("a");
        link.href = repo.html_url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = repo.name;
        title.append(link);
        const description = document.createElement("p");
        description.className = mission ? "repo-card-description" : "repo-card-description";
        description.textContent = repo.description || "프로젝트 설명이 아직 등록되지 않았습니다.";
        const meta = document.createElement("div");
        meta.className = "repo-meta";
        const language = document.createElement("span");
        language.className = "repo-language";
        language.textContent = repo.language || "Language 미지정";
        const stars = document.createElement("span");
        stars.textContent = `★ ${repo.stargazers_count ?? 0}`;
        meta.append(language, stars);
        article.append(title, description, meta);
        return article;
    };

    const renderRepoCards = () => {
        if (!repoGrid) return;
        repoGrid.replaceChildren();
        const filtered = activeLanguage === "All" ? repositories : repositories.filter((repo) => (repo.language || "Other") === activeLanguage);
        filtered.slice(0, 4).map((repo) => makeCard(repo)).forEach((card) => repoGrid.append(card));
        if (filtered.length === 0) {
            const empty = document.createElement("p");
            empty.textContent = "이 언어로 작성된 저장소가 없습니다.";
            repoGrid.append(empty);
        }
    };

    const renderFilters = () => {
        if (!filters) return;
        filters.replaceChildren();
        const languages = ["All", ...new Set(repositories.map((repo) => repo.language || "Other"))];
        languages.forEach((language) => {
            const button = document.createElement("button");
            button.type = "button";
            button.className = "repo-filter";
            button.textContent = language === "All" ? "All" : language;
            button.setAttribute("aria-pressed", String(activeLanguage === language));
            button.addEventListener("click", () => {
                activeLanguage = language;
                renderFilters();
                renderRepoCards();
            });
            filters.append(button);
        });
    };

    const setStatus = (element, message, state = "") => {
        if (!element) return;
        element.textContent = message;
        element.classList.remove("loading", "error", "empty", "is-loading", "is-error", "is-empty");
        if (state) element.classList.add(state);
    };

    async function loadRepositories() {
        setStatus(repoStatus, "나의 저장소를 불러오는 중…", "loading");
        setStatus(missionStatus, "Codyssey 미션 저장소를 확인하는 중…", "loading");
        if (retryButton) retryButton.hidden = true;
        if (repoGrid) repoGrid.replaceChildren();
        if (missionGrid) missionGrid.replaceChildren();
        try {
            const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
            if (!response.ok) {
                if (response.status === 403) throw new Error("GitHub API 요청 한도에 도달했습니다. 잠시 후 다시 시도해 주세요.");
                if (response.status === 404) throw new Error("GitHub 사용자를 찾을 수 없습니다.");
                throw new Error(`GitHub API 오류 (${response.status})`);
            }
            const data = await response.json();
            if (!Array.isArray(data)) throw new Error("저장소 응답 형식이 올바르지 않습니다.");
            repositories = data.filter((repo) => !repo.fork && !repo.archived);
            if (!repositories.length) {
                setStatus(repoStatus, "표시할 공개 저장소가 없습니다.", "empty");
                setStatus(missionStatus, "아직 표시할 Codyssey 미션 저장소가 없습니다.", "empty");
                return;
            }
            renderFilters();
            renderRepoCards();
            setStatus(repoStatus, `공개 저장소 ${repositories.length}개 중 최근 저장소를 표시합니다.`);

            const missions = repositories.filter((repo) => /codyssey|mission|미션/i.test(`${repo.name} ${repo.description || ""}`));
            if (missionGrid && missions.length) {
                missions.slice(0, 4).forEach((repo) => missionGrid.append(makeCard(repo, true)));
                setStatus(missionStatus, `Codyssey/미션 관련 저장소 ${missions.length}개를 찾았습니다.`);
            } else {
                setStatus(missionStatus, "Codyssey 또는 mission이 이름·설명에 포함된 공개 저장소가 아직 없습니다.", "empty");
            }
        } catch (error) {
            const message = error instanceof Error ? error.message : "저장소를 불러오지 못했습니다.";
            setStatus(repoStatus, message, "error");
            setStatus(missionStatus, message, "error");
            if (retryButton) retryButton.hidden = false;
        }
    }
    retryButton?.addEventListener("click", loadRepositories);
    loadRepositories();

    // Client-side contact form validation. No message is sent without a backend/service.
    const form = document.querySelector("#contact-form");
    form?.addEventListener("submit", (event) => {
        event.preventDefault();
        const fields = [
            { id: "name", errorId: "name-error", message: "이름을 입력해 주세요.", valid: (value) => value.trim().length > 0 },
            { id: "email", errorId: "email-error", message: "올바른 이메일 주소를 입력해 주세요.", valid: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()) },
            { id: "message", errorId: "message-error", message: "메시지를 입력해 주세요.", valid: (value) => value.trim().length > 0 }
        ];
        let isValid = true;
        fields.forEach(({ id, errorId, message, valid }) => {
            const input = document.getElementById(id);
            const error = document.getElementById(errorId);
            const okay = Boolean(input && valid(input.value));
            if (input) input.setAttribute("aria-invalid", String(!okay));
            if (error) error.textContent = okay ? "" : message;
            if (!okay) isValid = false;
        });
        const status = document.querySelector("#form-status");
        if (status) {
            status.className = isValid ? "success" : "error";
            status.textContent = isValid
                ? "입력값이 확인되었습니다. 현재 데모 폼은 메시지를 전송하지 않습니다. 이메일 등 별도 연락 수단을 이용해 주세요."
                : "입력 내용을 확인해 주세요.";
        }
    });
});
