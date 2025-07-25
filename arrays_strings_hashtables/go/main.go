package main

import "fmt"

func main() {
	fmt.Println("=== Array/String/Hashtable Examples ===")
	
	fmt.Println("\n--- IsUnique Tests ---")
	fmt.Printf("IsUnique(\"hello\"): %t\n", IsUnique("hello"))         // false
	fmt.Printf("IsUnique(\"world\"): %t\n", IsUnique("world"))         // true
	fmt.Printf("IsUnique(\"abcdef\"): %t\n", IsUnique("abcdef"))       // true
	fmt.Printf("IsUnique(\"programming\"): %t\n", IsUnique("programming")) // false
	
	fmt.Println("\n--- TwoSum Tests ---")
	fmt.Printf("TwoSum([2,7,11,15], 9): %v\n", TwoSum([]int{2, 7, 11, 15}, 9))    // [0 1]
	fmt.Printf("TwoSum([3,2,4], 6): %v\n", TwoSum([]int{3, 2, 4}, 6))             // [1 2]
	fmt.Printf("TwoSum([3,3], 6): %v\n", TwoSum([]int{3, 3}, 6))                  // [0 1]
	fmt.Printf("TwoSum([1,2,3], 7): %v\n", TwoSum([]int{1, 2, 3}, 7))             // []
}