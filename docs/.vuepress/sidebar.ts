import { sidebar } from 'vuepress-theme-hope';

export default sidebar({
  '/': [
    '',
    {
      text: '使用文档',
      icon: 'book-open',
      prefix: 'usage/',
      children: [
        'quickstart',
        'feat/editor.md',
        'feat/player.md',
        'feat/lan_share.md',
        'feat/settings.md',
        'feat/logging.md'
      ]
    },
    {
      text: '插件开发',
      icon: 'puzzle-piece',
      prefix: 'plugin-dev/',
      children: ['', 'quickstart', 'packaging', 'api']
    },
    {
      text: '常见问题/报告问题',
      link: 'usage/faq_and_report.md',
      icon: 'question'
    }
  ]
});
