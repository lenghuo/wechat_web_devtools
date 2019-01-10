'use strict';!function(require,directRequire){function a(...a){return function(){this.enabled&&g[a[0]].apply(this,a.slice(1))}}function b(){return[{label:h.config.MENU_TITLE_APP,submenu:[{label:h.config.MENU_SWITCH_ACCOUNT,click:a('switchAccount'),shouldEnabled:'!inLoginWindow'},{type:'separator'},{label:h.config.MENU_ABOUT,click:a('about')},{label:h.config.MENU_CHECK_UPDATE,click:a('checkUpdate')},{label:h.config.MENU_BBS,click:a('BBS')},{label:h.config.MENU_DOC,click:a('Doc')},{type:'separator'},{label:h.config.MENU_INSPECT,submenu:[{label:h.config.MENU_INSPECT_APP,click:a('inspectApp')}]},{label:h.config.MENU_SWITCH_DEV_MODE,submenu:[{type:'checkbox',label:h.config.MENU_WEB_DEV,click:a('switchToWebDev'),shouldEnabled:'isMiniProgramDev'},{type:'checkbox',label:h.config.MENU_MINI_PROGRAM_DEV,click:a('switchToMiniProgramDev'),shouldEnabled:'isWebDev'}],shouldEnabled:'isMiniProgramDev || isWebDev'},{label:h.config.MENU_EXIT,modifiers:k,key:'q',click:a('exit')}]},{label:h.config.MENU_TITLE_EDIT,submenu:[{label:h.config.MENU_UNDO,key:'z',modifiers:k,click:a('undo')},{label:h.config.MENU_REDO,key:'z',modifiers:'shift+'+k,click:a('redo')},{type:'separator'},{label:h.config.MENU_COPY,key:'c',modifiers:k,click:a('copy')},{label:h.config.MENU_CUT,key:'x',modifiers:k,click:a('cut')},{label:h.config.MENU_PASTE,key:'v',modifiers:k,click:a('paste')},{label:h.config.MENU_SELECT_ALL,key:'a',modifiers:k,click:a('selectAll')}]},{label:h.config.MENU_TITLE_TOOLS,submenu:[{label:h.config.MENU_TITLE_BACK,key:'left',modifiers:k,click:a('back')},{label:h.config.MENU_TITLE_FORWARD,key:'right',modifiers:k,click:a('forward')},{label:h.config.MENU_REFRESH,key:'r',modifiers:k,click:a('refresh')},{label:h.config.MENU_TITLE_LOCATION,key:'l',modifiers:k,click:a('focusAddress')}]},{label:h.config.MENU_TITLE_SETTINGS,submenu:[{label:h.config.MENU_APPEARANCE_SETTINGS,click:a('openAppearanceSettings')},{label:h.config.MENU_PROXY_SETTINGS,modifiers:k,key:',',click:a('openProxySettings')},{label:h.config.MENU_LANGUAGE_SETTINGS,submenu:[{type:'checkbox',checked:h.systemLocale===h.getSourceLocale(),label:h.config.MENU_SYSTEM_LANGUAGE,click:a('changeLocale',h.systemLocale)},...h.supportedLanguages.map(({locale:b,dec:c})=>({type:'checkbox',checked:b===h.getSourceLocale(),label:c,click:a('changeLocale',b)}))]}]}]}function c(){const a=b(),c=a[0];return a.shift(),a.shift(),a.push(c),a[2].submenu=a[2].submenu.slice(7),a}function d(a,b){for(const c of b)if(c.submenu){const b=new nw.Menu;d(b,c.submenu);const e=new nw.MenuItem({label:c.label,submenu:b});e.enabled=!c.shouldEnabled||i.evaluate(c.shouldEnabled),a.append(e),c.instance=e}else{const b={};for(const a in c)b[a]=c[a];const d=new nw.MenuItem(b);d.enabled=!b.shouldEnabled||i.evaluate(b.shouldEnabled),a.append(d),c.instance=d}}function e(a){const b=new nw.Menu({type:'menubar'});b.createMacBuiltin('temp',{hideEdit:!1,hideWindow:!0}),b.items[1].label=h.config.MENU_TITLE_EDIT;const c=b.items[1].submenu.items[0];b.items[1].submenu.removeAt(0),c.label=h.config.MENU_UNDO;const d=b.items[1].submenu.items[0];b.items[1].submenu.removeAt(0),d.label=h.config.MENU_REDO;const e=b.items[1].submenu.items[2];b.items[1].submenu.removeAt(2),e.label=h.config.MENU_COPY;const f=b.items[1].submenu.items[1];b.items[1].submenu.removeAt(1),f.label=h.config.MENU_CUT;const g=b.items[1].submenu.items[1];b.items[1].submenu.removeAt(1),g.label=h.config.MENU_PASTE;const i=a.items[1].submenu;i.removeAt(0),i.insert(c,0),i.removeAt(1),i.insert(d,1),i.removeAt(3),i.insert(e,3),i.removeAt(4),i.insert(f,4),i.removeAt(5),i.insert(g,5)}const f=require('./0634ee2ebd3e560d9d4804ecc960160f.js'),g=require('./25d0beb4120ce2acafb4e03b95444fda.js'),h=require('./common/locales/index.js'),i=require('./41f4eba9fb17703b7d61eca8b05aa076.js'),j='darwin'===process.platform,k=j?'cmd':'ctrl',l=new Map;module.exports={set:()=>{},init:(a)=>{a||(a=global.Win);const f=new nw.Menu({type:'menubar'}),g=j?b():c();l.set(a,{menu:f,structure:g}),d(f,g),j&&e(f),a.menu=f},update:(a)=>{a||(a=global.Win);const b=l.get(a);if(!b)return;const c=b.structure,d=(a)=>{for(const b of a){if(b.instance){if(b.shouldEnabled){const a=b.instance.enabled,c=i.evaluate(b.shouldEnabled);a!==c&&(b.instance.enabled=c)}if(b.shouldChecked){const a=b.instance.checked,c=i.evaluate(b.shouldChecked);a!==c&&(b.instance.checked=c)}}b.submenu&&(b.instance?b.instance.enabled&&d(b.submenu):d(b.submenu))}};d(c)}}}(require('lazyload'),require);