import{h as t}from"./p-ce275af6.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.10.1
 */const o={arrow:"calcite-floating-ui-arrow",arrowStroke:"calcite-floating-ui-arrow__stroke"};const e={width:12,height:6,strokeWidth:1};const r=({floatingLayout:r,key:i,ref:a})=>{const{width:s,height:n,strokeWidth:c}=e;const h=s/2;const d=r==="vertical";const l="M0,0"+` H${s}`+` L${s-h},${n}`+` Q${h},${n} ${h},${n}`+" Z";return t("svg",{"aria-hidden":"true",class:o.arrow,height:s,key:i,ref:a,viewBox:`0 0 ${s} ${s+(!d?c:0)}`,width:s+(d?c:0)},c>0&&t("path",{class:o.arrowStroke,d:l,fill:"none","stroke-width":c+1}),t("path",{d:l,stroke:"none"}))};export{r as F};
//# sourceMappingURL=p-08037c34.js.map