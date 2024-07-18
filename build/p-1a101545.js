import{h as n}from"./p-ce275af6.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.10.1
 */function t(){return navigator.userAgentData}function i(){const n=t();return n?.brands?n.brands.map((({brand:n,version:t})=>`${n}/${t}`)).join(" "):navigator.userAgent}
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.10.1
 */const o=/firefox/i.test(i());const r=o?new WeakMap:null;function e(){const{disabled:n}=this;if(!n){HTMLElement.prototype.click.call(this)}}function c(n){const t=n.target;if(o&&!r.get(t)){return}const{disabled:i}=t;if(i){n.preventDefault()}}const u=["mousedown","mouseup","click"];function f(n){const t=n.target;if(o&&!r.get(t)){return}if(t.disabled){n.stopImmediatePropagation();n.preventDefault()}}const s={capture:true};function a(n){if(n.disabled){n.el.setAttribute("aria-disabled","true");if(n.el.contains(document.activeElement)){document.activeElement.blur()}d(n);return}m(n);n.el.removeAttribute("aria-disabled")}function d(n){n.el.click=e;if(o){const t=p(n);const i=r.get(n.el);if(i!==t){b(i);r.set(n.el,t)}l(r.get(n.el));return}l(n.el)}function l(n){if(!n){return}n.addEventListener("pointerdown",c,s);u.forEach((t=>n.addEventListener(t,f,s)))}function p(n){return n.el.parentElement||n.el}function m(n){delete n.el.click;if(o){b(r.get(n.el));r.delete(n.el);return}b(n.el)}function b(n){if(!n){return}n.removeEventListener("pointerdown",c,s);u.forEach((t=>n.removeEventListener(t,f,s)))}function v(n){if(!n.disabled||!o){return}d(n)}function w(n){if(!o){return}m(n)}const g={container:"interaction-container"};function h({disabled:t},i){return n("div",{class:g.container,inert:t},...i)}export{h as I,v as c,w as d,i as g,a as u};
//# sourceMappingURL=p-1a101545.js.map