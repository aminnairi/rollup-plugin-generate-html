/**
 * @copyright 2018 Amin NAIRI
 * @license MIT
 */

"use strict";function baseDirectory(e){if(void 0===e&&(e=""),"string"!=typeof e)throw TypeError("first argument expected to be of type string, "+typeof e+" provided");var t=(/\w/i.exec(e)||{index:0}).index,r=e.indexOf("/",t);return-1===r?path.normalize(e.slice(0,t)):path.normalize(e.slice(0,r))}function baseFile(e){if("string"!=typeof e)throw TypeError("first argument expected to be of type string, "+typeof e+" provided");return e.replace(/^(\.\.\/|\.\/|\/)?(.*?\/)/,"")}function generateHtml(e){var t=void 0===e?{}:e,r=t.charset,o=void 0===r?"utf-8":r,i=t.title,p=void 0===i?"My Application":i,n=t.lang,f=void 0===n?"en-US":n,d=t.path,a=void 0===d?"":d,y=t.publicPath,s=void 0===y?"":y;if("string"!=typeof o)throw TypeError("first argument expected to be of type string, "+typeof o+" provided");if("string"!=typeof p)throw TypeError("second argument expected to be of type string, "+typeof p+" provided");if("string"!=typeof f)throw TypeError("third argument expected to be of type string, "+typeof f+" provided");if("string"!=typeof a)throw TypeError("fourth argument expected to be of type string, "+typeof a+" provided");if("string"!=typeof s)throw TypeError("fifth argument expected to be of type string, "+typeof s+" provided");return{generateBundle:function(e){var t=e.file;if("string"!=typeof t)throw TypeError("fifth argument expected to be of type string, "+typeof s+" provided");var r=path.resolve(a||baseDirectory(t),"index.html"),i=require("pretty")("<!doctype html><html lang='"+f+"'><head><meta charset='"+o+"'><title>"+p+"</title></head><body><script src='"+path.join(s,baseFile(t))+"'><\/script></body></html>",{ocd:!0});fs.writeFileSync(r,i,"utf-8")}}}Object.defineProperty(exports,"__esModule",{value:!0});var path=require("path"),fs=require("fs");exports.generateHtml=generateHtml;
