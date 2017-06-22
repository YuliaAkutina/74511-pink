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
