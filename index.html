<html>
<head>
<title>Pentago</title>
<style type='text/css'>
.square{
background: red;
width: 50px;
height: 50px;
text-align: center;
}

.occupied{
  -webkit-appearance:none;
  width:20px;
  height:20px;
  border:1px solid white;
  border-radius:50%;
  outline:none;
  box-shadow:0 0 5px 0px gray inset;
  background: white;


}

.ai-occupied{
  -webkit-appearance:none;
  width:20px;
  height:20px;
  border:1px solid black;
  border-radius:50%;
  outline:none;
  box-shadow:0 0 5px 0px gray inset;
  background: black;


}
</style>
<script>
var moves = 0;
var can_place = true;
var can_rotate = false;
var starttime = new Date().getTime();
function initialize() {
	for (i=0; i<36; i++)
	{
	document.getElementsByClassName('square')[i].innerHTML = "<input type='radio' id='space"+i+"' class='unoccupied' onclick='placePiece("+i+"); this.checked = false;'>";
        document.getElementsByClassName('square')[i].id += i;
	}
}

function placePiece(j) {
if(can_place == true){
can_place = false;
can_rotate = true;

if (document.getElementById('space'+j).className == 'unoccupied')
{
document.getElementById('space'+j).className = 'occupied';
moves++;
checkWin();

}
else{
alert("This square on the board has already been taken.");
}
}
else{
alert("You must rotate a section of the board first.");
}
}

function randomMove(){
x = Math.floor((Math.random() * 36));
if(document.getElementById('space'+x).className == 'unoccupied'){
document.getElementById('space'+x).className = 'ai-occupied';
y = Math.floor((Math.random() * 4)+1);
z = Math.floor((Math.random() * 2)+1);
if(z==1){
window.setTimeout(function () {
  airotate(y, 'clockwise');
},1000);
}
else if(z==2){
window.setTimeout(function () {
  airotate(y, 'anticlockwise');
},1000);

}
}
else{
randomMove();
}
}

