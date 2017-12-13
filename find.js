var box = document.getElementById("box");
var bg = document.getElementsByClassName("full")[0];
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

//hardcode target as center
//randomize later
var targetX = boxWidth / 2;
var targetY = boxHeight / 2;


console.log( "box height: " + boxHeight );
console.log( "box width: " + boxWidth );

//calculate distance between current mouse pos and target
var distance = function (x0, y0, x1, y1) {
  /* YOUR IMPLEMENTATION */
  var xdiff = x0 - x1;
  var ydiff = y0 - y1;
  var dist = Math.sqrt((xdiff * xdiff) + (ydiff * ydiff));
  return dist;
};


var findIt = function(e) {
  /* YOUR IMPLEMENTATION */
  var x = e.x;
  var y = e.y;
  //console.log("X: " + x);
  //console.log("Y: " + y);
  var dist = distance(x, y, targetX, targetY);
  console.log(dist);
};

/*
your OTHER FXNS

*/

box.addEventListener("mousemove", findIt);
