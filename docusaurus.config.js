// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '文档中心 · 帮助中心',
  tagline: '中政集团 · 河北正定中学办事处',
  favicon: 'img/favicon.ico',

  url: 'https://docs.zhongzheng.tech',
  baseUrl: '/',

  organizationName: 'zZHOENG',
  projectName: 'docs',

  onBrokenLinks: 'warn',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          showLastUpdateTime: false,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  // 本地离线搜索插件
  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        indexDocs: true,
        indexBlog: true,
        language: ['zh'],
        hashed: true,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',

      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: false,
      },

      navbar: {
        title: '文档 · 帮助',
        logo: {
          alt: '文档 · 帮助',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '文档与帮助',
          },
          {
            href: 'https://zdzx.zhongzheng.tech/',
            label: 'ZDZX',
            position: 'right',
          },
          {
            href: 'https://github.com/zZHOENG/docs',
            label: 'GitHub',
            position: 'right',
          },
          // 不需要手动添加“搜索”项，本地搜索插件会自动注入
        ],
      },

      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              { label: '用户协议', to: '/docs/useragreement' },
              { label: '隐私政策', to: '/docs/privacypolicy' },
              { label: '免责声明', to: '/docs/disclaimer' },
            ],
          },
          {
            title: '关于',
            items: [
              { label: 'ZDZX', href: 'https://zdzx.zhongzheng.tech/' },
              { label: 'GitHub', href: 'https://github.com/zZHOENG/docs' },
            ],
          },
        ],
        copyright: `Copyright © 2025-${new Date().getFullYear()} 中政集团 · 中政科技 Copyright © 2026-${new Date().getFullYear()} 中政集团 · 河北正定中学办事处\nDevelop with DeepSeek R1. Built with Docusaurus.`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash', 'yaml', 'json', 'powershell'],
      },
    }),
};

export default config;
