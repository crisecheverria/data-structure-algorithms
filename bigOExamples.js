const reverseArray = (array) => {
  for (let i = 0; i < array.length / 2; i++) {
    let reversePosition = array.length - 1 - i;
    let tmpVal = array[i];
    array[i] = array[reversePosition];
    array[reversePosition] = tmpVal;
  }
};

// Example usage:
// [1,2,3,4,5] => [5,4,3,2,1]
// First iteration: i = 0, reversePosition = 4
// tmpVal = 1, array[0] = 5, array[4] = 1
// BigO: O(n)

const printUnorderedPairs = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      console.log(`(${array[i]}, ${array[j]})`);
    }
  }
};

// Example usage:
// Give me all unordered pairs of [1, 2, 3] => (1,2) (1,3) (2,3)
// BigO: O(n^2)

const product = (a, b) => {
  let result = 0;
  for (let i = 0; i < b; i++) {
    result += a;
  }
  return result;
};

// Example usage:
// 2 * 3 => 2 + 2 + 2 = 6
// BigO: O(b)

const printPairsTwoArrays = (arrayA, arrayB) => {
  for (let i = 0; i < arrayA.length; i++) {
    for (let j = 0; j < arrayB.length; j++) {
      console.log(`(${arrayA[i]}, ${arrayB[j]})`);
    }
  }
};

// Example usage:
// arrayA = [1, 2], arrayB = [3, 4] => (1,3) (1, 4) (2, 3) (2, 4)
// BugO: O(A * B) where A = arrayA.length, B = arrayB.length
