$(document).ready(function() {
  $('#getWeather').on('click', function(){
    myLatAndLon(function(result) {
      var lat = result[0];
      var lon = result[1];
      console.log(myWeather(lat, lon));
      // Here, although the params work in browser, the message that gets returned in console is : "NS_ERROR_DOM_BAD_URI: Access to restricted URI denied"
    });
  })
})

function myLatAndLon(callback) {
  $.getJSON('http://ip-api.com/json/').done( function(location) {
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
      APPID: 'a9c241803382387694efa243346ec4d7'//,
      // success: function (data) {
      //   console.log(data);
      // }
    });
  // The params are good, and when I type them on my browser, everything works fine
}