function aiMove() {

if(moves==1){
randomMove();
}
else{
x = [];
for(i=0; i<36; i++){
x.push(document.getElementById('space'+i).className);
}
var act;
for(n=0; n<31; n++){
//Ai piece placing decisions
//Place piece to win
if(x[n]=='ai-occupied'&&x[n+1]=='ai-occupied'&&x[n+2]=='ai-occupied'&&x[n+3]=='ai-occupied'){
	act = true;
        s = n+4;
        break;
	}

else if(x[n]=='ai-occupied'&&x[n+6]=='ai-occupied'&&x[n+12]=='ai-occupied'&&x[n+18]=='ai-occupied'){
	act = true;
        s = n+24;
        break;
	}
else if(x[n]=='ai-occupied'&&x[n+7]=='ai-occupied'&&x[n+14]=='ai-occupied'&&x[n+21]=='ai-occupied'){
	act = true;
        s = n+28;
        break;
	}

//Place piece to block win
else if(x[n]=='occupied'&&x[n+1]=='occupied'&&x[n+2]=='occupied'&&x[n+3]=='occupied'){
	act = true;
        s = n+4;
        break;
	}
else if(x[n]=='occupied'&&x[n+1]=='occupied'&&x[n+2]=='occupied'&&x[n+3]=='occupied'){
	act = true;
        s = n+4;
        if(s==4||s==11||s==17||s==23||s==29||35){
        s = n-1;
        }
        break;
	}
else if(x[n]=='occupied'&&x[n+6]=='occupied'&&x[n+12]=='occupied'&&x[n+18]=='occupied'){
	act = true;
        s = n+24;
        break;
	}
else if(x[n]=='occupied'&&x[n+7]=='occupied'&&x[n+14]=='occupied'&&x[n+21]=='occupied'){
	act = true;
        s = n+28;
        break;
	}

else if(x[n]=='ai-occupied'&&x[n+1]=='ai-occupied'&&x[n+2]=='unoccupied'){
	act = true;
        s = n+2;
        break;
	}
else if(x[n]=='occupied'&&x[n+1]=='occupied'){
	act = true;
        s = n+2;
        break;
	}
else if(x[n]=='occupied'&&x[n+6]=='occupied'){
	act = true;
        s = n+12;
        break;
	}
else if(x[n]=='occupied'&&x[n+7]=='occupied'){
	act = true;
        s = n+14;
        break;
	}
else if(x[n]=='ai-occupied'&&x[n+1]=='unoccupied'){
	act = true;
        
        if(n+1==5||n+1==11||n+1==17)
         {
         s=n+6;
         }
         else{
        s = n+1;
}
        break;
	}
}

if(act==true){

if(document.getElementById('space'+s).className == 'unoccupied'&&s<36){
document.getElementById('space'+s).className = 'ai-occupied';
checkWin();
y = Math.floor((Math.random() * 4)+1);
z = Math.floor((Math.random() * 2)+1);
if(z==1){
window.setTimeout(function () {
  airotate(y, 'clockwise');
},1000);
}
else if(z==2){
window.setTimeout(function () {
  airotate(y, 'anticlockwise');
},1000);

}
}
else{
randomMove();
}
}
else{
randomMove();
}
}
}
function endGame(result) {
var endtime = new Date().getTime();
document.getElementById('board').style.display = 'none';
var time = endtime - starttime;

seconds=(time/1000)%60
minutes=(time/(1000*60))%60
	if(result=="win"){
		if(minutes>1){
		document.getElementById('board').innerHTML = 'Well done! You beat the computer in '+minutes+' minutes '+seconds+' seconds. Click <a href="pentago.html">here</a> to play again.';
		}
		else{
		document.getElementById('board').innerHTML = 'Well done! You beat the computer in '+seconds+' seconds.  Click <a href="pentago.html">here</a> to play again.';
		}
		document.getElementById('board').style.display = 'block';
		var name = prompt("Enter your name to be added to the leaderboard");
		var xhttp = new XMLHttpRequest();
                xhttp.open("GET", "https://script.google.com/macros/s/AKfycbx0_BZzEjmq_f1Hvp5mQYhe47ObwMsWlLV_FIOia_TndHq2NR7g/exec?Name="+name+"&Time="+time+"", true);
                xhttp.send();
		}
		else if(result=="lose"){
		document.getElementById('board').innerHTML = 'Unlucky! Click <a href="pentago.html">here</a> to play again.';
		document.getElementById('board').style.display = 'block';
		}

}
function checkWin() {
x = [];
for(i=0; i<36; i++){
x.push(document.getElementById('space'+i).className);
}
var n;
for(n=0; n<31; n+=6){
if(x[n]=='occupied'&&x[n+1]=='occupied'&&x[n+2]=='occupied'&&x[n+3]=='occupied'&&x[n+4]=='occupied'){
	alert("Congratulations! You have won the game.");
        endGame("win");
        break;
	}
}
for(n=1; n<32; n+=6){
if(x[n]=='occupied'&&x[n+1]=='occupied'&&x[n+2]=='occupied'&&x[n+3]=='occupied'&&x[n+4]=='occupied'){
	alert("Congratulations! You have won the game.");
        endGame("win");
      
        break;
	}
}
for(n=0; n<12; n+=1){
if(x[n]=='occupied'&&x[n+6]=='occupied'&&x[n+12]=='occupied'&&x[n+18]=='occupied'&&x[n+24]=='occupied'){
	alert("Congratulations! You have won the game.");
endGame("win");
        break;
	}
}
for(n=0; n<8; n+=1){
if(x[n]=='occupied'&&x[n+7]=='occupied'&&x[n+14]=='occupied'&&x[n+21]=='occupied'&&x[n+28]=='occupied'){
	alert("Congratulations! You have won the game.");
endGame("win");
        break;
	}
}
for(n=0; n<12; n+=1){
if(x[n]=='occupied'&&x[n+5]=='occupied'&&x[n+10]=='occupied'&&x[n+15]=='occupied'&&x[n+20]=='occupied'){
	alert("Congratulations! You have won the game.");
endGame("win");
        break;
	}
}
for(n=0; n<31; n+=6){
if(x[n]=='ai-occupied'&&x[n+1]=='ai-occupied'&&x[n+2]=='ai-occupied'&&x[n+3]=='ai-occupied'&&x[n+4]=='ai-occupied'){
	alert("Unlucky. You couldn't out smart the computer.");
endGame("lose");
        break;
	}
}
for(n=1; n<32; n+=6){
if(x[n]=='ai-occupied'&&x[n+1]=='ai-occupied'&&x[n+2]=='ai-occupied'&&x[n+3]=='ai-occupied'&&x[n+4]=='ai-occupied'){
	alert("Unlucky. You couldn't out smart the computer.");
endGame("lose");
        break;
	}
}
for(n=0; n<12; n+=1){
if(x[n]=='ai-occupied'&&x[n+6]=='ai-occupied'&&x[n+12]=='ai-occupied'&&x[n+18]=='ai-occupied'&&x[n+24]=='ai-occupied'){
	alert("Unlucky. You couldn't out smart the computer.");
endGame("lose");
        break;
	}
}
for(n=0; n<8; n+=1){
if(x[n]=='ai-occupied'&&x[n+7]=='ai-occupied'&&x[n+14]=='ai-occupied'&&x[n+21]=='ai-occupied'&&x[n+28]=='ai-occupied'){
	alert("Unlucky. You couldn't out smart the computer.");
endGame("lose");
        break;
	}
}
for(n=0; n<12; n+=1){
if(x[n]=='ai-occupied'&&x[n+5]=='ai-occupied'&&x[n+10]=='ai-occupied'&&x[n+15]=='ai-occupied'&&x[n+20]=='ai-occupied'){
	alert("Unlucky. You couldn't out smart the computer.");
endGame("lose");
        break;
	}
}


if(x.indexOf('unoccupied')==-1){
alert("The game was a draw as there are no free spaces left on the board.");
}
}
section1 = [0,1,2,6,7,8,12,13,14];
section2 = [3,4,5,9,10,11,15,16,17];
section3 = [18,19,20,24,25,26,30,31,32];
section4 = [21,22,23,27,28,29,33,34,35];




