!function(){"use strict";var e=new window.$mediashop.Swiper(".news__category-slider",{freeMode:!0,slidesPerView:"auto"});setTimeout((function(){e.update()}));var t=document.querySelector(".news__articles"),c=document.createElement("div"),a=document.querySelector(".btn-view.active")||c;document.addEventListener("click",(function(e){var c=e.target.closest(".btn-view");c&&t&&(a.classList.remove("active"),c.classList.add("active"),a=c,t.className="product-card-list ".concat(c.dataset.value))}))}();