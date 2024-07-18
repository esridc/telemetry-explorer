import{r as t,c as e,h as i,F as o,H as n,a as s}from"./p-d4ba4c14.js";import{i as r}from"./p-be5c5009.js";import"./p-d8c815da.js";import"./p-4c02fe5e.js";import"@arcgis/core/kernel.js";import{i as l}from"./p-547e8db0.js";import"./p-2d862ad3.js";import"./p-35a4fa90.js";import"./p-c81c6bb9.js";import{g as a}from"./p-81a9bee2.js";import{U as c}from"./p-13f8e63a.js";import{M as d}from"./p-3311a06c.js";import{c as h,a as p}from"./p-b728aff4.js";import{a as u,b,c as k,d as y}from"./p-a7af8413.js";import"./p-dfe5a97d.js";import"./p-859c5360.js";import"./p-62163eff.js";import"./p-742d0454.js";import"./p-89f8c546.js";import"./p-5955d0c4.js";import"./p-d27eec8d.js";import"./p-b3959606.js";import"./p-09f00a2a.js";import"./p-69965d84.js";import"./p-24698668.js";import"./p-52b2d57a.js";import"./p-5d9da1ee.js";import"./p-a2594b73.js";import"./p-796574a4.js";function f(t){let e=!1;return!t||!u(t)||b(t)||k(t)||y(t)||(e=!0),e}function m(t,e){return Array.isArray(t)?t.reduce(((t,i)=>{if(e(i))if(f(i)){const o=m(i,e);t=[...t,o]}else t=[...t,i];return t}),[]):f(t)?Object.keys(t).reduce(((i,o)=>{if(e(t[o]))if(f(t[o])){const n=m(t[o],e);i[o]=n}else i[o]=t[o];return i}),{}):void 0}function v(t,e){return Array.isArray(t)?t.reduce(((t,i)=>{if(e(i))t=i;else if(f(i)){const o=v(i,e);o&&(t=o)}return t}),void 0):f(t)?e(t)?t:Object.keys(t).reduce(((i,o)=>{if(f(t[o])){const n=v(t[o],e);n&&(i=n)}return i}),void 0):void 0}const g={type:"object",required:["label"],properties:{source:{type:"string",default:"external",enum:["external","content"]},label:{type:"string"},description:{type:"string"},href:{type:"string"},contentId:{type:"array",maxItems:1,items:{type:"string"}},section:{type:"string"}},allOf:[{if:{properties:{source:{const:"external"},href:{minLength:1}}},then:{properties:{href:{format:"uri"}}}},{if:{properties:{source:{const:"external"}}},then:{properties:{href:{minLength:1}}}},{if:{properties:{source:{const:"content"}}},then:{required:["contentId"],properties:{contentId:{not:{enum:[[],void 0]}}}}}]},j={type:"object",required:["label"],properties:{label:{type:"string"},description:{type:"string"}}},E={type:"layout",elements:[{type:"Section",labelKey:"sectionEditor.title",options:{section:"card",actions:[{action:"delete",slot:"footer-start",label:"Delete",kind:"danger",appearance:"outline",round:!0},{action:"cancel",slot:"footer-end",label:"Cancel",appearance:"outline",round:!0},{action:"save",slot:"footer-end",label:"Save",round:!0,disableWhenInvalid:!0}]},elements:[{scope:"/properties/label",labelKey:"sectionEditor.section.label.label",type:"Control",options:{messages:[{type:"ERROR",keyword:"required",icon:!0,labelKey:"sectionEditor.section.label.requiredError"}]}},{scope:"/properties/description",labelKey:"sectionEditor.section.description.label",type:"Control"},{type:"Slot",options:{name:"delete-warning"}}]}]};const C=class{constructor(i){t(this,i),this.arcgisCompositeActionLinksFieldChange=e(this,"arcgisCompositeActionLinksFieldChange",7),this._linkSchema=h(g),this._sectionSchema=h(j),this._sectionUiSchema=h(E),this.findLinkByKey=(t,e=this._links)=>v(e,(e=>(null==e?void 0:e.key)===t)),this.translationFunc=(t,e,i)=>this.intl.t(t,e,i),this.resetUnsavedChanges=()=>{this._unsavedChanges=[...this._links],this._editKey=void 0,this._showDeleteWarning=!1},this.handleAddLink=t=>{const e="section"===t.currentTarget.getAttribute("data-type");this.resetUnsavedChanges();const i=p("link");this._links=[...this._links,e?{key:i,label:"",description:"",children:[]}:{key:i,source:"external",href:"",icon:"",label:"",description:""}],this._unsavedChanges=this._links,this._editKey=i},this.handleEditLink=t=>{const e=this._editKey,i=t.currentTarget.getAttribute("data-key");e===i?this.resetUnsavedChanges():this._editKey=i},this.handleDeleteLink=()=>{var t;(null===(t=this.findLinkByKey(this._editKey).children)||void 0===t?void 0:t.length)?this._showDeleteWarning=!0:(this._links=m(this._links,(t=>(null==t?void 0:t.key)!==this._editKey)),this.resetUnsavedChanges(),this.arcgisCompositeActionLinksFieldChange.emit(this.transformLinksToEmit(this._links)))},this.handleSaveLink=()=>{const t=this.findLinkByKey(this._editKey),e=this.findLinkByKey(this._editKey,this._unsavedChanges);if(this._links=[...this._unsavedChanges],t.section!==e.section){this._links=m(this._links,(t=>(null==t?void 0:t.key)!==this._editKey));const t=this.findLinkByKey(e.section);t?t.children.push(e):this._links.push(e)}this.resetUnsavedChanges(),this.arcgisCompositeActionLinksFieldChange.emit(this.transformLinksToEmit(this._links))},this.handleLinkEditorChange=t=>{const e=t.currentTarget.getAttribute("data-key"),i=h(this._unsavedChanges),o=this.findLinkByKey(e,i);Object.entries(t.detail.values).forEach((([t,e])=>{o[t]=e,"source"===t&&("external"===e?delete o.contentId:"content"===e&&delete o.href)})),this._unsavedChanges=i},this.handleCancelLink=()=>{!this.findLinkByKey(this._editKey).label&&(this._links=m(this._links,(t=>(null==t?void 0:t.key)!==this._editKey))),this.resetUnsavedChanges()},this.handleLinkEditorAction=t=>{const{action:e}=t.detail;"save"===e?this.handleSaveLink():"delete"===e?this.handleDeleteLink():"cancel"===e&&this.handleCancelLink()},this.handleLinkOrderChange=t=>{var e;const i=(null===(e=t.target)||void 0===e?void 0:e.children)||[],o=Array.from(i).map((t=>t.getAttribute("data-key"))),n=[...this._links];n.sort((function(t,e){return o.indexOf(t.key)-o.indexOf(e.key)})),this._links=n,this.arcgisCompositeActionLinksFieldChange.emit(this.transformLinksToEmit(this._links))},this.links=[],this.catalogs=void 0,this.facets=void 0,this.type="block",this._links=void 0,this._editKey=void 0,this._showDeleteWarning=void 0}async componentWillLoad(){this.intl=await r.loadIntlForComponent(this.element),this._links=this.transformLinksForEditor(this.links),this._unsavedChanges=this._links}get _context(){return a()}get _linkUiSchema(){return l(this.intl,(t=>{const e=t.links.reduce(((t,e)=>(e.children&&t.push({value:e.key,label:e.label}),t)),[]);return{type:"Layout",elements:[{type:"Section",labelKey:"linkEditor.title."+("block"===t.type?"block":`button${t.links.findIndex((e=>e.key===t.editKey))+1}`),options:{section:"card",actions:[{action:"delete",slot:"footer-start",label:"Delete",kind:"danger",appearance:"outline",round:!0},{action:"cancel",slot:"footer-end",label:"Cancel",appearance:"outline",round:!0},{action:"save",slot:"footer-end",label:"Save",round:!0,disableWhenInvalid:!0}]},elements:[{scope:"/properties/source",type:"Control",options:{control:"hub-field-input-radio",labels:["{{linkEditor.link.source.external.label:translate}}","{{linkEditor.link.source.content.label:translate}}"]}},{scope:"/properties/label",labelKey:"linkEditor.link.label.label",type:"Control",options:{helperText:{labelKey:`linkEditor.link.label.helperText.${t.type}`},messages:[{type:"ERROR",keyword:"required",icon:!0,labelKey:"linkEditor.link.label.requiredError"}]}},..."block"===t.type?[{scope:"/properties/description",labelKey:"linkEditor.link.description.label",type:"Control",options:{helperText:{labelKey:"linkEditor.link.description.helperText"}}}]:[],{scope:"/properties/href",labelKey:"linkEditor.link.href.label",type:"Control",rule:{effect:c.HIDE,condition:{scope:"/properties/source",schema:{const:"content"}}},options:{messages:[{type:"ERROR",keyword:"minLength",icon:!0,labelKey:"linkEditor.link.href.requiredError"},{type:"ERROR",keyword:"format",icon:!0,labelKey:"linkEditor.link.href.formatError"},{type:"ERROR",keyword:"if",hidden:!0}]}},{scope:"/properties/contentId",labelKey:"linkEditor.link.contentId.label",type:"Control",rule:{effect:c.HIDE,condition:{scope:"/properties/source",schema:{const:"external"}}},options:{control:"hub-field-input-gallery-picker",targetEntity:"item",catalogs:t.catalogs,facets:t.facets,messages:[{type:"ERROR",keyword:"not",icon:!0,labelKey:"linkEditor.link.contentId.requiredError"}]}},..."block"===t.type?[{scope:"/properties/section",labelKey:"linkEditor.link.section.label",type:"Control",options:{control:"hub-field-input-combobox",items:e,selectionMode:"single",disabled:!e.length,placeholder:e.length?"{{linkEditor.link.section.placeholder.notSet:translate}}":"{{linkEditor.link.section.placeholder.noSections:translate}}"}}]:[]]}]}})({catalogs:this.catalogs,facets:this.facets,type:this.type,links:this._links,editKey:this._editKey}))}transformLinksForEditor(t,e){return t.map((t=>{var i;const o=Object.assign(Object.assign({},t),{key:p("link")});return(null===(i=t.children)||void 0===i?void 0:i.length)?o.children=this.transformLinksForEditor(t.children,o):(o.contentId=t.contentId&&[t.contentId],o.source=t.href?"external":"content",e&&(o.section=e.key)),o}))}transformLinksToEmit(t){return h(t).map((t=>{var e,i;const o=Object.assign(Object.assign({},t),{contentId:null===(e=t.contentId)||void 0===e?void 0:e[0]});return(null===(i=t.children)||void 0===i?void 0:i.length)&&(o.children=this.transformLinksToEmit(t.children)),delete o.source,delete o.key,delete o.section,!o.contentId&&delete o.contentId,o}))}renderLinks(t=[]){return i("calcite-sortable-list",{onCalciteListOrderChange:this.handleLinkOrderChange},t.map((t=>t.children?this.renderSection(t):this.renderLink(t))))}renderSection(t){return t.label?i("div",{class:"action-links__section","data-key":t.key},i("calcite-block",{description:t.description,"drag-handle":!0,heading:t.label,key:t.key,open:this._editKey===t.key},t.icon&&i("div",{slot:"icon"},i("calcite-icon",{icon:t.icon})),i("div",{slot:"control"},this.renderBlockActions(t.key)),this._editKey===t.key&&this.renderSectionEditor()),this.renderLinks(t.children)):this.renderSectionEditor()}renderLink(t){const e=t.hasOwnProperty("source");return t.label?i("calcite-block",{"data-key":t.key,description:t.description,"drag-handle":!0,heading:t.label,key:t.key,open:this._editKey===t.key},t.icon&&i("div",{slot:"icon"},i("calcite-icon",{icon:t.icon})),i("div",{slot:"control"},this.renderBlockActions(t.key)),this._editKey===t.key&&this.renderLinkEditor()):e?this.renderLinkEditor():this.renderSectionEditor()}renderBlockActions(t){const e=this.findLinkByKey(t),n=e.contentId?"":e.href;return i(o,null,i("calcite-action",{"data-key":e.key,icon:"pencil",onClick:this.handleEditLink,text:""}),e.children?i("calcite-action",{disabled:!0,icon:"chevron-down",text:""}):i("calcite-link",{href:n,rel:"noreferrer",target:"_blank"},i("calcite-action",{"data-key":e.key,icon:"launch",text:""})))}renderSectionEditor(){const t=this.findLinkByKey(this._editKey);return t&&i("arcgis-configuration-editor",{context:this._context,"data-key":t.key,onArcgisConfigurationEditorChange:this.handleLinkEditorChange,onArcgisConfigurationEditorSectionAction:this.handleLinkEditorAction,schema:this._sectionSchema,t:this.translationFunc,uiSchema:this._sectionUiSchema,values:t},this._showDeleteWarning&&i("calcite-notice",{icon:"exclamation-mark-triangle",kind:"warning",open:!0,slot:"delete-warning"},i("div",{slot:"title"},this.intl.t("deleteNotice.title")),i("div",{slot:"message"},this.intl.t("deleteNotice.message"))))}renderLinkEditor(){const t=this.findLinkByKey(this._editKey);return t&&i("arcgis-configuration-editor",{context:this._context,"data-key":t.key,onArcgisConfigurationEditorChange:this.handleLinkEditorChange,onArcgisConfigurationEditorSectionAction:this.handleLinkEditorAction,schema:this._linkSchema,t:this.translationFunc,uiSchema:this._linkUiSchema,values:t})}renderAddButtons(){var t,e,o,n,s,r,l;return"block"===this.type?[i("calcite-button",{disabled:this._editKey,key:"primary",onClick:this.handleAddLink,round:!0},this.intl.t("addLink")),i("calcite-button",{appearance:"outline-fill","data-type":"section",disabled:this._editKey,key:"secondary",onClick:this.handleAddLink,round:!0},this.intl.t("addSection"))]:[i("calcite-button",{"data-key":null===(t=this._links[0])||void 0===t?void 0:t.key,key:"primary",kind:(null===(e=this._links[0])||void 0===e?void 0:e.label)?"brand":"neutral",onClick:this._links[0]?this.handleEditLink:this.handleAddLink,round:!0},(null===(o=this._links[0])||void 0===o?void 0:o.label)?this._links[0].label:this.intl.t("addFirstAction")),!!(null===(n=this._links[0])||void 0===n?void 0:n.label)&&i("calcite-button",{appearance:"outline-fill","data-key":null===(s=this._links[1])||void 0===s?void 0:s.key,key:"secondary",kind:(null===(r=this._links[1])||void 0===r?void 0:r.label)?"brand":"neutral",onClick:this._links[1]?this.handleEditLink:this.handleAddLink,round:!0},(null===(l=this._links[1])||void 0===l?void 0:l.label)?this._links[1].label:this.intl.t("addSecondAction"))]}render(){return i(n,{"data-element":"action-links-field"},i("div",{class:"action-links__add"},this.renderAddButtons()),!!this._links.length&&this.renderLinks(this._links))}static get assetsDirs(){return["locales"]}get element(){return s(this)}};(function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);s>3&&r&&Object.defineProperty(e,i,r)})([d("_links","_editKey")],C.prototype,"_linkUiSchema",null),C.style='hub-composite-input-action-links>calcite-sortable-list{margin-top:1.5rem}[slot="control"]{display:flex}calcite-link calcite-action{height:100%}.action-links__add calcite-button:not(:first-child){margin-left:0.5rem}.action-links__section calcite-sortable-list{margin-left:1.5rem}';export{C as hub_composite_input_action_links}