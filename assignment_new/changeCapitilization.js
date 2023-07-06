function changeCapitilization (string) {
	let str = ''
	for(let i=0; i<string.length; i++){
		str += string[i] === string[i].toLowerCase() ? string[i].toUpperCase() : string[i].toLowerCase()
	}
	return str
}

const changeCapitilization2 = (string) => {
	let str = ''
	for(let i=0; i<string.length; i++){
		str += string[i] === string[i].toLowerCase() ? string[i].toUpperCase() : string[i].toLowerCase()
	}
	return str
}

console.log(changeCapitilization('Hi My naMe iS ChIrAnShU'))
console.log(changeCapitilization2('hI mY NAmE Is cHiRaNsHu'))