// DESCRIPTION: Write a function that returns only the decimal part of the given number.

// You only have to handle valid numbers, not Infinity, NaN, or similar. 
// Always return a positive decimal part.

// SOLUTION:
function getDecimal(n) {
	return Math.abs(n%1);
}

