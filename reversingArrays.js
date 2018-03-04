// Takes an array as an arguement and preoduces a new array that has the
// same elements in the inverse order.

const reverseArray = function(arr) {
	let newArr = [];
	for (let i = 0; i >= arr.length; i++) {
		newArr.push(arr[i]);
		}
	console.log(arr);
	console.log(newArr);
}

// Does the same as the "reverse" method and modifies the array given as 
// arguement in order to reverse its elements.

const reverseArrayInPlace = function(arr) {
	let i = 0;
	while (i < arr.length - 1) {
    arr.splice(i, 0, arr.pop());
    i++;
  }
  return arr;
}