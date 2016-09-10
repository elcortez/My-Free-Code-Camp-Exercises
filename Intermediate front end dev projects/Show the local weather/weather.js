$(document).ready(function() {
  $('#getWeather').on('click', function(){
    var getIP = 'http://ip-api.com/json/';
    $.getJSON(getIP).done(function(location) {
      $('#currentLocation').text(location.city + ', ' + location.region + ', ' + location.country);
      $.getJSON(openWeatherMap, {
        lat: location.lat,
        lon: location.lon,
        units: 'metric',
        APPID: a9c241803382387694efa243346ec4d7
      })
      $('#currentLocation').text(Math.round(weather.main.temp));
    })
  })
})
