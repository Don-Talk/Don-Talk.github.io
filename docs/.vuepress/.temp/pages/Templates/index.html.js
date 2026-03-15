import comp from "D:/Codes/My/dontalk.github.io/docs/.vuepress/.temp/pages/Templates/index.html.vue"
const data = JSON.parse("{\"path\":\"/Templates/\",\"title\":\"Templates\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Templates\",\"article\":false,\"feed\":false,\"sitemap\":false,\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://dontalk.github.io/Templates/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"DonTalk 的个人博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Templates\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"Templates\\\"}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null}")
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
