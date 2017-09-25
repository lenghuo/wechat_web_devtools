"use strict";function init(){function e(e,r,o){if("object"!==("undefined"==typeof r?"undefined":_typeof(r))&&(o=r,r={}),e.error)if("object"===_typeof(e.error)){var t=e.error||{},n=t.httpCode||404,i=t.msg||t.toString();o(n,{},i),t.type!==v&&t.type!==j||c.showWeappError(t.type,t.type===v?g.parseWxssErr(t):t)}else o(404,{"Weapp-Error":encodeURIComponent(e.error)},e.error.toString());else{var s={};r.isSvg&&(s={"Content-Type":"image/svg+xml"}),o(null,s,e.data)}}function r(r,o){var m=i.getProject(r);if(!m)return void e({error:"404"},o);var v=i.getFileNameFromUrl(r,m);v=decodeURI(v);var j=i.isWxmlFile(v),S=i.isWxssFile(v);if(S)l(r,{project:m},function(r,t){e({error:r,data:t},o)});else if(j){var E=[];E.push(function(e){var r=u.getAppJSONSync(m),o=r.pages,n=v.replace(t.extname(v),""),i=o.findIndex(function(e){return e===n});i>-1?e(null,i):e({type:d,msgForConsole:d+"app.json 中未配置，当前页面 "+n+" 请检查后重试。",msg:"app.json 中未配置当前页面 <br> "+n+" <br>请检查后重试。"})}),E.push(function(e){s(m,{url:r},function(r,o){e(r,o)})}),E.push(function(e){a(r,{project:m},function(r,o){e(r,o)})}),n.parallel(E,function(e,t){if(e){var n=x.replace(/{{error}}/,function(){return e.msg}).replace(/{{msgForConsole}}/,function(){var r=e.type,o=void 0;return r===y?o=g.parseWxmlErr(m,e.msgForConsole):r===d?o=e.msgForConsole:r===R&&(o=g.parseWxmlLoseErr(m,e.msgForConsole)),o});return void o(500,{},n)}var i={};try{i=u.getPageJSONSync(m,r)}catch(e){c.showWeappError(e.type,g.parseJsonParseErr(e))}var s={config:i,project:m,url:r,pageFrameTpl:t[1],generateFunc:t[2].generateFunc},a=p(s);o(null,a.header,a.body)})}else{var F=f.parse(r),h=F.pathname,q=(t.basename(h),t.extname(v));i.whiteFileExtName[q]?u.getFile(m,v,function(r,t){e({error:r,data:t},{isSvg:".svg"===q},o)}):e({error:"404"},o)}}function o(r,o){var n=i.getProject(r),s=i.getFileNameFromUrl(r,n);s=decodeURI(s);var a=t.extname(s);t.dirname(s);if(i.whiteFileExtName[a]){for(var p=u.getAppConfigJSONSync(n),l=p.widgets||[],c="",f=0;f<l.length;f++){var g=l[f];if("search"==n.compileType&&"search"==g.type){c=g.path;break}if("widget"==n.compileType&&"conversation"==g.type){c=g.path;break}}if(c=t.normalize(c)){var m=t.dirname(s);if(0!=m.indexOf(c))return e({error:"404"},o)}u.getFile(n,s,function(r,t){e({error:r,data:t},{isSvg:".svg"===a},o)})}else e({error:"404"},o)}var t=(require("fs"),require("path")),n=require("async"),i=require("../utils/tools.js"),s=(require("../../stores/projectStores.js"),require("./transConfigToPf.js")),a=require("./transWxmlToJs.js"),p=require("./transWxmlToHtml.js"),u=require("../utils/projectManager.js"),l=require("./transWxssToCss.js"),c=require("../../actions/windowActions.js"),f=require("url"),g=require("../utils/parseErr.js"),m=require("../../config/config.js"),y=m.WXML_ERROR,d=m.PAGE_DEFINE_ERROR,v=m.WXSS_ERROR,j=m.WXSS_IMPORT_ERROR,R=m.WXML_LOSE_ERROR,S=require("../../config/config.js"),x=(S.weappLocalIdRegular,require("../tpl/errorTpl.js"));_exports={getResponse:r,getWidgetResource:o}}var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_exports;init(),module.exports=_exports;