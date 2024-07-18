import{r as t,h as e,H as n,a}from"./p-ce275af6.js";import{c as o,s as i,a as c}from"./p-4da87082.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.10.1
 */const r={textContainer:"text-container",fullName:"full-name",username:"username",button:"button"};const s=":host{display:inline-flex;outline:2px solid transparent;outline-offset:2px}:host .button{background-color:transparent;border:none;margin:0px;display:flex;cursor:pointer;align-items:center;justify-content:center;font-family:var(--calcite-font-family);font-size:var(--calcite-font-size-0);line-height:1.25rem;outline-color:transparent;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;border-block-end:2px solid transparent}:host(:hover) .button,:host(:focus) .button{background-color:var(--calcite-color-foreground-2)}:host(:focus) .button{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}:host(:active) .button{background-color:var(--calcite-color-foreground-3);color:var(--calcite-color-text-1)}:host([active]) .button{border-color:var(--calcite-color-brand);color:var(--calcite-color-text-1);--calcite-ui-icon-color:var(--calcite-color-brand)}.text-container{margin-block-start:0.125rem;display:flex;flex-direction:column;padding-inline:1rem;text-align:start}calcite-avatar{padding-inline:1rem}calcite-avatar~.text-container{padding-inline-start:0px}.full-name{margin-inline-start:0px;font-size:var(--calcite-font-size-0);font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1)}.username{color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host([hidden]){display:none}[hidden]{display:none}";const l=class{constructor(e){t(this,e);this.active=undefined;this.fullName=undefined;this.label=undefined;this.textDisabled=false;this.thumbnail=undefined;this.userId=undefined;this.username=undefined}async setFocus(){await o(this);this.el.focus()}componentWillLoad(){i(this)}componentDidLoad(){c(this)}render(){return e(n,{key:"4f9184afacfe78dd727f83366136f03f9ff1204e"},e("button",{key:"d62a00b6e44c13fba6538d54205e1bbac46709e1","aria-label":this.label,class:r.button},e("calcite-avatar",{key:"259f33b09e0c08f7ac88e06b482a86fd8f5f50bd","full-name":this.fullName,label:this.label,thumbnail:this.thumbnail,"user-id":this.userId,username:this.username}),(this.fullName||this.username)&&!this.textDisabled&&e("div",{key:"d2602f1379d7e4ce1a0dcd9f2c1dca88adaff020",class:r.textContainer},this.fullName&&e("span",{class:r.fullName,key:r.fullName},this.fullName),this.username&&e("span",{class:r.username,key:r.username},this.username))))}static get delegatesFocus(){return true}get el(){return a(this)}};l.style=s;export{l as calcite_navigation_user};
//# sourceMappingURL=p-c3ef4c9c.entry.js.map