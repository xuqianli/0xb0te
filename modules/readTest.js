var lazy = require("lazy"),
    fs = require("fs");
var count = 0;
var average = 0;
var routeCoords = [[]];
new lazy(fs.createReadStream('./routeCoords.txt'))
  .lines
  .forEach(function(line, i){
    var coords = line.toString().split(', ');
    console.log (parseFloat(coords[0]));
    routeCoords [i][0] = 1;
    // routeCoords [i][1] = parseFloat(coords[1]);
    //console.log (routeCoords [i][0]);
  }
);


// for (var i = 2; i < routeCoords.length; i ++) {
//     average = (routeCoords[i-2] + routeCoords[i-1] + routeCoords[i])/3;
//     console.log (average);
// }
// var items = [[1,2],[3,4],[5,6]];
// console.log(items[0][1]); 

// var lazy = require("lazy"),
//     fs = require("fs");
// var count = 0;
// var average = 0;
// var routeCoords = [[]];
// new lazy(fs.createReadStream('./routeCoords.txt'))
//   .lines
//   .forEach(function(line, i){
//     var coords = line.toString().split(', ');
//     routeCoords.push([parseFloat(coords[0]),parseFloat(coords[1])]);
//     console.log (parseFloat(coords[0]));
//   }
// );