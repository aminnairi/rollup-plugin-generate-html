/**
 * @copyright 2018 Amin NAIRI
 * @license MIT
 */

function baseDirectory(e){if(void 0===e&&(e=""),"string"!=typeof e)throw TypeError("first argument expected to be of type string, "+typeof e+" provided");var t=(/\w/i.exec(e)||{index:0}).index,r=e.indexOf("/",t);return normalize(-1===r?e.slice(0,t):e.slice(0,r))}function baseFile(e){if("string"!=typeof e)throw TypeError("first argument expected to be of type string, "+typeof e+" provided");return e.replace(/^(\.\.\/|\.\/|\/)?(.*?\/)/,"")}function generateHtml(e){var t=void 0===e?{}:e,r=t.charset,o=void 0===r?"utf-8":r,i=t.title,p=void 0===i?"My Application":i,n=t.lang,f=void 0===n?"en-US":n,d=t.path,y=void 0===d?"":d,s=t.publicPath,c=void 0===s?"":s;if("string"!=typeof o)throw TypeError("first argument expected to be of type string, "+typeof o+" provided");if("string"!=typeof p)throw TypeError("second argument expected to be of type string, "+typeof p+" provided");if("string"!=typeof f)throw TypeError("third argument expected to be of type string, "+typeof f+" provided");if("string"!=typeof y)throw TypeError("fourth argument expected to be of type string, "+typeof y+" provided");if("string"!=typeof c)throw TypeError("fifth argument expected to be of type string, "+typeof c+" provided");return{generateBundle:function(e){var t=e.file;if("string"!=typeof t)throw TypeError("fifth argument expected to be of type string, "+typeof c+" provided");var r=resolve(baseDirectory(t)),i=resolve(r,"index.html"),n=require("pretty")("<!doctype html><html lang='"+f+"'><head><meta charset='"+o+"'><title>"+p+"</title></head><body><script src='"+join(c,baseFile(t))+"'><\/script></body></html>",{ocd:!0});existsSync(r)||mkdirSync(resolve("dist")),writeFileSync(i,n,"utf-8")}}}import{normalize,join,resolve}from"path";import{writeFileSync,mkdirSync,existsSync}from"fs";export{generateHtml};
