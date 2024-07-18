/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.10.1
 */
const i=globalThis["calciteConfig"];const n=i?.focusTrapStack||[];const o="__CALCITE_VERSION__";function e(){if(i&&i.version){console.warn(`[calcite-components] while initializing v${o}, an existing configuration with version "${i.version}" was found. This may cause unexpected behavior. The version will not be added to the existing global configuration.`);return}const n=i||globalThis["calciteConfig"]||{};Object.defineProperty(n,"version",{value:o,writable:false});globalThis["calciteConfig"]=n}export{n as f,e as s};
//# sourceMappingURL=p-4d17b8f4.js.map