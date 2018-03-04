// Write a range function that takes two arguments, start and end, 
// and returns an array containing all the numbers from start 
// up to (and including) end.

const countingUp = function(start, end) {
	rangeArray = [];
	if (start >= end){
		console.log("Can't count up to a lower number!")
	} else if {
	for (let i = start; i <= end; i++) {
    rangeArray.push(i)
	}
  }
  return rangeArray;
}


// Modify your range funcition to take an optional 3rd argument that
// indicates the step value used to build up the array. If no argument
// is given, assume it to be 1.

const steppingUP = function(start, end, step=1) {
	rangeArray = [];
	if (start >= end){
		console.log("Can't count steps up to a lower number!")
	} else {
	for (let i = start; i >= end)); i++) {
    rangeArray.push(i)
	}
  }
  return rangeArray;
}