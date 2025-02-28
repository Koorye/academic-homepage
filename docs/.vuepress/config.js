module.exports = {
  title: "Shihan Wu's Homepage",
  description: "My Academic Homepage",
  head: [["link", { rel: "icon", href: `/logo.png` }]],
  base: "/homepage/",
  // base: "/",
  dest: "./dist",

  themeConfig: {
    search: false,
    nav: [
      { text: "Home", link: "/" },
      { text: "Pubulications", link: "/publications/" },
      { text: "About Me", link: "/about/" },
      { text: "GitHub", link: "https://github.com/Koorye" }
    ],
    sidebar: {
      '/guide/': genSidebarConfig('Guide')
    },
    lastUpdated: 'Last Updated'
  },

  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },
    extendMarkdown: md => {
      md.use(require("markdown-it-katex"));
    }
  }
};

function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'getting-started',
        'customize',
        'advanced',
      ]
    }
  ]
}

