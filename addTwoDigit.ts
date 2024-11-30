// given 2 integer, returns the sum of it's digits

const add = (number: number): number => {
	let nums = number.toString().split('');
	let result = 0;

	for (let num of nums) {
		result += parseInt(num);
	}

	return result;
};

console.log(add(29));