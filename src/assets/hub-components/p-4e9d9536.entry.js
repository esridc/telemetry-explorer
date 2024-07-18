import{r as t,c as i,h as e,F as s,H as r,a as o}from"./p-d4ba4c14.js";import{b as l}from"./p-fd260f2d.js";import{i as a}from"./p-be5c5009.js";import{b as n}from"./p-040978e4.js";import{d as c}from"./p-8cf4bd83.js";import{i as p}from"./p-6dac87c8.js";import{g as d}from"./p-a8fd3d32.js";import{h}from"./p-b1a98ae3.js";import{d as m}from"./p-97274a47.js";import"./p-dfe5a97d.js";import"./p-796574a4.js";import"./p-9b205605.js";import"./p-1458dcfd.js";import"./p-b728aff4.js";import"./p-783242bc.js";import"./p-dd26efbb.js";import"./p-d1b12a9c.js";import"./p-dcdf7b57.js";import"./p-a0deb8c6.js";import"./p-6dcae6cd.js";import"./p-637ea136.js";import"./p-3f64a9d9.js";import"./p-377e1b5e.js";import"./p-2acb70a6.js";import"./p-903ef8af.js";import"./p-52612356.js";import"./p-af59e67b.js";import"./p-85d6867e.js";import"./p-6f931af6.js";import"./p-56b73d71.js";import"./p-3904125b.js";import"./p-b295a5ae.js";import"./p-cea8413b.js";import"./p-d763eacf.js";import"./p-ad325ed1.js";import"./p-8e7f4c22.js";import"./p-69555c48.js";import"./p-8dbea197.js";import"./p-7202c430.js";import"./p-75d6da59.js";import"./p-90dc0f6f.js";import"./p-59fd2498.js";import"./p-16a95e5b.js";import"./p-e43616ff.js";import"./p-ca048216.js";import"./p-4a14259a.js";import"./p-235bb6ee.js";import"./p-c836a9b6.js";import"./p-dafb2329.js";import"./p-992b9d10.js";import"./p-895b662f.js";import"./p-31aebb8c.js";import"./p-aa262d60.js";import"./p-ea6de7f6.js";import"./p-24ecdf64.js";import"./p-3363f483.js";import"./p-87582fe0.js";import"./p-30a7cbb2.js";const u=class{constructor(e){t(this,e),this.arcgisConfigurationEditorFieldInputChange=i(this,"arcgisConfigurationEditorFieldInputChange",7),this.hubTelemetry=i(this,"hubTelemetry",7),this.handleHubTelemetry=t=>{t.stopPropagation(),this.hubTelemetry.emit(Object.assign({details:this.params.telemetryLabel},t.detail))},this.params=void 0,this.styles=void 0,this.context=void 0,this.isOpen=!1,this.gallerySelection=void 0,this.selectedEntities=void 0,l(this,"handleGalleryPickerSelectionUpdate","handleGalleryPickerOpen","handleGalleryPickerClose","handleGallerySelectionRemove")}async fetchEntities(){const t=this.convertEntityIdsToGallerySelection();this.selectedEntities=this.context&&await this.fetchGallerySelectionEntities(t)}async componentWillLoad(){await this.fetchEntities(),this.intl=await a.loadIntlForComponent(this.element)}get targetEntity(){var t,i;return(null===(i=null===(t=this.params.uiSchema)||void 0===t?void 0:t.options)||void 0===i?void 0:i.targetEntity)||"item"}get limit(){return this.params.schema.maxItems||100}get canReorder(){var t,i,e,s;let r=!0;return p(null===(i=null===(t=this.params.uiSchema)||void 0===t?void 0:t.options)||void 0===i?void 0:i.canReorder)||(r=null===(s=null===(e=this.params.uiSchema)||void 0===e?void 0:e.options)||void 0===s?void 0:s.canReorder),r&&1!==this.limit&&this.selectedEntities.length>1}get pickerTitle(){var t,i;return(null===(i=null===(t=this.params.uiSchema)||void 0===t?void 0:t.options)||void 0===i?void 0:i.pickerTitle)?d(this.params.uiSchema,this.params.t,"options.pickerTitle"):this.intl.t("selectContent")}convertEntityIdsToGallerySelection(){return{[this.targetEntity]:this.params.value}}convertGallerySelectionToEntityIds(t){return t[this.targetEntity]}handleGalleryPickerOpen(){this.isOpen=!0}handleGalleryPickerClose(){this.isOpen=!1}async handleGalleryPickerSelectionUpdate(t){this.selectedEntities=await this.fetchGallerySelectionEntities(t.detail);const i=this.convertGallerySelectionToEntityIds(t.detail);this.arcgisConfigurationEditorFieldInputChange.emit(i),this.isOpen=!1}async fetchGallerySelectionEntities(t){var i;const e=n(t,this.targetEntity),s={requestOptions:null===(i=this.context)||void 0===i?void 0:i.hubRequestOptions};let r=[];try{({results:r}=await h(e,s));const i=t[this.targetEntity];r=r.slice().sort(((t,e)=>(i.includes(t.id)?i.indexOf(t.id):1/0)-(i.includes(e.id)?i.indexOf(e.id):1/0)))}catch(t){console.error("Unable to fetch selected entities:",t)}finally{this.gallerySelection=t}return r}handleGallerySelectionRemove(t){const i=Number(t.target.getAttribute("data-index")),{id:e}=this.selectedEntities[i];this.selectedEntities=[...this.selectedEntities.slice(0,i),...this.selectedEntities.slice(i+1)],this.removeEntityFromGallerySelection(e);const s=this.convertGallerySelectionToEntityIds(this.gallerySelection);this.arcgisConfigurationEditorFieldInputChange.emit(s),this.hubTelemetry.emit(Object.assign(Object.assign({},c.dictionary.category.interaction.action.remove.label[{item:"content",group:"groups",user:"users"}[this.targetEntity]||"content"]),{details:this.params.telemetryLabel,count:this.selectedEntities.length}))}removeEntityFromGallerySelection(t){this.gallerySelection[this.targetEntity]=this.gallerySelection[this.targetEntity].filter((i=>i!==t))}handleSelectEntitiesOrderChange(t){this.gallerySelection[this.targetEntity]=t.detail,this.selectedEntities=this.gallerySelection[this.targetEntity].reduce(((t,i)=>(this.selectedEntities.forEach((e=>{e.id===i&&t.push(e)})),t)),[]);const i=this.convertGallerySelectionToEntityIds(this.gallerySelection);this.arcgisConfigurationEditorFieldInputChange.emit(i)}renderSelectedEntities(t){return e("calcite-value-list",{class:"gallery-picker__selected-entities","drag-enabled":this.canReorder},t.map(((t,i)=>this.renderEntity(t,i))))}getTypeIcon(t){return t?m(t):"file"}renderActions(t,i){var s,r,o,l;const a=[];if(null===(r=null===(s=this.params.uiSchema)||void 0===s?void 0:s.options)||void 0===r?void 0:r.linkTarget){const s=t.links[null===(l=null===(o=this.params.uiSchema)||void 0===o?void 0:o.options)||void 0===l?void 0:l.linkTarget];s&&a.push(e("calcite-link",{href:s,rel:"noreferrer",slot:"actions-end",target:"_blank"},e("calcite-action",{"data-index":i,icon:"launch",label:this.intl.t("launch"),text:""})))}return a.push(e("calcite-action",{"data-index":i,icon:"x-circle",label:this.intl.t("remove"),onClick:this.handleGallerySelectionRemove,slot:"actions-end",text:""})),a}renderEntity(t,i){const{updatedDate:s,owner:r,id:o,name:l,type:a}=t;return e("calcite-value-list-item",{"data-index":i,description:`${r} | ${this.intl.t("updated")} ${s.toLocaleDateString()}`,key:o,label:l,nonInteractive:!0,value:o},e("calcite-icon",{icon:this.getTypeIcon(a),scale:"l",slot:"actions-start"}),this.renderActions(t,i))}renderGalleryPickerButton(){return e(s,null,e("calcite-button",{appearance:"outline-fill",class:"gallery-picker__select",color:"blue",onClick:this.handleGalleryPickerOpen,round:!0},this.pickerTitle))}renderGalleryPicker(){var t,i,s,r,o,l;return e("arcgis-wormhole",{elAttributes:{unthemed:""}},e("arcgis-hub-gallery-picker",{catalogs:null===(i=null===(t=this.params.uiSchema)||void 0===t?void 0:t.options)||void 0===i?void 0:i.catalogs,context:this.context,facets:null===(r=null===(s=this.params.uiSchema)||void 0===s?void 0:s.options)||void 0===r?void 0:r.facets,gallerySelection:this.gallerySelection,limit:this.limit,modalTitle:this.pickerTitle,onArcgisHubGalleryPickerClose:this.handleGalleryPickerClose,onArcgisHubGalleryPickerSelectionUpdate:this.handleGalleryPickerSelectionUpdate,onHubTelemetry:this.handleHubTelemetry,open:this.isOpen,showSearch:!0,showSelection:null===(l=null===(o=this.params.uiSchema)||void 0===o?void 0:o.options)||void 0===l?void 0:l.showSelection}))}render(){var t,i;return e(r,{"data-element":"gallery-picker-field",style:this.styles},!!(null===(t=this.selectedEntities)||void 0===t?void 0:t.length)&&this.renderSelectedEntities(this.selectedEntities),(!this.selectedEntities||(null===(i=this.selectedEntities)||void 0===i?void 0:i.length)<this.limit)&&this.renderGalleryPickerButton(),this.isOpen&&this.renderGalleryPicker())}static get assetsDirs(){return["locales"]}get element(){return o(this)}static get watchers(){return{context:["fetchEntities"]}}};u.style=".gallery-picker__selected-entities{margin-bottom:1.5rem}calcite-value-list-item calcite-icon:first-child{margin-top:10px;margin-left:0.75rem}calcite-value-list-item{--calcite-font-size--2:var(--calcite-font-size--1);--tw-shadow:var(--twShadowNew, 0 1px 0 var(--calcite-ui-border-3))}calcite-link{display:flex;flex-direction:column;align-items:center;justify-content:center}";export{u as hub_field_input_gallery_picker}