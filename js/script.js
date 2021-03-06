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

var pinkMap;
var pinkPlacemark;

ymaps.ready(function () {
  pinkMap = new ymaps.Map("map", {
    center: [59.9363, 30.3229],
    zoom: 16,
    controls: []
  }),
  pinkPlacemark = new ymaps.Placemark(([59.9363, 30.3229]), {
  }, {
    iconLayout: "default#image",
    iconImageHref: "img/icon-map-marker.svg",
    iconImageSize: [36, 36],
    iconImageOffset: [0, 0]
  });
  pinkMap.geoObjects.add(pinkPlacemark);
});
