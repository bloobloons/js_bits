/* write a function that takes a string as its only arguement
and returns a number indicating how many Bs in the string */

const countBs = (s) => {
	let c = 0;
	for (i == 0; i <=s.length; i++){
		if (s.charAt(i) === 'B') {
			c++;
		}
	}
	console.log(c);
}

/* Next adapt it to take the parameter of the character
to be counted */

const countChar = (s, char) => {
	let c = 0;
	for (i == 0; i <=s.length; i++){
		if (s.charAt(i) === char) {
			c++;
		}
	}
	console.log(c);
}