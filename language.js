window.translations = {
  en: {
    site: {
      brand: "MahamCodes",
      title: "MahamCodes | Portfolio"
    },
    controls: {
      langToggle: "中文",
      themeToDark: "Dark Mode",
      themeToLight: "Light Mode",
      copyEmail: "Copy Email"
    },
    hero: {
      eyebrow: "Portfolio",
      name: "Bozhan Li",
      photoAlt: "Profile photo of Bozhan Li",
      subtitle: "Applied Mathematics Graduate | International Market & Product Marketing",
      summary:
        "I combine analytical thinking with market-facing execution, translating technical diagnostics products into practical business decisions across global markets."
    },
    about: {
      title: "About",
      education: {
        title: "Education",
        item1:
          "M.S. in Applied Mathematics, Guangxi University (Sep 2022 - Jun 2025), weighted average: 91.51/100.",
        item2:
          "B.M. in Human Resource Management, South China Normal University (Sep 2016 - Jul 2020), weighted average: 81.7/100."
      },
      experience: {
        title: "Experience",
        item1:
          "International Market & Product Marketing at Xenta Biotech (Jun 2025 - Jan 2026).",
        item2:
          "Focused on African market research, pricing models, distributor evaluations, and technical-commercial communication for POCT and CLIA products."
      }
    },
    projects: {
      title: "Featured JavaScript Projects",
      items: [
        {
          title: "Pricing Intelligence Dashboard",
          desc: "Interactive dashboard for comparing country-level pricing models, credit terms, and distribution strategies.",
          tag: "JavaScript"
        },
        {
          title: "Distributor Fit Score Tool",
          desc: "Rule-based web app that scores distributor suitability using channel capability, financial profile, and regional coverage.",
          tag: "JavaScript"
        },
        {
          title: "Feature Selection Visualizer",
          desc: "Browser-based tool to explore rough-set inspired feature reduction workflows with dynamic metric comparisons.",
          tag: "JavaScript"
        }
      ]
    },
    skills: {
      title: "Skills",
      items: [
        "Excel",
        "SPSS",
        "Python",
        "Market Research",
        "Pricing Analysis",
        "English Business Communication"
      ]
    },
    contact: {
      title: "Contact",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      whatsapp: "WhatsApp",
      copied: "Email copied to clipboard.",
      copyFailed: "Copy failed. Please copy manually."
    },
    footer: {
      languages: "Languages: Mandarin, Cantonese, English (CET-6, Duolingo 115)",
      locationPrefix: "Location: ",
      locationValue: "China"
    }
  },
  zh: {
    site: {
      brand: "MahamCodes",
      title: "MahamCodes | 个人主页"
    },
    controls: {
      langToggle: "English",
      themeToDark: "深色模式",
      themeToLight: "浅色模式",
      copyEmail: "复制邮箱"
    },
    hero: {
      eyebrow: "个人主页",
      name: "李博展",
      photoAlt: "李博展头像",
      subtitle: "应用数学硕士 | 国际市场与产品营销",
      summary:
        "我结合分析思维与市场执行能力，将体外诊断产品的技术特点转化为可落地的商业决策。"
    },
    about: {
      title: "关于我",
      education: {
        title: "教育背景",
        item1: "广西大学 应用数学硕士（2022年9月 - 2025年6月），加权平均分 91.51/100。",
        item2: "华南师范大学 人力资源管理学士（2016年9月 - 2020年7月），加权平均分 81.7/100。"
      },
      experience: {
        title: "工作经历",
        item1: "Xenta Biotech 国际市场与产品营销（2025年6月 - 2026年1月）。",
        item2: "负责非洲市场调研、定价模型、经销商评估，以及 POCT 和 CLIA 产品的技术商务沟通。"
      }
    },
    projects: {
      title: "精选 JavaScript 项目",
      items: [
        {
          title: "定价情报仪表盘",
          desc: "用于对比多国家定价模型、账期条件与分销策略的交互式仪表盘。",
          tag: "JavaScript"
        },
        {
          title: "经销商匹配评分工具",
          desc: "基于规则的网页工具，从渠道能力、财务情况和区域覆盖度评估经销商适配性。",
          tag: "JavaScript"
        },
        {
          title: "特征筛选可视化工具",
          desc: "在浏览器中动态展示粗糙集相关特征约简流程与指标对比。",
          tag: "JavaScript"
        }
      ]
    },
    skills: {
      title: "技能",
      items: [
        "Excel",
        "SPSS",
        "Python",
        "市场调研",
        "定价分析",
        "英文商务沟通"
      ]
    },
    contact: {
      title: "联系方式",
      email: "邮箱",
      linkedin: "领英",
      github: "GitHub",
      whatsapp: "WhatsApp",
      copied: "邮箱已复制到剪贴板。",
      copyFailed: "复制失败，请手动复制。"
    },
    footer: {
      languages: "语言：普通话、粤语、英语（CET-6、多邻国 115）",
      locationPrefix: "所在地：",
      locationValue: "中国"
    }
  }
};

(function () {
  const STORAGE_KEY = "portfolio-language";

  function getNestedValue(obj, path) {
    return path.split(".").reduce((acc, key) => {
      if (acc === undefined || acc === null) {
        return undefined;
      }
      if (/^\d+$/.test(key)) {
        return acc[Number(key)];
      }
      return acc[key];
    }, obj);
  }

  function getPreferredLanguage() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && window.translations[saved]) {
      return saved;
    }
    const browserLang = (navigator.language || "en").toLowerCase();
    return browserLang.startsWith("zh") ? "zh" : "en";
  }

  function t(key, fallback) {
    const lang = window.currentLanguage || "en";
    const value = getNestedValue(window.translations[lang], key);
    if (value === undefined) {
      return fallback || key;
    }
    return value;
  }

  function applyTranslations() {
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const key = node.getAttribute("data-i18n");
      node.textContent = t(key, node.textContent);
    });
    document.querySelectorAll("[data-i18n-alt]").forEach((node) => {
      const key = node.getAttribute("data-i18n-alt");
      node.setAttribute("alt", t(key, node.getAttribute("alt")));
    });
  }

  function updateLanguageButton() {
    const btn = document.getElementById("langToggle");
    if (!btn) {
      return;
    }
    btn.textContent = t("controls.langToggle", "中文");
  }

  function setLanguage(lang) {
    if (!window.translations[lang]) {
      return;
    }
    window.currentLanguage = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
    applyTranslations();
    updateLanguageButton();
    document.dispatchEvent(new CustomEvent("languagechange", { detail: { lang } }));
  }

  function toggleLanguage() {
    const next = (window.currentLanguage || "en") === "en" ? "zh" : "en";
    setLanguage(next);
  }

  function initLanguage() {
    const initialLang = getPreferredLanguage();
    setLanguage(initialLang);

    const btn = document.getElementById("langToggle");
    if (btn) {
      btn.addEventListener("click", toggleLanguage);
    }
  }

  window.Language = {
    t,
    setLanguage,
    initLanguage,
    applyTranslations
  };
})();
