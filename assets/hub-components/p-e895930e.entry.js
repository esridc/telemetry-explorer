import{r as t,h as s,H as i,a}from"./p-d4ba4c14.js";import{i as e}from"./p-be5c5009.js";import{g as r}from"./p-796574a4.js";const o=class{constructor(s){t(this,s),this.data=void 0,this.options=void 0,this.isLoading=void 0,this.value=void 0,this.isTransforming=!0}handleChange(){this.isLoading||(this.isTransforming=!0,this.transform(this.data,this.options).then((({value:t})=>{this.value=t})).finally((()=>{this.isTransforming=!1})))}async componentWillLoad(){this.intl=await e.getIntlForComponent(this.element),this.handleChange()}_transform(t,s){var i,a,e;const{requestParams:o}=s,n=o.metrics[0],h=r(t,n);return((null===(e=null===(a=null===(i=null==s?void 0:s.dataTransforms)||void 0===i?void 0:i.find((t=>t.name===n)))||void 0===a?void 0:a.value)||void 0===e?void 0:e.display)||(t=>t))(h)}async transform(t,s){let i;if(t){const a=this._transform(t[0],s);i=this.intl.formatNumber(a)}return{value:i}}render(){return s(i,null,this.isLoading||this.isTransforming?s("arcgis-skeleton-loader",{active:!0,rows:1,showHeading:!1}):this.value)}get element(){return a(this)}static get watchers(){return{data:["handleChange"],options:["handleChange"]}}};export{o as arcgis_telemetry_value}