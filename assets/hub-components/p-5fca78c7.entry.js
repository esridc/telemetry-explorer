import{r as s,c as t,h as i,H as e,a as o,F as a}from"./p-d4ba4c14.js";import{i as n}from"./p-be5c5009.js";import{b as d}from"./p-fd260f2d.js";import{d as r}from"./p-8cf4bd83.js";import{m as c}from"./p-1b73120f.js";import{f as l,a as h}from"./p-953effcc.js";import{P as p,d as u,f as g,e as m}from"./p-56b73d71.js";import{s as b}from"./p-57f04fe1.js";import"./p-dfe5a97d.js";import"./p-4a14259a.js";import"./p-796574a4.js";import"./p-adee2925.js";import"./p-c94c130f.js";import"./p-992b9d10.js";import"./p-d763eacf.js";import"./p-377e1b5e.js";import"./p-637ea136.js";import"./p-dcdf7b57.js";import"./p-ad325ed1.js";import"./p-fbd5dcee.js";import"./p-8ccaf06d.js";import"./p-9b205605.js";import"./p-6f931af6.js";import"./p-b728aff4.js";import"./p-52612356.js";import"./p-af59e67b.js";import"./p-b295a5ae.js";import"./p-dd26efbb.js";import"./p-d1b12a9c.js";import"./p-a0deb8c6.js";import"./p-6dcae6cd.js";import"./p-3f64a9d9.js";import"./p-2acb70a6.js";import"./p-cea8413b.js";import"./p-8e7f4c22.js";import"./p-69555c48.js";import"./p-c8e0e01f.js";import"./p-59fd2498.js";import"./p-97274a47.js";import"./p-3904125b.js";import"./p-30a7cbb2.js";import"./p-90dc0f6f.js";import"./p-7202c430.js";import"./p-75d6da59.js";import"./p-10274eb9.js";import"./p-e43616ff.js";import"./p-895b662f.js";import"./p-5b420841.js";const y=class{constructor(i){s(this,i),this.arcgisHubDiscussionsOptionsChange=t(this,"arcgisHubDiscussionsOptionsChange",7),this.disabled=!1,this.variant=void 0,this.layout="horizontal",this.value=void 0,d(this,"handleTileChange")}async componentWillLoad(){this.intl=await n.loadIntlForComponent(this.element)}handleTileChange(s){s.stopPropagation();const t=s.target;this.value=t.value,this.arcgisHubDiscussionsOptionsChange.emit(t.value)}get options(){return[{value:!0,icon:"speech-bubbles"},{value:!1,icon:"circle-disallowed"}]}render(){const{intl:s,options:t,variant:o,value:a,disabled:n,layout:d}=this;return i(e,{"data-element":"discussions-options"},i("calcite-label",{scale:"l"},s.t(`${o}.label`),i("calcite-tile-select-group",{layout:d},t.map((t=>i("calcite-tile-select",{checked:t.value===a,description:s.t(`${o}.${t.value}.description`),disabled:n,heading:s.t(`${t.value}.heading`),icon:t.icon,"input-enabled":!0,key:t.icon,name:"discussable",onCalciteTileSelectChange:this.handleTileChange,type:"radio",value:t.value,width:"vertical"===d?"full":"auto"}))))))}static get assetsDirs(){return["locales"]}get element(){return o(this)}};y.style=":host{display:block}";var f;!function(s){s.List="list",s.Loading="isLoading"}(f||(f={}));const v=class{constructor(i){s(this,i),this.arcgisHubDiscussionsPostListUpdated=t(this,"arcgisHubDiscussionsPostListUpdated",7),this.arcgisHubDiscussionsPostListReady=t(this,"arcgisHubDiscussionsPostListReady",7),this.arcgisHubDiscussionsPostListLayoutChanged=t(this,"arcgisHubDiscussionsPostListLayoutChanged",7),this.hubTelemetry=t(this,"hubTelemetry",7),this.impressionLogged=!1,this.discussion=void 0,this.entityId=void 0,this.entityType=void 0,this.entity=void 0,this.displayFieldValid=void 0,this.displayFieldValue=void 0,this.displayFieldKey=void 0,this.context=void 0,this.hasMap=void 0,this.isHub=void 0,this.unsavedFeatures=void 0,this.unsavedRelatedFeatures=void 0,this.unsavedExistingFeatures=[],this.nextStart=-1,this.start=1,this.total=0,this.items=void 0,this.sortBy=p.UPDATED_AT,this.sortOrder=u.DESC,this.titleText=void 0,this.bodyText=void 0,this.geometry=void 0,this.featureGeometry=void 0,this.parentIds=void 0,this.creator=void 0,this.editor=void 0,this.status=[g.APPROVED,g.HIDDEN,g.PENDING,g.REJECTED],this.groupIds=void 0,this.channelIds=void 0,this.createdBefore=void 0,this.createdAfter=void 0,this.updatedBefore=void 0,this.updatedAfter=void 0,this.access=void 0,this.num=10,this.isMobile=void 0,this.locationId=void 0,this.layout="list",this.showLayoutActions=void 0,this.showSearchActions=void 0,this.showCounts=void 0,this.showSortActions=void 0,this.renderPost=void 0,this.showLocations=void 0,this.locationDescriptionText=void 0,this.pending=!1,this.error=void 0,this.loadedPostIds=void 0,this.ready=!1,this.mostRecentPagePostIds=[],this._loading=!0,this.intl=void 0,d(this,"renderListAndActions","renderLoading","handleSortBySelect","handleSortOrderSelected","handleSearchInputChanged","_renderPost")}async componentWillLoad(){this.initialize()}async initialize(){this.loadTranslations(),this.context&&(await this.loadDependencies(),this.items?(this.mostRecentPagePostIds=this.items.map((({id:s})=>s)),this.emitPostListOpenEvent(!0),this.loadedPostIds=[]):this.searchPosts(1))}async loadTranslations(){this.intl=await n.loadIntlForComponent(this.element)}loadDependencies(){if(this.context)return this._loading=!0,this.fetchDependencies().then((s=>{Object.assign(this,s),this._loading=!1}))}fetchDependencies(){return this._fetchDependencies()}async _fetchDependencies(){const{isHub:s,context:t,discussion:i,entityId:e,entityType:o,entity:a,locationId:n,displayFieldKey:d,displayFieldValid:r,displayFieldValue:c}=this,p=await l({isHub:s},t.hubRequestOptions),u=await h({discussion:i,entityId:e,entityType:o,entity:a,locationId:n,displayFieldKey:d,displayFieldValid:r,displayFieldValue:c},t.hubRequestOptions);return Object.assign(Object.assign({},p),u)}handleContextChanged(s,t){var i,e;if((null===(i=null==s?void 0:s.currentUser)||void 0===i?void 0:i.username)!==(null===(e=null==t?void 0:t.currentUser)||void 0===e?void 0:e.username))return this.loadDependencies().then((()=>{this.items?this.emitPostListOpenEvent(!0):this.searchPosts(1)}))}handleReadyChanged(s){s&&this.arcgisHubDiscussionsPostListReady.emit()}handleLoadedPostIdsChanged(s){this.ready||(this.ready=Boolean(s)&&Boolean(this.items)&&this.items.every((({id:t})=>s.includes(t))))}emitPostListOpenEvent(s){this.impressionLogged||(this.impressionLogged=!0,this.hubTelemetry.emit(Object.assign(Object.assign({},r.dictionary.category.interaction.action.open.label.postList),{response:s?r.constants.response.SUCCESS:r.constants.response.FAILURE})))}handlePostReady(s){this.loadedPostIds=[...this.loadedPostIds,s.target.postId]}handleLayoutSelected(s){s.stopPropagation(),this.arcgisHubDiscussionsPostListLayoutChanged.emit(s.detail)}get sortByMenuConfigs(){return[{label:"sortRecent",value:p.UPDATED_AT},{label:"sortCreator",value:p.CREATOR}]}get activeSortConfig(){return this.sortByMenuConfigs.find((({value:s})=>s===this.sortBy))}get isRtl(){var s;return"rtl"===(null===(s=this.intl)||void 0===s?void 0:s.direction)||!1}get views(){const{renderListAndActions:s,renderLoading:t}=this;return{[f.List]:{render:s},[f.Loading]:{render:t}}}get isLoading(){const{intl:s,context:t,_loading:i}=this;return!s||!t||i}get view(){const{views:s,isLoading:t}=this;return s[t?f.Loading:f.List]}handlePostDeleted(s){this.items.findIndex((({id:t})=>s.detail.id===t))>-1&&(this.items=this.items.filter((({id:t})=>s.detail.id!==t)),this.total-=1,this.nextStart>-1&&(this.nextStart-=1),this.arcgisHubDiscussionsPostListUpdated.emit())}handlePostCreated(s){const t=s.detail.discussion.includes(this.discussion);let i=!0;this.parentIds&&(i=this.parentIds.length?this.parentIds.includes(s.detail.parentId):!s.detail.parentId),t&&i&&(this.sortOrder===u.DESC?this.items.find((({id:t})=>s.detail.id===t))||(this.items=[s.detail,...this.items],this.total+=1,this.nextStart>-1&&(this.nextStart+=1),this.arcgisHubDiscussionsPostListUpdated.emit()):(this.total+=1,this.arcgisHubDiscussionsPostListUpdated.emit()))}handlePostEdited(s){this.items.findIndex((({id:t})=>s.detail.id===t))>-1&&(this.items=this.items.map((t=>t.id===s.detail.id?s.detail:t)),this.arcgisHubDiscussionsPostListUpdated.emit())}handleLoadMoreChange(s){s.stopPropagation(),this.searchPosts(this.nextStart)}async getPostRefByPostId(s){return Array.prototype.find.call(this.layoutListRef.childNodes,(t=>t.postId===s))||null}handleSortByChanged(){this.searchPosts(1)}handleSortBySelect(s){const{selectedItems:[{dataset:{value:t}}]}=s.target;this.sortBy=t}get searchParams(){const{sortBy:s,sortOrder:t,access:i,status:e,channelIds:o,groupIds:a,titleText:n,bodyText:d,discussion:r,geometry:c,creator:l,editor:h,featureGeometry:p,parentIds:u,createdBefore:g,createdAfter:m,updatedBefore:b,updatedAfter:y,num:f}=this,v=s=>void 0===s?s:new Date(s),j={title:n&&`%${n}%`,body:d&&`%${d}%`,discussion:r&&!r.endsWith("%")?`${r}%`:r,geometry:c,featureGeometry:p,parents:u,status:e,creator:l,editor:h,sortBy:s,sortOrder:t,access:i,channels:o,groups:a,createdBefore:v(g),createdAfter:v(m),updatedBefore:v(b),updatedAfter:v(y),num:f};return Object.entries(j).reduce(((s,[t,i])=>Boolean(i)?Object.assign(Object.assign({},s),{[t]:i}):s),{})}searchPosts(s){const{context:t,searchParams:i,arcgisHubDiscussionsPostListUpdated:e,items:o,loadedPostIds:a}=this;return Object.assign(this,{pending:!0,error:null}),1===s&&Object.assign(this,{items:[],total:0,nextStart:-1}),b(Object.assign({data:Object.assign({start:s,relations:[m.REPLIES,m.REACTIONS]},i)},t.hubRequestOptions)).then((({items:t,nextStart:i,total:n})=>{let d,r;1===s?(d=t,r=[]):(r=a,d=[...o,...t]),Object.assign(this,{items:d,nextStart:i,total:n,loadedPostIds:r,mostRecentPagePostIds:t.map((({id:s})=>s))}),this.emitPostListOpenEvent(!0),e.emit()})).catch((s=>{this.error=s,this.emitPostListOpenEvent(!1)})).finally((()=>{this.pending=!1}))}renderCount(){if(this.showCounts){const{items:s,total:t,intl:e}=this;return i("div",{class:"post-count"},e.t("searchCount",{start:s.length?1:0,end:s.length?s.length:0,total:t}))}}renderSortByDropdown(){if(this.showSortActions){const{intl:s,sortBy:t,sortByMenuConfigs:e,activeSortConfig:o,pending:a,handleSortBySelect:n,total:d}=this;return i("calcite-dropdown",{disabled:a||!d,onCalciteDropdownSelect:n},i("calcite-button",{appearance:"transparent",iconEnd:"caret-down",slot:"trigger"},s.t(o.label)),i("calcite-dropdown-group",null,e.map((({label:e,value:o})=>i("calcite-dropdown-item",{"data-value":o,key:o,selected:o===t},s.t(e))))))}}handleSortOrderSelected(){this.sortOrder=this.sortOrder===u.DESC?u.ASC:u.DESC}handleSearchInputChanged(s){this.bodyText=s.target.value}handleSortOrderChanged(){this.searchPosts(1)}handleBodyChanged(){this.searchPosts(1)}renderSortDirectionAction(){if(this.showSortActions){const{sortOrder:s,intl:t,handleSortOrderSelected:e,pending:o,total:a}=this;let n,d;return s===u.DESC?(n="sort-descending-arrow",d="orderDesc"):(d="orderAsc",n="sort-ascending-arrow"),i("calcite-action",{class:"sort-direction-action",disabled:o||!a,icon:n,iconFlipRtl:this.isRtl,onClick:e,scale:"s",text:t.t(d)})}}renderSearch(){if(this.showSearchActions){const{intl:s,pending:t,handleSearchInputChanged:e,isRtl:o,total:a,bodyText:n}=this;return i("calcite-input",{disabled:t||!n&&!a,icon:!0,iconFlipRtl:o,onCalciteInputChange:e,placeholder:s.t("searchIdeas"),type:"search"})}}renderList(){const{items:s,layout:t,parentIds:e,pending:o,total:a}=this;return i("arcgis-layout-list",{class:{"replies-only":Boolean(null==e?void 0:e.length)},disabled:o||!a,layout:t,ref:s=>{this.layoutListRef=s},showMapControl:!0},this.renderCountAndActions(),s.map(this._renderPost))}_renderPost(s,t,e){const{context:o,hasMap:a,isHub:n,unsavedFeatures:d,unsavedRelatedFeatures:r,unsavedExistingFeatures:c,displayFieldKey:l,displayFieldValid:h,displayFieldValue:p,entity:u,entityId:g,entityType:m,isMobile:b,locationDescriptionText:y,locationId:f,mostRecentPagePostIds:v,loadedPostIds:j,parentIds:C,showLocations:S}=this,I=v.includes(s.id)?v.some((s=>!j.includes(s))):!j.includes(s.id);return this.renderPost?this.renderPost(s,t,e,I):i("arcgis-hub-discussions-post",{context:o,displayFieldKey:l,displayFieldValid:h,displayFieldValue:p,entity:u,entityId:g,entityType:m,hasMap:a,index:t,isHub:n,isMobile:b,key:s.id,lastIndex:e.length-1,lead:Boolean(null==C?void 0:C.length),loading:I,locationDescriptionText:y,locationId:f,parentId:s.parentId,post:s,postId:s.id,preview:!s.parentId,role:"listitem",showLocations:S,unsavedExistingFeatures:c,unsavedFeatures:d,unsavedRelatedFeatures:r})}renderCountAndActions(){const{showLayoutActions:s,showCounts:t,showSortActions:e}=this;if(s||t||e)return i("div",{class:"post-results-info-and-controls",slot:"actions"},this.renderCount(),this.renderSortByDropdown(),this.renderSortDirectionAction())}renderListAndActions(){const{nextStart:s,pending:t}=this;return i(a,null,i("slot",{name:"list-before"}),this.renderSearch(),this.renderList(),this.renderEmpty(),this.renderError(),i("arcgis-load-more-button",{appearance:"outline-fill",loading:t,nextStart:s}))}renderLoading(){return null}renderEmpty(){return i("slot",{name:"empty"})}renderError(){return i("slot",{name:"error"})}render(){const{view:s,error:t,items:o}=this;return i(e,{class:{"has-error":Boolean(t),rtl:!0},"data-count":(null==o?void 0:o.length)||0,"data-element":"discussions-post-list"},s.render())}static get assetsDirs(){return["locales"]}get element(){return o(this)}static get watchers(){return{context:["handleContextChanged"],ready:["handleReadyChanged"],loadedPostIds:["handleLoadedPostIdsChanged"],sortBy:["handleSortByChanged"],sortOrder:["handleSortOrderChanged"],bodyText:["handleBodyChanged"]}}};(function(s,t,i,e){var o,a=arguments.length,n=a<3?t:null===e?e=Object.getOwnPropertyDescriptor(t,i):e;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(s,t,i,e);else for(var d=s.length-1;d>=0;d--)(o=s[d])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);a>3&&n&&Object.defineProperty(t,i,n)})([c({delay:300})],v.prototype,"fetchDependencies",null),v.style='.sc-arcgis-hub-discussions-post-list-h{display:block;background-color:var(--calcite-ui-foreground-1)}arcgis-load-more-button.sc-arcgis-hub-discussions-post-list{margin-top:0.75rem;margin-right:1rem;margin-bottom:1.5rem;margin-left:1rem}calcite-input[type="search"].sc-arcgis-hub-discussions-post-list{margin-bottom:1rem}calcite-dropdown.sc-arcgis-hub-discussions-post-list{position:relative}.post-results-info-and-controls.sc-arcgis-hub-discussions-post-list{display:flex;align-items:center;gap:0.25rem}.post-count.sc-arcgis-hub-discussions-post-list{flex-grow:1}arcgis-hub-discussions-thread.sc-arcgis-hub-discussions-post-list:first-of-type{padding-top:1rem}arcgis-hub-discussions-thread.sc-arcgis-hub-discussions-post-list:last-of-type{padding-bottom:1rem}arcgis-hub-discussions-post.loading.sc-arcgis-hub-discussions-post-list,arcgis-hub-discussions-post.loading.sc-arcgis-hub-discussions-post-list:not([parent-id]){margin:0px;padding-top:0.5rem;padding-bottom:0.5rem;padding-left:1rem;padding-right:1rem}.location-list.sc-arcgis-hub-discussions-post-list-h arcgis-hub-discussions-post.loading.sc-arcgis-hub-discussions-post-list{padding-left:1rem;padding-right:1rem}.replies-only.sc-arcgis-hub-discussions-post-list arcgis-hub-discussions-post.loading.sc-arcgis-hub-discussions-post-list{padding-left:0px;padding-right:0px}arcgis-hub-discussions-post.sc-arcgis-hub-discussions-post-list:not([parent-id]){padding-top:0.75rem;padding-bottom:0.75rem}.sc-arcgis-hub-discussions-post-list-h:not(.has-error).sc-arcgis-hub-discussions-post-list-s>[slot="error"]{display:none}[total="0"].sc-arcgis-hub-discussions-post-list-h calcite-list.sc-arcgis-hub-discussions-post-list{display:none}.sc-arcgis-hub-discussions-post-list-h:not([total="0"]).sc-arcgis-hub-discussions-post-list-s>[slot="empty"]{display:none}';export{y as arcgis_hub_discussions_options,v as arcgis_hub_discussions_post_list}