</script>
<script src='rotate.js'></script>
<script src='http://code.jquery.com/jquery-1.12.2.js'></script>
</head>
<body onload='initialize()'>
<script>
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '804637696333007',
      xfbml      : true,
      version    : 'v2.5'
    });

    // ADD ADDITIONAL FACEBOOK CODE HERE
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
</script>
<center>
<table id='board'>
<tr><td></td><td onclick='rotate(1,"anticlockwise")'>&#x2190;</td><td></td><td></td><td></td><td></td><td align='right' onclick='rotate(2,"clockwise")'>&#x2192;</td></tr>
<tr><td onclick='rotate(1,"clockwise")'>&#x2191;</td><td class='square'></td><td class='square'></td><td class='square' style='border-right: 2px solid black;'></td><td class='square' style='border-left: 2px solid black;'></td><td class='square'></td><td class='square'></td><td onclick='rotate(2,"anticlockwise")'>&#x2191;</td></tr>
<tr><td></td><td class='square'></td><td class='square'></td><td class='square' style='border-right: 2px solid black;'></td><td class='square' style='border-left: 2px solid black;'></td><td class='square'></td><td class='square'></td></tr>
<tr><td></td><td class='square' style='border-bottom: 2px solid black;'></td><td class='square' style='border-bottom: 2px solid black;'></td><td class='square' style='border-bottom: 2px solid black; border-right: 2px solid black;'></td><td class='square' style='border-bottom: 2px solid black; border-left: 2px solid black;'></td><td class='square' style='border-bottom: 2px solid black;'></td><td class='square' style='border-bottom: 2px solid black;'></td></tr>
<tr><td></td><td class='square' style='border-top: 2px solid black;'></td><td class='square' style='border-top: 2px solid black;'></td><td class='square' style='border-top: 2px solid black; border-right: 2px solid black;'></td><td class='square' style='border-top: 2px solid black; border-left: 2px solid black;'></td><td class='square' style='border-top: 2px solid black;'></td><td class='square' style='border-top: 2px solid black;'></td></tr>
<tr><td></td><td class='square'></td><td class='square'></td><td class='square' style='border-right: 2px solid black;'></td><td class='square' style='border-left: 2px solid black;'></td><td class='square'></td><td class='square'></td></tr>
<tr><td onclick='rotate(3,"anticlockwise")'>&#x2193;</td><td class='square'></td><td class='square'></td><td class='square' style='border-right: 2px solid black;'></td><td class='square' style='border-left: 2px solid black;'></td><td class='square'></td><td class='square'></td><td onclick='rotate(4,"clockwise")'>&#x2193;</td></tr>
<tr><td></td><td onclick='rotate(3,"clockwise")'>&#x2190;</td><td></td><td></td><td></td><td></td><td align='right' onclick='rotate(4,"anticlockwise")'>&#x2192;</td></tr>
</table>
Pentago by Michael Simmons <hr>
Click on a square to place your piece then click on an arrow to rotate that section of the board.<br><br>
<b>Version 0</b><br>
<u>Future Features</u><br>

Difficulty settings<br>
Animate rotations<br>
Multiplyer play via facebook chat<br>
<br><br>
<u>Known bugs</u><br>
Ai player can make you win by doing a silly rotation

</center>
</body>
</html>
