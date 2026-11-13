# OneNote Like Navigator

[简体中文](README.zh-CN.md) · [Install](#installation) · [Releases / changes](https://github.com/KOFKINO/onenote-like-navigator/releases) · [Report an issue](https://github.com/KOFKINO/onenote-like-navigator/issues)

**An Obsidian plugin for OneNote-style navigation through your existing folders and notes.**

Switch notebooks without displaying the entire vault tree. By default, entering a folder shows only its immediate subfolders on the left and direct notes on the right. Long names wrap, and deeper folders do not add columns.

**Interface language: Simplified Chinese.** English labels below are translations for reference, not alternate commands available in the plugin. Use the Chinese text when searching the command palette.

## Features

- Top-level folders automatically become notebooks; no per-notebook configuration.
- Single-level navigation by default, with an optional expandable folder tree and folder focus.
- Create, rename, move, reorder, and trash real files directly.
- Open notes in a new foreground tab by default, or reuse the current tab.
- Remember browsing state per notebook. Folder changes made in Obsidian update the navigation.

## Installation

Requires **Obsidian 1.7.2+**. Mobile/touch behavior has not yet been tested on physical devices.

### Community plugins

Open the [official directory listing](https://community.obsidian.md/plugins/onenote-like-navigator) and choose **Add to Obsidian**. Alternatively, open **Settings → Community plugins → Browse**, search for **OneNote Like Navigator**, then install and enable it.

The directory and GitHub may show different versions while a release is being processed. Check the version shown before installing; use the manual method if you need a newer GitHub release.

### Manual installation or update

1. Download `main.js`, `manifest.json`, and `styles.css` from the [latest release](https://github.com/KOFKINO/onenote-like-navigator/releases/latest), not the source-code ZIP.
2. Create `<vault>/.obsidian/plugins/onenote-like-navigator/` and place the three files directly inside it.
3. Reload Obsidian and enable **OneNote Like Navigator** in **Settings → Community plugins**.

When updating manually, disable the plugin, replace only those three files, and reload/enable it. Preserve `data.json` to keep settings and ordering. No build step, account, or subscription is needed for release files.

## Quick start

1. Click the square notebook ribbon icon, or run **OneNote Like Navigator: 打开笔记本导航 (Open notebook navigator)** in the command palette.
2. Click the notebook name at the top to switch notebooks.
3. Click a folder: the left pane shows its immediate subfolders and the right pane shows its direct notes. Click a note to open it; use the back arrow to go up.

**本层页面 (Pages in this folder)** is selected automatically when you enter a folder. It is an entry for the direct-note list, not a generated Markdown file. Entering a folder does not automatically open its first note.

## Commands and interface labels

Command palette entries use the prefix **OneNote Like Navigator:**. No global hotkeys are assigned by default; assign your own in **Settings → Hotkeys**.

| Chinese label | English meaning | Where |
| --- | --- | --- |
| 打开笔记本导航 | Open notebook navigator | Command palette |
| 切换笔记本 | Switch notebook | Command palette |
| 定位当前笔记 | Reveal current note | Command palette |
| 在当前分区新建笔记 | Create a note in the current section | Command palette |
| 本层页面 | Pages in this folder | Navigator |
| 聚焦此文件夹 | Focus this folder | Folder context menu |
| 退出聚焦 | Exit focus | Navigator while focused |
| 移动到… | Move to… | Context menu |
| 移入回收站… | Move to trash… | Context menu |

## Settings

| Setting (Chinese label and translation) | Default | Effect |
| --- | --- | --- |
| 显示完整目录树 (Show full folder tree) | Off | Show only direct child folders; enable for a nested tree. |
| 在新标签页打开并置于前台 (Open in a new foreground tab) | On | Create and activate a new tab; disable to reuse the current tab. Opening a new tab does not change the order of existing tabs or move it to the leftmost position. |
| 启动时打开笔记本导航 (Open on startup) | On | Reveal the navigator in the left sidebar. |
| 显示附件 (Show attachments) | Off | Show Markdown notes only; enable to include other files. |
| 恢复隐藏的笔记本入口 (Restore hidden notebooks) | Action | Click 显示全部 (Show all) to restore hidden notebook entries. |

In tree mode, clicking a folder selects and expands it; clicking its triangle only expands or collapses it. Right-click → **聚焦此文件夹 (Focus this folder)** limits navigation to that folder. **退出聚焦 (Exit focus)** restores the previous navigation state. Hiding a notebook entry does not delete its folder.

## File operations and keyboard controls

Keyboard controls below apply when a folder or note button in the navigator has keyboard focus, not while typing in the editor or search box.

| Action | How |
| --- | --- |
| Create | Corresponding `+` button or context menu. |
| Rename | Context menu or `F2`. |
| Reorder siblings | Drag to a row's top/bottom edge, or press `Alt + ↑/↓`. |
| Move into a folder | Drop on the folder row's center. |
| Move to the parent | Drop on the top back-arrow button. |
| Move across notebooks | Context menu → 移动到… (Move to…), then search for a destination folder. |
| Delete | Context menu or `Delete`; confirm to move to the vault's `.trash`. Deleting a folder includes its contents. |
| Navigate within a list | `↑/↓` for previous/next; `Home/End` for first/last. |
| Enter or go back from a folder | `→` enters/selects; `←` collapses an expanded tree row, otherwise selects its parent. |

Sorting changes this navigator's order, not filenames or the native file explorer's order.

## Related plugins

These are different navigation approaches, not an exhaustive feature ranking. Facts below come from the linked project documentation, checked on 2026-11-13.

| Plugin | Documented approach |
| --- | --- |
| **OneNote Like Navigator** | Top-level folders as notebooks; immediate subfolders left and direct notes right by default. Real-file management without configuring each notebook. |
| [Notebook Navigator](https://github.com/johansan/notebook-navigator) | Dual-pane browsing with folders, tags, properties, previews, keyboard navigation, and manual ordering. |
| [Fluent OneNote](https://community.obsidian.md/plugins/fluent-onenote) | Notebook/section/page navigation in a popup or sidebar; configurable root folder, folder-note subpages, and drag reordering/moves. |

Real-folder navigation and file management are not exclusive to this plugin. Its focus is a compact, single-level workflow that follows your existing folder hierarchy.

## Privacy and data

- Runs locally, with no plugin network requests, analytics, ads, accounts, or payments.
- Uses Obsidian APIs to manage files in the current vault.
- Saves ordering and browsing preferences in plugin `data.json`, not note bodies or frontmatter.
- See the [FAQ](FAQ.md) for deletion, link updates, settings, and uninstall behavior.

## Limitations

- No virtual page/subpage hierarchy, multi-select batch management, or OneNote file import/conversion.
- External renames while Obsidian is closed may lose old ordering or browsing associations.
- Below 280 px sidebar width, the panes stack vertically. Deep tree indentation is capped and marked with level numbers.
- Desktop logic and browser-rendered interactions have been tested; physical mobile/touch testing is incomplete.
- The UI is currently Chinese only; this English guide does not add English localization.

## Development and contributing

Requires **Node.js 20+ and npm**. Clone the repository and run these commands from its root:

```sh
npm ci
npm run build
npm test
```

`npm ci` installs from the committed lockfile for reproducible setup. Use `npm install` when deliberately changing dependencies, and commit the updated lockfile. The project currently has no third-party package dependencies.

Source lives in `src/`; the build generates root `main.js`. Tests use an in-memory Obsidian adapter, not a real vault. CI checks tests and that committed `main.js` matches the build. See [CONTRIBUTING.md](CONTRIBUTING.md) for branch, commit, PR, and translation requirements.

## Feedback and license

Report your OS, Obsidian version, plugin version, and reproduction steps in [Issues](https://github.com/KOFKINO/onenote-like-navigator/issues). Use sample folders instead of private notes. See [Releases](https://github.com/KOFKINO/onenote-like-navigator/releases) for published versions and changes.

Released under the [MIT license](LICENSE). OneNote is a Microsoft trademark. This independent project is not affiliated with Microsoft or Obsidian.
