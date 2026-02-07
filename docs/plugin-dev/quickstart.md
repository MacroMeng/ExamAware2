# 快速开始

::: tip 总览
本页面将教会你如何开始开发一个 ExamAware 插件。

:::

## 准备工具

- [Node.js](https://nodejs.org/zh-cn/download) v22 或更高版本
- 最新版本的 [pnpm](https://pnpm.io/zh/installation)
- [Git](https://git-scm.com/install/)

## 创建项目

请直接拷贝模板文件夹的模板。SDK 内置的模板 (由 GPT 生成) 不可用。

## `package.json` 配置

`package.json` 是一个插件的核心配置文件，下面给出示例与说明。

```json5
{
  name: '@examaware-plugins/my-plugin', // 插件的唯一标识符，格式为 "@examaware-plugins/插件名"
  main: 'dist/main/index.js', // 插件的主入口文件
  examaware: {
    displayName: 'My Plugin', // 插件的显示名称
    description: '自定义考试扩展', // 插件的描述
    targets: {
      main: 'src/main.ts', // 插件的主进程入口文件
      renderer: 'src/renderer.ts' // 插件的渲染进程入口文件
    },
    services: {
      provide: ['my-service'], // 插件提供的服务
      inject: ['deeplink'] // 插件需要注入的服务
    },
    enabled: true // 插件是否启用
  }
}
```

## 开发节奏

1. 编译或 watch：`pnpm dev`（或 `pnpm build`）。
2. 在 ExamAware 2 设置页点击 **解压缩插件**，选择你的输出目录（含 `package.json` 的目录）。
3. 看日志 -> 改代码 -> 重载 -> 看日志……的循环。主进程见宿主控制台，渲染入口用 DevTools。

## 常用命令

- `pnpm build`：产出 main/renderer。
- `pnpm lint`：别让 ESLint 忍不住发火。
- `pnpm test`：如果你写了测试，就让它们常跑。
