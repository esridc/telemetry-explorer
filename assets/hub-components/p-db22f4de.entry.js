import{r as i,c as n,h as e}from"./p-d4ba4c14.js";import{b as t}from"./p-fd260f2d.js";import{g as s}from"./p-a8fd3d32.js";import"./p-796574a4.js";const r=class{constructor(e){i(this,e),this.arcgisConfigurationEditorFieldInputChange=n(this,"arcgisConfigurationEditorFieldInputChange",7),this.params=void 0,this.sources=void 0,t(this,"handleArcgisHubInputBoundaryPickerChange")}componentWillLoad(){this.sources=this.getSources()}getSources(){var i,n;const e=(null===(n=null===(i=this.params.uiSchema)||void 0===i?void 0:i.options)||void 0===n?void 0:n.sources)||[];return e?e.map((i=>{const n=s(i,this.params.t);return delete i.labelKey,Object.assign(i,Object.assign({},n&&{label:n}))})):[{value:"none",selected:!0}]}handleArcgisHubInputBoundaryPickerChange(i){var n;if(i.detail.graphic){const{xmin:e,ymin:t,xmax:s,ymax:r,spatialReference:o}=null===(n=i.detail.graphic)||void 0===n?void 0:n.geometry;this.arcgisConfigurationEditorFieldInputChange.emit({xmin:e,ymin:t,xmax:s,ymax:r,spatialReference:{wkid:o.wkid}})}else this.arcgisConfigurationEditorFieldInputChange.emit({xmin:null,ymin:null,xmax:null,ymax:null,spatialReference:{wkid:null}})}render(){var i,n;return e("arcgis-boundary-picker-ui",{extent:this.params.value,onArcgisBoundaryPickerUpdate:this.handleArcgisHubInputBoundaryPickerChange,resetDrawingToolsOnDisconnect:!!(null===(n=null===(i=this.params.uiSchema)||void 0===i?void 0:i.options)||void 0===n?void 0:n.resetDrawingToolsOnDisconnect),sources:this.sources})}};export{r as hub_field_input_boundary_picker}