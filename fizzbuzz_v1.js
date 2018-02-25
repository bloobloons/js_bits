function fizzBuzz(){
	for(var i = 1; i <= 100; i++){
		 if(i % 15 == 0){
		 	console.log("FizzBuzz")
		} else if (i % 3 == 0){
			console.log("Fizz");
		} else if(i % 5 == 0){
			console.log("Buzz");
		} else {
			console.log(i)
		}
	}
}

const fizzBuzzTernary = () => {
	for (let i = 1; i <= 100; i++){
		let fizz = i % 3 ==0, buzz = i % 5 ==0;
		console.log(fizz && buzz ? "FizzBuzz" : fizz ? "Fizz" : buzz ? "buzz" : i);
	}
}
