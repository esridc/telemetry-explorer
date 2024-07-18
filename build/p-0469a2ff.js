import{h as t}from"./p-ce275af6.js";import{q as n,c as i}from"./p-e4f14b9d.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.10.1
 */const e=["calcite-input","calcite-input-number","calcite-input-text","calcite-text-area"];function s(t){const n=t.split("-").map(((t,n)=>n===0?t:`${t[0].toUpperCase()}${t.slice(1)}`)).join("");const i=`${n}${e.includes(t)?"Input":"Change"}`;return i}const o="hidden-form-input";function c(t){return"checked"in t}const r=new WeakMap;const u=new WeakSet;function a(t,n){const e=i(n.parentElement,"[form]");if(e){return true}const s="calciteInternalFormComponentRegister";let o=false;t.addEventListener(s,(t=>{o=t.composedPath().some((t=>u.has(t)));t.stopPropagation()}),{once:true});n.dispatchEvent(new CustomEvent(s,{bubbles:true,composed:true}));return o}function f(t,{status:n,message:i,icon:e}){if("status"in t){t.status=n}if("validationIcon"in t&&typeof t.validationIcon!=="string"){t.validationIcon=e}if("validationMessage"in t&&!t.validationMessage){t.validationMessage=i}}function l(t){if(t.nodeName==="CALCITE-RADIO-BUTTON"){return i(t,"calcite-radio-button-group")}return t}const d=new CustomEvent("calciteInvalid",{bubbles:true,composed:true});function m(t){const n=t?.target;const i=n?.validationMessage;const e=l(n?.parentElement);if(!e){return}const o=e?.nodeName?.toLowerCase();const c=o?.split("-");if(c.length<2||c[0]!=="calcite"){return}t?.preventDefault();if("validity"in e){e.validity=n?.validity}e.dispatchEvent(d);f(e,{message:i,icon:true,status:"invalid"});const r=s(o);e.addEventListener(r,(()=>{if("status"in e){e.status="idle"}if("validationIcon"in e&&!e.validationIcon){e.validationIcon=false}if("validationMessage"in e&&e.validationMessage===i){e.validationMessage=""}if("validity"in e){e.validity=n?.validity}}),{once:true})}function p(t){const{formEl:n}=t;if(!n){return false}n.addEventListener("invalid",m,true);n.requestSubmit();n.removeEventListener("invalid",m,true);requestAnimationFrame((()=>{const t=n.querySelectorAll("[status=invalid]");for(const n of t){if(n?.validationMessage){n?.setFocus();break}}}));return true}function v(t){t.formEl?.reset()}function b(t){const{el:n,value:i}=t;const e=h(t);if(!e||a(e,n)){return}t.formEl=e;t.defaultValue=i;if(c(t)){t.defaultChecked=t.checked}const s=(t.onFormReset||I).bind(t);e.addEventListener("reset",s);r.set(t.el,s);u.add(n)}function h(t){const{el:e,form:s}=t;return s?n(e,{id:s}):i(e,"form")}function I(){if("status"in this){this.status="idle"}if("validationIcon"in this){this.validationIcon=false}if("validationMessage"in this){this.validationMessage=""}if(c(this)){this.checked=this.defaultChecked;return}this.value=this.defaultValue}function g(t){const{el:n,formEl:i}=t;if(!i){return}const e=r.get(n);i.removeEventListener("reset",e);r.delete(n);t.formEl=null;u.delete(n)}function w(t,n){t.defaultValue=n}const C="calciteInternalHiddenInputInput";const E=t=>{t.target.dispatchEvent(new CustomEvent(C,{bubbles:true}))};const y=t=>t.removeEventListener("input",E);function $(t){const{el:n,formEl:i,name:e,value:s}=t;const{ownerDocument:c}=n;const r=n.querySelectorAll(`input[slot="${o}"]`);if(!i||!e){r.forEach((t=>{y(t);t.remove()}));return}const u=Array.isArray(s)?s:[s];const a=[];const f=new Set;r.forEach((n=>{const i=u.find((t=>t==n.value));if(i!=null){f.add(i);k(t,n,i)}else{a.push(n)}}));let l;u.forEach((n=>{if(f.has(n)){return}let i=a.pop();if(!i){i=c.createElement("input");i.slot=o}if(!l){l=c.createDocumentFragment()}l.append(i);i.addEventListener("input",E);k(t,i,n)}));if(l){n.append(l)}a.forEach((t=>{y(t);t.remove()}))}function k(t,n,i){const{defaultValue:e,disabled:s,form:o,name:r,required:u}=t;n.defaultValue=e;n.disabled=s;n.name=r;n.required=u;n.tabIndex=-1;if(o){n.setAttribute("form",o)}else{n.removeAttribute("form")}if(c(t)){n.checked=t.checked;n.defaultChecked=t.defaultChecked;n.value=t.checked?i||"on":""}else{n.value=i||""}t.syncHiddenFormInput?.(n);const a=l(t.el);if(a&&"validity"in a){for(const t in{...n?.validity}){a.validity[t]=n.validity[t]}}}const A=({component:n})=>{$(n);return t("slot",{name:o})};export{A as H,w as a,b as c,g as d,h as f,C as i,v as r,p as s};
//# sourceMappingURL=p-0469a2ff.js.map