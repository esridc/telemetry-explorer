import{r as t,h as i,H as a}from"./p-d4ba4c14.js";import{g as s}from"./p-796574a4.js";import{a as r}from"./p-8ccaf06d.js";import"./p-9b205605.js";import"./p-6f931af6.js";import"./p-56b73d71.js";import"./p-3904125b.js";import"./p-3f64a9d9.js";import"./p-377e1b5e.js";import"./p-637ea136.js";import"./p-b728aff4.js";import"./p-52612356.js";import"./p-af59e67b.js";import"./p-b295a5ae.js";import"./p-dd26efbb.js";import"./p-d1b12a9c.js";import"./p-dcdf7b57.js";import"./p-a0deb8c6.js";import"./p-6dcae6cd.js";import"./p-2acb70a6.js";import"./p-cea8413b.js";import"./p-d763eacf.js";import"./p-ad325ed1.js";import"./p-8e7f4c22.js";import"./p-69555c48.js";import"./p-c8e0e01f.js";import"./p-59fd2498.js";import"./p-97274a47.js";import"./p-30a7cbb2.js";import"./p-90dc0f6f.js";import"./p-7202c430.js";import"./p-75d6da59.js";import"./p-10274eb9.js";const p=class{constructor(i){t(this,i),this.isLoading=!0,this.entityId=null,this.metadata=[],this.entity={}}metadataUpdated(t){console.log("ArcGISHubMetadataList: metadata",t),t&&(this.metadata=JSON.parse(t))}entityIdUpdated(t){t&&this.fetchEntity(t)}lookup(t,i){const a=s(i,t.element);let r=a;if(null!==a)switch(t.format){case"datetime":r=new Date(a).toISOString();break;case"array":Array.isArray(a)&&(r=a.join(", "))}return r}async fetchEntity(t){this.entity=await r(t),this.isLoading=!1,console.log("ArcGISHubMetadataList: fetchEntity",[this.entity.title,this.entity.title,this.metadata,this.entity])}componentWillLoad(){this.fetchEntity(this.entityId)}render(){return i(a,{"data-element":"metadata-list"},i("slot",null),i("table",null,this.metadata.map((t=>i("tr",{key:t.label},i("td",null,t.label),i("td",null,this.isLoading?"Lame Loading State 🤮...":this.lookup(t,this.entity)))))))}static get watchers(){return{metadata:["metadataUpdated"],entityId:["entityIdUpdated"]}}};p.style=":host{display:block;border:thin solid #DDD;margin:0.5rem 0}tr:nth-child(even){background-color:#f3f3f3}th,td{padding:0.8rem 1rem}@keyframes shimmer{0%{background-size:200% 100%;background-position:100% 0}100%{background-size:200% 100%;background-position:-100% 0}}td.loading{animation:shimmer 2s cubic-bezier(0.4, 0, 0.2, 0.8) infinite}tbody tr.active-row{font-weight:bold;color:#009879}";export{p as arcgis_hub_metadata_list}