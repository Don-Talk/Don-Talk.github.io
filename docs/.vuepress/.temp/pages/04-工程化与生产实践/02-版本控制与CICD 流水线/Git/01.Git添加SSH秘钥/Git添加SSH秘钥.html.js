import comp from "D:/Codes/My/dontalk.github.io/docs/.vuepress/.temp/pages/04-工程化与生产实践/02-版本控制与CICD 流水线/Git/01.Git添加SSH秘钥/Git添加SSH秘钥.html.vue"
const data = JSON.parse("{\"path\":\"/04-%E5%B7%A5%E7%A8%8B%E5%8C%96%E4%B8%8E%E7%94%9F%E4%BA%A7%E5%AE%9E%E8%B7%B5/02-%E7%89%88%E6%9C%AC%E6%8E%A7%E5%88%B6%E4%B8%8ECICD%20%E6%B5%81%E6%B0%B4%E7%BA%BF/Git/01.Git%E6%B7%BB%E5%8A%A0SSH%E7%A7%98%E9%92%A5/Git%E6%B7%BB%E5%8A%A0SSH%E7%A7%98%E9%92%A5.html\",\"title\":\"Git添加SSH秘钥\",\"lang\":\"zh-CN\",\"frontmatter\":{\"gitInclude\":[],\"description\":\"Git添加SSH秘钥 参考：https://cloud.tencent.com/developer/article/2015651 1.配置用户名和邮箱 2.生成密钥对 首先查看设备上是否已生成过秘钥对 看一下有没有 id\\\\_rsa 和 id_rsa.pub 等文件，.pub 文件是公钥，另一个文件是密钥 若没有这些文件，或没有 .ssh 目录，则使用...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://dontalk.github.io/04-%E5%B7%A5%E7%A8%8B%E5%8C%96%E4%B8%8E%E7%94%9F%E4%BA%A7%E5%AE%9E%E8%B7%B5/02-%E7%89%88%E6%9C%AC%E6%8E%A7%E5%88%B6%E4%B8%8ECICD%20%E6%B5%81%E6%B0%B4%E7%BA%BF/Git/01.Git%E6%B7%BB%E5%8A%A0SSH%E7%A7%98%E9%92%A5/Git%E6%B7%BB%E5%8A%A0SSH%E7%A7%98%E9%92%A5.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"DonTalk 的个人博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Git添加SSH秘钥\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Git添加SSH秘钥 参考：https://cloud.tencent.com/developer/article/2015651 1.配置用户名和邮箱 2.生成密钥对 首先查看设备上是否已生成过秘钥对 看一下有没有 id\\\\_rsa 和 id_rsa.pub 等文件，.pub 文件是公钥，另一个文件是密钥 若没有这些文件，或没有 .ssh 目录，则使用...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Git添加SSH秘钥\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"DonTalk\\\",\\\"url\\\":\\\"https://dontalk.github.io\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"1.配置用户名和邮箱\",\"slug\":\"_1-配置用户名和邮箱\",\"link\":\"#_1-配置用户名和邮箱\",\"children\":[]},{\"level\":2,\"title\":\"2.生成密钥对\",\"slug\":\"_2-生成密钥对\",\"link\":\"#_2-生成密钥对\",\"children\":[]},{\"level\":2,\"title\":\"3.进入 .ssh 文件夹，查找公钥\",\"slug\":\"_3-进入-ssh-文件夹-查找公钥\",\"link\":\"#_3-进入-ssh-文件夹-查找公钥\",\"children\":[]},{\"level\":2,\"title\":\"4.进入代码托管平台，上传密钥\",\"slug\":\"_4-进入代码托管平台-上传密钥\",\"link\":\"#_4-进入代码托管平台-上传密钥\",\"children\":[]}],\"readingTime\":{\"minutes\":1.28,\"words\":385},\"filePathRelative\":\"04-工程化与生产实践/02-版本控制与CICD 流水线/Git/01.Git添加SSH秘钥/Git添加SSH秘钥.md\",\"autoDesc\":true}")
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
