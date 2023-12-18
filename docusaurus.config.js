// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Thomas Dalgetty Portfolio Site',
  tagline: 'Welcome to my site!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://www.dalgetty.dev/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  //organizationName: 'facebook', // Usually your GitHub org/user name.
  //projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/Programmer.png',
      navbar: {
        title: '',
        logo: {
          alt: 'My Site Logo',
          src: 'img/icons8-home.svg',
        },
        items: [
          {to: '/blog', label: 'Posts', position: 'left'},
          {to: '/contact', label: 'Contact', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Acknowledgements',
            items: [
              {
                label: 'Home icon by Icons8',
                href: 'https://www.Icons8.com',
              },
              {
                label: 'Github Cards',
                href: 'https://gh-card.dev/',
              }
            ]
          },
          {
            title: 'My Links',
            items: [
              {
                label: 'Github',
                href: 'https://www.github.com/ThomasD0213',
              },
              {
                label: 'LinkedIn',
                href: 'https://linkedin.com/in/thomas-dalgetty',
              },
              {
                label: 'Gitlab',
                href: 'https://gitlab.com/spookiemilkjug',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Thomas Dalgetty, Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
