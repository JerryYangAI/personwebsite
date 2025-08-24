# 个人网站 - 个人介绍、履历和创业项目

这是杨广/Jerry Yang的现代化个人网站项目，使用 Next.js 14、React 18、TypeScript 和 Tailwind CSS 构建。

## ✨ 功能特性

- 🎨 现代化响应式设计
- 🚀 流畅的动画效果（Framer Motion）
- 📱 完全移动端适配
- 🎯 个人介绍展示
- 💼 详细职业履历
- 🚀 创业项目展示
- 📧 联系表单
- 🔍 SEO 优化
- 🌐 多语言支持（中文、英文、日文）

## 🛠️ 技术栈

- **前端框架**: Next.js 14 (App Router)
- **UI 库**: React 18
- **开发语言**: TypeScript
- **样式框架**: Tailwind CSS
- **动画库**: Framer Motion
- **图标库**: Lucide React
- **字体**: Inter (Google Fonts)
- **国际化**: React Context + 自定义翻译系统

## 🚀 快速开始

### 1. 安装依赖

```bash
npm install
# 或者
yarn install
# 或者
pnpm install
```

### 2. 启动开发服务器

```bash
npm run dev
# 或者
yarn dev
# 或者
pnpm dev
```

### 3. 构建生产版本

```bash
npm run build
# 或者
yarn build
# 或者
pnpm build
```

### 4. 启动生产服务器

```bash
npm run start
# 或者
yarn start
# 或者
pnpm start
```

## 📁 项目结构

```
Individualblog/
├── app/                    # Next.js App Router
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局
│   └── page.tsx           # 主页面
├── components/             # React 组件
│   ├── Navigation.tsx     # 导航栏
│   ├── Hero.tsx          # 英雄区域
│   ├── About.tsx         # 关于我
│   ├── Timeline.tsx      # 时间线
│   ├── Beliefs.tsx       # 信条
│   ├── Experience.tsx    # 履历
│   ├── Projects.tsx      # 创业项目
│   ├── Contact.tsx       # 联系我
│   ├── Footer.tsx        # 页脚
│   └── LanguageSwitcher.tsx # 语言切换器
├── contexts/              # React Context
│   └── LanguageContext.tsx # 语言管理上下文
├── lib/                   # 工具库
│   └── i18n.ts           # 国际化配置
├── public/                # 静态资源
├── package.json           # 项目配置
├── tailwind.config.js     # Tailwind 配置
├── tsconfig.json          # TypeScript 配置
└── README.md              # 项目说明
```

## 🎨 自定义配置

### 修改个人信息

1. 在 `components/Navigation.tsx` 中修改 Logo 名称
2. 在 `components/Hero.tsx` 中修改个人介绍
3. 在 `components/About.tsx` 中修改个人简介和技能
4. 在 `components/Timeline.tsx` 中修改时间线事件
5. 在 `components/Beliefs.tsx` 中修改信条内容
6. 在 `components/Experience.tsx` 中修改工作经历和教育背景
7. 在 `components/Projects.tsx` 中修改创业项目信息
8. 在 `components/Contact.tsx` 中修改联系信息

### 修改样式

- 在 `tailwind.config.js` 中自定义颜色主题
- 在 `app/globals.css` 中添加自定义样式
- 在各个组件中修改 Tailwind 类名

### 修改动画

- 在 `tailwind.config.js` 中自定义动画
- 在各个组件中调整 Framer Motion 参数

### 修改语言

- 在 `lib/i18n.ts` 中添加或修改翻译内容
- 支持中文、英文、日文三种语言

## 🌐 部署

### Vercel 部署（推荐）

1. 将代码推送到 GitHub
2. 在 [Vercel](https://vercel.com) 中导入项目
3. 自动部署完成

### 其他平台

- **Netlify**: 支持 Next.js 静态导出
- **GitHub Pages**: 需要配置静态导出
- **传统服务器**: 构建后上传 dist 文件夹

## 📱 响应式设计

网站完全支持各种设备尺寸：

- 📱 移动端 (320px+)
- 📱 平板 (768px+)
- 💻 桌面端 (1024px+)
- 🖥️ 大屏 (1280px+)

## 🔧 开发建议

1. **组件化**: 保持组件的单一职责和可复用性
2. **性能优化**: 使用 Next.js 的内置优化功能
3. **SEO**: 利用 Next.js 的元数据 API
4. **可访问性**: 遵循 WCAG 指南
5. **测试**: 添加单元测试和集成测试
6. **国际化**: 使用统一的翻译键值对

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📞 联系

如有问题，请通过以下方式联系：

- 邮箱: your.email@example.com
- GitHub: [您的用户名](https://github.com/yourusername)

---

**注意**: 请记得将示例中的个人信息（邮箱、电话、地址等）替换为您自己的真实信息。
