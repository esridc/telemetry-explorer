import{r as e,c as t,h as i,H as o,a as n}from"./p-ce275af6.js";import{t as s}from"./p-e4f14b9d.js";import{c as a,s as c,a as l}from"./p-4da87082.js";import{g as r}from"./p-bb2a43ec.js";import{u as d,I as h}from"./p-1a101545.js";import{C as p}from"./p-80f94a1b.js";import"./p-2f33ceac.js";import"./p-3a41f8f2.js";const m=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;flex-grow:1;align-items:center;outline-color:transparent}.container{position:relative;display:flex;flex-grow:1;cursor:pointer;align-items:center;color:var(--calcite-color-text-3);text-decoration-line:none;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);text-align:start}.container a{position:relative;display:flex;flex-grow:1;cursor:pointer;align-items:center;color:var(--calcite-color-text-3);text-decoration-line:none;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);outline-color:transparent}.dropdown-item-content{flex:1 1 auto;padding-block:0.125rem}.dropdown-item-icon{position:relative;opacity:0;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:scale(0.9)}:host([scale=s]) .container{padding-block:0.25rem;padding-inline:0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) .dropdown-item-icon,:host([scale=s]) .dropdown-item-icon--start{padding-inline-end:var(--calcite-spacing-sm)}:host([scale=s]) .dropdown-item-icon--end{padding-inline-start:var(--calcite-spacing-sm)}:host([scale=m]) .container{padding-block:0.5rem;padding-inline:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) .dropdown-item-icon,:host([scale=m]) .dropdown-item-icon--start{padding-inline-end:var(--calcite-spacing-md)}:host([scale=m]) .dropdown-item-icon--end{padding-inline-start:var(--calcite-spacing-md)}:host([scale=l]) .container{padding-block:0.625rem;padding-inline:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) .dropdown-item-icon,:host([scale=l]) .dropdown-item-icon--start{padding-inline-end:var(--calcite-spacing-xl)}:host([scale=l]) .dropdown-item-icon--end{padding-inline-start:var(--calcite-spacing-xl)}:host(:focus){outline:2px solid transparent;outline-offset:2px;outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}:host(:focus) .container{color:var(--calcite-color-text-1);text-decoration-line:none}:host(:hover:not([disabled])) .container,:host(:active:not([disabled])) .container{background-color:var(--calcite-color-foreground-2);color:var(--calcite-color-text-1);text-decoration-line:none}:host(:hover:not([disabled])) .dropdown-link,:host(:active:not([disabled])) .dropdown-link{color:var(--calcite-color-text-1)}:host(:active:not([disabled])) .container{background-color:var(--calcite-color-foreground-3)}:host([selected]) .container:not(.container--none-selection),:host([selected]) .dropdown-link{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1)}:host([selected]) .container:not(.container--none-selection) calcite-icon,:host([selected]) .dropdown-link calcite-icon{color:var(--calcite-color-brand)}:host(:hover:not([disabled])) .dropdown-item-icon{color:var(--calcite-color-border-1);opacity:1}:host([selected]) .dropdown-item-icon{color:var(--calcite-color-brand);opacity:1}:host([hidden]){display:none}[hidden]{display:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}";const f=class{constructor(i){e(this,i);this.calciteDropdownItemSelect=t(this,"calciteDropdownItemSelect",6);this.calciteInternalDropdownItemSelect=t(this,"calciteInternalDropdownItemSelect",6);this.calciteInternalDropdownItemKeyEvent=t(this,"calciteInternalDropdownItemKeyEvent",6);this.calciteInternalDropdownCloseRequest=t(this,"calciteInternalDropdownCloseRequest",6);this.disabled=false;this.href=undefined;this.iconFlipRtl=undefined;this.iconStart=undefined;this.iconEnd=undefined;this.label=undefined;this.rel=undefined;this.selected=false;this.target=undefined;this.selectionMode="single";this.scale="m"}async setFocus(){var e;await a(this);(e=this.el)===null||e===void 0?void 0:e.focus()}componentWillLoad(){c(this);this.initialize()}componentDidLoad(){l(this)}connectedCallback(){this.initialize()}componentDidRender(){d(this)}render(){const{href:e,selectionMode:t,label:n,iconFlipRtl:a}=this;const c=i("calcite-icon",{key:"7a49a68a114bbce2e5952ac3e1155bf1ab8988de",class:p.iconStart,flipRtl:a==="start"||a==="both",icon:this.iconStart,scale:r(this.scale)});const l=i("span",{key:"8b288dfdc41b23e69be84228b5fc9457f054221a",class:p.itemContent},i("slot",{key:"845d4d31ab01bf4cf37f8a03f8a129a3c297070d"}));const d=i("calcite-icon",{key:"d25c100431814a69d32ee8b1e2ae24ea507ccd49",class:p.iconEnd,flipRtl:a==="end"||a==="both",icon:this.iconEnd,scale:r(this.scale)});const m=this.iconStart&&this.iconEnd?[c,l,d]:this.iconStart?[c,l]:this.iconEnd?[l,d]:l;const f=!e?m:i("a",{"aria-label":n,class:p.link,href:e,ref:e=>this.childLink=e,rel:this.rel,tabIndex:-1,target:this.target},m);const b=e?null:t==="single"?"menuitemradio":t==="multiple"?"menuitemcheckbox":"menuitem";const u=t!=="none"?s(this.selected):null;const{disabled:g}=this;return i(o,{key:"b74558167715baacec14b7d5fa65fc39ae4c7892","aria-checked":u,"aria-label":!e?n:"",role:b,tabIndex:g?-1:0},i(h,{key:"70846dbb6b6619591122384f00a0bbbbfe367376",disabled:g},i("div",{key:"7143c055705c6d83183986e0418011048c01f184",class:{[p.container]:true,[p.containerNone]:t==="none"}},t!=="none"?i("calcite-icon",{class:p.icon,icon:t==="multiple"?"check":"bullet-point",scale:r(this.scale)}):null,f)))}onClick(){this.emitRequestedItem()}keyDownHandler(e){switch(e.key){case" ":case"Enter":this.emitRequestedItem();if(this.href){this.childLink.click()}e.preventDefault();break;case"Escape":this.calciteInternalDropdownCloseRequest.emit();e.preventDefault();break;case"Tab":this.calciteInternalDropdownItemKeyEvent.emit({keyboardEvent:e});break;case"ArrowUp":case"ArrowDown":case"Home":case"End":e.preventDefault();this.calciteInternalDropdownItemKeyEvent.emit({keyboardEvent:e});break}}updateActiveItemOnChange(e){const t=e.composedPath().includes(this.parentDropdownGroupEl);if(t){this.requestedDropdownGroup=e.detail.requestedDropdownGroup;this.requestedDropdownItem=e.detail.requestedDropdownItem;this.determineActiveItem()}e.stopPropagation()}initialize(){this.parentDropdownGroupEl=this.el.closest("calcite-dropdown-group");if(this.selectionMode==="none"){this.selected=false}}determineActiveItem(){switch(this.selectionMode){case"multiple":if(this.el===this.requestedDropdownItem){this.selected=!this.selected}break;case"single":if(this.el===this.requestedDropdownItem){this.selected=true}else if(this.requestedDropdownGroup===this.parentDropdownGroupEl){this.selected=false}break;case"none":this.selected=false;break}}emitRequestedItem(){this.calciteDropdownItemSelect.emit();this.calciteInternalDropdownItemSelect.emit({requestedDropdownItem:this.el,requestedDropdownGroup:this.parentDropdownGroupEl})}get el(){return n(this)}};f.style=m;export{f as calcite_dropdown_item};
//# sourceMappingURL=p-06efbf69.entry.js.map