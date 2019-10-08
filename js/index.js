var clockEl = document.getElementById('mainClock');
var backgroundEl = document.getElementById('background');
function update() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
	var r = Math.round(h * 256 / 24 + m * 256 / 3600);
	var g = Math.round(m * 256 / 60 + s * 256 / 3600);
	var b = Math.round(s * 256 / 60 + today.getMilliseconds() * 256 / 60000);
  m = checkTime(m);
  s = checkTime(s);
  clockEl.innerHTML = h + ":" + m + ":" + s;
	backgroundEl.style['background-color']="rgb(" + r + "," + g + "," + b + ")";
  var t = setTimeout(function(){update()}, 1000 - Date.now() % 1000);
}

function checkTime(i) {
  if (i < 10) i = "0" + i;  // add zero in front of numbers < 10
  return i;
}

window.addEventListener('load', function() {
  setTimeout(function(){update()}, 1000 - Date.now() % 1000);
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../sw.js');
  }
});
