!function(){"use strict";var e={921:function(e,n,t){var r=t(994),i=t.n(r),o=t(476),a=t.n(o)()(i());a.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]),n.Z=a},476:function(e){e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&i[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},994:function(e){function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}e.exports=function(e){var t,r,i=(r=4,function(e){if(Array.isArray(e))return e}(t=e)||function(e,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,i=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return t}}(t,r)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=i[1],a=i[3];if("function"==typeof btoa){var c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),d="/*# ".concat(s," */"),l=a.sources.map((function(e){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(e," */")}));return[o].concat(l).concat([d]).join("\n")}return[o].join("\n")}},892:function(e,n,t){var r,i=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),o=[];function a(e){for(var n=-1,t=0;t<o.length;t++)if(o[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},r=[],i=0;i<e.length;i++){var c=e[i],s=n.base?c[0]+n.base:c[0],d=t[s]||0,l="".concat(s," ").concat(d);t[s]=d+1;var u=a(l),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(o[u].references++,o[u].updater(f)):o.push({identifier:l,updater:m(f,n),references:1}),r.push(l)}return r}function s(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var d,l=(d=[],function(e,n){return d[e]=n,d.filter(Boolean).join("\n")});function u(e,n,t,r){var i=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(n,i);else{var o=document.createTextNode(i),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(o,a[n]):e.appendChild(o)}}function f(e,n,t){var r=t.css,i=t.media,o=t.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,v=0;function m(e,n){var t,r,i;if(n.singleton){var o=v++;t=p||(p=s(n)),r=u.bind(null,t,o,!1),i=u.bind(null,t,o,!0)}else t=s(n),r=f.bind(null,t,n),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else i()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var i=a(t[r]);o[i].references--}for(var s=c(e,n),d=0;d<t.length;d++){var l=a(t[d]);0===o[l].references&&(o[l].updater(),o.splice(l,1))}t=s}}}}},n={};function t(r){var i=n[r];if(void 0!==i)return i.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,{a:n}),n},t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},function(){var e=t(892),n=t.n(e),r=t(921);n()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;var i,o,a,c=window.$mediashop.breakpoints.m,s={slidesPerView:"auto",pagination:{el:".slider-pagination",clickable:!0},navigation:{nextEl:".preview-slider-btn-next",prevEl:".preview-slider-btn-prev "},thumbs:{swiper:new window.$mediashop.Swiper(".preview-slider-thumb",{slidesPerView:"auto",freeMode:!0,freeModeSticky:!0})},on:{click:function(e){e.clickedIndex>=0&&window.$mediashop.modal.open("card-slider",{beforeOpen:function(e){var n,t,r,i,o,a;n=e.modal,t=document.querySelector(".card-preview__slider"),r=n.querySelector(".card-slider-modal__body"),o=(i=t.cloneNode(!0)).querySelector(".preview-slider"),a=i.querySelector(".preview-slider-thumb__wrap"),i.querySelector(".preview-slider-container").insertAdjacentHTML("beforeend",'<div class="preview-slider-pagination"></div>'),i.querySelectorAll(".btn-slider").forEach((function(e){return e.classList.add(e.classList.contains("slider-btn-prev")?"btn-modal-prev":"btn-modal-next")})),o.removeAttribute("id"),a.removeAttribute("id"),r.append(i)},modalMounted:function(n){var t,r;t=e.activeIndex,r=null,document.documentElement.clientWidth>=window.$mediashop.breakpoints.m&&(r=new window.$mediashop.Swiper(".card-slider-modal .preview-slider-thumb",{direction:"vertical",slidesPerView:"auto",freeMode:!0,freeModeSticky:!0,spaceBetween:50,slidesOffsetAfter:50})),new window.$mediashop.Swiper(".card-slider-modal .preview-slider-container",{slidesPerView:"auto",initialSlide:t,navigation:{nextEl:".btn-modal-next",prevEl:".btn-modal-prev"},pagination:{el:".preview-slider-pagination",type:"fraction"},thumbs:{swiper:r},on:{activeIndexChange:function(e){window.$mediashop.previewSliderActiveIndex=e.activeIndex}}})},beforeClose:function(){e.slideTo(window.$mediashop.previewSliderActiveIndex||0,0)}})}}};new window.$mediashop.Swiper(".preview-slider-container",s),new window.$mediashop.Swiper(".options-slider",{pagination:{el:".slider-pagination",clickable:!0},breakpoints:(i={},o=c,a={slidesPerView:5},o in i?Object.defineProperty(i,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):i[o]=a,i)}),new window.$mediashop.Swiper(".product-card-container",{slidesPerView:"auto",navigation:{nextEl:".slider-btn-next",prevEl:".slider-btn-prev"},on:{slideChange:function(e){e.isEnd||e.el.classList.remove("shadow-disable")},reachEnd:function(e){e.el.classList.add("shadow-disable")}}}),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,n=e.querySelector(".feedback-modal__gallery"),t=e.querySelector("#fileLoader");if(n&&t){var r=function(e){return/\.(webp|png|jpe?g|avif)$/i.test(e)};t.addEventListener("change",(function(e){var t=e.target,i="";Array.prototype.forEach.call(t.files,(function(e){r(e.name)&&(i+='\n      <div class="feedback-modal__img">\n        <img src="'.concat(URL.createObjectURL(e),'" width="110" height="60" alt="фото пользователя">\n        <button class="remove-img" type="button" aria-label="удалить фото"></button>\n      </div>\n      '))})),n.insertAdjacentHTML("afterbegin",i)}))}}();var d=!1,l=window.$mediashop.breakpoints.m;document.addEventListener("click",(function(e){var n=e.target.closest(".card-main__accordion-title"),t=e.target.closest(".remove-img");n&&(!d&&n.classList.contains("card-main__accordion-review")&&(d=!0,document.querySelector(".card-main__iframe").insertAdjacentHTML("beforeend",'<iframe src="https://www.youtube.com/embed/3MAfK4vN1Hw" allowfullscreen="" width="16" height="9"></iframe>')),function(e){var n=e.closest(".accordion");if(n)if(e.classList.contains("active"))e.classList.remove("active");else{var t=n.querySelector(".accordion__title.active");t&&t.classList.remove("active"),e.classList.add("active")}}(n)),t&&t.parentElement.remove()}));var u=!1,f=function(){document.querySelector(".card-main__accordion-title.active")||document.querySelector(".card-main__accordion-title").classList.add("active"),u=!0};document.documentElement.clientWidth>=l&&f(),window.addEventListener("resize",(function(){document.documentElement.clientWidth>=l&&!u?f():u=!1}))}()}();