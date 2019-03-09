'use strict'

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */
 function keepFirst (strFirst) {
return strFirst.slice(0,2);
}

function keepLast (strLast) {
return strLast.slice(-2);
}

function keepFirstLast (strFirstLast) {
return strFirstLast.slice(2,4);
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(keepFirst('Bonjour petit homme'), 'Bo')
assert.strictEqual(keepLast('Bonjour petit homme'), 'me')
assert.strictEqual(keepFirstLast("Bonjour petit homme"), 'nj')
// End of tests */
