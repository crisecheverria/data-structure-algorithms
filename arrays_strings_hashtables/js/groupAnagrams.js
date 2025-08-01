/*
An anagram is a word or phrase formed by rearranging the letters of a different word 
or phrase, typically using all the original letters exactly once. 

For example, "listen" is an anagram of "silent".

Given an array of strings, group the anagrams together.
Example:
Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
Output: [["eat","tea","ate"],["tan","nat"],["bat"]]
*/

const groupAnagrams = (strs) => {
    // Step 1: Helper function to create frequency signature
    const getFrequencySignature = (str) => {
        // Create array of 26 zeros for a-z
        const freq = new Array(26).fill(0);
        
        // Count frequency of each character
        for (let char of str) {
            const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
            freq[index]++;
        }
        
        // Convert to string to use as hash key
        return freq.join(',');
    };
    
    // Step 2: Create hash map to group words by frequency signature
    const anagramGroups = new Map();
    
    // Process each string
    for (let str of strs) {
        const signature = getFrequencySignature(str);
        
        // If signature exists, add to existing group
        if (anagramGroups.has(signature)) {
            anagramGroups.get(signature).push(str);
        } else {
            // Create new group with this string
            anagramGroups.set(signature, [str]);
        }
    }
    
    // Step 3: Convert hash map values to result array
    return Array.from(anagramGroups.values());
};

// Test cases
console.log('Test 1:', groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// Expected: [["eat","tea","ate"],["tan","nat"],["bat"]]

console.log('Test 2:', groupAnagrams([""]));
// Expected: [[""]]

console.log('Test 3:', groupAnagrams(["a"]));
// Expected: [["a"]]
