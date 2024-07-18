import{r as e,c as o,h as i,H as t,a}from"./p-ce275af6.js";import{i as s,t as r}from"./p-e4f14b9d.js";import{c as n,d as c,H as l}from"./p-0469a2ff.js";import{c as d,d as h,u as b,I as p}from"./p-1a101545.js";import{i as f}from"./p-2cee5187.js";import{c as m,d as u,g as k}from"./p-f12cab61.js";import{c as v,s as y,a as x}from"./p-4da87082.js";import"./p-2f33ceac.js";import"./p-3a41f8f2.js";import"./p-bb2a43ec.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.10.1
 */const g={container:"container",track:"track",handle:"handle"};const z=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host([scale=s]) .container{block-size:0.75rem}:host([scale=s]) .track{block-size:0.75rem;inline-size:1.5rem}:host([scale=s]) .handle{block-size:0.5rem;inline-size:0.5rem}:host([scale=m]) .container{block-size:1rem}:host([scale=m]) .track{block-size:1rem;inline-size:2rem}:host([scale=m]) .handle{block-size:0.75rem;inline-size:0.75rem}:host([scale=l]) .container{block-size:1.5rem}:host([scale=l]) .track{block-size:1.5rem;inline-size:3rem}:host([scale=l]) .handle{block-size:1.25rem;inline-size:1.25rem}:host{position:relative;display:inline-block;inline-size:auto;cursor:pointer;-webkit-user-select:none;user-select:none;vertical-align:middle;tap-highlight-color:transparent}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.container{outline-width:0px}.track{pointer-events:none;position:relative;box-sizing:border-box;display:inline-block;border-radius:9999px;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-2);background-color:var(--calcite-color-foreground-2);vertical-align:top;outline-color:transparent}:host(:focus) .track{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.handle{pointer-events:none;position:absolute;display:block;border-radius:9999px;border-width:2px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-foreground-1);transition-property:all;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);inset-block-start:-1px;inset-inline:-1px auto}.container:hover .handle,:host(:focus) .handle{border-color:var(--calcite-color-brand);box-shadow:inset 0 0 0 1px var(--calcite-color-brand)}:host([checked]) .track{border-color:var(--calcite-color-brand-hover);background-color:var(--calcite-color-brand)}:host([checked]) .handle{border-color:var(--calcite-color-brand);inset-inline:auto -1px}:host([checked]) .container:hover .handle{border-color:var(--calcite-color-brand-hover);box-shadow:inset 0 0 0 1px var(--calcite-color-brand-hover)}@media (forced-colors: active){:host([checked]) .track{background-color:canvasText}}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}";const w=class{constructor(i){e(this,i);this.calciteSwitchChange=o(this,"calciteSwitchChange",6);this.keyDownHandler=e=>{if(!this.disabled&&f(e.key)){this.toggle();e.preventDefault()}};this.clickHandler=()=>{if(this.disabled){return}this.toggle()};this.setSwitchEl=e=>{this.switchEl=e};this.disabled=false;this.form=undefined;this.label=undefined;this.name=undefined;this.scale="m";this.checked=false;this.value=undefined}async setFocus(){await v(this);s(this.switchEl)}syncHiddenFormInput(e){e.type="checkbox"}onLabelClick(){if(!this.disabled){this.toggle();this.setFocus()}}toggle(){this.checked=!this.checked;this.calciteSwitchChange.emit()}connectedCallback(){d(this);m(this);n(this)}componentWillLoad(){y(this)}componentDidLoad(){x(this)}disconnectedCallback(){h(this);u(this);c(this)}componentDidRender(){b(this)}render(){return i(t,{key:"12bb296580214f4accddf5efd8ef6a7bd6d3768d",onClick:this.clickHandler,onKeyDown:this.keyDownHandler},i(p,{key:"5f5627bf657f8dcb14360d4f7a0fa9adf7d4374e",disabled:this.disabled},i("div",{key:"f0b23182436727d14d18307bbc2532f08543f5ed","aria-checked":r(this.checked),"aria-label":k(this),class:g.container,ref:this.setSwitchEl,role:"switch",tabIndex:0},i("div",{key:"8913eda6b5cc9d4cf4304283bf9699009ab6fe16",class:g.track},i("div",{key:"8ade6efdaba228bde1b4c6cabe2910679d37d9bf",class:g.handle})),i(l,{key:"ded92b55e79a980484b39cb9e89e475fa92b67cf",component:this}))))}get el(){return a(this)}};w.style=z;export{w as calcite_switch};
//# sourceMappingURL=p-59df17b5.entry.js.map