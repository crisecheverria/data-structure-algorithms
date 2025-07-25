/*
 Given an array of integers `nums` and an integer `target`,
 return indices of the two numbers such that they add up to `target`.

 Example:
 Input: nums = [2,7,11,15], target = 9
 Output: [0,1]

 Example:
 Input: nums = [3,2,4], target = 60
 Output: null
 */
const twoSum = (nums, target) => {
  if (!Array.isArray(nums) || nums.length < 2) {
    return null;
  }

  const compMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (compMap.has(complement)) {
      return [compMap.get(complement), i];
    }
    compMap.set(nums[i], i);
  }
};
