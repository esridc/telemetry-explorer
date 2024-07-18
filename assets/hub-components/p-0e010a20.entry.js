import{r as t,c as i,h as e,H as s}from"./p-d4ba4c14.js";import{r as n,s as o}from"./p-9ead1876.js";import{s as r,g as a}from"./p-81a9bee2.js";import{A as c}from"./p-c5919bc3.js";import{U as p}from"./p-903ef8af.js";import{b as l}from"./p-783242bc.js";import"./p-859c5360.js";import"./p-2acb70a6.js";import"./p-796574a4.js";import"./p-b295a5ae.js";import"./p-8e7f4c22.js";import"./p-d763eacf.js";import"./p-377e1b5e.js";import"./p-637ea136.js";import"./p-dcdf7b57.js";import"./p-008d72ef.js";import"./p-b728aff4.js";import"./p-14a66e4a.js";import"./p-6d4e51c6.js";import"./p-24ecdf64.js";import"./p-dd26efbb.js";import"./p-d1b12a9c.js";import"./p-a0deb8c6.js";import"./p-6dcae6cd.js";import"./p-3f64a9d9.js";const d=(t,i)=>{r(t.context),i&&o(t)},h=class{constructor(e){t(this,e),this.signInCompleted=i(this,"arcgisAppIdentitySignedIn",7),this.signOutCompleted=i(this,"arcgisAppIdentitySignedOut",7),this.clientId=void 0,this.redirectUri=void 0,this.popup=!0,this.persist=!0,this.features=void 0,this.portal="https://www.arcgis.com",this.mode="html",this.contextManager=void 0}async portalUpdated(){this.contextManager=await c.create({portalUrl:this.portal}),d(this.contextManager,this.persist)}get sharingApiUrl(){return`${this.portal}/sharing/rest`}async onSignInHandler(t){console.info(`app-identity: Caught start signin event. Using ${this.portal}, ${this.clientId}`,t);const i=await p.beginOAuth2({clientId:this.clientId,redirectUri:this.redirectUri,portal:this.sharingApiUrl});this.contextManager=await c.create({portalUrl:this.portal,authentication:i}),d(this.contextManager,this.persist),console.info(`app-identity: sign-in complete: emitting ArcGISContext ${this.contextManager.id}`),this.signInCompleted.emit(this.contextManager.context)}async onSignOutHandler(){console.info(`app-identity: sign-out for ${this.contextManager.id}`),this.contextManager.clearAuthentication(),d(this.contextManager,this.persist),console.info(`app-identity: sign-out complete. ${this.contextManager.id} isAuthenticated? ${this.contextManager.context.isAuthenticated}`),this.signOutCompleted.emit(this.contextManager.context)}componentWillLoad(){console.info("app-identity: componentWillLoad"),"html"!==this.mode||this.contextManager||(console.info("app-identity: creating ArcGISContext based on attrs..."),this._initContextManager(),console.info("app-identity: created."))}componentWillRender(){var t;console.info("app-identity: componentWillRender");const i=null===(t=this.contextManager)||void 0===t?void 0:t.context;(null==i?void 0:i.isAuthenticated)&&"html"===this.mode&&(console.info("app-identity: rendered, emitting signInCompleted w ArcGISContext"),this.signInCompleted.emit(i))}componentDidRender(){var t;console.info("app-identity: componentDidRender");const i=null===(t=this.contextManager)||void 0===t?void 0:t.context;(null==i?void 0:i.isAuthenticated)&&"html"===this.mode&&(console.info("app-identity: rendered, emitting signInCompleted w ArcGISContext"),this.signInCompleted.emit(i))}render(){return e(s,null,e("slot",null))}async _initContextManager(){const t=a(),i=t&&await c.create({authentication:t.session,portalUrl:t.portalUrl,portal:t.portal,currentUser:t.currentUser,trustedOrgs:t.trustedOrgs,trustedOrgIds:t.trustedOrgIds,properties:t.properties,serviceStatus:t.serviceStatus})||(this.persist?await n():void 0);this.contextManager=i||await c.create({portalUrl:this.portal}),d(this.contextManager,this.persist)}static get watchers(){return{portal:["portalUpdated"]}}};h.style=":host{display:block}";const m={qa:{clientId:"Lmafo8GvkSnPwbek",portal:"https://qaext.arcgis.com"},dev:{clientId:"7zaXMmruGTX0FMzR",portal:"https://devext.arcgis.com"},prod:{clientId:"bHypqtyn5UaaJ1Zt",portal:"https://www.arcgis.com"}},g=class{constructor(i){t(this,i),this.onChangeEnv=t=>{this._environment=t.target.value},this.pageTitle=void 0,this._environment=void 0}get _context(){return a()}componentWillLoad(){this._environment=(t=>{const i=null==t?void 0:t.environment;return i?"production"===i?"prod":i.replace("ext",""):void 0})(this._context)||"qa"}get identityConfig(){return m[this._environment]}get isGhPages(){return window.location.pathname.includes("/harnesses")}get redirectUri(){const t=new URL(window.location.origin);return t.pathname="/html/redirect.html",this.isGhPages&&(t.pathname="/harnesses/html/redirect.html"),t.toString()}get logoUri(){return`${this.homeUri}build/assets/ArcGIS_Hub_Hexagon_256.png`}get homeUri(){let t="/";return this.isGhPages&&(t="/harnesses/"),t}signIn(){const t=new CustomEvent("arcgisAppIdentityStartSignIn");document.dispatchEvent(t)}signOut(){const t=new CustomEvent("arcgisAppIdentityStartSignOut");document.dispatchEvent(t)}onSignedIn(t){var i;if(t.detail.session.clientId!==(null===(i=this.identityConfig)||void 0===i?void 0:i.clientId)){t.stopPropagation();const i=new CustomEvent("arcgisAppIdentityStartSignOut");document.dispatchEvent(i)}}renderAuth(){var t,i;const s=null===(t=this._context)||void 0===t?void 0:t.currentUser,n=null===(i=this._context)||void 0===i?void 0:i.session,o=[];return o.push(e("calcite-chip-group",{label:"environment","selection-mode":"single",slot:"content-end"},Object.keys(m).map((t=>e("calcite-chip",{key:t,onCalciteChipSelect:this.onChangeEnv,selected:t===this._environment,value:t},t))))),s?(o.push(e("calcite-navigation-user",{"full-name":s.fullName,slot:"user",thumbnail:s.thumbnail&&l(n.portal,s,n.token),"user-id":s.id,username:s.username})),o.push(e("calcite-action",{onClick:this.signOut,scale:"l",slot:"user",text:"Sign Out","text-enabled":!0}))):o.push(e("calcite-action",{onClick:this.signIn,scale:"l",slot:"user",text:"Sign In","text-enabled":!0})),o}render(){return e(s,null,e("calcite-navigation",{slot:"header"},e("calcite-navigation-logo",{heading:"Home",href:this.homeUri,slot:"navigation-action",thumbnail:this.logoUri}),e("calcite-navigation-logo",{heading:this.pageTitle,slot:"logo"}),this.renderAuth()),e("arcgis-app-identity",Object.assign({},this.identityConfig,{"redirect-uri":this.redirectUri})))}};g.style="calcite-navigation{position:fixed;top:0;left:0;right:0;z-index:1}calcite-chip{cursor:pointer}";export{h as arcgis_app_identity,g as harness_header}