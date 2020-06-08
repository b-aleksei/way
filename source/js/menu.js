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

//плавный скролл с главного экрана

(function () {

let anchor = document.querySelector(".main-bg__watch");

  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    let getId = anchor.getAttribute("href");

    if (getId) {
      document.querySelector(getId).scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
    }
  })


  let anchors = document.querySelectorAll(".scroll-to");
  let previousTarget = document.createElement('div');

  anchors.forEach(anchor => {

    anchor.addEventListener("click", function (e) {
    e.preventDefault();

    let getId = anchor.getAttribute("href");

    if (getId) {
      previousTarget.style.display = 'none'
      let target = document.querySelector(getId);
      target.style.display = 'block';
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
      previousTarget = target;
    }
  })
  })



/*
scroll-to - класс каждой ссылки анкора

.to_top {
  display: none;
  position: fixed;
  bottom: 30px;
  right: 10px;
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  box-shadow: 0 0 5px 1px rgba(103, 58, 39, 0.8);
  color: #ba0b11;
  background-color: #ffecb8;
  cursor: pointer;
  border-radius: 5px;
  z-index: 999;
}

.to_top:active {
  color: #000000;
}

.to_top-show {
  display: block;
}
*/

})();

