import{r as i,c as o,h as t,H as e,a as s}from"./p-d4ba4c14.js";import{b as l}from"./p-fd260f2d.js";import{i as a}from"./p-be5c5009.js";import{g as n}from"./p-a8fd3d32.js";import{d}from"./p-8cf4bd83.js";import"./p-796574a4.js";import"./p-dfe5a97d.js";const h=class{constructor(t){i(this,t),this.arcgisConfigurationEditorFieldInputChange=o(this,"arcgisConfigurationEditorFieldInputChange",7),this.hubTelemetry=o(this,"hubTelemetry",7),this.handleCalciteComboboxItemChange=i=>{const{value:o,selected:t}=i.target;this.hubTelemetry.emit(Object.assign(Object.assign({},d.dictionary.category.interaction.action[t?"select":"deselect"]),{label:this.params.telemetryLabel,details:o}))},this.params=void 0,l(this,"handleCalciteComboboxChange")}async componentWillLoad(){this.intl=await a.loadIntlForComponent(this.element)}get isSingleSelect(){var i,o;return"single"===(null===(o=null===(i=this.params.uiSchema)||void 0===i?void 0:i.options)||void 0===o?void 0:o.selectionMode)}get schemaEnum(){var i;return(this.isSingleSelect?this.params.schema.enum:null===(i=this.params.schema.items)||void 0===i?void 0:i.enum)||[]}handleCalciteComboboxChange(i){const{value:o}=i.target;let t=o;this.isSingleSelect||"string"!=typeof o||(t=o.length?[o]:[]),this.arcgisConfigurationEditorFieldInputChange.emit(t)}renderComboboxItems(){var i,o,e;const{uiSchema:s}=this.params,l=this.params.value;let a=(null===(i=null==s?void 0:s.options)||void 0===i?void 0:i.items)||(null===(o=this.schemaEnum)||void 0===o?void 0:o.map((i=>({label:i,value:i}))));return(null===(e=this.schemaEnum)||void 0===e?void 0:e.length)&&(a=a.filter((i=>this.schemaEnum.includes(i.value)))),a.map((i=>t("calcite-combobox-item",{icon:i.icon,key:i.value,onCalciteComboboxItemChange:this.handleCalciteComboboxItemChange,selected:l.includes(i.value),textLabel:i.label||i.value,value:i.value})))}render(){var i,o,s,l,a;const{allowCustomValues:d,placeholder:h,placeholderIcon:r,selectionMode:c}=(null===(i=this.params.uiSchema)||void 0===i?void 0:i.options)||{};return t(e,{"data-element":"combobox-field"},t("calcite-combobox",{allowCustomValues:!this.schemaEnum.length&&d,disabled:this.params.disabled||(null===(s=null===(o=this.params.uiSchema)||void 0===o?void 0:o.options)||void 0===s?void 0:s.disabled),label:n(this.params.uiSchema,this.params.t)||this.intl.t("label"),onCalciteComboboxChange:this.handleCalciteComboboxChange,overlayPositioning:null===(a=null===(l=this.params.uiSchema)||void 0===l?void 0:l.options)||void 0===a?void 0:a.overlayPositioning,placeholder:h,placeholderIcon:r,selectionMode:c},this.renderComboboxItems()))}static get assetsDirs(){return["locales"]}get element(){return s(this)}};export{h as hub_field_input_combobox}