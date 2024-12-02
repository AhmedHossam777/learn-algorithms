const alphabeticSubSequence = (str: string): boolean => {
	let arr = str.split('');

	for (let i = 1; i < arr.length; i++) {
		if (arr[i - 1].charCodeAt(0) >= arr[i].charCodeAt(0)) {
			return false;
		}
	}

	return true;
};

console.log(alphabeticSubSequence('base'));