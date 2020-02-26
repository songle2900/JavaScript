const arr = [0, 1, 1, 3];

const zerosBack = arr => {
	
	// Take all zeros from the array
	const zero = arr.filter(e => e === 0);

	// Take all none-zero elements from the array
	const noneZero = arr.filter(e => e !== 0);

	// Iterate zero array by using forOf
	for (let z of zero) {
		
		// Insert zero in the middle of noneZero elements by splice() method
		noneZero.splice(Math.floor(noneZero.length / 2), 0, zero[z]);
	};
	
	// Print length of arr
	console.log(arr.length);

	// Print noneZero elements
	const output = () => {
		for (let i of noneZero) {
			console.log(typeof(i));
		}
	};

	return output();
};

zerosBack(arr);