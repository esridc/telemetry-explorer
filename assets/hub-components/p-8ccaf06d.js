import{_ as t}from"./p-9b205605.js";import{_ as e,a as r,g as s,i as a,P as n,f as o}from"./p-6f931af6.js";import{c as i,i as c}from"./p-b728aff4.js";import{p as u,i as m,a as p,g as l}from"./p-c8e0e01f.js";import{h as d}from"./p-56b73d71.js";import{n as y,c as f,g as b,a as j}from"./p-97274a47.js";import{g as O}from"./p-a0deb8c6.js";import{i as w,g}from"./p-90dc0f6f.js";import{g as h,a as v,b as I,c as F}from"./p-dd26efbb.js";import{i as x,b as C}from"./p-d1b12a9c.js";import{g as K}from"./p-7202c430.js";import{h as S,S as q,i as D}from"./p-10274eb9.js";import{r as R}from"./p-dcdf7b57.js";import{c as T}from"./p-637ea136.js";import{a as E}from"./p-ad325ed1.js";import{g as M}from"./p-69555c48.js";import{p as P}from"./p-6dcae6cd.js";import{g as G}from"./p-cea8413b.js";const $=/\/(map|feature)server/i;function _(t){var r=T(t.url)+"/"+t.id,s=e({httpMethod:"GET"},t);return R(r,s).then((function(t){return s.rawResponse?t:t.feature}))}function A(t){var r=E(t,["where","objectIds","relationParam","time","distance","units","outFields","geometry","geometryType","spatialRel","returnGeometry","maxAllowableOffset","geometryPrecision","inSR","outSR","gdbVersion","returnDistinctValues","returnIdsOnly","returnCountOnly","returnExtentOnly","orderByFields","groupByFieldsForStatistics","outStatistics","returnZ","returnM","multipatchOption","resultOffset","resultRecordCount","quantizationParameters","returnCentroid","resultType","historicMoment","returnTrueCurves","sqlFormat","returnExceededLimitFeatures","f"],{httpMethod:"GET",params:e({where:"1=1",outFields:"*"},t.params)});return R(T(t.url)+"/query",r)}const B=t=>{const e=[].concat.apply([],t.filter(Array.isArray));return e.length?e:void 0},L=(t,e)=>{const r=i(t);return r.params=Object.assign(Object.assign({},r.params),{"fields[datasets]":"slug,boundary,extent,recordCount,searchDescription,statistics"}),e&&(r.params["filter[slug]"]=e),r},U=t=>{const{itemId:e,layerId:r}=u(t.id),s=r&&parseInt(r,10),{slug:a,boundary:n,extent:o,recordCount:i,searchDescription:c,statistics:m}=t.attributes;return{itemId:e,layerId:s,slug:a,boundary:n,extent:o,recordCount:i,searchDescription:c,statistics:m}},V=async(t,e)=>{try{const r=await d(`/datasets/${t}`,L(e));return U(r.data)}catch(t){return{errors:r(t)}}};function W(){const t=s();return t.push({entityKey:"permissions",storeKey:"data.permissions"}),t.push({entityKey:"location",storeKey:"item.properties.location"}),t.push({entityKey:"licenseInfo",storeKey:"item.licenseInfo"}),t.push({entityKey:"hostedDownloads",storeKey:"item.properties.downloads.hosted"}),t}const k=async(t,e)=>{const r=await G(t,e);r.url=j(r,e)||r.url;const s=(null==e?void 0:e.enrichments)||(t=>{const e=["groupIds","metadata","ownerUser","org"];return(t=>{const e=y(t),r=O(e);return w(["template","solution"],r)||w(["Web Map","Web Scene","Feature Service"],e)})(t)&&e.push("data"),$.test(t.url)?e.concat("server","layers"):e})(r),a=await o(r,s,e);return(async(t,e)=>{const{item:r}=t;let{layers:s}=t,a=s&&b(r,s,e&&e.layerId);if(a&&!a.type){const t=P(r.url)+"/"+a.id,n=Object.assign({url:t},e);a=await l(n),s=s.map((t=>t.id===a.id?a:t))}return Object.assign(Object.assign({},t),{layers:s})})(Object.assign(Object.assign({},a),{item:r}),e)},z=async(e,r)=>{const s=m(e)?await(async(e,r)=>{let s=await(async(t,e)=>{const r=await d("/datasets",L(e,t));return U(r.data[0])})(e,r);const{itemId:a}=s;let{layerId:n}=s;const o=await k(a,r),{item:i}=o,u=t(o,["item"]),m=r&&r.layerId;return c(m)||m===n||(n=m,s=Object.assign(Object.assign({},s),await V(`${a}_${n}`,r))),f(i,Object.assign(Object.assign(Object.assign({requestOptions:r},u),s),{layerId:n,slug:e,errors:B([u.errors,s.errors])}))})(p(e,null==r?void 0:r.siteOrgKey),r):await(async(e,r)=>{const{itemId:s}=u(e),a=await k(s,r),{item:n}=a,o=t(a,["item"]),i=r&&r.layerId,m=F(n,r)?await V(e,r):{},p=m.layerId;return f(n,Object.assign(Object.assign(Object.assign({requestOptions:r},o),m),{layerId:c(i)?p:i,errors:B([o.errors,m.errors])}))})(e,r),{layer:a,type:n}=s,o=!!a&&["Feature Layer","Table"].includes(n);return s.recordCount=o&&(c(s.recordCount)||s.viewDefinition)?await(async(t,e)=>{const{url:r,viewDefinition:s}=t,a=null==s?void 0:s.definitionExpression;try{return(await A(Object.assign(Object.assign({},e),{url:r,where:a,returnCountOnly:!0}))).count}catch(t){return 1/0}})(s,r):s.recordCount,s},Z=async(t,e)=>{const r=Object.assign(Object.assign({},e),{enrichments:[]}),{item:s}=await z(t,r),a={item:s},n={};return D(s)&&(n.server=await M(Object.assign(Object.assign({},e),{url:P(s.url)}))),H(a,e,n)};function H(t,e,r){return function(t,e,r,s={}){var n;let o;r.authentication&&(o=r.authentication.token);const i=g(t.item,r,o);return e.thumbnailUrl=i,e.links={self:h(e.id,r),siteRelative:v(e.type,e.slug||e.id,e.typeKeywords),workspaceRelative:K("content",e.id),thumbnail:i,contentEditUrl:I(t.item,r)},e.licenseInfo=t.item.licenseInfo||"",e.location||(e.location="none"===(null===(n=t.item.properties)||void 0===n?void 0:n.boundary)?{type:"none"}:function(t){const e={type:"custom"},r=(t=>x(t)?Object.assign(Object.assign({},C(t)),{type:"extent"}):void 0)(t);return r&&(e.geometries=[r],e.spatialReference=r.spatialReference,e.extent=t),e}(t.item.extent)),e.isDiscussable=a(e),s.server&&(e.serverExtractCapability=S(q.EXTRACT,s.server)),e}(t,new n(W()).storeToEntity(t,{}),e,r)}export{z as a,W as b,Z as f,_ as g,H as m,A as q}