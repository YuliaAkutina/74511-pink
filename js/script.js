var pageHeader = document.querySelector(".page-header");
var navToggler = document.querySelector(".page__header-toggler");

pageHeader.classList.add("page-header--menu-close");
pageHeader.classList.remove("page-header--no-js");

navToggler.addEventListener("click", function() {
  if (pageHeader.classList.contains("page-header--menu-close"))
    {
      pageHeader.classList.remove("page-header--menu-close");
    } else {
      pageHeader.classList.add("page-header--menu-close");
    }
});
