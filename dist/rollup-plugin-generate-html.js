"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var path=require("path"),fs=require("fs"),pretty=require("pretty"),baseDirectory=function(e){return e.slice(0,e.lastIndexOf("/"))},fileToScript=function(e){return"<script src='./".concat(e,"'><\/script>")},scriptTagsFrom=function(e){return Object.keys(e).map(fileToScript).join("")},generateHtml=function(){return{generateBundle:function(e,t){var r=this,i=e.file,n=path.resolve(__dirname,baseDirectory(i),"index.html"),o=pretty("<!doctype html><head><meta charset='utf-8'><title>My Application</title></head><html><body>".concat(scriptTagsFrom(t),"</body></html>"),{ocd:!0});fs.writeFile(n,o,"utf-8",function(e){e&&r.error(e)}),console.log("test 2")}}};exports.generateHtml=generateHtml;
