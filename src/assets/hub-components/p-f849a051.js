import{c as e}from"./p-f845584b.js";import{U as o}from"./p-13f8e63a.js";import{g as t,a as s}from"./p-cd28ac9e.js";import{g as p}from"./p-83ea717a.js";import"./p-7b082f5d.js";import"./p-8dbea197.js";import"./p-b295a5ae.js";import"./p-796574a4.js";import"./p-62163eff.js";import"./p-742d0454.js";import"./p-89f8c546.js";import"./p-5955d0c4.js";import"./p-d27eec8d.js";import"./p-b3959606.js";import"./p-09f00a2a.js";import"./p-69965d84.js";import"./p-24698668.js";import"./p-52b2d57a.js";import"./p-5d9da1ee.js";import"./p-a2594b73.js";import"./p-d1b12a9c.js";import"./p-dcdf7b57.js";import"./p-75d6da59.js";import"./p-a0deb8c6.js";const l=async(l,r,a)=>({type:"Layout",elements:[{type:"Section",options:{section:"stepper",scale:"l"},elements:[{type:"Step",labelKey:`${l}.sections.details.label`,elements:[{type:"Section",labelKey:`${l}.sections.basicInfo.label`,elements:[{labelKey:`${l}.fields.name.label`,scope:"/properties/name",type:"Control",options:{messages:[{type:"ERROR",keyword:"required",icon:!0,labelKey:`${l}.fields.name.requiredError`},{type:"ERROR",keyword:"maxLength",icon:!0,labelKey:`${l}.fields.name.maxLengthError`}]}},{labelKey:`${l}.fields.summary.label`,scope:"/properties/summary",type:"Control",options:{control:"hub-field-input-input",type:"textarea",rows:4,helperText:{labelKey:`${l}.fields.summary.helperText`},messages:[{type:"ERROR",keyword:"maxLength",icon:!0,labelKey:"shared.fields.purpose.maxLengthError"}]}}]}]},{type:"Step",labelKey:`${l}.sections.location.label`,rule:{effect:o.DISABLE,condition:{scope:"/properties/name",schema:{const:""}}},elements:[{type:"Section",labelKey:`${l}.sections.location.label`,options:{helperText:{labelKey:`${l}.sections.location.helperText`}},elements:[{scope:"/properties/location",type:"Control",options:{control:"hub-field-input-location-picker",extent:await t(r,a.hubRequestOptions),options:await s(r,a.portal.name,a.hubRequestOptions)}}]}]},{type:"Step",labelKey:`${l}.sections.sharing.label`,rule:{effect:o.DISABLE,condition:{scope:"/properties/name",schema:{const:""}}},elements:[{scope:"/properties/access",type:"Control",options:{control:"arcgis-hub-access-level-controls",orgName:a.portal.name,itemType:`{{${l}.fields.access.itemType:translate}}`}},{labelKey:`${l}.fields.groups.label`,scope:"/properties/_groups",type:"Control",options:{control:"hub-field-input-combobox",items:p(a.currentUser.groups),disabled:!e("platform:portal:user:shareToGroup",a),allowCustomValues:!1,selectionMode:"multiple"}}]}]}]});export{l as buildUiSchema}