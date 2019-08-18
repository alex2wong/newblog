// .vuepress/config.js
module.exports = {
  title: "Alex's Blog",
  description: "Blog rendered by Vuepress",
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
      contact: [
        {
          type: "github",
          link: "https://github.com/alex2wong"
        }
      ]
    },
  }
};
