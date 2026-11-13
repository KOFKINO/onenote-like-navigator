# Contributing

[English guide](README.md) · [简体中文指南](README.zh-CN.md)

## English

Bug reports, documentation fixes, and focused pull requests are welcome. Discuss large behavior changes in an issue first.

1. Fork the repository and create a descriptive branch from `main`, such as `fix/folder-move` or `docs/install-guide`.
2. Keep each PR focused on one problem. Use a concise commit message explaining the change.
3. For code changes, run `npm ci`, `npm run build`, and `npm test`. Include generated `main.js` when source changes affect it. Do not edit generated code alone.
4. Describe the problem, resulting behavior, and checks performed. Include before/after screenshots for visual changes. Verify file operations using a disposable sample vault.
5. Keep `README.md` and `README.zh-CN.md` aligned: installation, commands, defaults, controls, limitations, and comparisons must describe the same behavior. Update both FAQ sections when needed. Documentation-only changes require link/content checks, not new runtime tests.
6. Target `main`. Do not change versions, tags, or release workflows unless the change specifically concerns publishing and has been discussed.

Do not include personal vaults, plugin `data.json`, credentials, or private note contents. Reports should include OS, Obsidian/plugin versions, and minimal reproduction steps. Contributions are licensed under the repository's [MIT license](LICENSE); submission does not guarantee acceptance or a response deadline.

## 简体中文

欢迎问题反馈、文档修正及范围明确的 PR。较大的交互改动请先在 Issue 中讨论。

1. Fork 仓库，从 `main` 创建用途明确的分支，例如 `fix/folder-move` 或 `docs/install-guide`。
2. 一个 PR 聚焦一个问题，提交说明简明描述改动。
3. 修改代码后执行 `npm ci`、`npm run build`、`npm test`。源码改变构建结果时，一并提交生成的 `main.js`，不要只修改生成文件。
4. PR 说明问题、改后行为和验证结果；界面改动提供前后截图，文件操作使用可丢弃的示例笔记库验证。
5. 同步维护两份 README 的安装、命令、默认值、操作、限制及对比内容；修改 FAQ 时同步中英文。纯文档改动检查链接与内容，无须新增运行测试。
6. PR 提交到 `main`。除非专门讨论发布流程，否则不要修改版本号、标签或发布工作流。

不要提交私人笔记库、插件 `data.json`、凭据或私人笔记正文。问题反馈需包含系统、Obsidian/插件版本及最小复现步骤。贡献遵循仓库的 [MIT 许可证](LICENSE)，提交不代表保证合并或承诺回复时限。
