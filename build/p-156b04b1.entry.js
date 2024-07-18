import{r as t,c as i,h as e,H as s,a}from"./p-ce275af6.js";import{d as n,a as r,b as o,i as c,c as l,e as h,f as d}from"./p-9e336b75.js";import{f as p,t as u}from"./p-e4f14b9d.js";import{f,c as m,d as g,r as v,a as b,F as y}from"./p-44529c16.js";import{s as w,c as x,d as k,H as I}from"./p-0469a2ff.js";import{c as C,d as D,u as z,I as A}from"./p-1a101545.js";import{n as j}from"./p-2cee5187.js";import{c as P,d as O}from"./p-f12cab61.js";import{c as F,s as T,a as E}from"./p-4da87082.js";import{n as M,c as R,d as B,a as H}from"./p-373caea5.js";import{o as L}from"./p-d18b9957.js";import{g as S,a as W}from"./p-ba22c98b.js";import{c as Y,s as $,d as q,u as N}from"./p-93fac8b6.js";import{c as _,d as V,a as X}from"./p-e7412810.js";import{g as G}from"./p-2f33ceac.js";import{g as K}from"./p-bb2a43ec.js";import{V as U}from"./p-257b0b95.js";import{s as J}from"./p-7259172b.js";import"./p-3a41f8f2.js";import"./p-58421494.js";import"./p-118f21c7.js";import"./p-4d17b8f4.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.10.1
 */function Q(t){if(!t){return false}const{year:i}=n(t);return Number(i)<100}function Z(t){const i=(new Date).getFullYear();const e=Math.floor(i/100)*100+t;return e}
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.10.1
 */const tt={assistiveText:"assistive-text",calendarWrapper:"calendar-wrapper",calendarWrapperEnd:"calendar-wrapper--end",horizontalArrowContainer:"horizontal-arrow-container",inputBorderTopColorOne:"border-top-color-one",inputContainer:"input-container",inputNoBottomBorder:"no-bottom-border",inputWrapper:"input-wrapper",input:"input",menu:"menu-container",menuActive:"menu-container--active",toggleIcon:"toggle-icon",verticalArrowContainer:"vertical-arrow-container",chevronIcon:"chevron-icon"};const it=":host{--calcite-icon-size:1rem;--calcite-spacing-eighth:0.125rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:inline-block;inline-size:100%;overflow:visible;vertical-align:top;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host .menu-container .calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:var(--calcite-z-index);border-radius:0.25rem}:host .menu-container[data-placement^=bottom] .calcite-floating-ui-anim{transform:translateY(-5px)}:host .menu-container[data-placement^=top] .calcite-floating-ui-anim{transform:translateY(5px)}:host .menu-container[data-placement^=left] .calcite-floating-ui-anim{transform:translateX(5px)}:host .menu-container[data-placement^=right] .calcite-floating-ui-anim{transform:translateX(-5px)}:host .menu-container[data-placement] .calcite-floating-ui-anim--active{opacity:1;transform:translate(0)}:host([scale=s]){--calcite-toggle-spacing:0.5rem;--calcite-internal-input-text-input-padding-inline-end:calc(var(--calcite-toggle-spacing) + 1rem)}:host([scale=m]){--calcite-toggle-spacing:0.75rem;--calcite-internal-input-text-input-padding-inline-end:calc(var(--calcite-toggle-spacing) + 1.5rem)}:host([scale=l]){--calcite-toggle-spacing:1rem;--calcite-internal-input-text-input-padding-inline-end:calc(var(--calcite-toggle-spacing) + 2rem)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.calendar-wrapper{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);transform:translate3d(0, 0, 0)}.input-wrapper{position:relative}.input-wrapper .chevron-icon{color:var(--calcite-color-text-3)}.input-wrapper:focus-within .chevron-icon,.input-wrapper:active .chevron-icon,.input-wrapper:hover .chevron-icon{color:var(--calcite-color-text-1)}.toggle-icon{position:absolute;display:flex;cursor:pointer;align-items:center;inset-inline-end:0;inset-block:0;padding-inline:var(--calcite-toggle-spacing)}:host([range]) .input-container{display:flex}:host([range]) .input-wrapper{flex:1 1 auto}:host([range]) .horizontal-arrow-container{display:flex;align-items:center;border-width:1px;border-inline-start-width:0px;border-inline-end-width:0px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-background);padding-block:0px;padding-inline:0.25rem}:host([range][layout=vertical]) .input-wrapper{inline-size:100%}:host([range][layout=vertical]) .input-container{flex-direction:column;align-items:flex-start}:host([range][layout=vertical]) .calendar-wrapper--end{transform:translate3d(0, 0, 0)}:host([range][layout=vertical]) .vertical-arrow-container{inset-block-start:1.5rem;position:absolute;z-index:var(--calcite-z-index);margin-inline:1px;background-color:var(--calcite-color-foreground-1);padding-inline:0.625rem;inset-inline-start:0}.menu-container{--calcite-floating-ui-z-index:var(--calcite-z-index-dropdown);display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index);visibility:hidden}.menu-container .calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:var(--calcite-z-index);border-radius:0.25rem}.menu-container[data-placement^=bottom] .calcite-floating-ui-anim{transform:translateY(-5px)}.menu-container[data-placement^=top] .calcite-floating-ui-anim{transform:translateY(5px)}.menu-container[data-placement^=left] .calcite-floating-ui-anim{transform:translateX(5px)}.menu-container[data-placement^=right] .calcite-floating-ui-anim{transform:translateX(-5px)}.menu-container[data-placement] .calcite-floating-ui-anim--active{opacity:1;transform:translate(0)}:host([open]) .menu-container{visibility:visible}.menu-container--active{visibility:visible}.input .calcite-input__wrapper{margin-block-start:0px}:host([range][layout=vertical][scale=m]) .vertical-arrow-container{inset-block-start:1.5rem;padding-inline-start:0.75rem}:host([range][layout=vertical][scale=m]) .vertical-arrow-container calcite-icon{block-size:0.75rem;inline-size:0.75rem;min-inline-size:0px}:host([range][layout=vertical][scale=l]) .vertical-arrow-container{inset-block-start:2.25rem;padding-inline:0.875rem}:host([range][layout=vertical][open]) .vertical-arrow-container{display:none}.validation-container{display:flex;flex-direction:column;align-items:flex-start;align-self:stretch}:host([scale=m]) .validation-container,:host([scale=l]) .validation-container{padding-block-start:0.5rem}:host([scale=s]) .validation-container{padding-block-start:0.25rem}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}.assistive-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host([hidden]){display:none}[hidden]{display:none}";const et=class{constructor(e){t(this,e);this.calciteInputDatePickerChange=i(this,"calciteInputDatePickerChange",6);this.calciteInputDatePickerBeforeClose=i(this,"calciteInputDatePickerBeforeClose",6);this.calciteInputDatePickerClose=i(this,"calciteInputDatePickerClose",6);this.calciteInputDatePickerBeforeOpen=i(this,"calciteInputDatePickerBeforeOpen",6);this.calciteInputDatePickerOpen=i(this,"calciteInputDatePickerOpen",6);this.calciteInternalInputInputHandler=t=>{const i=t.target;const e=i.value;const s=this.parseNumerals(e);const a=this.formatNumerals(s);i.value=a;const{year:n}=r(e,this.localeData);if(n&&n.length<4){return}const l=o(e,this.localeData);if(c(l,this.min,this.max)){this.datePickerActiveDate=l}};this.calciteInternalInputBlurHandler=()=>{this.commitValue()};this.dialogId=`date-picker-dialog--${G()}`;this.focusOnOpen=false;this.userChangedValue=false;this.openTransitionProp="opacity";this.valueAsDateChangedExternally=false;this.placeholderTextId=`calcite-input-date-picker-placeholder-${G()}`;this.onInputWrapperPointerDown=()=>{this.currentOpenInput=this.focusedInput};this.onInputWrapperClick=t=>{const{range:i,endInput:e,startInput:s,currentOpenInput:a}=this;const n=t.currentTarget;const r=n.getAttribute("data-position");const o=t.composedPath();const c=o.find((t=>{var i;return(i=t.classList)===null||i===void 0?void 0:i.contains(tt.toggleIcon)}));if(c){const t=r==="start"?s:e;t.setFocus()}if(!i||!this.open||a===r){this.open=!this.open}};this.setFilteredPlacements=()=>{const{el:t,flipPlacements:i}=this;this.filteredFlipPlacements=i?f(i,t):null};this.setTransitionEl=t=>{this.transitionEl=t};this.setStartInput=t=>{this.startInput=t};this.setEndInput=t=>{this.endInput=t};this.blurHandler=()=>{this.open=false};this.keyDownHandler=t=>{var i,e;const{defaultPrevented:s,key:a}=t;if(s){return}if(a==="Enter"){t.preventDefault();this.commitValue();if(this.shouldFocusRangeEnd()){(i=this.endInput)===null||i===void 0?void 0:i.setFocus()}else if(this.shouldFocusRangeStart()){(e=this.startInput)===null||e===void 0?void 0:e.setFocus()}if(w(this)){this.restoreInputFocus()}}else if(a==="ArrowDown"){this.open=true;this.focusOnOpen=true;t.preventDefault()}else if(a==="Escape"){this.open=false;t.preventDefault();this.restoreInputFocus()}};this.startInputFocus=()=>{this.focusedInput="start"};this.endInputFocus=()=>{this.focusedInput="end"};this.setFloatingEl=t=>{this.floatingEl=t;m(this,this.referenceEl,this.floatingEl)};this.setStartWrapper=t=>{this.startWrapper=t;this.setReferenceEl()};this.setEndWrapper=t=>{this.endWrapper=t;this.setReferenceEl()};this.setDatePickerRef=t=>{this.datePickerEl=t;_(this,{focusTrapEl:t,focusTrapOptions:{initialFocus:false,setReturnFocus:false}})};this.handleDateChange=t=>{if(this.range){return}t.stopPropagation();this.setValue(t.target.valueAsDate);this.localizeInputValues();this.restoreInputFocus()};this.handleDateRangeChange=t=>{if(!this.range){return}t.stopPropagation();const i=t.target.valueAsDate;this.setRangeValue(i);this.localizeInputValues();this.restoreInputFocus()};this.setInputValue=(t,i="start")=>{const e=this[`${i}Input`];if(!e){return}e.value=t};this.setRangeValue=t=>{if(!this.range){return}const{value:i}=this;const e=Array.isArray(i);const s=Array.isArray(t);const a=s?t[0]:null;let n=s?l(a):"";if(n){n=this.getNormalizedDate(n)}const r=s?t[1]:null;let o=s?l(r):"";if(o){o=this.getNormalizedDate(o)}const c=n||o?[n,o]:"";if(c===i){return}this.userChangedValue=true;this.value=c;this.valueAsDate=c?S(c):undefined;const h=this.calciteInputDatePickerChange.emit();if(h&&h.defaultPrevented){this.value=i;if(e){this.setInputValue(i[0],"start");this.setInputValue(i[1],"end")}else{this.value=i;this.setInputValue(i)}}};this.setValue=t=>{if(this.range){return}const i=this.value;let e=l(t);e=this.getNormalizedDate(e);if(e===i){return}this.userChangedValue=true;this.valueAsDate=e?h(e):undefined;this.value=e||"";const s=this.calciteInputDatePickerChange.emit();if(s.defaultPrevented){this.value=i;this.setInputValue(i)}};this.commonDateSeparators=[".","-","/"];this.formatNumerals=t=>t?t.split("").map((t=>{var i,e,s;return((i=this.commonDateSeparators)===null||i===void 0?void 0:i.includes(t))?(e=this.localeData)===null||e===void 0?void 0:e.separator:(j===null||j===void 0?void 0:j.includes(t))?(s=M===null||M===void 0?void 0:M.numberFormatter)===null||s===void 0?void 0:s.format(Number(t)):t})).join(""):"";this.parseNumerals=t=>t?t.split("").map((t=>j.includes(t)?M.delocalize(t):t)).join(""):"";this.disabled=false;this.focusTrapDisabled=false;this.form=undefined;this.readOnly=false;this.value="";this.flipPlacements=undefined;this.headingLevel=undefined;this.valueAsDate=undefined;this.messageOverrides=undefined;this.messages=undefined;this.minAsDate=undefined;this.maxAsDate=undefined;this.min=undefined;this.max=undefined;this.open=false;this.validationMessage=undefined;this.validationIcon=undefined;this.validity={valid:false,badInput:false,customError:false,patternMismatch:false,rangeOverflow:false,rangeUnderflow:false,stepMismatch:false,tooLong:false,tooShort:false,typeMismatch:false,valueMissing:false};this.name=undefined;this.numberingSystem=undefined;this.scale="m";this.status="idle";this.placement=g;this.range=false;this.required=false;this.overlayPositioning="absolute";this.proximitySelectionDisabled=false;this.layout="horizontal";this.datePickerActiveDate=undefined;this.defaultMessages=undefined;this.effectiveLocale="";this.focusedInput="start";this.localeData=undefined}handleFocusTrapDisabled(t){if(!this.open){return}t?V(this):X(this)}handleDisabledAndReadOnlyChange(t){if(!t){this.open=false}}valueWatcher(t){if(!this.userChangedValue){let i;if(Array.isArray(t)){i=S(t)}else if(t){i=h(t)}else{i=undefined}if(!this.valueAsDateChangedExternally&&i!==this.valueAsDate){this.valueAsDate=i}this.localizeInputValues()}this.userChangedValue=false}valueAsDateWatcher(t){this.datePickerActiveDate=t;const i=this.range&&Array.isArray(t)?[l(t[0]),l(t[1])]:l(t);if(this.value!==i){this.valueAsDateChangedExternally=true;this.value=i;this.valueAsDateChangedExternally=false}}flipPlacementsHandler(){this.setFilteredPlacements();this.reposition(true)}onMessagesChange(){}onMinChanged(t){this.minAsDate=h(t)}onMaxChanged(t){this.maxAsDate=h(t)}openHandler(){L(this);if(this.disabled||this.readOnly){this.open=false;return}this.reposition(true)}overlayPositioningHandler(){this.reposition(true)}calciteDaySelectHandler(){if(this.shouldFocusRangeStart()||this.shouldFocusRangeEnd()){return}this.open=false}async setFocus(){await F(this);p(this.el)}async reposition(t=false){const{floatingEl:i,referenceEl:e,placement:s,overlayPositioning:a,filteredFlipPlacements:n}=this;return v(this,{floatingEl:i,referenceEl:e,overlayPositioning:a,placement:s,flipPlacements:n,type:"menu"},t)}connectedCallback(){C(this);R(this);const{open:t}=this;t&&this.openHandler();if(Array.isArray(this.value)){this.valueAsDate=S(this.value)}else if(this.value){try{this.valueAsDate=h(this.value)}catch(t){this.warnAboutInvalidValue(this.value);this.value=""}}else if(this.valueAsDate){if(this.range){this.setRangeValue(this.valueAsDate)}else if(!Array.isArray(this.valueAsDate)){this.value=l(this.valueAsDate)}}if(this.min){this.minAsDate=h(this.min)}if(this.max){this.maxAsDate=h(this.max)}P(this);x(this);Y(this);this.setFilteredPlacements();M.numberFormatOptions={numberingSystem:this.numberingSystem,locale:this.effectiveLocale,useGrouping:false};if(this.open){L(this)}m(this,this.referenceEl,this.floatingEl)}async componentWillLoad(){T(this);await Promise.all([this.loadLocaleData(),$(this)]);this.onMinChanged(this.min);this.onMaxChanged(this.max)}componentDidLoad(){E(this);this.localizeInputValues();m(this,this.referenceEl,this.floatingEl)}disconnectedCallback(){V(this);D(this);O(this);k(this);b(this,this.referenceEl,this.floatingEl);B(this);q(this)}componentDidRender(){z(this)}render(){var t,i,a;const{disabled:n,effectiveLocale:r,messages:o,numberingSystem:c,readOnly:l}=this;M.numberFormatOptions={numberingSystem:c,locale:r,useGrouping:false};return e(s,{key:"aa69d03a90a634fd434770a407971b0deb24782d",onBlur:this.blurHandler,onKeyDown:this.keyDownHandler},e(A,{key:"5d30252fbcb3dab76b0cc0d81c90c3d75f75d520",disabled:this.disabled},this.localeData&&e("div",{key:"846c8e4b6dcbf4c8452dd84dd8434989a0cd770e",class:tt.inputContainer},e("div",{key:"13625f578741424941b7b098f8e75693fd40d581",class:tt.inputWrapper,"data-position":"start",onClick:this.onInputWrapperClick,onPointerDown:this.onInputWrapperPointerDown,ref:this.setStartWrapper},e("calcite-input-text",{key:"9e046258464c35d2d274376c130cff91363844e9","aria-autocomplete":"none","aria-controls":this.dialogId,"aria-describedby":this.placeholderTextId,"aria-expanded":u(this.open),"aria-haspopup":"dialog",class:{[tt.input]:true,[tt.inputNoBottomBorder]:this.layout==="vertical"&&this.range},disabled:n,icon:"calendar",onCalciteInputTextInput:this.calciteInternalInputInputHandler,onCalciteInternalInputTextBlur:this.calciteInternalInputBlurHandler,onCalciteInternalInputTextFocus:this.startInputFocus,placeholder:(t=this.localeData)===null||t===void 0?void 0:t.placeholder,readOnly:l,ref:this.setStartInput,role:"combobox",scale:this.scale,status:this.status}),!this.readOnly&&this.renderToggleIcon(this.open&&this.focusedInput==="start"),e("span",{key:"867993bfe3ba2602140e4401c97efb5480ca3ce5","aria-hidden":"true",class:tt.assistiveText,id:this.placeholderTextId},"Date Format: ",(i=this.localeData)===null||i===void 0?void 0:i.placeholder)),e("div",{key:"719763b40876f53da8018e22bcd9d87161f8c2fe","aria-hidden":u(!this.open),"aria-label":o.chooseDate,"aria-live":"polite","aria-modal":"true",class:{[tt.menu]:true,[tt.menuActive]:this.open},id:this.dialogId,ref:this.setFloatingEl,role:"dialog"},e("div",{key:"981f7c95532de4f8dc742664a2c04370a522c164",class:{[tt.calendarWrapper]:true,[tt.calendarWrapperEnd]:this.focusedInput==="end",[y.animation]:true,[y.animationActive]:this.open},ref:this.setTransitionEl},e("calcite-date-picker",{key:"d40466e0fa7a8cca133444476f12a0d3e80b92d1",activeDate:this.datePickerActiveDate,activeRange:this.focusedInput,headingLevel:this.headingLevel,max:this.max,maxAsDate:this.maxAsDate,messageOverrides:this.messageOverrides,min:this.min,minAsDate:this.minAsDate,numberingSystem:c,onCalciteDatePickerChange:this.handleDateChange,onCalciteDatePickerRangeChange:this.handleDateRangeChange,proximitySelectionDisabled:this.proximitySelectionDisabled,range:this.range,ref:this.setDatePickerRef,scale:this.scale,tabIndex:this.open?undefined:-1,valueAsDate:this.valueAsDate}))),this.range&&this.layout==="horizontal"&&e("div",{key:"b41f729ce46f0a5578ff58e7507a1c6802fc6bfe",class:tt.horizontalArrowContainer},e("calcite-icon",{key:"ea2aef7c844385fe99e81b7df1955bdc95f5926d",flipRtl:true,icon:"arrow-right",scale:K(this.scale)})),this.range&&this.layout==="vertical"&&this.scale!=="s"&&e("div",{key:"743d7173f465a3c480ac43e41839338b205913a5",class:tt.verticalArrowContainer},e("calcite-icon",{key:"0e233a74f1df8560b3fd1c9b4e7889d37458ba2c",icon:"arrow-down",scale:K(this.scale)})),this.range&&e("div",{key:"51a308d2835d37394a0b26bd7900533ef8dd948b",class:tt.inputWrapper,"data-position":"end",onClick:this.onInputWrapperClick,onPointerDown:this.onInputWrapperPointerDown,ref:this.setEndWrapper},e("calcite-input-text",{key:"ef69ebe63fdc6068c5ba8ef469bf95780f81b841","aria-autocomplete":"none","aria-controls":this.dialogId,"aria-expanded":u(this.open),"aria-haspopup":"dialog",class:{[tt.input]:true,[tt.inputBorderTopColorOne]:this.layout==="vertical"&&this.range},disabled:n,icon:"calendar",onCalciteInputTextInput:this.calciteInternalInputInputHandler,onCalciteInternalInputTextBlur:this.calciteInternalInputBlurHandler,onCalciteInternalInputTextFocus:this.endInputFocus,placeholder:(a=this.localeData)===null||a===void 0?void 0:a.placeholder,readOnly:l,ref:this.setEndInput,role:"combobox",scale:this.scale,status:this.status}),!this.readOnly&&this.renderToggleIcon(this.open&&this.focusedInput==="end"))),e(I,{key:"22b9829585178610d9690130244000f579f556a7",component:this}),this.validationMessage&&this.status==="invalid"?e(U,{icon:this.validationIcon,message:this.validationMessage,scale:this.scale,status:this.status}):null))}renderToggleIcon(t){return e("span",{class:tt.toggleIcon,tabIndex:-1},e("calcite-icon",{class:tt.chevronIcon,icon:t?"chevron-up":"chevron-down",scale:K(this.scale)}))}effectiveLocaleChange(){N(this,this.effectiveLocale);this.loadLocaleData()}setReferenceEl(){const{focusedInput:t,layout:i,endWrapper:e,startWrapper:s}=this;this.referenceEl=t==="end"||i==="vertical"?e||s:s||e;requestAnimationFrame((()=>m(this,this.referenceEl,this.floatingEl)))}onLabelClick(){this.setFocus()}onBeforeOpen(){this.calciteInputDatePickerBeforeOpen.emit()}onOpen(){X(this,{onActivate:()=>{if(this.focusOnOpen){this.datePickerEl.setFocus();this.focusOnOpen=false}}});this.calciteInputDatePickerOpen.emit()}onBeforeClose(){this.calciteInputDatePickerBeforeClose.emit()}onClose(){this.calciteInputDatePickerClose.emit();V(this);this.restoreInputFocus();this.focusOnOpen=false;this.datePickerEl.reset()}syncHiddenFormInput(t){J("date",this,t)}commitValue(){const{focusedInput:t,value:i}=this;const e=`${t}Input`;const s=this[e].value;const a=o(s,this.localeData);const n=l(a);const r=Array.isArray(i);if(this.range){const e=t==="start"?0:1;if(r){if(n===i[e]){return}if(a){this.setRangeValue([t==="start"?a:h(i[0]),t==="end"?a:h(i[1])]);this.localizeInputValues()}else{this.setRangeValue([t==="end"&&h(i[0]),t==="start"&&h(i[1])])}}else{if(a){this.setRangeValue([t==="start"?a:h(i[0]),t==="end"?a:h(i[1])]);this.localizeInputValues()}}}else{if(n===i){return}this.setValue(a);this.localizeInputValues()}}async loadLocaleData(){M.numberFormatOptions={numberingSystem:this.numberingSystem,locale:this.effectiveLocale,useGrouping:false};this.localeData=await W(this.effectiveLocale);this.localizeInputValues()}shouldFocusRangeStart(){const t=this.value[0];const i=this.value[1];return!!(i&&!t&&this.focusedInput==="end"&&this.startInput)}shouldFocusRangeEnd(){const t=this.value[0];const i=this.value[1];return!!(t&&!i&&this.focusedInput==="start"&&this.endInput)}restoreInputFocus(){if(!this.range){this.startInput.setFocus();return}const t=this.focusedInput==="start"?this.startInput:this.endInput;t.setFocus()}localizeInputValues(){var t;const i=d(this.range?Array.isArray(this.valueAsDate)&&this.valueAsDate[0]||undefined:this.valueAsDate,this.minAsDate,this.maxAsDate);const e=this.range?d(Array.isArray(this.valueAsDate)&&this.valueAsDate[1]||undefined,this.minAsDate,this.maxAsDate):null;const s={numberingSystem:H(this.numberingSystem)};const a=i&&i.toLocaleDateString(this.effectiveLocale,s);const n=e&&e.toLocaleDateString(this.effectiveLocale,s);this.setInputValue(a!==null&&a!==void 0?a:"","start");this.setInputValue((t=this.range&&n)!==null&&t!==void 0?t:"","end")}warnAboutInvalidValue(t){console.warn(`The specified value "${t}" does not conform to the required format, "YYYY-MM-DD".`)}getNormalizedDate(t){if(!t){return""}if(!Q(t)){return t}const{day:i,month:e,year:s}=n(t);const a=Z(Number(s));return`${a}-${e}-${i}`}static get delegatesFocus(){return true}static get assetsDirs(){return["assets"]}get el(){return a(this)}static get watchers(){return{focusTrapDisabled:["handleFocusTrapDisabled"],disabled:["handleDisabledAndReadOnlyChange"],readOnly:["handleDisabledAndReadOnlyChange"],value:["valueWatcher"],valueAsDate:["valueAsDateWatcher"],flipPlacements:["flipPlacementsHandler"],messageOverrides:["onMessagesChange"],min:["onMinChanged"],max:["onMaxChanged"],open:["openHandler"],overlayPositioning:["overlayPositioningHandler"],effectiveLocale:["effectiveLocaleChange"],layout:["setReferenceEl"],focusedInput:["setReferenceEl"]}}};et.style=it;export{et as calcite_input_date_picker};
//# sourceMappingURL=p-156b04b1.entry.js.map