import{h as i,r as t,c as e,H as o,a as r,F as n}from"./p-d4ba4c14.js";import{a as s}from"./p-a43eca06.js";import{b as a}from"./p-fd260f2d.js";import{g as c}from"./p-a8fd3d32.js";import{S as l}from"./p-d86e4f15.js";import{i as d}from"./p-6dac87c8.js";import{s as h}from"./p-52612356.js";import{c as u,b as g}from"./p-b728aff4.js";import{a as f,b as p,U as m,c as v}from"./p-13f8e63a.js";import{g as b}from"./p-796574a4.js";import{d as y}from"./p-c836a9b6.js";import"./p-dfe5a97d.js";import"./p-af59e67b.js";import"./p-62163eff.js";import"./p-742d0454.js";import"./p-89f8c546.js";import"./p-5955d0c4.js";import"./p-d27eec8d.js";import"./p-b3959606.js";import"./p-09f00a2a.js";import"./p-69965d84.js";import"./p-24698668.js";import"./p-52b2d57a.js";import"./p-5d9da1ee.js";import"./p-a2594b73.js";function x(t,e){const o=c(t,e,"options.helperText");return i("calcite-input-message",{class:"helper-text"}," ",i("div",{innerHTML:o})," ")}var w=Object.prototype.hasOwnProperty,j=Object.prototype.toString,C=k;function k(i,t,e){if(3===arguments.length)return k.set(i,t,e);if(2===arguments.length)return k.get(i,t);var o=k.bind(k,i);for(var r in k)k.hasOwnProperty(r)&&(o[r]=k[r].bind(o,i));return o}k.get=function(i,t){for(var e=Array.isArray(t)?t:k.parse(t),o=0;o<e.length;++o){var r=e[o];if("object"!=typeof i||!(r in i))throw new Error("Invalid reference token: "+r);i=i[r]}return i},k.set=function(i,t,e){var o=Array.isArray(t)?t:k.parse(t),r=o[0];if(0===o.length)throw Error("Can not set the root object");for(var n=0;n<o.length-1;++n){var s=o[n];"string"!=typeof s&&"number"!=typeof s&&(s=String(s)),"__proto__"!==s&&"constructor"!==s&&"prototype"!==s&&("-"===s&&Array.isArray(i)&&(s=i.length),r=o[n+1],s in i||(i[s]=r.match(/^(\d+|-)$/)?[]:{}),i=i[s])}return"-"===r&&Array.isArray(i)&&(r=i.length),i[r]=e,this},k.remove=function(i,t){var e=Array.isArray(t)?t:k.parse(t),o=e[e.length-1];if(void 0===o)throw new Error('Invalid JSON pointer for remove: "'+t+'"');var r=k.get(i,e.slice(0,-1));if(Array.isArray(r)){var n=+o;if(""===o&&isNaN(n))throw new Error('Invalid array index: "'+o+'"');Array.prototype.splice.call(r,n,1)}else delete r[o]},k.dict=function(i,t){var e={};return k.walk(i,(function(i,t){e[t]=i}),t),e},k.walk=function(i,t,e){var o=[];e=e||function(i){var t=Object.prototype.toString.call(i);return"[object Object]"===t||"[object Array]"===t},function i(r){!function(i,t,e){if("[object Function]"!==j.call(t))throw new TypeError("iterator must be a function");var o=i.length;if(o===+o)for(var r=0;r<o;r++)t.call(e,i[r],r,i);else for(var n in i)w.call(i,n)&&t.call(e,i[n],n,i)}(r,(function(r,n){o.push(String(n)),e(r)?i(r):t(r,k.compile(o)),o.pop()}))}(i)},k.has=function(i,t){try{k.get(i,t)}catch(i){return!1}return!0},k.escape=function(i){return i.toString().replace(/~/g,"~0").replace(/\//g,"~1")},k.unescape=function(i){return i.replace(/~1/g,"/").replace(/~0/g,"~")},k.parse=function(i){if(""===i)return[];if("/"!==i.charAt(0))throw new Error("Invalid JSON pointer: "+i);return i.substring(1).split(/\//).map(k.unescape)},k.compile=function(i){return 0===i.length?"":"/"+i.map(k.escape).join("/")};const S=class{constructor(i){t(this,i),this.arcgisConfigurationEditorChange=e(this,"arcgisConfigurationEditorChange",7),this.arcgisConfigurationEditorInitialized=e(this,"arcgisConfigurationEditorInitialized",7),this.arcgisConfigurationEditorLoaded=e(this,"arcgisConfigurationEditorLoaded",7),this.arcgisConfigurationEditorSectionAction=e(this,"arcgisConfigurationEditorSectionAction",7),this._values={},this.handleSectionActionClick=i=>{const t=i.currentTarget.getAttribute("data-key");this.arcgisConfigurationEditorSectionAction.emit({action:t,model:this.model})},this.handleCalciteBlockSectionToggle=i=>{const t=i.target,e=t.getAttribute("data-scope"),o=!t.hasAttribute("open"),r=this.getPropertyPathFromScope(e);h(r,o,this._values,!0),this.emitChangeEvent()},this.schema=void 0,this.uiSchema=void 0,this.values={},this.disabled=!1,this.t=void 0,this.context=void 0,this.variant=void 0,this.validationResult=void 0,a(this,"renderUiSchemaElement")}handleUiSchemaChange(i){this._uiSchema=u(i)}handleSchemaChange(i){this._schema=u(i),this.validator=this.instantiateValidator(this._schema)}handleValuesChange(i){this._values=Object.assign(Object.assign({},this.getDefaultValues(this._schema,this._uiSchema)),u(this.parseJson(i)))}handleArcgisConfigurationEditorFieldChange(i){i.stopPropagation(),h(i.detail.property,i.detail.value,this._values,!0),this.emitChangeEvent()}async setFocus(){this.element.focus()}async validate(){return this._validate(this.removeEmptyValues(this._values))}componentWillLoad(){if(!this.schema)throw new Error("arcgis-configuration-editor: schema attribute is required");const i=this.parseJson(this.schema);this._schema=u(i),this._uiSchema=this.uiSchema?u(this.uiSchema):this.generateUiSchemaFromSchema(i),this._values=Object.assign(Object.assign({},this.getDefaultValues(this._schema,this._uiSchema)),u(this.parseJson(this.values))),this.validator=this.instantiateValidator(this._schema),this.isCompositeField=!!document.querySelectorAll("[data-composite]").length,this.emitChangeEvent(!0)}componentDidLoad(){!this.isCompositeField&&this.arcgisConfigurationEditorLoaded.emit()}get invalidProperties(){const{errors:i=[]}=this.validationResult||{};return i.map((i=>this.getErrorPropertyPath(i)))}get model(){if(this.disabled)return void this._validate(this.removeEmptyValues(this._values));const{valid:i}=this._validate(this.removeEmptyValues(this._values)),t={valid:i},e=this.getUiSchemaWhitelist(this._uiSchema);return t.values=Object.entries(this._values).reduce(((i,[t,o])=>(e.includes(t)&&(i[t]=o),i)),{}),t}removeEmptyValues(i){return Object.fromEntries(Object.entries(i).filter((([i,t])=>{var e,o;return!(null===(o=null===(e=this._schema)||void 0===e?void 0:e.required)||void 0===o?void 0:o.includes(i))||!(i=>{var t;let e=!1;return"string"==typeof i?e=""===i:Array.isArray(i)?e=!i.length:null==i?e=!0:"object"==typeof i&&(e=!(null===(t=Object.keys(i))||void 0===t?void 0:t.length)),e})(t)})))}parseJson(i){return"string"==typeof i?JSON.parse(i):i}generateUiSchemaFromSchema(i){return{type:f.layout,elements:this.generateUiSchemaElementsFromSchema(i)}}generateUiSchemaElementsFromSchema(i,t=""){return i.properties?Object.entries(i.properties).reduce(((i,[e,o])=>{const r=`${t}/properties/${e}`;return"object"===o.type?i=[...i,...this.generateUiSchemaElementsFromSchema(o,r)]:i.push({label:o.title||e,scope:r,type:f.control}),i}),[]):[]}instantiateValidator(i){return new s({allErrors:!0}).compile(i)}_validate(i){const t=!!this.validator(i);return this.validationResult=t?{valid:t}:{valid:t,errors:this.validator.errors},this.validationResult}getDefaultValues(i,t,e={}){return t.elements.reduce(((t,e)=>{if(e.type===f.control){const o=this.getPropertyPathFromScope(e.scope),r=C.get(i,e.scope);r.default&&h(o,r.default,t,!0)}else e.type!==f.slot&&this.getDefaultValues(i,e,t);return t}),e)}getUiSchemaWhitelist(i){return i.elements.reduce(((i,t)=>{const e=this.evaluateUiSchemaRule(t.rule);return t.type===f.control?i=this.maybeAddPropertyToWhiteList(t,e,i):t.type!==f.slot&&(t.type===f.section&&t.scope&&(i=this.maybeAddPropertyToWhiteList(t,e,i)),i=[...i,...this.getUiSchemaWhitelist(t)]),i}),[])}maybeAddPropertyToWhiteList(i,t,e){const o=this.getPropertyPathFromScope(null==i?void 0:i.scope),r=t!==m.HIDE,n=null==o?void 0:o.split(".")[0];return n&&r&&(e.includes(n)||e.push(n)),e}emitChangeEvent(i=!1){this.disabled||(i?!this.isCompositeField&&this.arcgisConfigurationEditorInitialized.emit(this.model):this.arcgisConfigurationEditorChange.emit(this.model))}getErrorPropertyPath(i){const{dataPath:t,keyword:e}=i;return"required"===e?i.params.missingProperty:t.slice(1)}getControlErrorMessages(i,t,e){return t.reduce(((t,o)=>{if(this.getErrorPropertyPath(o)===i){const{keyword:i}=o,r=e.find((t=>t.keyword===i))||{type:p.error,keyword:i,label:o.message};t=[...t,r]}return t}),[])}getControlMessages(i){var t,e;let o=[];const r=null===(t=i.options)||void 0===t?void 0:t.disableMessages,n=this.getPropertyPathFromScope(i.scope),s=(null===(e=i.options)||void 0===e?void 0:e.messages)||[],{error:a,success:c,custom:l}=s.reduce(((i,t)=>{const e=t.type.toLowerCase();return i[e]=[...i[e],t],i}),{success:[],error:[],custom:[]}),d=this.invalidProperties.includes(n)&&!r,h=c.length&&!r,u=l.length&&!r;if(d){const{errors:i=[]}=this.validationResult;o=[...this.getControlErrorMessages(n,i,a)]}else h&&(o=[...c]);if(u){const i=l.reduce(((i,t)=>t.alwaysShow||this.evaluateCondition(t.condition)?[...i,t]:i),[]);o=[...o,...i]}return o}evaluateCondition(i){let t=!1;if(i)if(i.scope){const e=C.get(this._schema,i.scope),o=this.getPropertyPathFromScope(i.scope),r=[b(this._values,o),e.default,l[e.type]].find((i=>!d(i)));t=!!this.instantiateValidator(i.schema)(r)}else{const e=Object.keys(i.schema.properties).reduce(((i,t)=>{const e=C.get(this._schema,`/properties/${t}`),o=[b(this._values,t),e.default,l[e.type]].find((i=>!d(i)));return Object.assign(Object.assign({},i),{[t]:o})}),{});t=!!this.instantiateValidator(i.schema)(e)}return t}getPropertyPathFromScope(i){const t=i&&C.parse(i).filter(((i,t,e)=>"properties"!==i&&("items"!==i||"properties"===e[t-1]))).join(".");return i.includes("disclaimer/items/")&&console.log(t),t}evaluateUiSchemaRule(i){let t=m.SHOW;if(i){const e=this.evaluateCondition(i.condition),o={[m.SHOW]:m.HIDE,[m.HIDE]:m.SHOW,[m.DISABLE]:m.NONE};t=e?i.effect:o[i.effect]}return t}renderUiSchemaElement(t){var e,o,r;const n=this.evaluateUiSchemaRule(t.rule);if(n!==m.HIDE){if(t.type===f.section)return this.renderUiSchemaSection(t,n);if(t.type===f.step){const e=c(t,this.t);return i("calcite-stepper-item",{class:"configuration-editor-section configuration-editor-section--step","data-label":e,disabled:n===m.DISABLE,heading:e,key:e},this.renderSectionContent(t))}if(t.type===f.accordionItem){const n=c(t,this.t),s=c(t,this.t,"options.description");return i("calcite-accordion-item",{class:"configuration-editor-section configuration-editor-section--accordion-item","data-label":n,description:s,expanded:null===(e=t.options)||void 0===e?void 0:e.expanded,heading:n,iconEnd:null===(o=t.options)||void 0===o?void 0:o.iconEnd,iconFlipRtl:"both",iconStart:null===(r=t.options)||void 0===r?void 0:r.iconStart,key:n},this.renderSectionContent(t))}if(t.type===f.control)return this.renderUiSchemaControl(t,{disabled:n===m.DISABLE});if(t.type===f.slot)return i("slot",{key:t.options.name,name:t.options.name})}}renderUiSchemaControl(t,e){var o;if(t)try{const{disabled:r}=e;let n=C.get(this._schema,t.scope);if(n.if){const i=this.instantiateValidator(n.if)(this._values);n=Object.assign(Object.assign({},n),i?n.then:n.else)}n.title=c(t,this.t);const s=this.getPropertyPathFromScope(t.scope),a=(null===(o=this._schema)||void 0===o?void 0:o.required)||[];return i("arcgis-configuration-editor-field",{context:this.context,disabled:this.disabled||r,invalid:this.invalidProperties.includes(s),key:s,messages:this.getControlMessages(t),property:s,required:a.includes(s),schema:n,t:this.t,uiSchema:t,value:b(this._values,s)})}catch(i){console.error(i)}}renderSectionContent(t){var e,o,r,n,s;const a=null===(e=t.options)||void 0===e?void 0:e.helperText;return i("div",{class:{"configuration-editor-section__content":!0,[`helper-text-${null===(r=null===(o=t.options)||void 0===o?void 0:o.helperText)||void 0===r?void 0:r.placement}`]:a&&(null===(s=null===(n=t.options)||void 0===n?void 0:n.helperText)||void 0===s?void 0:s.placement)}},a&&x(t,this.t),i("div",{class:"configuration-editor-section__fields"},t.elements.map((i=>this.renderUiSchemaElement(i)))))}renderUiSchemaSection(t,e){var o,r,n,s,a,l,d,h,u,g,f,p,y,x,w,j,C;if((null===(o=t.options)||void 0===o?void 0:o.section)===v.accordion)return i("calcite-accordion",{appearance:null===(r=t.options)||void 0===r?void 0:r.appearance,iconPosition:null===(n=t.options)||void 0===n?void 0:n.iconPosition,iconType:null===(s=t.options)||void 0===s?void 0:s.iconType,scale:null===(a=t.options)||void 0===a?void 0:a.scale,selectionMode:null===(l=t.options)||void 0===l?void 0:l.selectionMode},t.elements.map((i=>this.renderUiSchemaElement(i))));if((null===(d=t.options)||void 0===d?void 0:d.section)===v.block){const o=null===(h=t.options)||void 0===h?void 0:h.collapsible;return i("calcite-block",{class:"configuration-editor-section configuration-editor-section--block",collapsible:void 0===o||o,"data-label":c(t,this.t),disabled:e===m.DISABLE,heading:c(t,this.t),key:t.labelKey,open:null===(u=t.options)||void 0===u?void 0:u.open},this.renderSectionContent(t))}if((null===(g=t.options)||void 0===g?void 0:g.section)===v.card){const e=(null===(f=t.options)||void 0===f?void 0:f.actions)||[],{startActions:o,endActions:r}=e.reduce(((i,t)=>("footer-start"===t.slot?i.startActions.push(t):"footer-end"===t.slot&&i.endActions.push(t),i)),{startActions:[],endActions:[]});return i("calcite-card",{class:"configuration-editor-section configuration-editor-section--card"},i("div",{slot:"title"},i("h3",null,c(t,this.t))),this.renderSectionContent(t),i("div",{slot:"footer-start"},this.renderCardSectionActions(o)),i("div",{slot:"footer-end"},this.renderCardSectionActions(r)))}if((null===(p=t.options)||void 0===p?void 0:p.section)===v.stepper)return i("calcite-stepper",{scale:null===(y=t.options)||void 0===y?void 0:y.scale},t.elements.map((i=>this.renderUiSchemaElement(i))));if((null===(x=t.options)||void 0===x?void 0:x.section)===v.subblock){let e,o=null==t?void 0:t.options.open;if("switch"===(null===(w=t.options)||void 0===w?void 0:w.toggleDisplay)&&(null==t?void 0:t.scope)){const i=this.getPropertyPathFromScope(null==t?void 0:t.scope);o=!!b(this._values,i),e=this.handleCalciteBlockSectionToggle}return i("calcite-block-section",{class:"configuration-editor-section configuration-editor-section--subblock","data-label":c(t,this.t),"data-scope":null==t?void 0:t.scope,key:t.labelKey,onCalciteBlockSectionToggle:e,open:o,text:c(t,this.t),toggleDisplay:(null===(j=null==t?void 0:t.options)||void 0===j?void 0:j.toggleDisplay)||"button"},this.renderSectionContent(t))}{const e=(null===(C=t.options)||void 0===C?void 0:C.headerTag)||"h2";return i("section",{class:{[`${this.variant}`]:!!this.variant,"configuration-editor-section":!0,"configuration-editor-section--basic":!0},"data-label":c(t,this.t)},i("header",{class:"configuration-editor-section__header"},i(e,null,c(t,this.t))),this.renderSectionContent(t))}}renderCardSectionActions(t){return null==t?void 0:t.map((t=>{let e=t.label;return!e&&t.labelKey&&(e=this.t(t.labelKey)),i("calcite-button",{appearance:t.appearance,"data-key":t.action,disabled:t.disableWhenInvalid&&!this.model.valid,href:t.href,key:t.action,kind:t.kind,label:e,onClick:this.handleSectionActionClick,round:t.round},e)}))}render(){return i(o,{"data-element":"configuration-editor",tabIndex:-1},this._uiSchema.elements.map(this.renderUiSchemaElement))}get element(){return r(this)}static get watchers(){return{uiSchema:["handleUiSchemaChange"],schema:["handleSchemaChange"],values:["handleValuesChange"]}}};S.style='.sc-arcgis-configuration-editor-h{display:block}.sc-arcgis-configuration-editor-h:focus-visible{outline:none}arcgis-configuration-editor-field.sc-arcgis-configuration-editor{display:block}calcite-block.sc-arcgis-configuration-editor+arcgis-configuration-editor-field.sc-arcgis-configuration-editor{margin-top:0.75rem}.sc-arcgis-configuration-editor-s>*{margin-bottom:0.75rem}.configuration-editor-section--basic.sc-arcgis-configuration-editor:not(:last-child){margin-bottom:2rem}arcgis-configuration-editor-field.sc-arcgis-configuration-editor:not(:last-child){margin-bottom:0.25rem}.configuration-editor-section__header.sc-arcgis-configuration-editor .sc-arcgis-configuration-editor:is(h1,h2.sc-arcgis-configuration-editor,h3.sc-arcgis-configuration-editor,h4.sc-arcgis-configuration-editor,h5.sc-arcgis-configuration-editor,h6).sc-arcgis-configuration-editor{font-size:var(--calcite-font-size-1);margin-top:0px;margin-bottom:1.5rem;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}.configuration-editor-section__content.sc-arcgis-configuration-editor{display:flex;flex-direction:column}.configuration-editor-section__content.sc-arcgis-configuration-editor calcite-input-message.sc-arcgis-configuration-editor{margin-top:-1.5rem;margin-bottom:1.5rem;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-1)}.configuration-editor-section--subblock.sc-arcgis-configuration-editor .configuration-editor-section__content.sc-arcgis-configuration-editor calcite-input-message.sc-arcgis-configuration-editor{margin-top:-1rem}.configuration-editor-section--accordion-item.sc-arcgis-configuration-editor .configuration-editor-section__content.sc-arcgis-configuration-editor calcite-input-message.sc-arcgis-configuration-editor{margin-top:0px}.configuration-editor-section--card.sc-arcgis-configuration-editor div[slot="title"].sc-arcgis-configuration-editor{border-bottom:1px solid var(--calcite-ui-border-3);margin-left:-0.75rem;margin-right:-0.75rem;margin-top:-0.75rem;margin-bottom:-0.25rem;display:flex;height:3rem;align-items:center}.configuration-editor-section--card.sc-arcgis-configuration-editor div[slot="title"].sc-arcgis-configuration-editor h3.sc-arcgis-configuration-editor{margin:0.75rem;font-size:var(--calcite-font-size-1);line-height:1.5rem;font-weight:var(--calcite-font-weight-medium)}.configuration-editor-section--card.sc-arcgis-configuration-editor .sc-arcgis-configuration-editor:not(.helper-text-right,.helper-text-left).sc-arcgis-configuration-editor .helper-text.sc-arcgis-configuration-editor{margin-top:0px}calcite-block[collapsible].sc-arcgis-configuration-editor{--calcite-font-size--1:18px;--calcite-block-padding:.75rem}calcite-block-section.sc-arcgis-configuration-editor{--calcite-font-size--1:16px}calcite-block.sc-arcgis-configuration-editor arcgis-configuration-editor-field.sc-arcgis-configuration-editor{--calcite-font-size--1:14px}.helper-text-right.sc-arcgis-configuration-editor{flex-direction:row-reverse;align-items:flex-start;gap:1.25rem}.helper-text-right.sc-arcgis-configuration-editor calcite-input-message.sc-arcgis-configuration-editor{margin-top:0.75rem;width:20%}.helper-text-right.sc-arcgis-configuration-editor .configuration-editor-section__fields.sc-arcgis-configuration-editor{width:80%}.helper-text-left.sc-arcgis-configuration-editor{flex-direction:row;align-items:flex-start;gap:1.25rem}.helper-text-left.sc-arcgis-configuration-editor calcite-input-message.sc-arcgis-configuration-editor{margin-top:0.75rem;width:20%}.helper-text-left.sc-arcgis-configuration-editor .configuration-editor-section__fields.sc-arcgis-configuration-editor{width:80%}.variant-workspace.sc-arcgis-configuration-editor{border-radius:0.25rem;padding:1.25rem;--tw-shadow:0 1px 6px -1px rgba(0, 0, 0, 0.16), 0 1px 2px -1px rgba(0, 0, 0, 0.08);--tw-shadow-colored:0 1px 6px -1px var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);background:white}';const _=class{constructor(i){t(this,i),this.arcgisConfigurationEditorFieldChange=e(this,"arcgisConfigurationEditorFieldChange",7),this.compositeFields={"arcgis-hub-timeline-editor":{inputChange:"arcgisHubTimelineEditorChange"},"hub-composite-input-icon":{inputChange:"arcgisCompositeIconFieldChange"},"hub-composite-input-service-query-metric":{inputChange:"arcgisCompositeServiceQueryMetricFieldChange"},"hub-composite-input-expression-set":{inputChange:"arcgisCompositeExpressionSetFieldChange"},"hub-composite-input-action-links":{values:"links",inputChange:"arcgisCompositeActionLinksFieldChange"},"arcgis-hub-access-level-controls":{values:"accessLevel",inputChange:"arcgisHubItemAccessLevelChange"},"arcgis-hub-license-picker":{inputChange:"arcgisHubLicensePickerChange",values:"licenseInfo"},"arcgis-privacy-config":{inputChange:"hubPrivacyPreferencesConfigChanged",values:"config"}},this.property=void 0,this.schema=void 0,this.uiSchema=void 0,this.value=void 0,this.invalid=!1,this.messages=[],this.disabled=!1,this.required=!1,this.t=void 0,this.context=void 0,this.shouldShowMessages=!1,a(this,"handleFieldInputChange")}componentWillLoad(){this.shouldShowMessages=!!this.value}get fieldLabel(){const i=c(this.uiSchema,this.t);return this.required?`${i}*`:i}get hasHelperText(){var i,t;return null===(t=null===(i=this.uiSchema)||void 0===i?void 0:i.options)||void 0===t?void 0:t.helperText}get hasTooltip(){var i,t;return null===(t=null===(i=this.uiSchema)||void 0===i?void 0:i.options)||void 0===t?void 0:t.tooltip}get isDisabled(){return this.disabled||!d(this.schema.const)}get status(){let i=this.invalid?"invalid":"idle";return i=this.shouldShowMessages?i:"idle",i}get _value(){return[this.value,this.schema.default,this.schema.const,l[this.schema.type]].find((i=>("string"==typeof this.schema.type?"number"===this.schema.type:this.schema.type.includes("number"))?!isNaN(i):!d(i)))}get fieldTelemetryLabel(){const i=this.property.split(".").pop();return y(i).split("-").map(g).join(" ")}get fieldParams(){const{property:i,required:t,t:e,uiSchema:o,schema:r,status:n,disabled:s,_value:a,fieldLabel:c,fieldTelemetryLabel:l}=this;let d=c;if(!d){const i=this.element.closest(".configuration-editor-section");d=(null==i?void 0:i.getAttribute("data-label"))||""}return{value:a,property:i,required:t,t:e,uiSchema:o,schema:r,status:n,disabled:s,label:d,telemetryLabel:l}}isCompositeField(i){return!!this.compositeFields[i]}handleFieldInputChange(i){var t;i.stopPropagation();let e=i.detail;!Array.isArray(i.detail)&&(null===(t=i.detail)||void 0===t?void 0:t.values)&&(e=i.detail.values),this.arcgisConfigurationEditorFieldChange.emit({property:this.property,value:e}),this.shouldShowMessages=!0}getDefaultControl(i){return{string:"hub-field-input-input",boolean:"hub-field-input-switch",array:"hub-field-input-multiselect"}[i]}renderBlockField(){const{fieldLabel:t,hasTooltip:e,hasHelperText:o,messages:r,fieldParams:s}=this,a=i(n,null,i("div",{class:"field-container"},o&&x(s.uiSchema,s.t),this.renderControl(s)),!!(null==r?void 0:r.length)&&i("div",{class:"message-container"},this.renderMessages(r)));return t?i("calcite-label",null,i("span",null,t,e&&this.renderTooltip(this.uiSchema,this.t)),a):a}getMessageIcon(i,t,e){let o;const r=!!d(i)||i;return t===p.error&&r?o=e?"x-octagon":"exclamation-mark-circle":t===p.success&&r?o="check-circle":t===p.custom&&(o=i),o}getMessageStatus(i){switch(i){case p.error:return"invalid";case p.success:return"valid";case p.custom:return"idle"}}renderMessages(t){return t.reduce(((t,e)=>{const{type:o,display:r,icon:n,kind:s,hidden:a,allowShowBeforeInteract:l}=e;if(l||this.shouldShowMessages){const l=c(e,this.t),d=this.getMessageIcon(n,o,l),h=this.getMessageStatus(o);!a&&t.push("notice"===r?i("div",{class:"message-notice-container"},i("calcite-notice",{icon:n,key:`${e.keyword}_${e.type}`,kind:s,open:!0},i("div",{slot:"message"},l))):i("calcite-input-message",{icon:d,key:`${e.keyword}_${e.type}`,status:h},l))}return t}),[])}renderControl(t){var e,o,r;const{control:n,composite:s,changeEvent:a,styles:c}=(null===(e=t.uiSchema)||void 0===e?void 0:e.options)||{},l=n||this.getDefaultControl(t.schema.type),d=this.isCompositeField(n)||s,h=(null===(o=this.compositeFields[n])||void 0===o?void 0:o.values)||"values",u=(null===(r=this.compositeFields[n])||void 0===r?void 0:r.inputChange)||a,f=d?Object.assign(Object.assign({"data-composite":!0,context:this.context,[h]:t.value},t.uiSchema.options),{[`on${g(u)}`]:this.handleFieldInputChange}):{context:this.context,params:t,styles:c,onArcgisConfigurationEditorFieldInputChange:this.handleFieldInputChange};return l&&i(l,Object.assign({},f))}renderTooltip(t,e){const o=`arcgis-configuration-editor-field-tooltip-${Date.now()}`,r=c(t,e,"options.tooltip");return i(n,null,i("calcite-tooltip",{label:r,"reference-element":o},r),i("calcite-icon",{icon:"information-f",id:o,scale:"s"}))}renderInlineField(){var t;const{fieldLabel:e,hasTooltip:o,fieldParams:r}=this;return i(n,null,i("calcite-label",{layout:"inline-space-between"},i("div",null,i("span",null,e,o&&this.renderTooltip(r.uiSchema,r.t)),this.hasHelperText&&x(null==r?void 0:r.uiSchema,r.t),!!(null===(t=this.messages)||void 0===t?void 0:t.length)&&i("div",{class:"message-container"},this.renderMessages(this.messages))),i("div",{class:"field-container field-container-inline"},this.renderControl(r))))}render(){var t,e,r;const n="inline-space-between"===(null===(r=null===(e=null===(t=this.fieldParams)||void 0===t?void 0:t.uiSchema)||void 0===e?void 0:e.options)||void 0===r?void 0:r.layout);return i(o,null,this.fieldLabel&&n?this.renderInlineField():this.renderBlockField())}get element(){return r(this)}};_.style='.disabled-text{min-height:44px;display:flex;align-items:center}calcite-label span{display:flex;align-items:center}calcite-label calcite-input-message{margin-top:0px}calcite-label[layout="inline-space-between"] .helper-text{margin-top:0.5rem}.field-container calcite-input-message,.message-container calcite-input-message,.helper-text{font-weight:var(--calcite-font-weight-normal)}.message-notice-container{max-width:20rem}.field-container{margin-bottom:0.5rem;display:flex;flex-direction:column;gap:0.5rem}.field-container-inline{align-self:flex-start}.field-message{display:flex;flex-direction:row;align-items:center;justify-content:flex-start}.field-message calcite-icon.error{--calcite-ui-icon-color:var(--calcite-ui-danger);margin:0.25rem}.field-message calcite-icon.success{--calcite-ui-icon-color:var(--calcite-ui-success);margin:0.25rem}.field-message calcite-icon.custom{margin:0.25rem}';export{S as arcgis_configuration_editor,_ as arcgis_configuration_editor_field}