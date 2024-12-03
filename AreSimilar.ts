// 2 arrays are similar when they are equal or they can be equal with only one swap

const areSimilar = (arr1: number[], arr2: number[]): boolean => {
	let a: number[] = [];
	let b: number[] = [];

	if (arr1.toString() === arr2.toString()) {
		return true;
	}

	if (arr1.length !== arr2.length) return false;

	for (let i = 0; i < arr1.length; i++) {
		if (arr2[i] !== arr1[i]) {
			a.push(arr1[i]);
			b.push(arr2[i]);
		}
	}

	if (a.length > 2 || b.length > 2 || a.toString() !== b.reverse().toString()) {
		return false;
	}

	return true;
};

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [1, 3, 2]));
console.log(areSimilar([1, 2, 3], [1, 3, 5]));
console.log(areSimilar([1, 2, 2], [1, 1, 2]));