function t(t){const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(t);return n<0?void 0:n}function n(t){if(t>=0&&t<64)return"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[t]}var r={atob:function(n){if((n=(n=`${n}`).replace(/[ \t\n\f\r]/g,"")).length%4==0&&(n=n.replace(/==?$/,"")),n.length%4==1||/[^+/0-9A-Za-z]/.test(n))return null;let r="",i=0,o=0;for(let e=0;e<n.length;e++)i<<=6,i|=t(n[e]),o+=6,24===o&&(r+=String.fromCharCode((16711680&i)>>16),r+=String.fromCharCode((65280&i)>>8),r+=String.fromCharCode(255&i),i=o=0);return 12===o?(i>>=4,r+=String.fromCharCode(i)):18===o&&(i>>=2,r+=String.fromCharCode((65280&i)>>8),r+=String.fromCharCode(255&i)),r},btoa:function(t){let r;for(t=`${t}`,r=0;r<t.length;r++)if(t.charCodeAt(r)>255)return null;let i="";for(r=0;r<t.length;r+=3){const o=[void 0,void 0,void 0,void 0];o[0]=t.charCodeAt(r)>>2,o[1]=(3&t.charCodeAt(r))<<4,t.length>r+1&&(o[1]|=t.charCodeAt(r+1)>>4,o[2]=(15&t.charCodeAt(r+1))<<2),t.length>r+2&&(o[2]|=t.charCodeAt(r+2)>>6,o[3]=63&t.charCodeAt(r+2));for(let t=0;t<o.length;t++)i+=void 0===o[t]?"=":n(o[t])}return i}};export{r as a}