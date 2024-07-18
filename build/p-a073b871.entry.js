import{r as e,c as i,h as t,F as n,a}from"./p-ce275af6.js";import{c as s,d as o}from"./p-da9d82b9.js";import{g as r}from"./p-e4f14b9d.js";import{c,d as l}from"./p-373caea5.js";import{u as d,c as h,s as f,d as p}from"./p-93fac8b6.js";import{H as m,c as g}from"./p-54809310.js";import"./p-118f21c7.js";import"./p-2f33ceac.js";import"./p-3a41f8f2.js";import"./p-2cee5187.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.10.1
 */const u={container:"container",header:"header",heading:"heading",close:"close",imageFrame:"image-frame",content:"content",info:"info"};const x={close:"x"};const b={thumbnail:"thumbnail"};const v=":host{position:relative;margin:1rem;box-sizing:border-box;display:flex;flex-direction:row;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-2);background-color:var(--calcite-color-foreground-1);font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-color-text-2)}:host *{box-sizing:border-box}.container{inline-size:100%;padding:1rem}:host([closed]),:host([closed]) .container{display:none}:host([selected]) .container{margin:0px;border-style:none;padding:0px}.header{margin:0px;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-color-text-2);color:var(--calcite-color-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:0.5rem}.header{margin-block-end:0.5rem}.header .heading{padding:0px;font-size:var(--calcite-font-size-0);line-height:1.25rem;color:var(--calcite-color-text-1)}.container[hidden]{display:none}.content{display:flex}.info{padding-block:0px;padding-inline:1rem;inline-size:70%}.info:only-child{inline-size:100%;padding-inline:0px}::slotted(p){margin-block-start:0px}::slotted(a){outline-color:transparent;color:var(--calcite-color-brand)}::slotted(a:focus){outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.image-frame{inline-size:25%}.image-frame img{max-inline-size:100%}::slotted(img){max-inline-size:100%}:host([hidden]){display:none}[hidden]{display:none}";const y=class{constructor(t){e(this,t);this.calciteTipDismiss=i(this,"calciteTipDismiss",6);this.hideTip=()=>{this.closed=true;this.calciteTipDismiss.emit()};this.closed=false;this.closeDisabled=false;this.heading=undefined;this.headingLevel=undefined;this.selected=false;this.messages=undefined;this.messageOverrides=undefined;this.defaultMessages=undefined;this.effectiveLocale=""}onMessagesChange(){}effectiveLocaleChange(){d(this,this.effectiveLocale)}connectedCallback(){s(this);c(this);h(this)}async componentWillLoad(){await f(this)}disconnectedCallback(){o(this);l(this);p(this)}renderHeader(){var e;const{heading:i,headingLevel:n,el:a}=this;const s=(e=a.closest("calcite-tip-manager"))===null||e===void 0?void 0:e.headingLevel;const o=s?g(s+1):null;const r=n||o;return i?t("header",{class:u.header},t(m,{class:u.heading,level:r},i)):null}renderDismissButton(){const{closeDisabled:e,hideTip:i}=this;return!e?t("calcite-action",{class:u.close,icon:x.close,onClick:i,scale:"l",text:this.messages.close}):null}renderImageFrame(){const{el:e}=this;return r(e,b.thumbnail)?t("div",{class:u.imageFrame,key:"thumbnail"},t("slot",{name:b.thumbnail})):null}renderInfoNode(){return t("div",{class:u.info},t("slot",null))}renderContent(){return t("div",{class:u.content},this.renderImageFrame(),this.renderInfoNode())}render(){return t(n,{key:"883679cf3cadde5f70e23f3431798e47a669b589"},t("article",{key:"c821d3ce0496b9e1dfd9689d021ad08e40e87a67",class:u.container},this.renderHeader(),this.renderContent()),this.renderDismissButton())}static get assetsDirs(){return["assets"]}get el(){return a(this)}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};y.style=v;export{y as calcite_tip};
//# sourceMappingURL=p-a073b871.entry.js.map