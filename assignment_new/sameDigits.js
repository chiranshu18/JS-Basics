function sameDigits(num){
	let arr = num.toString().split('').sort();
	if(arr[0] == arr[arr.length-1]){
		return true;
	}
	else{
		return false;
	}
}
console.log(sameDigits(223));