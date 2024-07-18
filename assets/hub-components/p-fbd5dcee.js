import{c as e}from"./p-c94c130f.js";import{g as t,a as r}from"./p-8ccaf06d.js";import{b as n}from"./p-97274a47.js";import{p as o}from"./p-c8e0e01f.js";import{C as i}from"./p-56b73d71.js";import{g as a}from"./p-cea8413b.js";import{u}from"./p-e43616ff.js";import{g as l}from"./p-992b9d10.js";import{u as s}from"./p-895b662f.js";function c(e){let t;try{t=new URL(e)}catch(t){throw new Error(`Invalid URI: ${e}`)}const r=t.protocol.replace(":",""),[,n]=e.split("://"),[i,a]=n.split("/");let u,l;if(a){const{itemId:e,layerId:t}=o(a);[u,l]=[e,t]}const s=new URLSearchParams(t.search.replace("?",""));return{source:r,type:i,id:u||null,layer:l||null,features:s.has("id")&&s.get("id").split(",")||null,attribute:s.has("attribute")&&s.get("attribute")||null}}const f=new RegExp("data-mention=('|\")[\\w@\\.-]+('|\")","g"),p=new RegExp("data-mention=","g"),d=new RegExp("[^\\w@\\.-]","g");function y(e=""){const t=(e,t)=>e.replace(t,"");return(e.match(f)||[]).reduce(((e,r)=>{const n=[p,d].reduce(t,r);return e.indexOf(n)<0?[...e,n]:e}),[])}
/* @preserve
* @terraformer/arcgis - v2.1.1 - MIT
* Copyright (c) 2012-2022 Environmental Systems Research Institute, Inc.
* Tue Aug 02 2022 14:23:48 GMT-0700 (Pacific Daylight Time)
*/var v=function(e,t,r,n){var o=(n[1]-r[1])*(t[0]-e[0])-(n[0]-r[0])*(t[1]-e[1]);if(0!==o){var i=((n[0]-r[0])*(e[1]-r[1])-(n[1]-r[1])*(e[0]-r[0]))/o,a=((t[0]-e[0])*(e[1]-r[1])-(t[1]-e[1])*(e[0]-r[0]))/o;if(i>=0&&i<=1&&a>=0&&a<=1)return!0}return!1},b=function(e,t){for(var r=0;r<e.length-1;r++)for(var n=0;n<t.length-1;n++)if(v(e[r],e[r+1],t[n],t[n+1]))return!0;return!1},m=function(e){return function(e,t){for(var r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(e[0],e[e.length-1])||e.push(e[0]),e},g=function(e){for(var t,r=0,n=0,o=e.length,i=e[n];n<o-1;n++)r+=((t=e[n+1])[0]-i[0])*(t[1]+i[1]),i=t;return r>=0},j=function(e){var t={};for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);return t},w=function(e,t){var r=b(e,t),n=function(e,t){for(var r=!1,n=-1,o=e.length,i=o-1;++n<o;i=n)(e[n][1]<=t[1]&&t[1]<e[i][1]||e[i][1]<=t[1]&&t[1]<e[n][1])&&t[0]<(e[i][0]-e[n][0])*(t[1]-e[n][1])/(e[i][1]-e[n][1])+e[n][0]&&(r=!r);return r}(e,t[0]);return!(r||!n)},O=function e(t,r){var n={};if(t.features){n.type="FeatureCollection",n.features=[];for(var o=0;o<t.features.length;o++)n.features.push(e(t.features[o],r))}if("number"==typeof t.x&&"number"==typeof t.y&&(n.type="Point",n.coordinates=[t.x,t.y],"number"==typeof t.z&&n.coordinates.push(t.z)),t.points&&(n.type="MultiPoint",n.coordinates=t.points.slice(0)),t.paths&&(1===t.paths.length?(n.type="LineString",n.coordinates=t.paths[0].slice(0)):(n.type="MultiLineString",n.coordinates=t.paths.slice(0))),t.rings&&(n=function(e){for(var t,r,n=[],o=[],i=0;i<e.length;i++){var a=m(e[i].slice(0));if(!(a.length<4))if(g(a)){var u=[a.slice().reverse()];n.push(u)}else o.push(a.slice().reverse())}for(var l=[];o.length;){r=o.pop();var s=!1;for(t=n.length-1;t>=0;t--)if(w(n[t][0],r)){n[t].push(r),s=!0;break}s||l.push(r)}for(;l.length;){r=l.pop();var c=!1;for(t=n.length-1;t>=0;t--)if(b(n[t][0],r)){n[t].push(r),c=!0;break}c||n.push([r.reverse()])}return 1===n.length?{type:"Polygon",coordinates:n[0]}:{type:"MultiPolygon",coordinates:n}}(t.rings.slice(0))),"number"==typeof t.xmin&&"number"==typeof t.ymin&&"number"==typeof t.xmax&&"number"==typeof t.ymax&&(n.type="Polygon",n.coordinates=[[[t.xmax,t.ymax],[t.xmin,t.ymax],[t.xmin,t.ymin],[t.xmax,t.ymin],[t.xmax,t.ymax]]]),(t.geometry||t.attributes)&&(n.type="Feature",n.geometry=t.geometry?e(t.geometry):null,n.properties=t.attributes?j(t.attributes):null,t.attributes))try{n.id=function(e,t){for(var r=t?[t,"OBJECTID","FID"]:["OBJECTID","FID"],n=0;n<r.length;n++){var o=r[n];if(o in e&&("string"==typeof e[o]||"number"==typeof e[o]))return e[o]}throw Error("No valid id attribute found")}(t.attributes,r)}catch(e){}return JSON.stringify(n.geometry)===JSON.stringify({})&&(n.geometry=null),t.spatialReference&&t.spatialReference.wkid&&4326!==t.spatialReference.wkid&&console.warn("Object converted in non-standard crs - "+JSON.stringify(t.spatialReference)),n},P=function(e){var t=[],r=e.slice(0),n=m(r.shift().slice(0));if(n.length>=4){g(n)||n.reverse(),t.push(n);for(var o=0;o<r.length;o++){var i=m(r[o].slice(0));i.length>=4&&(g(i)&&i.reverse(),t.push(i))}}return t},F=function e(t,r){r=r||"OBJECTID";var n,o={wkid:4326},i={};switch(t.type){case"Point":i.x=t.coordinates[0],i.y=t.coordinates[1],null!=t.coordinates[2]&&(i.z=t.coordinates[2]),i.spatialReference=o;break;case"MultiPoint":i.points=t.coordinates.slice(0),null!=t.coordinates[0][2]&&(i.hasZ=!0),i.spatialReference=o;break;case"LineString":i.paths=[t.coordinates.slice(0)],null!=t.coordinates[0][2]&&(i.hasZ=!0),i.spatialReference=o;break;case"MultiLineString":i.paths=t.coordinates.slice(0),null!=t.coordinates[0][0][2]&&(i.hasZ=!0),i.spatialReference=o;break;case"Polygon":i.rings=P(t.coordinates.slice(0)),null!=t.coordinates[0][0][2]&&(i.hasZ=!0),i.spatialReference=o;break;case"MultiPolygon":i.rings=function(e){for(var t=[],r=0;r<e.length;r++)for(var n=P(e[r]),o=n.length-1;o>=0;o--){var i=n[o].slice(0);t.push(i)}return t}(t.coordinates.slice(0)),null!=t.coordinates[0][0][0][2]&&(i.hasZ=!0),i.spatialReference=o;break;case"Feature":t.geometry&&(i.geometry=e(t.geometry,r)),i.attributes=t.properties?j(t.properties):{},t.id&&(i.attributes[r]=t.id);break;case"FeatureCollection":for(i=[],n=0;n<t.features.length;n++)i.push(e(t.features[n],r));break;case"GeometryCollection":for(i=[],n=0;n<t.geometries.length;n++)i.push(e(t.geometries[n],r))}return i},k=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};const S=50,C=512,I=475,M=e(((e,r)=>t({url:e,id:r}).then((e=>O(e))).catch((e=>(console.warn(`Failed to fetch related feature ${r}`,e.message),null)))),{scope:"relatedFeatures",getKey:(e,t)=>t.toString()});async function h(e,t){let r=[];return Number(n(e))>=0&&(r=await Promise.all(t.map((t=>M(e,t)))),r.forEach(((e,r)=>{e&&(e.id=t[r])}))),r.filter(Boolean)}const E=e(r,{scope:"content",ttl:3e3});function B(e){return{type:"FeatureCollection",features:e.filter((e=>Boolean(e.geometry||J(e.discussion)))).map(L).flat()}}function L(e){const t={type:"Point",coordinates:[]},{geometry:r}=e,n=k(e,["geometry"]),o=[];return"GeometryCollection"===(null==r?void 0:r.type)?r.geometries.forEach(((e,r)=>{o.push({type:"Feature",geometry:e||t,properties:Object.assign(Object.assign({},n),{__index__:r})})})):o.push({type:"Feature",geometry:r||t,properties:n}),o}function $(e){const t=e.map((e=>e.geometry)).filter((e=>{var t;return Boolean(null===(t=null==e?void 0:e.coordinates)||void 0===t?void 0:t.length)}));let r=null;return t.length>1?r={type:"GeometryCollection",geometries:t}:1===t.length&&(r=t[0]),r}function D(e,t,r){const{source:n,type:o,id:i,features:a}=c(e);let u=`${n}://${o}/${i}_${t}`;const l=Array.from(new Set([...a||[],...r]));return l.length&&(u+=`?id=${l.join(",")}`),u}function J(e){if(!e)return;const{features:t}=c(e);return t||void 0}const R=e=>{if(!e.layer)return!1;const{layer:{displayField:t,fields:r}}=e,{name:n}=r.find((({type:e})=>"esriFieldTypeOID"===e));return Boolean(t)&&t!==n};function x({type:e}){return"Point"===e||"MultiPoint"===e?"point":"LineString"===e||"MultiLineString"===e?"line":"Polygon"===e||"MultiPolygon"===e?"polygon":void 0}async function N(e){const{subject:t,discussable:r}=e,n=k(e,["subject","discussable"]);let o,c,f;"content"==(void 0===t.isInvitationOnly?"content":"group")?(o=a,c=u,f="item"):(o=l,c=s,f="group");const{typeKeywords:p}=await o(t.id,n),d=r?p.filter((e=>e!==i)):[...p,i],{success:y}=await c(Object.assign({[f]:{id:t.id,owner:t.owner,typeKeywords:d}},n));if(!y)throw new Error("Failed to update discussion settings");return Object.assign(Object.assign({},t),{typeKeywords:d})}function _(e,t){const r=t.filter(Boolean),n=t=>t.owner===e.creator,o=r.some(n)?null:r.find((e=>!n(e)));return(null==o?void 0:o.owner)||e.creator}function K(e,t,r){var n,o,i;return null!==(i=null!==(n=null==e?void 0:e.name)&&void 0!==n?n:null===(o=null==t?void 0:t.filter((e=>e))[0])||void 0===o?void 0:o.title)&&void 0!==i?i:r}export{S as M,I as W,M as a,B as b,L as c,O as d,F as e,E as f,K as g,R as h,x as i,y as j,D as k,$ as l,_ as m,C as n,J as o,c as p,h as q,N as u}