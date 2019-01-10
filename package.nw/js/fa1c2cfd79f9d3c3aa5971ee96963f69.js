'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){const a=require('./0634ee2ebd3e560d9d4804ecc960160f.js'),b=function(a={}){const b=[];return['height','width','top','left'].forEach((c)=>{'number'!=typeof a[c]&&b.push(`position.${c} should be Number`)}),b.join(' ')};module.exports={insertTextView:async function(c,d,e){const{api:f,args:h={},callbackID:g}=d,i=h.position||{},j=b(i);if(j)return`${f}:fail ${j}`;const k=e(),l=k.simulator.coverViewTree;return l[h.parentId]?l[h.viewId]?{errMsg:`${f}:fail already exist`}:(c({type:a.SIMUALTOR_INSERT_COVERVIEW,data:{type:'text',parentId:h.parentId,viewId:h.viewId,hide:h.hide,position:{height:-1==i.height?'auto':i.height||0,width:-1==i.width?'auto':i.width||0,left:i.left||0,top:i.top||0},style:h.style||{},label:h.label||{},clickable:!!h.clickable,gesture:!!h.gesture,transEvt:!!h.transEvt,data:h.data}}),{errMsg:`${f}:ok`,viewId:h.viewId}):{errMsg:`${f}:fail parent ${h.parentId} not found`}},updateTextView:async function(c,d,e){const{api:f,args:h={},callbackID:g}=d,i=e(),j=i.simulator.coverViewTree;if(!j[h.viewId])return{errMsg:`${f}:fail ${h.viewId} not found`};if('text'!=j[h.viewId].type)return{errMsg:`${f}:fail not text view`};const k=_extends({},h);if(h.position){const a=h.position,c=b(a);if(c)return`${f}:fail ${c}`;k.position={height:-1==a.height?'auto':a.height||0,width:-1==a.width?'auto':a.width||0,left:a.left||0,top:a.top||0}}return c({type:a.SIMULATOR_UPDATE_COVERVIEW,data:k}),{errMsg:`${f}:ok`}},removeTextView:async function(b,c,d){const{api:e,args:g={},callbackID:f}=c,h=d(),i=h.simulator.coverViewTree;return i[g.viewId]?'text'==i[g.viewId].type?(b({type:a.SIMULATOR_REMOVE_COVERVIEW,data:{viewId:g.viewId}}),{errMsg:`${e}:ok`}):{errMsg:`${e}:fail not text view`}:{errMsg:`${e}:fail ${g.viewId} not found`}},insertImageView:async function(c,d,e){const{api:f,args:h={},callbackID:g}=d,i=h.position||{},j=b(i);if(j)return`${f}:fail ${j}`;const k=e(),l=k.simulator.coverViewTree;if(!l[h.parentId])return{errMsg:`${f}:fail parent ${h.parentId} not found`};if(l[h.viewId])return{errMsg:`${f}:fail already exist`};let m=h.iconPath||'';return'string'==typeof m?m.startsWith('/')||m.startsWith('/')?{errMsg:`${f}:fail param iconPath should not start with / or .`}:(m.startsWith('https')||m.startsWith('http')||(m=`http://127.0.0.1:${global.proxyPort}/game/${m}`),c({type:a.SIMUALTOR_INSERT_COVERVIEW,data:{type:'image',parentId:h.parentId,viewId:h.viewId,hide:h.hide,position:{height:-1==i.height?'auto':i.height||0,width:-1==i.width?'auto':i.width||0,left:i.left||0,top:i.top||0},style:h.style||{},iconPath:m,clickable:!!h.clickable,gesture:!!h.gesture,transEvt:!!h.transEvt,data:h.data}}),{errMsg:`${f}:ok`,viewId:h.viewId}):{errMsg:`${f}:fail param iconPath should be string`}},updateImageView:async function(c,d,e){const{api:f,args:h={},callbackID:g}=d,i=h.position||{},j=e(),k=j.simulator.coverViewTree;if(!k[h.viewId])return{errMsg:`${f}:fail ${h.viewId} not found`};if('image'!=k[h.viewId].type)return{errMsg:`${f}:fail not image view`};const l=_extends({},h);if(h.position){const a=h.position,c=b(a);if(c)return`${f}:fail ${c}`;l.position={height:-1==a.height?'auto':a.height||0,width:-1==a.width?'auto':a.width||0,left:a.left||0,top:a.top||0}}const m=l.iconPath||'';if('undefined'!=typeof m){if('string'!=typeof m)return{errMsg:`${f}:fail param iconPath should be string`};if(m.startsWith('/')||m.startsWith('/'))return{errMsg:`${f}:fail param iconPath should not start with / or .`};m.startsWith('https')||m.startsWith('http')||(l.iconPath=`http://127.0.0.1:${global.proxyPort}/game/${m}`)}return c({type:a.SIMULATOR_UPDATE_COVERVIEW,data:l}),{errMsg:`${f}:ok`}},removeImageView:async function(b,c,d){const{api:e,args:g={},callbackID:f}=c,h=d(),i=h.simulator.coverViewTree;return i[g.viewId]?'image'==i[g.viewId].type?(b({type:a.SIMULATOR_REMOVE_COVERVIEW,data:{viewId:g.viewId}}),{errMsg:`${e}:ok`}):{errMsg:`${e}:fail not image view`}:{errMsg:`${e}:fail ${g.viewId} not found`}},animateCoverView:async function(b,c,d){const{api:e,args:g={},callbackID:f}=c,h=d(),i=h.simulator.coverViewTree;return i[g.viewId]?(b({type:a.SIMULATOR_ANIMATE_COVERVIEW,data:{viewId:g.viewId,animation:{finalStyle:g.finalStyle,duration:g.duration,easing:g.easing}}}),{errMsg:`${e}:ok`}):{errMsg:`${e}:fail ${g.viewId} not found`}}}}(require('lazyload'),require);