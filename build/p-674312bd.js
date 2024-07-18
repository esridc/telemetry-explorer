import{d as e,a as t}from"./p-3a41f8f2.js";import{s as o}from"./p-4d17b8f4.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.10.1
 */function n(){const{classList:o}=document.body;const n=window.matchMedia("(prefers-color-scheme: dark)").matches;const c=()=>o.contains(e)||o.contains(t)&&n?"dark":"light";const d=e=>document.body.dispatchEvent(new CustomEvent("calciteModeChange",{bubbles:true,detail:{mode:e}}));const s=e=>{i!==e&&d(e);i=e};let i=c();d(i);window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(e=>s(e.matches?"dark":"light")));new MutationObserver((()=>s(c()))).observe(document.body,{attributes:true,attributeFilter:["class"]})}function c(){const e=typeof window!=="undefined"&&typeof location!=="undefined"&&typeof document!=="undefined"&&window.location===location&&window.document===document;if(e){if(document.readyState==="interactive"){n()}else{document.addEventListener("DOMContentLoaded",(()=>n()),{once:true})}}o()}const d=c;export{d as g};
//# sourceMappingURL=p-674312bd.js.map