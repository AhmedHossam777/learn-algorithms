// const add = (a: number, b: number) => {
// 	return a + b;
// };
//
// console.log(add(1, 2));

const add = (...args: number[]): number => {
	let result = 0;
	for (let argument of args) {
		result += argument;
	}

	return result;
};

console.log(add(1, 2, 3));