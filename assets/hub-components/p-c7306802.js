import{f as s}from"./p-bded806b.js";async function t(t,e){let o;try{({settings:{discussions:o}}=await s(Object.assign({id:t},e)))}catch(s){console.warn(`Failed to fetch discussion settings: ${s.message}`)}return Object.assign({allowedChannelIds:[],allowedLocations:[]},o)}export{t as f}