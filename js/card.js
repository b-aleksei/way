!function(){"use strict";var e={921:function(e,t,n){var r=n(994),i=n.n(r),o=n(476),a=n.n(o)()(i());a.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]),t.Z=a},476:function(e){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&i[d[0]]||(n&&(d[2]?d[2]="".concat(n," and ").concat(d[2]):d[2]=n),t.push(d))}},t}},994:function(e){function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}e.exports=function(e){var n,r,i=(r=4,function(e){if(Array.isArray(e))return e}(n=e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,i=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return n}}(n,r)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=i[1],a=i[3];if("function"==typeof btoa){var c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),d="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),l="/*# ".concat(d," */"),s=a.sources.map((function(e){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(e," */")}));return[o].concat(s).concat([l]).join("\n")}return[o].join("\n")}},892:function(e,t,n){var r,i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),o=[];function a(e){for(var t=-1,n=0;n<o.length;n++)if(o[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],i=0;i<e.length;i++){var c=e[i],d=t.base?c[0]+t.base:c[0],l=n[d]||0,s="".concat(d," ").concat(l);n[d]=l+1;var u=a(s),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(o[u].references++,o[u].updater(f)):o.push({identifier:s,updater:m(f,t),references:1}),r.push(s)}return r}function d(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,s=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function u(e,t,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=s(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function f(e,t,n){var r=n.css,i=n.media,o=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,v=0;function m(e,t){var n,r,i;if(t.singleton){var o=v++;n=p||(p=d(t)),r=u.bind(null,n,o,!1),i=u.bind(null,n,o,!0)}else n=d(t),r=f.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var i=a(n[r]);o[i].references--}for(var d=c(e,t),l=0;l<n.length;l++){var s=a(n[l]);0===o[s].references&&(o[s].updater(),o.splice(s,1))}n=d}}}}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e=n(892),t=n.n(e),r=n(921);t()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;var i,o,a,c=window.$mediashop.breakpoints.m,d={slidesPerView:"auto",pagination:{el:".slider-pagination",clickable:!0},navigation:{nextEl:".preview-slider-btn-next",prevEl:".preview-slider-btn-prev "},thumbs:{swiper:new window.$mediashop.Swiper(".preview-slider-thumb",{slidesPerView:"auto",freeMode:!0,freeModeSticky:!0})},on:{click:function(e){e.clickedIndex>=0&&window.$mediashop.modal.open("card-slider",{beforeOpen:function(e){var t,n,r,i,o,a;t=e.modal,n=document.querySelector(".card-preview__slider"),r=t.querySelector(".card-slider-modal__body"),o=(i=n.cloneNode(!0)).querySelector(".preview-slider"),a=i.querySelector(".preview-slider-thumb__wrap"),i.querySelector(".preview-slider-container").insertAdjacentHTML("beforeend",'<div class="preview-slider-pagination"></div>'),o.removeAttribute("id"),a.removeAttribute("id"),r.append(i),e.modal.classList.add("loaded")},modalMounted:function(t){!function(e){console.log("initSliders");var t=null;document.documentElement.clientWidth>=window.$mediashop.breakpoints.m&&(t=new window.$mediashop.Swiper(".card-slider-modal .preview-slider-thumb",{direction:"vertical",slidesPerView:"auto",freeMode:!0,freeModeSticky:!0,spaceBetween:50,slidesOffsetAfter:50})),setTimeout((function(){new window.$mediashop.Swiper(".card-slider-modal .preview-slider-container",{slidesPerView:"auto",initialSlide:e,navigation:{nextEl:".card-slider-modal .btn-slider--next",prevEl:".card-slider-modal .btn-slider--prev"},pagination:{el:".card-slider-modal .preview-slider-pagination",type:"fraction"},thumbs:{swiper:t},on:{activeIndexChange:function(e){window.$mediashop.previewSliderActiveIndex=e.activeIndex}}})}),500)}(e.activeIndex),t.modal.classList.remove("loaded")},beforeClose:function(){console.log("previewSliderActiveIndex ",window.$mediashop.previewSliderActiveIndex),e.slideTo(window.$mediashop.previewSliderActiveIndex||0,0)}})}}};new window.$mediashop.Swiper(".preview-slider-container",d),new window.$mediashop.Swiper(".options-slider",{pagination:{el:".slider-pagination",clickable:!0},breakpoints:(i={},o=c,a={slidesPerView:5},o in i?Object.defineProperty(i,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):i[o]=a,i)}),new window.$mediashop.Swiper(".product-card-container",{slidesPerView:"auto",navigation:{nextEl:".btn-slider--next",prevEl:".btn-slider--prev"},on:{slideChange:function(e){e.isEnd||e.el.classList.remove("shadow-disable")},reachEnd:function(e){e.el.classList.add("shadow-disable")}}});var l=function(e,t,n,r,i){return r*((t=t/i-1)*t*t*t*t+1)+n},s="scrollBehavior"in document.documentElement.style,u=document.querySelector(".header");!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,t=e.querySelector(".feedback-modal__gallery"),n=e.querySelector("#fileLoader");if(t&&n){var r=function(e){return/\.(webp|png|jpe?g|avif)$/i.test(e)};n.addEventListener("change",(function(e){var n=e.target,i="";Array.prototype.forEach.call(n.files,(function(e){r(e.name)&&(i+='\n      <div class="feedback-modal__img">\n        <img src="'.concat(URL.createObjectURL(e),'" width="110" height="60" alt="фото пользователя">\n        <button class="remove-img" type="button" aria-label="удалить фото"></button>\n      </div>\n      '))})),t.insertAdjacentHTML("afterbegin",i)}))}}();var f=!1,p=window.$mediashop.breakpoints.m;document.addEventListener("click",(function(e){var t=e.target.closest('[href="#features"]'),n=e.target.closest(".card-main__accordion-title"),r=e.target.closest(".remove-img");t&&(function(e,t){if(!s){t.preventDefault();var n=e.getAttribute("href")||"",r=document.querySelector(n);if(r){var i=r.getBoundingClientRect().top+u.offsetHeight;!function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"scrollTop",r=null,i=e[n],o=t-i,a=1e3;!function t(c){r||(r=c);var d=c-r;d/a>1||(e[n]=l(0,d,i,o,a),requestAnimationFrame(t))}()}(document.documentElement,i)}}}(t,e),document.getElementById("features").click()),n&&(!f&&n.classList.contains("card-main__accordion-review")&&(f=!0,document.querySelector(".card-main__iframe").insertAdjacentHTML("beforeend",'<iframe src="https://www.youtube.com/embed/3MAfK4vN1Hw" allowfullscreen="" width="16" height="9"></iframe>')),function(e){var t=e.closest(".accordion");if(t)if(e.classList.contains("active"))e.classList.remove("active");else{var n=t.querySelector(".accordion__title.active");n&&n.classList.remove("active"),e.classList.add("active")}}(n)),r&&r.parentElement.remove()}));var v=!1,m=function(){document.querySelector(".card-main__accordion-title.active")||document.querySelector(".card-main__accordion-title").classList.add("active"),v=!0};document.documentElement.clientWidth>=p&&m(),window.addEventListener("resize",(function(){document.documentElement.clientWidth>=p&&!v?m():v=!1}))}()}();