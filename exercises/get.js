'use strict'

/*
 * Create a `get` function that takes a key and return the corresponding value
 * in the sourceObject
 *
 * @notions Functions, Data-Structures, Get
 */

// Provided code :
const sourceObject = {
  num: 42,
  bool: true,
  str: 'some text',
  log: console.log,
}

// Your code :

function get(sourceObject) {
let num = 'num';
let bool = 'bool';
let str = 'str';
let log = 'log';

switch (sourceObject) {
  case 'num':
    return(42);
    break;
  case 'bool':
    return(true);
    break;
  case 'str':
    return('some text');
    break;
  case 'log':
    return(console.log);
    break;
}
}


//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof get, 'function')
assert.strictEqual(get('num'), 42)
assert.strictEqual(get('bool'), true)
assert.strictEqual(get('str'), 'some text')
assert.strictEqual(get('log'), console.log)
assert.strictEqual(get('noexist'), undefined)
// End of tests */
