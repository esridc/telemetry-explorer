import{r as i,c as t,h as e,H as s,a}from"./p-d4ba4c14.js";import{b as o}from"./p-fd260f2d.js";import{g as r}from"./p-a8fd3d32.js";import{i as l}from"./p-be5c5009.js";import{d}from"./p-8cf4bd83.js";import"./p-796574a4.js";import"./p-dfe5a97d.js";const n=class{constructor(e){i(this,e),this.arcgisConfigurationEditorFieldInputChange=t(this,"arcgisConfigurationEditorFieldInputChange",7),this.hubTelemetry=t(this,"hubTelemetry",7),this.params=void 0,this.styles=void 0,this.imgSrc=void 0,o(this,"clearSrc","handleArcgisInputImageUploadSave")}get sizeDescription(){return r(this.params.uiSchema,this.params.t,"options.sizeDescription")}async componentWillLoad(){var i,t,e,s;this.intl=await l.loadIntlForComponent(this.element),(null===(t=null===(i=this.params.uiSchema)||void 0===i?void 0:i.options)||void 0===t?void 0:t.imgSrc)&&(this.imgSrc=null===(s=null===(e=this.params.uiSchema)||void 0===e?void 0:e.options)||void 0===s?void 0:s.imgSrc)}handleArcgisInputImageUploadSave(i){this.imgSrc=i.detail.base64,this.arcgisConfigurationEditorFieldInputChange.emit(i.detail)}clearSrc(){this.imgSrc=void 0,this.arcgisConfigurationEditorFieldInputChange.emit({blob:void 0,base64:void 0,fileName:void 0,format:void 0}),this.hubTelemetry.emit(d.dictionary.category.interaction.action.remove.label.image)}render(){var i;const t=null===(i=this.params.uiSchema)||void 0===i?void 0:i.options;return e(s,{"data-element":"image-picker-field",style:this.styles},this.imgSrc?e("div",{class:"image-wrapper"},e("img",{alt:"",src:this.imgSrc,style:{aspectRatio:t.aspectRatio}}),e("calcite-button",{appearance:"outline",iconStart:"trash",label:this.intl.t("delete"),onClick:this.clearSrc})):e("arcgis-hub-image-upload",{aspectRatio:null==t?void 0:t.aspectRatio,fillBackground:null==t?void 0:t.fillBackground,height:null==t?void 0:t.height,inline:!0,maxHeight:null==t?void 0:t.maxHeight,maxWidth:null==t?void 0:t.maxWidth,onArcgisImageUploadSave:this.handleArcgisInputImageUploadSave,sizeDescription:this.sizeDescription}))}static get assetsDirs(){return["locales"]}get element(){return a(this)}};n.style=".image-wrapper{display:flex;align-items:flex-end}.image-wrapper img{height:18rem}.image-wrapper calcite-button{height:2rem;padding-left:1rem}";export{n as hub_field_input_image_picker}