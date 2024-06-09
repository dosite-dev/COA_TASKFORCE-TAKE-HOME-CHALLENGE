function transformString(str) {
    const length = str.length;

    // Check if length is divisible by 15
    if (length % 15 === 0) {
        // Reverse the string
        let reversedString = str.split('').reverse().join('');
        // Convert each character to its ASCII code and join with spaces
        let asciiTransformed = reversedString.split('').map(char => char.charCodeAt(0)).join(' ');
        return asciiTransformed;
    }
    // Check if length is divisible by 3
    else if (length % 3 === 0) {
        // Reverse the string
        return str.split('').reverse().join('');
    }
    // Check if length is divisible by 5
    else if (length % 5 === 0) {
        // Convert each character to its ASCII code and join with spaces
        return str.split('').map(char => char.charCodeAt(0)).join(' ');
    }
    // If none of the above conditions are met, return the original string
    else {
        return str;
    }
}

// Test examples
console.log(transformString("Hamburger"));        // Output: "regrubmaH"
console.log(transformString("Pizza"));            // Output: "80 105 122 122 97"
console.log(transformString("Chocolate Chip Cookie")); // Output: "eikooCpihCetalocohC"
