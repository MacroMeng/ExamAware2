import { navbar } from 'vuepress-theme-hope';

export default navbar([
  {
    text: '首页',
    link: '/',
    icon: 'house'
  },
  {
    text: '使用文档',
    link: '/usage/',
    icon: 'book-open',
    children: [
      { text: '使用文档', link: '/usage/' },
      { text: '快速开始', link: '/usage/quickstart.md' },
      { text: '编辑器', link: '/usage/feat/editor.md' },
      { text: '放映器', link: '/usage/feat/player.md' },
      { text: '共享与投送', link: '/usage/feat/lan_share.md' },
      { text: '设置界面', link: '/usage/feat/settings.md' },
      { text: '日志', link: '/usage/feat/logging.md' }
    ]
  },
  {
    text: '插件开发',
    prefix: '/plugin-dev/',
    icon: 'puzzle-piece',
    children: [
      { text: '总览', link: '/plugin-dev/' },
      { text: '快速开始', link: 'quickstart' },
      { text: '打包与分发', link: 'packaging' },
      { text: 'API 概览', link: 'api' }
    ]
  },
  {
    text: '常见问题/报告问题',
    link: 'usage/faq_and_report.md',
    icon: 'question'
  },
  {
    text: 'GitHub',
    icon: 'github',
    link: 'https://github.com/ExamAware/ExamAware2'
  }
]);
