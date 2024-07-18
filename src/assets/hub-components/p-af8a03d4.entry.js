import{r as t,h as i,H as s,a as e,c as o}from"./p-d4ba4c14.js";import{b as a}from"./p-fd260f2d.js";import{i as r}from"./p-be5c5009.js";import{C as l}from"./p-112decdb.js";import{h,g as c}from"./p-b728aff4.js";import{d}from"./p-8cf4bd83.js";import"./p-c5919bc3.js";import"./p-2acb70a6.js";import"./p-796574a4.js";import"./p-b295a5ae.js";import"./p-8e7f4c22.js";import"./p-d763eacf.js";import"./p-377e1b5e.js";import"./p-637ea136.js";import"./p-dcdf7b57.js";import"./p-008d72ef.js";import"./p-14a66e4a.js";import"./p-6d4e51c6.js";import"./p-24ecdf64.js";import"./p-903ef8af.js";import"./p-1458dcfd.js";import"./p-783242bc.js";import"./p-dd26efbb.js";import"./p-d1b12a9c.js";import"./p-a0deb8c6.js";import"./p-6dcae6cd.js";import"./p-3f64a9d9.js";import"./p-52612356.js";import"./p-af59e67b.js";import"./p-85d6867e.js";import"./p-6f931af6.js";import"./p-56b73d71.js";import"./p-3904125b.js";import"./p-cea8413b.js";import"./p-ad325ed1.js";import"./p-69555c48.js";import"./p-8dbea197.js";import"./p-7202c430.js";import"./p-75d6da59.js";import"./p-90dc0f6f.js";import"./p-59fd2498.js";import"./p-16a95e5b.js";import"./p-e43616ff.js";import"./p-ca048216.js";import"./p-4a14259a.js";import"./p-235bb6ee.js";import"./p-c836a9b6.js";import"./p-dafb2329.js";import"./p-992b9d10.js";import"./p-895b662f.js";import"./p-31aebb8c.js";import"./p-b1a98ae3.js";import"./p-9b205605.js";import"./p-aa262d60.js";import"./p-ea6de7f6.js";import"./p-3363f483.js";import"./p-87582fe0.js";import"./p-dfe5a97d.js";const p=class{constructor(i){t(this,i),this.accordionOpen=!0,this._catalogs=[],this.catalogs=void 0,this.context=void 0,this.layout="list",this.facets=void 0,this.gallerySelection=void 0,this.selectionMode=void 0,this.showThumbnail=!1,this.showSelection=!1,this.showBadges=!1,this.showSearch=!1,this.newTab=!1,this.showFacetForSingleCatalog=void 0,this.sortOptions=void 0,this.sortField=null,this.activeCollection=void 0,this.activeCatalog=void 0,a(this,"handleCalciteTabChange","handleCalciteRadioButtonGroupChange")}async componentWillLoad(){if(this.intl=await r.loadIntlForComponent(this.element),this.catalogs){const t=this.catalogs.reduce(((t,i)=>{var s;return"string"==typeof i?t.push(l.init(i,this.context)):(null===(s=i.collections)||void 0===s?void 0:s.length)?t.push(l.fromJson(i,this.context)):console.error(`Catalog ${i.title} will not be displayed because it does not have any collections.`),t}),[]);this._catalogs=await Promise.all(t),this.activeCatalog=this._catalogs[0],this.activeCollection=this.activeCatalog.getCollection(this.activeCatalog.collections[0].key)}else console.error("<arcgis-hub-catalog> component requires one or more catalogs be provided")}handleCalciteRadioButtonGroupChange(t){const i=h(this._catalogs,"title",t.target.selectedItem.value);i&&(this.activeCatalog=i,this.activeCollection=this.activeCatalog.getCollection(this.activeCatalog.collections[0].key))}handleCalciteTabChange(t){this.activeCollection=this.activeCatalog.getCollection(t.target.tab)}renderCatalogFacet(){return i("calcite-accordion-item",{expanded:this.accordionOpen,heading:this.intl.t("source")},i("calcite-radio-button-group",{layout:"vertical",name:"catalog-group",onCalciteRadioButtonGroupChange:this.handleCalciteRadioButtonGroupChange},this._catalogs.map(((t,s)=>i("calcite-label",{key:t.title,layout:"inline"},i("calcite-radio-button",{checked:0===s,id:t.title,name:t.title,value:t.title}),i("span",{class:"catalog"},t.title))))))}renderCollections(t){return i("calcite-tab-nav",{slot:"title-group"},t.map(((t,s)=>i("calcite-tab-title",{key:t.key,onCalciteTabsActivate:this.handleCalciteTabChange,selected:0===s,tab:t.key},t.label))))}render(){var t;const e=(null===(t=this.activeCatalog)||void 0===t?void 0:t.collections.length)>1,o=this.showFacetForSingleCatalog||this._catalogs.length>1,a=this.activeCollection.toJson(),r=a.include&&a.include.join("|");return i(s,{"data-element":"catalog"},i("arcgis-hub-gallery",{additionalFacet:o&&this.renderCatalogFacet(),context:this.context,facets:this.facets,gallerySelection:this.gallerySelection,include:r,layout:this.layout,newTab:this.newTab,query:a.scope,selectionMode:this.selectionMode,showBackToTopBtn:!0,showBadges:this.showBadges,showChips:!0,showFacets:!0,showMoreResultsBtn:!0,showResultsCount:!0,showSearch:this.showSearch,showSelection:this.showSelection,showSort:!0,showThumbnail:this.showThumbnail,sortField:this.sortField,sortOptions:this.sortOptions},i("calcite-tabs",{layout:"center",scale:"l",slot:"collection-select"},e&&this.renderCollections(this.activeCatalog.collections))))}static get assetsDirs(){return["locales"]}get element(){return e(this)}};p.style=":host{display:block}calcite-radio-group{margin-bottom:1rem}";const n=class{constructor(i){t(this,i),this.arcgisHubGalleryPickerSelectionUpdate=o(this,"arcgisHubGalleryPickerSelectionUpdate",7),this.arcgisHubGalleryPickerClose=o(this,"arcgisHubGalleryPickerClose",7),this.hubTelemetry=o(this,"hubTelemetry",7),this._gallerySelection={},this.modalTitle=void 0,this.open=!1,this.limit=100,this.catalogs=void 0,this.facets=void 0,this.gallerySelection=void 0,this.showSelection=!0,this.showBadges=void 0,this.showSearch=void 0,this.showThumbnail=void 0,this.context=void 0,this.showFacetForSingleCatalog=void 0,this.sortOptions=void 0,this.sortField=null,this.count=0,a(this,"handleGalleryPickerOpen","handleGalleryPickerClose","handleGalleryPickerAdd")}async componentWillLoad(){this.intl=await r.loadIntlForComponent(this.element),this.gallerySelection&&(this._gallerySelection=this.gallerySelection,this.count=c(Object.values(this._gallerySelection)).length)}handleHubGallerySelect(t){t.preventDefault(),this._gallerySelection=Object.assign(this._gallerySelection,t.detail),this.count=c(Object.values(this._gallerySelection)).length}get targetEntity(){var t,i,s,e;return(null===(e=null===(s=null===(i=null===(t=this.catalogs)||void 0===t?void 0:t[0])||void 0===i?void 0:i.collections)||void 0===s?void 0:s[0])||void 0===e?void 0:e.targetEntity)||"item"}handleGalleryPickerClose(t){t.preventDefault(),this.open=!1,this.arcgisHubGalleryPickerClose.emit(),this.hubTelemetry.emit(d.dictionary.category.interaction.action.close.label.modal.details[{item:"addContent",group:"addGroups",user:"addUsers"}[this.targetEntity]||"addContent"])}handleGalleryPickerOpen(t){t.preventDefault(),this.open=!0,this.hubTelemetry.emit(d.dictionary.category.interaction.action.open.label.modal.details[{item:"addContent",group:"addGroups",user:"addUsers"}[this.targetEntity]||"addContent"])}handleGalleryPickerAdd(t){t.preventDefault(),this.open=!1,this.arcgisHubGalleryPickerSelectionUpdate.emit(this._gallerySelection),this.arcgisHubGalleryPickerClose.emit(),this.hubTelemetry.emit(Object.assign(Object.assign({},d.dictionary.category.interaction.action.add.label[{item:"content",group:"groups",user:"users"}[this.targetEntity]||"content"]),{count:this.count}))}render(){return this.open?i(s,{"data-element":"gallery-picker"},i("calcite-modal",{"data-element":"modal",onCalciteModalClose:this.handleGalleryPickerClose,onCalciteModalOpen:this.handleGalleryPickerOpen,open:this.open},i("div",{slot:"header"},this.modalTitle),i("div",{slot:"content"},i("arcgis-hub-catalog",{catalogs:this.catalogs,context:this.context,facets:this.facets,gallerySelection:this._gallerySelection,newTab:!0,selectionMode:"multiple",showBadges:this.showBadges,showFacetForSingleCatalog:this.showFacetForSingleCatalog,showSearch:this.showSearch,showSelection:this.showSelection,showThumbnail:this.showThumbnail,sortField:this.sortField,sortOptions:this.sortOptions})),i("div",{class:this.count>this.limit?"warning":"",slot:"back"},i("calcite-label",null,this.intl.t("selected",{count:this.count,limit:this.limit}))),i("calcite-button",{appearance:"outline",onClick:this.handleGalleryPickerClose,slot:"secondary",width:"full"},this.intl.t("cancel")),i("calcite-button",{disabled:this.count>this.limit,onClick:this.handleGalleryPickerAdd,slot:"primary",width:"full"},this.intl.t("add")))):void 0}static get assetsDirs(){return["locales"]}get element(){return e(this)}};n.style=':host{display:block}[slot="back"]{display:flex;align-items:baseline;border-radius:0.25rem;padding:0.5rem;background-color:var(--calcite-ui-foreground-current);--calcite-label-margin-bottom:0;--calcite-ui-text-1:var(--calcite-ui-text-1)}.warning{background-color:var(--calcite-ui-danger-hover)}calcite-modal{--calcite-modal-height:80vh}';export{p as arcgis_hub_catalog,n as arcgis_hub_gallery_picker}