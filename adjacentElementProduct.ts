// for array input find the pair of adjacent element that give the largest product then return that product

const adjacentElementProduct = (arr: number[]): number => {
	let max = arr[0] * arr[1];
	for (let i = 0; i <= arr.length; i++) {
		if (arr[i] * arr[i + 1] > max) {
			max = arr[i] * arr[i + 1];
		}
	}
	return max;
};

console.log(adjacentElementProduct([3, 6, -2, -5, 7, 3]));