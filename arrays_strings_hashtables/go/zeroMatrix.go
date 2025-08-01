// Given a matrix, if an element is 0, set its entire row and column to 0.
// Example: Input:
//
//	         2 1 3 0 2
//		        7 4 1 3 8
//		        4 0 1 2 1
//		        9 3 4 1 9
//
//		Output: 0 0 0 0 0
//		        7 0 1 0 8
//		        0 0 0 0 0
//		        9 0 4 0 9
//
// Temporal complexity: O(n * m)
// Space complexity: O(n + m)
package main

import "fmt"

func zeroMatrix(matrix [][]int) [][]int {
	if len(matrix) == 0 || len(matrix[0]) == 0 {
		return matrix
	}

	rows := make([]bool, len(matrix))
	cols := make([]bool, len(matrix[0]))

	// First pass: find all zeros
	for i := 0; i < len(matrix); i++ {
		for j := 0; j < len(matrix[0]); j++ {
			if matrix[i][j] == 0 {
				rows[i] = true
				cols[j] = true
			}
		}
	}

	// Second pass: set rows and columns to zero
	for i := 0; i < len(matrix); i++ {
		for j := 0; j < len(matrix[0]); j++ {
			if rows[i] || cols[j] {
				matrix[i][j] = 0
			}
		}
	}

	return matrix
}

func main() {
	matrix := [][]int{
		{2, 1, 3, 0, 2},
		{7, 4, 1, 3, 8},
		{4, 0, 1, 2, 1},
		{9, 3, 4, 1, 9},
	}

	result := zeroMatrix(matrix)

	for _, row := range result {
		fmt.Println(row)
	}
}
