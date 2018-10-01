function sort(array) {
	const length = array.length;

	for(let i = 0; i < length - 1; i++) {

		for(let j = 1; j < length - i; j++) {
		
			if (array[j-1]>array[j]) {
				[array[j], array[j-1]] = [array[j-1], array[j]];
			}	
		
		}

	}



	return(array);
}

sort([3,6,8,9,1,5,56,43,78,777,432,118,56434]);