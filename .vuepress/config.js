// .vuepress/config.js
module.exports = {
  title: "皮皮修乐园",
  description: "黄益修的博客",
  markdown: {
    lineNumbers: true,
    // markdown-it-toc 的选项
    toc: { includeLevel: [1, 2] }
  },
  plugins: [
    '@vuepress/blog',
  ],
  theme: "@vuepress/default",
  themeConfig: {
    logo: '/logo.png',
    repo: 'alex2wong/newblog',
    lastUpdated: 'Last Updated', // string | boolean
    // Please keep looking down to see the available options.
    nav: [
      {
        text: "Home",
        link: "/"
      },
      {
        text: "Archive",
        link: "/posts/"
      },
      {
        text: "About",
        link: "/about/"
      }
    ],
    footer: {
      // 'MIT Licensed | Copyright © 2018-present Alex2wong'
      contact: [
        {
          type: "github",
          link: "https://github.com/alex2wong"
        }
      ]
    },
  }
};
