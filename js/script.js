var pageHeader = document.querySelector(".page-header");
var menuTop = document.querySelector(".page-header__menu-top");
var navMain = document.querySelector(".main-nav");
var navToggler = document.querySelector(".nav-toggler");

pageHeader.classList.add("page-header--menu-close");
menuTop.classList.add("page-header__menu-top--close");
navMain.classList.add("main-nav--close");
navToggler.classList.add("nav-toggler--close");

navToggler.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--close"))
    {
      navMain.classList.remove("main-nav--close");
      pageHeader.classList.remove("page-header--menu-close");
      menuTop.classList.remove("page-header__menu-top--close");
      navToggler.classList.remove("nav-toggler--close");
    } else {
      pageHeader.classList.add("page-header--menu-close");
      menuTop.classList.add("page-header__menu-top--close");
      navMain.classList.add("main-nav--close");
      navToggler.classList.add("nav-toggler--close");
    }
});