import{f as t,D as s,u as r,g as i,h as e,i as o}from"./p-dafb2329.js";import{c as a,u as n}from"./p-b728aff4.js";import{g as h}from"./p-94a4bb53.js";import{H as c}from"./p-1458dcfd.js";import{u}from"./p-895b662f.js";import{a as m}from"./p-783242bc.js";import{r as p}from"./p-dcdf7b57.js";import{j as f}from"./p-85d6867e.js";import{m as l}from"./p-8dbea197.js";import{s as d}from"./p-52612356.js";import{g as w}from"./p-796574a4.js";import{g as b}from"./p-992b9d10.js";import{c as y}from"./p-f845584b.js";function j(t=[],s){const r=g(t,s.permission,s.collaborationId);return r.push(s),r}function g(t=[],s,r){return a(t).filter((t=>t.permission!==s||t.collaborationId!==r))}const E=async(t,s,r)=>{const i=s.map(f),e=l("enrichment",i).filter(n);let o={};return e.length&&(o=await G(t,e,r)),i.forEach((s=>{d(s.prop,w(o,s.path),t)})),t},G=async(t,s,r)=>{const i=s.reduce(((t,s)=>{const r={followersGroup:P}[s];return r&&t.push({enrichment:s,operation:r}),t}),[]),e=i.map((({operation:s})=>s(t,r)));return(await Promise.all(e)).reduce(((t,s,r)=>(t[i[r].enrichment]=s,t)),{})},P=async(t,s)=>{let r={};try{const i=w(t,"followersGroupId");i&&(r=await b(i,s))}catch(t){return{}}return r};class H{constructor(t,s){this.isDestroyed=!1,this.thumbnailCache=null,this.entity=t,this.context=s}get canEdit(){return this.entity.memberType&&("owner"===this.entity.memberType||"admin"===this.entity.memberType)||this.entity.owner===this.context.currentUser.username}get canDelete(){return this.canEdit}get isProtected(){return this.entity.protected}static fromJson(t,s){const r=this.applyDefaults(t);return new H(r,s)}static async create(t,s,r=!1){const i=this.applyDefaults(t),e=H.fromJson(i,s);return r&&await e.save(),e}static async fetch(s,r){try{const i=await t(s,r.userRequestOptions);return H.fromJson(i,r)}catch(t){throw"COM_0003: Group does not exist or is inaccessible."===t.message?new Error("Group not found."):t}}static applyDefaults(t){return Object.assign(Object.assign({},s),t)}toJson(){if(this.isDestroyed)throw new Error("HubGroup is already destroyed.");return a(this.entity)}update(t){if(this.isDestroyed)throw new Error("HubGroup is already destroyed.");this.entity=Object.assign(Object.assign({},this.entity),t)}async save(){if(this.isDestroyed)throw new Error("HubGroup is already destroyed.");this.entity=this.entity.id?await r(this.entity,this.context.userRequestOptions):await i(this.entity,this.context.userRequestOptions)}async delete(){if(this.isDestroyed)throw new Error("HubGroup is already destroyed.");this.isDestroyed=!0,await e(this.entity.id,this.context.userRequestOptions)}checkPermission(t){return y(t,this.context,this.entity)}getPermissionPolicies(t){return this.entity.permissions.filter((s=>s.permission===t))}addPermissionPolicy(t){this.entity.permissions=j(this.entity.permissions,t)}removePermissionPolicy(t,s){this.entity.permissions=g(this.entity.permissions,t,s)}async getEditorConfig(t,s){return h(t,s,this.entity,this.context)}async toEditor(t={},s=[]){return s.length?await E(a(this.entity),s,this.context.hubRequestOptions):a(this.entity)}async fromEditor(t){const s=!t.id;if(t._thumbnail&&(this.thumbnailCache=t._thumbnail.blob?{file:t._thumbnail.blob,filename:t._thumbnail.fileName,clear:!1}:{clear:!0}),delete t._thumbnail,this.thumbnailCache)if(this.thumbnailCache.clear)await async function(t,s){const{portal:r}=s;return p(`${r}/community/groups/${t}/deleteThumbnail`,s)}(this.entity.id,this.context.userRequestOptions);else{await async function(t,s,r,i,e){const o=Object.assign({group:{id:t},owner:e,params:{thumbnail:s,fileName:r},filename:r},i);try{if(!(await u(o)).success)throw new c("Set Group Thumbnail","Unknown error setting thumbnail.")}catch(t){throw t instanceof Error?new c("Set Group Thumbnail",t.message,t):new c("Set Group Thumbnail","Unknown error setting thumbnail.")}}(this.entity.id,this.thumbnailCache.file,this.thumbnailCache.filename,this.context.userRequestOptions,this.entity.owner),this.entity.thumbnail=`thumbnail/${this.thumbnailCache.filename}`;const t=o(this.entity);this.entity.thumbnailUrl=m(this.context.userRequestOptions.portal,t),this.thumbnailCache=null}const r=a(t);if(s)throw new Error("Cannot create group using the Editor.");return this.entity=r,await this.save(),this.entity}}export{H,j as a,E as e,g as r}