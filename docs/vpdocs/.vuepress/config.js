module.exports = {
  title: "seldom文档",
  description: "基于unittest 的 Web UI/HTTP自动化测试框架。",
  base: "/",
  plugins: [
    [
      "@vuepress/plugin-search",
      {
        locales: {
          "/": {
            placeholder: "Search",
          },
          "/zh/": {
            placeholder: "搜索",
          },
        },
         isSearchable: (page) => page.path !== '/',
      },
    ],
  ],
  themeConfig: {
    repo: "SeldomQA/seldom",
    docsBranch: "vuepress-docs/docs/vpdocs",
    logo: "/logo.jpeg",
    navbar: [{ text: "指南", link: "/introduce" }],
    sidebar: [
      "/introduce",
      {
        text: "开始",
        children: [
          "/getting-started/installation",
          "/getting-started/create_project",
          "/getting-started/quick_start",
          "/getting-started/advanced",
          "/getting-started/data_driver",
          "/getting-started/seldom_cli",
        ],
      },
      {
        text: "web UI 测试",
        children: [
          "/web-testing/browser_driver",
          "/web-testing/seldom_api",
          "/web-testing/chaining",
          "/web-testing/other",
        ],
      },
      {
        text: "HTTP接口测试",
        children: [
          "/api-testing/start",
          "/api-testing/assert",
          "/api-testing/more",
        ],
      },
      "/db/db_operation",
      "/platform/platform",
      "/version/CHANGES",
    ],
    editLinks: true,
    editLinkText: "在 GitHub 上编辑此页",
    lastUpdated: "上次更新",
  },
};
