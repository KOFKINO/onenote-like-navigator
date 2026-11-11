'use strict';
const parent = p => p.includes('/') ? p.slice(0, p.lastIndexOf('/')) : '';
const within = (p, root) => !root || p === root || p.startsWith(root + '/');
const remap = (p, old, next) => p === old ? next : p.startsWith(old + '/') ? next + p.slice(old.length) : p;
function validName(name) {
  if (!name || name !== name.trim() || /[\\/:*?"<>|\x00-\x1f]/.test(name) || /[. ]$/.test(name) || name === '.' || name === '..' || name.startsWith('.')) throw Error('名称不能为空，不能以点开头，也不能包含路径分隔符或特殊字符。');
  if (/^(con|prn|aux|nul|com[1-9]|lpt[1-9])(\.|$)/i.test(name)) throw Error('此名称是系统保留名称。');
  return name;
}
function destination(file, folder) {
  if (file.children && within(folder, file.path)) throw Error('不能把文件夹移到它自己或子文件夹里。');
  return (folder ? folder + '/' : '') + file.name;
}
function ordered(items, order = []) {
  const rank = new Map(order.map((p, i) => [p, i]));
  return [...items].sort((a, b) => (rank.get(a.path) ?? Infinity) - (rank.get(b.path) ?? Infinity) || a.name.localeCompare(b.name, 'zh-Hans', {numeric: true}));
}
function migrate(data, old, next) {
  const transform = p => remap(p, old, next);
  data.book = transform(data.book || '');
  const memories = {};
  const mapMemory = v => ({...v, level: transform(v.level || ''), section: transform(v.section || ''), page: transform(v.page || ''), expanded: (v.expanded || []).map(transform), focusHistory: (v.focusHistory || []).map(mapMemory)});
  for (const [k,v] of Object.entries(data.memories || {})) memories[transform(k)] = mapMemory(v);
  data.memories = memories;
  const orders = {};
  for (const [k,v] of Object.entries(data.orders || {})) orders[transform(k)] = v.map(transform);
  data.orders = orders;
}
module.exports = {parent, within, remap, validName, destination, ordered, migrate};
