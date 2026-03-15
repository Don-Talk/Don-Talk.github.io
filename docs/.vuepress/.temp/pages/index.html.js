import comp from "D:/Codes/My/dontalk.github.io/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"DonTalk 的个人博客\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"icon\":\"home\",\"title\":\"DonTalk 的个人博客\",\"heroImage\":\"/logo.svg\",\"heroText\":\"DonTalk 的技术归档\",\"tagline\":\"Java 程序员的全栈技术笔记，涵盖 Java 核心、数据库、微服务、分布式系统等\",\"actions\":[{\"text\":\"开始阅读 💡\",\"link\":\"/01-Java语言核心/\",\"type\":\"primary\"},{\"text\":\"项目案例\",\"link\":\"/15-项目案例与复盘/\"}],\"features\":[{\"title\":\"Java 核心\",\"icon\":\"java\",\"details\":\"Java语言基础、JVM 原理、并发编程、新特性等核心技术\",\"link\":\"/01-Java语言核心/\"},{\"title\":\"数据库与持久化\",\"icon\":\"database\",\"details\":\"MySQL、Redis、MongoDB 等关系型和非关系型数据库\",\"link\":\"/02-数据库与持久化/\"},{\"title\":\"Web与微服务\",\"icon\":\"code\",\"details\":\"Spring Boot、Spring Cloud、微服务架构实战\",\"link\":\"/03-Web与微服务框架/\"},{\"title\":\"工程化与生产实践\",\"icon\":\"tools\",\"details\":\"CI/CD、Docker、K8s、日志监控等生产环境实践\",\"link\":\"/04-工程化与生产实践/\"},{\"title\":\"分布式系统架构\",\"icon\":\"network-wired\",\"details\":\"分布式事务、消息队列、服务治理等架构设计\",\"link\":\"/05-分布式系统与架构/\"},{\"title\":\"AI 与智能应用\",\"icon\":\"robot\",\"details\":\"Spring AI、LangChain4j、大模型接入与应用\",\"link\":\"/17-AI 与智能应用/\"}],\"copyright\":false,\"footer\":\"MIT License | Copyright © 2026 DonTalk\",\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://dontalk.github.io/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"DonTalk 的个人博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"DonTalk 的个人博客\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"DonTalk 的个人博客\\\"}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.99,\"words\":298},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
