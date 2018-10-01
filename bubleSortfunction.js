function bubleSort(array) {
	const length = array.length;

	for (let i = 0; i < length - 1; i++) {
		for (let j = 1; j < length - i; j++) {
			if (array[j-1]>array[j]) {
			var temp = array[j-1];
			array[j-1] = array[j];
			array[j] = temp;
		}
		}
	}

	return array;
}

bubleSort([20,67,87,45,34,2,9,56,56,60,45,324,2223344]);