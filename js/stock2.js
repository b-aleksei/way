!function(){var e={179:function(){new window.$mediashop.Swiper(".product-card-container",{slidesPerView:"auto",navigation:{nextEl:".btn-slider--next",prevEl:".btn-slider--prev"},on:{slideChange:function(e){e.isEnd||e.el.classList.remove("shadow-disable")},reachEnd:function(e){e.el.classList.add("shadow-disable")}}});var e=function(){return new window.$mediashop.Swiper(".catalog__tags-container",{freeMode:!0,slidesPerView:"auto"})},t=function(){return new window.$mediashop.Swiper(".catalog__review-container",{slidesPerView:"auto",navigation:{nextEl:".btn-slider--next",prevEl:".btn-slider--prev"},on:{slideChange:function(e){e.isEnd||e.el.classList.remove("shadow-disable")},reachEnd:function(e){e.el.classList.add("shadow-disable")}}})},n=window.$mediashop.breakpoints.m,r=null,i=null,o=!1,a=!1;document.documentElement.clientWidth>=n?(r=t(),o=!0):(i=e(),a=!0,setTimeout((function(){i.update()}))),window.addEventListener("resize",(function(){if(document.documentElement.clientWidth<n)return o&&(r.destroy(),o=!1),void(a||(i=e(),a=!0));document.documentElement.clientWidth>=n&&(o||(r=t(),o=!0),a&&(i.destroy(),a=!1))}))},450:function(){var e,t,n,r,i=new Date(2021,5,2),o=null,a=document.querySelector(".stock-timer-js"),s=function(e){return(e<10?"0":"")+e},c=["день","дня","дней"],u=function(){var u,l,d=Date.now();if(i>d){var h=(i-d)/1e3;e=Math.round(h/86400),h%=86400,t=s(Math.round(h/3600)),h%=3600,n=s(Math.round(h/60)),r=s(Math.round(h%60))}else e="0",t="00",n="00",r="00",clearInterval(o);a.innerHTML="<span>".concat(e," ").concat((u=e,l=c,l[u%100>4&&u%100<20?2:[2,0,1,1,1,2][u%10<5?u%10:5]]),"</span>, <span>").concat(t,":</span><span>").concat(n,":</span><span>").concat(r,"</span>")};u(),o=setInterval((function(){u()}),1e3)},351:function(e,t,n){"use strict";var r=n(994),i=n.n(r),o=n(476),a=n.n(o)()(i());a.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]),t.Z=a},671:function(e,t,n){"use strict";var r=n(994),i=n.n(r),o=n(476),a=n.n(o)()(i());a.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]),t.Z=a},476:function(e){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&i[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},994:function(e){"use strict";function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}e.exports=function(e){var n,r,i=(r=4,function(e){if(Array.isArray(e))return e}(n=e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}return n}}(n,r)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=i[1],a=i[3];if("function"==typeof btoa){var s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),u="/*# ".concat(c," */"),l=a.sources.map((function(e){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(e," */")}));return[o].concat(l).concat([u]).join("\n")}return[o].join("\n")}},892:function(e,t,n){"use strict";var r,i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),o=[];function a(e){for(var t=-1,n=0;n<o.length;n++)if(o[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},r=[],i=0;i<e.length;i++){var s=e[i],c=t.base?s[0]+t.base:s[0],u=n[c]||0,l="".concat(c," ").concat(u);n[c]=u+1;var d=a(l),h={css:s[1],media:s[2],sourceMap:s[3]};-1!==d?(o[d].references++,o[d].updater(h)):o.push({identifier:l,updater:p(h,t),references:1}),r.push(l)}return r}function c(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var u,l=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function d(e,t,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function h(e,t,n){var r=n.css,i=n.media,o=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,m=0;function p(e,t){var n,r,i;if(t.singleton){var o=m++;n=f||(f=c(t)),r=d.bind(null,n,o,!1),i=d.bind(null,n,o,!0)}else n=c(t),r=h.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var i=a(n[r]);o[i].references--}for(var c=s(e,t),u=0;u<n.length;u++){var l=a(n[u]);0===o[l].references&&(o[l].updater(),o.splice(l,1))}n=c}}}}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";var e=n(892),t=n.n(e),r=n(351),i=(t()(r.Z,{insert:"head",singleton:!1}),r.Z.locals,n(671));function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}t()(i.Z,{insert:"head",singleton:!1}),i.Z.locals,n(450);var a=function(){function e(t){var n=this;(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.$el=this.getHtmlElement(t),this.$el&&(this.dom=this.mapDOM(this.$el),this.eventNames={pointerdown:"pointerdown",pointermove:"pointermove",pointerup:"pointerup"},this._rangeKeys=["low","high"],this.$el.addEventListener(this.eventNames.pointerdown,this),this.$el.addEventListener("input",this),new ResizeObserver((function(){n.updateSlider()})).observe(this.$el),this.init())}var t,n;return t=e,(n=[{key:"init",value:function(){var e=this;this._rangeKeys.forEach((function(t){e.dom.inputs[t].min=e.$el.dataset.min,e.dom.inputs[t].max=e.$el.dataset.max,e.dom.inputs[t].step=e.$el.dataset.step,e.dom.inputs[t].value=e.$el.dataset[t]}))}},{key:"renderSlider",value:function(e,t){var n=t-this.$el.dataset.min,r="low"===e?"--start-fill":"--end-fill",i=Math.round(n/this.valueRange*this.trackWidth);this.dom.thumbs[e].style.transform="translate3d(".concat(i,"px, 0, 0)"),this.dom.thumbs[e].dataset.translate="".concat(i),this.dom.outputs[e].dataset.value=t,this.dom.track.style.setProperty(r,i+"px")}},{key:"updateSlider",value:function(){var e=this;this._rangeKeys.forEach((function(t){e.renderSlider(t,e.dom.inputs[t].value)}))}},{key:"handleEvent",value:function(e){var t,n,r=null===(t=(n=e.target).closest)||void 0===t?void 0:t.call(n,".thumb");if(r)switch(e.type){case this.eventNames.pointerdown:this._shift=e.clientX-r.dataset.translate,r.setPointerCapture(e.pointerId),r.addEventListener(this.eventNames.pointermove,this),r.addEventListener(this.eventNames.pointerup,this);break;case this.eventNames.pointermove:var i=r.dataset.key;this.dom.inputs[i].focus();var o=(e.clientX-this._shift)/this.trackWidth*this.valueRange+Number(this.$el.dataset.min);this.setRangeValue(i,o);break;case this.eventNames.pointerup:r.removeEventListener(this.eventNames.pointermove,this),r.removeEventListener(this.eventNames.pointerup,this);break;case"input":this.setRangeValue(e.target.dataset.key,e.target.value)}}},{key:"setRangeValue",value:function(e,t){if("low"===e){var n=this.dom.inputs.high,r=+n.value;t>=r&&(t=r-n.step)}if("high"===e){var i=this.dom.inputs.low,o=+i.value;t<=o&&(t=o+Number(i.step))}this.dom.inputs[e].value=t,this.renderSlider(e,this.dom.inputs[e].value),this.$el.dataset[e]=t}},{key:"getHtmlElement",value:function(e){var t="string"==typeof e?document.querySelector(e):e;if(t instanceof HTMLElement)return t}},{key:"mapDOM",value:function(e){return{track:e.querySelector(".track"),thumbs:{low:e.querySelector('.thumb[data-key="low"]'),high:e.querySelector('.thumb[data-key="high"]')},outputs:{low:e.querySelector('output[data-key="low"]'),high:e.querySelector('output[data-key="high"]')},inputs:{low:e.querySelector('input[data-key="low"]'),high:e.querySelector('input[data-key="high"]')}}}},{key:"trackWidth",get:function(){return this.dom.track.offsetWidth-this.dom.thumbs.high.offsetWidth}},{key:"valueRange",get:function(){return this.$el.dataset.max-this.$el.dataset.min}}])&&o(t.prototype,n),e}(),s=n(179),c=window.$mediashop.breakpoints.m,u=document.querySelector(".sort-view"),l=document.querySelector(".product-card-list");u&&l&&u.addEventListener("change",(function(e){var t=e.target;l.className="product-card-list ".concat(t.value)}));var d=null;new a(".double-range"),document.addEventListener("click",(function(e){var t=e.target,n=t.closest(".filters__load-items"),r=t.closest(".filters__title"),i=t.closest(".catalog__sort-item"),o=t.closest(".current-filter-remove");if(!o)return r?(r.classList.toggle("filters__title-active"),void(r.parentElement.classList.contains("btn-hidden")&&(r.parentElement.classList.remove("btn-hidden"),r.parentElement.style.setProperty("--total-items",d||"1")))):n?(d=getComputedStyle(n.parentElement).getPropertyValue("--total-items"),n.parentElement.style.setProperty("--total-items","999"),void n.parentElement.classList.add("btn-hidden")):void(i&&document.documentElement.clientWidth<c&&setTimeout((function(){window.$mediashop.modal.close()}),300));o.parentElement.classList.add("hidden")}));var h=!1,f=!1,m=!1,p=!1,v=document.querySelector(".filters__caption"),y=document.querySelector(".filters__buttons"),g=document.querySelector(".filters-wrap");g.addEventListener("scroll",(function(){return h=0!==g.scrollTop,f=g.scrollHeight===g.scrollTop+g.clientHeight,h?h&&!m?(v.classList.add("shadows-header"),void(m=!0)):p?(y.classList.add("shadows-footer"),void(p=!1)):void(f&&!p&&(y.classList.remove("shadows-footer"),p=!0)):(v.classList.remove("shadows-header"),void(m=!1))}),{passive:!0});var w=document.querySelector(".catalog__tags-wrapper"),b=document.querySelector(".current-filter-js");w.addEventListener("change",(function(e){var t=e.target;b.innerHTML=t.nextElementSibling.innerHTML,b.parentElement.classList.remove("hidden")}));var E=null,S=null,L=!1,k=!1;document.documentElement.clientWidth>=c?(E=(0,s.reviewSlider)(),L=!0):(S=(0,s.tagSlider)(),k=!0,setTimeout((function(){S.update()}))),window.addEventListener("resize",(function(){if(document.documentElement.clientWidth<c)return L&&(E.destroy(),L=!1),void(k||(S=(0,s.tagSlider)(),k=!0));document.documentElement.clientWidth>=c&&(L||(E=(0,s.reviewSlider)(),L=!0),k&&(S.destroy(),k=!1))})),customElements.get("double-range")||customElements.define("double-range",a)}()}();