import{r as t,c as e,h as i,H as s,a as o}from"./p-ce275af6.js";import{q as n,B as r,t as a}from"./p-e4f14b9d.js";import{c,b as l,a as h,r as f,F as d}from"./p-44529c16.js";import{g as u}from"./p-2f33ceac.js";import{o as p}from"./p-d18b9957.js";import{F as m}from"./p-08037c34.js";import"./p-3a41f8f2.js";import"./p-58421494.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.10.1
 */const g={container:"container"};const w=300;const v=500;const b="aria-describedby";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.10.1
 */function y(t){const{referenceElement:e}=t;return(typeof e==="string"?n(t,{id:e}):e)||null}
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.10.1
 */class k{constructor(){this.registeredElements=new WeakMap;this.registeredShadowRootCounts=new WeakMap;this.hoverOpenTimeout=null;this.hoverCloseTimeout=null;this.hoveredTooltip=null;this.clickedTooltip=null;this.activeTooltip=null;this.registeredElementCount=0;this.queryTooltip=t=>{const{registeredElements:e}=this;const i=t.find((t=>e.has(t)));return e.get(i)};this.keyDownHandler=t=>{if(t.key==="Escape"&&!t.defaultPrevented){const{activeTooltip:e}=this;if(e?.open){this.clearHoverTimeout();this.closeActiveTooltip();const i=y(e);if(i instanceof Element&&i.contains(t.target)){t.preventDefault()}}}};this.pointerMoveHandler=t=>{const e=t.composedPath();const{activeTooltip:i}=this;const s=i?.open&&e.includes(i);if(s){this.clearHoverTimeout();return}const o=this.queryTooltip(e);this.hoveredTooltip=o;if(this.isClosableClickedTooltip(o)){return}this.clickedTooltip=null;if(o){this.openHoveredTooltip(o)}else if(i){this.closeHoveredTooltip()}};this.clickHandler=t=>{const e=this.queryTooltip(t.composedPath());this.clickedTooltip=e;if(e?.closeOnClick){this.toggleTooltip(e,false);this.clearHoverTimeout()}};this.focusInHandler=t=>{this.queryFocusedTooltip(t,true)};this.focusOutHandler=t=>{this.queryFocusedTooltip(t,false)};this.openHoveredTooltip=t=>{this.hoverOpenTimeout=window.setTimeout((()=>{if(this.hoverOpenTimeout===null){return}this.clearHoverCloseTimeout();if(this.activeTooltip===this.hoveredTooltip){return}this.closeActiveTooltip();if(t!==this.hoveredTooltip){return}this.toggleTooltip(t,true)}),this.activeTooltip?0:w)};this.closeHoveredTooltip=()=>{this.hoverCloseTimeout=window.setTimeout((()=>{if(this.hoverCloseTimeout===null){return}this.closeActiveTooltip()}),v)}}registerElement(t,e){this.registeredElementCount++;this.registeredElements.set(t,e);const i=this.getReferenceElShadowRootNode(t);if(i){this.registerShadowRoot(i)}if(this.registeredElementCount===1){this.addListeners()}}unregisterElement(t){const e=this.getReferenceElShadowRootNode(t);if(e){this.unregisterShadowRoot(e)}if(this.registeredElements.delete(t)){this.registeredElementCount--}if(this.registeredElementCount===0){this.removeListeners()}}addShadowListeners(t){t.addEventListener("focusin",this.focusInHandler,{capture:true});t.addEventListener("focusout",this.focusOutHandler,{capture:true})}removeShadowListeners(t){t.removeEventListener("focusin",this.focusInHandler,{capture:true});t.removeEventListener("focusout",this.focusOutHandler,{capture:true})}addListeners(){window.addEventListener("keydown",this.keyDownHandler,{capture:true});window.addEventListener("pointermove",this.pointerMoveHandler,{capture:true});window.addEventListener("click",this.clickHandler,{capture:true});window.addEventListener("focusin",this.focusInHandler,{capture:true});window.addEventListener("focusout",this.focusOutHandler,{capture:true})}removeListeners(){window.removeEventListener("keydown",this.keyDownHandler,{capture:true});window.removeEventListener("pointermove",this.pointerMoveHandler,{capture:true});window.removeEventListener("click",this.clickHandler,{capture:true});window.removeEventListener("focusin",this.focusInHandler,{capture:true});window.removeEventListener("focusout",this.focusOutHandler,{capture:true})}clearHoverOpenTimeout(){window.clearTimeout(this.hoverOpenTimeout);this.hoverOpenTimeout=null}clearHoverCloseTimeout(){window.clearTimeout(this.hoverCloseTimeout);this.hoverCloseTimeout=null}clearHoverTimeout(){this.clearHoverOpenTimeout();this.clearHoverCloseTimeout()}closeActiveTooltip(){const{activeTooltip:t}=this;if(t?.open){this.toggleTooltip(t,false)}}toggleFocusedTooltip(t,e){this.closeActiveTooltip();if(e){this.clearHoverTimeout()}this.toggleTooltip(t,e)}toggleTooltip(t,e){t.open=e;this.activeTooltip=e?t:null}queryFocusedTooltip(t,e){const i=this.queryTooltip(t.composedPath());if(!i||this.isClosableClickedTooltip(i)){return}this.toggleFocusedTooltip(i,e)}isClosableClickedTooltip(t){return t?.closeOnClick&&t===this.clickedTooltip}registerShadowRoot(t){const{registeredShadowRootCounts:e}=this;const i=(e.get(t)??0)+1;if(i===1){this.addShadowListeners(t)}e.set(t,i)}unregisterShadowRoot(t){const{registeredShadowRootCounts:e}=this;const i=e.get(t)-1;if(i===0){this.removeShadowListeners(t)}e.set(t,i)}getReferenceElShadowRootNode(t){return t instanceof Element?r(t):null}}const x=":host{--calcite-floating-ui-z-index:var(--calcite-tooltip-z-index, var(--calcite-z-index-tooltip));display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index)}.calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:var(--calcite-z-index);border-radius:0.25rem}:host([data-placement^=bottom]) .calcite-floating-ui-anim{transform:translateY(-5px)}:host([data-placement^=top]) .calcite-floating-ui-anim{transform:translateY(5px)}:host([data-placement^=left]) .calcite-floating-ui-anim{transform:translateX(5px)}:host([data-placement^=right]) .calcite-floating-ui-anim{transform:translateX(-5px)}:host([data-placement]) .calcite-floating-ui-anim--active{opacity:1;transform:translate(0)}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}.calcite-floating-ui-arrow{pointer-events:none;position:absolute;z-index:calc(var(--calcite-z-index) * -1);fill:var(--calcite-color-foreground-1)}.calcite-floating-ui-arrow__stroke{stroke:var(--calcite-color-border-3)}.container{position:relative;overflow:hidden;border-radius:0.25rem;padding-block:0.75rem;padding-inline:1rem;font-size:var(--calcite-font-size--2);line-height:1.375;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1);max-inline-size:20rem;max-block-size:20rem;text-align:start}.calcite-floating-ui-anim{border-radius:0.25rem;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-3);background-color:var(--calcite-color-foreground-1)}.arrow::before{outline:1px solid var(--calcite-color-border-3)}:host([hidden]){display:none}[hidden]{display:none}";const E=new k;const H=class{constructor(i){t(this,i);this.calciteTooltipBeforeClose=e(this,"calciteTooltipBeforeClose",6);this.calciteTooltipClose=e(this,"calciteTooltipClose",6);this.calciteTooltipBeforeOpen=e(this,"calciteTooltipBeforeOpen",6);this.calciteTooltipOpen=e(this,"calciteTooltipOpen",6);this.guid=`calcite-tooltip-${u()}`;this.hasLoaded=false;this.openTransitionProp="opacity";this.setTransitionEl=t=>{this.transitionEl=t};this.setUpReferenceElement=(t=true)=>{this.removeReferences();this.effectiveReferenceElement=y(this.el);c(this,this.effectiveReferenceElement,this.el);const{el:e,referenceElement:i,effectiveReferenceElement:s}=this;if(t&&i&&!s){console.warn(`${e.tagName}: reference-element id "${i}" was not found.`,{el:e})}this.addReferences()};this.getId=()=>this.el.id||this.guid;this.addReferences=()=>{const{effectiveReferenceElement:t}=this;if(!t){return}const e=this.getId();if("setAttribute"in t){t.setAttribute(b,e)}E.registerElement(t,this.el)};this.removeReferences=()=>{const{effectiveReferenceElement:t}=this;if(!t){return}if("removeAttribute"in t){t.removeAttribute(b)}E.unregisterElement(t)};this.closeOnClick=false;this.label=undefined;this.offsetDistance=l;this.offsetSkidding=0;this.open=false;this.overlayPositioning="absolute";this.placement="auto";this.referenceElement=undefined;this.effectiveReferenceElement=undefined;this.floatingLayout="vertical"}offsetDistanceOffsetHandler(){this.reposition(true)}offsetSkiddingHandler(){this.reposition(true)}openHandler(){p(this);this.reposition(true)}overlayPositioningHandler(){this.reposition(true)}placementHandler(){this.reposition(true)}referenceElementHandler(){this.setUpReferenceElement()}connectedCallback(){this.setUpReferenceElement(true);if(this.open){p(this)}}async componentWillLoad(){if(this.open){p(this)}}componentDidLoad(){if(this.referenceElement&&!this.effectiveReferenceElement){this.setUpReferenceElement()}this.hasLoaded=true}disconnectedCallback(){this.removeReferences();h(this,this.effectiveReferenceElement,this.el)}async reposition(t=false){const{el:e,effectiveReferenceElement:i,placement:s,overlayPositioning:o,offsetDistance:n,offsetSkidding:r,arrowEl:a}=this;return f(this,{floatingEl:e,referenceEl:i,overlayPositioning:o,placement:s,offsetDistance:n,offsetSkidding:r,arrowEl:a,type:"tooltip"},t)}onBeforeOpen(){this.calciteTooltipBeforeOpen.emit()}onOpen(){this.calciteTooltipOpen.emit()}onBeforeClose(){this.calciteTooltipBeforeClose.emit()}onClose(){this.calciteTooltipClose.emit()}render(){const{effectiveReferenceElement:t,label:e,open:o,floatingLayout:n}=this;const r=t&&o;const c=!r;return i(s,{key:"efe45cfea02c55dc9485e7f1760aef938aff1999","aria-hidden":a(c),"aria-label":e,"aria-live":"polite","calcite-hydrated-hidden":c,id:this.getId(),role:"tooltip"},i("div",{key:"0110992190776206883f22752e73f2dc215890ed",class:{[d.animation]:true,[d.animationActive]:r},ref:this.setTransitionEl},i(m,{key:"993f3df44f2104096966c5865217465868a028c3",floatingLayout:n,ref:t=>this.arrowEl=t}),i("div",{key:"3289d59eba5264aa5bff0285441452861ac49d8b",class:g.container},i("slot",{key:"e060c878105353e47ecb5dfc9b85888be791c8c9"}))))}get el(){return o(this)}static get watchers(){return{offsetDistance:["offsetDistanceOffsetHandler"],offsetSkidding:["offsetSkiddingHandler"],open:["openHandler"],overlayPositioning:["overlayPositioningHandler"],placement:["placementHandler"],referenceElement:["referenceElementHandler"]}}};H.style=x;export{H as calcite_tooltip};
//# sourceMappingURL=p-5e5d079b.entry.js.map