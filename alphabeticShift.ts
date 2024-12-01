//? given a string replace each character with next character in english

//! to get the char code : char.charCodeAt(0)
let a = 'a';
console.log(a.charCodeAt(0)); // 97

//! to get the char of specific code : String.fromCharCode(code)
let code = 97;
console.log(String.fromCharCode(code)); // a

const alphabeticShift = (str: string) => {
	let arr = str.split('');

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === 'z') {
			arr[i] = 'a';
		} else {
			arr[i] = String.fromCharCode(arr[i].charCodeAt(0) + 1);
		}
	}

	return arr.join('');
};

console.log(alphabeticShift('crazy'));