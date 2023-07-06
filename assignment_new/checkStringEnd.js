function checkStringEnd(string){
	return string.length >= 6 ? string.slice(string.length-6) == 'Script' : false;
}

const checkStringEnd2 = (string) => {
	return string.length >= 6 ? string.slice(string.length-6) == 'Script' : false;
};

module.exports = checkStringEnd