!function(){"use strict";var e=function(){console.log("calculateCart")};document.addEventListener("click",(function(t){if(t.target.closest(".cart-products__clear-cart"))document.querySelectorAll(".cart-products__item, .cart-products__amount-wrap").forEach((function(e){return e.remove()}));else{var r=t.target.closest(".cart-products__remove-btn");r&&(r.closest(".cart-products__item").remove(),e());var n=t.target.closest(".order-element__btn");n&&(function(e){var t=e.parentElement.querySelector(".order-element__total"),r=+t.innerText;e.classList.contains("order-element__increase")&&r++,e.classList.contains("order-element__decrease")&&r>1&&r--,t.innerText=r}(n),e())}})),new window.$mediashop.Swiper(".product-card-container",{slidesPerView:"auto",navigation:{nextEl:".btn-slider--next",prevEl:".btn-slider--prev"},on:{slideChange:function(e){e.isEnd||e.el.classList.remove("shadow-disable")},reachEnd:function(e){e.el.classList.add("shadow-disable")}}})}();