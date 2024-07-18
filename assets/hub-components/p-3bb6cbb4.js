import{g as e,a as t}from"./p-702c9e47.js";import{g as o,a as p}from"./p-cd28ac9e.js";import{g as l}from"./p-b5a5a568.js";import{g as s}from"./p-4b186c6d.js";import"./p-dcdf7b57.js";import"./p-235bb6ee.js";import"./p-377e1b5e.js";import"./p-637ea136.js";import"./p-ad325ed1.js";import"./p-d1b12a9c.js";import"./p-796574a4.js";import"./p-75d6da59.js";import"./p-a0deb8c6.js";import"./p-31aebb8c.js";import"./p-13f8e63a.js";import"./p-62163eff.js";import"./p-742d0454.js";import"./p-89f8c546.js";import"./p-5955d0c4.js";import"./p-d27eec8d.js";import"./p-b3959606.js";import"./p-09f00a2a.js";import"./p-69965d84.js";import"./p-24698668.js";import"./p-52b2d57a.js";import"./p-5d9da1ee.js";import"./p-a2594b73.js";const i=async(i,a,r)=>({type:"Layout",elements:[{type:"Section",labelKey:`${i}.sections.basicInfo.label`,elements:[{labelKey:`${i}.fields.name.label`,scope:"/properties/name",type:"Control",options:{messages:[{type:"ERROR",keyword:"required",icon:!0,labelKey:`${i}.fields.name.requiredError`},{type:"ERROR",keyword:"maxLength",icon:!0,labelKey:`${i}.fields.name.maxLengthError`}]}},{labelKey:`${i}.fields.summary.label`,scope:"/properties/summary",type:"Control",options:{control:"hub-field-input-input",type:"textarea",rows:4,helperText:{labelKey:`${i}.fields.summary.helperText`},messages:[{type:"ERROR",keyword:"maxLength",icon:!0,labelKey:"shared.fields.purpose.maxLengthError"}]}},{labelKey:`${i}.fields.description.label`,scope:"/properties/description",type:"Control",options:{control:"hub-field-input-input",type:"textarea",helperText:{labelKey:`${i}.fields.description.helperText`}}},s(i,a),{labelKey:`${i}.fields.tags.label`,scope:"/properties/tags",type:"Control",options:{control:"hub-field-input-combobox",items:await e(a,r.portal.id,r.hubRequestOptions),allowCustomValues:!0,selectionMode:"multiple",placeholderIcon:"label",helperText:{labelKey:`${i}.fields.tags.helperText`}}},{labelKey:`${i}.fields.categories.label`,scope:"/properties/categories",type:"Control",options:{control:"hub-field-input-combobox",items:await t(r.portal.id,r.hubRequestOptions),allowCustomValues:!1,selectionMode:"multiple",placeholderIcon:"select-category",helperText:{labelKey:`${i}.fields.categories.helperText`}}}]},{type:"Section",labelKey:`${i}.sections.location.label`,options:{helperText:{labelKey:`${i}.sections.location.helperText`}},elements:[{scope:"/properties/location",type:"Control",options:{control:"hub-field-input-location-picker",extent:await o(a,r.hubRequestOptions),options:await p(a,r.portal.name,r.hubRequestOptions)}}]},{type:"Section",labelKey:`${i}.sections.featuredContent.label`,options:{helperText:{labelKey:`${i}.sections.featuredContent.helperText`}},elements:[{scope:"/properties/view/properties/featuredContentIds",type:"Control",options:{control:"hub-field-input-gallery-picker",targetEntity:"item",catalogs:l(r.currentUser),facets:[{label:`{{${i}.fields.featuredContent.facets.type:translate}}`,key:"type",display:"multi-select",field:"type",options:[],operation:"OR",aggLimit:100},{label:`{{${i}.fields.featuredContent.facets.sharing:translate}}`,key:"access",display:"multi-select",field:"access",options:[],operation:"OR"}]}}]}]});export{i as buildUiSchema}