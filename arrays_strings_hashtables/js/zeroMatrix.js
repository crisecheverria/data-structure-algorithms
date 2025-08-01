// Given a matrix, if an element is 0, set its entire row and column to 0.
// Example: Input: 2 1 3 0 2
//                 7 4 1 3 8
//                 4 0 1 2 1
//                 9 3 4 1 9
//
//         Output: 0 0 0 0 0
//                 7 0 1 0 8
//                 0 0 0 0 0
//                 9 0 4 0 9
// Temporal complexity: O(n * m)
// Space complexity: O(n + m)

const zeroMatrix = (matrix) => {
	if (!matrix || matrix.length === 0) return matrix;

	const firstRowZero = matrix[0].some(value => value === 0);
	const firstColZero = matrix.some(row => row[0] === 0);

	// Mark zeros using first row and column as markers
	for (let i = 1; i < matrix.length; i++) {
		for (let j = 1; j < matrix[0].length; j++) {
			if (matrix[i][j] === 0) {
				matrix[i][0] = 0;
				matrix[0][j] = 0;
			}
		}
	}

	// Set rows to zero based on first column markers
	for (let i = 1; i < matrix.length; i++) {
		if (matrix[i][0] === 0) {
			setRowToZero(matrix, i);
		}
	}

	// Set columns to zero based on first row markers
	for (let j = 1; j < matrix[0].length; j++) {
		if (matrix[0][j] === 0) {
			setColToZero(matrix, j);
		}
	}

	// Handle first row
	if (firstRowZero) {
		setRowToZero(matrix, 0);
	}

	// Handle first column
	if (firstColZero) {
		setColToZero(matrix, 0);
	}

	return matrix;
}

const setRowToZero = (matrix, row) => {
	for (let j = 0; j < matrix[0].length; j++) {
		matrix[row][j] = 0;
	}
}

const setColToZero = (matrix, col) => {
	for (let i = 0; i < matrix.length; i++) {
		matrix[i][col] = 0;
	}
}

// Test with the example from comments
const testMatrix = [
	[2, 1, 3, 0, 2],
	[7, 4, 1, 3, 8],
	[4, 0, 1, 2, 1],
	[9, 3, 4, 1, 9]
];

console.log("Input:");
console.table(testMatrix);

const result = zeroMatrix(testMatrix);

console.log("Output:");
console.table(result);
