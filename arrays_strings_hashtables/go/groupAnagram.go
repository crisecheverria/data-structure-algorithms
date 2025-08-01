/*
An anagram is a word or phrase formed by rearranging the letters of a different word 
or phrase, typically using all the original letters exactly once. 

For example, "listen" is an anagram of "silent".

Given an array of strings, group the anagrams together.
Example:
Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
Output: [["eat","tea","ate"],["tan","nat"],["bat"]]
*/

package main

import (
	"fmt"
	"strconv"
	"strings"
)

func groupAnagrams(strs []string) [][]string {
	// Step 1: Helper function to create frequency signature
	getFrequencySignature := func(str string) string {
		// Create array of 26 zeros for a-z
		freq := make([]int, 26)
		
		// Count frequency of each character
		for _, char := range str {
			index := int(char - 'a')
			freq[index]++
		}
		
		// Convert to string to use as hash key
		var parts []string
		for _, count := range freq {
			parts = append(parts, strconv.Itoa(count))
		}
		return strings.Join(parts, ",")
	}
	
	// Step 2: Create hash map to group words by frequency signature
	anagramGroups := make(map[string][]string)
	
	// Process each string
	for _, str := range strs {
		signature := getFrequencySignature(str)
		
		// Add to existing group or create new group
		anagramGroups[signature] = append(anagramGroups[signature], str)
	}
	
	// Step 3: Convert hash map values to result slice
	var result [][]string
	for _, group := range anagramGroups {
		result = append(result, group)
	}
	
	return result
}

func main() {
	// Test cases
	fmt.Println("Test 1:", groupAnagrams([]string{"eat", "tea", "tan", "ate", "nat", "bat"}))
	// Expected: [["eat","tea","ate"],["tan","nat"],["bat"]]
	
	fmt.Println("Test 2:", groupAnagrams([]string{""}))
	// Expected: [[""]]
	
	fmt.Println("Test 3:", groupAnagrams([]string{"a"}))
	// Expected: [["a"]]
}