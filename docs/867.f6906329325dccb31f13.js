(self.webpackChunkspotify_app=self.webpackChunkspotify_app||[]).push([[867],{8238:(P,W,y)=>{"use strict";y.d(W,{a9:()=>T,a5:()=>m});var p=y(639),x=y(7266);class g{constructor(s,f,A,a,l){this.element=s,this.newWidth=f,this.newHeight=A,this.oldWidth=a,this.oldHeight=l}}let m=(()=>{class r{constructor(f){this.element=f,this.resized=new p.vpe}ngOnInit(){x.ResizeSensor&&(this.resizeSensor=new x.ResizeSensor(this.element.nativeElement,()=>this.onResized()))}ngOnDestroy(){this.resizeSensor&&this.resizeSensor.detach()}onResized(){const f=this.element.nativeElement.clientWidth,A=this.element.nativeElement.clientHeight;if(f===this.oldWidth&&A===this.oldHeight)return;const a=new g(this.element,f,A,this.oldWidth,this.oldHeight);this.oldWidth=this.element.nativeElement.clientWidth,this.oldHeight=this.element.nativeElement.clientHeight,this.resized.emit(a)}}return r.\u0275fac=function(f){return new(f||r)(p.Y36(p.SBq))},r.\u0275dir=p.lG2({type:r,selectors:[["","resized",""]],outputs:{resized:"resized"}}),r})(),T=(()=>{class r{}return r.\u0275fac=function(f){return new(f||r)},r.\u0275mod=p.oAB({type:r}),r.\u0275inj=p.cJS({imports:[[]]}),r})()},7266:(P,W,y)=>{P.exports={ResizeSensor:y(9835),ElementQueries:y(4845)}},4845:function(P,W,y){"use strict";var p,x,w;"undefined"!=typeof window&&window,x=[y(9835)],void 0!==(w="function"==typeof(p=function(g){var m=function(){var r,s={},f=[];function A(e){e||(e=document.documentElement);var t=window.getComputedStyle(e,null).fontSize;return parseFloat(t)||16}function l(e,t){var i=t.split(/\d/),o=i[i.length-1];switch(t=parseFloat(t),o){case"px":return t;case"em":return t*A(e);case"rem":return t*A();case"vw":return t*document.documentElement.clientWidth/100;case"vh":return t*document.documentElement.clientHeight/100;case"vmin":case"vmax":var u=document.documentElement.clientWidth/100,v=document.documentElement.clientHeight/100;return t*(0,Math["vmin"===o?"min":"max"])(u,v);default:return t}}function d(e,t){this.element=e;var i,o,u,v,z,h,E,M,O=["min-width","min-height","max-width","max-height"];this.call=function(){for(i in u=function(e){if(!e.getBoundingClientRect)return{width:e.offsetWidth,height:e.offsetHeight};var t=e.getBoundingClientRect();return{width:Math.round(t.width),height:Math.round(t.height)}}(this.element),h={},s[t])!s[t].hasOwnProperty(i)||(v=l(this.element,(o=s[t][i]).value),z="width"===o.property?u.width:u.height,E="","min"===o.mode&&z>=v&&(E+=o.value),"max"===o.mode&&z<=v&&(E+=o.value),h[M=o.mode+"-"+o.property]||(h[M]=""),E&&-1===(" "+h[M]+" ").indexOf(" "+E+" ")&&(h[M]+=" "+E));for(var D in O)!O.hasOwnProperty(D)||(h[O[D]]?this.element.setAttribute(O[D],h[O[D]].substr(1)):this.element.removeAttribute(O[D]))}}function R(e,t){e.elementQueriesSetupInformation||(e.elementQueriesSetupInformation=new d(e,t)),e.elementQueriesSensor||(e.elementQueriesSensor=new g(e,function(){e.elementQueriesSetupInformation.call()}))}function L(e,t,i,o){if(void 0===s[e]){s[e]=[];var u=f.length;r.innerHTML+="\n"+e+" {animation: 0.1s element-queries;}",r.innerHTML+="\n"+e+" > .resize-sensor {min-width: "+u+"px;}",f.push(e)}s[e].push({mode:t,property:i,value:o})}function n(e){var t;if(document.querySelectorAll&&(t=e?e.querySelectorAll.bind(e):document.querySelectorAll.bind(document)),!t&&"undefined"!=typeof $$&&(t=$$),!t&&"undefined"!=typeof jQuery&&(t=jQuery),!t)throw"No document.querySelectorAll, jQuery or Mootools's $$ found.";return t}function b(e){var t=[],i=[],o=[],u=0,v=-1,z=[];for(var h in e.children)if(e.children.hasOwnProperty(h)&&e.children[h].tagName&&"img"===e.children[h].tagName.toLowerCase()){t.push(e.children[h]);var E=e.children[h].getAttribute("min-width")||e.children[h].getAttribute("data-min-width"),M=e.children[h].getAttribute("data-src")||e.children[h].getAttribute("url");o.push(M),i.push({minWidth:E}),E?e.children[h].style.display="none":(u=t.length-1,e.children[h].style.display="block")}function D(){var C,c=!1;for(C in t)!t.hasOwnProperty(C)||i[C].minWidth&&e.offsetWidth>i[C].minWidth&&(c=C);if(c||(c=u),v!==c)if(z[c])t[v].style.display="none",t[c].style.display="block",v=c;else{var N=new Image;N.onload=function(){t[c].src=o[c],t[v].style.display="none",t[c].style.display="block",z[c]=!0,v=c},N.src=o[c]}else t[c].src=o[c]}v=u,e.resizeSensorInstance=new g(e,D),D()}var _=/,?[\s\t]*([^,\n]*?)((?:\[[\s\t]*?(?:min|max)-(?:width|height)[\s\t]*?[~$\^]?=[\s\t]*?"[^"]*?"[\s\t]*?])+)([^,\n\s\{]*)/gim,H=/\[[\s\t]*?(min|max)-(width|height)[\s\t]*?[~$\^]?=[\s\t]*?"([^"]*?)"[\s\t]*?]/gim;function I(e){var t,i,o,u;for(e=e.replace(/'/g,'"');null!==(t=_.exec(e));)for(i=t[1]+t[3],o=t[2];null!==(u=H.exec(o));)L(i,u[1],u[2],u[3])}function F(e){var t="";if(e)if("string"==typeof e)(-1!==(e=e.toLowerCase()).indexOf("min-width")||-1!==e.indexOf("max-width"))&&I(e);else for(var i=0,o=e.length;i<o;i++)1===e[i].type?(-1!==(t=e[i].selectorText||e[i].cssText).indexOf("min-height")||-1!==t.indexOf("max-height")||-1!==t.indexOf("min-width")||-1!==t.indexOf("max-width"))&&I(t):4===e[i].type?F(e[i].cssRules||e[i].rules):3===e[i].type&&e[i].styleSheet.hasOwnProperty("cssRules")&&F(e[i].styleSheet.cssRules)}var B=!1;this.init=function(){var e="animationstart";void 0!==document.documentElement.style.webkitAnimationName?e="webkitAnimationStart":void 0!==document.documentElement.style.MozAnimationName?e="mozanimationstart":void 0!==document.documentElement.style.OAnimationName&&(e="oanimationstart"),document.body.addEventListener(e,function(o){var u=o.target,v=u&&window.getComputedStyle(u,null),z=v&&v.getPropertyValue("animation-name");if(z&&-1!==z.indexOf("element-queries")){u.elementQueriesSensor=new g(u,function(){u.elementQueriesSetupInformation&&u.elementQueriesSetupInformation.call()});var M=window.getComputedStyle(u.resizeSensor,null).getPropertyValue("min-width");M=parseInt(M.replace("px","")),R(o.target,f[M])}}),B||((r=document.createElement("style")).type="text/css",r.innerHTML="[responsive-image] > img, [data-responsive-image] {overflow: hidden; padding: 0; } [responsive-image] > img, [data-responsive-image] > img {width: 100%;}",r.innerHTML+="\n@keyframes element-queries { 0% { visibility: inherit; } }",document.getElementsByTagName("head")[0].appendChild(r),B=!0);for(var t=0,i=document.styleSheets.length;t<i;t++)try{document.styleSheets[t].href&&0===document.styleSheets[t].href.indexOf("file://")&&console.warn("CssElementQueries: unable to parse local css files, "+document.styleSheets[t].href),F(document.styleSheets[t].cssRules||document.styleSheets[t].rules||document.styleSheets[t].cssText)}catch(o){}!function(){for(var t=n()("[data-responsive-image],[responsive-image]"),i=0,o=t.length;i<o;i++)b(t[i])}()},this.findElementQueriesElements=function(e){!function(e){var t=n(e);for(var i in s)if(s.hasOwnProperty(i))for(var o=t(i,e),u=0,v=o.length;u<v;u++)R(o[u],i)}(e)},this.update=function(){this.init()}};m.update=function(){m.instance.update()},m.detach=function(r){r.elementQueriesSetupInformation?(r.elementQueriesSensor.detach(),delete r.elementQueriesSetupInformation,delete r.elementQueriesSensor):r.resizeSensorInstance&&(r.resizeSensorInstance.detach(),delete r.resizeSensorInstance)},m.init=function(){m.instance||(m.instance=new m),m.instance.init()};return m.findElementQueriesElements=function(r){m.instance.findElementQueriesElements(r)},m.listen=function(){!function(r){if(document.addEventListener)document.addEventListener("DOMContentLoaded",r,!1);else if(/KHTML|WebKit|iCab/i.test(navigator.userAgent))var s=setInterval(function(){/loaded|complete/i.test(document.readyState)&&(r(),clearInterval(s))},10);else window.onload=r}(m.init)},m})?p.apply(W,x):p)&&(P.exports=w)},9835:function(P,W,y){"use strict";var p,x;"undefined"!=typeof window&&window,void 0!==(x="function"==typeof(p=function(){if("undefined"==typeof window)return null;var w="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),g=w.requestAnimationFrame||w.mozRequestAnimationFrame||w.webkitRequestAnimationFrame||function(a){return w.setTimeout(a,20)},m=w.cancelAnimationFrame||w.mozCancelAnimationFrame||w.webkitCancelAnimationFrame||function(a){w.clearTimeout(a)};function T(a,l){var d=Object.prototype.toString.call(a),R="[object Array]"===d||"[object NodeList]"===d||"[object HTMLCollection]"===d||"[object Object]"===d||"undefined"!=typeof jQuery&&a instanceof jQuery||"undefined"!=typeof Elements&&a instanceof Elements,L=0,n=a.length;if(R)for(;L<n;L++)l(a[L]);else l(a)}function r(a){if(!a.getBoundingClientRect)return{width:a.offsetWidth,height:a.offsetHeight};var l=a.getBoundingClientRect();return{width:Math.round(l.width),height:Math.round(l.height)}}function s(a,l){Object.keys(l).forEach(function(d){a.style[d]=l[d]})}var f=function(a,l){var d=0;function R(){var S,b,n=[];this.add=function(Q){n.push(Q)},this.call=function(Q){for(S=0,b=n.length;S<b;S++)n[S].call(this,Q)},this.remove=function(Q){var _=[];for(S=0,b=n.length;S<b;S++)n[S]!==Q&&_.push(n[S]);n=_},this.length=function(){return n.length}}function L(n,S){if(n){if(n.resizedAttached)return void n.resizedAttached.add(S);n.resizedAttached=new R,n.resizedAttached.add(S),n.resizeSensor=document.createElement("div"),n.resizeSensor.dir="ltr",n.resizeSensor.className="resize-sensor";var b={pointerEvents:"none",position:"absolute",left:"0px",top:"0px",right:"0px",bottom:"0px",overflow:"hidden",zIndex:"-1",visibility:"hidden",maxWidth:"100%"},Q={position:"absolute",left:"0px",top:"0px",transition:"0s"};s(n.resizeSensor,b);var _=document.createElement("div");_.className="resize-sensor-expand",s(_,b);var H=document.createElement("div");s(H,Q),_.appendChild(H);var I=document.createElement("div");I.className="resize-sensor-shrink",s(I,b);var F=document.createElement("div");s(F,Q),s(F,{width:"200%",height:"200%"}),I.appendChild(F),n.resizeSensor.appendChild(_),n.resizeSensor.appendChild(I),n.appendChild(n.resizeSensor);var B=window.getComputedStyle(n),e=B?B.getPropertyValue("position"):null;"absolute"!==e&&"relative"!==e&&"fixed"!==e&&"sticky"!==e&&(n.style.position="relative");var t=!1,i=0,o=r(n),u=0,v=0,z=!0;d=0;var E=function(){if(z){if(0===n.offsetWidth&&0===n.offsetHeight)return void(d||(d=g(function(){d=0,E()})));z=!1}var c,C;C=n.offsetHeight,H.style.width=(c=n.offsetWidth)+10+"px",H.style.height=C+10+"px",_.scrollLeft=c+10,_.scrollTop=C+10,I.scrollLeft=c+10,I.scrollTop=C+10};n.resizeSensor.resetSensor=E;var M=function(){i=0,t&&(u=o.width,v=o.height,n.resizedAttached&&n.resizedAttached.call(o))},O=function(){o=r(n),(t=o.width!==u||o.height!==v)&&!i&&(i=g(M)),E()},D=function(c,C,N){c.attachEvent?c.attachEvent("on"+C,N):c.addEventListener(C,N)};D(_,"scroll",O),D(I,"scroll",O),d=g(function(){d=0,E()})}}T(a,function(n){L(n,l)}),this.detach=function(n){d||(m(d),d=0),f.detach(a,n)},this.reset=function(){a.resizeSensor.resetSensor()}};if(f.reset=function(a){T(a,function(l){l.resizeSensor.resetSensor()})},f.detach=function(a,l){T(a,function(d){!d||d.resizedAttached&&"function"==typeof l&&(d.resizedAttached.remove(l),d.resizedAttached.length())||d.resizeSensor&&(d.contains(d.resizeSensor)&&d.removeChild(d.resizeSensor),delete d.resizeSensor,delete d.resizedAttached)})},"undefined"!=typeof MutationObserver){var A=new MutationObserver(function(a){for(var l in a)if(a.hasOwnProperty(l))for(var d=a[l].addedNodes,R=0;R<d.length;R++)d[R].resizeSensor&&f.reset(d[R])});document.addEventListener("DOMContentLoaded",function(a){A.observe(document.body,{childList:!0,subtree:!0})})}return f})?p.call(W,y,W,P):p)&&(P.exports=x)},2867:(P,W,y)=>{"use strict";y.d(W,{S:()=>r});var p=y(8583),x=y(8905),w=y(1686),g=y(639);let m=(()=>{class s{}return s.\u0275fac=function(A){return new(A||s)},s.\u0275mod=g.oAB({type:s}),s.\u0275inj=g.cJS({imports:[[p.ez,w.Bz,x.D]]}),s})();var T=y(8238);let r=(()=>{class s{}return s.\u0275fac=function(A){return new(A||s)},s.\u0275mod=g.oAB({type:s}),s.\u0275inj=g.cJS({imports:[[p.ez,T.a9,m]]}),s})()}}]);