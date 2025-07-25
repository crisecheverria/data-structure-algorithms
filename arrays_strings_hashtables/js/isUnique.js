const isUnique = (string) => {
  if (string.length > 128) {
    return false; // More characters than ASCII set
  }

  if (typeof string !== "string") {
    return false; // Input is not a string
  }

  const charSet = new Set();
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (charSet.has(char)) {
      return false; // Found a duplicate character
    }
    charSet.add(char);
  }

  return true;
};
