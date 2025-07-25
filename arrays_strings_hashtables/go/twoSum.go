package main

import "fmt"

func TwoSum(nums []int, target int) []int {
	if len(nums) < 2 {
		return []int{}
	}

	complementMap := make(map[int]int)
	for i, num := range nums {
		complement := target - num
		if index, found := complementMap[complement]; found {
			return []int{index, i} // Return the indices of the two numbers
		}
		complementMap[num] = i // Store the index of the current number
	}

	return []int{} // Return an empty slice if no solution is found
}

func main() {
	fmt.Println("=== TwoSum Tests ===")
	fmt.Printf("TwoSum([2,7,11,15], 9): %v\n", TwoSum([]int{2, 7, 11, 15}, 9)) // [0 1]
	fmt.Printf("TwoSum([3,2,4], 6): %v\n", TwoSum([]int{3, 2, 4}, 6))          // [1 2]
	fmt.Printf("TwoSum([3,3], 6): %v\n", TwoSum([]int{3, 3}, 6))               // [0 1]
	fmt.Printf("TwoSum([1,2,3], 7): %v\n", TwoSum([]int{1, 2, 3}, 7))          // []
}
