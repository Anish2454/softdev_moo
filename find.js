var box = document.getElementById("box");
var bg = document.getElementsByClassName("full")[0];
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

//hardcode target as center
//randomize later
var targetX = Math.floor(Math.random() * boxWidth);
var targetY = Math.floor(Math.random() * boxHeight);


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

var maxDist = function (targetX, targetY) {
	
	var corner1 = distance(targetX, targetY, 0, 0);
	var corner2 = distance(targetX, targetY, 0, boxHeight);
	var corner3 = distance(targetX, targetY, boxWidth, 0);
	var corner4 = distance(targetX, targetY, boxWidth, boxHeight);
	var maxCorner = Math.max(corner1, corner2, corner3, corner4);
	return maxCorner;

};

var findIt = function(e) {
  /* YOUR IMPLEMENTATION */
  var x = e.x;
  var y = e.y;
  if (distance(x, y, targetX, targetY) < 20 || true){
  	
  	console.log("FOUND!");
  	box.innerHTML += "<div id='atom' style='position: absolute; left = " + targetX + " ; top = " + targetY + "; background-image: https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwiWq6TEy4fYAhWnQ98KHZGwDUUQjRwIBw&url=https%3A%2F%2Fdiscuss.atom.io%2Ft%2Fnew-atom-logo-and-icon%2F8704&psig=AOvVaw214lx_eQdOzz1dV9souk4h&ust=1513275164375019;'></div>"; 
  	bg.setAttribute("style", "background-color: rgb(" + dist +", " + dist + ", " + 255 + " );");
  }
  var maxD = maxDist(targetX, targetY);
  //console.log("X: " + x);
  //console.log("Y: " + y);
  var dist = 255 - (Math.floor(distance(x, y, targetX, targetY) * (255 / maxD)));
  //console.log(dist);
  bg.setAttribute("style", "background-color: rgb(" + dist +", " + dist + ", " + 255 + " );");
};

/*
your OTHER FXNS

*/

box.addEventListener("mousemove", findIt);
