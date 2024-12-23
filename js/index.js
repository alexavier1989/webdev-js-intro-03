"use strict"

console.log(10 + 14);         // Output: 24
console.log(250 - 50);        // Output: 200
console.log(34 + "1");        // Output: 341
                              // Because the + operator is used for both addition and concatenation.                           

console.log(23 - 34 * 2)       // Output: -45
console.log((23 - 34) * 2);    // Output: -22
  
console.log(13 / 10);          // Output: 1.3
console.log(23 % 2);          // Output: 1
                             // Modulus return the remainder. This operator is extremely useful.

console.log(2 == 2);         // Output: true
console.log(3 == 7);         // Output: false
console.log(3 == "3");       // Output: true
console.log(2 === "2");      // Output: false

console.log(4 || 7);         // Output: 4
console.log(23 || 12);       // Output: 23
console.log(12 && 22);         // Output: false
console.log(12 && 12);         // Output: true


console.log((10+12) && (12 * 2)) // Output: 24
        /*The && operator evaluates two expressions and returns the value of the second expression if both are true. If the first expression is false, returns the value of the first expression.
        In JavaScript, any non-zero number is considered true.
        Since (10 + 12) is 22 (truthy) and (12 * 2) is 24 (truthy), the && operator returns the value of the second expression, which is 24.*/

console.log((10+12) || (12 * 2)) // Output: 22
        /*The || operator evaluates two expressions and returns the value of the first expression if it is true. If the first expression is false, returns the value of the second expression.
        In JavaScript, any non-zero number is considered true.
        Since (10 + 12) is 22 (truthy), the || operator returns the value of the first expression, which is 22.*/