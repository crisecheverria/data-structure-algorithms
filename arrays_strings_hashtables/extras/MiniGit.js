const crypto = require("crypto"); // For hashing

class MiniGit {
  constructor() {
    this.stagingArea = {}; // Files staged for commit
    this.commitHistory = []; // Array of commits
  }

  // Add a file to the staging area
  add(fileName, content) {
    this.stagingArea[fileName] = content;
    console.log(`Added ${fileName} to staging area.`);
  }

  // Commit the staged files with a message
  commit(message) {
    if (Object.keys(this.stagingArea).length === 0) {
      console.log("No files staged for commit.");
      return;
    }

    // Generate a unique commit ID using hashing
    const hash = this.generateHash(this.stagingArea, message);

    // Create the commit object
    const commit = {
      id: hash,
      message,
      files: { ...this.stagingArea }, // Copy of staged files
      timestamp: new Date().toISOString(),
    };

    // Add the commit to the history
    this.commitHistory.push(commit);

    // Clear the staging area after commit
    this.stagingArea = {};

    console.log(`Committed with ID: ${hash}`);
  }

  // Display the commit history
  log() {
    if (this.commitHistory.length === 0) {
      console.log("No commits found.");
      return;
    }

    console.log("Commit History:");
    this.commitHistory.forEach((commit) => {
      console.log(`ID: ${commit.id}`);
      console.log(`Message: ${commit.message}`);
      console.log(`Timestamp: ${commit.timestamp}`);
      console.log(`Files:" ${Object.keys(commit.files).join(", ")}`);
      console.log("-----------------------------");
    });
  }

  // Generate a simple has foe the commit
  generateHash(files, message) {
    const data = JSON.stringify(files) + message + Date.now();
    return crypto.createHash("sha256").update(data).digest("hex");
  }
}

// Example usage:
const myGit = new MiniGit();

// Add files to the staging area
myGit.add("file1.txt", "Hello, world!");
myGit.add("file2.txt", "This is a test file.");

// Commit the changes
myGit.commit("Initial commit");

// Add another file and commit
myGit.add("file3.txt", "Another file.");
myGit.commit("Added file3.txt");

// View the commit history
myGit.log();
