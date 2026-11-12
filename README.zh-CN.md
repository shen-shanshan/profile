# profile

[English](README.md) | 简体中文

我的个人主页，访问地址：[shen-shanshan.github.io/profile](https://shen-shanshan.github.io/profile/)。

基于 Vue 3 + Vuetify 构建，模板来自 [interestingLSY](https://github.com/interestingLSY/interestingLSY.github.io)（GPL-3.0）。

## 功能特性

- **页面小节**：个人简介、个人经历（按时间倒序）、开源贡献、我的项目。
- **亮色 / 暗色模式**：右上角切换按钮，默认跟随系统设置；手动选择后会被记住。
- **中英双语**：默认显示英文，可切换为中文；选择后会被记住。
- **GitHub 实时数据**：项目卡片在浏览器端通过 GitHub API 获取 Star 和 Fork 数，请求失败（如触发频率限制）时自动隐藏。
- **博客同款字体**：与[我的博客](https://shen-shanshan.github.io/)使用相同字体，并做了子集化以减小体积。
- **响应式布局**：小屏幕上导航栏只保留名字和切换按钮。

## 本地开发

```bash
npm install
npm run dev        # http://localhost:3000/profile/
npm run build      # 输出到 dist/
npm run preview    # 预览生产构建结果
```

## 目录结构

```text
.
├── .github/workflows/deploy.yml   # 构建并发布到 GitHub Pages
├── index.html                     # 页面标题、meta、首屏主题脚本
├── public/                        # 静态文件（照片、logo、二维码、简历）
├── scripts/subset-font.py         # 生成悠哉字体子集
├── src/
│   ├── assets/                    # 全局样式和字体子集
│   ├── components/                # 顶部导航栏
│   ├── composables/               # 语言切换和亮/暗主题逻辑
│   ├── data/                      # 页面内容（经历、开源贡献、项目、链接）
│   ├── locales/                   # 中英文界面文案
│   ├── router/
│   ├── utils/
│   └── views/HomeView.vue         # 主页
└── vite.config.mts                # base 设置为 /profile/
```

## 修改内容

| 内容 | 位置 |
| --- | --- |
| 个人简介、小节标题、页脚（中 / 英） | `src/locales/en.ts`、`src/locales/zh.ts` |
| 个人经历 | `src/data/experiences.ts` |
| 开源贡献、已合入 PR 数量 | `src/data/contributions.ts` |
| 我的项目 | `src/data/projects.ts` |
| 邮箱和顶部链接 | `src/data/links.ts` |
| 照片、logo | `public/images/` |
| 微信二维码 | `public/wechat-qrcode.png`（占位） |
| 微信公众号二维码 | `public/wechat-official-account-qrcode.png`（占位） |
| 简历 | `public/resume.pdf`（占位） |

`public/` 下的图片引用时不要以 `/` 开头（例如 `images/logos/amd.png`），运行时会自动拼接 `/profile/` 前缀。

## 字体

本站使用[悠哉字体（Yozai）](https://github.com/lxgw/yozai-font)（SIL OFL 1.1），与我的博客相同。
完整字体约 13 MB，因此只保留页面实际用到的字形，生成 `src/assets/fonts/yozai-subset.woff2`（约 70 KB）。
部署流程会自动重新生成；如需在本地修改文案后刷新：

```bash
pip install fonttools brotli
npm run subset-font
```

脚本首次运行时会从博客下载完整字体到 `.font-cache/`（已被 git 忽略）。

## 部署

推送到 `master` 分支会触发 `.github/workflows/deploy.yml`，自动完成字体子集化、构建并发布到 GitHub Pages。
需要在仓库设置中将 **Settings → Pages → Build and deployment → Source** 设为 **GitHub Actions**。

## 许可证

[GPL-3.0](LICENSE)，沿用原模板的许可证。

---

🤖 本项目由 [Claude Code](https://claude.com/claude-code) 生成
