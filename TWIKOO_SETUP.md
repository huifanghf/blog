# Twikoo 评论系统集成指南

本指南将帮助您为博客配置和部署 Twikoo 评论系统。

## 📋 目录

- [简介](#简介)
- [服务端部署](#服务端部署)
- [博客配置](#博客配置)
- [配置选项](#配置选项)
- [主题适配](#主题适配)
- [高级配置](#高级配置)
- [故障排除](#故障排除)
- [更多资源](#更多资源)

## 🎯 简介

Twikoo 是一个简洁、安全、免费的静态网站评论系统，具有以下特点：

- ✅ 免费部署，支持多种平台
- ✅ 安全可靠，数据完全可控
- ✅ 功能丰富，支持点赞、回复、邮件通知
- ✅ 界面美观，支持自定义主题
- ✅ 管理便捷，内置管理面板
- ✅ 反垃圾评论，支持 Akismet

## 🚀 服务端部署

### 方式一：Vercel 部署（推荐）

1. **Fork Twikoo 项目**
   ```bash
   # 访问 https://github.com/twikoojs/twikoo
   # 点击 Fork 按钮
   ```

2. **部署到 Vercel**
   - 登录 [Vercel](https://vercel.com)
   - 导入您 Fork 的 Twikoo 项目
   - 部署完成后获得访问地址，如：`https://your-twikoo.vercel.app`

3. **配置数据库**
   - 注册 [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - 创建免费集群
   - 获取连接字符串
   - 在 Vercel 环境变量中添加 `MONGODB_URI`

### 方式二：私有服务器部署

1. **安装 Node.js**
   ```bash
   # Ubuntu/Debian
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   
   # CentOS/RHEL
   curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
   sudo yum install -y nodejs
   ```

2. **安装 Twikoo Server**
   ```bash
   npm i -g tkserver
   ```

3. **启动服务**
   ```bash
   # 直接启动
   tkserver
   
   # 使用 PM2 守护进程
   npm i -g pm2
   pm2 start tkserver
   ```

4. **配置反向代理（Nginx）**
   ```nginx
   server {
       server_name twikoo.yourdomain.com;
       
       location / {
           proxy_pass http://localhost:8080;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header Host $host;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
       }
   }
   ```

### 方式三：Docker 部署

```bash
# 拉取镜像
docker pull imaegoo/twikoo

# 运行容器
docker run -d \
  --name twikoo \
  -p 8080:8080 \
  -v /data/twikoo:/app/data \
  imaegoo/twikoo
```

## ⚙️ 博客配置

### 1. 启用 Twikoo

编辑 `src/config.ts` 文件：

```typescript
export const twikooConfig: TwikooConfig = {
  enable: true, // 启用 Twikoo 评论系统
  envId: "https://your-twikoo.vercel.app", // 您的 Twikoo 服务地址
  // 其他配置...
};
```

### 2. 安装依赖

```bash
pnpm install
```

### 3. 启动开发服务器

```bash
pnpm dev
```

## 🎨 配置选项

### 基础配置

```typescript
export const twikooConfig: TwikooConfig = {
  enable: true,                    // 是否启用 Twikoo
  envId: "your-env-id",           // 环境 ID 或服务地址
  region: "ap-shanghai",          // 腾讯云地域（仅腾讯云需要）
  path: (slug) => `/posts/${slug}/`, // 页面路径生成函数
  lang: "zh-CN",                  // 语言设置
};
```

### 界面配置

```typescript
export const twikooConfig: TwikooConfig = {
  // ... 基础配置
  placeholder: "欢迎评论...",      // 评论框占位符
  avatar: "https://cravatar.cn/avatar/", // 头像 CDN
  pageSize: 10,                   // 评论分页大小
  maxNestLevel: 3,                // 最大嵌套层级
};
```

### 功能配置

```typescript
export const twikooConfig: TwikooConfig = {
  // ... 其他配置
  showImage: true,                // 显示图片
  showReply: true,                // 显示回复按钮
  showLike: true,                 // 显示点赞按钮
  showAdmin: true,                // 显示管理员标识
  showLevel: true,                // 显示等级标识
  readMore: true,                 // 显示"阅读更多"按钮
  recent: true,                   // 显示最近评论
  recent_num: 5,                  // 最近评论数量
};
```

## 🎨 主题适配

本集成已经为博客主题进行了适配，包括：

- 🌓 自动适配明暗主题
- 📱 响应式设计
- 🎨 与博客样式统一
- ⚡ 性能优化

### 自定义样式

如需进一步自定义样式，可以修改 `TwikooComment.astro` 中的 CSS：

```css
/* 自定义评论框样式 */
:global(.twikoo .tk-input) {
  @apply bg-[var(--card-bg)] border border-[var(--line-divider)];
}

/* 自定义按钮样式 */
:global(.twikoo .tk-submit) {
  @apply bg-[var(--primary)] hover:bg-[var(--primary)]/80;
}
```

## 🔧 高级配置

### 管理员设置

1. 访问您的博客文章页面
2. 在评论区右下角点击小齿轮图标
3. 设置管理员密码
4. 进入管理面板进行详细配置

### 反垃圾评论

在管理面板中可以配置：

- **Akismet**：专业的垃圾评论过滤服务
- **腾讯云内容安全**：中文内容审核
- **自定义违禁词**：自定义屏蔽词汇
- **人工审核**：评论需要审核后显示

### 邮件通知

配置 SMTP 服务实现评论邮件通知：

1. 在管理面板中配置邮件服务
2. 设置 SMTP 服务器信息
3. 自定义邮件模板

### 即时通知

支持多种即时通知方式：

- 微信通知
- QQ 通知
- Telegram 通知
- 钉钉通知

## 📱 移动端优化

- ✅ 响应式布局
- ✅ 触摸友好的交互
- ✅ 优化的输入体验
- ✅ 快速加载

## 🔒 安全考虑

- 🛡️ 数据完全可控
- 🔐 支持 HTTPS
- 🚫 防止 XSS 攻击
- 📝 内容审核机制

## 🐛 故障排除

### 常见问题

**Q: 评论区不显示？**
A: 检查 `twikooConfig.enable` 是否为 `true`，`envId` 是否正确配置。

**Q: 评论提交失败？**
A: 检查服务端是否正常运行，网络连接是否正常。

**Q: 主题切换后样式异常？**
A: 组件已经处理主题切换，如有问题请检查 CSS 变量是否正确。

**Q: 移动端显示异常？**
A: 检查响应式样式，确保容器宽度设置正确。

### 调试模式

在浏览器控制台中可以查看详细的错误信息：

```javascript
// 检查 Twikoo 是否加载
console.log(window.twikoo);

// 检查配置
console.log(twikooConfig);
```

## 📚 更多资源

- [Twikoo 官方文档](https://twikoo.js.org/)
- [Twikoo GitHub](https://github.com/twikoojs/twikoo)
- [Vercel 部署指南](https://vercel.com/docs)
- [MongoDB Atlas 使用指南](https://docs.atlas.mongodb.com/)

## 🤝 贡献

如果您在使用过程中遇到问题或有改进建议，欢迎：

- 提交 Issue
- 发起 Pull Request
- 分享使用经验

---

**享受 Twikoo 带来的优秀评论体验！** 🎉