'use strict'

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

function cutFirst (strFirst) {
return strFirst.slice(2);
}

function cutLast (strLast) {
return strLast.slice(0,-2);
}

function cutFirstLast(strFirstLast) {
return strFirstLast.slice(2,-2);
}

//* Begin of tests
const assert = require('assert')
assert.strictEqual(cutFirst('Bonjour petit homme'), 'njour petit homme')
assert.strictEqual(cutLast('Bonjour petit homme'), 'Bonjour petit hom')
assert.strictEqual(cutFirstLast("Bonjour petit homme"), 'njour petit hom')

// End of tests */
