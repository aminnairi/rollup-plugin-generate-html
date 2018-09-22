/**
 * Copyright (c) 2018 Amin NAIRI
 */

"use strict";function baseDirectory(e){const t=/\w/i.exec(e).index,i=e.indexOf("/",t);return-1===i?e.slice(0,t):e.slice(0,i)}function baseFile(e){return e.replace(/^(\.\.\/|\.\/|\/)?(.*?\/)/,"")}Object.defineProperty(exports,"__esModule",{value:!0});var path=require("path"),fs=require("fs");const pretty=require("pretty"),generateHtml=({charset:charset="utf-8",title:title="My Application",lang:lang="en-US",path:path$$1,publicPath:publicPath="./"}={})=>({generateBundle({file:file}){const e=path.resolve(path$$1||baseDirectory(file),"index.html"),t=pretty(`<!doctype html><html lang='${lang}'><head><meta charset='${charset}'><title>${title}</title></head><body><script src='${path.join(publicPath,baseFile(file))}'><\/script></body></html>`,{ocd:!0});fs.writeFile(e,t,"utf-8",e=>e&&this.error(e))}});exports.generateHtml=generateHtml;
