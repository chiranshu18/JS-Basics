function checkLeapYear(year) {
	return year % 100 == 0 ? year % 400 == 0 : year % 4 == 0;
}

function checkLeapYear2(year) {
	return year % 100 == 0 ? year % 400 == 0 : year % 4 == 0;
}

console.log(checkLeapYear(1900));
console.log(checkLeapYear2(2020));