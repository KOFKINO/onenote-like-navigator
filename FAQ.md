# FAQ

[English guide](README.md) · [简体中文指南](README.zh-CN.md)

## English

### Are my notes converted or given extra properties?

No. The navigator uses existing folders and files. Ordering and browsing preferences live in the plugin's `data.json`; it does not add navigation metadata to note bodies or frontmatter. Creating or editing a note still changes a real vault file.

### What happens to links and conflicting names?

Moves and renames use Obsidian's file manager and follow Obsidian's link-update settings. Conflicting destination names are rejected instead of overwritten.

### Where do deleted files go?

After confirmation, files go to the vault's `.trash`, not the operating system's trash. Deleting a folder includes its contents. Restore files from that directory if needed; the plugin does not provide its own undo interface.

### What happens when I disable or uninstall the plugin?

Disabling it leaves notes and folders intact. Removing its settings discards saved ordering and browsing state. File moves and renames already performed remain in effect; uninstalling is not an undo operation.

### Do hidden notebooks disappear from disk?

No. Hiding affects notebook entries in this navigator only. Use the restore action in settings to show all entries again.

### Why is the marketplace version different from GitHub?

The official directory may still be processing a newer release. Compare version numbers before installing. The manual installation instructions in the guide can install the GitHub release directly.

## 简体中文

### 会转换笔记或增加属性吗？

不会。导航直接使用现有文件夹和文件。排序及浏览偏好保存于插件 `data.json`，不向笔记正文或属性添加导航信息。新建或编辑笔记仍会实际改变笔记库内的文件。

### 移动后链接和重名文件如何处理？

移动和重命名使用 Obsidian 文件管理 API，遵循 Obsidian 的链接更新设置。目标位置出现重名时会拒绝操作，不覆盖已有文件。

### 删除的文件去哪里？

确认后移入笔记库内的 `.trash`，不是操作系统回收站。删除文件夹包含内部全部内容；需要恢复时从该目录取回。插件没有独立撤销界面。

### 禁用或卸载后会怎样？

禁用不会删除笔记和文件夹。删除插件配置会丢失保存的排序及浏览状态。之前进行的移动、重命名仍然有效，卸载不等于撤销文件操作。

### 隐藏笔记本会删除磁盘上的文件夹吗？

不会，只隐藏本导航中的入口。使用设置中的恢复操作即可重新显示所有入口。

### 为什么市场版本和 GitHub 不一致？

官方目录可能仍在处理较新的发布。安装前请对比版本号；需要直接安装 GitHub 版本时，使用指南中的手动安装方式。
