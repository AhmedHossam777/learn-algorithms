const alternativeSum = (arr: number[]): number[] => {
	let firstElement = 0;
	let secondElement = 0;

	let newArr: number[];

	for (let i = 0; i < arr.length; i++) {
		if (i % 2 === 0) {
			firstElement += arr[i];
		} else {
			secondElement += arr[i];
		}
	}

	newArr = [firstElement, secondElement];

	return newArr;
};

console.log(alternativeSum([50, 60, 60, 45, 70]));