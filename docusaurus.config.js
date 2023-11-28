// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// const lightCodeTheme = require("prism-react-renderer/themes/github");
// const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const { themes } = require("prism-react-renderer");
const lightTheme = themes.github;
const darkTheme = themes.dracula;

// KaTex stuff
const math = require("remark-math");
const katex = require("rehype-katex");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Bittensor",
  tagline: "Developer Documentation",
  favicon: "img/favicon.ico",
  // Set the production url of your site here
  url: "https://docs.bittensor.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "opentensor", // Usually your GitHub org/user name.
  projectName: "new-docs", // Usually your repo name.
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          path: "docs",
          remarkPlugins: [math],
          rehypePlugins: [katex],
          sidebarPath: require.resolve("./sidebars.js"),
          sidebarCollapsible: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  scripts: [
    // String format.
    // 'https://docusaurus.io/script.js',
    // Object format.
    {
      src: "/static/feedbug-widjet.js",
      async: true,
    },
  ],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      docs: {
        sidebar: {
          autoCollapseCategories: true,
          hideable: false,
        },
      },
      navbar: {
        title: "Developer Documentation",
        logo: {
          alt: "Bittensor",
          src: "img/logo.svg",
        },
        items: [
          {
            position: "left",
            label: "Bittensor API Reference",
            href: "pathname:///python-api/html/index.html",
          },
          {
            href: "https://wallet.bittensor.com/",
            label: "Wallet",
            position: "right",
          },
          {
            href: "https://github.com/opentensor/new-docs",
            label: "GitHub",
            position: "right",
          },
          {
            href: "https://bittensor.com/about",
            label: "About Bittensor",
            position: "right",
          },
        ],
      },

      prism: {
        theme: lightTheme,
        darkTheme: darkTheme,
        additionalLanguages: ["bash", "diff", "json"],
      },
      algolia: {
        appId: "B07G29NY9F",
        apiKey: "fff5aa7a466a7c3252ae85d9a0629b2f",
        indexName: "new--alpha",
        contextualSearch: true,
        insights: true,
        debug: false,
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Wallet",
            items: [
              {
                label: "Bittensor Wallet",
                to: "https://wallet.bittensor.com/",
              },
            ],
          },
          {
            title: "About",
            items: [
              {
                label: "About Bittensor",
                to: "https://bittensor.com/about",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Bittensor Discord",
                href: "https://discord.gg/qasY3HA9F9",
              },
              {
                label: "Documentation GitHub",
                href: "https://github.com/opentensor/new-docs",
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} <a href="https://bittensor.com">Bittensor</a> • Opentensor Foundation`,
      },
    }),
};

module.exports = config;
