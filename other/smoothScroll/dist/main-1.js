(()=>{var o={523:o=>{!function(){"use strict";o.exports={polyfill:function(){var o=window,t=document;if(!("scrollBehavior"in t.documentElement.style)||!0===o.__forceSmoothScrollPolyfill__){var l,e=o.HTMLElement||o.Element,r={scroll:o.scroll||o.scrollTo,scrollBy:o.scrollBy,elementScroll:e.prototype.scroll||c,scrollIntoView:e.prototype.scrollIntoView},s=o.performance&&o.performance.now?o.performance.now.bind(o.performance):Date.now,i=(l=o.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(l)?1:0);o.scroll=o.scrollTo=function(){void 0!==arguments[0]&&(!0!==n(arguments[0])?h.call(o,t.body,void 0!==arguments[0].left?~~arguments[0].left:o.scrollX||o.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:o.scrollY||o.pageYOffset):r.scroll.call(o,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:o.scrollX||o.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:o.scrollY||o.pageYOffset))},o.scrollBy=function(){void 0!==arguments[0]&&(n(arguments[0])?r.scrollBy.call(o,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):h.call(o,t.body,~~arguments[0].left+(o.scrollX||o.pageXOffset),~~arguments[0].top+(o.scrollY||o.pageYOffset)))},e.prototype.scroll=e.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==n(arguments[0])){var o=arguments[0].left,t=arguments[0].top;h.call(this,this,void 0===o?this.scrollLeft:~~o,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},e.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==n(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},e.prototype.scrollIntoView=function(){if(!0!==n(arguments[0])){var l=d(this),e=l.getBoundingClientRect(),s=this.getBoundingClientRect();l!==t.body?(h.call(this,l,l.scrollLeft+s.left-e.left,l.scrollTop+s.top-e.top),"fixed"!==o.getComputedStyle(l).position&&o.scrollBy({left:e.left,top:e.top,behavior:"smooth"})):o.scrollBy({left:s.left,top:s.top,behavior:"smooth"})}else r.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function c(o,t){this.scrollLeft=o,this.scrollTop=t}function n(o){if(null===o||"object"!=typeof o||void 0===o.behavior||"auto"===o.behavior||"instant"===o.behavior)return!0;if("object"==typeof o&&"smooth"===o.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+o.behavior+" is not a valid value for enumeration ScrollBehavior.")}function f(o,t){return"Y"===t?o.clientHeight+i<o.scrollHeight:"X"===t?o.clientWidth+i<o.scrollWidth:void 0}function a(t,l){var e=o.getComputedStyle(t,null)["overflow"+l];return"auto"===e||"scroll"===e}function p(o){var t=f(o,"Y")&&a(o,"Y"),l=f(o,"X")&&a(o,"X");return t||l}function d(o){for(;o!==t.body&&!1===p(o);)o=o.parentNode||o.host;return o}function v(t){var l,e,r,i,c=(s()-t.startTime)/468;i=c=c>1?1:c,l=.5*(1-Math.cos(Math.PI*i)),e=t.startX+(t.x-t.startX)*l,r=t.startY+(t.y-t.startY)*l,t.method.call(t.scrollable,e,r),e===t.x&&r===t.y||o.requestAnimationFrame(v.bind(o,t))}function h(l,e,i){var n,f,a,p,d=s();l===t.body?(n=o,f=o.scrollX||o.pageXOffset,a=o.scrollY||o.pageYOffset,p=r.scroll):(n=l,f=l.scrollLeft,a=l.scrollTop,p=c),v({scrollable:n,method:p,startTime:d,startX:f,startY:a,x:e,y:i})}}}}()}},t={};function l(e){var r=t[e];if(void 0!==r)return r.exports;var s=t[e]={exports:{}};return o[e](s,s.exports,l),s.exports}l.n=o=>{var t=o&&o.__esModule?()=>o.default:()=>o;return l.d(t,{a:t}),t},l.d=(o,t)=>{for(var e in t)l.o(t,e)&&!l.o(o,e)&&Object.defineProperty(o,e,{enumerable:!0,get:t[e]})},l.o=(o,t)=>Object.prototype.hasOwnProperty.call(o,t),(()=>{"use strict";var o=l(523);l.n(o)().polyfill(),document.addEventListener("click",(o=>{const t=o.target;if(!t.classList.contains("js-smooth-scroll"))return;o.preventDefault();const l=t.hash;document.querySelector(l).scrollIntoView({behavior:"smooth",block:"start"})}))})()})();