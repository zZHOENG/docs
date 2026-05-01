// @ts-check
// 本文件为 Docusaurus 核心配置文件
// 修改后提交 → Actions 自动部署 → 1-2 分钟生效
// 文档：https://docusaurus.io/zh-CN/docs/configuration

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  // ======================== 站点基本信息 ========================
  // 浏览器标签页标题（也是 SEO 标题）
  title: '文档中心 · 帮助中心',
  // 首页副标题 & SEO 描述
  tagline: '中政集团 · 河北正定中学办事处',
  // 浏览器标签页小图标（存放于 static/img/favicon.ico）
  favicon: 'img/favicon.ico',

  // ======================== 未来兼容性标志 ========================
  future: {
    v4: true, // 提前适配未来的 Docusaurus v4 版本
  },

  // ======================== 部署地址（关键！） ========================
  // 你的自定义域名（末尾不要有斜杠）
  url: 'https://docs.zhongzheng.tech',
  // 站点在域名下的路径（根路径为首尾都有斜杠的 /）
  baseUrl: '/',

  // ======================== GitHub 信息 ========================
  // GitHub 用户名（或组织名）
  organizationName: 'zZHOENG',
  // 仓库名
  projectName: 'docs',

  // ======================== 链接检查策略 ========================
  // 文档内容全部完善后可改为 'throw' 以保证质量
  onBrokenLinks: 'warn',
  // Markdown 内部链接的检查策略
  onBrokenMarkdownLinks: 'warn',

  // ======================== 国际化（中文站点） ========================
  i18n: {
    // 默认语言设为简体中文，同时设置 html lang 属性，利于 SEO
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  // ======================== 预设（Preset） ========================
  // classic 预设包含文档、博客、主题三大功能
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // ---------- 文档配置 ----------
        docs: {
          // 侧边栏配置文件路径
          sidebarPath: './sidebars.js',
          // 每一页的“编辑此页”链接地址（改为你自己的仓库）
          editUrl: 'https://github.com/zZHOENG/docs/edit/main/',
          // 显示文档最后更新时间（需要 git 历史记录）
          showLastUpdateTime: true,
        },

        // ---------- 博客配置 ----------
        // 如果完全不需要博客功能，把下面整个 blog 对象注释掉，改为 false
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/zZHOENG/docs/edit/main/',
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
          // 全局自定义样式文件
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  // ======================== 主题配置（导航栏、页脚、搜索等） ========================
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({

      // ---------- 社交媒体分享图 ----------
      // 当页面被分享到微信/Facebook/Twitter 时显示的预览图
      image: 'img/docusaurus-social-card.jpg',

      // ---------- 亮色 / 暗色模式 ----------
      colorMode: {
        // 跟随用户操作系统的颜色偏好
        respectPrefersColorScheme: true,
      },

      // ---------- 导航栏 ----------
      navbar: {
        // 导航栏左侧文字
        title: '文档中心',
        // 导航栏左侧 logo
        logo: {
          alt: '帮助中心 Logo',
          src: 'img/logo.svg',
        },
        // 导航栏菜单项
        items: [
          // 文档入口（关联侧边栏中定义的文档）
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '使用指南',
          },
          // 如果保留博客，取消下面注释
          // { to: '/blog', label: '博客', position: 'left' },
          // GitHub 仓库链接（放在右侧）
          {
            href: 'https://github.com/zZHOENG/docs',
            label: 'GitHub',
            position: 'right',
          },
          // 搜索框（放在右侧）
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
        // 版权信息（年份自动更新）
        copyright: `Copyright © ${new Date().getFullYear()} 中政集团 · 河北正定中学办事处`,
      },

      // ---------- Algolia 搜索（申请后填入） ----------
      // 申请地址：https://docsearch.algolia.com/apply/
      // 收到邮件后将下面的占位符替换为真实值
      algolia: {
        // 应用 ID（邮件中提供）
        appId: '02PW3ELEZ1',
        // 公开搜索 API Key（邮件中提供，可以安全提交到代码仓库）
        apiKey: 'c0b8800316a42fe632fc1de1f2ad97ef',
        // 索引名称（邮件中提供）
        indexName: 'zhoeng',
        // 上下文搜索（建议开启，可精确定位当前文档版本的搜索结果）
        contextualSearch: true,
        // 可选：搜索页面路径，设为 false 则禁用独立搜索页
        // searchPagePath: 'search',
      },

      // ---------- 代码块高亮 ----------
      prism: {
        // 浅色模式下的代码主题
        theme: prismThemes.github,
        // 深色模式下的代码主题
        darkTheme: prismThemes.dracula,
        // 额外需要语法高亮支持的语言
        additionalLanguages: ['bash', 'yaml', 'json', 'powershell'],
      },
    }),
};

export default config;
