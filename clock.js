var second = document.getElementById("second");
var minute = document.getElementById("minute");
var hour = document.getElementById("hour");
var secDeg = 6;
var secCur = 0;
var minDeg = 6;
var minCur = 0;
var hrDeg = 30;
var hrCur = 0;
var secMove = function(){
	secCur += secDeg;
	document.getElementById("second").style.transform = "rotate(" +secCur +"deg)";
}
var minMove = function(){
	minCur += minDeg;
	document.getElementById("minute").style.transform = "rotate(" +minCur +"deg)";
}
var hrMove = function(){
	hrCur += hrDeg;
	document.getElementById("hour").style.transform = "rotate(" +hrCur +"deg)";
}
setInterval(secMove, 1000);
setInterval(hrMove, 3600000);
setInterval(minMove, 60000);
