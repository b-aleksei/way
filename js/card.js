!function(){var e={871:function(){var e=document.querySelector(".card-main__feedback-slider");e.addEventListener("click",(function(i){var t=i.target.closest(".swiper-slide");if(t){var n=Array.prototype.indexOf.call(e.children,t);window.$mediashop.modal.open("feedback-slider",{beforeOpen:function(i){i.modal.querySelector(".fb-slider-container").prepend(e.cloneNode(!0))},modalMounted:function(){new window.$mediashop.Swiper(".fb-slider-container",{slidesPerView:"auto",initialSlide:n,navigation:{nextEl:".fb-slider-container .btn-slider--next",prevEl:".fb-slider-container .btn-slider--prev"},pagination:{el:".fb-slider-container .slider-pagination",type:"fraction"}})}})}}))}},i={};function t(n){var r=i[n];if(void 0!==r)return r.exports;var o=i[n]={exports:{}};return e[n](o,o.exports,t),o.exports}!function(){"use strict";var e,i,n,r=window.$mediashop.breakpoints.m,o=document.querySelector(".preview-slider-thumb"),d=new window.$mediashop.Swiper(".preview-slider-thumb",{slidesPerView:4,spaceBetween:10,freeMode:!0,freeModeSticky:!0,watchSlidesVisibility:!0,watchSlidesProgress:!0}),a={slidesPerView:"auto",pagination:{el:".slider-pagination",clickable:!0},navigation:{nextEl:".preview-slider-btn-next",prevEl:".preview-slider-btn-prev "},get thumbs(){return o?{swiper:d}:{swiper:null}},on:{click:function(e){e.clickedIndex>=0&&window.$mediashop.modal.open("card-slider",{beforeOpen:function(e){var i,t,n,r,o,d;i=e.modal,t=document.querySelector(".card-preview__slider"),n=i.querySelector(".card-slider-modal__body"),o=(r=t.cloneNode(!0)).querySelector(".preview-slider"),d=r.querySelector(".preview-slider-thumb__wrap"),r.querySelector(".preview-slider-container").insertAdjacentHTML("beforeend",'<div class="preview-slider-pagination"></div>'),o.removeAttribute("id"),d.removeAttribute("id"),n.append(r),e.modal.classList.add("loaded")},modalMounted:function(i){!function(e,i){var t=null;document.documentElement.clientWidth>=window.$mediashop.breakpoints.m&&(t=new window.$mediashop.Swiper(".card-slider-modal .preview-slider-thumb",{direction:"vertical",slidesPerView:"auto",freeMode:!0,freeModeSticky:!0,spaceBetween:50,watchSlidesVisibility:!0,watchSlidesProgress:!0})),setTimeout((function(){e.classList.remove("loaded"),new window.$mediashop.Swiper(".card-slider-modal .preview-slider-container",{slidesPerView:"auto",initialSlide:i,navigation:{nextEl:".card-slider-modal .btn-slider--next",prevEl:".card-slider-modal .btn-slider--prev"},pagination:{el:".card-slider-modal .preview-slider-pagination",type:"fraction"},thumbs:{swiper:t},on:{activeIndexChange:function(e){window.$mediashop.previewSliderActiveIndex=e.activeIndex}}})}),500)}(i.modal,e.activeIndex),window.$mediashop.previewSliderActiveIndex=e.activeIndex},beforeClose:function(){e.slideTo(window.$mediashop.previewSliderActiveIndex||0,0)}})}}};new window.$mediashop.Swiper(".preview-slider-container",a),new window.$mediashop.Swiper(".options-slider",{pagination:{el:".slider-pagination",clickable:!0},breakpoints:(e={},i=r,n={slidesPerView:5},i in e?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,e)}),new window.$mediashop.Swiper(".product-card-container",{slidesPerView:"auto",navigation:{nextEl:".btn-slider--next",prevEl:".btn-slider--prev"},on:{slideChange:function(e){e.isEnd||e.el.classList.remove("shadow-disable")},reachEnd:function(e){e.el.classList.add("shadow-disable")}}}),t(871);var c=function(e,i,t,n,r){return n*((i=i/r-1)*i*i*i*i+1)+t},l="scrollBehavior"in document.documentElement.style,s=document.querySelector(".header");!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,i=e.querySelector(".feedback-modal__gallery"),t=e.querySelector("#fileLoader");if(i&&t){var n=function(e){return/\.(webp|png|jpe?g|avif)$/i.test(e)};t.addEventListener("change",(function(e){var t=e.target,r="";Array.prototype.forEach.call(t.files,(function(e){n(e.name)&&(r+='\n      <div class="feedback-modal__img">\n        <img src="'.concat(URL.createObjectURL(e),'" width="110" height="60" alt="фото пользователя">\n        <button class="remove-img" type="button" aria-label="удалить фото"></button>\n      </div>\n      '))})),i.insertAdjacentHTML("afterbegin",r)}))}}();var u=!1,m=window.$mediashop.breakpoints.m;document.addEventListener("click",(function(e){var i=e.target.closest(".anchor-link"),t=e.target.closest(".card-main__accordion-title");if(e.target.closest(".fixed-buy-click")&&(e.preventDefault(),document.querySelector(".product-card__buy-click").click()),i){!function(e,i){if(!l){i.preventDefault();var t=e.getAttribute("href")||"",n=document.querySelector(t);if(n){var r=n.getBoundingClientRect().top+s.offsetHeight;!function(e,i){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"scrollTop",n=null,r=e[t],o=i-r,d=1e3;!function i(a){n||(n=a);var l=a-n;l/d>1||(e[t]=c(0,l,r,o,d),requestAnimationFrame(i))}()}(document.documentElement,r)}}}(i,e);var n=i.getAttribute("href"),r=document.querySelector(n);r.classList.contains("active")||r.click()}else t&&(!u&&t.classList.contains("card-main__accordion-review")&&(u=!0,document.querySelector(".card-main__iframe").insertAdjacentHTML("beforeend",'<iframe src="https://www.youtube.com/embed/3MAfK4vN1Hw" allowfullscreen="" width="16" height="9"></iframe>')),function(e){var i=e.closest(".accordion");if(i)if(e.classList.contains("active"))e.classList.remove("active");else{var t=i.querySelector(".active");t&&t.classList.remove("active"),e.classList.add("active")}}(t))}));var p=!1,v=function(){document.querySelector(".card-main__accordion-title.active")||document.querySelector(".card-main__accordion-title").classList.add("active"),p=!0};document.documentElement.clientWidth>=m&&v();var w=!1,f=document.querySelector(".card-preview__footer"),b=document.querySelector(".card-preview__fixed"),h=(null==b?void 0:b.offsetHeight)||96,g=document.querySelector(".footer"),y=function(){var e=Math.round(f.getBoundingClientRect().top);if(!w&&e<=124)return b.classList.add("fixed"),g.style.setProperty("--offset-bottom",h+"px"),void(w=!0);w&&e>124&&(b.classList.remove("fixed"),w=!1)},S=window.$mediashop.breakpoints.m;window.addEventListener("scroll",(function(){document.documentElement.clientWidth>=S||y()}),{passive:!0});var _=document.documentElement.clientWidth<S;window.addEventListener("resize",(function(){if(document.documentElement.clientWidth>=m&&!p?v():p=!1,document.documentElement.clientWidth<S&&!_)return y(),void(_=!0);document.documentElement.clientWidth>=S&&_&&(_=!1)}))}()}();