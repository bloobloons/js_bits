function min(a, b){
	if (a == b){
		return "The two numbers are equal";
	} else if (a < b){
		return a;
	} else {
		return b;

	}
}


const min2 = (a) => (b) => {
	return ((a !=b && a < b) ? a : (b !=a && b < a) ? b : "equal");
}
