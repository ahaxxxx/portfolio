(function () {
  const STORAGE_KEY = "portfolio-theme";

  function getPreferredTheme() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "light" || saved === "dark") {
      return saved;
    }
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_KEY, theme);
    updateThemeButton(theme);
  }

  function updateThemeButton(theme) {
    const btn = document.getElementById("themeToggle");
    if (!btn) {
      return;
    }
    const key = theme === "dark" ? "controls.themeToLight" : "controls.themeToDark";
    if (window.Language && typeof window.Language.t === "function") {
      btn.textContent = window.Language.t(key, theme === "dark" ? "Light Mode" : "Dark Mode");
    } else {
      btn.textContent = theme === "dark" ? "Light Mode" : "Dark Mode";
    }
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme") || "light";
    const next = current === "dark" ? "light" : "dark";
    applyTheme(next);
  }

  function initTheme() {
    const initialTheme = getPreferredTheme();
    applyTheme(initialTheme);

    const btn = document.getElementById("themeToggle");
    if (btn) {
      btn.addEventListener("click", toggleTheme);
    }

    document.addEventListener("languagechange", () => {
      const current = document.documentElement.getAttribute("data-theme") || "light";
      updateThemeButton(current);
    });
  }

  window.Theme = {
    initTheme,
    toggleTheme,
    applyTheme
  };
})();
