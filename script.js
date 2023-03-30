'use strict';

const increase = document.querySelector('#increase');
const decrease = document.querySelector('#decrease');
let count = 0


increase.addEventListener('click', countInc)
decrease.addEventListener('click', countDec)
function countInc() {
	count++;
	document.querySelector('#count').textContent = count
}
function countDec() {
	count--
	if (count < 0){
		count = 0
	}
		document.querySelector('#count').textContent = count
}