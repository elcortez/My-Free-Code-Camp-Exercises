function orbitalPeriod(arr) {
  var earthGM = 398600.4418;
  var earthRadius = 6367.4447;
  final_arr = []
  arr.forEach(function(elmt){
    final_arr .push({
      name: elmt.name,
      orbitalPeriod: Math.round(orbitCalculator(elmt.avgAlt, earthGM, earthRadius))
    })
  });
  return final_arr;
}

function orbitCalculator(avgAlt, earthGM, earthRadius) {
  return 2 * Math.PI *(Math.sqrt(Math.pow((earthRadius + avgAlt), 3)/earthGM));
}


console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}])) // should return [{name: "sputnik", orbitalPeriod: 86400}]
console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])) // should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]
