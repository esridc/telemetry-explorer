import{r as t}from"./p-dcdf7b57.js";import{s as a}from"./p-235bb6ee.js";async function r(a,r){const n=`${r.portal}/portals/${a}/categorySchema`;try{const{categorySchema:a}=await t(n,r);return e(a[0].categories,[])}catch(t){return[]}}function e(t,a){return t.forEach((t=>{var r;(null===(r=t.categories)||void 0===r?void 0:r.length)?e(t.categories,a):a.push({value:t.title})})),a}async function n(t,r,e){try{const n={q:`orgid:${r}`,countFields:"tags",countSize:200,authentication:e.authentication},o=await a(n),[c]=o.aggregations.counts.map((t=>({mode:"terms",field:t.fieldName,values:t.fieldValues}))),s=t.tags||[];return[...new Set([...c.values.map((t=>t.value)),...s])].filter((t=>t)).map((t=>({value:t})))}catch(t){return[]}}export{r as a,n as g}