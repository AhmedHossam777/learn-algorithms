const areEquallyStrong = (
	n1: number,
	n2: number,
	r1: number,
	r2: number,
): boolean => {
	let N = n1 + n2;
	let R = r1 + r2;
	return N === R;
};

console.log(areEquallyStrong(10, 15, 15, 9));