import{r as t,c as i,h as e}from"./p-d4ba4c14.js";import{b as l}from"./p-fd260f2d.js";const s=class{constructor(e){t(this,e),this.arcgisConfigurationEditorFieldInputChange=i(this,"arcgisConfigurationEditorFieldInputChange",7),this.params=void 0,l(this,"handleCalciteInputInput")}handleCalciteInputInput(t){let i=t.target.value;"number"===this.type&&(i=parseFloat(t.target.value),isNaN(i)&&(i=null)),this.arcgisConfigurationEditorFieldInputChange.emit(i)}get type(){var t,i;return{"date-time":"datetime-local","idn-email":"email"}[this.params.schema.format]||this.params.schema.format||(null===(i=null===(t=this.params.uiSchema)||void 0===t?void 0:t.options)||void 0===i?void 0:i.type)||"text"}render(){var t,i,l,s,a,n;const d=this.params.schema,o="text"===this.type;return o||"textarea"===this.type?e("calcite-text-area",{"data-test-type":this.type,disabled:this.params.disabled,label:d.title,maxLength:d.maxLength,onCalciteTextAreaInput:this.handleCalciteInputInput,placeholder:null===(i=null===(t=this.params.uiSchema)||void 0===t?void 0:t.options)||void 0===i?void 0:i.placeholder,required:this.params.required,resize:o?"none":"vertical",rows:o?1:null===(s=null===(l=this.params.uiSchema)||void 0===l?void 0:l.options)||void 0===s?void 0:s.rows,value:this.params.value}):e("calcite-input",{disabled:this.params.disabled,label:d.title,max:d.maximum,maxLength:d.maxLength,min:d.minimum,onCalciteInputInput:this.handleCalciteInputInput,placeholder:null===(n=null===(a=this.params.uiSchema)||void 0===a?void 0:a.options)||void 0===n?void 0:n.placeholder,required:this.params.required,status:this.params.status,type:this.type,value:this.params.value})}};export{s as hub_field_input_input}