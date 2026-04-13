# Bank Assets Management System

一个基于 [Ant Design Pro](https://pro.ant.design) 架构的 React 单页应用（SPA），使用 Umi.js 框架构建，集成了 Ant Design Pro 的最佳实践和企业级开发模式。

## 项目简介

本项目是一个功能完善的资产管理平台，提供了用户管理、系统配置、数据展示等核心功能。采用现代化技术栈，支持国际化（中/英文）、响应式设计，并集成了完善的权限控制体系。

### 主要功能

- **用户系统**：登录、注册、权限管理
- **数据展示**：表格列表、图表展示、数据统计
- **系统管理**：用户管理、权限控制、系统配置
- **国际化支持**：中英文双语切换
- **响应式设计**：支持多端访问

## 技术栈

### 核心框架
- **React 19** - UI 渐进式 JavaScript 框架
- **TypeScript** - 类型安全的 JavaScript 超集
- **Umi.js 4** - 企业级 React 应用框架
- **Ant Design Pro** - React 企业级 UI/UX 解决方案

### UI 组件库
- **Ant Design 5** - 企业级 UI 组件库
- **Ant Design Pro Components** - Pro 组件库
- **Ant Design Style** - 样式解决方案

### 开发工具
- **ESLint/Biome** - 代码检查工具
- **Husky** - Git hooks 管理
- **lint-staged** - Git 暂存区代码检查
- **pnpm** - 高性能包管理器

### 其他依赖
- **Day.js** - 轻量级日期处理库
- **Classnames** - CSS 类名工具库

## 项目结构

```
bank-assets/
├── config/                      # Umi.js 配置文件
│   ├── config.ts               # 主配置文件（路由、插件、代理等）
│   ├── routes.ts               # 路由配置
│   ├── proxy.ts                # 代理配置
│   └── defaultSettings.ts      # 默认设置
├── src/                         # 源代码目录
│   ├── components/             # 公共组件
│   ├── locales/                # 国际化文件
│   ├── pages/                  # 页面组件
│   ├── services/               # API 服务层
│   ├── access.ts              # 权限配置
│   ├── app.tsx                # 应用入口
│   ├── global.tsx             # 全局配置
│   ├── requestErrorConfig.ts  # 请求错误处理
│   └── service-worker.js      # PWA Service Worker
├── types/                      # TypeScript 类型定义
│   └── index.d.ts             # API 类型定义
├── public/                     # 静态资源
│   └── scripts/               # 脚本文件
├── package.json               # 项目依赖配置
├── tsconfig.json              # TypeScript 配置
└── README.md                  # 项目文档
```

### 核心模块说明

#### 1. 路由系统（config/routes.ts）
定义应用的所有路由，支持嵌套路由、权限控制、图标配置等。

#### 2. API 服务层（src/services/）
统一管理后端 API 请求，提供类型安全的接口调用。

#### 3. 权限控制（src/access.ts）
基于 Umi.js Access 插件的权限管理，实现路由级别的权限控制。

#### 4. 国际化（src/locales/）
支持中英文双语切换，通过 `locale` 配置实现。

## API 接口设计

### API 命名空间

所有 API 类型定义在 `types/index.d.ts` 中，主要包含以下接口：

### 接口调用示例

```typescript
import { login, currentUser } from '@/services/ant-design-pro/api';

// 登录
const res = await login({
  username: 'admin',
  password: '123456',
  autoLogin: true,
  type: 'account'
});

// 获取当前用户
const user = await currentUser();
```

## 安装和运行

### 前置要求

- Node.js >= 20.0.0
- pnpm >= 8.0.0（推荐使用 pnpm 进行包管理）

### 安装依赖

```bash
# 克隆项目
git clone <repository-url>
cd bank-assets

# 使用 pnpm 安装依赖
pnpm install
```

### 启动开发服务器

```bash
# 开发模式启动（开发环境，不启用 Mock）
pnpm run start:dev

# 或者使用简写
pnpm run dev

# 指定环境启动
pnpm run start:test   # 测试环境
pnpm run start:pre    # 预发布环境
pnpm run start        # 默认环境
```

启动成功后，访问：
- 本地地址：http://localhost:8000
- 网络地址：http://192.168.x.x:8000

### 构建生产版本

```bash
# 构建生产版本
pnpm run build

# 预览生产构建
pnpm run preview

# 分析打包体积
pnpm run analyze
```

### 部署

```bash
# 构建 + 部署到 GitHub Pages
pnpm run deploy
```

## 开发指南

### 代码规范

项目使用 **Biome** 进行代码检查和格式化。

```bash
# 检查代码风格
pnpm run biome:lint

# 自动修复可修复的问题
pnpm run biome:lint -- --write
```

### Git 工作流

项目配置了 **Husky** 和 **lint-staged**，提交代码时会自动进行代码检查。

```bash
# 提交代码
git add .
git commit -m "feat: 添加新功能"
```

提交信息规范（Conventional Commits）：
- `feat`: 新功能
- `fix`: 修复 Bug
- `docs`: 文档更新
- `style`: 代码格式调整
- `refactor`: 代码重构
- `test`: 测试相关
- `chore`: 构建过程或辅助工具的变动

### TypeScript 使用

- 所有代码使用 TypeScript 编写
- 类型定义位于 `types/index.d.ts`
- API 请求使用泛型确保类型安全

```typescript
// 类型安全的 API 调用
import { request } from '@umijs/max';

interface UserParams {
  username: string;
  email?: string;
}

const result = await request<{ data: UserParams }[]>('/api/users');
```

### 路由开发

在 `config/routes.ts` 中添加新路由：

```typescript
export default [
  {
    path: '/new-page',
    name: 'newPage',
    icon: 'file',
    component: './NewPage',
  },
];
```

### 国际化开发

在 `src/locales/zh-CN/pages.ts` 和 `src/locales/en-US/pages.ts` 中添加翻译：

```typescript
// zh-CN/pages.ts
export default {
  newPage: '新页面',
};

// en-US/pages.ts
export default {
  newPage: 'New Page',
};
```

### 权限开发

在 `src/access.ts` 中定义权限规则：

```typescript
export default {
  // 有权限才可以访问
  canAccess: () => {
    const { access } = useModel('@@initialState');
    return access;
  },
};
```

在路由中应用权限：

```typescript
{
  path: '/admin',
  name: 'admin',
  access: 'canAccess',  // 需要权限才能访问
  // ...
}
```

### 样式开发

项目使用 Ant Design Style 和 Less：

```less
// 使用变量
@primary-color: #1890ff;

// 使用类名
.ant-btn {
  &-primary {
    background: @primary-color;
  }
}
```

## 开发注意事项

### 1. 文件命名

- 组件文件使用 PascalCase：`UserProfile.tsx`
- 工具文件使用 camelCase：`apiHelper.ts`
- 配置文件使用 kebab-case：`my-config.ts`

### 2. 导入导出

使用相对路径导入，避免使用绝对路径：

```typescript
// ✅ 推荐
import { Button } from '@/components';

// ❌ 不推荐
import { Button } from 'antd';
```

### 3. 状态管理

使用 Umi.js 的 `useModel` 进行全局状态管理：

```typescript
import { useModel } from '@umijs/max';

const { initialState } = useModel('@@initialState');
```

### 4. API 请求

所有 API 请求统一通过 `request` 函数，自动处理错误、重试等：

```typescript
import { request } from '@umijs/max';

const res = await request('/api/users', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
});
```

### 5. 代理配置

开发环境使用代理绕过 CORS，配置在 `config/proxy.ts` 中。

## 环境变量

项目支持以下环境变量：

| 变量名 | 说明 | 默认值 |
|--------|------|--------|
| `REACT_APP_ENV` | 运行环境 | `dev` |
| `UMI_ENV` | Umi 环境 | `dev` |
| `MOCK` | 是否启用 Mock | `none` |
| `ANALYZE` | 是否启用打包分析 | `1` |

## 常见问题

### 1. 端口被占用

修改端口：在启动命令后添加 `--port 3000`

### 2. 类型错误

运行类型检查：`pnpm run tsc`

### 3. 依赖安装失败

清理缓存后重新安装：
```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### 4. 构建失败

清理缓存后重新构建：
```bash
rm -rf dist
pnpm run dev
```
