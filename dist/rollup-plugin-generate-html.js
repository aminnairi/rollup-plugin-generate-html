/**
 * @copyright 2018 Amin NAIRI
 * @license MIT
 */

"use strict";function baseDirectory(e){void 0===e&&(e="");var t=(/\w/i.exec(e)||{index:0}).index,r=e.indexOf("/",t);return-1===r?e.slice(0,t):e.slice(0,r)}function baseFile(e){return e.replace(/^(\.\.\/|\.\/|\/)?(.*?\/)/,"")}function generateHtml(e){var t=e.charset,r=void 0===t?"utf-8":t,i=e.title,n=void 0===i?"My Application":i,a=e.lang,l=void 0===a?"en-US":a,o=e.path,c=void 0===o?"":o,s=e.publicPath,d=void 0===s?"./":s;return{generateBundle:function(e){var t=this,i=e.file,a=path.resolve(c||baseDirectory(i),"index.html"),o=require("pretty")("<!doctype html><html lang='"+l+"'><head><meta charset='"+r+"'><title>"+n+"</title></head><body><script src='"+path.join(d,baseFile(i))+"'><\/script></body></html>",{ocd:!0});fs.writeFile(a,o,"utf-8",function(e){return e&&t.error(e)})}}}Object.defineProperty(exports,"__esModule",{value:!0});var path=require("path"),fs=require("fs");exports.generateHtml=generateHtml;
