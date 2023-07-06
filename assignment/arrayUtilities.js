const doubleNumber = (numbers) => {
	if(!Array.isArraay(numbers)){
		return -1
	}
	return numbers.map(num => num*2)
}

module.exports = {doubleNmubers}