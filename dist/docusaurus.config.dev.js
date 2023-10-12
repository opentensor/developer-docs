"use strict";

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
var lightCodeTheme = require('prism-react-renderer/themes/github');

var darkCodeTheme = require('prism-react-renderer/themes/dracula');
/** @type {import('@docusaurus/types').Config} */


var config = {
  title: 'Bittensor',
  tagline: 'Developer Documentation',
  favicon: 'img/favicon.ico',
  // Set the production url of your site here
  url: 'https://docs.bittensor.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook',
  // Usually your GitHub org/user name.
  projectName: 'docusaurus',
  // Usually your repo name.
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },
  presets: [['classic',
  /** @type {import('@docusaurus/preset-classic').Options} */
  {
    docs: {
      routeBasePath: "/",
      path: "docs",
      sidebarPath: require.resolve('./sidebars.js')
    },
    theme: {
      customCss: require.resolve('./src/css/custom.css')
    }
  }]],
  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: '',
      logo: {
        alt: 'Bittensor',
        src: 'img/logo.svg'
      },
      items: []
    },
    footer: {
      style: 'dark',
      copyright: "Built in ".concat(new Date().getFullYear(), " by <a href=\"https://bittensor.com\">Bittensor</a> with Docusaurus.")
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme
    }
  }
};
module.exports = config;