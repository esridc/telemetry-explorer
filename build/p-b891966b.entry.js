import{r as t,c as e,h as n,F as i,H as a,a as s}from"./p-ce275af6.js";import{b as o}from"./p-e4f14b9d.js";import{c as r,s as c,a as l}from"./p-4da87082.js";import"./p-2f33ceac.js";import"./p-3a41f8f2.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.10.1
 */const d={container:"container",containerContent:"container-content",hasProgress:"progress-bar",hide:"hide",primary:"primary",secondary:"secondary",tertiary:"tertiary"};const h={logo:"logo",user:"user",progress:"progress",navigationAction:"navigation-action",contentStart:"content-start",contentEnd:"content-end",contentCenter:"content-center",navSecondary:"navigation-secondary",navTertiary:"navigation-tertiary"};const f={hamburger:"hamburger"};const m=":host([hidden]){display:none}[hidden]{display:none}.container{margin-inline:auto;display:flex;inline-size:100%;flex-direction:column;margin-block:0;margin-inline:auto;background-color:var(--calcite-navigation-background, var(--calcite-color-foreground-1))}.container.primary,.container.secondary,.container.tertiary{border-block-end:1px solid;border-block-end-color:var(--calcite-navigation-border-color, var(--calcite-color-border-3))}.user,.logo{display:flex}.hide{display:none}.primary{block-size:4rem}.secondary{block-size:3rem}.tertiary{block-size:3rem}.container-content{margin-inline:auto;display:flex;block-size:100%;inline-size:100%;margin-block:0;inline-size:var(--calcite-navigation-width, 100%);max-inline-size:100%}.container-content.progress-bar{margin-block-start:0.125rem}slot[name]{display:flex;flex-direction:row}slot[name=navigation-secondary]::slotted(calcite-navigation),slot[name=navigation-tertiary]::slotted(calcite-navigation){inline-size:100%}slot[name=content-start]::slotted(*),slot[name=content-center]::slotted(*),slot[name=content-end]::slotted(*){display:flex;flex-direction:row;align-items:center}slot[name=progress],slot[name=progress] calcite-progress{inset-block-start:0;inset-inline:0}slot[name=content-end]{margin-inline-start:auto}slot[name=content-start]{margin-inline-end:auto}slot[name=content-end],slot[name=logo]~slot[name=user],slot[name=user]:only-child{margin-inline-start:auto}slot[name=content-center]{margin-inline-start:auto;margin-inline-end:auto}slot[name=content-start]~slot[name=content-center]{margin-inline-start:0px}slot[name=content-start]~slot[name=content-end],slot[name=content-center]~slot[name=content-end],slot[name=content-center]~slot[name=user],slot[name=content-end]~slot[name=user]{margin:0px}";const b=class{constructor(n){t(this,n);this.calciteNavigationActionSelect=e(this,"calciteNavigationActionSelect",6);this.actionClickHandler=()=>{this.calciteNavigationActionSelect.emit()};this.handleUserSlotChange=t=>{if(this.isPrimaryLevel()){this.userSlotHasElements=o(t)}};this.handleLogoSlotChange=t=>{if(this.isPrimaryLevel()){this.logoSlotHasElements=o(t)}};this.handleContentStartSlotChange=t=>{if(this.isPrimaryLevel()){this.primaryContentStartSlotHasElements=o(t)}};this.handleContentEndSlotChange=t=>{if(this.isPrimaryLevel()){this.primaryContentEndSlotHasElements=o(t)}};this.handleContentCenterSlotChange=t=>{if(this.isPrimaryLevel()){this.primaryContentCenterSlotHasElements=o(t)}};this.handleSecondarySlotChange=t=>{this.secondarySlotHasElements=o(t)};this.handleTertiarySlotChange=t=>{this.tertiarySlotHasElements=o(t)};this.handleMenuActionSlotChange=t=>{if(this.isPrimaryLevel()){this.navigationActionSlotHasElements=o(t);if(this.navigationActionSlotHasElements){this.navigationAction=false}}};this.handleProgressSlotChange=t=>{if(this.isPrimaryLevel()){this.progressSlotHasElement=o(t)}};this.label=undefined;this.navigationAction=false;this.logoSlotHasElements=undefined;this.navigationActionSlotHasElements=undefined;this.primaryContentCenterSlotHasElements=undefined;this.primaryContentEndSlotHasElements=undefined;this.primaryContentStartSlotHasElements=undefined;this.progressSlotHasElement=undefined;this.secondarySlotHasElements=undefined;this.tertiarySlotHasElements=undefined;this.userSlotHasElements=undefined}async setFocus(){var t;await r(this);return(t=this.navigationActionEl)===null||t===void 0?void 0:t.setFocus()}componentWillLoad(){c(this)}componentDidLoad(){l(this)}isPrimaryLevel(){return this.el.slot!==h.navSecondary&&this.el.slot!==h.navTertiary}renderMenuAction(){return n("slot",{name:h.navigationAction,onSlotchange:this.handleMenuActionSlotChange},this.navigationAction&&n("calcite-action",{icon:f.hamburger,onClick:this.actionClickHandler,ref:t=>this.navigationActionEl=t,text:this.label}))}render(){const t=this.logoSlotHasElements||this.userSlotHasElements||this.navigationActionSlotHasElements||this.primaryContentCenterSlotHasElements||this.primaryContentEndSlotHasElements||this.primaryContentStartSlotHasElements||this.navigationAction;const e=this.el.slot;return n(a,{key:"90716066eddd9526387b8d776a33a3b49f442fcf"},n("div",{key:"4570df059f3bd7f3db26da667133e1d3ff100d02",class:{[d.container]:true,[d.secondary]:e===h.navSecondary,[d.tertiary]:e===h.navTertiary,[d.primary]:t}},n("div",{key:"684b0093d7c00584a0a73346b1bb62e58afbcf7a",class:{[d.hide]:!this.progressSlotHasElement,[h.progress]:true}},n("slot",{key:"df51feca5afcef936840a2f08d5af9ee4fe795b7",name:h.progress,onSlotchange:this.handleProgressSlotChange})),n("div",{key:"a86993a2eaf582d3d275c79ea7cf4ea4fc338a61",class:{[d.containerContent]:true,[d.hasProgress]:this.progressSlotHasElement}},this.renderMenuAction(),n("div",{key:"e3312b2bbb984efb48d0ba532e1324489562250f",class:{[d.hide]:!this.logoSlotHasElements,[h.logo]:true}},n("slot",{key:"0b50f1f649d8468058ed0d6df50d56f06b29bd85",name:h.logo,onSlotchange:this.handleLogoSlotChange})),n("slot",{key:"05c9daeabb19445d08ca08ba801f10084a9bdab6",name:h.contentStart,onSlotchange:this.handleContentStartSlotChange}),n("slot",{key:"e60b6602e5b4acebd461d76aebeb057b794f496e",name:h.contentCenter,onSlotchange:this.handleContentCenterSlotChange}),n("slot",{key:"dce9a7f2fc213894f42938d56800db89753d4458",name:h.contentEnd,onSlotchange:this.handleContentEndSlotChange}),n("div",{key:"d2600064d0c1ea9f4902b20b6b6bafd7777e4266",class:{[d.hide]:!this.userSlotHasElements,[h.user]:true}},n("slot",{key:"e2248fba8df0aa95513c03a8397c54bc019cf9fc",name:h.user,onSlotchange:this.handleUserSlotChange})))),n(i,{key:"7fb0e6fc939f64ab9cec1aad15e8d4d4d7b97ea7"},n("slot",{key:"751dd61f066242c1b417633a1336676f090ca8f2",name:h.navSecondary,onSlotchange:this.handleSecondarySlotChange}),n("slot",{key:"a28c91c88072438fdc2c018996c0819953a9e10e",name:h.navTertiary,onSlotchange:this.handleTertiarySlotChange})))}get el(){return s(this)}};b.style=m;export{b as calcite_navigation};
//# sourceMappingURL=p-b891966b.entry.js.map