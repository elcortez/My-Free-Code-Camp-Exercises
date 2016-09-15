$(document).ready(function() {
  $('#getWeather').on('click', function() {
    myLatAndLon(function(result) {
      var lat = result[0];
      var lon = result[1];
      console.log(JSON.stringify(result));
      $req = myWeather(lat, lon);
      $req.done(function(R) {
        console.log(JSON.stringify(R))
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
