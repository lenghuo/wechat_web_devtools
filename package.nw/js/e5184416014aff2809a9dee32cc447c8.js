'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){function a({except:a=[]}={}){let b=o.readdirSync(G);if(5<b.length)for(let c,d=0,e=b.length;d<e;d++){c=!1;for(let e=0,f=a.length;e<f;e++)if(0==b[d].indexOf(a[e])){c=!0;break}c||A.rmSync(p.join(G,b[d]))}}function b(){try{let a=0,b=o.readdirSync(G);if(0<b.length)for(let c,d=0,e=b.length;d<e;d++)if(c=b[d].match(/(\d+)\.(dmg|exe|wx\.gzip)$/),c&&c[1]){let b=parseInt(c[1]);Number.isInteger(b)&&b>a&&(a=b)}return a}catch(a){return 0}}async function c(a={}){return new Promise((c,d)=>{let e={url:`${w.checkUpdate}?clientversion=${K}&type=${J}`};a.force&&(e.url+='&force=1');let f=b();f&&(e.url+=`&downloadedversion=${f}`),x(e,(b,e,f)=>{if(b)return d(b);try{let b=JSON.parse(f),e=b.baseresponse||{},g=e.errcode;0==g?c({version:b.update_version,forceUpdate:2==b.update_type,versionType:b.version_type,packType:b.pack_type||0,md5:b.md5,whatsnew:b.changelog_desc,whatsnewURL:b.changelog_url,silence:b.silence,manual:!!a.force}):d(g)}catch(a){d(a)}})})}function d(a){const{version:b,packType:c}=a;let d=`${J}_${b}_${c}`,e=I?'dmg':'exe';return(c==O.BIGCODE||c==O.SMALLCODE)&&(e='wx.gzip'),`${d}.${e}`}function e(a){return!!(a&&(a.version>K||a.forceUpdate))}function f(a){return a+='',a.replace(/^(\d)(\d\d)(\d+)$/,function(a,b,c,d){return`${b}.${c}.${d}`})}async function g(a){try{if(!a)return;if(Q)return;if(!e(a))return;if(P)return;let b=await j(a),c=a.silence&&(a.packType==O.BIGCODE||a.packType==O.SMALLCODE);c||(c=await h(a,b)),c&&i(a,b),a.forceUpdate&&(B.forceUpdateVersion=strUpdateVersion)}catch(a){}}function h(a){return new Promise((b)=>{let{version:c,forceUpdate:d,packType:e,whatsnewURL:g}=a;global.shareData.updateConfig={updateVersion:f(c),whatsnewURL:g||'https://developers.weixin.qq.com/miniprogram/dev/devtools/uplog.html',isDrawBack:c<K&&d},n(),S&&(S.removeAllListeners(),S.hide(),S.close(),S=null),nw.Window.open('html/whatsnew.html',{width:600,height:480,title:'\u7248\u672C\u66F4\u65B0\u63D0\u793A',always_on_top:!0},(a)=>{global.windowMap.set('WHATSNEW',a),S=a,a.on('close',function(){S=null,global.shareData&&global.shareData.updateConfig&&(b(global.shareData.updateConfig.confirmInstall),delete global.shareData.updateConfig),this.hide(),this.close(!0)}),a.on('new-win-policy',function(a,b,c){c.ignore(),nw.Shell.openExternal(b)})})})}async function i(a,b){const{packType:c,version:d}=a;if(c==O.BIGCODE||c==O.SMALLCODE){if(T)try{T.removeAllListeners(),T.kill('SIGTERM')}catch(a){y.error('kill hotpatch task error ',a)}let d=p.join(p.dirname(process.execPath),'node');T=r.fork(E.fileName,['--expose-gc'],{execPath:d,stdio:['ipc'],env:_extends({},process.env,{PACKTYPE:c,HOTPATHTASK:'yes',PackFilePath:b,NewPackageNwPath:I?p.join(H,'new_package.nw'):p.join(process.env.APPDATA,'Tencent','\u5FAE\u4FE1web\u5F00\u53D1\u8005\u5DE5\u5177','new_package.nw'),DistPackageNwPath:I?p.join(H,'package.nw'):p.join(process.env.APPDATA,'Tencent','\u5FAE\u4FE1web\u5F00\u53D1\u8005\u5DE5\u5177','package.nw')})}),T.stdout.on('data',(a)=>{y.log('hotpatch: '+a)}),T.stderr.on('data',(a)=>{y.error('hotpatch: '+a)}),T.on('exit',(b)=>{0==b?(!a.silence||a.manual)&&confirm('\u66F4\u65B0\u5B8C\u6210\uFF0C\u8BF7\u91CD\u65B0\u542F\u52A8')&&(I?s('/Applications/wechatwebdevtools.app/Contents/MacOS/wechatwebdevtools',[],{detached:!0}):s(p.join(p.dirname(process.execPath),'\u5FAE\u4FE1web\u5F00\u53D1\u8005\u5DE5\u5177.exe'),[],{detached:!0}),A.quit()):confirm('\u70ED\u66F4\u65B0\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u4E0B\u8F7D\u7248\u672C\u8FDB\u884C\u5B89\u88C5')})}else{let a=I?'open':b,c=I?[b]:[];try{s(a,c,{detached:!0})}catch(a){nw.Shell.openItem(b)}A.quit()}}async function j(b){const{version:c,versionType:e,packType:f}=b;let g=`${J}_${c}_${f}_${Date.now()}${Math.random()}.temp`,h=p.join(G,g),i=p.join(G,d(b));if(o.existsSync(i)&&(!b.md5||F(i,b.md5)))return i;let j='';try{j=`${J}_${c}_${f}`}catch(a){}return await a({except:[j]}),new Promise((a,b)=>{let d='',g={url:`${L}&type=${J}&download_version=${c}&version_type=${e}&pack_type=${f}`,followRedirect:function(a){return d=a.caseless.get('md5'),d}};P=!0,x(g,(a)=>{return P=!1,a?b(a):void process.nextTick(()=>{j()})}).pipe(o.createWriteStream(h,{mode:511}));const j=()=>{try{if(!F(h,d))return b('signature not match');o.rename(h,i,(c)=>{return c?b(c):void a(i)})}catch(a){b(a)}}})}function k(){m(),l(),R=setInterval(()=>{m()},N)}function l(){R&&(clearInterval(R),R=null)}async function m(a){let b=await c(a);return g(b),b}function n(){l(),Q=!0}const o=require('fs'),p=require('path'),q=require('crypto'),r=require('child_process'),s=require('child_process').spawn,t=require('mkdir-p'),u=require('zlib'),v=require('./514d358c669501bba65151a1ad61ae2f.js'),w=require('./f171257bbcaef547a3cf27266ccb0db2.js'),x=require('./233d77ecf0781f44985f684f70e316d0.js'),y=require('./72653d4b93cdd7443296229431a7aa9a.js'),z=require('./d3ce001ab1e75959382f6a7e0156dd17.js'),A=require('./84b183688a46c9e2626d3e6f83365e13.js'),B=require('./84858de8a097c9cf84ff2c2e3d86e2a9.js'),C=require('./bcb48ae14d243711d3b31cb0f602d209.js'),D=require('./92320c1386e6db6a6f2556736a9bc280.js'),E=require('./cf7d67b3fb34d8276deb78291c77dfff.js'),{checkFileMd5Signature:F}=require('./c3cff51847d72be47e57256891296359.js'),G=D.WeappApplication,H=D.WeappCode,I='darwin'===process.platform,J=global.appConfig.isBeta?I?'beta_darwin':'x64'===process.arch?'beta_x64':'beta_ia32':I?'darwin':'x64'===process.arch?'x64':'ia32',K=parseInt(global.appVersion.replace(/\./g,'')),L=`${w.downloadRedirectURL}?os=${I?'darwin':'win'}`,M=require('./4102b43ad51182743111f5d5e1fc5b46.js'),N=600000,O={INSTALLER:0,BIGCODE:1,SMALLCODE:2};var P=!1,Q=!1,R=null,S=null,T=null;module.exports={loop:k,checkNeedUpdate:async function(){try{let a=await m({force:!0});if(e(a))return f(a.version)}catch(a){}},resetAlreadyNotify:function(){global.isDevWindow||R||k(),Q=!1}}}(require('lazyload'),require);