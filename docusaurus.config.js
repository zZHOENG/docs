// @ts-check
// 本文件为 Docusaurus 核心配置文件
// 修改后提交 → Actions 自动部署 → 1-2 分钟生效
// 文档：https://docusaurus.io/zh-CN/docs/configuration

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  // ======================== 站点基本信息 ========================
  title: '文档中心 · 帮助中心',
  tagline: '中政集团 · 河北正定中学办事处',
  favicon: 'img/favicon.ico',

  // ======================== 未来兼容性标志 ========================
  future: {
    v4: true,
  },

  // ======================== 部署地址 ========================
  url: 'https://docs.zhongzheng.tech',
  baseUrl: '/',

  // ======================== GitHub 信息 ========================
  organizationName: 'zZHOENG',
  projectName: 'docs',

  // ======================== 链接检查策略 ========================
  onBrokenLinks: 'warn',

  // ======================== Markdown 配置 ========================
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',  // 从顶层移到这里
    },
  },

  // ======================== 国际化（中文站点） ========================
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  // ======================== 预设 ========================
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // ---------- 文档配置 ----------
        docs: {
          sidebarPath: './sidebars.js',
          // 已删除 editUrl，移除“编辑此页”按钮
          showLastUpdateTime: true,
        },

        // ---------- 博客配置 ----------
        blog: {
          showReadingTime: true,
          // 已删除 editUrl，移除“编辑此页”按钮
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },

        // ---------- 主题配置 ----------
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  // ======================== 主题配置 ========================
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',

      // ---------- 颜色模式 ----------
      colorMode: {
        defaultMode: 'light',               // 默认浅色模式
        respectPrefersColorScheme: false,   // 不跟随系统颜色模式
      },

      // ---------- 导航栏 ----------
      navbar: {
      title: '文档 · 帮助',
      logo: {
        alt: '文档 · 帮助',
        src: 'img/logo.svg',
      },
      // 注意：不要加 hideColorModeToggle: true
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '文档与帮助',
        },
        {
          href: 'https://github.com/zZHOENG/docs',
          label: 'GitHub',
          position: 'right',
        },
        // 搜索框
        {
          type: 'search',
          position: 'right',
        },
      ],
    },

      // ---------- 页脚 ----------
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              { label: '使用指南', to: '/docs/intro' },
              { label: '常见问题', to: '/docs/faq' },
            ],
          },
          {
            title: '关于',
            items: [
              { label: 'GitHub', href: 'https://github.com/zZHOENG/docs' },
            ],
          },
        ],
        copyright: `Copyright © 2026-${new Date().getFullYear()} 中政集团 · 河北正定中学办事处  Built with Docusaurus.`,
      },

      // ---------- Algolia 搜索 ----------
      algolia: {
        appId: '02PW3ELEZ1',
        apiKey: 'c0b8800316a42fe632fc1de1f2ad97ef',
        indexName: 'zhoeng',
        contextualSearch: true,
        placeholder: '搜索文档...',
      },

      // ---------- 代码块高亮 ----------
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash', 'yaml', 'json', 'powershell'],
      },
    }),
};

export default config;
