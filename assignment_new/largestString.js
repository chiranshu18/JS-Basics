function largestString(arr){
	let len = 0;
	let ans = '';
	arr.forEach(str => {
		if(str.length > len){
			len = str.length;
			ans = str;
		}
		// ans = str.length > len ? (len = str.length && ans == str) : ans = ans
	});
	return ans;
}

let largestString2 = (arr) => {
	let len = 0;
	let ans = '';
	arr.forEach(str => {
		if(str.length > len){
			len = str.length;
			ans = str;
		}
		// str.length > len ? (len = str.length && ans == str)
	});
	return ans;
};

// THIS QUESTION CAN BE DOE USING REDUCE

console.log(largestString(['we', 'love', 'code', 'academy']));
console.log(largestString2(['we', 'love', 'code', 'academy']));