/**
 * Copyright (c) 2018 Amin NAIRI
 */

function baseDirectory(e){const t=/\w/i.exec(e).index,i=e.indexOf("/",t);return-1===i?e.slice(0,t):e.slice(0,i)}function baseFile(e){return e.replace(/^(\.\.\/|\.\/|\/)?(.*?\/)/,"")}import{join,resolve}from"path";import{writeFile}from"fs";const pretty=require("pretty"),generateHtml=({charset:charset="utf-8",title:title="My Application",lang:lang="en-US",path:path,publicPath:publicPath="./"}={})=>({generateBundle({file:file}){const e=resolve(path||baseDirectory(file),"index.html"),t=pretty(`<!doctype html><html lang='${lang}'><head><meta charset='${charset}'><title>${title}</title></head><body><script src='${join(publicPath,baseFile(file))}'><\/script></body></html>`,{ocd:!0});writeFile(e,t,"utf-8",e=>e&&this.error(e))}});export{generateHtml};
