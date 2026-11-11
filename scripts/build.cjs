const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..');
const core=fs.readFileSync(path.join(root,'src/core.js'),'utf8').replace('module.exports =','return');
const plugin=fs.readFileSync(path.join(root,'src/plugin.js'),'utf8').replace("require('./core')",'(()=>{'+core+'\n})()');
fs.writeFileSync(path.join(root,'main.js'),plugin);
