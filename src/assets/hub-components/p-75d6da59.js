import{g as e}from"./p-a0deb8c6.js";function a(a){let t;switch(a.type){case"Hub Site Application":case"Site Application":t="site";break;case"Hub Page":case"Site Page":t="page";break;case"Hub Project":t="project";break;case"Hub Initiative":t="initiative";break;case"Discussion":t="discussion";break;case"Solution":t="template";break;case"Group":t="group";break;case"Hub Initiative Template":t="initiativeTemplate";break;default:["app","content","dataset","document","map"].includes(e(a.type||""))&&(t="content")}return t}export{a as g}