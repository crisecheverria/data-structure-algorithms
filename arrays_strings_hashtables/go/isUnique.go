package main

import "fmt"

func IsUnique(input string) bool {
	if len(input) > 256 {
		return false
	}

	// Crete a map to track characters
	charSet := make(map[rune]bool)

	// Iterate through each character in the string
	for _, char := range input {
		if charSet[char] {
			return false // If character already exists, return false
		}
		charSet[char] = true // Mark character as seen
	}

	return true
}

func main() {
	fmt.Println("=== IsUnique Tests ===")
	fmt.Printf("IsUnique(\"hello\"): %t\n", IsUnique("hello"))         // false
	fmt.Printf("IsUnique(\"world\"): %t\n", IsUnique("world"))         // true
	fmt.Printf("IsUnique(\"abcdef\"): %t\n", IsUnique("abcdef"))       // true
	fmt.Printf("IsUnique(\"programming\"): %t\n", IsUnique("programming")) // false
}
