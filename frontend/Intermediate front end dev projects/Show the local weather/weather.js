$(document).ready(function() {
  $('#getWeather').on('click', function() {
    myLatAndLon(function(GeolocationResult) {
      var lat = GeolocationResult[0];
      var lon = GeolocationResult[1];
      // console.log(JSON.stringify(GeolocationResult));
      myWeather(lat, lon).done(function(weatherResult) {
        $('#weather').html(JSON.stringify(weatherResult['weather'][0]['description']))
        console.log(JSON.stringify(weatherResult));
        if(weatherResult['weather'][0]['main'] === 'Clouds'){
          $('#icon').html('Many clouds today !')
        }
        else {
          $('#icon').html('No clouds today !')
        }
      });
    });
  })
})

function myLatAndLon(callback) {
  $.getJSON('http://ip-api.com/json/').done(function(location) {
    var arr = [];
    arr.push(location.lat);
    arr.push(location.lon);
    callback(arr);
  });
}

function myWeather(lat, lon) {
  return $.getJSON('http://api.openweathermap.org/data/2.5/weather', {
    lat: lat,
    lon: lon,
    APPID: 'a9c241803382387694efa243346ec4d7'
  })
}
