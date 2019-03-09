'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */
function jadenCase(str) {
let arrStr = str.split(" ");
for (let i = 0; i < arrStr.length; i++) {
arrStr[i] = arrStr[i][0].toUpperCase() + arrStr[i].slice(1);
}
return arrStr.join(" ");
}



//* Begin of tests
const assert = require('assert')

assert.strictEqual(jadenCase('How are you ?'), 'How Are You ?')
assert.strictEqual(jadenCase("How can mirrors be real if our eyes aren't real"), "How Can Mirrors Be Real If Our Eyes Aren't Real")


// End of tests */
