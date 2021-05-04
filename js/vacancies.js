!function(){"use strict";var e,t={5180:function(e,t,n){function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,{Z:function(){return r}})},8640:function(e,t,n){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,{Z:function(){return o}})},3450:function(e,t,n){function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})},7326:function(e,t,n){n.d(t,{o:function(){return s}});var r=n(5180),o=n(8640),i=n(3450),a=function(){function e(t){(0,r.Z)(this,e),this.defaultConfig={instance:this,multiple:!1,focusCatch:!0,setOverlay:!0,activeEl:null,activeClass:"active",ally:!0,templateId:"template",beforeOpen:function(e,t){!function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e),t()},modalMounted:function(){},beforeClose:function(){}},this.openBtnAttribute="data-modal-open",this.closeBtnAttribute="data-modal-close",this.modals=t||{},this.init()}return(0,o.Z)(e,[{key:"init",value:function(){this.openedWindows=[],this.currentWindow={},this.reopen=!1,this.scrollPosition=0,e.overlay||(e.overlay=document.createElement("div"),e.overlay.classList.add("modal-overlay"),document.body.append(e.overlay)),this.eventsFeeler()}},{key:"eventsFeeler",value:function(){var e=this;document.addEventListener("click",(function(t){var n=t.target.closest("["+e.openBtnAttribute+"]");if(n&&!e.currentWindow.openSelf){t.preventDefault();var r=n.getAttribute(e.openBtnAttribute),o=e.modals[r]||e.defaultConfig;o.starter=n,e.open(r,o)}else e.openedWindows.length&&(t.target.closest("["+e.closeBtnAttribute+"]")||t.target.classList.contains("modal-wrap")||!e.currentWindow.setOverlay&&!t.target.contains(e.currentWindow.modal))&&e.close()})),document.addEventListener("keydown",(function(t){if(e.openedWindows.length){if("Escape"===t.key||"Esc"===t.key)return t.preventDefault(),void e.close();"Tab"===t.key&&e.currentWindow.focusCatch&&e.focusCatcher(t)}}))}},{key:"open",value:function(t,n){var r=this,o=Object.assign({},this.defaultConfig,n);if(!o.multiple&&this.openedWindows.length)return this.reopen=!0,void this.close(t,n);var i=function(e,t){var n=document.getElementById(o.templateId);if(n&&"string"==typeof e){var r=n.content.getElementById(e);if(r instanceof HTMLElement){new MutationObserver((function(n,r){var o=n[0].addedNodes[0];o&&o.id===e&&(r.disconnect(),setTimeout(t,0,o))})).observe(document.body,{childList:!0,subtree:!0});var i=r.cloneNode(!0);o.modal=i,o.beforeOpen(o,(function(){document.body.append(i)}))}}else{var a=document.getElementById(e);a instanceof HTMLElement&&(o.modal=a,o.beforeOpen(o,(function(){t(a)})))}};i(t,(function(t){o.modalMounted(o),t.dataset.modalOpen===t.id&&(o.openSelf=!0),o.starter=o.starter||document.activeElement,o.starter.setAttribute("aria-expanded","true"),0===r.openedWindows.length&&(r.bodyScrollControl(!0),o.setOverlay&&e.overlay.classList.add("modal-overlay--show")),o.focusCatch&&(o.focusableElements=t.querySelectorAll('a[href]:not(:disabled), input:not(:disabled):not([type="hidden"]),\n  select:not(:disabled), textarea:not(:disabled), button:not(:disabled), [contenteditable],\n  [tabindex]:not([tabindex^="-"])'),t.addEventListener("transitionend",(function e(){o.focusableElements.length&&o.focusableElements[0].focus(),t.removeEventListener("transitionend",e)}))),t.setAttribute("aria-hidden","false"),o.activeEl=i(o.activeEl)||t,o.activeEl.classList.add(o.activeClass),r.currentWindow=o,r.openedWindows.push(r.currentWindow)}))}},{key:"close",value:function(e,t){var n=this;if(this.openedWindows.length){var r=this.openedWindows[this.openedWindows.length-1];r.ally&&r.modal.setAttribute("aria-hidden","true"),r.modal.addEventListener("transitionend",(function e(){r.beforeClose(n),r.modal.removeEventListener("transitionend",e),r.templateId&&r.modal.remove()})),r.openSelf=!1,r.activeEl.classList.remove(r.activeClass),r.starter.setAttribute("aria-expanded","false"),r.starter.focus(),this.openedWindows.pop(),this.openedWindows.length?this.currentWindow=this.openedWindows[this.openedWindows.length-1]:this.reopen?(this.previousStarter=r.starter,this.reopen=!1,r.modal.addEventListener("transitionend",(function o(){n.open(e,t),r.modal.removeEventListener("transitionend",o)}))):(this.removeOverlay(),this.previousStarter&&this.previousStarter.focus())}}},{key:"removeOverlay",value:function(){this.bodyScrollControl(),e.overlay.classList.remove("modal-overlay--show")}},{key:"focusCatcher",value:function(e){var t=this.currentWindow.focusableElements[0],n=this.currentWindow.focusableElements[this.currentWindow.focusableElements.length-1];e.shiftKey?document.activeElement===t&&(n.focus(),e.preventDefault()):document.activeElement===n&&(t.focus(),e.preventDefault())}},{key:"bodyScrollControl",value:function(e){var t=document.documentElement;e?(this.scrollPosition=self.pageYOffset,t.style.top=-this.scrollPosition+"px",t.classList.add("scroll-lock")):(t.classList.remove("scroll-lock"),self.scrollTo(0,this.scrollPosition),t.style.top="")}}]),e}();(0,i.Z)(a,"overlay",!1);var c=n(4549),s=(n(1662),new a({"burger-menu":{focusCatch:!1,setOverlay:!1,ally:!1,templateId:!1,beforeClose:function(){document.querySelectorAll(".submenu-item--active").forEach((function(e){return e.classList.remove("submenu-item--active")}))}},location:{beforeOpen:function(e,t){var r=this;n.e(811).then(n.bind(n,5811)).then((function(n){new(0,n.default)("#search-input",".custom-search__content",c.pW.bind(r,e),e.modal),t()}))}},"privacy-policy":{multiple:!0},"fast-order":{beforeOpen:function(e,t){n.e(437).then(n.bind(n,6437)).then((function(n){n.insertData(e),t()}))},modalMounted:function(){Promise.resolve().then(n.bind(n,1662)).then((function(e){new(0,e.Validate)(".form--fast-order")}))}},"feedback-modal":{modalMounted:function(){n.e(837).then(n.bind(n,4837)).then((function(e){return e.default()}))}}}))},4549:function(e,t,n){n.d(t,{am:function(){return i},pW:function(){return a},xG:function(){return c},WY:function(){return s}});var r=function(e){var t=getComputedStyle(document.documentElement).getPropertyValue(e);return parseInt(t)},o=function(){return window.innerWidth-document.body.clientWidth};window.mediashop={},window.mediashop.breakpoints={s:(r("--viewport-s")||769)-o(),m:(r("--viewport-m")||1365)-o()};var i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document,n="string"==typeof e?t.querySelector(e):e;if(n instanceof HTMLElement)return n},a=function(e,t){console.log("modalObj",e,"cityObj",t),e.starter.dataset.city=t.name,e.instance.close()},c=function(e){if(e=+e,!isNaN(e))return new Intl.NumberFormat("ru",{style:"currency",currency:"RUB",minimumFractionDigits:0}).format(Math.round(e))},s=function(e){var t=e.closest(".accordion");if(t)if(e.classList.contains("active")&&function(e){return e.classList.contains("card-main__accordion-title")&&document.documentElement.clientWidth<window.mediashop.breakpoints.m}(e))e.classList.remove("active");else{var n=t.querySelector(".accordion__title.active");n&&n.classList.remove("active"),e.classList.add("active")}}},1662:function(e,t,n){n.r(t),n.d(t,{Validate:function(){return d}});var r=n(5180),o=n(8640),i=function(e){var t=e.target,n="+".concat(7," (___) ___-__-__"),r=0,o=t.value.replace(/\D/g,"");o.length||(o="".concat(7)),t.value="",Array.prototype.forEach.call(n,(function(e){var n=/[_\d]/.test(e)&&o.length>r;t.value+=n?o.charAt(r++):o.length<=r?"":e}))},a=function e(t){var n=t.target;n.value==="+".concat(7)&&(n.value=""),n.removeEventListener("input",i),n.removeEventListener("blur",e)},c=n(7326),s={regEmail:/^\s*[\w.-]+@[\w-]+\.(?:[\w-]+\.)?[A-Za-z]{2,8}\s*$/},u={required:"Поле не должно быть пустым",phone:"Неправильный номер",email:"Некорректный email"},l={success:"Ваша заявка принята",fail:"Удаленный сервер не найден",error:"Сетевая ошибка, проверьте интернет соединение"};fetch("data/errorMes.json").then((function(e){return e.json()})).then((function(e){return u=e})).catch((function(){})),fetch("data/statusMes.json").then((function(e){return e.json()})).then((function(e){return l=e})).catch((function(){}));var d=function(){function e(t,n){(0,r.Z)(this,e),this.form="string"==typeof t?document.querySelector(t):t,this.form instanceof HTMLElement&&(this.defaultConfig={url:"https://jsonplaceholder.typicode.com/posts",classError:"form-invalid",statusMessages:l},this.config=Object.assign(this.defaultConfig,n),this.init())}return(0,o.Z)(e,[{key:"init",value:function(){this.form.addEventListener("focusin",this),this.form.addEventListener("focusout",this),this.form.addEventListener("click",this),this.form.addEventListener("submit",this)}},{key:"handleEvent",value:function(e){var t,n,r=this;switch(e.type){case"focusin":e.target.hasAttribute("data-validate")&&(e.target.setCustomValidity(""),"phone"===e.target.dataset.validate&&((n=e.target).value||(n.value="+".concat(7)),n.addEventListener("input",i),n.addEventListener("blur",a)));break;case"focusout":e.target.hasAttribute("data-validate")&&this.checkValue(e.target);break;case"click":e.target.closest('[type="submit"]')&&(e.currentTarget.querySelectorAll("[data-validate]:not([disabled])").forEach((function(e){r.checkValue(e)})),this.form.checkValidity()||(this.form.addEventListener("animationend",this),this.form.classList.add(this.config.classError)));break;case"submit":e.preventDefault(),(t=this).beforeSending(t),fetch(t.config.url,{method:"post",body:new FormData(t.form)}).then((function(e){e.ok?(t.transferAction("success"),t.form.reset(),t.form.querySelectorAll("[data-validate]:not(:disabled)").forEach((function(e){e.parentElement.classList.remove("validate")}))):t.transferAction("fail")})).catch((function(){t.transferAction("error")})).finally((function(){t.afterSending()}));break;case"animationend":this.form.classList.remove(this.config.classError),this.form.removeEventListener("animationend",this)}}},{key:"setErrorMes",value:function(e,t){var n=e.parentElement.querySelector("[data-error]");n&&(n.dataset.error=t),e.setCustomValidity(t)}},{key:"checkValue",value:function(e){if(e.parentElement.classList.remove("valid"),e.parentElement.classList.add("validate"),e.value||!e.required)if("email"!==e.dataset.validate||(e.value=e.value.trim(),!e.value||s.regEmail.test(e.value))){if("phone"===e.dataset.validate){var t=e.value.replace(/\D/g,"").length;if(e.value&&t<11)return void this.setErrorMes(e,u.phone)}e.parentElement.classList.add("valid")}else this.setErrorMes(e,u.email);else this.setErrorMes(e,u.required)}},{key:"beforeSending",value:function(){document.body.insertAdjacentHTML("beforeend",'<div id="spinner"></div>')}},{key:"afterSending",value:function(){var e=document.querySelector("#spinner");e&&e.remove()}},{key:"transferAction",value:function(e){"success"===e&&c.o.open("success-order"),"fail"===e&&c.o.open("fail-modal",{multiple:!0}),"error"===e&&c.o.open("error-modal",{multiple:!0})}}]),e}()},1768:function(e,t,n){var r=n(994),o=n.n(r),i=n(3476),a=n.n(i)()(o());a.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]),t.Z=a},1058:function(e,t,n){var r=n(994),o=n.n(r),i=n(3476),a=n.n(i)()(o());a.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]),t.Z=a},3476:function(e){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&o[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},994:function(e){function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}e.exports=function(e){var n,r,o=(r=4,function(e){if(Array.isArray(e))return e}(n=e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(n,r)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=o[1],a=o[3];if("function"==typeof btoa){var c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),u="/*# ".concat(s," */"),l=a.sources.map((function(e){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(e," */")}));return[i].concat(l).concat([u]).join("\n")}return[i].join("\n")}},1892:function(e,t,n){var r,o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function a(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],o=0;o<e.length;o++){var c=e[o],s=t.base?c[0]+t.base:c[0],u=n[s]||0,l="".concat(s," ").concat(u);n[s]=u+1;var d=a(l),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==d?(i[d].references++,i[d].updater(f)):i.push({identifier:l,updater:h(f,t),references:1}),r.push(l)}return r}function s(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var u,l=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function d(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var v=null,m=0;function h(e,t){var n,r,o;if(t.singleton){var i=m++;n=v||(v=s(t)),r=d.bind(null,n,i,!1),o=d.bind(null,n,i,!0)}else n=s(t),r=f.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=a(n[r]);i[o].references--}for(var s=c(e,t),u=0;u<n.length;u++){var l=a(n[u]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}n=s}}}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={id:e,exports:{}};return t[e](i,i.exports,r),i.exports}r.m=t,r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(t,n){return r.f[n](e,t),t}),[]))},r.u=function(e){return"js/"+e+".js"},r.miniCssF=function(e){},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},e={},r.l=function(t,n,o,i){if(e[t])e[t].push(n);else{var a,c;if(void 0!==o)for(var s=document.getElementsByTagName("script"),u=0;u<s.length;u++){var l=s[u];if(l.getAttribute("src")==t){a=l;break}}a||(c=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.src=t),e[t]=[n];var d=function(n,r){a.onerror=a.onload=null,clearTimeout(f);var o=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(r)})),n)return n(r)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),c&&document.head.appendChild(a)}},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e+"../"}(),function(){var e={469:0};r.f.j=function(t,n){var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));n.push(o[2]=i);var a=r.p+r.u(t),c=new Error;r.l(a,(function(n){if(r.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var i=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;c.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",c.name="ChunkLoadError",c.type=i,c.request=a,o[1](c)}}),"chunk-"+t,t)}};var t=function(t,n){var o,i,a=n[0],c=n[1],s=n[2],u=0;for(o in c)r.o(c,o)&&(r.m[o]=c[o]);for(s&&s(r),t&&t(n);u<a.length;u++)i=a[u],r.o(e,i)&&e[i]&&e[i][0](),e[a[u]]=0},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}(),function(){var e=r(1892),t=r.n(e),n=r(1768),o=(t()(n.Z,{insert:"head",singleton:!1}),n.Z.locals,r(1058)),i=(t()(o.Z,{insert:"head",singleton:!1}),o.Z.locals,r(4549)),a=r(7326),c=document.querySelector(".aside-container aside"),s=document.querySelector(".aside-wrap"),u=!1,l=document.documentElement.clientWidth,d=window.mediashop.breakpoints.m,f=function(){c&&(c.append(document.querySelector(".aside")),u=!0,a.o.close())};l>=d&&f();var v=/Mac|iPod|iPhone|iPad/.test(navigator.platform);if(v){var m=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(m,"px"))}var h=window.mediashop.breakpoints.m,p=window.mediashop.breakpoints.s,y=!1,b=!1,g=document.createElement("div"),w=document.querySelector(".header")||g;function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}document.addEventListener("click",(function(e){var t=e.target.closest(".header__btn-compare");if(!t||t.querySelector("[data-count]")){var n=document.documentElement.clientWidth;if(n<h){var r=e.target.closest(".submenu-item");if(r)return void r.classList.add("submenu-item--active");var o=e.target.closest(".submenu-close");if(o){var a=o.closest(".submenu-item--active");if(a)return void a.classList.remove("submenu-item--active")}}if(n<p){var c=e.target.closest(".footer__accordion-title");c&&(0,i.WY)(c)}}else e.preventDefault()})),window.addEventListener("orientationchange",(function(){if(v){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px"))}})),window.addEventListener("resize",(function(){!function(){var e=document.documentElement.clientWidth;e>=d&&!u?f():e<d&&u&&s&&(s.append(document.querySelector(".aside")),u=!1)}()})),window.addEventListener("scroll",(function(){if((y=window.pageYOffset>50)&&!b)return w.classList.add("header--shadow"),void(b=!0);!y&&b&&(w.classList.remove("header--shadow"),b=!1)}),{passive:!0});var L="accordion__body",S="show",k=function(e){var t,n,r=null!==(t=document.querySelector(".".concat("accordion")))&&void 0!==t&&t,o=r.querySelector(".".concat(S))||!1,i=null!==(n=e.target.closest(".".concat("accordion__items")))&&void 0!==n&&n;try{if(!r||!i)throw"not found: parent - ".concat(r,", currentItem - ").concat(i);var a,c;if(o&&(null===(a=o.querySelector(".".concat(L)))||void 0===a||a.removeAttribute("style"),o.classList.remove("".concat(S))),o==i)return null===(c=o.querySelector(".".concat(L)))||void 0===c||c.removeAttribute("style"),void o.classList.remove("".concat(S));var s=i.querySelector(".".concat(L))||!1;s.style.height="".concat(s.children[0].offsetHeight,"px"),i.classList.add("".concat(S))}catch(e){console.error(e.message)}};window.addEventListener("load",(function(){var e=document.querySelectorAll(".".concat("accordion__items__header"))||!1;if(e){var t,n=function(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?E(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){c=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw i}}}}(e);try{for(n.s();!(t=n.n()).done;)t.value.addEventListener("click",k)}catch(e){n.e(e)}finally{n.f()}}}))}()}();