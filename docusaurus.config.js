// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Bittensor",
  tagline: "Developer Documentation",
  favicon: "img/favicon.ico",
  url: "https://docs.bittensor.com",
  baseUrl: "/",
  organizationName: "opentensor",
  projectName: "developer-docs",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false, // Disable docs
        blog: false, // Disable blog
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        items: [], // Remove all navbar items
      },
      footer: {
        copyright: `© ${new Date().getFullYear()} <a href="https://bittensor.com">Bittensor</a> • <a href="https://latent.to/">Latent Holdings</a>`,
      },
    }),
};

module.exports = config;
