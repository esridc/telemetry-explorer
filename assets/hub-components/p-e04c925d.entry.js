import{r as t,h as i,H as s}from"./p-d4ba4c14.js";import{g as e}from"./p-b295a5ae.js";import{a as r}from"./p-8ccaf06d.js";import"./p-796574a4.js";import"./p-9b205605.js";import"./p-6f931af6.js";import"./p-56b73d71.js";import"./p-3904125b.js";import"./p-3f64a9d9.js";import"./p-377e1b5e.js";import"./p-637ea136.js";import"./p-b728aff4.js";import"./p-52612356.js";import"./p-af59e67b.js";import"./p-dd26efbb.js";import"./p-d1b12a9c.js";import"./p-dcdf7b57.js";import"./p-a0deb8c6.js";import"./p-6dcae6cd.js";import"./p-2acb70a6.js";import"./p-cea8413b.js";import"./p-d763eacf.js";import"./p-ad325ed1.js";import"./p-8e7f4c22.js";import"./p-69555c48.js";import"./p-c8e0e01f.js";import"./p-59fd2498.js";import"./p-97274a47.js";import"./p-30a7cbb2.js";import"./p-90dc0f6f.js";import"./p-7202c430.js";import"./p-75d6da59.js";import"./p-10274eb9.js";const a=class{constructor(i){t(this,i),this.entityId=null,this.entity={},this.sort=null,this.fields=[],this.useLayers=!1}componentWillLoad(){this.entityId&&this.fetchEntity(this.entityId)}entityIdUpdated(t){t&&this.fetchEntity(t)}getMetadataAttributes(t){return e(t,"metadata.metadata.eainfo.detailed.attr",[]).map((t=>({label:t.attrdef,name:t.attrlabl,source:t.attrdefs,format:t.attrtype})))}getLayerAttributes(t){return e(t,"layer.fields",[]).map((t=>({label:t.alias,name:t.name,source:"layer",format:t.type})))}getFields(t){let i;if(this.useLayers||(i=this.getMetadataAttributes(t)),i&&0!==i.length||(i=this.getLayerAttributes(t)),this.sort){const[t,s]=this.sort.split(" ");i=i.sort(((i,s)=>(console.log("compare: ",[i[t],s[t]]),i[t]<s[t]?-1:1))),console.log("Sort",[t,s,i])}return i}async fetchEntity(t){var i;this.entity=await r(t),this.fields=this.getFields(this.entity),console.log("ArcGISHubMetadataList: fetchEntity",[this.entity.title,this.entity,null===(i=this.entity.metadata)||void 0===i?void 0:i.metadata.eainfo.detailed.attr])}render(){return i(s,{"data-element":"dataset-field-list"},i("slot",null),i("table",null,i("thead",null,i("td",null,"Field Name"),i("td",null,"Field Label"),i("td",null,"Source"),i("td",null,"Format")),this.fields.map((t=>i("tr",{key:t.name},i("td",null,t.name),i("td",null,t.label),i("td",null,t.source),i("td",null,t.format))))))}static get watchers(){return{entityId:["entityIdUpdated"]}}};a.style=":host{display:block;border:thin solid #DDD;margin:0.5rem 0}tr:nth-child(even){background-color:#f3f3f3}th,td{padding:0.8rem 1rem}tbody tr.active-row{font-weight:bold;color:#009879}";export{a as arcgis_hub_dataset_field_list}