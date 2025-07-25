package main

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
