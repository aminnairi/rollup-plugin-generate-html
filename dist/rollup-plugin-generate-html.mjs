import{resolve}from"path";import{writeFile}from"fs";console.log("test");var pretty=require("pretty"),baseDirectory=function(t){return t.slice(0,t.lastIndexOf("/"))},fileToScript=function(t){return"<script src='./".concat(t,"'><\/script>")},scriptTagsFrom=function(t){return Object.keys(t).map(fileToScript).join("")},generateHtml=function(){return{generateBundle:function(t,e){var r=this,i=t.file,n=resolve(__dirname,baseDirectory(i),"index.html"),c=pretty("<!doctype html><head><meta charset='utf-8'><title>My Application</title></head><html><body>".concat(scriptTagsFrom(e),"</body></html>"),{ocd:!0});writeFile(n,c,"utf-8",function(t){return t&&r.error(t)})}}};export{generateHtml};
