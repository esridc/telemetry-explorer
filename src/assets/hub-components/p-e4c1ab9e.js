import{r as e}from"./p-dcdf7b57.js";import{c as t}from"./p-b728aff4.js";class r{constructor(){this._createReplicaOptions={layers:"0",layerQueries:{0:{queryOption:"all"}},returnAttachments:!0,returnAttachmentsDataByUrl:!0,async:!0,syncModel:"none",targetType:"client",syncDirection:"bidirectional",attachmentsSyncDirection:"bidirectional"}}layers(e){return this._createReplicaOptions.layers=e,this}dataFormat(e){return this._createReplicaOptions.dataFormat=e,this}geometry(e){return this._createReplicaOptions.geometry=e,this._createReplicaOptions.geometryType={point:"esriGeometryPoint",multipoint:"esriGeometryMultipoint",polyline:"esriGeometryPolyline",polygon:"esriGeometryPolygon",extent:"esriGeometryEnvelope"}[e.type],this._createReplicaOptions.inSR=e.spatialReference,this}layerQueries(e){return this._createReplicaOptions.layerQueries=e,this}build(){return t(this._createReplicaOptions)}}async function a(t,r,a,s=5e3){const n=await async function(t,r,a){const i={httpMethod:"POST",params:a,authentication:r},{statusUrl:s}=await e(`${t}/createReplica`,i);return s}(t,r,a),{resultUrl:o,authRequired:c}=await i(n,r,s);let l=o;return c&&(l=`${o}?token=${await r.getToken(o)}`),l}async function i(t,r,a){const{response:{status:s,error:n={},resultUrl:o},authRequired:c}=await async function(t,r){const a=await e(t,Object.assign(Object.assign({},r),{rawResponse:!0,httpMethod:"GET"})),i=new URL("",a.url);return{response:await a.json(),authRequired:i.searchParams.has("token")}}(t,{authentication:r});if("Failed"===s)throw n;return"Completed"===s?{resultUrl:o,authRequired:c}:(await new Promise((e=>setTimeout(e,a))),i(t,r,a))}const s=e=>"string"==typeof e||e instanceof String,n=e=>Array.isArray(e)&&e.every((e=>!isNaN(e))),o=e=>Array.isArray(e)&&e.every((e=>!isNaN(e.id))),c=e=>"ArcGISRequestError"===e.name&&429===e.code,l=e=>500===e.code,u=e=>({csv:"CSV",shapefile:"Shapefile",sqlite:"SQLite Geodatabase",geoPackage:"GeoPackage",filegdb:"File Geodatabase",featureCollection:"Feature Collection",geojson:"GeoJSON",excel:"Excel",json:"JSON"}[e]);export{r as C,l as a,c as b,n as c,o as d,u as f,a as g,s as i}