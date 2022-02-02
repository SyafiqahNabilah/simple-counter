var num;

function init(){
	num = document.getElementById('display');
	num = 0;
	document.getElementById("display").innerHTML = num;


}

function counterAdd(){
	num++;
	document.getElementById("display").innerHTML = num;
}
function counterMinus(){
	num--;
	document.getElementById("display").innerHTML = num;
}
window.onload = init;