import{g as t,f as e}from"./p-ce275af6.js";const n=(t,e,n)=>{const o=t.get(e);if(!o){t.set(e,[n])}else if(!o.includes(n)){o.push(n)}};const o=(t,e)=>{let n;return(...o)=>{if(n){clearTimeout(n)}n=setTimeout((()=>{n=0;t(...o)}),e)}};const s=t=>!("isConnected"in t)||t.isConnected;const r=o((t=>{for(let e of t.keys()){t.set(e,t.get(e).filter(s))}}),2e3);const c=()=>{if(typeof t!=="function"){return{}}const o=new Map;return{dispose:()=>o.clear(),get:e=>{const s=t();if(s){n(o,e,s)}},set:t=>{const n=o.get(t);if(n){o.set(t,n.filter(e))}r(o)},reset:()=>{o.forEach((t=>t.forEach(e)));r(o)}}};const u=t=>typeof t==="function"?t():t;const i=(t,e=((t,e)=>t!==e))=>{const n=u(t);let o=new Map(Object.entries(n!==null&&n!==void 0?n:{}));const s={dispose:[],get:[],set:[],reset:[]};const r=()=>{var e;o=new Map(Object.entries((e=u(t))!==null&&e!==void 0?e:{}));s.reset.forEach((t=>t()))};const c=()=>{s.dispose.forEach((t=>t()));r()};const i=t=>{s.get.forEach((e=>e(t)));return o.get(t)};const a=(t,n)=>{const r=o.get(t);if(e(n,r,t)){o.set(t,n);s.set.forEach((e=>e(t,n,r)))}};const l=typeof Proxy==="undefined"?{}:new Proxy(n,{get(t,e){return i(e)},ownKeys(t){return Array.from(o.keys())},getOwnPropertyDescriptor(){return{enumerable:true,configurable:true}},has(t,e){return o.has(e)},set(t,e,n){a(e,n);return true}});const p=(t,e)=>{s[t].push(e);return()=>{f(s[t],e)}};const d=(e,n)=>{const o=p("set",((t,o)=>{if(t===e){n(o)}}));const s=p("reset",(()=>n(u(t)[e])));return()=>{o();s()}};const g=(...t)=>{const e=t.reduce(((t,e)=>{if(e.set){t.push(p("set",e.set))}if(e.get){t.push(p("get",e.get))}if(e.reset){t.push(p("reset",e.reset))}if(e.dispose){t.push(p("dispose",e.dispose))}return t}),[]);return()=>e.forEach((t=>t()))};const y=t=>{const e=o.get(t);s.set.forEach((n=>n(t,e,e)))};return{state:l,get:i,set:a,on:p,onChange:d,use:g,dispose:c,reset:r,forceUpdate:y}};const f=(t,e)=>{const n=t.indexOf(e);if(n>=0){t[n]=t[t.length-1];t.length--}};const a=(t,e)=>{const n=i(t,e);n.use(c());return n};const{state:l,onChange:p}=a({user:null,context:null,app:null});p("user",(t=>{l.user=t}));p("context",(t=>{console.debug("hub-radar-components: state.context",t.session.toCredential());l.context=t;l.user=t===null||t===void 0?void 0:t._currentUser}));export{l as s};
//# sourceMappingURL=p-f300bd24.js.map