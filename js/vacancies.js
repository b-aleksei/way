!function(){"use strict";var e={768:function(e,t,n){var r=n(994),o=n.n(r),i=n(476),a=n.n(i)()(o());a.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]),t.Z=a},58:function(e,t,n){var r=n(994),o=n.n(r),i=n(476),a=n.n(i)()(o());a.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]),t.Z=a},476:function(e){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},994:function(e){function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}e.exports=function(e){var n,r,o=(r=4,function(e){if(Array.isArray(e))return e}(n=e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}}(n,r)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=o[1],a=o[3];if("function"==typeof btoa){var s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),l="/*# ".concat(c," */"),u=a.sources.map((function(e){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(e," */")}));return[i].concat(u).concat([l]).join("\n")}return[i].join("\n")}},892:function(e,t,n){var r,o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function a(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},r=[],o=0;o<e.length;o++){var s=e[o],c=t.base?s[0]+t.base:s[0],l=n[c]||0,u="".concat(c," ").concat(l);n[c]=l+1;var d=a(u),f={css:s[1],media:s[2],sourceMap:s[3]};-1!==d?(i[d].references++,i[d].updater(f)):i.push({identifier:u,updater:h(f,t),references:1}),r.push(u)}return r}function c(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,u=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function d(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var v=null,m=0;function h(e,t){var n,r,o;if(t.singleton){var i=m++;n=v||(v=c(t)),r=d.bind(null,n,i,!1),o=d.bind(null,n,i,!0)}else n=c(t),r=f.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=a(n[r]);i[o].references--}for(var c=s(e,t),l=0;l<n.length;l++){var u=a(n[l]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}n=c}}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e=n(892),t=n.n(e),r=n(768),o=(t()(r.Z,{insert:"head",singleton:!1}),r.Z.locals,n(58)),i=(t()(o.Z,{insert:"head",singleton:!1}),o.Z.locals,function(e){var t=getComputedStyle(document.documentElement).getPropertyValue(e);return parseInt(t)}),a=function(){return window.innerWidth-document.body.clientWidth};window.mediashop={},window.mediashop.breakpoints={s:(i("--viewport-s")||769)-a(),m:(i("--viewport-m")||1365)-a()};var s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document,n="string"==typeof e?t.querySelector(e):e;if(n instanceof HTMLElement)return n},c=function(e,t){console.log("modalObj",e,"cityObj",t),e.starter.dataset.city=t.name,e.instance.close()};function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),e}var f,v,m=function(){return"ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch},h=function(){function e(t){l(this,e),this.defaultConfig={instance:this,multiple:!1,focusCatch:!0,setOverlay:!0,activeClass:"active",ally:!0,templateId:"template",beforeOpen:function(){},modalMounted:function(){},beforeClose:function(){}},this.openBtnAttribute="data-modal-open",this.closeBtnAttribute="data-modal-close",this.modals=t||{},this.init()}return d(e,[{key:"init",value:function(){this.openedWindows=[],this.currentWindow={},this.reopen=!1,this.scrollPosition=0,e.overlay||(e.overlay=document.createElement("div"),e.overlay.classList.add("modal-overlay"),document.body.append(e.overlay)),this.eventsFeeler()}},{key:"eventsFeeler",value:function(){var e=this;document.addEventListener("click",(function(t){var n=t.target.closest("["+e.openBtnAttribute+"]");if(n&&!e.currentWindow.openSelf){t.preventDefault();var r=n.getAttribute(e.openBtnAttribute),o=e.modals[r]||e.defaultConfig;o.starter=n,e.open(r,o)}else e.openedWindows.length&&(t.target.closest("["+e.closeBtnAttribute+"]")||t.target.classList.contains("modal-wrap")||!e.currentWindow.setOverlay&&!e.currentWindow.modal.contains(t.target))&&e.close()})),document.addEventListener("keydown",(function(t){if(e.openedWindows.length){if("Escape"===t.key||"Esc"===t.key)return t.preventDefault(),void e.close();"Tab"===t.key&&e.currentWindow.focusCatch&&e.focusCatcher(t)}}))}},{key:"open",value:function(t,n){var r=this,o=Object.assign({},this.defaultConfig,n);if(!o.multiple&&this.openedWindows.length)return this.reopen=!0,void this.close(t,n);var i=function(t){o.modalMounted(o),t.dataset.modalOpen===t.id&&(o.openSelf=!0),o.starter=o.starter||document.activeElement,o.starter.setAttribute("aria-expanded","true"),0===r.openedWindows.length&&(r.bodyScrollControl(!0),o.setOverlay&&e.overlay.classList.add("modal-overlay--show")),o.focusCatch&&!m()&&(o.focusableElements=t.querySelectorAll('a[href]:not(:disabled), input:not(:disabled):not([type="hidden"]),\n  select:not(:disabled), textarea:not(:disabled), button:not(:disabled), [contenteditable],\n  [tabindex]:not([tabindex^="-"])'),t.addEventListener("transitionend",(function e(){o.focusableElements.length&&o.focusableElements[0].focus(),t.removeEventListener("transitionend",e)}))),t.setAttribute("aria-hidden","false"),o.modal.classList.add(o.activeClass),r.currentWindow=o,r.openedWindows.push(r.currentWindow)},a=document.getElementById(o.templateId);if(a&&"string"==typeof t){var s=a.content.getElementById(t);if(s instanceof HTMLElement){new MutationObserver((function(e,n){var r=e[0].addedNodes[0];r&&r.id===t&&(n.disconnect(),setTimeout(i,0,r))})).observe(document.body,{childList:!0,subtree:!0});var c=s.cloneNode(!0);o.modal=c,o.beforeOpen(o),console.log("body.append"),document.body.append(c)}}else{var l=document.getElementById(t);l instanceof HTMLElement&&(o.modal=l,o.beforeOpen(o),i(l))}}},{key:"close",value:function(e,t){var n=this;if(this.openedWindows.length){var r=this.openedWindows[this.openedWindows.length-1];r.ally&&r.modal.setAttribute("aria-hidden","true"),r.modal.addEventListener("transitionend",(function e(){r.beforeClose(n),r.modal.removeEventListener("transitionend",e),r.templateId&&r.modal.remove()})),r.openSelf=!1,r.modal.classList.remove(r.activeClass),r.starter.setAttribute("aria-expanded","false"),m()||r.starter.focus(),this.openedWindows.pop(),this.openedWindows.length?this.currentWindow=this.openedWindows[this.openedWindows.length-1]:this.reopen?(this.previousStarter=r.starter,this.reopen=!1,r.modal.addEventListener("transitionend",(function o(){n.open(e,t),r.modal.removeEventListener("transitionend",o)}))):(this.removeOverlay(),this.previousStarter&&this.previousStarter.focus())}}},{key:"removeOverlay",value:function(){this.bodyScrollControl(),e.overlay.classList.remove("modal-overlay--show")}},{key:"focusCatcher",value:function(e){var t=this.currentWindow.focusableElements[0],n=this.currentWindow.focusableElements[this.currentWindow.focusableElements.length-1];e.shiftKey?document.activeElement===t&&(n.focus(),e.preventDefault()):document.activeElement===n&&(t.focus(),e.preventDefault())}},{key:"bodyScrollControl",value:function(e){var t=document.documentElement;e?(this.scrollPosition=self.pageYOffset,t.style.top=-this.scrollPosition+"px",t.classList.add("scroll-lock")):(t.classList.remove("scroll-lock"),self.scrollTo(0,this.scrollPosition),t.style.top="")}}]),e}();(v="overlay")in(f=h)?Object.defineProperty(f,v,{value:false,enumerable:!0,configurable:!0,writable:!0}):f[v]=false;var p="data/defaultCities.json",y=[];fetch(p).then((function(e){return e.json()})).then((function(e){return y=e})).catch((function(e){}));var b=function(){function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},o=arguments.length>3?arguments[3]:void 0;l(this,e),this.search=s(t,o),this.list=s(n,o),this.callback=r,this.search&&this.list&&this.init()}return d(e,[{key:"init",value:function(){var e=this;this.list.addEventListener("click",this),this.search.addEventListener("input",this),this.search.value="",y.length?this.renderCities(y):fetch(p).then((function(e){return e.json()})).then((function(t){y=t,e.renderCities(y)})).catch((function(e){}))}},{key:"renderCities",value:function(e,t){var n="";e.forEach((function(e){var r=e.name,o="";t?r=e.name.replace(RegExp(t,"gi"),"<mark>$&</mark>"):"city-spb"!==e.id&&"city-msk"!==e.id||(o="big-city"),n+='\n        <button class="custom-search__label '.concat(o,"\" data-city='").concat(JSON.stringify(e),"'>").concat(r,"</button>\n        ")})),this.list.innerHTML=n}},{key:"handleEvent",value:function(e){if("click"===e.type){var t=e.target.closest("[data-city]");if(t){this.search.value=t.innerText;var n=JSON.parse(t.dataset.city);this.callback(n)}}"input"===e.type&&(e.target.value=e.target.value.replace(/[\d\s]/,""),e.target.value.length>=2?this.getData(e.target.value):this.renderCities(y))}},{key:"getData",value:function(e){var t=this;fetch("data/cities.json?city="+e).then((function(e){return e.json()})).then((function(n){t.renderCities(n,e)}))}},{key:"destroy",value:function(){this.list.removeEventListener("click",this),this.search.removeEventListener("input",this)}}]),e}(),g=function(e){var t=e.target,n="+".concat(7," (___) ___-__-__"),r=0,o=t.value.replace(/\D/g,"");o.length||(o="".concat(7)),t.value="",Array.prototype.forEach.call(n,(function(e){var n=/[_\d]/.test(e)&&o.length>r;t.value+=n?o.charAt(r++):o.length<=r?"":e}))},w=function e(t){var n=t.target;n.value==="+".concat(7)&&(n.value=""),n.removeEventListener("input",g),n.removeEventListener("blur",e)},E={regEmail:/^\s*[\w.-]+@[\w-]+\.(?:[\w-]+\.)?[A-Za-z]{2,8}\s*$/},L={required:"Поле не должно быть пустым",phone:"Неправильный номер",email:"Некорректный email"},_={success:"Ваша заявка принята",fail:"Удаленный сервер не найден",error:"Сетевая ошибка, проверьте интернет соединение"};fetch("data/errorMes.json").then((function(e){return e.json()})).then((function(e){return L=e})).catch((function(){})),fetch("data/statusMes.json").then((function(e){return e.json()})).then((function(e){return _=e})).catch((function(){}));var S=function(){function e(t,n){l(this,e),this.form="string"==typeof t?document.querySelector(t):t,this.form instanceof HTMLElement&&(this.defaultConfig={url:"https://jsonplaceholder.typicode.com/posts",classError:"form-invalid",statusMessages:_},this.config=Object.assign(this.defaultConfig,n),this.init())}return d(e,[{key:"init",value:function(){this.form.addEventListener("focusin",this),this.form.addEventListener("focusout",this),this.form.addEventListener("click",this),this.form.addEventListener("submit",this)}},{key:"handleEvent",value:function(e){var t,n=this;switch(e.type){case"focusin":e.target.hasAttribute("data-validate")&&(e.target.setCustomValidity(""),"phone"===e.target.dataset.validate&&((t=e.target).value||(t.value="+".concat(7)),t.addEventListener("input",g),t.addEventListener("blur",w)));break;case"focusout":e.target.hasAttribute("data-validate")&&this.checkValue(e.target);break;case"click":e.target.closest('[type="submit"]')&&(e.currentTarget.querySelectorAll("[data-validate]:not([disabled])").forEach((function(e){n.checkValue(e)})),this.form.checkValidity()||(this.form.addEventListener("animationend",this),this.form.classList.add(this.config.classError)));break;case"submit":e.preventDefault(),function(e){e.beforeSending(e),fetch(e.config.url,{method:"post",body:new FormData(e.form)}).then((function(t){t.ok?(e.transferAction("success"),e.form.reset(),e.form.querySelectorAll("[data-validate]:not(:disabled)").forEach((function(e){e.parentElement.classList.remove("validate")}))):e.transferAction("fail")})).catch((function(){e.transferAction("error")})).finally((function(){e.afterSending()}))}(this);break;case"animationend":this.form.classList.remove(this.config.classError),this.form.removeEventListener("animationend",this)}}},{key:"setErrorMes",value:function(e,t){var n=e.parentElement.querySelector("[data-error]");n&&(n.dataset.error=t),e.setCustomValidity(t)}},{key:"checkValue",value:function(e){if(e.parentElement.classList.remove("valid"),e.parentElement.classList.add("validate"),e.value||!e.required)if("email"!==e.dataset.validate||(e.value=e.value.trim(),!e.value||E.regEmail.test(e.value))){if("phone"===e.dataset.validate){var t=e.value.replace(/\D/g,"").length;if(e.value&&t<11)return void this.setErrorMes(e,L.phone)}e.parentElement.classList.add("valid")}else this.setErrorMes(e,L.email);else this.setErrorMes(e,L.required)}},{key:"beforeSending",value:function(){document.body.insertAdjacentHTML("beforeend",'<div id="spinner"></div>')}},{key:"afterSending",value:function(){var e=document.querySelector("#spinner");e&&e.remove()}},{key:"transferAction",value:function(e){"success"===e&&k.open("success-order"),"fail"===e&&k.open("fail-modal",{multiple:!0}),"error"===e&&k.open("error-modal",{multiple:!0})}}]),e}(),k=new h({"burger-menu":{focusCatch:!1,setOverlay:!1,ally:!1,templateId:!1,beforeClose:function(){document.querySelectorAll(".submenu-item--active").forEach((function(e){return e.classList.remove("submenu-item--active")}))}},"modal-login":{modalMounted:function(){new S(".form--login")}},"modal-register":{modalMounted:function(){new S(".form--register")}},location:{beforeOpen:function(e){new b("#search-input",".custom-search__content",c.bind(this,e),e.modal)}},"privacy-policy":{multiple:!0},"fast-order":{beforeOpen:function(e){!function(e){if(e.starter&&e.modal){var t,n,r,o,i,a=e.modal.querySelector(".order-element"),s={id:(o=e.starter.closest(".product-card")).id,vendorCode:o.dataset.vendorCode,name:null===(t=o.querySelector(".product-card-desc"))||void 0===t?void 0:t.innerText,price:null===(n=o.querySelector(".product-card__price"))||void 0===n?void 0:n.innerText,img:null===(r=o.querySelector(".product-card__img"))||void 0===r?void 0:r.innerHTML};a.innerHTML='\n  <div class="order-element__wrap-img">'.concat((i=s).img,'</div>\n  <div class="order-element__info">\n    <span class="order-element__vendor">Арт. ').concat(i.vendorCode,'</span>\n    <p class="order-element__desc">').concat(i.name,'</p>\n    <div class="order-element__prices">\n      <span class="order-element__price">').concat(i.price,'</span>\n    </div>\n    <div class="order-element__count">\n      <button class="order-element__btn order-element__increase" type="button">+</button>\n      <span class="order-element__total">1</span>\n      <button class="order-element__btn order-element__decrease" type="button">-</button>\n    </div>\n    <a class="form__link" href="#!">Узнать больше</a>\n  </div>\n'),c=e.modal,l=c.querySelector(".order-element__total"),u=c.querySelector(".order-element__price"),d=c.querySelector("#product-count"),f=+u.innerHTML.replace(/[\s₽]/g,""),v=1,c.addEventListener("click",(function(e){var t=e.target.closest(".order-element__btn");t&&(t.classList.contains("order-element__increase")&&v++,t.classList.contains("order-element__decrease")&&v>1&&v--,d.value=v,l.innerText=v,u.innerText=function(e){if(e=+e,!isNaN(e))return new Intl.NumberFormat("ru",{style:"currency",currency:"RUB",minimumFractionDigits:0}).format(Math.round(e))}(f*v))})),new S(".form--fast-order"),e.modal.querySelector("#product-id").value=s.id,console.log("insertData end")}var c,l,u,d,f,v}(e)},modalMounted:function(){new S(".form--fast-order")}},"feedback-modal":{modalMounted:function(){!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,t=e.querySelector(".feedback-modal__gallery"),n=e.querySelector("#fileLoader");if(t&&n){var r=function(e){return/\.(webp|png|jpe?g|avif)$/i.test(e)};n.addEventListener("change",(function(e){var n=e.target,o="";Array.prototype.forEach.call(n.files,(function(e){r(e.name)&&(o+='\n      <div class="feedback-modal__img">\n        <img src="'.concat(URL.createObjectURL(e),'" width="110" height="60" alt="фото пользователя">\n        <button class="remove-img" type="button" aria-label="удалить фото"></button>\n      </div>\n      '))})),t.insertAdjacentHTML("afterbegin",o)}))}}(),new S(".form--feedback")}}}),C=document.querySelector(".aside-container aside"),A=document.querySelector(".aside-wrap"),j=!1,M=document.documentElement.clientWidth,O=window.mediashop.breakpoints.m,q=function(){C&&(C.append(document.querySelector(".aside")),j=!0,k.close())};M>=O&&q();var T=/Mac|iPod|iPhone|iPad/.test(navigator.platform);if(T){var W=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(W,"px"))}var x=window.mediashop.breakpoints.m,I=window.mediashop.breakpoints.s,D=!1,H=!1,N=document.createElement("div"),P=document.querySelector(".header")||N;function B(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}document.addEventListener("click",(function(e){var t=e.target.closest(".header__btn-compare");if(!t||t.querySelector("[data-count]")){var n=document.documentElement.clientWidth;if(n<I){var r=e.target.closest(".footer__accordion-title");if(r)return void function(e){var t=e.closest(".accordion");if(t)if(e.classList.contains("active"))e.classList.remove("active");else{var n=t.querySelector(".accordion__title.active");n&&n.classList.remove("active"),e.classList.add("active")}}(r)}if(n<x){var o=e.target.closest(".submenu-close");if(o){var i=o.closest(".submenu-item--active");return void(i&&i.classList.remove("submenu-item--active"))}var a=e.target.closest(".submenu-item");a&&a.classList.add("submenu-item--active")}}else e.preventDefault()})),window.addEventListener("orientationchange",(function(){if(T){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px"))}})),window.addEventListener("resize",(function(){!function(){var e=document.documentElement.clientWidth;e>=O&&!j?q():e<O&&j&&A&&(A.append(document.querySelector(".aside")),j=!1)}()})),window.addEventListener("scroll",(function(){if((D=window.pageYOffset>50)&&!H)return P.classList.add("header--shadow"),void(H=!0);!D&&H&&(P.classList.remove("header--shadow"),H=!1)}),{passive:!0});var R="accordion__body",U="show",F=function(e){var t,n,r=null!==(t=document.querySelector(".".concat("accordion")))&&void 0!==t&&t,o=r.querySelector(".".concat(U))||!1,i=null!==(n=e.target.closest(".".concat("accordion__items")))&&void 0!==n&&n;try{if(!r||!i)throw"not found: parent - ".concat(r,", currentItem - ").concat(i);var a,s;if(o&&(null===(a=o.querySelector(".".concat(R)))||void 0===a||a.removeAttribute("style"),o.classList.remove("".concat(U))),o==i)return null===(s=o.querySelector(".".concat(R)))||void 0===s||s.removeAttribute("style"),void o.classList.remove("".concat(U));var c=i.querySelector(".".concat(R))||!1;c.style.height="".concat(c.children[0].offsetHeight,"px"),i.classList.add("".concat(U))}catch(e){console.error(e.message)}};window.addEventListener("load",(function(){var e=document.querySelectorAll(".".concat("accordion__items__header"))||!1;if(e){var t,n=function(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return B(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?B(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){s=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw i}}}}(e);try{for(n.s();!(t=n.n()).done;)t.value.addEventListener("click",F)}catch(e){n.e(e)}finally{n.f()}}}))}()}();