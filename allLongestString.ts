// given an array of string returns an array of longest strings

const allLongestStr = (arr: string[]): string[] => {
	let maxLength = 0;
	let maxArr: string[] = [];
	for (let element of arr) {
		if (`${element}`.length > maxLength) {
			maxLength = `${element}`.length;
		}
	}

	console.log(maxLength);

	for (let element of arr) {
		if (`${element}`.length === maxLength) {
			maxArr.push(element);
		}
	}

	return maxArr;
};

console.log(allLongestStr(['ahmed', 'dada', 'dod', 'adada']));