import{r as e,c as t,h as i,H as a,a as n}from"./p-ce275af6.js";import{c as o,d as c}from"./p-da9d82b9.js";import{b as s,f as r,g as l,t as d}from"./p-e4f14b9d.js";import{c as h,d as g,u as p,I as f}from"./p-1a101545.js";import{c as m,d as u}from"./p-373caea5.js";import{u as b,c as v,d as x,s as y}from"./p-93fac8b6.js";import{H as k}from"./p-54809310.js";import{c as w,s as j,a as C}from"./p-4da87082.js";import{o as z}from"./p-d18b9957.js";import"./p-118f21c7.js";import"./p-2f33ceac.js";import"./p-3a41f8f2.js";import"./p-2cee5187.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.10.1
 */const B={content:"content",toggle:"toggle",header:"header"};const S={actionsEnd:"actions-end",button:"button",container:"container",content:"content",contentStart:"content-start",controlContainer:"control-container",description:"description",header:"header",headerContainer:"header-container",heading:"heading",icon:"icon",iconStart:"icon--start",iconEnd:"icon--end",iconEndContainer:"icon-end-container",invalid:"invalid",statusIcon:"status-icon",summary:"summary",title:"title",toggle:"toggle",toggleIcon:"toggle-icon",valid:"valid"};const L={actionsEnd:"actions-end",contentStart:"content-start",control:"control",headerMenuActions:"header-menu-actions",icon:"icon"};const E={opened:"chevron-up",closed:"chevron-down",valid:"check-circle",invalid:"exclamation-mark-triangle"};const I=':host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{--calcite-icon-size:1rem;--calcite-spacing-eighth:0.125rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;flex-shrink:0;flex-grow:0;flex-direction:column;border-width:0px;border-block-end-width:1px;border-style:solid;border-color:var(--calcite-color-border-3);padding:0px;transition-property:margin;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;transition-timing-function:cubic-bezier(0.215, 0.440, 0.420, 0.880);flex-basis:auto}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.header{margin:0px;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-color-text-2);color:var(--calcite-color-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:0.5rem}.header{justify-content:flex-start;padding:var(--calcite-spacing-md)}.header,.toggle{grid-area:header}.header-container{display:grid;align-items:stretch;grid-template:auto/auto 1fr auto auto;grid-template-areas:"handle header control menu actions-end";grid-column:header-start/actions-end;grid-row:1/2}.content-start,.icon,.icon--start,.icon--end{margin-inline-end:var(--calcite-spacing-md)}.icon calcite-loader{margin-inline-end:var(--calcite-spacing-xxxs)}.icon--start,.icon--end{color:var(--calcite-color-text-3)}.actions-end{grid-area:actions-end}.toggle{margin:0px;display:flex;cursor:pointer;flex-wrap:nowrap;align-items:center;justify-content:space-between;border-style:none;padding:0px;font-family:var(--calcite-font-family);outline-color:transparent;text-align:initial;background-color:transparent}.toggle:hover{background-color:var(--calcite-color-foreground-2)}.toggle:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}calcite-loader[inline]{grid-area:control;align-self:center}calcite-handle{grid-area:handle}.title{margin:0px}.header .title .heading{padding:0px;font-size:var(--calcite-font-size--1);font-weight:var(--calcite-font-weight-medium);line-height:1.25;color:var(--calcite-color-text-2);transition-property:color;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);word-wrap:break-word;word-break:break-word}.description{margin-block-start:0.125rem;padding:0px;font-size:var(--calcite-font-size--2);line-height:1.375;color:var(--calcite-color-text-3);word-wrap:break-word;word-break:break-word}.icon{display:flex}.status-icon.valid{color:var(--calcite-color-status-success)}.status-icon.invalid{color:var(--calcite-color-status-danger)}@keyframes spin{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}100%{transform:rotate(360deg)}}.icon-end-container{display:flex;align-items:center;margin-inline-start:auto}.toggle-icon{align-self:center;justify-self:end;color:var(--calcite-color-text-3);transition-property:color;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);margin-inline-end:var(--calcite-spacing-md)}.toggle:hover .toggle-icon{color:var(--calcite-color-text-1)}.container{position:relative;display:flex;block-size:100%;flex-direction:column}.content{position:relative;min-block-size:0px;flex:1 1 0%}@keyframes in{0%{opacity:0}100%{opacity:1}}.content{animation:in var(--calcite-internal-animation-timing-slow) ease-in-out;padding-block:var(--calcite-block-padding, var(--calcite-spacing-sm));padding-inline:var(--calcite-block-padding, var(--calcite-spacing-md))}.content-start{display:flex;align-items:center;color:var(--calcite-color-text-3)}.control-container{margin:0px;display:flex;grid-area:control}calcite-action-menu{grid-area:menu}.actions-end{display:flex;align-items:stretch}:host([open]){margin-block:0.5rem}:host([open]) .header .title .heading{color:var(--calcite-color-text-1)}:host([hidden]){display:none}[hidden]{display:none}';const O=class{constructor(i){e(this,i);this.calciteBlockBeforeClose=t(this,"calciteBlockBeforeClose",6);this.calciteBlockBeforeOpen=t(this,"calciteBlockBeforeOpen",6);this.calciteBlockClose=t(this,"calciteBlockClose",6);this.calciteBlockOpen=t(this,"calciteBlockOpen",6);this.calciteBlockToggle=t(this,"calciteBlockToggle",6);this.openTransitionProp="opacity";this.onHeaderClick=()=>{this.open=!this.open;this.calciteBlockToggle.emit()};this.setTransitionEl=e=>{this.transitionEl=e};this.actionsEndSlotChangeHandler=e=>{this.hasEndActions=s(e)};this.handleContentStartSlotChange=e=>{this.hasContentStart=s(e)};this.collapsible=false;this.disabled=false;this.dragHandle=false;this.heading=undefined;this.headingLevel=undefined;this.iconEnd=undefined;this.iconFlipRtl=undefined;this.iconStart=undefined;this.loading=false;this.open=false;this.status=undefined;this.description=undefined;this.messages=undefined;this.messageOverrides=undefined;this.overlayPositioning="absolute";this.defaultMessages=undefined;this.effectiveLocale=undefined;this.hasContentStart=false;this.hasEndActions=false}openHandler(){z(this)}onMessagesChange(){}async setFocus(){await w(this);r(this.el)}onBeforeOpen(){this.calciteBlockBeforeOpen.emit()}onOpen(){this.calciteBlockOpen.emit()}onBeforeClose(){this.calciteBlockBeforeClose.emit()}onClose(){this.calciteBlockClose.emit()}effectiveLocaleChange(){b(this,this.effectiveLocale)}connectedCallback(){o(this);h(this);m(this);v(this)}disconnectedCallback(){g(this);u(this);x(this);c(this)}async componentWillLoad(){await y(this);j(this);if(this.open){z(this)}}componentDidLoad(){C(this)}componentDidRender(){p(this)}renderScrim(){const{loading:e}=this;const t=i("slot",null);return[e?i("calcite-scrim",{loading:e}):null,t]}renderLoaderStatusIcon(){const{loading:e,messages:t,status:a}=this;const n=!!l(this.el,L.icon);return e?i("div",{class:S.icon,key:"loader"},i("calcite-loader",{inline:true,label:t.loading})):a?i("div",{class:S.icon,key:"status-icon"},i("calcite-icon",{class:{[S.statusIcon]:true,[S.valid]:a=="valid",[S.invalid]:a=="invalid"},icon:E[a],scale:"s"})):n?i("div",{class:S.icon,key:"icon-slot"},i("slot",{key:"icon-slot",name:L.icon})):null}renderActionsEnd(){return i("div",{class:S.actionsEnd},i("slot",{name:L.actionsEnd,onSlotchange:this.actionsEndSlotChangeHandler}))}renderContentStart(){const{hasContentStart:e}=this;return i("div",{class:S.contentStart,hidden:!e},i("slot",{name:L.contentStart,onSlotchange:this.handleContentStartSlotChange}))}renderTitle(){const{heading:e,headingLevel:t,description:a}=this;return e||a?i("div",{class:S.title},i(k,{class:S.heading,level:t},e),a?i("div",{class:S.description},a):null):null}renderIcon(e){const{iconFlipRtl:t}=this;const a=t==="both"||e==="start"?t==="start":t==="end";const n=e==="start"?this.iconStart:this.iconEnd;const o=e==="start"?S.iconStart:S.iconEnd;if(!n){return undefined}return i("calcite-icon",{class:o,flipRtl:a,icon:n,key:n,scale:"s"})}render(){const{collapsible:e,el:t,loading:n,open:o,heading:c,messages:s}=this;const r=o?s.collapse:s.expand;const h=i("header",{key:"09de168983611cb923294443ec7a89942133e767",class:S.header,id:B.header},this.renderIcon("start"),this.renderContentStart(),this.renderLoaderStatusIcon(),this.renderTitle());const g=!!l(t,L.control);const p=!!l(t,L.headerMenuActions);const m=o?E.opened:E.closed;const u=i("div",{key:"2c03c73685db7feb04844be8f0b308add3eb2aa6",class:S.headerContainer},this.dragHandle?i("calcite-handle",{label:c}):null,e?i("button",{"aria-controls":B.content,"aria-describedby":B.header,"aria-expanded":e?d(o):null,class:S.toggle,id:B.toggle,onClick:this.onHeaderClick,title:r},h,i("div",{class:S.iconEndContainer},this.renderIcon("end"),i("calcite-icon",{class:S.toggleIcon,icon:m,scale:"s"}))):this.iconEnd?i("div",null,h,i("div",{class:S.iconEndContainer},this.renderIcon("end"))):h,g?i("div",{"aria-labelledby":B.header,class:S.controlContainer},i("slot",{name:L.control})):null,p?i("calcite-action-menu",{label:s.options,overlayPositioning:this.overlayPositioning},i("slot",{name:L.headerMenuActions})):null,this.renderActionsEnd());return i(a,{key:"e33a4f97740d5e0f6d41d5014546925c3637c40b"},i(f,{key:"88b24fc8283f230feccc910b9925fc9d6a23ae55",disabled:this.disabled},i("article",{key:"81e09b5a468cffcd68414ad518b69bd2ef56189c","aria-busy":d(n),class:{[S.container]:true}},u,i("section",{key:"44d82173efbdbeec15dbf3f7a9ec191bc2d17a11","aria-labelledby":B.toggle,class:S.content,hidden:!o,id:B.content,ref:this.setTransitionEl},this.renderScrim()))))}static get assetsDirs(){return["assets"]}get el(){return n(this)}static get watchers(){return{open:["openHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};O.style=I;export{O as calcite_block};
//# sourceMappingURL=p-417b7432.entry.js.map