"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var path=_interopDefault(require("path")),fs=_interopDefault(require("fs")),pretty=require("pretty"),generateHtml=function(){return{generateBundle:function(e,t){var r=this;e.file;console.log(t),fs.writeFile(path.resolve(__dirname,"../dist/"),"hello","utf-8",function(e){e&&r.error(e)}),console.log("test 3")}}};exports.generateHtml=generateHtml;
