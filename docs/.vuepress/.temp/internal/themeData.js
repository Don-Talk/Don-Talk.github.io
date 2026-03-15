export const themeData = JSON.parse("{\"encrypt\":{},\"author\":{\"name\":\"DonTalk\",\"url\":\"https://dontalk.github.io\"},\"logo\":\"/logo.svg\",\"repo\":\"dontalk/dontalk.github.io\",\"navbarLayout\":{\"start\":[\"Brand\"],\"center\":[],\"end\":[\"Links\",\"Language\",\"Repo\",\"Outlook\",\"Search\"]},\"footer\":\"MIT License | Copyright © 2026 DonTalk\",\"displayFooter\":true,\"blog\":{\"intro\":\"/intro/\",\"sidebarDisplay\":\"mobile\",\"medias\":{\"GitHub\":\"https://github.com/dontalk\"}},\"locales\":{\"/\":{\"lang\":\"zh-CN\",\"navbarLocales\":{\"langName\":\"简体中文\",\"selectLangAriaLabel\":\"选择语言\"},\"metaLocales\":{\"author\":\"作者\",\"date\":\"写作日期\",\"origin\":\"原创\",\"views\":\"访问量\",\"category\":\"分类\",\"tag\":\"标签\",\"readingTime\":\"阅读时间\",\"words\":\"字数\",\"toc\":\"此页内容\",\"prev\":\"上一页\",\"next\":\"下一页\",\"lastUpdated\":\"上次编辑于\",\"contributors\":\"贡献者\",\"editLink\":\"编辑此页\",\"print\":\"打印\"},\"outlookLocales\":{\"themeColor\":\"主题色\",\"darkmode\":\"外观\",\"fullscreen\":\"全屏\"},\"routeLocales\":{\"skipToContent\":\"跳至主要內容\",\"notFoundTitle\":\"页面不存在\",\"notFoundMsg\":[\"这里什么也没有\",\"我们是怎么来到这儿的？\",\"这 是 四 零 四 !\",\"看起来你访问了一个失效的链接\"],\"back\":\"返回上一页\",\"home\":\"带我回家\"},\"navbar\":[{\"text\":\"首页\",\"icon\":\"home\",\"link\":\"/\"},{\"text\":\"技术分类\",\"icon\":\"folder\",\"children\":[{\"text\":\"Java 核心\",\"icon\":\"java\",\"link\":\"/01-Java语言核心/\"},{\"text\":\"数据库\",\"icon\":\"database\",\"link\":\"/02-数据库与持久化/\"},{\"text\":\"Web 框架\",\"icon\":\"code\",\"link\":\"/03-Web与微服务框架/\"},{\"text\":\"工程化\",\"icon\":\"tools\",\"link\":\"/04-工程化与生产实践/\"},{\"text\":\"分布式架构\",\"icon\":\"network-wired\",\"link\":\"/05-分布式系统与架构/\"},{\"text\":\"性能优化\",\"icon\":\"tachometer-alt\",\"link\":\"/06-性能优化与调优/\"},{\"text\":\"云原生\",\"icon\":\"cloud\",\"link\":\"/08-云原生与容器化/\"},{\"text\":\"AI 应用\",\"icon\":\"robot\",\"link\":\"/17-AI 与智能应用/\"}]},{\"text\":\"项目案例\",\"icon\":\"briefcase\",\"link\":\"/15-项目案例与复盘/\"},{\"text\":\"标签\",\"icon\":\"tags\",\"link\":\"/tag/\"}],\"sidebar\":\"structure\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
