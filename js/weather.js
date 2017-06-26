window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];
window.myWidgetParam.push({
  id: 11,
  cityid: '5128581',
  appid: '92e75435fc38ab8f87c0183e3c4d23e8',
  units: 'imperial',
  containerid: 'openweathermap-widget-11',
});
(function() {
  var script = document.createElement('script');
script.async = true;
script.src = "https://openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(script, s);  })();
