基于 antd 构建的 react 组件库：shj-antd

### 主要目录和文件说明

- components/ 组件目录，每个组件目录里包含组件代码、demo 和说明文档（以 md 格式编写）
- dist/ 组件输出，可 script、link 标签引用使用
- lib/ 组件输出，CommonJs 风格
- es/ 组件输出，ES6 风格
- site/ 本工程启动代码
- CHANGELOG.zh-CN.md 更新日志

### 命令集

- `cnpm install` 下载依赖
- `npm run dist` 打包编译组件到 dist 目录
- `npm run compile` 编译生成 lib 和 es 目录
- `npm publish` 发布到 npm 库，会自动执行 dist 和 compile 命令
- `npm run start` 启动本工程
