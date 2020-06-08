"use strict";
//плавный скролл анкоров
(function () {

  let linksMain = document.querySelectorAll(".scroll-to");
  let anchors = document.querySelectorAll(".show-content");
  let previousTarget = document.querySelector('.tabs__item:last-child');
  let goToTop = document.querySelector(".to_top");

  let makeSmoothScroll = function (link, callBack) {

    link.addEventListener("click", function (e) {
      e.preventDefault();

      let targetId = this.getAttribute("href");

      if (targetId) {
        let target = document.querySelector(targetId)
        if (callBack) {
          callBack(target)
        }
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        })
      }
    })
  }

  let showTarget = function (target) {
    previousTarget.style.display = 'none'
    target.style.display = 'block';
    previousTarget = target;
  }

  linksMain.forEach(link => {
    makeSmoothScroll(link)
  })

  anchors.forEach(link => {
    makeSmoothScroll(link, showTarget)
  })


  function trackScroll() {
  let scrolled = window.pageYOffset;
  let coords = document.documentElement.clientHeight;
  if (scrolled > coords) {
    goToTop.classList.add("to_top-show");
  }
  if (scrolled < coords) {
    goToTop.classList.remove("to_top-show");
  }
}

function backToTop() {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -80);
    setTimeout(backToTop);
  }
}

window.addEventListener("scroll", trackScroll);
goToTop.addEventListener("click", backToTop);

})();

