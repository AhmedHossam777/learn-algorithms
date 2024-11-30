const addBorder = (arr: string[]): string[] => {
	arr = arr.map((el: string) => {
		let temp = el.split('');
		temp.push('*');
		temp.unshift('*');
		el = temp.join('');

		return el;
	});

	arr.push('*****');
	arr.unshift('*****');

	return arr;
};
console.log(addBorder(['ahmed', 'hossam']));