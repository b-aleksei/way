!function(){"use strict";var e,t={5180:function(e,t,n){function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,{Z:function(){return o}})},8640:function(e,t,n){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function r(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}n.d(t,{Z:function(){return r}})},3450:function(e,t,n){function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return o}})},4837:function(e,t,n){n.r(t),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,t=e.querySelector(".feedback-modal__gallery"),n=e.querySelector("#fileLoader");if(t&&n){var o=function(e){return/\.(webp|png|jpe?g|avif)$/i.test(e)};n.addEventListener("change",(function(e){var n=e.target,r="";Array.prototype.forEach.call(n.files,(function(e){o(e.name)&&(r+='\n      <div class="feedback-modal__img">\n        <img src="'.concat(URL.createObjectURL(e),'" width="110" height="60" alt="фото пользователя">\n        <button class="remove-img" type="button" aria-label="удалить фото"></button>\n      </div>\n      '))})),t.insertAdjacentHTML("afterbegin",r)}))}}},7326:function(e,t,n){n.d(t,{o:function(){return u}});var o=n(5180),r=n(8640),i=n(3450),a=function(){return"ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch},c=function(){function e(t){(0,o.Z)(this,e),this.defaultConfig={instance:this,multiple:!1,focusCatch:!0,setOverlay:!0,activeEl:null,activeClass:"active",ally:!0,templateId:"template",beforeOpen:function(e,t){!function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e),t()},modalMounted:function(){},beforeClose:function(){}},this.openBtnAttribute="data-modal-open",this.closeBtnAttribute="data-modal-close",this.modals=t||{},this.init()}return(0,r.Z)(e,[{key:"init",value:function(){this.openedWindows=[],this.currentWindow={},this.reopen=!1,this.scrollPosition=0,e.overlay||(e.overlay=document.createElement("div"),e.overlay.classList.add("modal-overlay"),document.body.append(e.overlay)),this.eventsFeeler()}},{key:"eventsFeeler",value:function(){var e=this;document.addEventListener("click",(function(t){var n=t.target.closest("["+e.openBtnAttribute+"]");if(n&&!e.currentWindow.openSelf){t.preventDefault();var o=n.getAttribute(e.openBtnAttribute),r=e.modals[o]||e.defaultConfig;r.starter=n,e.open(o,r)}else e.openedWindows.length&&(t.target.closest("["+e.closeBtnAttribute+"]")||t.target.classList.contains("modal-wrap")||!e.currentWindow.setOverlay&&!e.currentWindow.modal.contains(t.target))&&e.close()})),document.addEventListener("keydown",(function(t){if(e.openedWindows.length){if("Escape"===t.key||"Esc"===t.key)return t.preventDefault(),void e.close();"Tab"===t.key&&e.currentWindow.focusCatch&&e.focusCatcher(t)}}))}},{key:"open",value:function(t,n){var o=this,r=Object.assign({},this.defaultConfig,n);if(!r.multiple&&this.openedWindows.length)return this.reopen=!0,void this.close(t,n);var i=function(e,t){var n=document.getElementById(r.templateId);if(n&&"string"==typeof e){var o=n.content.getElementById(e);if(o instanceof HTMLElement){new MutationObserver((function(n,o){var r=n[0].addedNodes[0];r&&r.id===e&&(o.disconnect(),setTimeout(t,0,r))})).observe(document.body,{childList:!0,subtree:!0});var i=o.cloneNode(!0);r.modal=i,r.beforeOpen(r,(function(){document.body.append(i)}))}}else{var a=document.getElementById(e);a instanceof HTMLElement&&(r.modal=a,r.beforeOpen(r,(function(){t(a)})))}};i(t,(function(t){r.modalMounted(r),t.dataset.modalOpen===t.id&&(r.openSelf=!0),r.starter=r.starter||document.activeElement,r.starter.setAttribute("aria-expanded","true"),0===o.openedWindows.length&&(o.bodyScrollControl(!0),r.setOverlay&&e.overlay.classList.add("modal-overlay--show")),r.focusCatch&&!a()&&(r.focusableElements=t.querySelectorAll('a[href]:not(:disabled), input:not(:disabled):not([type="hidden"]),\n  select:not(:disabled), textarea:not(:disabled), button:not(:disabled), [contenteditable],\n  [tabindex]:not([tabindex^="-"])'),t.addEventListener("transitionend",(function e(){r.focusableElements.length&&r.focusableElements[0].focus(),t.removeEventListener("transitionend",e)}))),t.setAttribute("aria-hidden","false"),r.activeEl=i(r.activeEl)||t,r.activeEl.classList.add(r.activeClass),o.currentWindow=r,o.openedWindows.push(o.currentWindow)}))}},{key:"close",value:function(e,t){var n=this;if(this.openedWindows.length){var o=this.openedWindows[this.openedWindows.length-1];o.ally&&o.modal.setAttribute("aria-hidden","true"),o.modal.addEventListener("transitionend",(function e(){o.beforeClose(n),o.modal.removeEventListener("transitionend",e),o.templateId&&o.modal.remove()})),o.openSelf=!1,o.activeEl.classList.remove(o.activeClass),o.starter.setAttribute("aria-expanded","false"),a()||o.starter.focus(),this.openedWindows.pop(),this.openedWindows.length?this.currentWindow=this.openedWindows[this.openedWindows.length-1]:this.reopen?(this.previousStarter=o.starter,this.reopen=!1,o.modal.addEventListener("transitionend",(function r(){n.open(e,t),o.modal.removeEventListener("transitionend",r)}))):(this.removeOverlay(),this.previousStarter&&this.previousStarter.focus())}}},{key:"removeOverlay",value:function(){this.bodyScrollControl(),e.overlay.classList.remove("modal-overlay--show")}},{key:"focusCatcher",value:function(e){var t=this.currentWindow.focusableElements[0],n=this.currentWindow.focusableElements[this.currentWindow.focusableElements.length-1];e.shiftKey?document.activeElement===t&&(n.focus(),e.preventDefault()):document.activeElement===n&&(t.focus(),e.preventDefault())}},{key:"bodyScrollControl",value:function(e){var t=document.documentElement;e?(this.scrollPosition=self.pageYOffset,t.style.top=-this.scrollPosition+"px",t.classList.add("scroll-lock")):(t.classList.remove("scroll-lock"),self.scrollTo(0,this.scrollPosition),t.style.top="")}}]),e}();(0,i.Z)(c,"overlay",!1);var s=n(4549),u=(n(1662),new c({"burger-menu":{focusCatch:!1,setOverlay:!1,ally:!1,templateId:!1,beforeClose:function(){document.querySelectorAll(".submenu-item--active").forEach((function(e){return e.classList.remove("submenu-item--active")}))}},location:{beforeOpen:function(e,t){var o=this;n.e(811).then(n.bind(n,5811)).then((function(n){new(0,n.default)("#search-input",".custom-search__content",s.pW.bind(o,e),e.modal),t()}))}},"privacy-policy":{multiple:!0},"fast-order":{beforeOpen:function(e,t){n.e(437).then(n.bind(n,6437)).then((function(n){n.insertData(e),t()}))},modalMounted:function(){Promise.resolve().then(n.bind(n,1662)).then((function(e){new(0,e.Validate)(".form--fast-order")}))}},"feedback-modal":{modalMounted:function(){n.e(837).then(n.bind(n,4837)).then((function(e){return e.default()}))}}}))},4549:function(e,t,n){n.d(t,{am:function(){return i},pW:function(){return a},xG:function(){return c},WY:function(){return s}});var o=function(e){var t=getComputedStyle(document.documentElement).getPropertyValue(e);return parseInt(t)},r=function(){return window.innerWidth-document.body.clientWidth};window.mediashop={},window.mediashop.breakpoints={s:(o("--viewport-s")||769)-r(),m:(o("--viewport-m")||1365)-r()};var i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document,n="string"==typeof e?t.querySelector(e):e;if(n instanceof HTMLElement)return n},a=function(e,t){console.log("modalObj",e,"cityObj",t),e.starter.dataset.city=t.name,e.instance.close()},c=function(e){if(e=+e,!isNaN(e))return new Intl.NumberFormat("ru",{style:"currency",currency:"RUB",minimumFractionDigits:0}).format(Math.round(e))},s=function(e){var t=e.closest(".accordion");if(t)if(e.classList.contains("active"))e.classList.remove("active");else{var n=t.querySelector(".accordion__title.active");n&&n.classList.remove("active"),e.classList.add("active")}}},1662:function(e,t,n){n.r(t),n.d(t,{Validate:function(){return d}});var o=n(5180),r=n(8640),i=function(e){var t=e.target,n="+".concat(7," (___) ___-__-__"),o=0,r=t.value.replace(/\D/g,"");r.length||(r="".concat(7)),t.value="",Array.prototype.forEach.call(n,(function(e){var n=/[_\d]/.test(e)&&r.length>o;t.value+=n?r.charAt(o++):r.length<=o?"":e}))},a=function e(t){var n=t.target;n.value==="+".concat(7)&&(n.value=""),n.removeEventListener("input",i),n.removeEventListener("blur",e)},c=n(7326),s={regEmail:/^\s*[\w.-]+@[\w-]+\.(?:[\w-]+\.)?[A-Za-z]{2,8}\s*$/},u={required:"Поле не должно быть пустым",phone:"Неправильный номер",email:"Некорректный email"},l={success:"Ваша заявка принята",fail:"Удаленный сервер не найден",error:"Сетевая ошибка, проверьте интернет соединение"};fetch("data/errorMes.json").then((function(e){return e.json()})).then((function(e){return u=e})).catch((function(){})),fetch("data/statusMes.json").then((function(e){return e.json()})).then((function(e){return l=e})).catch((function(){}));var d=function(){function e(t,n){(0,o.Z)(this,e),this.form="string"==typeof t?document.querySelector(t):t,this.form instanceof HTMLElement&&(this.defaultConfig={url:"https://jsonplaceholder.typicode.com/posts",classError:"form-invalid",statusMessages:l},this.config=Object.assign(this.defaultConfig,n),this.init())}return(0,r.Z)(e,[{key:"init",value:function(){this.form.addEventListener("focusin",this),this.form.addEventListener("focusout",this),this.form.addEventListener("click",this),this.form.addEventListener("submit",this)}},{key:"handleEvent",value:function(e){var t,n,o=this;switch(e.type){case"focusin":e.target.hasAttribute("data-validate")&&(e.target.setCustomValidity(""),"phone"===e.target.dataset.validate&&((n=e.target).value||(n.value="+".concat(7)),n.addEventListener("input",i),n.addEventListener("blur",a)));break;case"focusout":e.target.hasAttribute("data-validate")&&this.checkValue(e.target);break;case"click":e.target.closest('[type="submit"]')&&(e.currentTarget.querySelectorAll("[data-validate]:not([disabled])").forEach((function(e){o.checkValue(e)})),this.form.checkValidity()||(this.form.addEventListener("animationend",this),this.form.classList.add(this.config.classError)));break;case"submit":e.preventDefault(),(t=this).beforeSending(t),fetch(t.config.url,{method:"post",body:new FormData(t.form)}).then((function(e){e.ok?(t.transferAction("success"),t.form.reset(),t.form.querySelectorAll("[data-validate]:not(:disabled)").forEach((function(e){e.parentElement.classList.remove("validate")}))):t.transferAction("fail")})).catch((function(){t.transferAction("error")})).finally((function(){t.afterSending()}));break;case"animationend":this.form.classList.remove(this.config.classError),this.form.removeEventListener("animationend",this)}}},{key:"setErrorMes",value:function(e,t){var n=e.parentElement.querySelector("[data-error]");n&&(n.dataset.error=t),e.setCustomValidity(t)}},{key:"checkValue",value:function(e){if(e.parentElement.classList.remove("valid"),e.parentElement.classList.add("validate"),e.value||!e.required)if("email"!==e.dataset.validate||(e.value=e.value.trim(),!e.value||s.regEmail.test(e.value))){if("phone"===e.dataset.validate){var t=e.value.replace(/\D/g,"").length;if(e.value&&t<11)return void this.setErrorMes(e,u.phone)}e.parentElement.classList.add("valid")}else this.setErrorMes(e,u.email);else this.setErrorMes(e,u.required)}},{key:"beforeSending",value:function(){document.body.insertAdjacentHTML("beforeend",'<div id="spinner"></div>')}},{key:"afterSending",value:function(){var e=document.querySelector("#spinner");e&&e.remove()}},{key:"transferAction",value:function(e){"success"===e&&c.o.open("success-order"),"fail"===e&&c.o.open("fail-modal",{multiple:!0}),"error"===e&&c.o.open("error-modal",{multiple:!0})}}]),e}()},1768:function(e,t,n){var o=n(994),r=n.n(o),i=n(3476),a=n.n(i)()(r());a.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]),t.Z=a},3921:function(e,t,n){var o=n(994),r=n.n(o),i=n(3476),a=n.n(i)()(r());a.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]),t.Z=a},3476:function(e){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);o&&r[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},994:function(e){function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}e.exports=function(e){var n,o,r=(o=4,function(e){if(Array.isArray(e))return e}(n=e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],o=!0,r=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(o=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{o||null==c.return||c.return()}finally{if(r)throw i}}return n}}(n,o)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?t(e,n):void 0}}(n,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=r[1],a=r[3];if("function"==typeof btoa){var c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),u="/*# ".concat(s," */"),l=a.sources.map((function(e){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(e," */")}));return[i].concat(l).concat([u]).join("\n")}return[i].join("\n")}},1892:function(e,t,n){var o,r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function a(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},o=[],r=0;r<e.length;r++){var c=e[r],s=t.base?c[0]+t.base:c[0],u=n[s]||0,l="".concat(s," ").concat(u);n[s]=u+1;var d=a(l),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==d?(i[d].references++,i[d].updater(f)):i.push({identifier:l,updater:h(f,t),references:1}),o.push(l)}return o}function s(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var i=n.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var a=r(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var u,l=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function d(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=l(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var m=null,v=0;function h(e,t){var n,o,r;if(t.singleton){var i=v++;n=m||(m=s(t)),o=d.bind(null,n,i,!1),r=d.bind(null,n,i,!0)}else n=s(t),o=f.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=a(n[o]);i[r].references--}for(var s=c(e,t),u=0;u<n.length;u++){var l=a(n[u]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}n=s}}}}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var i=n[e]={id:e,exports:{}};return t[e](i,i.exports,o),i.exports}o.m=t,o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,{a:t}),t},o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,n){return o.f[n](e,t),t}),[]))},o.u=function(e){return"js/"+e+".js"},o.miniCssF=function(e){},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},e={},o.l=function(t,n,r,i){if(e[t])e[t].push(n);else{var a,c;if(void 0!==r)for(var s=document.getElementsByTagName("script"),u=0;u<s.length;u++){var l=s[u];if(l.getAttribute("src")==t){a=l;break}}a||(c=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,o.nc&&a.setAttribute("nonce",o.nc),a.src=t),e[t]=[n];var d=function(n,o){a.onerror=a.onload=null,clearTimeout(f);var r=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((function(e){return e(o)})),n)return n(o)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),c&&document.head.appendChild(a)}},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e+"../"}(),function(){var e={760:0,837:0};o.f.j=function(t,n){var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));n.push(r[2]=i);var a=o.p+o.u(t),c=new Error;o.l(a,(function(n){if(o.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var i=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;c.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",c.name="ChunkLoadError",c.type=i,c.request=a,r[1](c)}}),"chunk-"+t,t)}};var t=function(t,n){var r,i,a=n[0],c=n[1],s=n[2],u=0;for(r in c)o.o(c,r)&&(o.m[r]=c[r]);for(s&&s(o),t&&t(n);u<a.length;u++)i=a[u],o.o(e,i)&&e[i]&&e[i][0](),e[a[u]]=0},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}(),function(){var e=o(1892),t=o.n(e),n=o(1768),r=(t()(n.Z,{insert:"head",singleton:!1}),n.Z.locals,o(3921)),i=(t()(r.Z,{insert:"head",singleton:!1}),r.Z.locals,o(4549)),a=o(7326),c=document.querySelector(".aside-container aside"),s=document.querySelector(".aside-wrap"),u=!1,l=document.documentElement.clientWidth,d=window.mediashop.breakpoints.m,f=function(){c&&(c.append(document.querySelector(".aside")),u=!0,a.o.close())};l>=d&&f();var m=/Mac|iPod|iPhone|iPad/.test(navigator.platform);if(m){var v=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(v,"px"))}var h=window.mediashop.breakpoints.m,p=window.mediashop.breakpoints.s,b=!1,y=!1,g=document.createElement("div"),w=document.querySelector(".header")||g;document.addEventListener("click",(function(e){var t=e.target.closest(".header__btn-compare");if(!t||t.querySelector("[data-count]")){var n=document.documentElement.clientWidth;if(n<p){var o=e.target.closest(".footer__accordion-title");if(o)return void(0,i.WY)(o)}if(n<h){var r=e.target.closest(".submenu-close");if(r){var a=r.closest(".submenu-item--active");return void(a&&a.classList.remove("submenu-item--active"))}var c=e.target.closest(".submenu-item");c&&c.classList.add("submenu-item--active")}}else e.preventDefault()})),window.addEventListener("orientationchange",(function(){if(m){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px"))}})),window.addEventListener("resize",(function(){!function(){var e=document.documentElement.clientWidth;e>=d&&!u?f():e<d&&u&&s&&(s.append(document.querySelector(".aside")),u=!1)}()})),window.addEventListener("scroll",(function(){if((b=window.pageYOffset>50)&&!y)return w.classList.add("header--shadow"),void(y=!0);!b&&y&&(w.classList.remove("header--shadow"),y=!1)}),{passive:!0}),(0,o(4837).default)(),window.addEventListener("load",(function(){Promise.all([o.e(932),o.e(562)]).then(o.bind(o,7562))}));var E=window.mediashop.breakpoints.m;document.addEventListener("click",(function(e){var t=e.target.closest(".card-main__accordion-title"),n=e.target.closest(".remove-img");t&&(0,i.WY)(t),n&&n.parentElement.remove()}));var L=!1,S=function(){document.querySelector(".card-main__accordion-title.active")||document.querySelector(".card-main__accordion-title").classList.add("active"),L=!0};document.documentElement.clientWidth>=E&&S(),window.addEventListener("resize",(function(){document.documentElement.clientWidth>=E&&!L?S():L=!1}))}()}();