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
  favicon: "img/logo.svg",
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

  customFields: {
    enableIssueLinks: false, // Set to true to enable issue links
    enableEditUrlLinks: false, // Set to true to enable edit url links
    issueBaseUrl: "https://github.com/opentensor/new-docs/issues/new",
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
          editUrl: "https://github.com/opentensor/new-docs/blob/main/",
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
      image: "img/bittensor-docs-social-card.png",
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
          srcDark: "img/logo-dark-mode.svg",
          style: {
            objectFit: "contain",
            width: 24,
          },
        },

        items: [
          {
            position: "right",
            type: "dropdown",
            label: "Getting started",
            items: [
              {
                label: "Installation",
                to: "/getting-started/installation",
              },
              {
                label: "Wallet",
                to: "/getting-started/wallets",
              },
            ],
          },
          // {
          //   type: "dropdown",
          //   label: "GETTING STARTED",
          //   position: "left",
          //   items: [
          //     // {
          //     // 	label: 'Item 1',

          //     // 	position: "left",
          //     // 	type: 'category',
          //     // 	items: [
          //     // 		"getting-started/installation",
          //     // 		"getting-started/wallets",
          //     // 	],
          // 		// },
          // 		{to:"/",  label: "WELCOME",},
          // 		{
          // 			label: "WHAT'S NEW IN DOCS",
          // 			to: "/whats-new-in-docs"
          // 		},
          //     {
          // 			label: "Get Started",

          //       dropdown: [
          //         {
          //           label: "INSTALL BITTENSOR",
          //           to: "/getting-started/installation",
          //         },
          //         {
          //           label: 'CREATE WALLET',
          //           to: "/getting-started/wallets",
          //         },
          //       ],
          //       // type: "dropdown",
          //       // 	items: [
          //       // 	"getting-started/installation",
          //       // 	"getting-started/wallets",
          //       // ],
          //       to: "/getting-started/installation",
          //     },
          //   ],
          // },
          {
            position: "left",
            label: "Bittensor API Reference",
            href: "pathname:///python-api/html/index.html",
          },
          {
            type: "search",
            position: "left",
            className: "custom_algolia",
          },
          {
            href: "https://github.com/opentensor/new-docs",
            label: "GitHub",
            position: "right",
          },
          {
            href: "https://bittensor.com/about",
            label: "About Opentensor",
            position: "right",
          },
          {
            href: "https://wallet.bittensor.com/",
            label: "wallet",
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
        apiKey: "d23c920e8a9bdae899572be3c8494696",
        indexName: "new--alpha",
        contextualSearch: true,
        insights: true,
        debug: false,
      },
      footer: {
        //style: "dark",
        // links: [
        //   {
        //     title: "Wallet",
        //     items: [
        //       {
        //         label: "Bittensor Wallet",
        //         to: "https://wallet.bittensor.com/",
        //       },
        //     ],
        //   },
        //   {
        //     title: "About",
        //     items: [
        //       {
        //         label: "About Bittensor",
        //         to: "https://bittensor.com/about",
        //       },
        //     ],
        //   },
        //   {
        //     title: "Community",
        //     items: [
        //       {
        //         label: "Bittensor Discord",
        //         href: "https://discord.gg/qasY3HA9F9",
        //       },
        //       {
        //         label: "Documentation GitHub",
        //         href: "https://github.com/opentensor/new-docs",
        //       },
        //     ],
        //   },
        // ],
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
