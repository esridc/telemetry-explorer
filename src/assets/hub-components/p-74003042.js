const e=async e=>({type:"Layout",elements:[{type:"Section",labelKey:`${e}.sections.discussions.label`,elements:[{labelKey:`${e}.fields.discussable.label`,scope:"/properties/isDiscussable",type:"Control",options:{control:"hub-field-input-radio",labels:[`{{${e}.fields.discussable.enabled.label:translate}}`,`{{${e}.fields.discussable.disabled.label:translate}}`],descriptions:[`{{${e}.fields.discussable.enabled.description:translate}}`,`{{${e}.fields.discussable.disabled.description:translate}}`],icons:["speech-bubbles","circle-disallowed"]}}]}]});export{e as buildUiSchema}