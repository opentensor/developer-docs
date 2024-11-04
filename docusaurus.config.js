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
  projectName: "developer-docs", // Usually your repo name.
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".

  customFields: {
    enableIssueLinks: true, // Set to true to enable issue links
    enableEditUrlLinks: true, // Set to true to enable edit url links
    issueBaseUrl: "https://github.com/opentensor/developer-docs/issues",
    enableFeedback: false, // Set to false to disable feedback
  },

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "@docusaurus/preset-classic",
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
          docItemComponent: "@theme/DocItem",
          editUrl: "https://github.com/opentensor/developer-docs/blob/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  plugins: [
    "@gracefullight/docusaurus-plugin-vercel-analytics",
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            to: "/btcli",
            from: "/reference/btcli",
          },
          {
            to: "/subnets/checklist-for-validating-mining",
            from: "/subnets/checklist-for-subnet",
          },
          {
            to: "/subnets/register-validate-mine",
            from: "/subnets/register-and-participate",
          },
          {
            to: "/staking-and-delegation/delegation",
            from: "/delegation",
          },
          {
            to: "/staking-and-delegation/staking-polkadot-js",
            from: "/staking/staking-polkadot-js",
          },
          {
            to: "/staking-and-delegation",
            from: "/staking",
          },
          {
            to: "/subnets/walkthrough-prompting",
            from: "/subnets/code-walkthrough-text-prompting",
          },
          {
            to: "/subtensor-nodes",
            from: "/getting-started/running-a-public-subtensor",
          },
          {
            to: "/",
            from: "/subnet-pages",
          },
          {
            to: "/subnets/schedule-coldkey-swap",
            from: "/schedule-key-swap",
          },
          {
            to: "/subnets/schedule-coldkey-swap",
            from: "/subnets/schedule-key-swap",
          },
	  {
            to: "/bt-api-ref",
            from: "/reference/bittensor-api-ref",
          },
        ],
      },
    ],
  ],
  // scripts: [
  //   // String format.
  //   // 'https://docusaurus.io/script.js',
  //   // Object format.
  //   {
  //     src: "/static/feedbug-widjet.js",
  //     async: true,
  //   },
  // ],
  // clientModules: ["/static/feedbug-widjet.js"],
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
      image: "img/bittensor-dev-docs-social-card.png",
      docs: {
        sidebar: {
          autoCollapseCategories: true,
          hideable: false,
        },
      },

      navbar: {
        logo: {
          alt: "Bittensor",
          src: "img/logo.svg",
          srcDark: "img/logo-dark-mode.svg",
          href: "https://bittensor.com",
          style: {
            objectFit: "contain",
            width: 21,
          },
        },
        items: [
          {
            position: "left",
            label: "SUBTENSOR NODES",
            to: "subtensor-nodes",
          },
          {
            position: "left",
            label: "EVM TUTORIALS",
            to: "evm-tutorials",
          },
          {
            position: "left",
            label: "DYNAMIC TAO",
            to: "dynamic-tao",
          },
          {
            type: "search",
            position: "left",
            className: "custom_algolia",
          },
          // {
          //   href: "https://github.com/opentensor/developer-docs",
          //   label: "Docs GitHub",
          //   position: "right",
          // },
        ],
      },

      prism: {
        theme: lightTheme,
        darkTheme: darkTheme,
        additionalLanguages: ["bash", "python", "diff", "json", "yaml"],
      },
      algolia: {
        appId: "B07G29NY9F",
        apiKey: "d23c920e8a9bdae899572be3c8494696",
        indexName: "new--alpha",
        contextualSearch: true,
        insights: true,
        debug: false,
      },
      footer: {
        copyright: `
					<div className="copyRight">
						© ${new Date().getFullYear()} <a href="https://bittensor.com">Bittensor</a> • Opentensor Foundation. <span>all rights reserved.</span>
					</div>
					<a href='https://bittensor.com/'>
					<img src="img/logo-dark-mode.svg" alt="logo"/>
					</a>
				`,
      },
    }),
};

module.exports = config;
