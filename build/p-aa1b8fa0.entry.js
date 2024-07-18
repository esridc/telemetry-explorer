import{r as e,h as t,H as o}from"./p-ce275af6.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.10.1
 */const a="calcite-mode-auto";const i="calcite-mode-dark";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.10.1
 */const n=globalThis["calciteConfig"];const d="2.10.1";function r(){if(n&&n.version){console.warn(`[calcite-components] while initializing v${d}, an existing configuration with version "${n.version}" was found. This may cause unexpected behavior. The version will not be added to the existing global configuration.`);return}const e=n||globalThis["calciteConfig"]||{};Object.defineProperty(e,"version",{value:d,writable:false});globalThis["calciteConfig"]=e}
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.10.1
 */function s(){const{classList:e}=document.body;const t=window.matchMedia("(prefers-color-scheme: dark)").matches;const o=()=>e.contains(i)||e.contains(a)&&t?"dark":"light";const n=e=>document.body.dispatchEvent(new CustomEvent("calciteModeChange",{bubbles:true,detail:{mode:e}}));const d=e=>{r!==e&&n(e);r=e};let r=o();n(r);window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(e=>d(e.matches?"dark":"light")));new MutationObserver((()=>d(o()))).observe(document.body,{attributes:true,attributeFilter:["class"]})}function c(){const e=typeof window!=="undefined"&&typeof location!=="undefined"&&typeof document!=="undefined"&&window.location===location&&window.document===document;if(e){if(document.readyState==="interactive"){s()}else{document.addEventListener("DOMContentLoaded",(()=>s()),{once:true})}}r()}const l=c;l();const u=':host{display:block}#dashboard{display:grid;grid-template-areas:"header header"\n    "sidebar canvas";grid-template-rows:auto 1fr;grid-template-columns:auto 1fr}#header{grid-area:header;padding:0 2rem;background-color:black;color:white}#sidebar{grid-area:sidebar}#canvas{grid-area:canvas}';const h=class{constructor(t){e(this,t);this.cardId="card1";this.cardEls={}}updateCardConfiguration(e){console.debug("telemetryConfigurationUpdated",e.detail);const t=e.detail.cardId;const o=e.detail.configuration;console.debug("Updated card id:",t,this.cardEls,o);this.cardEls[t].configuration=o}render(){return t(o,null,t("div",{id:"dashboard"},t("div",{id:"header"},t("slot",{name:"header"})),t("div",{id:"sidebar"},t("telemetry-card-editor",{cardId:this.cardId})),t("div",{id:"canvas"},t("telemetry-card",{cardId:this.cardId,ref:e=>this.cardEls[this.cardId]=e}))))}};h.style=u;export{h as telemetry_dashboard};
//# sourceMappingURL=p-aa1b8fa0.entry.js.map