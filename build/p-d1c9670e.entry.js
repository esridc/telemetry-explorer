import{r as e,c as t,h as i,H as c,a as o}from"./p-ce275af6.js";import{c as a,d as n}from"./p-da9d82b9.js";import{g as s}from"./p-e4f14b9d.js";import{g as l}from"./p-2f33ceac.js";import{c as r,d,u as b,I as h}from"./p-1a101545.js";import{g as m,i as u,a as f}from"./p-85623e6a.js";import{g as p}from"./p-bb2a43ec.js";import"./p-118f21c7.js";import"./p-3a41f8f2.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.10.1
 */const g={icon:"icon",iconActive:"icon--active",iconIndent:"icon--indent",custom:"icon--custom",dot:"icon--dot",single:"label--single",label:"label",active:"label--active",selected:"label--selected",title:"title",textContainer:"text-container",filterMatch:"filter-match"};const x='@charset "UTF-8";:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host([hidden]){display:none}[hidden]{display:none}.scale--s{font-size:var(--calcite-font-size--2);line-height:1rem;--calcite-combobox-item-spacing-unit-l:0.5rem;--calcite-combobox-item-spacing-unit-s:0.25rem;--calcite-combobox-item-spacing-indent:0.5rem;--calcite-combobox-item-selector-icon-size:1rem}.scale--m{font-size:var(--calcite-font-size--1);line-height:1rem;--calcite-combobox-item-spacing-unit-l:0.75rem;--calcite-combobox-item-spacing-unit-s:0.5rem;--calcite-combobox-item-spacing-indent:0.75rem;--calcite-combobox-item-selector-icon-size:1rem}.scale--l{font-size:var(--calcite-font-size-0);line-height:1.25rem;--calcite-combobox-item-spacing-unit-l:1rem;--calcite-combobox-item-spacing-unit-s:0.625rem;--calcite-combobox-item-spacing-indent:1rem;--calcite-combobox-item-selector-icon-size:1.5rem}.container{--calcite-combobox-item-indent-value:calc(\n    var(--calcite-combobox-item-spacing-indent) * var(--calcite-combobox-item-spacing-indent-multiplier)\n  )}:host(:focus){--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host,ul{margin:0px;display:flex;flex-direction:column;padding:0px}:host(:focus),ul:focus{outline:2px solid transparent;outline-offset:2px}.label{position:relative;box-sizing:border-box;display:flex;inline-size:100%;min-inline-size:100%;cursor:pointer;align-items:center;color:var(--calcite-color-text-3);text-decoration-line:none;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);outline-color:transparent;word-wrap:break-word;word-break:break-word;padding-block:var(--calcite-combobox-item-spacing-unit-s);padding-inline:var(--calcite-combobox-item-spacing-unit-l)}:host([disabled]) .label{cursor:default}.label--selected{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1)}.label--active{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.label:hover,.label:active{background-color:var(--calcite-color-foreground-2);color:var(--calcite-color-text-1);text-decoration-line:none;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.title{padding-block:0;padding-inline:var(--calcite-combobox-item-spacing-unit-l)}.icon{display:inline-flex;opacity:0;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);color:var(--calcite-color-border-1)}.icon--indent{padding-inline-start:var(--calcite-combobox-item-indent-value)}.icon--custom{margin-block-start:-1px;padding-inline-start:var(--calcite-combobox-item-spacing-unit-l);color:var(--calcite-color-text-3)}.icon--active{color:var(--calcite-color-text-1)}.icon--dot{display:flex;justify-content:center;min-inline-size:var(--calcite-combobox-item-selector-icon-size)}.icon--dot::before{text-align:start;content:"•"}.label--active .icon{opacity:1}.label--selected .icon{opacity:1;color:var(--calcite-color-brand)}:host(:hover[disabled]) .icon{opacity:1}.filter-match{font-weight:var(--calcite-font-weight-bold);color:var(--calcite-color-text-1);background-color:var(--calcite-color-foreground-current)}';const v=class{constructor(i){e(this,i);this.calciteComboboxItemChange=t(this,"calciteComboboxItemChange",6);this.itemClickHandler=()=>{this.toggleSelected()};this.disabled=false;this.selected=false;this.active=false;this.ancestors=undefined;this.guid=l();this.icon=undefined;this.iconFlipRtl=false;this.textLabel=undefined;this.filterTextMatchPattern=undefined;this.value=undefined;this.filterDisabled=undefined;this.selectionMode="multiple";this.scale="m"}selectedWatchHandler(){this.calciteComboboxItemChange.emit()}connectedCallback(){this.ancestors=m(this.el);a(this);r(this)}disconnectedCallback(){n(this);d(this)}componentDidRender(){b(this)}toggleSelected(){const e=this.selectionMode==="single-persist";if(this.disabled||e&&this.selected){return}this.selected=!this.selected}renderIcon(e){return this.icon?i("calcite-icon",{class:{[g.custom]:!!this.icon,[g.iconActive]:this.icon&&this.selected,[g.iconIndent]:true},flipRtl:this.iconFlipRtl,icon:this.icon||e,key:"icon",scale:p(this.scale)}):null}renderSelectIndicator(e,t){return e?i("span",{class:{[g.icon]:true,[g.dot]:true,[g.iconIndent]:true}}):i("calcite-icon",{class:{[g.icon]:true,[g.iconActive]:this.selected,[g.iconIndent]:true},flipRtl:this.iconFlipRtl,icon:t,key:"indicator",scale:p(this.scale)})}renderChildren(){if(s(this.el)){return i("ul",{key:"default-slot-container"},i("slot",null))}return null}render(){const{disabled:e}=this;const t=u(this.selectionMode);const o=t&&!e;const a=t?"dot":"check";const n=e?"":a;const s={[g.label]:true,[g.selected]:this.selected,[g.active]:this.active,[g.single]:t};const l=f(this.el);return i(c,{key:"24539cb8c385eba17113acbc986c5313782abc6c","aria-hidden":"true"},i(h,{key:"115e856cd8a456a8d70431f87f81cae4b5ed3197",disabled:e},i("div",{key:"c440f95366563eddee178c1d0e89bea535699dd4",class:`container scale--${this.scale}`,style:{"--calcite-combobox-item-spacing-indent-multiplier":`${l}`}},i("li",{key:"5cce5bf58b17ff1ab86d7eb009ff3084bbf487ba",class:s,id:this.guid,onClick:this.itemClickHandler},this.renderSelectIndicator(o,n),this.renderIcon(n),i("span",{key:"6b0055d09916fe03b37d90e2d1ac5b59a47ad3bc",class:"title"},this.renderTextContent())),this.renderChildren())))}renderTextContent(){if(!this.filterTextMatchPattern){return this.textLabel}const e=this.textLabel.split(this.filterTextMatchPattern);if(e.length>1){e[1]=i("mark",{class:g.filterMatch},e[1])}return e}get el(){return o(this)}static get watchers(){return{selected:["selectedWatchHandler"]}}};v.style=x;export{v as calcite_combobox_item};
//# sourceMappingURL=p-d1c9670e.entry.js.map