# DonTalk 的个人博客

🎉 欢迎来到我的个人技术博客！

## 📖 关于本站

这是一个基于 **VuePress 3** + **VuePress Theme Hope** 构建的现代化个人博客网站。

**在线访问**: https://dontalk.github.io

## ✨ 特性

- 🚀 **现代化设计**：基于 VuePress 3 和 Vite，快速且美观
- 📱 **响应式布局**：完美支持 PC 和移动端
- 🔍 **全文搜索**：快速定位所需内容
- 🏷️ **标签分类**：清晰的知识体系结构
- 🌙 **主题切换**：支持亮色/暗色模式
- 🔄 **自动部署**：推送到 GitHub 自动构建发布

## 📂 内容分类

本站包含 17 个主要技术分类：

- 💻 Java语言核心（基础、集合、并发、JVM）
- 🗄️ 数据库与持久化（MySQL、Redis、MongoDB）
- 🌐 Web与微服务框架（Spring Boot、Spring Cloud）
- ⚙️ 工程化与生产实践（CI/CD、Docker、K8s）
- 🏗️ 分布式系统与架构（微服务、消息队列）
- ⚡ 性能优化与调优
- 🔒 安全与合规
- ☁️ 云原生与容器化
- 🤖 AI 与智能应用（Spring AI、LangChain4j）
- 等等...

## 🚀 快速开始

### 环境要求

- Node.js >= 18.19.0 (推荐使用 20.x LTS)
- npm >= 8

### 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run docs:dev

# 构建静态网站
npm run docs:build
```

详细部署说明请查看 [DEPLOY.md](./DEPLOY.md)

## 📝 文章结构

所有技术文章位于 `docs/` 目录下，按主题分类组织：

```
docs/
├── 01-Java语言核心/
├── 02-数据库与持久化/
├── 03-Web与微服务框架/
├── ...
└── 17-AI 与智能应用/
```

原始笔记备份在 `my-notes/` 目录。

## 🔧 自定义配置

编辑 `docs/.vuepress/config.ts` 可以修改网站配置。

## 📦 部署

本站通过 GitHub Actions 自动部署到 GitHub Pages。

推送代码到 main 分支即可触发自动部署：

```bash
git add .
git commit -m "更新内容"
git push origin main
```

## 📄 许可证

MIT License | Copyright © 2026 DonTalk

---

**注意**：首次运行前请确保 Node.js 版本符合要求，详见 [DEPLOY.md](./DEPLOY.md)