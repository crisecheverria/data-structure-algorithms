package main

import "fmt"

func twoSum(nums []int, target int) []int {
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

