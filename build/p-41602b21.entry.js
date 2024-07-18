import{r as t,c as i,h as s,a as e}from"./p-ce275af6.js";import{g as a}from"./p-e4f14b9d.js";import{c as n,d as c,u as o,I as r}from"./p-1a101545.js";import{c as d,d as l,g as h}from"./p-f12cab61.js";import{s as b,a as p,c as f}from"./p-4da87082.js";import{c as u,d as g}from"./p-373caea5.js";import{c as m}from"./p-118f21c7.js";import{c as v,s as y,d as k,u as w}from"./p-93fac8b6.js";import"./p-2f33ceac.js";import"./p-3a41f8f2.js";import"./p-bb2a43ec.js";import"./p-2cee5187.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.10.1
 */const C={wrapper:"wrapper",confirmChangesButton:"confirm-changes-button",cancelEditingButton:"cancel-editing-button",inputWrapper:"input-wrapper",cancelEditingButtonWrapper:"cancel-editing-button-wrapper",enableEditingButton:"enable-editing-button",controlsWrapper:"controls-wrapper"};const E=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block}:host([scale=s]) .controls-wrapper{block-size:1.5rem}:host([scale=m]) .controls-wrapper{block-size:2rem}:host([scale=l]) .controls-wrapper{block-size:2.75rem}:host(:not([editing-enabled]):not([disabled])) .wrapper:hover{background-color:var(--calcite-color-foreground-2)}.wrapper{box-sizing:border-box;display:flex;justify-content:space-between;background-color:var(--calcite-color-foreground-1);transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.wrapper .input-wrapper{flex:1 1 0%}.controls-wrapper{display:flex}:host([disabled]) .cancel-editing-button-wrapper{border-color:var(--calcite-color-border-2)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}";const j=class{constructor(s){t(this,s);this.calciteInlineEditableEditCancel=i(this,"calciteInlineEditableEditCancel",6);this.calciteInlineEditableEditConfirm=i(this,"calciteInlineEditableEditConfirm",6);this.calciteInternalInlineEditableEnableEditingChange=i(this,"calciteInternalInlineEditableEnableEditingChange",6);this.mutationObserver=m("mutation",(()=>this.mutationObserverCallback()));this.enableEditing=()=>{var t,i;this.valuePriorToEditing=(t=this.inputElement)===null||t===void 0?void 0:t.value;this.editingEnabled=true;(i=this.inputElement)===null||i===void 0?void 0:i.setFocus();this.calciteInternalInlineEditableEnableEditingChange.emit()};this.disableEditing=()=>{this.editingEnabled=false};this.cancelEditing=()=>{if(this.inputElement){this.inputElement.value=this.valuePriorToEditing}this.disableEditing();this.enableEditingButton.setFocus();if(!this.editingEnabled&&!!this.shouldEmitCancel){this.calciteInlineEditableEditCancel.emit()}};this.escapeKeyHandler=async t=>{var i;if(t.defaultPrevented){return}if(t.key==="Escape"){t.preventDefault();this.cancelEditing()}if(t.key==="Tab"&&this.shouldShowControls){if(!t.shiftKey&&t.target===this.inputElement){t.preventDefault();this.cancelEditingButton.setFocus()}if(!!t.shiftKey&&t.target===this.cancelEditingButton){t.preventDefault();(i=this.inputElement)===null||i===void 0?void 0:i.setFocus()}}};this.cancelEditingHandler=async t=>{t.preventDefault();this.cancelEditing()};this.enableEditingHandler=async t=>{if(this.disabled||t.target===this.cancelEditingButton||t.target===this.confirmEditingButton){return}t.preventDefault();if(!this.editingEnabled){this.enableEditing()}};this.confirmChangesHandler=async t=>{t.preventDefault();this.calciteInlineEditableEditConfirm.emit();try{if(this.afterConfirm){this.loading=true;await this.afterConfirm();this.disableEditing();this.enableEditingButton.setFocus()}}catch(t){}finally{this.loading=false}};this.disabled=false;this.editingEnabled=false;this.loading=false;this.controls=false;this.scale=undefined;this.afterConfirm=undefined;this.messages=undefined;this.messageOverrides=undefined;this.defaultMessages=undefined;this.effectiveLocale=undefined}disabledWatcher(t){if(this.inputElement){this.inputElement.disabled=t}}editingEnabledWatcher(t,i){if(this.inputElement){this.inputElement.editingEnabled=t}if(!t&&!!i){this.shouldEmitCancel=true}}onMessagesChange(){}connectedCallback(){var t;n(this);d(this);u(this);v(this);(t=this.mutationObserver)===null||t===void 0?void 0:t.observe(this.el,{childList:true});this.mutationObserverCallback()}async componentWillLoad(){b(this);await y(this)}componentDidLoad(){p(this)}disconnectedCallback(){var t;c(this);l(this);g(this);k(this);(t=this.mutationObserver)===null||t===void 0?void 0:t.disconnect()}componentDidRender(){o(this)}render(){return s(r,{key:"9d804b289b009024155d985a82cbca393acc3d99",disabled:this.disabled},s("div",{key:"b9cfaa90b5b8d805164ff3cd411ebd711bc697fa",class:C.wrapper,onClick:this.enableEditingHandler,onKeyDown:this.escapeKeyHandler},s("div",{key:"04f0184aff5d1c69ccddb53d9772dc335ea8b94d",class:C.inputWrapper},s("slot",{key:"2bd11ced5206f298130447ac4ae078eff6d78aa9"})),s("div",{key:"54ce37f7263519eefe47dd92cc7b5a5ce46b22bf",class:C.controlsWrapper},s("calcite-button",{key:"3e587e9c886d0c59a790f2011b836d557a0d4f9b",appearance:"transparent",class:C.enableEditingButton,disabled:this.disabled,iconStart:"pencil",kind:"neutral",label:this.messages.enableEditing,onClick:this.enableEditingHandler,ref:t=>this.enableEditingButton=t,scale:this.scale,style:{opacity:this.editingEnabled?"0":"1",width:this.editingEnabled?"0":"inherit"},type:"button"}),this.shouldShowControls&&[s("div",{key:"fe8561923218638a825642cb63cc917c5ea7dd24",class:C.cancelEditingButtonWrapper},s("calcite-button",{key:"821b37b750bd5418a15701217d12debb4e79adbf",appearance:"transparent",class:C.cancelEditingButton,disabled:this.disabled,iconStart:"x",kind:"neutral",label:this.messages.cancelEditing,onClick:this.cancelEditingHandler,ref:t=>this.cancelEditingButton=t,scale:this.scale,type:"button"})),s("calcite-button",{key:"2a6dc4c239b7510397ec2d2a7d609a9d7747a49d",appearance:"solid",class:C.confirmChangesButton,disabled:this.disabled,iconStart:"check",kind:"brand",label:this.messages.confirmChanges,loading:this.loading,onClick:this.confirmChangesHandler,ref:t=>this.confirmEditingButton=t,scale:this.scale,type:"button"})])))}blurHandler(){if(!this.controls){this.disableEditing()}}effectiveLocaleChange(){w(this,this.effectiveLocale)}async setFocus(){var t;await f(this);(t=this.el)===null||t===void 0?void 0:t.focus()}mutationObserverCallback(){var t;this.updateSlottedInput();this.scale=this.scale||((t=this.inputElement)===null||t===void 0?void 0:t.scale)}onLabelClick(){this.setFocus()}updateSlottedInput(){const t=a(this.el,{matches:"calcite-input"});this.inputElement=t;if(!t){return}this.inputElement.disabled=this.disabled;this.inputElement.label=this.inputElement.label||h(this)}get shouldShowControls(){return this.editingEnabled&&this.controls}static get delegatesFocus(){return true}static get assetsDirs(){return["assets"]}get el(){return e(this)}static get watchers(){return{disabled:["disabledWatcher"],editingEnabled:["editingEnabledWatcher"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};j.style=E;export{j as calcite_inline_editable};
//# sourceMappingURL=p-41602b21.entry.js.map