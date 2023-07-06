function largestEven(arr) {
	let value = -1;
	arr.forEach(num => {
		value = num % 2 === 0 ? Math.max(num, value) : value
	});
	return value;
}

let largestEven2 = (arr) => {
	let value = -1;
	arr.forEach(num => {
		value = num % 2 === 0 ? Math.max(num, value) : value
	});
	return value;
};

module.exports = {largestEven, largestEven2}
