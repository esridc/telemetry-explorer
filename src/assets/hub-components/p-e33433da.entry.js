import{h as t,r as e,c as r,H as s,a as i}from"./p-d4ba4c14.js";import{i as o}from"./p-be5c5009.js";import{g as l}from"./p-81a9bee2.js";import{b as a}from"./p-783242bc.js";import{d as p}from"./p-8cf4bd83.js";import{g as n,a as c}from"./p-0927367d.js";import"./p-859c5360.js";import"./p-dd26efbb.js";import"./p-d1b12a9c.js";import"./p-796574a4.js";import"./p-dcdf7b57.js";import"./p-a0deb8c6.js";import"./p-6dcae6cd.js";import"./p-637ea136.js";import"./p-3f64a9d9.js";import"./p-377e1b5e.js";import"./p-2acb70a6.js";import"./p-b728aff4.js";import"./p-903ef8af.js";import"./p-dfe5a97d.js";import"./p-75d6da59.js";const d=({context:e,label:r,scale:s,user:i})=>{const{currentUser:o,session:l}=e;return t("calcite-avatar",{fullName:null==(i=i||o)?void 0:i.fullName,label:r,scale:s,thumbnail:(null==i?void 0:i.thumbnail)&&a(null==l?void 0:l.portal,i,null==l?void 0:l.token),userId:null==i?void 0:i.id,username:null==i?void 0:i.username})},m=class{constructor(t){e(this,t),this.arcgisHubUserProfileSignout=r(this,"arcgisHubUserProfileSignout",7),this.hubTelemetry=r(this,"hubTelemetry",7),this.handleDropdownClick=()=>{this.hubTelemetry.emit({telemetry:p.dictionary.category.interaction.action.open.label.menu.details.user})},this.handleViewProfileClick=()=>{this.hubTelemetry.emit({telemetry:p.dictionary.category.navigation.action.view.label.users.details.profile})},this.handleViewOverviewClick=()=>{this.hubTelemetry.emit({telemetry:p.dictionary.category.navigation.action.view.label.orgs.details.overview})},this.handleSignOut=()=>{this.hubTelemetry.emit({telemetry:p.dictionary.category.interaction.action.authenticate.label.signout}),this.arcgisHubUserProfileSignout.emit()}}get context(){return l()}async componentWillLoad(){this.intl=await o.loadIntlForComponent(this.element)}get profileUrl(){return n(this.context)}get overviewUrl(){return c(this.context)}renderUserProfile(){return t("calcite-dropdown",null,t("button",{onClick:this.handleDropdownClick,slot:"trigger"},t(d,{context:this.context})),t("calcite-dropdown-group",{selectionMode:"none"},t("calcite-dropdown-item",{href:this.profileUrl,onClick:this.handleViewProfileClick},this.intl.t("viewProfile")),t("calcite-dropdown-item",{href:this.overviewUrl,onClick:this.handleViewOverviewClick},this.intl.t("viewOverview")),t("slot",null),t("calcite-dropdown-item",{onClick:this.handleSignOut},this.intl.t("signOut"))))}render(){var e;return t(s,{"data-element":"user-profile"},(null===(e=this.context)||void 0===e?void 0:e.isAuthenticated)&&this.renderUserProfile())}static get assetsDirs(){return["locales"]}get element(){return i(this)}};m.style=':host{display:flex;cursor:pointer}button[slot="trigger"]{background-color:transparent;border:transparent;display:flex;cursor:pointer}';export{m as arcgis_hub_user_profile}