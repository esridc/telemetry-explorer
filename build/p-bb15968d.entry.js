import{r as t,c as e,h as i,a as s,H as n}from"./p-ce275af6.js";import{f as a}from"./p-8df0e6b9.js";import{c as o,u as c,d as r,I as l}from"./p-1a101545.js";import{s as d,a as h,c as f}from"./p-4da87082.js";import{c as p,d as u}from"./p-373caea5.js";import{u as m,s as b,c as g,d as v}from"./p-93fac8b6.js";import{d as y}from"./p-58421494.js";import{b as x}from"./p-e4f14b9d.js";import{S as k,C as j}from"./p-17add268.js";import"./p-2cee5187.js";import"./p-118f21c7.js";import"./p-2f33ceac.js";import"./p-3a41f8f2.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.10.1
 */const w={container:"container",searchIcon:"search-icon"};const C={search:"search",close:"x"};const z=250;const S=":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;inline-size:100%}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.container{display:flex;inline-size:100%;padding:0.5rem}label{position:relative;margin-inline:0.25rem;margin-block:0px;display:flex;inline-size:100%;align-items:center;overflow:hidden}input[type=text]{margin-block-end:0.25rem;inline-size:100%;border-style:none;background-color:transparent;padding-block:0.25rem;font-family:inherit;font-size:var(--calcite-font-size--2);line-height:1rem;color:var(--calcite-color-text-1);padding-inline-end:0.25rem;padding-inline-start:1.5rem;transition:padding var(--calcite-animation-timing), box-shadow var(--calcite-animation-timing)}input[type=text]::-ms-clear{display:none}calcite-input{inline-size:100%}.search-icon{position:absolute;display:flex;color:var(--calcite-color-text-2);inset-inline-start:0;transition:inset-inline-start var(--calcite-animation-timing), inset-inline-end var(--calcite-animation-timing), opacity var(--calcite-animation-timing)}input[type=text]:focus{border-color:var(--calcite-color-brand);outline:2px solid transparent;outline-offset:2px;padding-inline:0.25rem}input[type=text]:focus~.search-icon{inset-inline-start:calc(1rem * -1);opacity:0}.clear-button{display:flex;cursor:pointer;align-items:center;border-width:0px;background-color:transparent;color:var(--calcite-color-text-2)}.clear-button:hover,.clear-button:focus{color:var(--calcite-color-text-1)}:host([hidden]){display:none}[hidden]{display:none}";const H=class{constructor(i){t(this,i);this.calciteFilterChange=e(this,"calciteFilterChange",6);this.filterDebounced=y(((t,e=false,i)=>this.items.length&&this.updateFiltered(a(this.items,t,this.filterProps),e,i)),z);this.inputHandler=t=>{const e=t.target;this.value=e.value;this.filterDebounced(e.value,true)};this.keyDownHandler=t=>{if(t.defaultPrevented){return}if(t.key==="Escape"){this.clear();t.preventDefault()}if(t.key==="Enter"){t.preventDefault()}};this.clear=()=>{this.value="";this.filterDebounced("",true);this.setFocus()};this.items=[];this.disabled=false;this.filteredItems=[];this.filterProps=undefined;this.placeholder=undefined;this.scale="m";this.value="";this.messages=undefined;this.messageOverrides=undefined;this.effectiveLocale=undefined;this.defaultMessages=undefined}watchItemsHandler(){this.filterDebounced(this.value)}filterPropsHandler(){this.filterDebounced(this.value)}onMessagesChange(){}valueHandler(t){this.filterDebounced(t)}effectiveLocaleChange(){m(this,this.effectiveLocale)}async componentWillLoad(){d(this);if(this.items.length){this.updateFiltered(a(this.items,this.value,this.filterProps))}await b(this)}connectedCallback(){o(this);p(this);g(this)}componentDidRender(){c(this)}disconnectedCallback(){r(this);u(this);v(this);this.filterDebounced.cancel()}componentDidLoad(){h(this)}async filter(t=this.value){return new Promise((e=>{this.value=t;this.filterDebounced(t,false,e)}))}async setFocus(){var t;await f(this);(t=this.el)===null||t===void 0?void 0:t.focus()}updateFiltered(t,e=false,i){this.filteredItems=t;if(e){this.calciteFilterChange.emit()}i===null||i===void 0?void 0:i()}render(){const{disabled:t,scale:e}=this;return i(l,{key:"f22271e30b567b7d88898e0c1c6d2131d3eecdba",disabled:t},i("div",{key:"ce9ca2a8669e825fc0a9bb6bbb64e14054e80308",class:w.container},i("label",{key:"031e40138a6dc0c2ad814e73e2fd7e24ea03f017"},i("calcite-input",{key:"d66d58ea14ed30279b8b2ea063651a53d4cf0a0d",clearable:true,disabled:t,icon:C.search,label:this.messages.label,messageOverrides:{clear:this.messages.clear},onCalciteInputInput:this.inputHandler,onKeyDown:this.keyDownHandler,placeholder:this.placeholder,ref:t=>{this.textInput=t},scale:e,type:"text",value:this.value}))))}static get delegatesFocus(){return true}static get assetsDirs(){return["assets"]}get el(){return s(this)}static get watchers(){return{items:["watchItemsHandler"],filterProps:["filterPropsHandler"],messageOverrides:["onMessagesChange"],value:["valueHandler"],effectiveLocale:["effectiveLocaleChange"]}}};H.style=S;const E=":host([disabled]) .content{cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) .content *,:host([disabled]) .content ::slotted(*){pointer-events:none}:host{display:flex;flex:1 1 0%;flex-direction:column}.container{display:flex;flex:1 1 auto;align-items:stretch;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-2)}.content{display:flex;flex:1 1 auto;flex-direction:column;justify-content:center;font-size:var(--calcite-font-size--2);line-height:1.375;padding-inline:var(--calcite-stack-padding-inline, 0.75rem);padding-block:var(--calcite-stack-padding-block, 0.5rem)}.content-start{justify-content:flex-start}.content-end{justify-content:flex-end}.content-start,.content-end{flex:0 1 auto}.content-start ::slotted(calcite-icon),.content-end ::slotted(calcite-icon){margin-inline:0.75rem;align-self:center}.actions-start,.actions-end,.content-start,.content-end{display:flex;align-items:center}.actions-start ::slotted(calcite-action),.actions-start ::slotted(calcite-action-menu),.actions-start ::slotted(calcite-handle),.actions-start ::slotted(calcite-dropdown),.actions-end ::slotted(calcite-action),.actions-end ::slotted(calcite-action-menu),.actions-end ::slotted(calcite-handle),.actions-end ::slotted(calcite-dropdown){align-self:stretch;color:inherit}:host([hidden]){display:none}[hidden]{display:none}";const I=class{constructor(e){t(this,e);this.handleActionsStartSlotChange=t=>{this.hasActionsStart=x(t)};this.handleActionsEndSlotChange=t=>{this.hasActionsEnd=x(t)};this.handleContentStartSlotChange=t=>{this.hasContentStart=x(t)};this.handleContentEndSlotChange=t=>{this.hasContentEnd=x(t)};this.disabled=false;this.hasActionsStart=false;this.hasActionsEnd=false;this.hasContentStart=false;this.hasContentEnd=false}renderActionsStart(){const{hasActionsStart:t}=this;return i("div",{class:j.actionsStart,hidden:!t,key:"actions-start-container"},i("slot",{name:k.actionsStart,onSlotchange:this.handleActionsStartSlotChange}))}renderActionsEnd(){const{hasActionsEnd:t}=this;return i("div",{class:j.actionsEnd,hidden:!t,key:"actions-end-container"},i("slot",{name:k.actionsEnd,onSlotchange:this.handleActionsEndSlotChange}))}renderContentStart(){const{hasContentStart:t}=this;return i("div",{class:j.contentStart,hidden:!t},i("slot",{name:k.contentStart,onSlotchange:this.handleContentStartSlotChange}))}renderDefaultContent(){return i("div",{class:j.content},i("slot",null))}renderContentEnd(){const{hasContentEnd:t}=this;return i("div",{class:j.contentEnd,hidden:!t},i("slot",{name:k.contentEnd,onSlotchange:this.handleContentEndSlotChange}))}render(){return i(n,{key:"492c80b97264841866409c59337d0cf189f4d818"},i("div",{key:"a5c669572afa0de9029c4eb8104c58e226e71e4b",class:j.container},this.renderActionsStart(),this.renderContentStart(),this.renderDefaultContent(),this.renderContentEnd(),this.renderActionsEnd()))}};I.style=E;export{H as calcite_filter,I as calcite_stack};
//# sourceMappingURL=p-bb15968d.entry.js.map