import{r as i,c as o,h as s}from"./p-d4ba4c14.js";import{b as r}from"./p-fd260f2d.js";const t=class{constructor(s){i(this,s),this.arcgisConfigurationEditorFieldInputChange=o(this,"arcgisConfigurationEditorFieldInputChange",7),this.params=void 0,r(this,"handleArcgisHubInputColorChange")}handleArcgisHubInputColorChange(i){this.arcgisConfigurationEditorFieldInputChange.emit(i.target.value)}render(){var i,o;return s("arcgis-hub-input-color",{disabled:this.params.disabled,label:this.params.schema.title,onArcgisHubInputColorChange:this.handleArcgisHubInputColorChange,savedColors:null===(o=null===(i=this.params.uiSchema)||void 0===i?void 0:i.options)||void 0===o?void 0:o.savedColors,value:this.params.value})}};export{t as hub_field_input_color}