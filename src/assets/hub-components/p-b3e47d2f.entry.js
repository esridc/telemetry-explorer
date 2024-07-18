import{r as t,c as e,h as i,H as s,a as o}from"./p-d4ba4c14.js";import{i as r}from"./p-be5c5009.js";import{U as a}from"./p-903ef8af.js";import{h}from"./p-cea8413b.js";import"./p-dcdf7b57.js";import"./p-637ea136.js";import"./p-d763eacf.js";import"./p-377e1b5e.js";import"./p-ad325ed1.js";const n=class{constructor(i){t(this,i),this.arcGisNotebookError=e(this,"arcGisNotebookError",7),this.itemId=void 0,this.token=void 0,this.portalUrl="https://www.arcgis.com/sharing/rest",this.notebookTitle=void 0,this.allowScripts=!1,this.notebookPreview=void 0,this.authentication=void 0,this.isLoading=!0,this.error=void 0}onItemIdChanged(){this.fetchPreview()}onTokenChanged(){this.fetchPreview()}onPortalUrlChanged(){this.fetchPreview()}onPreviewChanged(t,e){t!==e&&this.updateIframe()}async componentWillLoad(){return this.intl=await r.loadIntlForComponent(this.el),this.fetchPreview()}componentShouldUpdate(t,e,i){return!["portalUrl","itemId","token","notebookPreview"].includes(i)}get requestOpts(){return{fileName:"notebook_preview.json",readAs:"json",authentication:new a({portal:this.portalUrl,token:this.token}),httpMethod:"GET"}}get sandboxSettings(){const t=["allow-same-origin"];return this.allowScripts&&t.push("allow-scripts"),t.join(" ")}reset(){this.notebookPreview="",this.isLoading=!0,this.error=null}updateIframe(){var t;const e=null===(t=this.iFrameEl)||void 0===t?void 0:t.contentWindow.document;e&&(e.write(this.notebookPreview),e.close())}fetchPreview(){this.reset(),h(this.itemId,this.requestOpts).then((t=>{this.notebookPreview=t.html})).catch((t=>{this.error=this.intl.t("messageFetchError"),this.arcGisNotebookError.emit(`Error in arcgis-notebook fetchPreview: ${t.message}`)})).finally((()=>{this.isLoading=!1}))}setIframeEl(t){this.iFrameEl=t}render(){return i(s,null,i("calcite-notice",{dir:"ltr",kind:"danger",open:!!this.error,scale:"m",width:"half"},i("div",{slot:"title"},this.error)),i("calcite-loader",{hidden:!this.isLoading,label:this.intl.t("labelLoading")}),i("iframe",{ref:this.setIframeEl.bind(this),sandbox:this.sandboxSettings,title:this.notebookTitle}))}static get assetsDirs(){return["locales"]}get el(){return o(this)}static get watchers(){return{itemId:["onItemIdChanged"],token:["onTokenChanged"],portalUrl:["onPortalUrlChanged"],notebookPreview:["onPreviewChanged"]}}};n.style=":host{display:block;height:100%;width:100%}iframe{height:100%;width:100%;border-style:none}calcite-notice[active],calcite-loader[active]{margin-top:1rem}";export{n as arcgis_notebook}