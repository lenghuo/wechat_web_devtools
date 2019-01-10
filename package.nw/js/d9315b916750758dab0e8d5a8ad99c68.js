;!function(require, directRequire){;"use strict";const tslib_1=require("tslib"),React=require("react"),C=require('./56c390e04c10e91a4aa2a2c19d9a885d.js'),report=require('./da7c31daaf542cf1796023d8e344b98a.js'),tools=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),defaultsConfig=require('./5498e660c05c574f739a28bd5d202cfa.js'),TAB=C.SELECT_PROJECT_TAB,locales=require('./common/locales/index.js');let SelectProject=class extends React.Component{constructor(a){super(a),this.switchTab=(a)=>{const b=a.currentTarget.dataset.type;"minicode"===b?this.props.currentTab!==TAB.MINI_CODE&&this.props.selectProjectRequest({tab:TAB.MINI_CODE}):this.props.currentTab!==TAB.PROJECT&&this.props.selectProjectRequest({tab:TAB.PROJECT})},this.manageProjects=()=>{this.props.setProjectManagement({show:!0,type:"project",filter:(a)=>!a.isMiniCode}),report("weapp_manager")},this.openProject=(a)=>{if(this.props.currentProject){this.props.closeProject();const b=a.currentTarget.dataset.projectid;setTimeout(()=>this.props.openProject(b),50)}else this.props.openProject(a.currentTarget.dataset.projectid)},this.createProject=()=>{switch(this.props.mainWindow){case C.MAIN_WINDOW_TYPE.DEV:case C.MAIN_WINDOW_TYPE.WEB_DEBUGGER:{this.props.createProjectOpen();break}default:this.props.createProjectRequest();}},this.compareProject=(c,a)=>{try{return(this.props.projects[a].accessTime||1)-(this.props.projects[c].accessTime||1)}catch(a){return-1}},this.handleMaskClick=()=>{this.setState({showMask:!1})},this.state={showMask:!1,focus:""},this.setupController()}componentDidMount(){this.resize()}setupController(){}resize(){try{const a=this.props.win?this.props.win:global.Win;this.props.detach||(a.setResizable(!0),a.resizeTo(C.SIZE.SELECT_PROJECT.WIDTH,C.SIZE.SELECT_PROJECT.HEIGHT),a.setResizable(!1))}catch(a){}}cancel(){this.props.cancel()}manageMiniCode(){this.props.setProjectManagement({show:!0,type:"minicode",filter:(a)=>a.isMiniCode}),report("weapp_manager")}createMiniCode(){switch(this.props.mainWindow){case C.MAIN_WINDOW_TYPE.DEV:case C.MAIN_WINDOW_TYPE.WEB_DEBUGGER:{this.props.createMiniCodeOpen("create");break}default:this.props.createMiniCodeRequest("create");}}importMiniCode(){switch(this.props.mainWindow){case C.MAIN_WINDOW_TYPE.DEV:case C.MAIN_WINDOW_TYPE.WEB_DEBUGGER:{this.props.createMiniCodeOpen("import");break}default:this.props.createMiniCodeRequest("import");}}handleQuitClick(){tools.quit()}focusProject(a){const b=a.currentTarget.dataset.projectid;this.setState({focus:b})}jumpMiniCodeDoc(){nw.Shell.openExternal("https://developers.weixin.qq.com/miniprogram/dev/devtools/minicode.html")}render(){const a=[],b=[];Object.keys(this.props.projects).sort(this.compareProject).forEach((c)=>{const d=this.props.projects[c];if(d.isMiniCode){const a=d.attr&&d.attr.appImageUrl||defaultsConfig.default_weapp_header;b.push(React.createElement("div",{className:this.state.focus===d.projectid?"snippet-item snippet-item-active":"snippet-item",key:c,"data-projectid":d.projectid,onClick:this.openProject},React.createElement("div",{className:"snippet-hd"},React.createElement("img",{className:"snippet-avatar",src:a})),React.createElement("div",{className:"snippet-bd"},React.createElement("h4",{className:"snippet-name"},decodeURIComponent(d.projectname)),React.createElement("p",{className:"snippet-desc"},d.projectpath)),React.createElement("div",{className:"snippet-ft"})))}else{const b=d.attr&&d.attr.appImageUrl||defaultsConfig.default_weapp_header,e={backgroundSize:"cover"};this.props.covers[d.projectid]?e.backgroundImage=`url('${this.props.covers[d.projectid]}')`:e.backgroundColor="#EDEDED",a.push(React.createElement("div",{className:this.state.focus===d.projectid?"project-item project-item-active":"project-item",key:c,"data-projectid":d.projectid,onClick:this.openProject},React.createElement("div",{className:"project-item-cover",style:e}),React.createElement("div",{className:"project-logo"},React.createElement("img",{src:b})),React.createElement("div",{className:"project-info"},React.createElement("h4",null,decodeURIComponent(d.projectname)),React.createElement("p",null,d.projectpath))))}});const c=this.props.detach?{display:"none"}:{},d={WebkitAppRegion:"no-drag"};return React.createElement("div",null,this.state.showMask?React.createElement("div",{className:"ui-mask ui-mask-transparent",onClick:this.handleMaskClick}):null,React.createElement("div",{className:"dashboard"},React.createElement("div",{className:"dashboard-commands",style:{WebkitAppRegion:"drag"}},React.createElement("div",{className:"dashboard-navigator",style:c},React.createElement("a",{style:d,onClick:this.props.cancel},React.createElement("i",{className:"ui-icon-back"}))),React.createElement("div",{className:"dashboard-brand"},React.createElement("div",{className:"dashboard-logo"},React.createElement("i",{className:"ui-icon-mini-app"})),React.createElement("h3",{className:"dashboard-caption"},locales.config.MINI_PROGRAM_PROJECT),React.createElement("p",{className:"dashboard-subtitle"},locales.config.MINI_PROGRAM_PROJECT_DEBUG)),React.createElement("div",{className:"dashboard-content"},React.createElement("section",{className:"dashboard-content-section"},React.createElement("h4",null,locales.config.HELP),React.createElement("ul",null,React.createElement("li",{style:d},React.createElement("a",{onClick:this.props.openDoc},locales.config.MINI_PROGRAM_DEV_DOC)),React.createElement("li",{style:d},React.createElement("a",{onClick:this.props.openBBS},locales.config.MINI_PROGRAM_DEV_BBS))))),React.createElement("div",{className:"dashboard-command-ft"},React.createElement("div",{className:"luncher-account",style:d},React.createElement("div",{className:"luncher-account-avatar"},React.createElement("img",{src:this.props.user?this.props.user.headUrl:""})),React.createElement("div",{className:"luncher-account-name",onClick:this.props.logout},React.createElement("p",null,locales.config.MENU_SWITCH_ACCOUNT),React.createElement("i",{className:"ui-icon-arrow-right-o"}))))),React.createElement("div",{className:"dashboard-splash"},React.createElement("div",{className:"dashboard-splash-bd"},React.createElement("div",{className:"tab"},React.createElement("div",{className:"tab-hd"},React.createElement("div",{className:"tab-hd-item"+(this.props.currentTab===TAB.PROJECT?" tab-hd-item-active":""),"data-type":"project",onClick:this.switchTab},locales.config.PROJECT),React.createElement("div",{className:"tab-hd-item"+(this.props.currentTab===TAB.MINI_CODE?" tab-hd-item-active":""),"data-type":"minicode",onClick:this.switchTab},locales.config.CODE_SEGMENT)),React.createElement("div",{className:"tab-bd"},React.createElement("div",{className:"tab-content"+(this.props.currentTab===TAB.PROJECT?" tab-content-active":"")},React.createElement("div",{className:"miniapps"},React.createElement("div",{className:"miniapp-list"},a),React.createElement("div",{className:"miniapp-opr"},React.createElement("div",{className:"ui-flex"},React.createElement("div",{className:"ui-flex-item"},React.createElement("a",{style:d,onClick:this.manageProjects},locales.config.PROJECT_MANAGE)),React.createElement("div",null,React.createElement("a",{style:d},React.createElement("i",{className:"ui-icon-plus",onClick:this.createProject}))))))),React.createElement("div",{className:"tab-content"+(this.props.currentTab===TAB.MINI_CODE?" tab-content-active":"")},React.createElement("div",{className:"snippets"},React.createElement("div",{className:"snippet-list"},b,0<b.length?null:React.createElement("div",{className:"snippet-item-empty"},React.createElement("p",null,locales.config.CODE_SEGMENT_DETAIL," ",React.createElement("a",{onClick:this.jumpMiniCodeDoc,href:"javascript:;"},locales.config.DOC_URL)))),React.createElement("div",{className:"snippet-opr"},React.createElement("div",{className:"ui-flex"},React.createElement("div",{className:"ui-flex-item"},React.createElement("a",{style:d,onClick:this.manageMiniCode.bind(this)},locales.config.CODE_SEGMENT_MANAGE)),React.createElement("div",null,React.createElement("a",{style:d,onClick:this.createMiniCode.bind(this)},locales.config.CODE_SEGMENT_NEW),React.createElement("span",{className:"snippet-opr-sep"}),React.createElement("a",{style:d,onClick:this.importMiniCode.bind(this)},locales.config.CODE_SEGMENT_IMPORT))))))))))))}};SelectProject=tslib_1.__decorate([locales.mixin],SelectProject),module.exports=SelectProject;
;}(require("lazyload"), require);
