// Only one item MUST have the "default: true" key

module.exports = {
    en: {
      default: true,
      path: `en`,
      locale: `en-US`,
      dateFormat: `MM/DD/YYYY`,
      siteLanguage: `en`,
      ogLanguage: `en_US`,
      defaultTitle: `Gatsby Starter with multi-language and CMS`,
      defaultDescription: `Gatsby example site using Markdown, i18n and CMS`,
    },
    es: {
      path: `es`,
      locale: `es-ES`,
      dateFormat: `DD/MM/YYYY`,
      siteLanguage: `es`,
      ogLanguage: `es_ES`,
      defaultTitle: `Gatsby Starter multilingue com CMS`,
      defaultDescription: `Exemplo de Gatsby site usando Markdown, i18n e CMS`,
    },
  }