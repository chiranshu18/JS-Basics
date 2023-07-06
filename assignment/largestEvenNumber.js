function isEven(num){
	return num % 2 === 0 ? true : false;
}

function largestEven(arr) {
	let value = -1;
	arr.forEach(num => {
		if(isEven(num)){
			value = Math.max(num, value);
		}
	});
	return value;
}

let largestEven2 = (arr) => {
	let value = -1;
	arr.forEach(num => {
		if(isEven(num)){
			value = Math.max(num, value);
		}
	});
	return value;
};

console.log(largestEven2([12, 34, 11, 56, 78, 45, 57]));
console.log(largestEven([12, 34, 11, 56, 78, 45, 57]));