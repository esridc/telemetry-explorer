import{r as e,c as t,h as i,H as o,a as r}from"./p-ce275af6.js";import{c as s,u as a,d as n,I as l}from"./p-1a101545.js";import{n as c,c as d,d as h}from"./p-373caea5.js";import{s as p,a as m,c as u}from"./p-4da87082.js";import{u as b,c as f,s as g,d as v}from"./p-93fac8b6.js";import"./p-e4f14b9d.js";import"./p-2f33ceac.js";import"./p-3a41f8f2.js";import"./p-2cee5187.js";import"./p-118f21c7.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.10.1
 */const y={container:"container",stepperItemContent:"stepper-item-content",stepperItemDescription:"stepper-item-description",stepperItemHeader:"stepper-item-header",stepperItemHeading:"stepper-item-heading",stepperItemHeaderText:"stepper-item-header-text",stepperItemNumber:"stepper-item-number",visuallyHidden:"visually-hidden"};const z=":host([layout=horizontal][disabled]) .stepper-item-header,:host([layout=horizontal-single][disabled]) .stepper-item-header,:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([layout=horizontal][disabled]) .stepper-item-header *,:host([layout=horizontal-single][disabled]) .stepper-item-header *,:host([disabled]) *,:host([layout=horizontal][disabled]) .stepper-item-header ::slotted(*),:host([layout=horizontal-single][disabled]) .stepper-item-header ::slotted(*),:host([disabled]) ::slotted(*){pointer-events:none}:host([scale=s]){--calcite-stepper-item-spacing-unit-s:0.25rem;--calcite-stepper-item-spacing-unit-m:0.75rem;--calcite-stepper-item-spacing-unit-l:1rem;--calcite-internal-stepper-action-inline-size:2rem;font-size:var(--calcite-font-size--1);line-height:1rem;margin-inline-end:0.25rem}:host([scale=s]) .stepper-item-description{font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]){--calcite-stepper-item-spacing-unit-s:0.5rem;--calcite-stepper-item-spacing-unit-m:1rem;--calcite-stepper-item-spacing-unit-l:1.25rem;--calcite-internal-stepper-action-inline-size:2.5rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;margin-inline-end:0.5rem}:host([scale=m]) .stepper-item-description{font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]){--calcite-stepper-item-spacing-unit-s:0.75rem;--calcite-stepper-item-spacing-unit-m:1.25rem;--calcite-stepper-item-spacing-unit-l:1.5rem;--calcite-internal-stepper-action-inline-size:3rem;font-size:var(--calcite-font-size-1);line-height:1.5rem;margin-inline-end:0.75rem}:host([scale=l]) .stepper-item-description{font-size:var(--calcite-font-size-0);line-height:1.25rem}:host{position:relative;display:flex;flex-grow:1;flex-direction:column;align-self:flex-start;margin-block-end:var(--calcite-stepper-item-spacing-unit-s)}:host .container{position:relative;display:flex;flex-grow:1;cursor:pointer;flex-direction:column;border-width:0px;border-block-start-width:2px;border-style:solid;border-color:var(--calcite-color-border-3);color:var(--calcite-color-text-3);text-decoration-line:none;outline:2px solid transparent;outline-offset:2px}:host{outline-color:transparent}:host(:focus){outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}:host .stepper-item-header{display:flex;cursor:pointer;align-items:flex-start}:host .stepper-item-content,:host .stepper-item-header{padding-block:var(--calcite-stepper-item-spacing-unit-l);padding-inline-end:var(--calcite-stepper-item-spacing-unit-m);text-align:start}:host .stepper-item-header *{display:inline-flex;align-items:center}:host .stepper-item-content{display:none;inline-size:100%;flex-direction:column;font-size:var(--calcite-font-size--2);line-height:1.375}:host .stepper-item-icon{margin-inline-end:var(--calcite-stepper-item-spacing-unit-m);margin-block-start:1px;display:inline-flex;block-size:0.75rem;flex-shrink:0;align-self:flex-start;color:var(--calcite-color-text-3);opacity:var(--calcite-opacity-disabled)}:host .stepper-item-header-text{flex-direction:column;text-align:initial;margin-inline-end:auto}:host .stepper-item-heading,:host .stepper-item-description{display:flex;inline-size:100%}:host .stepper-item-heading{margin-block-end:0.25rem;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-2)}:host .stepper-item-description{color:var(--calcite-color-text-3)}:host .stepper-item-number{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-3);margin-inline-end:var(--calcite-stepper-item-spacing-unit-m)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([complete]) .container{border-color:rgba(0, 122, 194, 0.5)}:host([complete]) .container .stepper-item-icon{color:var(--calcite-color-brand)}:host([error]) .container{border-block-start-color:var(--calcite-color-status-danger)}:host([error]) .container .stepper-item-number{color:var(--calcite-color-status-danger)}:host([error]) .container .stepper-item-icon{opacity:1;color:var(--calcite-color-status-danger)}:host(:hover:not([disabled]):not([selected])) .container,:host(:focus:not([disabled]):not([selected])) .container{border-block-start-color:var(--calcite-color-brand)}:host(:hover:not([disabled]):not([selected])) .container .stepper-item-heading,:host(:focus:not([disabled]):not([selected])) .container .stepper-item-heading{color:var(--calcite-color-text-1)}:host(:hover:not([disabled]):not([selected])) .container .stepper-item-description,:host(:focus:not([disabled]):not([selected])) .container .stepper-item-description{color:var(--calcite-color-text-2)}:host([error]:hover:not([disabled]):not([selected])) .container,:host([error]:focus:not([disabled]):not([selected])) .container{border-block-start-color:var(--calcite-color-status-danger-hover)}:host([selected]) .container{border-block-start-color:var(--calcite-color-brand)}:host([selected]) .container .stepper-item-heading{color:var(--calcite-color-text-1)}:host([selected]) .container .stepper-item-description{color:var(--calcite-color-text-2)}:host([selected]) .container .stepper-item-number{color:var(--calcite-color-brand)}:host([selected]) .container .stepper-item-icon{color:var(--calcite-color-brand);opacity:1}:host([selected]) .container .stepper-item-content{display:flex}:host([layout=vertical]) .container{margin-inline:0px;margin-block-start:0px;flex:1 1 auto;border-block-start-width:0px;border-style:solid;border-color:var(--calcite-color-border-3);padding-block:0px;border-inline-start-width:2px;padding-inline-start:var(--calcite-stepper-item-spacing-unit-l)}:host([layout=vertical]) .container .stepper-item-icon{order:3;margin-block:1px 0px;padding-inline-start:var(--calcite-stepper-item-spacing-unit-s);margin-inline-start:auto}:host([layout=vertical]) .container .stepper-item-header{padding-inline-end:0px}:host([layout=vertical]) .container .stepper-item-content{padding:0px}:host([layout=vertical][complete]) .container{border-color:rgba(0, 122, 194, 0.5)}:host([layout=vertical][complete]:hover:not([disabled]):not([selected])) .container,:host([layout=vertical][complete]:focus:not([disabled]):not([selected])) .container{border-color:var(--calcite-color-brand)}:host([layout=vertical][error]) .container{border-color:var(--calcite-color-status-danger)}:host([layout=vertical][selected]) .container{border-color:var(--calcite-color-brand)}:host([layout=vertical][selected]) .container .stepper-item-content:not(:empty){margin-block-end:var(--calcite-stepper-item-spacing-unit-l)}:host([layout=vertical]:hover:not([disabled]):not([selected])) .container,:host([layout=vertical]:focus:not([disabled]):not([selected])) .container{border-color:rgba(0, 122, 194, 0.5)}:host([layout=vertical][error]:hover:not([disabled]):not([selected])) .container,:host([layout=vertical][error]:focus:not([disabled]):not([selected])) .container{border-color:var(--calcite-color-status-danger-hover)}:host([layout=horizontal]),:host([layout=horizontal-single]){display:contents}:host([layout=horizontal]) .container,:host([layout=horizontal-single]) .container{display:contents}:host([layout=horizontal]) .stepper-item-header,:host([layout=horizontal-single]) .stepper-item-header{border-width:0px;border-block-start-width:2px;border-style:solid;border-color:var(--calcite-color-border-3);outline-color:transparent;grid-row:items}:host([layout=horizontal]) .stepper-item-header:focus,:host([layout=horizontal-single]) .stepper-item-header:focus{transition-duration:0s;outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}:host([layout=horizontal]) .stepper-item-content,:host([layout=horizontal-single]) .stepper-item-content{cursor:auto;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);padding-block:0;padding-inline-end:var(--calcite-stepper-item-spacing-unit-m);text-align:start}:host([layout=horizontal-single]) .stepper-item-header{grid-area:1/1/1/-1}:host([layout=horizontal]) .stepper-item-content,:host([layout=horizontal-single]) .stepper-item-content{grid-area:2/1/2/-1}:host([layout=horizontal][complete]) .stepper-item-header,:host([layout=horizontal-single][complete]) .stepper-item-header{border-color:rgba(0, 122, 194, 0.5)}:host([layout=horizontal][complete]:hover:not([disabled]):not([selected])) .stepper-item-header,:host([layout=horizontal][complete]:focus:not([disabled]):not([selected])) .stepper-item-header,:host([layout=horizontal-single][complete]:hover:not([disabled]):not([selected])) .stepper-item-header,:host([layout=horizontal-single][complete]:focus:not([disabled]):not([selected])) .stepper-item-header{border-color:var(--calcite-color-brand)}:host([layout=horizontal][error]) .stepper-item-header,:host([layout=horizontal-single][error]) .stepper-item-header{border-color:var(--calcite-color-status-danger)}:host([layout=horizontal][selected]) .stepper-item-header,:host([layout=horizontal-single][selected]) .stepper-item-header{border-color:var(--calcite-color-brand)}:host([layout=horizontal]:hover:not([disabled]):not([selected])) .stepper-item-header,:host([layout=horizontal]:focus:not([disabled]):not([selected])) .stepper-item-header,:host([layout=horizontal-single]:hover:not([disabled]):not([selected])) .stepper-item-header,:host([layout=horizontal-single]:focus:not([disabled]):not([selected])) .stepper-item-header{border-color:rgba(0, 122, 194, 0.5)}:host([layout=horizontal][error]:hover:not([disabled]):not([selected])) .stepper-item-header,:host([layout=horizontal][error]:focus:not([disabled]):not([selected])) .stepper-item-header,:host([layout=horizontal-single][error]:hover:not([disabled]):not([selected])) .stepper-item-header,:host([layout=horizontal-single][error]:focus:not([disabled]):not([selected])) .stepper-item-header{border-color:var(--calcite-color-status-danger-hover)}@media (forced-colors: active){:host .container{outline-width:0;outline-offset:0}:host(:focus),:host(:focus-visible){outline-color:canvasText}:host([selected]) .container{border-block-start-color:highlight}:host([selected]) .container .stepper-item-number{color:highlight}:host([selected]) .container .stepper-item-icon{color:highlight}:host([layout=vertical][selected]) .container{border-color:highlight}}:host([layout=horizontal-single]) .stepper-item-header{margin-inline-end:0px;box-sizing:border-box;border-style:none;inline-size:100%;padding-inline:calc(var(--calcite-internal-stepper-action-inline-size) + 0.5rem)}:host([layout=horizontal-single][error]) .container .stepper-item-number{color:var(--calcite-color-status-danger)}:host([layout=horizontal-single][error]) .container .stepper-item-icon{opacity:1;color:var(--calcite-color-status-danger)}:host([layout=horizontal-single][error][selected]),:host([layout=horizontal-single][complete][selected]) .container{color:var(--calcite-color-text-3)}:host([layout=horizontal-single][error][selected]) .stepper-item-heading,:host([layout=horizontal-single][complete][selected]) .container .stepper-item-heading{color:var(--calcite-color-text-2)}:host([layout=horizontal-single][complete][selected]) .container .stepper-item-icon{opacity:var(--calcite-opacity-disabled)}:host([layout=horizontal-single][complete][selected]) .container .stepper-item-number{color:var(--calcite-color-text-3)}.visually-hidden{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host([hidden]){display:none}[hidden]{display:none}";const x=class{constructor(i){e(this,i);this.calciteInternalStepperItemKeyEvent=t(this,"calciteInternalStepperItemKeyEvent",6);this.calciteInternalStepperItemSelect=t(this,"calciteInternalStepperItemSelect",6);this.calciteInternalStepperItemRegister=t(this,"calciteInternalStepperItemRegister",6);this.calciteStepperItemSelect=t(this,"calciteStepperItemSelect",6);this.keyDownHandler=e=>{if(!this.disabled&&e.target===this.el){switch(e.key){case" ":case"Enter":this.emitUserRequestedItem();e.preventDefault();break;case"ArrowUp":case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"Home":case"End":this.calciteInternalStepperItemKeyEvent.emit({item:e});e.preventDefault();break}}};this.handleItemClick=e=>{if(this.disabled||this.layout==="horizontal"&&e.composedPath().some((e=>{var t;return(t=e.classList)===null||t===void 0?void 0:t.contains("stepper-item-content")}))){return}this.emitUserRequestedItem()};this.emitUserRequestedItem=()=>{this.emitRequestedItem();if(!this.disabled){this.calciteStepperItemSelect.emit()}};this.emitRequestedItem=()=>{if(!this.disabled){const e=this.itemPosition;this.calciteInternalStepperItemSelect.emit({position:e})}};this.selected=false;this.complete=false;this.error=false;this.disabled=false;this.heading=undefined;this.description=undefined;this.iconFlipRtl=false;this.numberingSystem=undefined;this.icon=false;this.layout=undefined;this.messages=undefined;this.numbered=false;this.scale="m";this.messageOverrides=undefined;this.defaultMessages=undefined;this.effectiveLocale=""}selectedHandler(){if(this.selected){this.emitRequestedItem()}}disabledWatcher(){this.registerStepperItem()}onMessagesChange(){}effectiveLocaleWatcher(e){c.numberFormatOptions={locale:e,numberingSystem:this.numberingSystem,useGrouping:false};b(this,this.effectiveLocale)}connectedCallback(){s(this);d(this);f(this)}async componentWillLoad(){p(this);this.parentStepperEl=this.el.parentElement;this.itemPosition=this.getItemPosition();this.registerStepperItem();if(this.selected){this.emitRequestedItem()}await g(this)}componentDidLoad(){m(this)}componentDidRender(){a(this)}disconnectedCallback(){n(this);h(this);v(this)}render(){return i(o,{key:"e558570c1e2068daec381888b4bb1e7826ec062c","aria-current":this.selected?"step":"false",onClick:this.handleItemClick,onKeyDown:this.keyDownHandler,tabIndex:this.disabled?-1:0},i(l,{key:"67b2df92e4af3cfe2d6e449ee7860890d3adfb94",disabled:this.disabled},i("div",{key:"6de1885c996ff0dfd2dbfbaa0671edfff4a23934",class:y.container},this.complete&&i("span",{key:"275d720e03765bee32b2cd4427513a468bf83280","aria-live":"polite",class:y.visuallyHidden},this.messages.complete),i("div",{key:"ab6984c2b37de0bdf2a00be81456ddc325a1e010",class:y.stepperItemHeader,ref:e=>this.headerEl=e,tabIndex:this.layout==="horizontal"&&!this.disabled?0:null},this.icon?this.renderIcon():null,this.numbered?i("div",{class:y.stepperItemNumber},this.renderNumbers(),"."):null,i("div",{key:"250e4875c4e755a1c2182595cb2b40cf12900808",class:y.stepperItemHeaderText},i("span",{key:"d1644434c42dcc1388dda9caf09afca01bded9a5",class:y.stepperItemHeading},this.heading),i("span",{key:"b1173d636da796ebc10af029e017100344f904df",class:y.stepperItemDescription},this.description))),i("div",{key:"35fe242f95bcf185aa860a0b655feb188d664c16",class:y.stepperItemContent},i("slot",{key:"d374807564e5f3c5970624fa51639727cb004a44"})))))}updateActiveItemOnChange(e){if(e.target===this.parentStepperEl||e.composedPath().includes(this.parentStepperEl)){this.selectedPosition=e.detail.position;this.determineSelectedItem()}}async setFocus(){var e;await u(this);(e=this.layout==="vertical"?this.el:this.headerEl)===null||e===void 0?void 0:e.focus()}renderIcon(){let e="circle";if(this.selected&&(this.layout!=="horizontal-single"||!this.error&&!this.complete)){e="circleF"}else if(this.error){e="exclamationMarkCircleF"}else if(this.complete){e="checkCircleF"}return i("calcite-icon",{class:"stepper-item-icon",flipRtl:this.iconFlipRtl,icon:e,scale:"s"})}determineSelectedItem(){this.selected=!this.disabled&&this.itemPosition===this.selectedPosition}registerStepperItem(){this.calciteInternalStepperItemRegister.emit({position:this.itemPosition})}getItemPosition(){var e;return Array.from((e=this.parentStepperEl)===null||e===void 0?void 0:e.querySelectorAll("calcite-stepper-item")).indexOf(this.el)}renderNumbers(){c.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:false};return c.numberFormatter.format(this.itemPosition+1)}static get assetsDirs(){return["assets"]}get el(){return r(this)}static get watchers(){return{selected:["selectedHandler"],disabled:["disabledWatcher"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleWatcher"]}}};x.style=z;export{x as calcite_stepper_item};
//# sourceMappingURL=p-b8ffc5f8.entry.js.map