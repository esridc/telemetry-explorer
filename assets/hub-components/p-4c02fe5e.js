import{c as r,a as n}from"./p-dfe5a97d.js";var e=r((function(r,n){!function(r){var n={Promise:"undefined"!=typeof window?window.Promise:void 0},e="4.25",t="next";function o(r){if(r.toLowerCase()===t)return t;var n=r&&r.match(/^(\d)\.(\d+)/);return n&&{major:parseInt(n[1],10),minor:parseInt(n[2],10)}}function i(r){return void 0===r&&(r=e),"https://js.arcgis.com/".concat(r,"/")}function a(r){return!r||o(r)?function(r){void 0===r&&(r=e);var n=i(r),a=o(r);if(a!==t&&3===a.major){var u=a.minor<=10?"js/":"";return"".concat(n).concat(u,"esri/css/esri.css")}return"".concat(n,"esri/themes/light/main.css")}(r):r}function u(r,n){var e=a(r),t=function(r){return document.querySelector('link[href*="'.concat(r,'"]'))}(e);return t||function(r,n){if(n){var e=document.querySelector(n);e.parentNode.insertBefore(r,e)}else document.head.appendChild(r)}(t=function(r){var n=document.createElement("link");return n.rel="stylesheet",n.href=r,n}(e),n),t}var c={};function d(r,n,e){var t;e&&(t=function(r,n){var e=function(t){n(t.error||new Error("There was an error attempting to load ".concat(r.src))),r.removeEventListener("error",e,!1)};return r.addEventListener("error",e,!1),e}(r,e));var o=function(){n(r),r.removeEventListener("load",o,!1),t&&r.removeEventListener("error",t,!1)};r.addEventListener("load",o,!1)}function f(){return document.querySelector("script[data-esri-loader]")}function s(){var r=window.require;return r&&r.on}function v(r){void 0===r&&(r={});var e={};[c,r].forEach((function(r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}));var t=e.version,o=e.url||i(t);return new n.Promise((function(r,n){var i=f();if(i){var a=i.getAttribute("src");a!==o?n(new Error("The ArcGIS API for JavaScript is already loaded (".concat(a,")."))):s()?r(i):d(i,r,n)}else if(s())n(new Error("The ArcGIS API for JavaScript is already loaded."));else{var c=e.css;c&&u(!0===c?t:c,e.insertCssBefore),d(i=function(r){var n=document.createElement("script");return n.type="text/javascript",n.src=r,n.setAttribute("data-esri-loader","loading"),n}(o),(function(){i.setAttribute("data-esri-loader","loaded"),r(i)}),n),document.body.appendChild(i)}}))}function l(r){return new n.Promise((function(n,e){var t=window.require.on("error",e);window.require(r,(function(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];t.remove(),n(r)}))}))}r.utils=n,r.loadModules=function(r,n){if(void 0===n&&(n={}),s())return l(r);var e=f(),t=e&&e.getAttribute("src");return!n.url&&t&&(n.url=t),v(n).then((function(){return l(r)}))},r.getScript=f,r.isLoaded=s,r.loadScript=v,r.setDefaultOptions=function(r){void 0===r&&(r={}),c=r},r.loadCss=u,Object.defineProperty(r,"__esModule",{value:!0})}(n)}));export{e}