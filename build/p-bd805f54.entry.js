import{r as t,c as e,h as i,H as a,a as n}from"./p-ce275af6.js";import{s as r,h as o,t as s,a as c,j as l}from"./p-e4f14b9d.js";import{c as h,d}from"./p-373caea5.js";import{g as u}from"./p-2f33ceac.js";import{c as p,u as f,d as m,I as g}from"./p-1a101545.js";import{a as v,s as b,c as k}from"./p-4da87082.js";import{c as y,d as w,s as x,u as C}from"./p-93fac8b6.js";import{g as j}from"./p-89565afc.js";import"./p-3a41f8f2.js";import"./p-2cee5187.js";import"./p-118f21c7.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.10.1
 */const I=6e3;const z={container:"container",containerOverlaid:"container--overlaid",containerEdged:"container--edged",itemContainer:"item-container",itemContainerForward:"item-container--forward",itemContainerBackward:"item-container--backward",pagination:"pagination",paginationItems:"pagination-items",paginationItem:"pagination-item",paginationItemIndividual:"pagination-item--individual",paginationItemSelected:"pagination-item--selected",pageNext:"page-next",pagePrevious:"page-previous",autoplayControl:"autoplay-control",autoplayProgress:"autoplay-progress"};const W={chevronLeft:"chevron-left",chevronRight:"chevron-right",inactive:"bullet-point",active:"bullet-point-large",pause:"pause-f",play:"play-f"};const L=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;inline-size:100%;--calcite-internal-internal-carousel-item-space:1.5rem;--calcite-internal-internal-carousel-item-space-wide:3.5rem;--calcite-internal-internal-carousel-item-background-color:var(\n    --calcite-internal-carousel-item-background-color,\n    var(--calcite-color-foreground-1)\n  );--calcite-internal-internal-carousel-item-background-color-hover:var(\n    --calcite-internal-carousel-item-background-color-hover,\n    var(--calcite-color-foreground-2)\n  );--calcite-internal-internal-carousel-item-background-color-active:var(\n    --calcite-internal-carousel-item-background-color-active,\n    var(--calcite-color-foreground-2)\n  );--calcite-internal-internal-carousel-item-background-color-selected:var(\n    --calcite-internal-carousel-item-background-color-selected,\n    var(--calcite-color-foreground-1)\n  );--calcite-internal-internal-carousel-item-icon-color-hover:var(\n    --calcite-internal-carousel-item-icon-color-hover,\n    var(--calcite-action-color-transparent-hover)\n  );--calcite-internal-internal-carousel-item-icon-color:var(\n    --calcite-internal-carousel-item-icon-color,\n    var(--calcite-color-border-3)\n  );--calcite-internal-internal-carousel-item-icon-color-selected:var(\n    --calcite-internal-carousel-item-icon-color-selected,\n    var(--calcite-color-brand)\n  );--calcite-internal-internal-carousel-control-color-hover:var(\n    --calcite-internal-carousel-control-color-hover,\n    var(--calcite-internal-carousel-item-icon-color-hover)\n  );--calcite-internal-internal-carousel-control-color:var(\n    --calcite-internal-carousel-item-icon-color,\n    var(--calcite-color-border-input)\n  );--calcite-internal-internal-carousel-autoplay-progress-background-color:var(\n    --calcite-internal-carousel-autoplay-progress-background-color,\n    var(--calcite-color-border-3)\n  );--calcite-internal-internal-carousel-autoplay-progress-fill-color:var(\n    --calcite-internal-carousel-autoplay-progress-fill-color,\n    var(--calcite-color-brand)\n  )}.container{position:relative;display:flex;inline-size:100%;flex-direction:column;overflow:hidden;font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-color-text-2);outline-color:transparent}.container:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.container--edged:not(.container--overlaid){padding-inline:var(--calcite-internal-internal-carousel-item-space-wide);inline-size:calc(100% - var(--calcite-internal-internal-carousel-item-space-wide) * 2)}.item-container{display:flex;flex:1 1 auto;align-items:flex-start;justify-content:center;overflow:auto;padding:0.25rem;animation-name:none;animation-duration:var(--calcite-animation-timing)}.container--overlaid .item-container{padding:0px}.item-container--forward{animation-name:item-forward}.item-container--backward{animation-name:item-backward}calcite-carousel-item:not([selected]){opacity:0}.pagination{margin:0.75rem;display:flex;flex-direction:row;align-items:center;justify-content:center;inline-size:auto}.pagination-items{display:flex;flex-direction:row;align-items:center}.container--overlaid .pagination{position:absolute}.pagination-item.page-next,.pagination-item.page-previous{color:var(--calcite-internal-internal-carousel-control-color)}.pagination-item.page-next:hover,.pagination-item.page-previous:hover{color:var(--calcite-internal-internal-carousel-control-color-hover)}.container--edged .page-next,.container--edged .page-previous{block-size:3rem;inline-size:3rem;position:absolute;inset-block-start:50%;transform:translateY(-50%)}.container--edged .page-next{inset-inline-end:0}.container--edged .page-previous{inset-inline-start:0}.container--overlaid .pagination{inset-block-start:unset;inset-block-end:0;inset-inline:0}.pagination-item.autoplay-control{position:relative;color:var(--calcite-internal-internal-carousel-control-color);--calcite-color-brand:var(--calcite-internal-internal-carousel-autoplay-progress-fill-color);--calcite-color-border-3:var(--calcite-internal-internal-carousel-autoplay-progress-background-color)}.autoplay-control:focus .autoplay-progress{inset-block-end:4px;inset-inline:2px;inline-size:calc(100% - 4px)}.autoplay-progress{position:absolute;inset-block-end:2px;inset-inline:0;inline-size:100%}.pagination-item{margin:0px;block-size:2rem;inline-size:2rem;cursor:pointer;align-items:center;border-style:none;background-color:transparent;outline-color:transparent;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;-webkit-appearance:none;display:flex;align-content:center;justify-content:center;--calcite-color-foreground-1:var(--calcite-internal-internal-carousel-item-background-color);color:var(--calcite-internal-internal-carousel-item-icon-color)}.pagination-item:hover{background-color:var(--calcite-internal-internal-carousel-item-background-color-hover);color:var(--calcite-internal-internal-carousel-item-icon-color-hover)}.pagination-item:focus{background-color:var(--calcite-internal-internal-carousel-item-background-color-active);outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.pagination-item:active{background-color:var(--calcite-internal-internal-carousel-item-background-color-active);color:var(--calcite-internal-internal-carousel-item-icon-color-hover)}.pagination-item calcite-icon{color:inherit;pointer-events:none}.pagination-item.pagination-item--selected{--calcite-color-foreground-1:var(--calcite-internal-internal-carousel-item-background-color-selected);--calcite-color-foreground-3:var(--calcite-internal-internal-carousel-item-background-color-selected);color:var(--calcite-internal-internal-carousel-item-icon-color-selected)}.container--overlaid .pagination-item{background-color:var(--calcite-internal-internal-carousel-item-background-color)}.container--overlaid .pagination-item:hover{background-color:var(--calcite-internal-internal-carousel-item-background-color-hover)}.container--overlaid .pagination-item:focus{background-color:var(--calcite-internal-internal-carousel-item-background-color-active)}.container--overlaid .pagination-item:active{background-color:var(--calcite-internal-internal-carousel-item-background-color-active)}@keyframes item-forward{0%{transform:translate3d(100px, 0, 0)}100%{transform:translate3d(0, 0, 0)}}@keyframes item-backward{0%{transform:translate3d(-100px, 0, 0)}100%{transform:translate3d(0, 0, 0)}}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}";const D=class{constructor(a){t(this,a);this.calciteCarouselChange=e(this,"calciteCarouselChange",6);this.calciteCarouselPlay=e(this,"calciteCarouselPlay",6);this.calciteCarouselStop=e(this,"calciteCarouselStop",6);this.calciteCarouselPause=e(this,"calciteCarouselPause",6);this.calciteCarouselResume=e(this,"calciteCarouselResume",6);this.containerId=`calcite-carousel-container-${u()}`;this.slideDurationInterval=null;this.slideInterval=null;this.autoplayHandler=()=>{this.clearIntervals();this.slideDurationInterval=setInterval(this.timer,this.autoplayDuration/100)};this.timer=()=>{let t=this.slideDurationRemaining;const e=!this.suspendedDueToFocus&&!this.suspendedDueToHover||this.userPreventsSuspend;if(e){if(t<=.01){t=1;this.nextItem(false)}else{t=t-.01}}if(t>0){this.slideDurationRemaining=t}};this.handleSlotChange=t=>{const e=r(t);if(e.length<1){return}const i=e.findIndex((t=>t.selected));const a=i>-1?i:0;this.items=e;this.setSelectedItem(a,false)};this.setSelectedItem=(t,e)=>{const i=this.selectedIndex;this.items.forEach(((e,i)=>{const a=t===i;e.selected=a;if(a){this.selectedItem=e;this.selectedIndex=i}}));if(e){this.playing=false;if(i!==this.selectedIndex){this.calciteCarouselChange.emit()}}};this.handleArrowClick=t=>{const e=t.target.dataset.direction;if(e==="next"){this.direction="forward";this.nextItem(true)}else if(e==="previous"){this.direction="backward";this.previousItem()}};this.handleItemSelection=t=>{const e=t.target;const i=parseInt(e.dataset.index);if(i===this.selectedIndex){return}if(this.playing){this.handlePause(true)}this.direction=i>this.selectedIndex?"forward":"backward";this.setSelectedItem(i,true)};this.toggleRotation=()=>{this.userPreventsSuspend=true;if(this.playing){this.handlePause(true)}else{this.handlePlay(true)}};this.handleFocusIn=()=>{const t=this.playing;if(t){this.suspendedDueToFocus=true}if((!this.suspendedDueToFocus||!this.suspendedDueToHover)&&t){this.calciteCarouselPause.emit()}};this.handleMouseIn=()=>{const t=this.playing;if(t){this.suspendedDueToHover=true}if((!this.suspendedDueToFocus||!this.suspendedDueToHover)&&t){this.calciteCarouselPause.emit()}};this.handleMouseOut=t=>{const e=!this.el.contains(t.relatedTarget);const i=this.playing;if(e&&i){this.suspendedDueToHover=false}if(e&&i&&!this.suspendedDueToFocus){this.userPreventsSuspend=false;this.calciteCarouselResume.emit()}};this.handleFocusOut=t=>{const e=!t.composedPath().includes(t.relatedTarget);const i=this.playing;if(e&&i){this.suspendedDueToFocus=false}if(e&&i&&!this.suspendedDueToHover){this.userPreventsSuspend=false;this.calciteCarouselResume.emit()}};this.containerKeyDownHandler=t=>{if(t.target!==this.container){return}switch(t.key){case" ":case"Enter":t.preventDefault();if(this.autoplay===""||this.autoplay||this.autoplay==="paused"){this.toggleRotation()}break;case"ArrowRight":this.direction="forward";this.nextItem(true);break;case"ArrowLeft":this.direction="backward";this.previousItem();break;case"Home":t.preventDefault();this.direction="backward";this.setSelectedItem(0,true);break;case"End":t.preventDefault();this.direction="forward";this.setSelectedItem(this.items.length-1,true);break}};this.tabListKeyDownHandler=t=>{const e=Array(...this.tabList.querySelectorAll("button"));const i=t.target;switch(t.key){case"ArrowRight":o(e,i,"next");break;case"ArrowLeft":o(e,i,"previous");break;case"Home":t.preventDefault();o(e,i,"first");break;case"End":t.preventDefault();o(e,i,"last");break}};this.storeTabListRef=t=>{this.tabList=t};this.storeContainerRef=t=>{this.container=t};this.storeItemContainerRef=t=>{this.itemContainer=t};this.renderRotationControl=()=>{const t=this.playing?this.messages.pause:this.messages.play;return i("button",{"aria-label":t,class:{[z.paginationItem]:true,[z.autoplayControl]:true},onClick:this.toggleRotation,title:t},i("calcite-icon",{icon:this.playing?W.pause:W.play,scale:"s"}),this.playing&&i("calcite-progress",{class:z.autoplayProgress,label:this.messages.carouselItemProgress,value:this.slideDurationRemaining}))};this.renderPaginationArea=()=>i("div",{class:{[z.pagination]:true,[z.containerOverlaid]:this.controlOverlay},onKeyDown:this.tabListKeyDownHandler,ref:this.storeTabListRef},(this.playing||this.autoplay===""||this.autoplay||this.autoplay==="paused")&&this.renderRotationControl(),this.arrowType==="inline"&&this.renderArrow("previous"),this.renderPaginationItems(),this.arrowType==="inline"&&this.renderArrow("next"));this.renderPaginationItems=()=>i("div",{"aria-label":this.label,class:z.paginationItems,role:"tablist"},this.items.map(((t,e)=>{const a=e===this.selectedIndex;return i("button",{"aria-controls":!a?t.id:undefined,"aria-selected":s(a),class:{[z.paginationItem]:true,[z.paginationItemIndividual]:true,[z.paginationItemSelected]:a},"data-index":e,key:t.id,onClick:this.handleItemSelection,role:"tab",title:t.label},i("calcite-icon",{icon:a?W.active:W.inactive,scale:"l"}))})));this.renderArrow=t=>{const e=t==="previous";const a=c(this.el);const n=this.arrowType==="edge"?"m":"s";const r=e?z.pagePrevious:z.pageNext;const o=e?this.messages.previous:this.messages.next;const s=e?W.chevronLeft:W.chevronRight;return i("button",{"aria-controls":this.containerId,class:{[z.paginationItem]:true,[r]:true},"data-direction":t,onClick:this.handleArrowClick,title:o},i("calcite-icon",{flipRtl:a==="rtl",icon:s,scale:n}))};this.autoplay=false;this.arrowType="inline";this.autoplayDuration=I;this.controlOverlay=false;this.disabled=false;this.label=undefined;this.messages=undefined;this.messageOverrides=undefined;this.paused=undefined;this.selectedItem=undefined;this.selectedIndex=undefined;this.items=[];this.direction="standby";this.defaultMessages=undefined;this.playing=false;this.suspendedDueToFocus=false;this.suspendedDueToHover=false;this.userPreventsSuspend=false;this.effectiveLocale="";this.suspendedSlideDurationRemaining=1;this.slideDurationRemaining=1}autoplayWatcher(t){if(!t){this.handlePause(false)}}onMessagesChange(){}connectedCallback(){p(this);h(this);y(this)}componentDidLoad(){v(this)}componentDidRender(){f(this)}disconnectedCallback(){m(this);d(this);w(this);this.clearIntervals()}async componentWillLoad(){if((this.autoplay===""||this.autoplay)&&this.autoplay!=="paused"){this.handlePlay(false)}else if(this.autoplay==="paused"){this.paused=true}b(this);await x(this)}async setFocus(){var t;await k(this);(t=this.container)===null||t===void 0?void 0:t.focus()}async play(){if(this.playing||this.autoplay!==""&&!this.autoplay&&this.autoplay!=="paused"){return}this.handlePlay(true)}async stop(){if(!this.playing){return}this.handlePause(true)}async directionWatcher(t){if(t==="standby"){return}await l(this.itemContainer,t==="forward"?"item-forward":"item-backward");this.direction="standby"}playingWatcher(){this.paused=!this.playing}suspendWatcher(){if(!this.suspendedDueToFocus&&!this.suspendedDueToHover){this.suspendEnd()}else{this.suspendStart()}}async effectiveLocaleChange(){await C(this,this.effectiveLocale)}clearIntervals(){clearInterval(this.slideDurationInterval);clearInterval(this.slideInterval)}nextItem(t){if(this.playing&&t){this.playing=false}const e=j(this.selectedIndex+1,this.items.length);this.setSelectedItem(e,t)}previousItem(){this.playing=false;const t=j(Math.max(this.selectedIndex-1,-1),this.items.length);this.setSelectedItem(t,true)}handlePlay(t){this.playing=true;this.autoplayHandler();this.slideInterval=setInterval(this.autoplayHandler,this.autoplayDuration);if(t){this.calciteCarouselPlay.emit()}}handlePause(t){this.playing=false;this.clearIntervals();this.slideDurationRemaining=1;this.suspendedSlideDurationRemaining=1;if(t){this.calciteCarouselStop.emit()}}suspendStart(){this.suspendedSlideDurationRemaining=this.slideDurationRemaining}suspendEnd(){this.slideDurationRemaining=this.suspendedSlideDurationRemaining}render(){const{direction:t}=this;return i(a,{key:"7e95eee5f92be62d2817353deceb8ebceb330fb3"},i(g,{key:"01e449b425f695a3e1317190a7cb448ea4896e92",disabled:this.disabled},i("div",{key:"1d59b22e5625facd195a57b8c9d8e64d855753a9","aria-label":this.label,"aria-live":this.playing?"off":"polite","aria-roledescription":this.messages.carousel,class:{[z.container]:true,[z.containerOverlaid]:this.controlOverlay,[z.containerEdged]:this.arrowType==="edge"},onFocusin:this.handleFocusIn,onFocusout:this.handleFocusOut,onKeyDown:this.containerKeyDownHandler,onMouseEnter:this.handleMouseIn,onMouseLeave:this.handleMouseOut,ref:this.storeContainerRef,role:"group",tabIndex:0},i("section",{key:"43ebcd93a10f25ca3a8c4cc9b2ff7f956293d35c",class:{[z.itemContainer]:true,[z.itemContainerForward]:t==="forward",[z.itemContainerBackward]:t==="backward"},id:this.containerId,ref:this.storeItemContainerRef},i("slot",{key:"11c3d92e21496781f2bec4d5b45072c39cbc1280",onSlotchange:this.handleSlotChange})),this.items.length>1&&this.renderPaginationArea(),this.arrowType==="edge"&&this.renderArrow("previous"),this.arrowType==="edge"&&this.renderArrow("next"))))}static get assetsDirs(){return["assets"]}get el(){return n(this)}static get watchers(){return{autoplay:["autoplayWatcher"],messageOverrides:["onMessagesChange"],direction:["directionWatcher"],playing:["playingWatcher"],suspendedDueToFocus:["suspendWatcher"],suspendedDueToHover:["suspendWatcher"],effectiveLocale:["effectiveLocaleChange"]}}};D.style=L;export{D as calcite_carousel};
//# sourceMappingURL=p-bd805f54.entry.js.map