/**
 * @copyright 2018 Amin NAIRI
 * @license MIT
 */

function baseDirectory(e){void 0===e&&(e="");var t=(/\w/i.exec(e)||{index:0}).index,i=e.indexOf("/",t);return-1===i?e.slice(0,t):e.slice(0,i)}function baseFile(e){return e.replace(/^(\.\.\/|\.\/|\/)?(.*?\/)/,"")}function generateHtml(e){var t=e.charset,i=void 0===t?"utf-8":t,r=e.title,n=void 0===r?"My Application":r,l=e.lang,o=void 0===l?"en-US":l,a=e.path,c=void 0===a?"":a,d=e.publicPath,s=void 0===d?"./":d;return{generateBundle:function(e){var t=this,r=e.file,l=resolve(c||baseDirectory(r),"index.html"),a=require("pretty")("<!doctype html><html lang='"+o+"'><head><meta charset='"+i+"'><title>"+n+"</title></head><body><script src='"+join(s,baseFile(r))+"'><\/script></body></html>",{ocd:!0});writeFile(l,a,"utf-8",function(e){return e&&t.error(e)})}}}import{join,resolve}from"path";import{writeFile}from"fs";export{generateHtml};
