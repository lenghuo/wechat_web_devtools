'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){const a=require('./4389a88e405d1d37f36c16fc0ec96540.js'),b=require('./5b7e808cbfe14a62c21959fb1771749d.js'),c=require('./54bd189bb6081afa877cfd37a0dbec56.js'),{connect:d}=require('react-redux');module.exports=d((a)=>{const d=a.simulator.currentWebviewID,e=a.simulator.webviewInfos[d],f=e&&e.navigationBar||{},g=!!e&&!e.showStatusBar,h=a.toolbar.deviceInfo||{},i=a.simulator.appConfig||{},j=(a.project.current||{}).libVersion,k=j&&170<=parseInt(j.replace(/\./g,'')),l=c.getNavigationStyle(a),m=((i.global||{}).window||{}).enableFullScreen||!1;let n,o='rgba(255,255,255,1)';try{n=b.fromHex(f.backgroundColor||'#ffffff'),n.a=null==f.alpha||f.alpha==void 0?1:f.alpha,m||'custom'===l||(n.a=1),o=n.toRGBA()}catch(a){o='rgba(255,255,255,1)'}return _extends({},f,{isHide:g,customNavigationBar:k&&'custom'===l,useCapsuleNavigationBar:k,titleStyle:f.titleStyle||'white',height:h.statusbarHeight,backgroundColor:o,networkType:a.toolbar.network.list[a.toolbar.network.current],iphoneX:'iPhone X'==h.model})},()=>({}))(a)}(require('lazyload'),require);