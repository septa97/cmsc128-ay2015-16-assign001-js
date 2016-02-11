'use strict';


/**
 *	Here are the 4 main functions	
 *
 */
function numToWords(input) {

	let divisor = 1000000;
	let numberInString = '';

	while (input > 0) {

		switch (Math.floor(input/divisor)) {
			case 1:
				if (checkIfTens(divisor) == false) {
					numberInString += 'one ';
				}
				else {
					// Special numbers (10 - 19)
					numberInString += getSpecialNumber(input, divisor);
					input = input % divisor;
					divisor = Math.floor(divisor/10);
				}
				break;
			case 2:
				numberInString += (checkIfTens(divisor) == false ? 'two ' : 'twenty ');
				break;
			case 3:
				numberInString += (checkIfTens(divisor) == false ? 'three ' : 'thirty ');
				break;
			case 4:
				numberInString += (checkIfTens(divisor) == false ? 'four ' : 'fourty ');
				break;
			case 5:
				numberInString += (checkIfTens(divisor) == false ? 'five ' : 'fifty ');
				break;
			case 6:
				numberInString += (checkIfTens(divisor) == false ? 'six ' : 'sixty ');
				break;
			case 7:
				numberInString += (checkIfTens(divisor) == false ? 'seven ' : 'seventy ');
				break;
			case 8:
				numberInString += (checkIfTens(divisor) == false ? 'eight ' : 'eighty ');
				break;
			case 9:
				numberInString += (checkIfTens(divisor) == false ? 'nine ' : 'ninety ');
				break;
		}

		numberInString += checkPlace(divisor, Math.floor(input/divisor));
		input = input % divisor;
		divisor = Math.floor(divisor/10);
	}

	console.log(numberInString);

	return numberInString;
}



function wordsToCurrency(amount, currency) {
	let value = '';

	value += currency;
	value += wordsToNum(amount);

	console.log(value);

	return value;
}



function wordsToNum(numberInString) {
	var numberInInteger = 0;
	var scales = [], numbers = [];
	var str = numberInString.split(" ");
	var temp = 0;
	var numberChecker;

	for (var i = 0; i < str.length; i++) {
		numberChecker = true;

		switch (str[i]) {
			case 'one':
				temp += 1;
				break;
			case 'two':
				temp += 2;
				break;
			case 'three':
				temp += 3;
				break;
			case 'four':
				temp += 4;
				break;
			case 'five':
				temp += 5;
				break;
			case 'six':
				temp += 6;
				break;
			case 'seven':
				temp += 7;
				break;
			case 'eight':
				temp += 8;
				break;
			case 'nine':
				temp += 9;
				break;
			case 'ten':
				temp += 10;
				break;
			case 'eleven':
				temp += 11;
				break;
			case 'twelve':
				temp += 12;
				break;
			case 'thirteen':
				temp += 13;
				break;
			case 'fourteen':
				temp += 14;
				break;
			case 'fifteen':
				temp += 15;
				break;
			case 'sixteen':
				temp += 16;
				break;
			case 'seventeen':
				temp += 17;
				break;
			case 'eighteen':
				temp += 18;
				break;
			case 'nineteen':
				temp += 19;
				break;
			case 'twenty':
				temp += 20;
				break;
			case 'thirty':
				temp += 30;
				break;
			case 'fourty':
				temp += 40;
				break;
			case 'fifty':
				temp += 50;
				break;
			case 'sixty':
				temp += 60;
				break;
			case 'seventy':
				temp += 70;
				break;
			case 'eighty':
				temp += 80;
				break;
			case 'ninety':
				temp += 90;
				break;
			default:
				numberChecker = false;
				scales.push(str[i]);
				break;
		}

		if (numberChecker == false) {
			numbers.push(temp);
			temp = 0;
		}
	}

	if (temp > 0) {
		numbers.push(temp);
		temp = 0;
	}

	while (numbers.length != 0) {
		if (scales.length != 0) {
			var currentScale = scales.shift();
			if (currentScale == 'hundred' && scales[0] == 'thousand') {
				numberInInteger += (numbers.shift() * 100000) + (numbers.shift() * checkValue(scales.shift()));
			}
			else {
				numberInInteger += (numbers.shift() * checkValue(currentScale));
			}
		}
		else {
			numberInInteger += numbers.shift();
		}
	}

	console.log("Number in string: " + numberInInteger);

	return numberInInteger;
}



function numberDelimited(number, delimiter, jumps) {

}



function checkValue(word) {

	switch (word) {
		case 'million':
			return 1000000;
		case 'thousand':
			return 1000;
		case 'hundred':
			return 100;
	}
}



function checkPlace(divisor, validator) {

	divisor = divisor.toString();
	let place = '';

	if (validator > 0) {
		switch (divisor.length) {
			case 7:
				place += 'million ';
				break;
			case 6:
				place += 'hundred ';
				break;
			case 4:
				place += 'thousand ';
				break;
			case 3:
				place += 'hundred ';
				break;
		}
	}

	return place;
}



function getSpecialNumber(input, divisor) {

	let tens, ones;

	tens = Math.floor(input/divisor);
	ones = input % divisor;
	divisor = Math.floor(divisor/10);
	ones = Math.floor(ones/divisor);

	switch (ones) {
		case 0:
			return 'ten ';
		case 1:
			return 'eleven ';
		case 2:
			return 'twelve ';
		case 3:
			return 'thirteen ';
		case 4:
			return 'fourteen ';
		case 5:
			return 'fifteen ';
		case 6:
			return 'sixteen ';
		case 7:
			return 'seventeen ';
		case 8:
			return 'eighteen ';
		case 9:
			return 'nineteen ';
	}
}



function checkIfTens(divisor) {

	divisor = divisor.toString();
	
	return ((divisor.length == 5 || divisor.length == 2) ? true : false);
}