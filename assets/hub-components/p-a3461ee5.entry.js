import{r as i,c as o,h as t,H as n}from"./p-d4ba4c14.js";import{b as e}from"./p-fd260f2d.js";const s=class{constructor(t){i(this,t),this.arcgisConfigurationEditorFieldInputChange=o(this,"arcgisConfigurationEditorFieldInputChange",7),this.params=void 0,e(this,"handleArcgisHubInputLocationPickerChange")}get options(){var i,o;return(null===(o=null===(i=this.params.uiSchema)||void 0===i?void 0:i.options)||void 0===o?void 0:o.options)||[{label:"",location:{type:"none"}}]}handleArcgisHubInputLocationPickerChange(i){this.arcgisConfigurationEditorFieldInputChange.emit(i.detail)}render(){var i,o,e,s;return t(n,{"data-element":"location-picker-field"},t("arcgis-hub-location-picker",{extent:null===(o=null===(i=this.params.uiSchema)||void 0===i?void 0:i.options)||void 0===o?void 0:o.extent,onArcgisHubLocationPickerUpdate:this.handleArcgisHubInputLocationPickerChange,options:this.options,resetDrawingToolsOnDisconnect:null===(s=null===(e=this.params.uiSchema)||void 0===e?void 0:e.options)||void 0===s?void 0:s.resetDrawingToolsOnDisconnect}))}};export{s as hub_field_input_location_picker}