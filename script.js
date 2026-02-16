document.addEventListener("DOMContentLoaded", () => {
  window.Language.initLanguage();
  window.Theme.initTheme();
  window.Contact.renderContact();

  document.addEventListener("languagechange", () => {
    window.Contact.renderContact();
  });
});
