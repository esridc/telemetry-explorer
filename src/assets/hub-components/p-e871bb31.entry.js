import{r as i,h as r,H as t}from"./p-d4ba4c14.js";const e=class{constructor(r){i(this,r),this.active=!1,this.showThumbnail=!1,this.showHeading=!0,this.headingRows=1,this.rows=3,this.showFooter=!1}renderRows(i,t){return[...Array(i).keys()].map((i=>r("div",{class:t,key:i})))}render(){if(this.active)return r(t,{role:"progressbar"},this.showThumbnail&&r("div",{class:"thumbnail"}),this.showHeading&&this.renderRows(this.headingRows,"heading"),this.renderRows(this.rows,"row"),r("slot",null),this.showFooter&&r("div",{class:"footer"},r("div",null),r("div",null)))}};e.style=":host{display:none}:host([active]){display:block}@keyframes shimmer{0%{background-size:200% 100%;background-position:100% 0}100%{background-size:200% 100%;background-position:-100% 0}}.thumbnail,.heading,.row,.footer>div{animation:shimmer 2s cubic-bezier(0.4, 0, 0.2, 0.8) infinite;background-image:linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.6) 50%, rgba(255, 255, 255, 0) 60%, rgba(255, 255, 255, 0) 100%);background-color:var(--calcite-ui-foreground-3);border-radius:4px}.thumbnail{margin-bottom:1rem;aspect-ratio:200 / 133}.heading{margin-bottom:1rem;height:1.5rem}.row{margin-bottom:0.5rem;height:1rem}.footer{margin-top:2rem;display:flex;justify-content:space-between}.footer>*{height:1.5rem;width:33.333333%}";export{e as arcgis_skeleton_loader}