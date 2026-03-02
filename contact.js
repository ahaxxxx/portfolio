window.contactConfig = {
  email: "libozhanpak@qq.com",
  homepage: "https://ahaxxxx.github.io/portfolio/",
  crm: "https://ahaxxxx.github.io/Xenta-Field-CRM-Static-/",
  whatsapp: "+86-15521414475"
};

(function () {
  function createContactItem(label, href, text) {
    const item = document.createElement("a");
    item.className = "contact-item";
    item.href = href;
    item.target = "_blank";
    item.rel = "noopener noreferrer";
    item.innerHTML = `<strong>${label}:</strong> ${text}`;
    return item;
  }

  function renderContact() {
    const container = document.getElementById("contactLinks");
    const feedback = document.getElementById("copyFeedback");
    if (!container) {
      return;
    }

    container.innerHTML = "";

    const emailLabel = window.Language.t("contact.email", "Email");
    const homepageLabel = window.Language.t("contact.homepage", "Personal Website");
    const crmLabel = window.Language.t("contact.crm", "CRM System");
    const whatsappLabel = window.Language.t("contact.whatsapp", "WhatsApp");

    if (window.contactConfig.email) {
      const emailWrap = document.createElement("div");
      emailWrap.className = "contact-email-wrap";

      const emailLink = document.createElement("a");
      emailLink.className = "contact-item";
      emailLink.href = `mailto:${window.contactConfig.email}`;
      emailLink.innerHTML = `<strong>${emailLabel}:</strong> ${window.contactConfig.email}`;
      emailWrap.appendChild(emailLink);

      const copyBtn = document.createElement("button");
      copyBtn.type = "button";
      copyBtn.className = "btn btn-outline btn-copy";
      copyBtn.textContent = window.Language.t("controls.copyEmail", "Copy Email");
      copyBtn.addEventListener("click", async () => {
        try {
          await navigator.clipboard.writeText(window.contactConfig.email);
          feedback.textContent = window.Language.t("contact.copied", "Email copied to clipboard.");
        } catch (error) {
          feedback.textContent = window.Language.t("contact.copyFailed", "Copy failed. Please copy manually.");
        }
      });
      emailWrap.appendChild(copyBtn);

      container.appendChild(emailWrap);
    }

    if (window.contactConfig.homepage) {
      container.appendChild(createContactItem(homepageLabel, window.contactConfig.homepage, window.contactConfig.homepage));
    }

    if (window.contactConfig.crm) {
      container.appendChild(createContactItem(crmLabel, window.contactConfig.crm, window.contactConfig.crm));
    }

    if (window.contactConfig.whatsapp) {
      container.appendChild(createContactItem(whatsappLabel, window.contactConfig.whatsapp, window.contactConfig.whatsapp));
    }
  }

  window.Contact = {
    renderContact
  };
})();
