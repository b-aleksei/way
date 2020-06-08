"use strict";

(function () {

let navButton = document.querySelector(".head__menu-opener");
let navMain = document.querySelector(".head");
let tabMenu = document.querySelector('.tabs__guide');
let tabs = tabMenu.querySelectorAll('.tabs__label');
let places =document.querySelector('.places__list');

// открытие меню
navMain.classList.add("head--js");
navButton.addEventListener("click", () => {
  navMain.classList.toggle("head--opened");
});

// изменение цвета таба по клику
tabMenu.addEventListener('click', function (e) {
  tabs.forEach(item => item.style.color = '')
  let link = e.target;
  if (this.contains(link)) {
    link.style.color = '#FE7865';
  }
})
// изменение цвета таба по клику на соответсвующую карточку
places.addEventListener('click', function (e) {
  tabs.forEach(item => item.style.color = '')
  let link = e.target;
  if (e.target.matches('.places__link')) {
    let attr = link.getAttribute('href');
   let tab = Array.from(tabs).find(item => item.hash === attr);
    tab.style.color = '#FE7865';
  }
})

})();

//плавный скролл анкоров

(function () {

  let linksMain = document.querySelectorAll(".scroll-to");
  let anchors = document.querySelectorAll(".show-content");
  let previousTarget = document.querySelector('.tabs__item:last-child');

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

  linksMain.forEach(anchor => {
  makeSmoothScroll(anchor)
  })

  anchors.forEach(anchor => {
  makeSmoothScroll(anchor, showTarget)
  })

})();

