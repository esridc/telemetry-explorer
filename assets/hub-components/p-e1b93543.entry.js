import{r as t,c as e,h as i,H as a,a as n}from"./p-d4ba4c14.js";import{i as s}from"./p-be5c5009.js";import{b as o}from"./p-fd260f2d.js";const r=class{constructor(i){t(this,i),this.hubTelemetry=e(this,"hubTelemetry",7),this.feeds=void 0,o(this,"generateViewButtonHandler")}onCopyButtonClicked(t){const e=t.detail,i=this.feeds.find((t=>t.url===e));this.hubTelemetry.emit({category:"Interaction",action:"Copy",label:"Content",details:i.telemetryName})}async componentWillLoad(){this.intl=await s.loadIntlForComponent(this.element)}generateViewButtonHandler(t){return()=>{this.hubTelemetry.emit({category:"Navigation",action:"View",label:"Content",details:t.telemetryName})}}render(){return i(a,null,i("div",{class:"list-description"},i("slot",null)),this.feeds.map((t=>i("div",{class:"feed-container"},i("arcgis-copyable-input",{label:t.label,readonly:!0,value:t.copyUrl||t.url}),i("calcite-button",{appearance:"outline",href:t.url,onClick:this.generateViewButtonHandler(t),target:"_blank"},this.intl.t("viewButton"))))))}static get assetsDirs(){return["locales"]}get element(){return n(this)}};r.style=":host{display:block}.list-description{margin-bottom:1.5rem}.feed-container{margin-bottom:0.75rem;display:grid;align-items:flex-end;grid-template-columns:1fr min-content}.feed-container calcite-button{margin-left:0.75rem;margin-bottom:0.75rem;height:2rem}";export{r as arcgis_hub_feeds_list}