import{d as n}from"./p-ce275af6.js";import{g as t}from"./p-373caea5.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.10.1
 */const c={};async function s(t,s){const a=`${s}_${t}`;if(c[a]){return c[a]}c[a]=fetch(n(`./assets/${s}/t9n/messages_${t}.json`)).then((n=>{if(!n.ok){o()}return n.json()})).catch((()=>o()));return c[a]}function o(){throw new Error("could not fetch component message bundle")}function a(n){n.messages={...n.defaultMessages,...n.messageOverrides}}function e(){}async function i(n){n.defaultMessages=await f(n,n.effectiveLocale);a(n)}async function f(n,c){const{el:o}=n;const a=o.tagName.toLowerCase();const e=a.replace("calcite-","");return s(t(c,"t9n"),e)}async function r(n,t){n.defaultMessages=await f(n,t);a(n)}function u(n){n.onMessagesChange=p}function m(n){n.onMessagesChange=e}function p(){a(this)}export{u as c,m as d,i as s,r as u};
//# sourceMappingURL=p-93fac8b6.js.map