function subarraySum(arr, target) {
    // Map to store cumulative sum up to each index
    const sumMap = new Map();
    // Initial cumulative sum is 0
    let currentSum = 0;

    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
        // Add current element to cumulative sum
        currentSum += arr[i];

        // Check if current cumulative sum equals the target
        if (currentSum === target) {
            return true;
        }

        // Check if there exists a subarray with the sum equal to target
        // (currentSum - target) indicates the sum of a previous subarray
        if (sumMap.has(currentSum - target)) {
            return true;
        }

        // Store the current cumulative sum in the map
        sumMap.set(currentSum, i);
    }

    // If no subarray is found, return false
    return false;
}

// Example usage:
const arr = [4, 2, 7, 1, 9, 5];
const target = 17;
console.log(subarraySum(arr, target));  // Output: true