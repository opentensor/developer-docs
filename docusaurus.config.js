// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

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

  onBrokenLinks: "log",
  onBrokenMarkdownLinks: "log",

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
          sidebarPath: require.resolve("./sidebars.js"),
          sidebarCollapsible: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      docs: {
        sidebar: {
          autoCollapseCategories: true,
          hideable: true,
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
            type: "dropdown",
            label: "Getting Started",
            position: "left",
            items: [
              {
                label: "Installation",
                to: "getting-started/installation",
              },
              {
                label: "Wallets",
                to: "getting-started/wallets",
              },
            ],
          },
          {
            href: "https://wallet.bittensor.com/",
            label: "Wallet",
            position: "left",
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
      footer: {
        style: "dark",
        copyright: `Built in ${new Date().getFullYear()} by <a href="https://bittensor.com">Bittensor</a> with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
