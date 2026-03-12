# dontalk.github.io

个人笔记网站，基于 VuePress 3 构建。

## 概述

此仓库用于托管由 Markdown 笔记转换而成的 VuePress 静态网站。

## 网站功能

- 个人博客风格主题
- 本地全文搜索
- 标签分类系统
- 暗色/亮色主题切换
- GitHub Pages 自动部署

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run docs:dev

# 构建静态网站
npm run docs:build
```

## 部署

此仓库已配置 GitHub Actions 工作流，推送至 `main` 分支时将自动构建并部署到 GitHub Pages。

访问地址：https://dontalk.github.io

## 注意事项

- 确保 Node.js 版本 >= 18
- 图片资源需放在 `public` 目录下，Markdown 中引用路径需相应调整