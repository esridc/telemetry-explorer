import{g as e}from"./p-75d6da59.js";const o=e=>{var o;let i;if(null==e?void 0:e.isPortal)i=`${e.portalUrl}/home/user.html`;else{const l=new URL(window.location.origin);l.pathname=`/people/${null===(o=null==e?void 0:e.currentUser)||void 0===o?void 0:o.username}/profile`,i=l.toString()}return i},i=e=>{let o;return(null==e?void 0:e.isPortal)?(o=new URL(window.location.href),o.hash="/home/overview"):(o=new URL(null==e?void 0:e.hubHomeUrl),o.pathname="/overview"),o.toString()},l=(e,o)=>`${e.portalUrl}/home/item.html?id=${o.id}`,n=o=>{var i;const l=e(o);let n=(null===(i=o.links)||void 0===i?void 0:i.siteRelative)||`/${"content"===l?l:`${l}s`}/${o.id}`;return"initiative"===l&&(n=`/${l}s2/${o.id}`),n};export{i as a,l as b,n as c,o as g}