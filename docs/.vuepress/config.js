import { defaultTheme } from '@vuepress/theme-default'

export default {
  title: 'echo 帮助文档',
  description: 'echo-java',
  base: '/',
  repo: 'Sugar2000/pjskhelp',
  docsDir: 'docs',
  tip: '提示',
  warning: '注意',
  danger: '警告',
  backToHome: '返回首页',
  editLink: false,
  plugins: [
      ['@vuepress/back-to-top']
  ],
  theme: defaultTheme({

    navbar: [
        {
            text: 'ECHO',
            link: '/echo/',
        },
        {
            text: 'API',
            link: '/api/',
        }
        ],
    sidebar: 'auto',
  }),
}
