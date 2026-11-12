# obsidian plugin ob目录优化插件
# OneNote Like Navigator

**Browse Obsidian as notebooks, folders, and pages—without an ever-wider folder tree.**

[中文说明](#中文说明) · [MIT license](LICENSE)

Top-level folders automatically become notebooks. Pick a notebook, click a folder, and see its direct subfolders on the left and its notes on the right. Long names wrap; deeper folders do not add columns.

This independent community project is not affiliated with Microsoft or Obsidian. It does not import or convert OneNote files.

## Features

- Searchable notebook switching, based on real folders. No per-notebook setup.
- Single-level navigation by default; optional expandable folder tree and folder focus.
- Create, rename, move, reorder, and trash files directly from the navigator.
- Open notes in a new foreground tab by default, with an option to reuse the current tab.
- Remember browsing state per notebook; wrap long names without horizontal scrolling.

## Quick start

1. Click the square notebook ribbon icon, or run **OneNote Like Navigator: 打开笔记本导航** from the command palette.
2. Click the notebook name at the top to switch to a top-level folder.
3. Click a folder to browse its children; click a note to read it. Use the back arrow to go up.

**本层页面** means “Pages in this folder.” It is a shortcut to direct notes, not a generated Markdown file. The current interface uses Chinese labels; English localization is not yet included.

## Installation

Requires **Obsidian 1.7.2+**. The community directory listing is not yet available.

Download `main.js`, `manifest.json`, and `styles.css` from this repository's GitHub release. Place them directly inside `<vault>/.obsidian/plugins/onenote-like-navigator/`. Reload Obsidian and enable **OneNote Like Navigator** in **Settings → Community plugins**.

No build step, account, or subscription is needed to use release files.

## Settings

| Setting | Default | Effect |
| --- | --- | --- |
| 显示完整目录树 / Show full folder tree | Off | Direct child folders only; enable for a nested tree. |
| 在新标签页打开并置于前台 / Open in a new foreground tab | On | Create and activate a new tab; disable to reuse the current tab. Does not reorder the tab strip. |
| 启动时打开笔记本导航 / Open on startup | On | Reveal the navigator in the left sidebar. |
| 显示附件 / Show attachments | Off | Show Markdown only; enable to include other files. |

In tree mode, clicking a folder selects and expands it; clicking its triangle only expands or collapses. Right-click → **聚焦此文件夹** focuses a folder. **退出聚焦** restores the previous navigation state.

## File operations

| Action | How |
| --- | --- |
| Create | Use the corresponding `+` button or context menu. |
| Rename | Context menu or `F2`. |
| Reorder siblings | Drag to the top/bottom edge of a row, or press `Alt + ↑/↓`. |
| Move into a folder | Drop on its center. |
| Move to the parent | Drop on the top back-arrow button. |
| Move across notebooks | Context menu → 移动到… / Move to, then search for a destination. |
| Delete | Context menu or `Delete`; confirm to move to the vault's `.trash`. |

## Privacy and data

Runs locally, with no network requests, analytics, ads, accounts, or payments. It manages files only in the current vault through Obsidian APIs. Moves and renames follow Obsidian's link-update settings. Conflicting names are rejected rather than overwritten; deletion requires confirmation and uses the vault trash.

Ordering and navigation preferences are stored in plugin `data.json`, not note bodies or frontmatter. Disabling the plugin leaves your notes intact. Deleting its settings removes saved ordering and browsing state.

## Limitations

- No virtual page/subpage hierarchy, multi-select batch management, or OneNote format conversion.
- External renames while Obsidian is closed may lose old ordering or browsing associations.
- Below 280 px sidebar width the panes stack vertically. Deep tree indentation is capped and marked with level numbers.
- Desktop logic and browser-rendered interactions have been tested. Physical mobile/touch testing has not been completed.

## Development

Requires Node.js 20+. No runtime dependencies are bundled.

```sh
npm run build
npm test
```

Source is in `src/`; the build generates root `main.js`. Tests use an in-memory Obsidian adapter and do not access a real vault. CI verifies the tests and checks that committed release code matches the build.

## 中文说明
**参考onenote格式实现obsidian目录展示优化**
**把真实目录变成笔记本导航，目录再深也不增加横向列数。**

一级文件夹自动成为笔记本。点击顶部名称切换笔记本；点击文件夹，左栏显示下一级子目录，右栏显示直属文档。默认不嵌套、无三角角标；可开启「显示完整目录树」。长名称自动换行。「本层页面」仅是直属文档列表入口，不额外创建笔记。

点击文档默认新建标签页并切换到前台；关闭「在新标签页打开并置于前台」可复用当前标签页。右键可以新建、改名、移动和删除。拖到条目边缘排序，拖到文件夹中央移入，拖到返回箭头移回上一级。删除需确认并进入笔记库回收站，不会直接永久删除。

安装：将 Release 中的 `main.js`、`manifest.json`、`styles.css` 放进 `<笔记库>/.obsidian/plugins/onenote-like-navigator/`，重新加载并在第三方插件设置中启用。当前尚未上架社区插件市场。

插件不联网、不收集统计，不要求账号或付费。排序及浏览记录保存于插件配置，不修改笔记正文或属性。当前没有虚拟父子页面、多选批量操作或 OneNote 文件转换；移动端尚未实机验证。

## Feedback and license

Open an issue with your operating system, Obsidian version, plugin version, and reproduction steps. Use sample folder names instead of uploading private notes.

Released under the [MIT license](LICENSE). OneNote is a Microsoft trademark. This is an independent project.
