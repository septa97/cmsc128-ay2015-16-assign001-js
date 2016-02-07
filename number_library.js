'use strict';



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

		numberInString += checkPlace(divisor, input/divisor);
		input = input % divisor;
		divisor = Math.floor(divisor/10);
	}

	console.log(numberInString);
}



function checkPlace(divisor) {

	divisor = divisor.toString();
	let place = '';

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