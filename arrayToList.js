const arrayToList = function(arr) {
	let listicle = {};
		for (var i = arr.length - 1; i >= 0; i--)
    		listicle = {value: arr[i], rest: listicle};
  	return listicle;
}

const listToArray = function (list) {
	while(list !== null){ 
    	arr.push(list.value); 
	    list = list.rest;
 	}
    return arr;
}