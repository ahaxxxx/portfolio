document.addEventListener("DOMContentLoaded", () => {
  window.Language.initLanguage();
  window.Theme.initTheme();
  window.Contact.renderContact();

  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("in-view"));
  }

  document.addEventListener("languagechange", () => {
    window.Contact.renderContact();
  });
});
