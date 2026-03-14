# 部署说明

## 环境要求

- **Node.js**: >= 18.19.0 (推荐使用 20.x LTS)
- **npm**: >= 8

## 升级 Node.js（重要）

您当前的 Node.js 版本是 v18.15.0，需要升级到 18.19.0 或更高版本。

### Windows 系统升级方法：

1. **从官网下载**：访问 https://nodejs.org/ 下载最新的 LTS 版本（推荐 20.x）
2. **使用 nvm-windows**（推荐）：
   ```powershell
   # 安装 nvm-windows
   # 下载地址：https://github.com/coreybutler/nvm-windows/releases
   
   # 安装 Node.js 20.x
   nvm install 20.11.0
   
   # 使用该版本
   nvm use 20.11.0
   ```

## 本地开发

```bash
# 1. 安装依赖（首次运行）
npm install

# 2. 启动开发服务器
npm run docs:dev

# 3. 构建静态网站
npm run docs:build

# 4. 预览构建结果
npm run docs:preview
```

## 部署到 GitHub Pages

### 自动部署（推荐）

项目已配置 GitHub Actions，只需将代码推送到 `main` 分支即可自动部署：

```bash
git add .
git commit -m "更新博客内容"
git push origin main
```

GitHub Actions 会自动：
1. 安装依赖
2. 构建静态网站
3. 部署到 GitHub Pages

访问地址：https://dontalk.github.io

### 手动部署

如果需要手动部署：

```bash
# 1. 构建
npm run docs:build

# 2. 进入 dist 目录
cd dist

# 3. 创建 .nojekyll 文件（防止 Jekyll 处理）
echo "" > .nojekyll

# 4. 使用 gh-pages 部署
npm install -D gh-pages
npx gh-pages -d dist
```

## 目录结构

```
dontalk.github.io/
├── docs/                    # 网站源文件（由 my-notes 复制而来）
│   ├── .vuepress/          # VuePress 配置
│   │   ├── config.ts       # 主配置文件
│   │   └── public/         # 静态资源
│   ├── README.md           # 首页
│   └── 01-Java语言核心/     # 各个技术分类
├── my-notes/               # 原始笔记文件夹（保留备份）
├── .github/workflows/      # GitHub Actions 配置
├── package.json            # 项目依赖配置
└── README.md               # 项目说明
```

## 添加新文章

1. 在对应的分类文件夹下创建 `.md` 文件
2. 确保文件开头包含 Frontmatter：
   ```markdown
   ---
   title: 文章标题
   date: 2026-03-14
   tags: [标签 1, 标签 2]
   category: 分类名称
   ---
   
   正文内容...
   ```
3. 提交并推送到 GitHub

## 自定义配置

编辑 `docs/.vuepress/config.ts` 文件可以修改：
- 网站标题和描述
- 导航栏配置
- 侧边栏配置
- 主题颜色
- 插件配置

## 常见问题

### Q: 图片无法显示？
A: 将图片放在与 Markdown 文件同级的 `assets` 文件夹中，使用相对路径引用。

### Q: 部署后页面 404？
A: 确保仓库设置中的 GitHub Pages 源设置为 GitHub Actions。

### Q: 本地运行正常但部署后有问题？
A: 检查 `base` 配置，如果使用自定义域名应保持为 `/`。

## 技术支持

如有问题，请查看：
- VuePress 官方文档：https://vuepress.vuejs.org/
- VuePress Theme Hope：https://theme-hope.vuejs.press/
