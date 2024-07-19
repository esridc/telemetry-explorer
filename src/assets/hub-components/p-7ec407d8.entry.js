import{r as t,c as i,d as s,h as e,H as a,a as o}from"./p-d4ba4c14.js";import{i as n}from"./p-be5c5009.js";import{b as h}from"./p-fd260f2d.js";const c={unauthenticated:{imageUrl:"./assets/sign-in-generic.svg"},"not-found":{icon:"file-magnifying-glass",actionLink:"/"}},r=(t,i)=>(c[t]||{})[i],l=class{constructor(s){t(this,s),this.arcgisHubHelpStateActionClick=i(this,"arcgisHubHelpStateActionClick",7),this.hubTelemetry=i(this,"hubTelemetry",7),this.heading=void 0,this.icon=void 0,this.imageUrl=void 0,this.message=void 0,this.actionText=void 0,this.actionLink=void 0,this.telemetry=void 0,this.state=void 0,h(this,"handleClick")}get _imageUrl(){const{imageUrl:t}=this;return t||this._fallbackImageUrl}get _fallbackImageUrl(){const t=r(this.state,"imageUrl");return t?s(t):void 0}_getProp(t){const i=this[t];return void 0!==i?i:r(this.state,t)}_getMessage(t){const i=this[t];return"string"==typeof i?i:this.state?this.intl.t(`${this.state}.${t}`):void 0}handleClick(t){t.stopPropagation();const i=this._getProp("telemetry");this.arcgisHubHelpStateActionClick.emit(),i&&this.hubTelemetry.emit(i)}async componentWillLoad(){this.intl=await n.loadIntlForComponent(this.el)}render(){const t=this._getMessage("heading"),i=this._getProp("icon"),s=this._getMessage("actionText");return e(a,{"aria-live":"polite","data-element":"help-state",role:"main"},this._imageUrl?e("img",{alt:t,src:this._imageUrl}):!!i&&e("calcite-icon",{icon:i}),e("h3",null,t),e("slot",{name:"message"},e("p",null,this._getMessage("message"))),e("slot",{name:"actions"},!!s&&e("div",{class:"actions"},e("calcite-button",{href:this._getProp("actionLink"),onClick:this.handleClick},s))))}static get assetsDirs(){return["locales","assets"]}get el(){return o(this)}};l.style=":host{text-align:center;display:flex;flex-direction:column;align-items:center}calcite-icon,img{height:12rem;width:auto}h3{color:var(--bodyText)}p{color:var(--bodyText)}";export{l as arcgis_hub_help_state}