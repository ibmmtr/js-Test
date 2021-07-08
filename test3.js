var number = function (busStops) {
  let leavedPass = 0;
  let stayedPass = 0;
  for (i = 0; i < busStops.length; i++) {
    console.log("i index is =" + i);
    for (z = 1; z < busStops[i].length; z++) {
      console.log("z index is =" + z);
      stayedPass += busStops[i][0];
      leavedPass += busStops[i][1];
    }
  }
  return stayedPass - leavedPass;
};
//! Another Solution
var number1 = function (busStops) {
  var totalPeople = 0;
  for (var i = 0; i < busStops.length; i++) {
    totalPeople += busStops[i][0];
    totalPeople -= busStops[i][1];
  }
  return totalPeople;
};
var number3 = function (busStops) {
  let leavedPass = 0;
  let stayedPass = 0;
  for (i = 0; i < busStops.length; i++) {
    console.log("i index is =" + i);
    stayedPass += busStops[i][0];
    leavedPass += busStops[i][1];
  }
  return stayedPass - leavedPass;
};
console.log(
  number3([
    [3, 0],
    [9, 1],
    [4, 8],
    [12, 2],
    [6, 1],
    [7, 8],
  ])
);
