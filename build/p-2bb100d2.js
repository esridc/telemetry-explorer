/**!
 * Sortable 1.15.1
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function t(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);if(e){i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))}n.push.apply(n,i)}return n}function e(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};if(n%2){t(Object(r),true).forEach((function(t){i(e,t,r[t])}))}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(e,Object.getOwnPropertyDescriptors(r))}else{t(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}}return e}function n(t){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){n=function(t){return typeof t}}else{n=function(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return n(t)}function i(t,e,n){if(e in t){Object.defineProperty(t,e,{value:n,enumerable:true,configurable:true,writable:true})}else{t[e]=n}return t}function r(){r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n){if(Object.prototype.hasOwnProperty.call(n,i)){t[i]=n[i]}}}return t};return r.apply(this,arguments)}function o(t,e){if(t==null)return{};var n={};var i=Object.keys(t);var r,o;for(o=0;o<i.length;o++){r=i[o];if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function a(t,e){if(t==null)return{};var n=o(t,e);var i,r;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++){i=a[r];if(e.indexOf(i)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(t,i))continue;n[i]=t[i]}}return n}var f="1.15.1";function u(t){if(typeof window!=="undefined"&&window.navigator){return!!navigator.userAgent.match(t)}}var s=u(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i);var l=u(/Edge/i);var c=u(/firefox/i);var h=u(/safari/i)&&!u(/chrome/i)&&!u(/android/i);var d=u(/iP(ad|od|hone)/i);var v=u(/chrome/i)&&u(/android/i);var m={capture:false,passive:false};function p(t,e,n){t.addEventListener(e,n,!s&&m)}function g(t,e,n){t.removeEventListener(e,n,!s&&m)}function b(t,e){if(!e)return;e[0]===">"&&(e=e.substring(1));if(t){try{if(t.matches){return t.matches(e)}else if(t.msMatchesSelector){return t.msMatchesSelector(e)}else if(t.webkitMatchesSelector){return t.webkitMatchesSelector(e)}}catch(t){return false}}return false}function w(t){return t.host&&t!==document&&t.host.nodeType?t.host:t.parentNode}function E(t,e,n,i){if(t){n=n||document;do{if(e!=null&&(e[0]===">"?t.parentNode===n&&b(t,e):b(t,e))||i&&t===n){return t}if(t===n)break}while(t=w(t))}return null}var y=/\s+/g;function I(t,e,n){if(t&&e){if(t.classList){t.classList[n?"add":"remove"](e)}else{var i=(" "+t.className+" ").replace(y," ").replace(" "+e+" "," ");t.className=(i+(n?" "+e:"")).replace(y," ")}}}function x(t,e,n){var i=t&&t.style;if(i){if(n===void 0){if(document.defaultView&&document.defaultView.getComputedStyle){n=document.defaultView.getComputedStyle(t,"")}else if(t.currentStyle){n=t.currentStyle}return e===void 0?n:n[e]}else{if(!(e in i)&&e.indexOf("webkit")===-1){e="-webkit-"+e}i[e]=n+(typeof n==="string"?"":"px")}}}function S(t,e){var n="";if(typeof t==="string"){n=t}else{do{var i=x(t,"transform");if(i&&i!=="none"){n=i+" "+n}}while(!e&&(t=t.parentNode))}var r=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return r&&new r(n)}function T(t,e,n){if(t){var i=t.getElementsByTagName(e),r=0,o=i.length;if(n){for(;r<o;r++){n(i[r],r)}}return i}return[]}function O(){var t=document.scrollingElement;if(t){return t}else{return document.documentElement}}function M(t,e,n,i,r){if(!t.getBoundingClientRect&&t!==window)return;var o,a,f,u,l,c,h;if(t!==window&&t.parentNode&&t!==O()){o=t.getBoundingClientRect();a=o.top;f=o.left;u=o.bottom;l=o.right;c=o.height;h=o.width}else{a=0;f=0;u=window.innerHeight;l=window.innerWidth;c=window.innerHeight;h=window.innerWidth}if((e||n)&&t!==window){r=r||t.parentNode;if(!s){do{if(r&&r.getBoundingClientRect&&(x(r,"transform")!=="none"||n&&x(r,"position")!=="static")){var d=r.getBoundingClientRect();a-=d.top+parseInt(x(r,"border-top-width"));f-=d.left+parseInt(x(r,"border-left-width"));u=a+o.height;l=f+o.width;break}}while(r=r.parentNode)}}if(i&&t!==window){var v=S(r||t),m=v&&v.a,p=v&&v.d;if(v){a/=p;f/=m;h/=m;c/=p;u=a+c;l=f+h}}return{top:a,left:f,bottom:u,right:l,width:h,height:c}}function k(t){var e=M(t);var n=parseInt(x(t,"padding-left")),i=parseInt(x(t,"padding-top")),r=parseInt(x(t,"padding-right")),o=parseInt(x(t,"padding-bottom"));e.top+=i+parseInt(x(t,"border-top-width"));e.left+=n+parseInt(x(t,"border-left-width"));e.width=t.clientWidth-n-r;e.height=t.clientHeight-i-o;e.bottom=e.top+e.height;e.right=e.left+e.width;return e}function _(t,e,n){var i=N(t,true),r=M(t)[e];while(i){var o=M(i)[n],a=void 0;if(n==="top"||n==="left"){a=r>=o}else{a=r<=o}if(!a)return i;if(i===O())break;i=N(i,false)}return false}function C(t,e,n,i){var r=0,o=0,a=t.children;while(o<a.length){if(a[o].style.display!=="none"&&a[o]!==$t.ghost&&(i||a[o]!==$t.dragged)&&E(a[o],n.draggable,t,false)){if(r===e){return a[o]}r++}o++}return null}function D(t,e){var n=t.lastElementChild;while(n&&(n===$t.ghost||x(n,"display")==="none"||e&&!b(n,e))){n=n.previousElementSibling}return n||null}function j(t,e){var n=0;if(!t||!t.parentNode){return-1}while(t=t.previousElementSibling){if(t.nodeName.toUpperCase()!=="TEMPLATE"&&t!==$t.clone&&(!e||b(t,e))){n++}}return n}function A(t){var e=0,n=0,i=O();if(t){do{var r=S(t),o=r.a,a=r.d;e+=t.scrollLeft*o;n+=t.scrollTop*a}while(t!==i&&(t=t.parentNode))}return[e,n]}function z(t,e){for(var n in t){if(!t.hasOwnProperty(n))continue;for(var i in e){if(e.hasOwnProperty(i)&&e[i]===t[n][i])return Number(n)}}return-1}function N(t,e){if(!t||!t.getBoundingClientRect)return O();var n=t;var i=false;do{if(n.clientWidth<n.scrollWidth||n.clientHeight<n.scrollHeight){var r=x(n);if(n.clientWidth<n.scrollWidth&&(r.overflowX=="auto"||r.overflowX=="scroll")||n.clientHeight<n.scrollHeight&&(r.overflowY=="auto"||r.overflowY=="scroll")){if(!n.getBoundingClientRect||n===document.body)return O();if(i||e)return n;i=true}}}while(n=n.parentNode);return O()}function F(t,e){if(t&&e){for(var n in e){if(e.hasOwnProperty(n)){t[n]=e[n]}}}return t}function P(t,e){return Math.round(t.top)===Math.round(e.top)&&Math.round(t.left)===Math.round(e.left)&&Math.round(t.height)===Math.round(e.height)&&Math.round(t.width)===Math.round(e.width)}var B;function H(t,e){return function(){if(!B){var n=arguments,i=this;if(n.length===1){t.call(i,n[0])}else{t.apply(i,n)}B=setTimeout((function(){B=void 0}),e)}}}function G(){clearTimeout(B);B=void 0}function L(t,e,n){t.scrollLeft+=e;t.scrollTop+=n}function R(t){var e=window.Polymer;var n=window.jQuery||window.Zepto;if(e&&e.dom){return e.dom(t).cloneNode(true)}else if(n){return n(t).clone(true)[0]}else{return t.cloneNode(true)}}var W="Sortable"+(new Date).getTime();function X(){var t=[],n;return{captureAnimationState:function n(){t=[];if(!this.options.animation)return;var i=[].slice.call(this.el.children);i.forEach((function(n){if(x(n,"display")==="none"||n===$t.ghost)return;t.push({target:n,rect:M(n)});var i=e({},t[t.length-1].rect);if(n.thisAnimationDuration){var r=S(n,true);if(r){i.top-=r.f;i.left-=r.e}}n.fromRect=i}))},addAnimationState:function e(n){t.push(n)},removeAnimationState:function e(n){t.splice(z(t,{target:n}),1)},animateAll:function e(i){var r=this;if(!this.options.animation){clearTimeout(n);if(typeof i==="function")i();return}var o=false,a=0;t.forEach((function(t){var e=0,n=t.target,i=n.fromRect,f=M(n),u=n.prevFromRect,s=n.prevToRect,l=t.rect,c=S(n,true);if(c){f.top-=c.f;f.left-=c.e}n.toRect=f;if(n.thisAnimationDuration){if(P(u,f)&&!P(i,f)&&(l.top-f.top)/(l.left-f.left)===(i.top-f.top)/(i.left-f.left)){e=$(l,u,s,r.options)}}if(!P(f,i)){n.prevFromRect=i;n.prevToRect=f;if(!e){e=r.options.animation}r.animate(n,l,f,e)}if(e){o=true;a=Math.max(a,e);clearTimeout(n.animationResetTimer);n.animationResetTimer=setTimeout((function(){n.animationTime=0;n.prevFromRect=null;n.fromRect=null;n.prevToRect=null;n.thisAnimationDuration=null}),e);n.thisAnimationDuration=e}}));clearTimeout(n);if(!o){if(typeof i==="function")i()}else{n=setTimeout((function(){if(typeof i==="function")i()}),a)}t=[]},animate:function t(e,n,i,r){if(r){x(e,"transition","");x(e,"transform","");var o=S(this.el),a=o&&o.a,f=o&&o.d,u=(n.left-i.left)/(a||1),s=(n.top-i.top)/(f||1);e.animatingX=!!u;e.animatingY=!!s;x(e,"transform","translate3d("+u+"px,"+s+"px,0)");this.forRepaintDummy=Y(e);x(e,"transition","transform "+r+"ms"+(this.options.easing?" "+this.options.easing:""));x(e,"transform","translate3d(0,0,0)");typeof e.animated==="number"&&clearTimeout(e.animated);e.animated=setTimeout((function(){x(e,"transition","");x(e,"transform","");e.animated=false;e.animatingX=false;e.animatingY=false}),r)}}}}function Y(t){return t.offsetWidth}function $(t,e,n,i){return Math.sqrt(Math.pow(e.top-t.top,2)+Math.pow(e.left-t.left,2))/Math.sqrt(Math.pow(e.top-n.top,2)+Math.pow(e.left-n.left,2))*i.animation}var U=[];var V={initializeByDefault:true};var Z={mount:function t(e){for(var n in V){if(V.hasOwnProperty(n)&&!(n in e)){e[n]=V[n]}}U.forEach((function(t){if(t.pluginName===e.pluginName){throw"Sortable: Cannot mount plugin ".concat(e.pluginName," more than once")}}));U.push(e)},pluginEvent:function t(n,i,r){var o=this;this.eventCanceled=false;r.cancel=function(){o.eventCanceled=true};var a=n+"Global";U.forEach((function(t){if(!i[t.pluginName])return;if(i[t.pluginName][a]){i[t.pluginName][a](e({sortable:i},r))}if(i.options[t.pluginName]&&i[t.pluginName][n]){i[t.pluginName][n](e({sortable:i},r))}}))},initializePlugins:function t(e,n,i,o){U.forEach((function(t){var o=t.pluginName;if(!e.options[o]&&!t.initializeByDefault)return;var a=new t(e,n,e.options);a.sortable=e;a.options=e.options;e[o]=a;r(i,a.defaults)}));for(var a in e.options){if(!e.options.hasOwnProperty(a))continue;var f=this.modifyOption(e,a,e.options[a]);if(typeof f!=="undefined"){e.options[a]=f}}},getEventProperties:function t(e,n){var i={};U.forEach((function(t){if(typeof t.eventProperties!=="function")return;r(i,t.eventProperties.call(n[t.pluginName],e))}));return i},modifyOption:function t(e,n,i){var r;U.forEach((function(t){if(!e[t.pluginName])return;if(t.optionListeners&&typeof t.optionListeners[n]==="function"){r=t.optionListeners[n].call(e[t.pluginName],i)}}));return r}};function q(t){var n=t.sortable,i=t.rootEl,r=t.name,o=t.targetEl,a=t.cloneEl,f=t.toEl,u=t.fromEl,c=t.oldIndex,h=t.newIndex,d=t.oldDraggableIndex,v=t.newDraggableIndex,m=t.originalEvent,p=t.putSortable,g=t.extraEventProperties;n=n||i&&i[W];if(!n)return;var b,w=n.options,E="on"+r.charAt(0).toUpperCase()+r.substr(1);if(window.CustomEvent&&!s&&!l){b=new CustomEvent(r,{bubbles:true,cancelable:true})}else{b=document.createEvent("Event");b.initEvent(r,true,true)}b.to=f||i;b.from=u||i;b.item=o||i;b.clone=a;b.oldIndex=c;b.newIndex=h;b.oldDraggableIndex=d;b.newDraggableIndex=v;b.originalEvent=m;b.pullMode=p?p.lastPutMode:undefined;var y=e(e({},g),Z.getEventProperties(r,n));for(var I in y){b[I]=y[I]}if(i){i.dispatchEvent(b)}if(w[E]){w[E].call(n,b)}}var J=["evt"];var K=function t(n,i){var r=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{},o=r.evt,f=a(r,J);Z.pluginEvent.bind($t)(n,i,e({dragEl:tt,parentEl:et,ghostEl:nt,rootEl:it,nextEl:rt,lastDownEl:ot,cloneEl:at,cloneHidden:ft,dragStarted:xt,putSortable:dt,activeSortable:$t.active,originalEvent:o,oldIndex:ut,oldDraggableIndex:lt,newIndex:st,newDraggableIndex:ct,hideGhostForTarget:Rt,unhideGhostForTarget:Wt,cloneNowHidden:function t(){ft=true},cloneNowShown:function t(){ft=false},dispatchSortableEvent:function t(e){Q({sortable:i,name:e,originalEvent:o})}},f))};function Q(t){q(e({putSortable:dt,cloneEl:at,targetEl:tt,rootEl:it,oldIndex:ut,oldDraggableIndex:lt,newIndex:st,newDraggableIndex:ct},t))}var tt,et,nt,it,rt,ot,at,ft,ut,st,lt,ct,ht,dt,vt=false,mt=false,pt=[],gt,bt,wt,Et,yt,It,xt,St,Tt,Ot=false,Mt=false,kt,_t,Ct=[],Dt=false,jt=[];var At=typeof document!=="undefined",zt=d,Nt=l||s?"cssFloat":"float",Ft=At&&!v&&!d&&"draggable"in document.createElement("div"),Pt=function(){if(!At)return;if(s){return false}var t=document.createElement("x");t.style.cssText="pointer-events:auto";return t.style.pointerEvents==="auto"}(),Bt=function t(e,n){var i=x(e),r=parseInt(i.width)-parseInt(i.paddingLeft)-parseInt(i.paddingRight)-parseInt(i.borderLeftWidth)-parseInt(i.borderRightWidth),o=C(e,0,n),a=C(e,1,n),f=o&&x(o),u=a&&x(a),s=f&&parseInt(f.marginLeft)+parseInt(f.marginRight)+M(o).width,l=u&&parseInt(u.marginLeft)+parseInt(u.marginRight)+M(a).width;if(i.display==="flex"){return i.flexDirection==="column"||i.flexDirection==="column-reverse"?"vertical":"horizontal"}if(i.display==="grid"){return i.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal"}if(o&&f["float"]&&f["float"]!=="none"){var c=f["float"]==="left"?"left":"right";return a&&(u.clear==="both"||u.clear===c)?"vertical":"horizontal"}return o&&(f.display==="block"||f.display==="flex"||f.display==="table"||f.display==="grid"||s>=r&&i[Nt]==="none"||a&&i[Nt]==="none"&&s+l>r)?"vertical":"horizontal"},Ht=function t(e,n,i){var r=i?e.left:e.top,o=i?e.right:e.bottom,a=i?e.width:e.height,f=i?n.left:n.top,u=i?n.right:n.bottom,s=i?n.width:n.height;return r===f||o===u||r+a/2===f+s/2},Gt=function t(e,n){var i;pt.some((function(t){var r=t[W].options.emptyInsertThreshold;if(!r||D(t))return;var o=M(t),a=e>=o.left-r&&e<=o.right+r,f=n>=o.top-r&&n<=o.bottom+r;if(a&&f){return i=t}}));return i},Lt=function t(e){function i(t,e){return function(n,r,o,a){var f=n.options.group.name&&r.options.group.name&&n.options.group.name===r.options.group.name;if(t==null&&(e||f)){return true}else if(t==null||t===false){return false}else if(e&&t==="clone"){return t}else if(typeof t==="function"){return i(t(n,r,o,a),e)(n,r,o,a)}else{var u=(e?n:r).options.group.name;return t===true||typeof t==="string"&&t===u||t.join&&t.indexOf(u)>-1}}}var r={};var o=e.group;if(!o||n(o)!="object"){o={name:o}}r.name=o.name;r.checkPull=i(o.pull,true);r.checkPut=i(o.put);r.revertClone=o.revertClone;e.group=r},Rt=function t(){if(!Pt&&nt){x(nt,"display","none")}},Wt=function t(){if(!Pt&&nt){x(nt,"display","")}};if(At&&!v){document.addEventListener("click",(function(t){if(mt){t.preventDefault();t.stopPropagation&&t.stopPropagation();t.stopImmediatePropagation&&t.stopImmediatePropagation();mt=false;return false}}),true)}var Xt=function t(e){if(tt){e=e.touches?e.touches[0]:e;var n=Gt(e.clientX,e.clientY);if(n){var i={};for(var r in e){if(e.hasOwnProperty(r)){i[r]=e[r]}}i.target=i.rootEl=n;i.preventDefault=void 0;i.stopPropagation=void 0;n[W]._onDragOver(i)}}};var Yt=function t(e){if(tt){tt.parentNode[W]._isOutsideThisEl(e.target)}};function $t(t,e){if(!(t&&t.nodeType&&t.nodeType===1)){throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t))}this.el=t;this.options=e=r({},e);t[W]=this;var n={group:null,sort:true,disabled:false,store:null,handle:null,draggable:/^[uo]l$/i.test(t.nodeName)?">li":">*",swapThreshold:1,invertSwap:false,invertedSwapThreshold:null,removeCloneOnHide:true,direction:function e(){return Bt(t,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:true,animation:0,easing:null,setData:function t(e,n){e.setData("Text",n.textContent)},dropBubble:false,dragoverBubble:false,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:false,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:false,fallbackClass:"sortable-fallback",fallbackOnBody:false,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:$t.supportPointer!==false&&"PointerEvent"in window&&!h,emptyInsertThreshold:5};Z.initializePlugins(this,t,n);for(var i in n){!(i in e)&&(e[i]=n[i])}Lt(e);for(var o in this){if(o.charAt(0)==="_"&&typeof this[o]==="function"){this[o]=this[o].bind(this)}}this.nativeDraggable=e.forceFallback?false:Ft;if(this.nativeDraggable){this.options.touchStartThreshold=1}if(e.supportPointer){p(t,"pointerdown",this._onTapStart)}else{p(t,"mousedown",this._onTapStart);p(t,"touchstart",this._onTapStart)}if(this.nativeDraggable){p(t,"dragover",this);p(t,"dragenter",this)}pt.push(this.el);e.store&&e.store.get&&this.sort(e.store.get(this)||[]);r(this,X())}$t.prototype={constructor:$t,_isOutsideThisEl:function t(e){if(!this.el.contains(e)&&e!==this.el){St=null}},_getDirection:function t(e,n){return typeof this.options.direction==="function"?this.options.direction.call(this,e,n,tt):this.options.direction},_onTapStart:function t(e){if(!e.cancelable)return;var n=this,i=this.el,r=this.options,o=r.preventOnFilter,a=e.type,f=e.touches&&e.touches[0]||e.pointerType&&e.pointerType==="touch"&&e,u=(f||e).target,s=e.target.shadowRoot&&(e.path&&e.path[0]||e.composedPath&&e.composedPath()[0])||u,l=r.filter;ne(i);if(tt){return}if(/mousedown|pointerdown/.test(a)&&e.button!==0||r.disabled){return}if(s.isContentEditable){return}if(!this.nativeDraggable&&h&&u&&u.tagName.toUpperCase()==="SELECT"){return}u=E(u,r.draggable,i,false);if(u&&u.animated){return}if(ot===u){return}ut=j(u);lt=j(u,r.draggable);if(typeof l==="function"){if(l.call(this,e,u,this)){Q({sortable:n,rootEl:s,name:"filter",targetEl:u,toEl:i,fromEl:i});K("filter",n,{evt:e});o&&e.cancelable&&e.preventDefault();return}}else if(l){l=l.split(",").some((function(t){t=E(s,t.trim(),i,false);if(t){Q({sortable:n,rootEl:t,name:"filter",targetEl:u,fromEl:i,toEl:i});K("filter",n,{evt:e});return true}}));if(l){o&&e.cancelable&&e.preventDefault();return}}if(r.handle&&!E(s,r.handle,i,false)){return}this._prepareDragStart(e,f,u)},_prepareDragStart:function t(e,n,i){var r=this,o=r.el,a=r.options,f=o.ownerDocument,u;if(i&&!tt&&i.parentNode===o){var h=M(i);it=o;tt=i;et=tt.parentNode;rt=tt.nextSibling;ot=i;ht=a.group;$t.dragged=tt;gt={target:tt,clientX:(n||e).clientX,clientY:(n||e).clientY};yt=gt.clientX-h.left;It=gt.clientY-h.top;this._lastX=(n||e).clientX;this._lastY=(n||e).clientY;tt.style["will-change"]="all";u=function t(){K("delayEnded",r,{evt:e});if($t.eventCanceled){r._onDrop();return}r._disableDelayedDragEvents();if(!c&&r.nativeDraggable){tt.draggable=true}r._triggerDragStart(e,n);Q({sortable:r,name:"choose",originalEvent:e});I(tt,a.chosenClass,true)};a.ignore.split(",").forEach((function(t){T(tt,t.trim(),Zt)}));p(f,"dragover",Xt);p(f,"mousemove",Xt);p(f,"touchmove",Xt);p(f,"mouseup",r._onDrop);p(f,"touchend",r._onDrop);p(f,"touchcancel",r._onDrop);if(c&&this.nativeDraggable){this.options.touchStartThreshold=4;tt.draggable=true}K("delayStart",this,{evt:e});if(a.delay&&(!a.delayOnTouchOnly||n)&&(!this.nativeDraggable||!(l||s))){if($t.eventCanceled){this._onDrop();return}p(f,"mouseup",r._disableDelayedDrag);p(f,"touchend",r._disableDelayedDrag);p(f,"touchcancel",r._disableDelayedDrag);p(f,"mousemove",r._delayedDragTouchMoveHandler);p(f,"touchmove",r._delayedDragTouchMoveHandler);a.supportPointer&&p(f,"pointermove",r._delayedDragTouchMoveHandler);r._dragStartTimer=setTimeout(u,a.delay)}else{u()}}},_delayedDragTouchMoveHandler:function t(e){var n=e.touches?e.touches[0]:e;if(Math.max(Math.abs(n.clientX-this._lastX),Math.abs(n.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))){this._disableDelayedDrag()}},_disableDelayedDrag:function t(){tt&&Zt(tt);clearTimeout(this._dragStartTimer);this._disableDelayedDragEvents()},_disableDelayedDragEvents:function t(){var e=this.el.ownerDocument;g(e,"mouseup",this._disableDelayedDrag);g(e,"touchend",this._disableDelayedDrag);g(e,"touchcancel",this._disableDelayedDrag);g(e,"mousemove",this._delayedDragTouchMoveHandler);g(e,"touchmove",this._delayedDragTouchMoveHandler);g(e,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function t(e,n){n=n||e.pointerType=="touch"&&e;if(!this.nativeDraggable||n){if(this.options.supportPointer){p(document,"pointermove",this._onTouchMove)}else if(n){p(document,"touchmove",this._onTouchMove)}else{p(document,"mousemove",this._onTouchMove)}}else{p(tt,"dragend",this);p(it,"dragstart",this._onDragStart)}try{if(document.selection){ie((function(){document.selection.empty()}))}else{window.getSelection().removeAllRanges()}}catch(t){}},_dragStarted:function t(e,n){vt=false;if(it&&tt){K("dragStarted",this,{evt:n});if(this.nativeDraggable){p(document,"dragover",Yt)}var i=this.options;!e&&I(tt,i.dragClass,false);I(tt,i.ghostClass,true);$t.active=this;e&&this._appendGhost();Q({sortable:this,name:"start",originalEvent:n})}else{this._nulling()}},_emulateDragOver:function t(){if(bt){this._lastX=bt.clientX;this._lastY=bt.clientY;Rt();var e=document.elementFromPoint(bt.clientX,bt.clientY);var n=e;while(e&&e.shadowRoot){e=e.shadowRoot.elementFromPoint(bt.clientX,bt.clientY);if(e===n)break;n=e}tt.parentNode[W]._isOutsideThisEl(e);if(n){do{if(n[W]){var i=void 0;i=n[W]._onDragOver({clientX:bt.clientX,clientY:bt.clientY,target:e,rootEl:n});if(i&&!this.options.dragoverBubble){break}}e=n}while(n=n.parentNode)}Wt()}},_onTouchMove:function t(e){if(gt){var n=this.options,i=n.fallbackTolerance,r=n.fallbackOffset,o=e.touches?e.touches[0]:e,a=nt&&S(nt,true),f=nt&&a&&a.a,u=nt&&a&&a.d,s=zt&&_t&&A(_t),l=(o.clientX-gt.clientX+r.x)/(f||1)+(s?s[0]-Ct[0]:0)/(f||1),c=(o.clientY-gt.clientY+r.y)/(u||1)+(s?s[1]-Ct[1]:0)/(u||1);if(!$t.active&&!vt){if(i&&Math.max(Math.abs(o.clientX-this._lastX),Math.abs(o.clientY-this._lastY))<i){return}this._onDragStart(e,true)}if(nt){if(a){a.e+=l-(wt||0);a.f+=c-(Et||0)}else{a={a:1,b:0,c:0,d:1,e:l,f:c}}var h="matrix(".concat(a.a,",").concat(a.b,",").concat(a.c,",").concat(a.d,",").concat(a.e,",").concat(a.f,")");x(nt,"webkitTransform",h);x(nt,"mozTransform",h);x(nt,"msTransform",h);x(nt,"transform",h);wt=l;Et=c;bt=o}e.cancelable&&e.preventDefault()}},_appendGhost:function t(){if(!nt){var e=this.options.fallbackOnBody?document.body:it,n=M(tt,true,zt,true,e),i=this.options;if(zt){_t=e;while(x(_t,"position")==="static"&&x(_t,"transform")==="none"&&_t!==document){_t=_t.parentNode}if(_t!==document.body&&_t!==document.documentElement){if(_t===document)_t=O();n.top+=_t.scrollTop;n.left+=_t.scrollLeft}else{_t=O()}Ct=A(_t)}nt=tt.cloneNode(true);I(nt,i.ghostClass,false);I(nt,i.fallbackClass,true);I(nt,i.dragClass,true);x(nt,"transition","");x(nt,"transform","");x(nt,"box-sizing","border-box");x(nt,"margin",0);x(nt,"top",n.top);x(nt,"left",n.left);x(nt,"width",n.width);x(nt,"height",n.height);x(nt,"opacity","0.8");x(nt,"position",zt?"absolute":"fixed");x(nt,"zIndex","100000");x(nt,"pointerEvents","none");$t.ghost=nt;e.appendChild(nt);x(nt,"transform-origin",yt/parseInt(nt.style.width)*100+"% "+It/parseInt(nt.style.height)*100+"%")}},_onDragStart:function t(e,n){var i=this;var r=e.dataTransfer;var o=i.options;K("dragStart",this,{evt:e});if($t.eventCanceled){this._onDrop();return}K("setupClone",this);if(!$t.eventCanceled){at=R(tt);at.removeAttribute("id");at.draggable=false;at.style["will-change"]="";this._hideClone();I(at,this.options.chosenClass,false);$t.clone=at}i.cloneId=ie((function(){K("clone",i);if($t.eventCanceled)return;if(!i.options.removeCloneOnHide){it.insertBefore(at,tt)}i._hideClone();Q({sortable:i,name:"clone"})}));!n&&I(tt,o.dragClass,true);if(n){mt=true;i._loopId=setInterval(i._emulateDragOver,50)}else{g(document,"mouseup",i._onDrop);g(document,"touchend",i._onDrop);g(document,"touchcancel",i._onDrop);if(r){r.effectAllowed="move";o.setData&&o.setData.call(i,r,tt)}p(document,"drop",i);x(tt,"transform","translateZ(0)")}vt=true;i._dragStartId=ie(i._dragStarted.bind(i,n,e));p(document,"selectstart",i);xt=true;if(h){x(document.body,"user-select","none")}},_onDragOver:function t(n){var i=this.el,r=n.target,o,a,f,u=this.options,s=u.group,l=$t.active,c=ht===s,h=u.sort,d=dt||l,v,m=this,p=false;if(Dt)return;function g(t,u){K(t,m,e({evt:n,isOwner:c,axis:v?"vertical":"horizontal",revert:f,dragRect:o,targetRect:a,canSort:h,fromSortable:d,target:r,completed:w,onMove:function t(e,r){return Vt(it,i,tt,o,e,M(e),n,r)},changed:y},u))}function b(){g("dragOverAnimationCapture");m.captureAnimationState();if(m!==d){d.captureAnimationState()}}function w(t){g("dragOverCompleted",{insertion:t});if(t){if(c){l._hideClone()}else{l._showClone(m)}if(m!==d){I(tt,dt?dt.options.ghostClass:l.options.ghostClass,false);I(tt,u.ghostClass,true)}if(dt!==m&&m!==$t.active){dt=m}else if(m===$t.active&&dt){dt=null}if(d===m){m._ignoreWhileAnimating=r}m.animateAll((function(){g("dragOverAnimationComplete");m._ignoreWhileAnimating=null}));if(m!==d){d.animateAll();d._ignoreWhileAnimating=null}}if(r===tt&&!tt.animated||r===i&&!r.animated){St=null}if(!u.dragoverBubble&&!n.rootEl&&r!==document){tt.parentNode[W]._isOutsideThisEl(n.target);!t&&Xt(n)}!u.dragoverBubble&&n.stopPropagation&&n.stopPropagation();return p=true}function y(){st=j(tt);ct=j(tt,u.draggable);Q({sortable:m,name:"change",toEl:i,newIndex:st,newDraggableIndex:ct,originalEvent:n})}if(n.preventDefault!==void 0){n.cancelable&&n.preventDefault()}r=E(r,u.draggable,i,true);g("dragOver");if($t.eventCanceled)return p;if(tt.contains(n.target)||r.animated&&r.animatingX&&r.animatingY||m._ignoreWhileAnimating===r){return w(false)}mt=false;if(l&&!u.disabled&&(c?h||(f=et!==it):dt===this||(this.lastPutMode=ht.checkPull(this,l,tt,n))&&s.checkPut(this,l,tt,n))){v=this._getDirection(n,r)==="vertical";o=M(tt);g("dragOverValid");if($t.eventCanceled)return p;if(f){et=it;b();this._hideClone();g("revert");if(!$t.eventCanceled){if(rt){it.insertBefore(tt,rt)}else{it.appendChild(tt)}}return w(true)}var S=D(i,u.draggable);if(!S||Kt(n,v,this)&&!S.animated){if(S===tt){return w(false)}if(S&&i===n.target){r=S}if(r){a=M(r)}if(Vt(it,i,tt,o,r,a,n,!!r)!==false){b();if(S&&S.nextSibling){i.insertBefore(tt,S.nextSibling)}else{i.appendChild(tt)}et=i;y();return w(true)}}else if(S&&Jt(n,v,this)){var T=C(i,0,u,true);if(T===tt){return w(false)}r=T;a=M(r);if(Vt(it,i,tt,o,r,a,n,false)!==false){b();i.insertBefore(tt,T);et=i;y();return w(true)}}else if(r.parentNode===i){a=M(r);var O=0,k,A=tt.parentNode!==i,z=!Ht(tt.animated&&tt.toRect||o,r.animated&&r.toRect||a,v),N=v?"top":"left",F=_(r,"top","top")||_(tt,"top","top"),P=F?F.scrollTop:void 0;if(St!==r){k=a[N];Ot=false;Mt=!z&&u.invertSwap||A}O=Qt(n,r,a,v,z?1:u.swapThreshold,u.invertedSwapThreshold==null?u.swapThreshold:u.invertedSwapThreshold,Mt,St===r);var B;if(O!==0){var H=j(tt);do{H-=O;B=et.children[H]}while(B&&(x(B,"display")==="none"||B===nt))}if(O===0||B===r){return w(false)}St=r;Tt=O;var G=r.nextElementSibling,R=false;R=O===1;var X=Vt(it,i,tt,o,r,a,n,R);if(X!==false){if(X===1||X===-1){R=X===1}Dt=true;setTimeout(qt,30);b();if(R&&!G){i.appendChild(tt)}else{r.parentNode.insertBefore(tt,R?G:r)}if(F){L(F,0,P-F.scrollTop)}et=tt.parentNode;if(k!==undefined&&!Mt){kt=Math.abs(k-M(r)[N])}y();return w(true)}}if(i.contains(tt)){return w(false)}}return false},_ignoreWhileAnimating:null,_offMoveEvents:function t(){g(document,"mousemove",this._onTouchMove);g(document,"touchmove",this._onTouchMove);g(document,"pointermove",this._onTouchMove);g(document,"dragover",Xt);g(document,"mousemove",Xt);g(document,"touchmove",Xt)},_offUpEvents:function t(){var e=this.el.ownerDocument;g(e,"mouseup",this._onDrop);g(e,"touchend",this._onDrop);g(e,"pointerup",this._onDrop);g(e,"touchcancel",this._onDrop);g(document,"selectstart",this)},_onDrop:function t(e){var n=this.el,i=this.options;st=j(tt);ct=j(tt,i.draggable);K("drop",this,{evt:e});et=tt&&tt.parentNode;st=j(tt);ct=j(tt,i.draggable);if($t.eventCanceled){this._nulling();return}vt=false;Mt=false;Ot=false;clearInterval(this._loopId);clearTimeout(this._dragStartTimer);re(this.cloneId);re(this._dragStartId);if(this.nativeDraggable){g(document,"drop",this);g(n,"dragstart",this._onDragStart)}this._offMoveEvents();this._offUpEvents();if(h){x(document.body,"user-select","")}x(tt,"transform","");if(e){if(xt){e.cancelable&&e.preventDefault();!i.dropBubble&&e.stopPropagation()}nt&&nt.parentNode&&nt.parentNode.removeChild(nt);if(it===et||dt&&dt.lastPutMode!=="clone"){at&&at.parentNode&&at.parentNode.removeChild(at)}if(tt){if(this.nativeDraggable){g(tt,"dragend",this)}Zt(tt);tt.style["will-change"]="";if(xt&&!vt){I(tt,dt?dt.options.ghostClass:this.options.ghostClass,false)}I(tt,this.options.chosenClass,false);Q({sortable:this,name:"unchoose",toEl:et,newIndex:null,newDraggableIndex:null,originalEvent:e});if(it!==et){if(st>=0){Q({rootEl:et,name:"add",toEl:et,fromEl:it,originalEvent:e});Q({sortable:this,name:"remove",toEl:et,originalEvent:e});Q({rootEl:et,name:"sort",toEl:et,fromEl:it,originalEvent:e});Q({sortable:this,name:"sort",toEl:et,originalEvent:e})}dt&&dt.save()}else{if(st!==ut){if(st>=0){Q({sortable:this,name:"update",toEl:et,originalEvent:e});Q({sortable:this,name:"sort",toEl:et,originalEvent:e})}}}if($t.active){if(st==null||st===-1){st=ut;ct=lt}Q({sortable:this,name:"end",toEl:et,originalEvent:e});this.save()}}}this._nulling()},_nulling:function t(){K("nulling",this);it=tt=et=nt=rt=at=ot=ft=gt=bt=xt=st=ct=ut=lt=St=Tt=dt=ht=$t.dragged=$t.ghost=$t.clone=$t.active=null;jt.forEach((function(t){t.checked=true}));jt.length=wt=Et=0},handleEvent:function t(e){switch(e.type){case"drop":case"dragend":this._onDrop(e);break;case"dragenter":case"dragover":if(tt){this._onDragOver(e);Ut(e)}break;case"selectstart":e.preventDefault();break}},toArray:function t(){var e=[],n,i=this.el.children,r=0,o=i.length,a=this.options;for(;r<o;r++){n=i[r];if(E(n,a.draggable,this.el,false)){e.push(n.getAttribute(a.dataIdAttr)||ee(n))}}return e},sort:function t(e,n){var i={},r=this.el;this.toArray().forEach((function(t,e){var n=r.children[e];if(E(n,this.options.draggable,r,false)){i[t]=n}}),this);n&&this.captureAnimationState();e.forEach((function(t){if(i[t]){r.removeChild(i[t]);r.appendChild(i[t])}}));n&&this.animateAll()},save:function t(){var e=this.options.store;e&&e.set&&e.set(this)},closest:function t(e,n){return E(e,n||this.options.draggable,this.el,false)},option:function t(e,n){var i=this.options;if(n===void 0){return i[e]}else{var r=Z.modifyOption(this,e,n);if(typeof r!=="undefined"){i[e]=r}else{i[e]=n}if(e==="group"){Lt(i)}}},destroy:function t(){K("destroy",this);var e=this.el;e[W]=null;g(e,"mousedown",this._onTapStart);g(e,"touchstart",this._onTapStart);g(e,"pointerdown",this._onTapStart);if(this.nativeDraggable){g(e,"dragover",this);g(e,"dragenter",this)}Array.prototype.forEach.call(e.querySelectorAll("[draggable]"),(function(t){t.removeAttribute("draggable")}));this._onDrop();this._disableDelayedDragEvents();pt.splice(pt.indexOf(this.el),1);this.el=e=null},_hideClone:function t(){if(!ft){K("hideClone",this);if($t.eventCanceled)return;x(at,"display","none");if(this.options.removeCloneOnHide&&at.parentNode){at.parentNode.removeChild(at)}ft=true}},_showClone:function t(e){if(e.lastPutMode!=="clone"){this._hideClone();return}if(ft){K("showClone",this);if($t.eventCanceled)return;if(tt.parentNode==it&&!this.options.group.revertClone){it.insertBefore(at,tt)}else if(rt){it.insertBefore(at,rt)}else{it.appendChild(at)}if(this.options.group.revertClone){this.animate(tt,at)}x(at,"display","");ft=false}}};function Ut(t){if(t.dataTransfer){t.dataTransfer.dropEffect="move"}t.cancelable&&t.preventDefault()}function Vt(t,e,n,i,r,o,a,f){var u,c=t[W],h=c.options.onMove,d;if(window.CustomEvent&&!s&&!l){u=new CustomEvent("move",{bubbles:true,cancelable:true})}else{u=document.createEvent("Event");u.initEvent("move",true,true)}u.to=e;u.from=t;u.dragged=n;u.draggedRect=i;u.related=r||e;u.relatedRect=o||M(e);u.willInsertAfter=f;u.originalEvent=a;t.dispatchEvent(u);if(h){d=h.call(c,u,a)}return d}function Zt(t){t.draggable=false}function qt(){Dt=false}function Jt(t,e,n){var i=M(C(n.el,0,n.options,true));var r=k(n.el);var o=10;return e?t.clientX<r.left-o||t.clientY<i.top&&t.clientX<i.right:t.clientY<r.top-o||t.clientY<i.bottom&&t.clientX<i.left}function Kt(t,e,n){var i=M(D(n.el,n.options.draggable));var r=k(n.el);var o=10;return e?t.clientX>r.right+o||t.clientY>i.bottom&&t.clientX>i.left:t.clientY>r.bottom+o||t.clientX>i.right&&t.clientY>i.top}function Qt(t,e,n,i,r,o,a,f){var u=i?t.clientY:t.clientX,s=i?n.height:n.width,l=i?n.top:n.left,c=i?n.bottom:n.right,h=false;if(!a){if(f&&kt<s*r){if(!Ot&&(Tt===1?u>l+s*o/2:u<c-s*o/2)){Ot=true}if(!Ot){if(Tt===1?u<l+kt:u>c-kt){return-Tt}}else{h=true}}else{if(u>l+s*(1-r)/2&&u<c-s*(1-r)/2){return te(e)}}}h=h||a;if(h){if(u<l+s*o/2||u>c-s*o/2){return u>l+s/2?1:-1}}return 0}function te(t){if(j(tt)<j(t)){return 1}else{return-1}}function ee(t){var e=t.tagName+t.className+t.src+t.href+t.textContent,n=e.length,i=0;while(n--){i+=e.charCodeAt(n)}return i.toString(36)}function ne(t){jt.length=0;var e=t.getElementsByTagName("input");var n=e.length;while(n--){var i=e[n];i.checked&&jt.push(i)}}function ie(t){return setTimeout(t,0)}function re(t){return clearTimeout(t)}if(At){p(document,"touchmove",(function(t){if(($t.active||vt)&&t.cancelable){t.preventDefault()}}))}$t.utils={on:p,off:g,css:x,find:T,is:function t(e,n){return!!E(e,n,e,false)},extend:F,throttle:H,closest:E,toggleClass:I,clone:R,index:j,nextTick:ie,cancelNextTick:re,detectDirection:Bt,getChild:C};$t.get=function(t){return t[W]};$t.mount=function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++){n[i]=arguments[i]}if(n[0].constructor===Array)n=n[0];n.forEach((function(t){if(!t.prototype||!t.prototype.constructor){throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(t))}if(t.utils)$t.utils=e(e({},$t.utils),t.utils);Z.mount(t)}))};$t.create=function(t,e){return new $t(t,e)};$t.version=f;var oe=[],ae,fe,ue=false,se,le,ce,he;function de(){function t(){this.defaults={scroll:true,forceAutoScrollFallback:false,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:true};for(var t in this){if(t.charAt(0)==="_"&&typeof this[t]==="function"){this[t]=this[t].bind(this)}}}t.prototype={dragStarted:function t(e){var n=e.originalEvent;if(this.sortable.nativeDraggable){p(document,"dragover",this._handleAutoScroll)}else{if(this.options.supportPointer){p(document,"pointermove",this._handleFallbackAutoScroll)}else if(n.touches){p(document,"touchmove",this._handleFallbackAutoScroll)}else{p(document,"mousemove",this._handleFallbackAutoScroll)}}},dragOverCompleted:function t(e){var n=e.originalEvent;if(!this.options.dragOverBubble&&!n.rootEl){this._handleAutoScroll(n)}},drop:function t(){if(this.sortable.nativeDraggable){g(document,"dragover",this._handleAutoScroll)}else{g(document,"pointermove",this._handleFallbackAutoScroll);g(document,"touchmove",this._handleFallbackAutoScroll);g(document,"mousemove",this._handleFallbackAutoScroll)}me();ve();G()},nulling:function t(){ce=fe=ae=ue=he=se=le=null;oe.length=0},_handleFallbackAutoScroll:function t(e){this._handleAutoScroll(e,true)},_handleAutoScroll:function t(e,n){var i=this;var r=(e.touches?e.touches[0]:e).clientX,o=(e.touches?e.touches[0]:e).clientY,a=document.elementFromPoint(r,o);ce=e;if(n||this.options.forceAutoScrollFallback||l||s||h){pe(e,this.options,a,n);var f=N(a,true);if(ue&&(!he||r!==se||o!==le)){he&&me();he=setInterval((function(){var t=N(document.elementFromPoint(r,o),true);if(t!==f){f=t;ve()}pe(e,i.options,t,n)}),10);se=r;le=o}}else{if(!this.options.bubbleScroll||N(a,true)===O()){ve();return}pe(e,this.options,N(a,false),false)}}};return r(t,{pluginName:"scroll",initializeByDefault:true})}function ve(){oe.forEach((function(t){clearInterval(t.pid)}));oe=[]}function me(){clearInterval(he)}var pe=H((function(t,e,n,i){if(!e.scroll)return;var r=(t.touches?t.touches[0]:t).clientX,o=(t.touches?t.touches[0]:t).clientY,a=e.scrollSensitivity,f=e.scrollSpeed,u=O();var s=false,l;if(fe!==n){fe=n;ve();ae=e.scroll;l=e.scrollFn;if(ae===true){ae=N(n,true)}}var c=0;var h=ae;do{var d=h,v=M(d),m=v.top,p=v.bottom,g=v.left,b=v.right,w=v.width,E=v.height,y=void 0,I=void 0,S=d.scrollWidth,T=d.scrollHeight,k=x(d),_=d.scrollLeft,C=d.scrollTop;if(d===u){y=w<S&&(k.overflowX==="auto"||k.overflowX==="scroll"||k.overflowX==="visible");I=E<T&&(k.overflowY==="auto"||k.overflowY==="scroll"||k.overflowY==="visible")}else{y=w<S&&(k.overflowX==="auto"||k.overflowX==="scroll");I=E<T&&(k.overflowY==="auto"||k.overflowY==="scroll")}var D=y&&(Math.abs(b-r)<=a&&_+w<S)-(Math.abs(g-r)<=a&&!!_);var j=I&&(Math.abs(p-o)<=a&&C+E<T)-(Math.abs(m-o)<=a&&!!C);if(!oe[c]){for(var A=0;A<=c;A++){if(!oe[A]){oe[A]={}}}}if(oe[c].vx!=D||oe[c].vy!=j||oe[c].el!==d){oe[c].el=d;oe[c].vx=D;oe[c].vy=j;clearInterval(oe[c].pid);if(D!=0||j!=0){s=true;oe[c].pid=setInterval(function(){if(i&&this.layer===0){$t.active._onTouchMove(ce)}var e=oe[this.layer].vy?oe[this.layer].vy*f:0;var n=oe[this.layer].vx?oe[this.layer].vx*f:0;if(typeof l==="function"){if(l.call($t.dragged.parentNode[W],n,e,t,ce,oe[this.layer].el)!=="continue"){return}}L(oe[this.layer].el,n,e)}.bind({layer:c}),24)}}c++}while(e.bubbleScroll&&h!==u&&(h=N(h,false)));ue=s}),30);var ge=function t(e){var n=e.originalEvent,i=e.putSortable,r=e.dragEl,o=e.activeSortable,a=e.dispatchSortableEvent,f=e.hideGhostForTarget,u=e.unhideGhostForTarget;if(!n)return;var s=i||o;f();var l=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:n;var c=document.elementFromPoint(l.clientX,l.clientY);u();if(s&&!s.el.contains(c)){a("spill");this.onSpill({dragEl:r,putSortable:i})}};function be(){}be.prototype={startIndex:null,dragStart:function t(e){var n=e.oldDraggableIndex;this.startIndex=n},onSpill:function t(e){var n=e.dragEl,i=e.putSortable;this.sortable.captureAnimationState();if(i){i.captureAnimationState()}var r=C(this.sortable.el,this.startIndex,this.options);if(r){this.sortable.el.insertBefore(n,r)}else{this.sortable.el.appendChild(n)}this.sortable.animateAll();if(i){i.animateAll()}},drop:ge};r(be,{pluginName:"revertOnSpill"});function we(){}we.prototype={onSpill:function t(e){var n=e.dragEl,i=e.putSortable;var r=i||this.sortable;r.captureAnimationState();n.parentNode&&n.parentNode.removeChild(n);r.animateAll()},drop:ge};r(we,{pluginName:"removeOnSpill"});$t.mount(new de);$t.mount(we,be);
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.10.1
 */const Ee=new Set;const ye={ghostClass:"calcite-sortable--ghost",chosenClass:"calcite-sortable--chosen",dragClass:"calcite-sortable--drag",fallbackClass:"calcite-sortable--fallback"};function Ie(t){if(Te(t)){return}xe(t);Ee.add(t);const e="id";const{group:n,handleSelector:i,dragSelector:r}=t;t.sortable=$t.create(t.el,{dataIdAttr:e,...ye,...!!r&&{draggable:r},...!!n&&{group:{name:n,...!!t.canPull&&{pull:(e,n,i,{newIndex:r,oldIndex:o})=>t.canPull({toEl:e.el,fromEl:n.el,dragEl:i,newIndex:r,oldIndex:o})},...!!t.canPut&&{put:(e,n,i,{newIndex:r,oldIndex:o})=>t.canPut({toEl:e.el,fromEl:n.el,dragEl:i,newIndex:r,oldIndex:o})}}},handle:i,filter:`${i}[disabled]`,onStart:({from:e,item:n,to:i,newIndex:r,oldIndex:o})=>{Se.active=true;Oe();t.onDragStart({fromEl:e,dragEl:n,toEl:i,newIndex:r,oldIndex:o})},onEnd:({from:e,item:n,to:i,newIndex:r,oldIndex:o})=>{Se.active=false;Me();t.onDragEnd({fromEl:e,dragEl:n,toEl:i,newIndex:r,oldIndex:o})},onSort:({from:e,item:n,to:i,newIndex:r,oldIndex:o})=>{t.onDragSort({fromEl:e,dragEl:n,toEl:i,newIndex:r,oldIndex:o})}})}function xe(t){if(Te(t)){return}Ee.delete(t);t.sortable?.destroy();t.sortable=null}const Se={active:false};function Te(t){return t.dragEnabled&&Se.active}function Oe(){Array.from(Ee).forEach((t=>t.onGlobalDragStart()))}function Me(){Array.from(Ee).forEach((t=>t.onGlobalDragEnd()))}export{Ie as c,xe as d};
//# sourceMappingURL=p-2bb100d2.js.map