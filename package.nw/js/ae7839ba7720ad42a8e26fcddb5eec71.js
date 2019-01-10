'use strict';!function(require,directRequire){const a=require('react'),b=require('moment'),c=require('redux'),d=require('./3b5f8e2469c474c8d433c1c6926d8999.js'),e=require('./fc137838572a83604db39acff8e909e0.js'),f=require('./cc2c2970ff81ae4a83123e81ee123da2.js'),g=require('./eadce02c750c875a10680bcfedadec88.js'),h=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),i=require('./25d0beb4120ce2acafb4e03b95444fda.js'),j=require('./common/locales/index.js'),{connect:k}=require('react-redux'),l=[['request','request_domain'],['socket','ws_request_domain'],['upload','upload_domain'],['download','download_domain']];class m extends a.Component{constructor(a){super(a),this.state={lazyLoaded:!!a.show}}componentWillReceiveProps(a){a.show&&this.setState({lazyLoaded:!0})}componentDidMount(){this._cancalLocaleListener=j.onChangeLocale(()=>this.forceUpdate())}componentWillUnmount(){this._cancalLocaleListener()}createNetworkingDom(b,c){if(!b)return'';const d='prod'===c?j.config.PRODUCTION_ENVIRONMENT:j.config.DEVELOPMENT_ENVIRONMENT;return l.map((c,e)=>{const f=b[c[1]].map((b,d)=>{b=b.toLowerCase();let e;return e='socket'===c[0]?b&&!/wss?\:\/\//.test(b)?`wss://${b}`:b:b&&!/https?\:\/\//.test(b)?`https://${b}`:b,e?a.createElement('p',{className:'ui-flex-item',key:d},e):null});return a.createElement('section',{key:e},a.createElement('div',{className:'meta-item'},a.createElement('label',{htmlFor:'',className:'meta-label'},d,' ',c[0],' ',j.config.DOMAIN_NAME),a.createElement('div',{className:'meta-value ui-flex-item',style:{userSelect:'initial'}},a.createElement('div',{className:'ui-flex ui-desc'},a.createElement('p',{className:'ui-flex-item'},f)))))})}createCvmDom(c,e){if(!c)return'';const f='prod'===e?j.config.PRODUCTION_ENVIRONMENT_INFORMATION:j.config.DEVELOPMENT_ENVIRONMENT_INFORMATION;return a.createElement('section',null,a.createElement('div',{className:'meta-item'},a.createElement('label',{htmlFor:'',className:'meta-label'},f),a.createElement('div',{className:'meta-value ui-flex-item',style:{userSelect:'initial'}},a.createElement('div',{className:'ui-flex ui-desc'},a.createElement('p',{className:'ui-flex-item'},j.config.CLOUD_SERVICE_STATUS,'\uFF1A   ',1===c.service_running?j.config.RUNNING:j.config.HALTED)),a.createElement('div',{className:'ui-flex ui-desc',style:1===c.service_running?{}:d.displayNone},a.createElement('p',{className:'ui-flex-item'},j.config.LAST_DEPLOY_TIME,'\uFF1A ',b(new Date(1e3*c.deploy_time)).calendar())),a.createElement('div',{className:'ui-flex ui-desc',style:1===c.service_running?{}:d.displayNone},a.createElement('p',{className:'ui-flex-item'},j.config.SERVICE_START_TIME,'\uFF1A ',b(new Date(1e3*c.service_start_time)).calendar())),a.createElement('div',{className:'ui-flex ui-desc',style:1===c.service_running?d.displayNone:{}},a.createElement('p',{className:'ui-flex-item'},j.config.SERVICE_STOP_TIME,'\uFF1A ',b(new Date(1e3*c.service_stop_time)).calendar())))))}onSwitchLanguage(a){try{a.stopPropagation(),i.jumpQCloudPage('https://www.qcloud.com/login/laAccessCallback')}catch(a){}}render(){if(!this.state.lazyLoaded)return null;const b=this.props,c=b.project,d=`tab-content ${b.show?'tab-content-active':''}`,e=c.runtimeAttr&&c.runtimeAttr.qcloud||{},{qcloud_status:f={},qcloud_dev_info:g={},qcloud_product_info:h={}}=e;console.log(e);const i=g.cvm_info,k=g.networking,l=this.createCvmDom(i,'dev'),m=this.createNetworkingDom(k,'dev');let n='Node.js';try{2===parseInt(g.current_language,10)&&(n='PHP')}catch(a){}let o='Node.js';try{2===parseInt(h.current_language,10)&&(o='PHP')}catch(a){}const p=h.cvm_info,q=h.networking,r=this.createCvmDom(p,'prod'),s=this.createNetworkingDom(q,'prod');return a.createElement('div',{className:d},a.createElement('section',null,a.createElement('div',{className:'meta-item'},a.createElement('label',{htmlFor:'',className:'meta-label'},j.config.MINI_PROGRAM_TENCENT_CLOUD_STATUS),a.createElement('div',{className:'meta-value ui-flex-item',style:{userSelect:'initial'}},a.createElement('div',{className:'ui-flex ui-desc'},a.createElement('p',{className:'ui-flex-item'},1===f.open_qc_account?j.config.AUTHORIZED_TENCENT_CLOUD:j.config.UNAUTHORIZED_TENCENT_CLOUD)),a.createElement('div',{className:'ui-flex ui-desc'},a.createElement('p',{className:'ui-flex-item'},1===f.open_develop_env?j.config.OPEN_DEVELOPMENT_ENVIRONMENT:j.config.CLOSE_DEVELOPMENT_ENVIRONMENT,1===f.open_develop_env?`（${n}）`:null,1===f.open_develop_env?a.createElement('a',{onClick:this.onSwitchLanguage.bind(this),style:{marginLeft:'5px',color:'#586c94'}},j.config.SWITCH_LANGUAGE):null)),a.createElement('div',{className:'ui-flex ui-desc'},a.createElement('p',{className:'ui-flex-item'},1===f.open_product_env?j.config.OPEN_PRODUCTION_ENVIRONMENT:j.config.CLOSE_PRODUCTION_ENVIRONMENT,1===f.open_product_env?`（${o}）`:null))))),r,s,l,m)}}module.exports=k((a)=>{const b=a.info.projectInfo||{},c=a.project.current||{};return{show:'qcloud'===b.selected,project:c,qcloud:c.qcloud}},()=>({}))(m)}(require('lazyload'),require);