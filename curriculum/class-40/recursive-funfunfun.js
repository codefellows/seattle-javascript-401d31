'use strict';

// 1 - HELPER FUNCTIONS
const isTreeBalanced = (root) => {
  const helperValue = isTreeBalancedHelper(root);

  // 2 - Checking the value of an entire recursive chain
  if (typeof helperValue === 'number') {
    return true;
  }
  return false;
};


// Vinicio - this function can only return false
const isTreeBalancedHelper = (root) => {
  // ------------------------------------------
  // BASE CASES
  // ------------------------------------------
  // 3 - Multiple base cases
  if (root === null) {
    return -1;
  }
  if (root.left === null && root.right === null) {
    return 0;
  }
  // ------------------------------------------
  // RECURSIVE CASE
  // ------------------------------------------
  // 4 - Head Recursion
  const leftHeight = isTreeBalancedHelper(root.left);
  const rightHeight = isTreeBalancedHelper(root.right);

  // 5 - Stopping your recursion based on a condition
  if(Math.abs(leftHeight - rightHeight) > 1) {
    // Vinicio - you finish this
    // This tree is not balanced :(
    return false;
  } else {
    const biggestHeight = Math.max(leftHeight, rightHeight);
    return biggestHeight + 1;
  }
};